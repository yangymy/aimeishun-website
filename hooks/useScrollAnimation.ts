"use client";

import { useState, useEffect, useRef, RefObject } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface ScrollAnimationReturn {
  ref: RefObject<HTMLElement | null>;
  isInView: boolean;
  scrollY: number;
  scrollDirection: "up" | "down" | null;
  scrollProgress: number;
}

export function useScrollAnimation(
  options: ScrollAnimationOptions = {}
): ScrollAnimationReturn {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = false } = options;
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (triggerOnce && hasTriggered.current) return;
        
        setIsInView(entry.isIntersecting);
        
        if (entry.isIntersecting && triggerOnce) {
          hasTriggered.current = true;
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";
      
      setScrollDirection(direction);
      setScrollY(currentScrollY);
      
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? currentScrollY / docHeight : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, isInView, scrollY, scrollDirection, scrollProgress };
}

interface ScrollProgressOptions {
  start?: number;
  end?: number;
}

export function useScrollProgress(
  options: ScrollProgressOptions = {}
): { ref: RefObject<HTMLElement | null>; progress: number } {
  const { start = 0, end = 1 } = options;
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      const scrollRange = windowHeight + elementHeight;
      const scrolled = windowHeight - elementTop;
      
      const rawProgress = scrolled / scrollRange;
      const clampedProgress = Math.min(Math.max(rawProgress, start), end);
      
      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [start, end]);

  return { ref, progress };
}

interface NavbarScrollOptions {
  threshold?: number;
}

interface NavbarScrollReturn {
  isScrolled: boolean;
  isHidden: boolean;
  scrollY: number;
}

export function useNavbarScroll(
  options: NavbarScrollOptions = {}
): NavbarScrollReturn {
  const { threshold = 50 } = options;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > threshold);
      setScrollY(currentScrollY);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isScrolled, isHidden, scrollY };
}

interface ParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
}

export function useParallax(
  options: ParallaxOptions = {}
): { ref: RefObject<HTMLElement | null>; offset: number } {
  const { speed = 0.5, direction = "up" } = options;
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distance = elementCenter - viewportCenter;
      
      const parallaxOffset = direction === "up" 
        ? distance * speed * -1 
        : distance * speed;
      
      setOffset(parallaxOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return { ref, offset };
}

interface StaggerAnimationOptions {
  itemCount: number;
  staggerDelay?: number;
  baseDelay?: number;
}

interface StaggerAnimationReturn {
  getDelay: (index: number) => number;
  getDuration: (index: number) => number;
}

export function useStaggerAnimation(
  options: StaggerAnimationOptions
): StaggerAnimationReturn {
  const { itemCount, staggerDelay = 0.1, baseDelay = 0 } = options;

  const getDelay = (index: number): number => {
    return baseDelay + index * staggerDelay;
  };

  const getDuration = (index: number): number => {
    return 0.5 + (itemCount - index) * 0.05;
  };

  return { getDelay, getDuration };
}

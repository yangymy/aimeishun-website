"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";
import { useNavbarScroll } from "@/hooks/useScrollAnimation";

interface AnimatedNavbarProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
}

export function AnimatedNavbar({
  children,
  className = "",
  threshold = 50,
}: AnimatedNavbarProps) {
  const { isScrolled, scrollY } = useNavbarScroll({ threshold });
  const { scrollYProgress } = useScroll();
  
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["rgba(250, 248, 246, 0.7)", "rgba(250, 248, 246, 0.95)"]
  );
  
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["0 0 0 rgba(0,0,0,0)", "0 4px 20px rgba(0,0,0,0.08)"]
  );

  const borderOpacity = useTransform(
    scrollYProgress,
    [0, 0.05],
    [0, 1]
  );

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${className}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor: isScrolled ? backgroundColor : "rgba(250, 248, 246, 0.7)",
        boxShadow: isScrolled ? boxShadow : "none",
      }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-[#E8E2DB]"
        style={{ opacity: borderOpacity }}
      />
      
      {children}
    </motion.header>
  );
}

interface ScrollProgressBarProps {
  className?: string;
  color?: string;
  height?: number;
}

export function ScrollProgressBar({
  className = "",
  color = "#F37021",
  height = 3,
}: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 z-[60] origin-left ${className}`}
      style={{
        scaleX,
        opacity,
        height,
        backgroundColor: color,
      }}
    />
  );
}

interface ScrollIndicatorProps {
  className?: string;
}

export function ScrollIndicator({ className = "" }: ScrollIndicatorProps) {
  return (
    <motion.div
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.div
        className="w-6 h-10 border-2 border-[#4A4A48]/30 rounded-full flex justify-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="w-1.5 h-3 bg-[#F37021] rounded-full mt-2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      <motion.span
        className="block text-xs text-[#6A6A68] mt-2 text-center"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        向下滚动
      </motion.span>
    </motion.div>
  );
}

interface FloatingNavProps {
  children: ReactNode;
  className?: string;
}

export function FloatingNav({ children, className = "" }: FloatingNavProps) {
  const { isScrolled } = useNavbarScroll({ threshold: 100 });

  return (
    <motion.nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 ${className}`}
      initial={{ y: -100, x: "-50%" }}
      animate={{
        y: isScrolled ? 20 : -100,
        x: "-50%",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="px-6 py-3 bg-white/90 backdrop-blur-lg rounded-full shadow-lg border border-[#E8E2DB]"
        whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}
      >
        {children}
      </motion.div>
    </motion.nav>
  );
}

interface BackToTopProps {
  className?: string;
  threshold?: number;
}

export function BackToTop({ className = "", threshold = 400 }: BackToTopProps) {
  const { scrollY } = useNavbarScroll({ threshold });
  const isVisible = scrollY > threshold;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#F37021] text-white rounded-full shadow-lg flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : 20,
      }}
      whileHover={{ scale: 1.1, boxShadow: "0 8px 25px rgba(243, 112, 33, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      aria-label="返回顶部"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  );
}

"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

type AnimationDirection = "up" | "down" | "left" | "right" | "none";
type AnimationType = "fade" | "slide" | "scale" | "bounce";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: AnimationDirection;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
  stagger?: number;
}

const getInitialState = (direction: AnimationDirection, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    case "none":
    default:
      return {};
  }
};

const getVariants = (
  direction: AnimationDirection,
  type: AnimationType,
  distance: number
): Variants => {
  const initialState = getInitialState(direction, distance);
  
  const baseVariants: Variants = {
    hidden: {
      opacity: 0,
      ...initialState,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };

  switch (type) {
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.8, ...initialState },
        visible: { opacity: 1, scale: 1, x: 0, y: 0 },
      };
    case "bounce":
      return {
        hidden: { opacity: 0, ...initialState },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
          },
        },
      };
    case "slide":
    case "fade":
    default:
      return baseVariants;
  }
};

export function ScrollReveal({
  children,
  direction = "up",
  type = "fade",
  delay = 0,
  duration = 0.6,
  distance = 40,
  once = true,
  className = "",
  threshold = 0.1,
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold 
  });

  const variants = getVariants(direction, type, distance);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: stagger,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  threshold?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
  threshold = 0.1,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: AnimationDirection;
  distance?: number;
  duration?: number;
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
  distance = 30,
  duration = 0.5,
}: StaggerItemProps) {
  const initialState = getInitialState(direction, distance);

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...initialState,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
  speed?: number;
}

export function Parallax({
  children,
  offset = 50,
  className = "",
  speed = 0.5,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8 * speed,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

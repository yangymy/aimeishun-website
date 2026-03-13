"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  start?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  once?: boolean;
  separator?: string;
  decimals?: number;
  delay?: number;
}

export function CountUp({
  end,
  duration = 2,
  start = 0,
  suffix = "",
  prefix = "",
  className = "",
  once = true,
  separator = "",
  decimals = 0,
  delay = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(start, {
    duration: duration * 1000,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (latest) => {
    const num = Number(latest.toFixed(decimals));
    if (separator) {
      return num.toLocaleString("zh-CN");
    }
    return num;
  });

  const [display, setDisplay] = useState(start);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        springValue.set(end);
        setHasAnimated(true);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated, springValue, end, delay]);

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (latest) => {
      setDisplay(Number(latest));
    });
    return () => unsubscribe();
  }, [displayValue]);

  const formatNumber = (num: number) => {
    if (separator) {
      return Math.round(num).toLocaleString("zh-CN");
    }
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return Math.round(num);
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}
      {formatNumber(display)}
      {suffix}
    </motion.span>
  );
}

interface AnimatedCounterProps {
  target: number;
  className?: string;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({
  target,
  className = "",
  suffix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString("zh-CN")}
      {suffix}
    </span>
  );
}

interface RollingNumberProps {
  value: number;
  className?: string;
  suffix?: string;
}

export function RollingNumber({
  value,
  className = "",
  suffix = "",
}: RollingNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const digits = value.toString().split("");

  return (
    <div ref={ref} className={`inline-flex items-baseline ${className}`}>
      {digits.map((digit, index) => (
        <motion.span
          key={`${index}-${digit}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {digit}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: digits.length * 0.1 }}
      >
        {suffix}
      </motion.span>
    </div>
  );
}

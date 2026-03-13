"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, ReactNode, MouseEvent } from "react";

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  glowOnHover?: boolean;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function RippleButton({
  children,
  className = "",
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  glowOnHover = true,
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  const baseStyles = "relative overflow-hidden font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantStyles = {
    primary: "bg-[#F37021] text-white hover:bg-[#D65A0F]",
    secondary: "bg-[#D4A574] text-white hover:bg-[#B88A5A]",
    outline: "border-2 border-[#F37021] text-[#F37021] hover:bg-[#F37021]/10",
    ghost: "text-[#F37021] hover:bg-[#F37021]/10",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl",
  };

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      whileHover={
        glowOnHover && variant === "primary"
          ? {
              boxShadow: "0 0 25px rgba(243, 112, 33, 0.5)",
            }
          : {}
      }
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute rounded-full bg-white/30 pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 10,
              height: 10,
              marginLeft: -5,
              marginTop: -5,
            }}
          />
        ))}
      </AnimatePresence>
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  glowColor?: string;
}

export function GlowButton({
  children,
  className = "",
  onClick,
  glowColor = "rgba(243, 112, 33, 0.6)",
}: GlowButtonProps) {
  return (
    <motion.button
      className={`relative px-8 py-4 bg-[#F37021] text-white font-medium rounded-xl overflow-hidden ${className}`}
      onClick={onClick}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

interface AnimatedIconButtonProps {
  children: ReactNode;
  icon: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function AnimatedIconButton({
  children,
  icon,
  className = "",
  onClick,
}: AnimatedIconButtonProps) {
  return (
    <motion.button
      className={`group inline-flex items-center gap-2 px-6 py-3 bg-[#F37021] text-white font-medium rounded-lg ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>{children}</span>
      <motion.span
        className="inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {icon}
      </motion.span>
    </motion.button>
  );
}

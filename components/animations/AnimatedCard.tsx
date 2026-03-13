"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  lift?: number;
  glowColor?: string;
}

export function HoverCard({
  children,
  className = "",
  scale = 1.02,
  lift = -8,
  glowColor = "rgba(243, 112, 33, 0.15)",
}: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        y: lift,
        boxShadow: `0 20px 40px ${glowColor}`,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}

interface ProductCardProps {
  children: ReactNode;
  className?: string;
  imageUrl?: string;
  badge?: string;
}

export function AnimatedProductCard({
  children,
  className = "",
  imageUrl,
  badge,
}: ProductCardProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl bg-white ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      {imageUrl && (
        <div className="relative overflow-hidden aspect-[4/3]">
          <motion.img
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
      
      {badge && (
        <motion.div
          className="absolute top-4 left-4 z-10"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="px-3 py-1 text-xs font-medium bg-[#F37021] text-white rounded-full">
            {badge}
          </span>
        </motion.div>
      )}
      
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 2px rgba(243, 112, 33, 0.3)",
        }}
      />
      
      {children}
    </motion.div>
  );
}

interface CaseCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCaseCard({
  children,
  className = "",
  delay = 0,
}: CaseCardProps) {
  return (
    <motion.div
      className={`group bg-[#FAF8F6] rounded-2xl p-6 md:p-8 border-l-4 border-[#F37021] ${className}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px rgba(243, 112, 33, 0.1)",
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
}

interface TestimonialCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function AnimatedTestimonialCard({
  children,
  className = "",
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      className={`bg-white rounded-2xl p-6 md:p-8 shadow-sm ${className}`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.08)",
        transition: { duration: 0.25 },
      }}
    >
      {children}
    </motion.div>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

export function AnimatedFeatureCard({
  icon,
  title,
  description,
  className = "",
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      className={`group p-6 bg-white rounded-xl border border-[#E8E2DB] hover:border-[#F37021]/30 transition-colors ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -4,
        boxShadow: "0 8px 25px rgba(243, 112, 33, 0.08)",
      }}
    >
      <motion.div
        className="w-12 h-12 rounded-lg bg-[#F37021]/10 flex items-center justify-center mb-4 text-[#F37021]"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {icon}
      </motion.div>
      
      <h3 className="font-serif text-lg font-semibold text-[#4A4A48] mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-[#6A6A68] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

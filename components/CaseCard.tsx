"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Sparkles, TrendingUp, Eye, ArrowRight } from "lucide-react";
import { useState } from "react";

export interface Case {
  id: number;
  name: string;
  age: number;
  problem: string;
  solution: string;
  result: string;
  duration: string;
  category: "pigmentation" | "sensitive" | "agent";
  beforeImage?: string;
  afterImage?: string;
}

interface CaseCardProps {
  caseItem: Case;
  index?: number;
}

const categoryLabels: Record<string, string> = {
  pigmentation: "祛斑案例",
  sensitive: "敏感肌案例",
  agent: "代理成长",
};

const categoryColors: Record<string, string> = {
  pigmentation: "bg-[#D4A574]/20 text-[#B88A5A] border-[#D4A574]/30",
  sensitive: "bg-[#F37021]/20 text-[#D65A0F] border-[#F37021]/30",
  agent: "bg-[#FF8C42]/20 text-[#F37021] border-[#FF8C42]/30",
};

export function CaseCard({ caseItem, index = 0 }: CaseCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showAfter, setShowAfter] = useState(false);
  const isAgent = caseItem.category === "agent";
  const categoryColor = categoryColors[caseItem.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
        layout: { duration: 0.4 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowAfter(false);
      }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500"
    >
      {/* Before/After Image Section */}
      <div className="relative h-56 overflow-hidden">
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isAgent
              ? "bg-gradient-to-br from-[#D4A574]/20 via-[#F5F1ED] to-[#F37021]/20"
              : "bg-gradient-to-br from-[#F37021]/10 via-[#F5F1ED] to-[#FF8C42]/10"
          }`}
        />

        {/* Before Image */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: showAfter ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        >
          {caseItem.beforeImage ? (
            <img
              src={caseItem.beforeImage}
              alt={`${caseItem.name} 改善前`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                {isAgent ? (
                  <TrendingUp className="w-10 h-10 text-[#D4A574]/60" />
                ) : (
                  <Sparkles className="w-10 h-10 text-[#F37021]/60" />
                )}
              </div>
              <p className="text-sm text-[#8A8A88] font-medium">Before</p>
              <p className="text-xs text-[#8A8A88]/70 mt-1">改善前</p>
            </div>
          )}
        </motion.div>

        {/* After Image */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F37021]/5 to-[#D4A574]/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: showAfter ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {caseItem.afterImage ? (
            <img
              src={caseItem.afterImage}
              alt={`${caseItem.name} 改善后`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-[#F37021]/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Sparkles className="w-10 h-10 text-[#F37021]" />
              </div>
              <p className="text-sm text-[#F37021] font-medium">After</p>
              <p className="text-xs text-[#F37021]/70 mt-1">改善后</p>
            </div>
          )}
        </motion.div>

        {/* Category Badge */}
        <Badge
          className={`absolute top-4 left-4 border backdrop-blur-sm ${categoryColor}`}
        >
          {categoryLabels[caseItem.category]}
        </Badge>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs text-[#8A8A88] shadow-sm">
          <Clock className="w-3 h-3" />
          <span>{caseItem.duration}</span>
        </div>

        {/* Image Toggle on Hover */}
        {!isAgent && (
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setShowAfter(true)}
            onMouseLeave={() => setShowAfter(false)}
          >
            <Eye className="w-4 h-4 text-[#F37021]" />
            <span className="text-sm text-[#4A4A48] font-medium">
              {showAfter ? "查看改善前" : "查看改善后"}
            </span>
          </motion.div>
        )}

        {/* Hover Overlay for Agent */}
        {isAgent && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#F37021]/90 via-[#F37021]/40 to-transparent flex items-end justify-center pb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="flex items-center gap-2 px-6 py-2.5 bg-white rounded-full text-[#F37021] font-medium text-sm shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>查看详情</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F37021]/20 to-[#D4A574]/20 flex items-center justify-center">
            <User className="w-6 h-6 text-[#F37021]" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#4A4A48]">
              {caseItem.name}
            </h3>
            {!isAgent && (
              <p className="text-sm text-[#8A8A88]">{caseItem.age}岁</p>
            )}
          </div>
        </div>

        {/* Problem */}
        <div className="mb-4">
          <p className="text-xs text-[#8A8A88] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]/50" />
            {isAgent ? "创业背景" : "肌肤问题"}
          </p>
          <p className="text-sm text-[#6A6A68] leading-relaxed line-clamp-2">
            {caseItem.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-4">
          <p className="text-xs text-[#8A8A88] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A574]" />
            {isAgent ? "解决方案" : "护理方案"}
          </p>
          <p className="text-sm text-[#6A6A68] leading-relaxed line-clamp-2">
            {caseItem.solution}
          </p>
        </div>

        {/* Result - Highlighted */}
        <motion.div
          className="relative bg-gradient-to-r from-[#F37021]/10 via-[#F37021]/5 to-transparent rounded-xl p-4 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#F37021]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <p className="text-xs text-[#8A8A88] uppercase tracking-wider mb-1.5">
            {isAgent ? "成长成果" : "改善效果"}
          </p>
          <p className="text-lg font-semibold text-[#F37021] font-serif relative z-10">
            {caseItem.result}
          </p>
        </motion.div>
      </div>

      {/* Hover Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: "inset 0 0 0 2px rgba(243, 112, 33, 0.3)",
        }}
      />
    </motion.div>
  );
}

// Stat Card Component for Statistics Section
interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  description: string;
  index?: number;
}

export function StatCard({
  value,
  suffix = "",
  label,
  description,
  index = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Number Display */}
      <div className="mb-4">
        <span className="text-5xl md:text-6xl font-serif font-bold text-[#F37021]">
          {value}
        </span>
        <span className="text-3xl md:text-4xl font-serif font-bold text-[#F37021]">
          {suffix}
        </span>
      </div>

      {/* Label */}
      <h4 className="text-lg font-semibold text-[#4A4A48] mb-2">{label}</h4>

      {/* Description */}
      <p className="text-sm text-[#8A8A88]">{description}</p>

      {/* Decorative Element */}
      <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#F37021]/20 group-hover:bg-[#F37021]/40 transition-colors duration-300" />
      <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#D4A574]/30 group-hover:bg-[#D4A574]/50 transition-colors duration-300" />
    </motion.div>
  );
}

// Category Filter Button
interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  count?: number;
}

export function FilterButton({
  active,
  onClick,
  children,
  count,
}: FilterButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
        active
          ? "bg-[#F37021] text-white shadow-lg shadow-[#F37021]/25"
          : "bg-white text-[#4A4A48] hover:bg-[#F37021]/10 border border-[#E8E2DB]"
      }`}
    >
      <span className="flex items-center gap-2">
        {children}
        {count !== undefined && (
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              active ? "bg-white/20" : "bg-[#F37021]/10 text-[#F37021]"
            }`}
          >
            {count}
          </span>
        )}
      </span>

      {/* Active Indicator */}
      {active && (
        <motion.div
          layoutId="activeFilter"
          className="absolute inset-0 bg-[#F37021] rounded-full -z-10"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </motion.button>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, TrendingUp, Users, Award, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Users,
    value: "1800+",
    label: "成功案例",
    description: "真实用户蜕变见证",
  },
  {
    icon: Award,
    value: "37年",
    label: "专业经验",
    description: "深耕肌肤修护领域",
  },
  {
    icon: Sparkles,
    value: "98%",
    label: "客户满意度",
    description: "持续获得用户信赖",
  },
  {
    icon: Shield,
    value: "0",
    label: "安全事故",
    description: "安全配方零风险",
  },
];

const cases = [
  {
    id: 1,
    title: "40岁黄褐斑修护案例",
    category: "色斑修护",
    duration: "3个月",
    description: "李女士，42岁，黄褐斑困扰十年。使用爱美舜分阶护理方案后，色斑明显淡化，肌肤恢复均匀透亮。",
    result: "色斑淡化70%",
    resultValue: "70%",
    beforeAfter: true,
  },
  {
    id: 2,
    title: "敏感肌修复实录",
    category: "敏感肌修护",
    duration: "2个月",
    description: "王女士，38岁，敏感肌十几年，换季必出问题。跟随瑾钰老师的修护方案，肌肤屏障逐渐恢复健康。",
    result: "敏感减少90%",
    resultValue: "90%",
    beforeAfter: true,
  },
  {
    id: 3,
    title: "痘痘肌蜕变之旅",
    category: "痘痘肌调理",
    duration: "4个月",
    description: "张女士，35岁，反复长痘困扰多年。科学分阶护肤+内调方案，从根源解决痘痘问题。",
    result: "痘痘减少95%",
    resultValue: "95%",
    beforeAfter: true,
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const Icon = stat.icon;
  return (
    <motion.div
      className="relative bg-white rounded-2xl p-6 border border-[#E8E2DB] overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent opacity-60" />

      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A961]/20 to-[#C9A961]/5 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#C9A961]" />
      </div>

      <div className="mb-1">
        <span className="text-4xl md:text-5xl font-serif font-bold text-[#C9A961]">
          {stat.value}
        </span>
      </div>

      <div className="text-sm font-medium text-[#1A1A1A] uppercase tracking-wider mb-2">
        {stat.label}
      </div>

      <p className="text-xs text-[#6A6A68]">
        {stat.description}
      </p>

      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A961]/0 to-[#C9A961]/0 group-hover:from-[#C9A961]/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />
    </motion.div>
  );
}

function CaseCard({ caseItem, index }: { caseItem: typeof cases[0]; index: number }) {
  return (
    <motion.div
      className="group bg-white rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-[#E8E2DB] overflow-hidden relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#C9A961]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex flex-wrap items-center gap-3 mb-5">
        <Badge className="bg-[#C9A961]/10 text-[#C9A961] border-0 rounded-full px-3 py-1 text-xs font-medium hover:bg-[#C9A961]/20 transition-colors">
          {caseItem.category}
        </Badge>
        <div className="flex items-center gap-1 text-sm text-[#8A8A88]">
          <Clock className="w-4 h-4" />
          <span>{caseItem.duration}</span>
        </div>
      </div>

      <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-4">
        {caseItem.title}
      </h3>

      <p className="text-sm text-[#6A6A68] leading-relaxed mb-6">
        {caseItem.description}
      </p>

      {caseItem.beforeAfter && (
        <div className="flex items-center gap-4 mb-5 p-3 bg-[#FAFAFA] rounded-xl border border-[#F0F0F0]">
          <div className="flex-1 text-center">
            <div className="text-xs text-[#8A8A88] mb-1">Before</div>
            <div className="h-1 bg-[#E0E0E0] rounded-full overflow-hidden">
              <div className="h-full w-full bg-[#E0E0E0]" />
            </div>
          </div>
          <div className="text-[#C9A961]">
            <ArrowRight className="w-4 h-4" />
          </div>
          <div className="flex-1 text-center">
            <div className="text-xs text-[#C9A961] font-medium mb-1">After</div>
            <div className="h-1 bg-[#C9A961]/20 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-[#C9A961]" />
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-[#FAFAFA] to-[#F8F8F8] rounded-xl p-5 mb-5 transition-all duration-300 group-hover:from-[#C9A961]/5 group-hover:to-[#C9A961]/2 border border-transparent group-hover:border-[#C9A961]/20">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-4 h-4 text-[#C9A961]" />
          <span className="text-xs text-[#8A8A88] uppercase tracking-wider">改善效果</span>
        </div>
        <p className="text-2xl font-bold text-[#C9A961]">{caseItem.resultValue}</p>
      </div>

      <Link
        href="/cases"
        className="inline-flex items-center text-sm font-medium text-[#C9A961] hover:text-[#B8986B] transition-colors group/link"
      >
        查看详情
        <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
}

export function CasesSection() {
  return (
    <section id="cases" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-medium text-[#C9A961] uppercase tracking-[0.3em] mb-4">
            Clinical Results
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-6 leading-tight">
            科学数据见证真实改变
          </h2>

          <p className="text-base md:text-lg text-[#6A6A68] leading-relaxed">
            37年专业沉淀，1800+成功案例，我们用数据说话，用效果证明
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A961]/5 rounded-full border border-[#C9A961]/20">
              <div className="w-2 h-2 rounded-full bg-[#C9A961] animate-pulse" />
              <span className="text-sm font-medium text-[#C9A961]">临床级数据监测</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mb-20">
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent flex-1 max-w-xs" />
          <div className="mx-6">
            <div className="w-2 h-2 rounded-full bg-[#C9A961]/40" />
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent flex-1 max-w-xs" />
        </div>

        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-medium text-[#C9A961] uppercase tracking-[0.3em] mb-4">
            Success Stories
          </span>

          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-4">
            真实用户蜕变案例
          </h3>

          <p className="text-base text-[#6A6A68] leading-relaxed">
            每一个数字背后，都是对美丽的坚持与科学护肤的力量
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((caseItem, index) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            asChild
            variant="outline"
            className="border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-white rounded-xl px-8 py-6 text-base transition-all duration-500"
          >
            <Link href="/cases">查看全部案例</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

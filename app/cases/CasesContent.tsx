"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Award, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { CaseCard, Case, StatCard, FilterButton } from "@/components/CaseCard";
import { CountUp } from "@/components/animations/CountUp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

type Category = "all" | "pigmentation" | "sensitive" | "agent";

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "全部案例" },
  { key: "pigmentation", label: "祛斑案例" },
  { key: "sensitive", label: "敏感肌案例" },
  { key: "agent", label: "代理成长" },
];

const cases: Case[] = [
  {
    id: 1,
    name: "王女士",
    age: 35,
    problem: "黄褐斑困扰8年，面部两颊及额头有大面积黄褐色斑块，尝试多种祛斑产品效果不佳",
    solution: "使用爱美舜分阶祛斑方案，第一阶段温和修护建立耐受，第二阶段精准淡化色斑，第三阶段巩固防复发",
    result: "色斑淡化70%，肤色明显提亮",
    duration: "4个月",
    category: "pigmentation",
    beforeImage: "/images/cases/case-13-王女士.jpg",
    afterImage: "/images/cases/case-13-王女士.jpg",
  },
  {
    id: 2,
    name: "李女士",
    age: 42,
    problem: "长期户外工作导致晒斑严重，面部及颈部出现大量棕褐色斑点，皮肤粗糙暗沉",
    solution: "爱美舜晒后修复+祛斑组合方案，深层修护受损肌肤，配合专业手法促进代谢",
    result: "晒斑基本消失，肌肤恢复细腻光泽",
    duration: "3个月",
    category: "pigmentation",
    beforeImage: "/images/cases/case-12-李女士.jpg",
    afterImage: "/images/cases/case-12-李女士.jpg",
  },
  {
    id: 3,
    name: "张女士",
    age: 38,
    problem: "遗传性雀斑，从小学开始困扰，面部散布大量浅褐色斑点，影响自信心",
    solution: "爱美舜温和祛斑疗程，配合内调外养，改善体质从根源减少色素沉着",
    result: "雀斑淡化60%，整体肤色均匀透亮",
    duration: "5个月",
    category: "pigmentation",
    beforeImage: "/images/cases/case-7-张女士.jpg",
    afterImage: "/images/cases/case-7-张女士.jpg",
  },
  {
    id: 4,
    name: "陈女士",
    age: 45,
    problem: "老年斑初现，面部及手部出现深褐色斑块，皮肤干燥松弛",
    solution: "爱美舜抗衰祛斑综合方案，抗氧化+淡斑+紧致三位一体护理",
    result: "老年斑改善明显，肌肤紧致度提升",
    duration: "4个月",
    category: "pigmentation",
    beforeImage: "/images/cases/case-15-陈女士.jpg",
    afterImage: "/images/cases/case-15-陈女士.jpg",
  },
  {
    id: 5,
    name: "赵女士",
    age: 28,
    problem: "红血丝敏感肌，面部常年泛红，换季时加重，伴有灼热刺痛感",
    solution: "爱美舜敏感肌修护方案，重建肌肤屏障，舒缓镇静，增强肌肤抵抗力",
    result: "红血丝明显改善，肌肤耐受力大幅提升",
    duration: "3个月",
    category: "sensitive",
    beforeImage: "/images/cases/case-14-赵女士.jpg",
    afterImage: "/images/cases/case-14-赵女士.jpg",
  },
  {
    id: 6,
    name: "刘女士",
    age: 32,
    problem: "过度清洁导致屏障受损，皮肤干燥脱皮，容易过敏泛红，护肤品难以吸收",
    solution: "爱美舜屏障修护疗程，温和清洁+深层滋养+修护精华，循序渐进恢复健康肌",
    result: "肌肤屏障恢复健康，不再敏感泛红",
    duration: "2个月",
    category: "sensitive",
    beforeImage: "/images/cases/case-5-刘女士.jpg",
    afterImage: "/images/cases/case-5-刘女士.jpg",
  },
  {
    id: 7,
    name: "孙女士",
    age: 29,
    problem: "季节性过敏肌，春秋两季必发作，面部红肿瘙痒，无法正常护肤化妆",
    solution: "爱美舜季节维稳方案，提前预防+急性期舒缓+日常维稳，全方位呵护敏感肌肤",
    result: "过敏症状稳定改善，换季不再困扰",
    duration: "6个月",
    category: "sensitive",
    beforeImage: "/images/cases/case-6-孙女士.jpg",
    afterImage: "/images/cases/case-6-孙女士.jpg",
  },
  {
    id: 8,
    name: "周女士",
    age: 33,
    problem: "全职妈妈，希望增加家庭收入但时间有限，缺乏销售经验",
    solution: "加入爱美舜代理团队，系统培训+一对一指导+完善的代理扶持政策",
    result: "从0起步到月入过万，实现经济独立",
    duration: "8个月",
    category: "agent",
  },
  {
    id: 9,
    name: "吴女士",
    age: 36,
    problem: "上班族，想做副业增加收入，但担心影响主业，缺乏创业经验",
    solution: "爱美舜轻创业模式，灵活时间安排+社群运营支持+总部全程赋能",
    result: "副业成功转正业，收入翻倍增长",
    duration: "12个月",
    category: "agent",
  },
];

const stats = [
  {
    value: 1800,
    suffix: "+",
    label: "真实蜕变案例",
    description: "累计帮助1800+客户解决肌肤问题",
    icon: Users,
  },
  {
    value: 98,
    suffix: "%",
    label: "客户满意度",
    description: "专业品质赢得客户信赖",
    icon: Award,
  },
  {
    value: 12,
    suffix: "年",
    label: "专业经验",
    description: "深耕肌肤护理领域12年",
    icon: Clock,
  },
  {
    value: 500,
    suffix: "+",
    label: "成功代理",
    description: "携手500+代理共同成长",
    icon: TrendingUp,
  },
];

export function CasesContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredCases =
    activeCategory === "all"
      ? cases
      : cases.filter((c) => c.category === activeCategory);

  const getCategoryCount = (category: Category) => {
    if (category === "all") return cases.length;
    return cases.filter((c) => c.category === category).length;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#F5F1ED] to-[#FAF8F6] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F37021]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4A574]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" type="fade">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37021]/10 rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#F37021] animate-pulse" />
                <span className="text-sm font-medium text-[#F37021]">
                  真实案例见证
                </span>
              </motion.div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A48] mb-6 leading-tight">
                每一个蜕变
                <span className="text-[#F37021]">都值得被看见</span>
              </h1>

              <p className="text-lg md:text-xl text-[#6A6A68] leading-relaxed">
                从肌肤困扰到自信绽放，从创业小白到业绩达人
                <br className="hidden md:block" />
                爱美舜见证并陪伴每一位客户的成长之路
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-20 bg-[#FAF8F6]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" type="fade">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-4">
                用数据说话
              </h2>
              <p className="text-[#6A6A68] max-w-2xl mx-auto">
                十二年来，我们专注于肌肤护理与代理扶持，用专业和真诚赢得信赖
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F37021] to-[#D4A574] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#F37021]/10 flex items-center justify-center group-hover:bg-[#F37021]/20 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-[#F37021]" />
                </div>

                <div className="mb-2">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    className="text-4xl md:text-5xl font-serif font-bold text-[#F37021]"
                    duration={2.5}
                    delay={index * 0.2}
                  />
                </div>

                <h3 className="text-lg font-semibold text-[#4A4A48] mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs md:text-sm text-[#8A8A88]">
                  {stat.description}
                </p>

                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#F37021]/20 group-hover:bg-[#F37021]/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-16 md:py-20 bg-[#F5F1ED]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal direction="up" type="fade">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-4">
                客户真实案例
              </h2>
              <p className="text-[#6A6A68] max-w-2xl mx-auto">
                滑动查看改善前后对比，真实记录每一位客户的蜕变历程
              </p>
            </div>
          </ScrollReveal>

          {/* Category Filter */}
          <ScrollReveal direction="up" type="fade" delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <FilterButton
                  key={cat.key}
                  active={activeCategory === cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  count={getCategoryCount(cat.key)}
                >
                  {cat.label}
                </FilterButton>
              ))}
            </div>
          </ScrollReveal>

          {/* Cases Grid with AnimatePresence */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredCases.map((caseItem, index) => (
                <CaseCard
                  key={caseItem.id}
                  caseItem={caseItem}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          <AnimatePresence>
            {filteredCases.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F37021]/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#F37021]/50" />
                </div>
                <p className="text-[#8A8A88]">暂无相关案例</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-[#FAF8F6]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" type="fade">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-4">
                她们这样说
              </h2>
              <p className="text-[#6A6A68] max-w-2xl mx-auto">
                来自客户的真实反馈，是我们前进的最大动力
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "困扰我8年的黄褐斑终于淡化了，现在的我可以素颜出门，自信满满！",
                author: "王女士",
                role: "祛斑客户",
              },
              {
                quote: "从敏感肌到健康肌，爱美舜真的改变了我的生活质量，再也不用为过敏烦恼。",
                author: "赵女士",
                role: "敏感肌客户",
              },
              {
                quote: "加入爱美舜后，不仅实现了经济独立，还收获了事业成就感，感恩遇见！",
                author: "周女士",
                role: "品牌代理",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl text-[#F37021]/30 font-serif mb-4">"</div>
                <p className="text-[#6A6A68] leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F37021]/20 to-[#D4A574]/20 flex items-center justify-center">
                    <span className="text-[#F37021] font-medium text-sm">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-[#4A4A48]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#8A8A88]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#F37021] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              开启您的蜕变之旅
            </h2>

            <p className="text-white/90 mb-8 max-w-xl mx-auto text-lg">
              无论您是有肌肤困扰想要改善，还是想加入爱美舜成为代理，
              都可以联系我们获取专属方案
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#F37021] hover:bg-white/90 font-medium px-8 h-12 rounded-full shadow-lg"
              >
                <Link href="/contact">免费咨询</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-medium px-8 h-12 rounded-full"
              >
                <Link href="/agent">了解代理</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

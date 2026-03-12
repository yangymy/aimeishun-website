"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, Sparkles, TrendingUp, MessageCircle } from "lucide-react";
import Link from "next/link";

type Category = "all" | "pigmentation" | "sensitive" | "agent";

interface Case {
  id: number;
  name: string;
  age: number;
  problem: string;
  solution: string;
  result: string;
  duration: string;
  category: "pigmentation" | "sensitive" | "agent";
}

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

function getCategoryLabel(category: Case["category"]) {
  const labels: Record<string, string> = {
    pigmentation: "祛斑案例",
    sensitive: "敏感肌案例",
    agent: "代理成长",
  };
  return labels[category];
}

function getCategoryColor(category: Case["category"]) {
  const colors: Record<string, string> = {
    pigmentation: "bg-[#D4A574]/20 text-[#B88A5A] border-[#D4A574]/30",
    sensitive: "bg-[#7A9E8C]/20 text-[#5F7D6E] border-[#7A9E8C]/30",
    agent: "bg-[#9EBBAE]/20 text-[#7A9E8C] border-[#9EBBAE]/30",
  };
  return colors[category];
}

function CaseCard({ caseItem }: { caseItem: Case }) {
  const categoryColor = getCategoryColor(caseItem.category);
  const isAgent = caseItem.category === "agent";

  return (
    <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div 
        className={`h-48 w-full relative overflow-hidden ${
          isAgent 
            ? "bg-gradient-to-br from-[#D4A574]/20 via-[#F5F1ED] to-[#7A9E8C]/20" 
            : "bg-gradient-to-br from-[#7A9E8C]/10 via-[#F5F1ED] to-[#9EBBAE]/10"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {isAgent ? (
            <TrendingUp className="w-16 h-16 text-[#D4A574]/40 group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <Sparkles className="w-16 h-16 text-[#7A9E8C]/40 group-hover:scale-110 transition-transform duration-300" />
          )}
        </div>
        <Badge className={`absolute top-4 left-4 border ${categoryColor}`}>
          {getCategoryLabel(caseItem.category)}
        </Badge>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#F5F1ED] flex items-center justify-center">
              <User className="w-5 h-5 text-[#7A9E8C]" />
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
          <div className="flex items-center gap-1 text-sm text-[#8A8A88]">
            <Clock className="w-4 h-4" />
            <span>{caseItem.duration}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        <div>
          <p className="text-xs text-[#8A8A88] uppercase tracking-wider mb-1">
            {isAgent ? "创业背景" : "肌肤问题"}
          </p>
          <p className="text-sm text-[#6A6A68] leading-relaxed line-clamp-2">
            {caseItem.problem}
          </p>
        </div>

        <div>
          <p className="text-xs text-[#8A8A88] uppercase tracking-wider mb-1">
            {isAgent ? "解决方案" : "护理方案"}
          </p>
          <p className="text-sm text-[#6A6A68] leading-relaxed line-clamp-2">
            {caseItem.solution}
          </p>
        </div>

        <div className="bg-[#F5F1ED] rounded-lg p-4">
          <p className="text-xs text-[#8A8A88] uppercase tracking-wider mb-1">
            {isAgent ? "成长成果" : "改善效果"}
          </p>
          <p className="text-lg font-semibold text-[#7A9E8C] font-serif">
            {caseItem.result}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function CasesContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredCases =
    activeCategory === "all"
      ? cases
      : cases.filter((c) => c.category === activeCategory);

  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.key}
                variant={activeCategory === cat.key ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.key)}
                className={
                  activeCategory === cat.key
                    ? "bg-[#7A9E8C] hover:bg-[#5F7D6E] text-white border-0"
                    : "border-[#7A9E8C] text-[#7A9E8C] hover:bg-[#7A9E8C]/10"
                }
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCases.map((caseItem) => (
              <CaseCard key={caseItem.id} caseItem={caseItem} />
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#8A8A88]">暂无相关案例</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#7A9E8C]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-4">
            开启您的蜕变之旅
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            无论您是有肌肤困扰想要改善，还是想加入爱美舜成为代理，
            都可以联系我们获取专属方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#7A9E8C] hover:bg-white/90 font-medium px-8"
            >
              <Link href="/contact">免费咨询</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-medium px-8"
            >
              <Link href="/agent">了解代理</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

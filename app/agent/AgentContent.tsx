"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Package,
  GraduationCap,
  Sparkles,
  Award,
  TrendingUp,
  ShieldCheck,
  FileText,
  Gift,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const advantages = [
  {
    icon: Package,
    title: "0库存压力",
    description: "一件代发模式，无需囤货积压资金，轻资产创业首选，降低经营风险",
  },
  {
    icon: GraduationCap,
    title: "完善培训",
    description: "专业护肤知识培训、销售技巧指导、运营支持体系，助您快速上手",
  },
  {
    icon: Sparkles,
    title: "优质产品",
    description: "专注30+女性问题肌肤修护，功效显著口碑好，复购率高达85%",
  },
  {
    icon: Award,
    title: "品牌支持",
    description: "统一品牌形象设计、营销物料支持、专业VI系统，提升信任感",
  },
  {
    icon: TrendingUp,
    title: "持续发展",
    description: "长期合作保障机制、区域市场深耕支持，与品牌共同成长",
  },
];

const policies = [
  {
    icon: ShieldCheck,
    title: "价格保护",
    description: "全国统一零售价，严格控价体系，保障代理商合理利润空间",
  },
  {
    icon: GraduationCap,
    title: "培训支持",
    description: "线上线下全方位培训，产品知识、销售技巧、门店运营全覆盖",
  },
  {
    icon: Gift,
    title: "物料支持",
    description: "提供宣传物料、样品支持、促销活动策划，降低营销成本",
  },
  {
    icon: MapPin,
    title: "区域保护",
    description: "严格的区域独家代理制度，避免内部竞争，保护代理商权益",
  },
];

const steps = [
  { number: "01", title: "咨询了解", description: "了解品牌政策与代理模式" },
  { number: "02", title: "提交申请", description: "填写代理申请表" },
  { number: "03", title: "资格审核", description: "资质评估与面谈沟通" },
  { number: "04", title: "签订合同", description: "确认合作意向签约" },
  { number: "05", title: "培训上岗", description: "系统培训与开业支持" },
  { number: "06", title: "正式运营", description: "开启您的创业之路" },
];

const faqs = [
  {
    question: "代理门槛高吗？",
    answer:
      "爱美舜代理门槛设置合理，我们欢迎有创业热情、认同品牌理念的合作伙伴。无需大量启动资金，0库存压力的一件代发模式让创业更轻松。我们会根据您的实际情况提供灵活的合作方案。",
  },
  {
    question: "需要囤货吗？",
    answer:
      "不需要！我们采用先进的一件代发模式，您只需专注于客户开发和销售，所有发货由总部统一处理。这样既节省了仓储成本，又降低了库存积压风险，是真正的轻资产创业模式。",
  },
  {
    question: "培训是免费的吗？",
    answer:
      "是的，所有培训完全免费！我们提供系统的培训课程，包括产品知识、护肤专业理论、销售技巧、客户维护、社群运营等。线上课程随时可学，线下培训定期举办，确保每位代理商都能快速掌握所需技能。",
  },
  {
    question: "如何保障区域权益？",
    answer:
      "我们实行严格的区域保护政策，每个区域只设一名独家代理，确保您的市场空间不受内部竞争影响。合同明确约定代理区域范围，总部承诺不在您的代理区域内发展其他代理商或直营店。",
  },
  {
    question: "利润空间如何？",
    answer:
      "我们提供行业内具有竞争力的代理价格体系，综合毛利率可达50%-60%。同时，总部严控市场价格，杜绝乱价行为，确保代理商的合理利润空间。优秀代理商还可获得年终返利和额外奖励。",
  },
];

export function AgentContent() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-4">
              为什么选择爱美舜
            </h2>
            <p className="text-[#6A6A68] text-lg max-w-2xl mx-auto">
              五大核心优势，助力您的创业成功
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {advantages.slice(0, 3).map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E2DB] hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[#F37021]/10 rounded-xl flex items-center justify-center mb-6">
                  <advantage.icon className="w-7 h-7 text-[#F37021]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#4A4A48] mb-3">
                  {advantage.title}
                </h3>
                <p className="text-[#6A6A68] leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 max-w-3xl mx-auto">
            {advantages.slice(3).map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E2DB] hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[#F37021]/10 rounded-xl flex items-center justify-center mb-6">
                  <advantage.icon className="w-7 h-7 text-[#F37021]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#4A4A48] mb-3">
                  {advantage.title}
                </h3>
                <p className="text-[#6A6A68] leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-4">
              代理政策支持
            </h2>
            <p className="text-[#6A6A68] text-lg max-w-2xl mx-auto">
              全方位扶持体系，让您创业无忧
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-[#FAF8F6] rounded-2xl p-6 border border-[#E8E2DB] hover:border-[#F37021]/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#F37021] rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <policy.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#4A4A48] mb-2">
                  {policy.title}
                </h3>
                <p className="text-[#6A6A68] text-sm leading-relaxed">
                  {policy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-4">
              加盟流程
            </h2>
            <p className="text-[#6A6A68] text-lg max-w-2xl mx-auto">
              简单六步，轻松开启创业之旅
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-[#F37021]/30" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#F37021] flex items-center justify-center mb-4 relative z-10 shadow-lg shadow-[#F37021]/20">
                    <span className="text-white font-bold text-lg">
                      {step.number}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-[#F37021]/20" />
                  )}

                  <h3 className="font-serif text-lg font-semibold text-[#4A4A48] mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-[#6A6A68] text-sm text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-4">
              常见问题
            </h2>
            <p className="text-[#6A6A68] text-lg">
              您可能关心的问题都在这里
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#E8E2DB]"
              >
                <AccordionTrigger className="text-left text-[#4A4A48] font-medium py-5 hover:text-[#F37021] hover:no-underline">
                  <span className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#F37021] shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#6A6A68] leading-relaxed pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F37021]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            立即申请代理
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            留下您的联系方式，我们的招商经理将在24小时内与您联系
            <br />
            为您详细介绍代理政策与合作方案
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#F37021] hover:bg-white/90 px-8 py-6 text-base font-medium shadow-lg"
            >
              填写申请表
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-base font-medium"
            >
              在线咨询
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              免费申请
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              专业指导
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              快速审核
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Sparkles } from "lucide-react";

const painPoints = [
  "脸上的斑越来越多，用了很多产品都没效果？",
  "皮肤敏感脆弱，一到换季就出问题？",
  "护肤品用了一堆，却感觉皮肤越来越差？",
  "想护肤却不知道从何开始，怕被坑？",
];

const benefits = [
  "一对一肌肤问题诊断",
  "专属分阶护肤方案建议",
  "科学护肤知识科普",
  "新品试用优先体验",
];

export function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* 背景装饰 - 金色光晕 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4B896]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* 标题区域 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A961]/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#C9A961]" />
              <span className="text-sm font-medium text-[#C9A961]">限时免费咨询</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-6 leading-tight">
              开启你的科学护肤之旅
            </h2>

            <p className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto">
              其实，好皮肤真的可以养出来。
            </p>
          </div>

          {/* 痛点问题 */}
          <div className="bg-[#FAFAFA] rounded-2xl p-8 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] mb-8 border border-[#E8E2DB]/30">
            <h3 className="font-serif text-xl font-semibold text-[#1A1A1A] mb-6 text-center">
              你是否也有这些困扰？
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#E8E2DB]/50"
                >
                  <span className="text-[#C9A961] text-lg flex-shrink-0">•</span>
                  <span className="text-[#666666] text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#E8E2DB]/50 pt-8">
              <h4 className="text-sm font-medium text-[#999999] uppercase tracking-wider mb-6 text-center">
                咨询可获得
              </h4>

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-[#1A1A1A]"
                  >
                    <div className="w-6 h-6 bg-[#C9A961]/10 rounded-full flex items-center justify-center"
                    >
                      <Check className="w-4 h-4 text-[#C9A961]" />
                    </div>
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#C9A961] hover:bg-[#B8986B] text-white px-12 py-6 text-base w-full sm:w-auto rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(201,169,97,0.3)]"
                >
                  <Link href="/contact">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    添加微信，获取专属方案
                  </Link>
                </Button>

                <p className="text-sm text-[#999999] mt-6">
                  我不卖焦虑，只给方案。我不承诺速效，只陪你慢慢养好皮肤。
                </p>
              </div>
            </div>
          </div>

          {/* 免责声明 */}
          <p className="text-xs text-[#999999] text-center max-w-xl mx-auto leading-relaxed"
          >
            *温馨提示：护肤品效果因人而异，具体改善周期视个人肤质及肌肤问题程度而定。
            如有严重肌肤问题，建议先咨询专业皮肤科医生。
          </p>
        </div>
      </div>
    </section>
  );
}

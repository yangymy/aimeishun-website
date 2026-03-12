import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-[#4A4A48] mb-6">
            开启你的科学护肤之旅
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-[#FAF8F6] rounded-xl"
              >
                <span className="text-[#F37021] text-lg">•</span>
                <span className="text-[#6A6A68] text-sm">{point}</span>
              </div>
            ))}
          </div>

          <p className="text-lg text-[#4A4A48] font-medium mb-8">
            其实，好皮肤真的可以养出来。
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-[#6A6A68]"
              >
                <Check className="w-5 h-5 text-[#F37021] flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="bg-[#F37021] hover:bg-[#D65A0F] text-white px-8 py-6 text-base w-full sm:w-auto"
          >
            <Link href="/contact">
              <MessageCircle className="w-5 h-5 mr-2" />
              添加微信，获取专属方案
            </Link>
          </Button>

          <p className="text-sm text-[#8A8A88] mt-4">
            我不卖焦虑，只给方案。我不承诺速效，只陪你慢慢养好皮肤。
          </p>

          <p className="text-xs text-[#8A8A88] mt-8 max-w-xl mx-auto">
            *温馨提示：护肤品效果因人而异，具体改善周期视个人肤质及肌肤问题程度而定。
            如有严重肌肤问题，建议先咨询专业皮肤科医生。
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#2C3E35] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F37021]/20 via-[#2C3E35] to-[#2C3E35]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E35]/60 via-[#2C3E35]/70 to-[#2C3E35]/90" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F37021]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#F37021]/5 rounded-full blur-2xl" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 pt-[72px]">
        <div className="text-center max-w-4xl mx-auto py-16 md:py-24 lg:py-32">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-[#F37021] uppercase tracking-wider">
              爱美舜 · AIMEISHUN
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            20余年，只做好一件事——
            <span className="block mt-2 text-[#F37021]">
              帮30+姐妹养出好皮肤
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed">
            我是陈瑾钰，深耕问题肌肤领域二十余年的国家高级美容师
          </p>

          <p className="text-base md:text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            见过太多姐妹踩过护肤的坑，所以创立爱美舜。
            不用折腾，在家就能用安全、有效的产品，科学分阶护肤。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#F37021] hover:bg-[#D65A0F] text-white px-8 py-6 text-base w-full sm:w-auto"
            >
              <Link href="/contact">获取专属肌肤方案</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base w-full sm:w-auto"
            >
              <Link href="/about">了解品牌故事</Link>
            </Button>
          </div>

          <p className="text-sm text-white/50 mt-8 flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#F37021] rounded-full animate-pulse" />
            已有 1800+ 姐妹开启科学护肤之旅
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Link
          href="#founder"
          className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors animate-bounce"
          aria-label="向下滚动"
        >
          <span className="text-xs mb-2">向下滚动</span>
          <ChevronDown className="w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}

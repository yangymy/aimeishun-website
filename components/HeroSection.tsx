"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, CheckCircle, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#FAFAFA] via-[#F5F5F5] to-[#FAFAFA] overflow-hidden"
    >
      {/* 装饰光晕 - 金色点缀 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#D4B896]/10 rounded-full blur-[100px]" />

      {/* 主视觉大图 */}
      <motion.div
        className="absolute top-[8%] left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-4xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full">
          <Image
            src="/images/hero/main-visual.jpg"
            alt="爱美舜主视觉"
            fill
            className="object-contain drop-shadow-2xl"
            priority
            sizes="(max-width: 1200px) 90vw, 1000px"
          />
        </div>
      </motion.div>

      {/* 内容区域 */}
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10 pt-[55%] md:pt-[50%] lg:pt-[48%]">
        <div className="text-center max-w-4xl mx-auto">
          {/* 品牌标识 */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-sm font-medium text-[#C9A961] uppercase tracking-[0.4em]">
              爱美舜 · AIMEISHUN
            </span>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-6 leading-[1.15] tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            20余年，只做好一件事
            <span className="block mt-4 text-[#C9A961]">
              帮30+姐妹养出好皮肤
            </span>
          </motion.h1>

          {/* 信任徽章 */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <div className="flex items-center gap-2 bg-white/90 rounded-full shadow-sm px-4 py-2">
              <CheckCircle className="w-4 h-4" style={{ color: "#C9A961" }} />
              <span className="text-sm text-[#1A1A1A]">98%客户满意度</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 rounded-full shadow-sm px-4 py-2">
              <Award className="w-4 h-4" style={{ color: "#C9A961" }} />
              <span className="text-sm text-[#1A1A1A]">国妆特证产品</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 rounded-full shadow-sm px-4 py-2">
              <Users className="w-4 h-4" style={{ color: "#C9A961" }} />
              <span className="text-sm text-[#1A1A1A]">1800+成功案例</span>
            </div>
          </motion.div>

          {/* 副标题 */}
          <motion.p
            className="text-lg md:text-xl text-[#666666] mb-4 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            我是陈瑾钰，深耕问题肌肤领域二十余年的国家高级美容师
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-[#999999] mb-12 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            见过太多姐妹踩过护肤的坑，所以创立爱美舜。
            不用折腾，在家就能用安全、有效的产品，科学分阶护肤。
          </motion.p>

          {/* CTA按钮 */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#C9A961] hover:bg-[#B8986B] text-white px-10 py-6 text-base w-full sm:w-auto rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(201,169,97,0.3)]"
            >
              <Link href="/contact">获取专属肌肤方案</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#C9A961]/30 text-[#1A1A1A] hover:bg-[#C9A961]/10 hover:border-[#C9A961]/50 px-10 py-6 text-base w-full sm:w-auto rounded-full transition-all duration-500"
            >
              <Link href="/about">了解品牌故事</Link>
            </Button>
          </motion.div>

          {/* 数据统计 */}
          <motion.p
            className="text-sm text-[#999999] mt-10 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <span className="inline-block w-2 h-2 bg-[#C9A961] rounded-full animate-pulse" />
            已有 1800+ 姐妹开启科学护肤之旅
          </motion.p>
        </div>
      </div>

      {/* 底部渐变遮罩 */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent" />

      {/* 滚动提示 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link
          href="#founder"
          className="flex flex-col items-center text-[#C9A961]/60 hover:text-[#C9A961] transition-colors duration-500"
          aria-label="向下滚动"
        >
          <ChevronDown className="w-8 h-8" />
        </Link>
      </motion.div>
    </section>
  );
}

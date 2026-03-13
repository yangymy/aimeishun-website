"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, Sparkles, Users, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FounderSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const credentials = [
    {
      icon: Award,
      title: "美容护肤专家",
      subtitle: "国家高级美容师认证",
    },
    {
      icon: Clock,
      title: "37年行业经验",
      subtitle: "深耕问题肌肤领域",
    },
    {
      icon: Users,
      title: "1800+成功案例",
      subtitle: "帮助姐妹重获健康肌肤",
    },
  ];

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] relative overflow-hidden"
    >
      {/* 装饰光晕 */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C9A961]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#D4B896]/5 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 左侧图片区域 */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* 主图片 */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(201,169,97,0.2)]">
                <Image
                  src="/images/founder/founder-main.jpg"
                  alt="陈瑾钰 - 爱美舜品牌创始人"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* 金色装饰框 */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#C9A961]/40 rounded-2xl -z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              />

              {/* 资质卡片 */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-5 border border-[#C9A961]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C9A961]/20 to-[#C9A961]/5 rounded-full flex items-center justify-center border border-[#C9A961]/20">
                    <Award className="w-6 h-6 text-[#C9A961]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A]">国家高级美容师</p>
                    <p className="text-xs text-[#999999]">37年一线经验</p>
                  </div>
                </div>
              </motion.div>

              {/* 装饰性金色点缀 */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-[#C9A961] rounded-full flex items-center justify-center shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* 右侧文字区域 */}
          <div className="order-1 lg:order-2">
            <motion.span
              className="inline-block text-sm font-medium text-[#C9A961] uppercase tracking-[0.3em] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Founder
            </motion.span>

            <motion.h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-2 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              陈瑾钰
            </motion.h2>

            <motion.p
              className="text-[#C9A961] text-lg mb-8 font-medium tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              爱美舜品牌创始人 · 你的问题肌肤护肤顾问
            </motion.p>

            <motion.div
              className="space-y-5 text-base text-[#666666] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p>
                我是陈瑾钰，爱美舜品牌创始人，深耕问题肌肤领域
                <strong className="text-[#1A1A1A]">37年</strong>
                的国家高级美容师。
              </p>

              <p>
                三十多年前，我还是一名一线美容师。那时候，我见过太多30+的姐妹，因为
                <strong className="text-[#1A1A1A]">乱护肤、用激素类产品、踩美容院的坑</strong>
                ，导致烂脸、花冤枉钱。
              </p>

              <p>
                2018年，我创立了爱美舜。
                <strong className="text-[#1A1A1A]">多年来</strong>
                ，我们专注于30+女性问题肌肤修护，累计帮助
                <strong className="text-[#1A1A1A]">1800多位姐妹</strong>
                解决了色斑、敏感肌、痘痘等肌肤问题。
              </p>
            </motion.div>

            {/* 优雅引用块 */}
            <motion.blockquote
              className="my-8 pl-6 border-l-4 border-[#C9A961] bg-gradient-to-r from-[#C9A961]/5 to-transparent py-6 pr-6 rounded-r-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-[#1A1A1A] font-serif text-lg italic leading-relaxed">
                "我的护肤理念很简单：好皮肤是养出来的，不是治出来的。30+的女人，护肤要做减法，选对成分比用贵的更重要。"
              </p>
              <footer className="mt-3 text-sm text-[#C9A961] font-medium">
                — 陈瑾钰
              </footer>
            </motion.blockquote>

            {/* 资质展示卡片 */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {credentials.map((cred, index) => (
                <motion.div
                  key={cred.title}
                  className="text-center p-4 bg-white rounded-xl border border-[#C9A961]/10 shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="w-10 h-10 mx-auto mb-2 bg-gradient-to-br from-[#C9A961]/20 to-[#C9A961]/5 rounded-full flex items-center justify-center">
                    <cred.icon className="w-5 h-5 text-[#C9A961]" />
                  </div>
                  <p className="text-sm font-semibold text-[#1A1A1A]">{cred.title}</p>
                  <p className="text-xs text-[#999999] mt-1">{cred.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA 按钮 */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Button
                asChild
                variant="outline"
                className="border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-white rounded-full px-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(201,169,97,0.3)]"
              >
                <Link href="/about">了解品牌故事</Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="text-[#1A1A1A] hover:text-[#C9A961] hover:bg-[#C9A961]/10 rounded-full px-8 transition-all duration-500"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  预约咨询
                  <span className="text-[#C9A961]">→</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

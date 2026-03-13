"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    content: "用了一个月，脸上的斑明显淡了，朋友都说我年轻了好几岁！40岁，黄褐斑困扰我十年了。用过很多产品，不是刺激就是反弹。用了这个方案，三个月，斑淡了，皮肤也稳定了。",
    author: "张女士",
    age: 42,
    type: "色斑修护",
    avatar: "👩",
    rating: 5,
  },
  {
    id: 2,
    content: "37年老店果然不一样，老师的手法太专业了！敏感肌十几年，风吹日晒都红。跟着老师的分阶护理方案，现在皮肤终于不那么脆弱了，可以正常化妆出门了。",
    author: "李女士",
    age: 38,
    type: "敏感肌修复",
    avatar: "👩‍💼",
    rating: 5,
  },
  {
    id: 3,
    content: "终于找到适合敏感肌的产品，现在皮肤状态稳定多了。作为全职妈妈，我一直想做点副业。加入代理，不是为了暴富，而是真的认可产品。自己用好了，分享给身边的姐妹。",
    author: "王女士",
    age: 35,
    type: "代理成长",
    avatar: "👩‍👧",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const goToPrevious = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#FAFAFA] to-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-medium text-[#C9A961] uppercase tracking-[0.3em] mb-4">
            Testimonials
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] leading-tight mb-4">
            真实用户见证
          </h2>

          <p className="text-base md:text-lg text-[#666666] leading-relaxed">
            来自1800+姐妹的真实反馈，用心服务每一位客户
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 relative shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-[#F0F0F0]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-8 left-8 md:top-12 md:left-12">
              <Quote className="w-10 h-10 md:w-14 md:h-14 text-[#C9A961]" />
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />

            <div className="relative z-10 pt-6">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                  }}
                >
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-[#C9A961] text-[#C9A961]" />
                      </motion.div>
                    ))}
                  </div>

                  <blockquote className="mb-10">
                    <p className="text-lg md:text-xl lg:text-2xl text-[#1A1A1A] leading-relaxed font-serif">
                      "{activeTestimonial.content}"
                    </p>
                  </blockquote>

                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FAFAFA] to-[#F0F0F0] flex items-center justify-center text-2.5xl shadow-inner border-2 border-[#C9A961]">
                        {activeTestimonial.avatar}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#C9A961] rounded-full flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <p className="font-serif font-semibold text-[#C9A961] text-lg">
                        {activeTestimonial.author}
                      </p>
                      <p className="text-sm text-[#888888]">
                        {activeTestimonial.age}岁 · {activeTestimonial.type}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-12 pt-8 border-t border-[#F0F0F0]">
                <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-500 ${
                          index === activeIndex
                            ? "bg-[#C9A961] w-8"
                            : "bg-[#E8E8E8] w-2 hover:bg-[#C9A961]/50"
                        }`}
                        aria-label={`查看第${index + 1}条评价`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.button
                      onClick={goToPrevious}
                      className="w-12 h-12 rounded-full border border-[#E8E8E8] bg-white flex items-center justify-center text-[#666666] hover:border-[#C9A961] hover:text-[#C9A961] transition-all duration-300"
                      aria-label="上一条评价"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      onClick={goToNext}
                      className="w-12 h-12 rounded-full border border-[#C9A961] bg-[#C9A961] flex items-center justify-center text-white hover:bg-[#B8986B] hover:border-[#B8986B] transition-all duration-300"
                      aria-label="下一条评价"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            asChild
            variant="outline"
            className="border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-white rounded-full px-10 py-6 text-base transition-all duration-500"
          >
            <Link href="/cases">查看全部案例</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

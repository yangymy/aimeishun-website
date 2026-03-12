"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "40岁，黄褐斑困扰我十年了。用过很多产品，不是刺激就是反弹。用了瑾钰老师推荐的方案，三个月，斑淡了，皮肤也稳定了。最重要的是，整个过程很温和，没有烂脸。",
    author: "李女士",
    age: 42,
    type: "色斑修护案例",
    avatar: "👩",
  },
  {
    id: 2,
    content: "敏感肌十几年，风吹日晒都红。试了很多方法都没用，差点放弃。遇到爱美舜，跟着老师的分阶护理方案，现在皮肤终于不那么脆弱了，可以正常化妆出门了。",
    author: "王女士",
    age: 38,
    type: "敏感肌修复案例",
    avatar: "👩‍💼",
  },
  {
    id: 3,
    content: "作为全职妈妈，我一直想做点副业。加入爱美舜做代理，不是为了暴富，而是真的认可产品。自己用好了，分享给身边的姐妹，大家都有收获。这种踏实的感觉很好。",
    author: "张女士",
    age: 35,
    type: "代理成长案例",
    avatar: "👩‍👧",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F6]">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-medium text-[#F37021] uppercase tracking-wider mb-4">
            真实蜕变
          </span>

          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-[#4A4A48]">
            见证1800+姐妹的肌肤 journey
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            <div className="absolute top-6 left-6 md:top-8 md:left-8">
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-[#F37021]/20" />
            </div>

            <div className="relative z-10 pt-8">
              <blockquote>
                <p className="text-lg md:text-xl text-[#4A4A48] leading-relaxed font-serif italic">
                  "{activeTestimonial.content}"
                </p>
              </blockquote>

              <div className="mt-8 pt-6 border-t border-[#E8E2DB]">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F5F1ED] rounded-full flex items-center justify-center text-2xl">
                      {activeTestimonial.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-[#4A4A48]">
                        —— {activeTestimonial.author}，{activeTestimonial.age}岁
                      </p>
                      <p className="text-sm text-[#8A8A88]">
                        {activeTestimonial.type}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={goToPrevious}
                      className="w-10 h-10 rounded-full border border-[#E8E2DB] flex items-center justify-center text-[#6A6A68] hover:bg-[#F5F1ED] transition-colors"
                      aria-label="上一条评价"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === activeIndex ? "bg-[#F37021]" : "bg-[#E8E2DB]"
                          }`}
                          aria-label={`查看第${index + 1}条评价`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={goToNext}
                      className="w-10 h-10 rounded-full border border-[#E8E2DB] flex items-center justify-center text-[#6A6A68] hover:bg-[#F5F1ED] transition-colors"
                      aria-label="下一条评价"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-[#F37021] text-[#F37021] hover:bg-[#F37021]/10"
          >
            <Link href="/cases">查看全部案例</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

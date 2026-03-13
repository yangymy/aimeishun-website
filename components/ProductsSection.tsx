"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "洁面精华液",
    tag: "深层清洁",
    tagColor: "bg-[#C9A961]/10 text-[#C9A961]",
    description: "氨基酸配方，温和不刺激，深层清洁同时保护肌肤屏障，适合敏感肌日常使用。",
    image: "/images/products/01_cleansing_essence_luxury.png",
  },
  {
    id: 2,
    name: "靓肤隔离乳",
    tag: "隔离防护",
    tagColor: "bg-[#C9A961]/10 text-[#C9A961]",
    description: "轻薄透气，有效隔离外界污染，打造自然裸妆效果，适合日常使用。",
    image: "/images/products/02_skin_primer_luxury.png",
  },
  {
    id: 3,
    name: "草本美肌液",
    tag: "美白提亮",
    tagColor: "bg-[#C9A961]/10 text-[#C9A961]",
    description: "草本精华配方，温和美白提亮肤色，淡化色斑痘印，均匀肤色。",
    image: "/images/products/03_herbal_essence_luxury.png",
  },
  {
    id: 4,
    name: "玉肌液",
    tag: "修护舒缓",
    tagColor: "bg-[#C9A961]/10 text-[#C9A961]",
    description: "珍贵草本提取物，修护受损肌肤，舒缓敏感，强化肌肤屏障。",
    image: "/images/products/04_jade_essence_luxury.png",
  },
  {
    id: 5,
    name: "草本清颜液",
    tag: "控油祛痘",
    tagColor: "bg-[#C9A961]/10 text-[#C9A961]",
    description: "草本控油配方，调节肌肤水油平衡，有效改善痘痘问题。",
    image: "/images/products/05_clarifying_essence_luxury.png",
  },
  {
    id: 6,
    name: "净肤精华液",
    tag: "深层净化",
    tagColor: "bg-[#C9A961]/10 text-[#C9A961]",
    description: "深层净化毛孔，去除多余油脂和污垢，让肌肤清爽透亮。",
    image: "/images/products/06_purifying_essence_luxury.png",
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden border border-[#F0F0F0] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(0,0,0,0.1)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="aspect-square bg-gradient-to-b from-[#FAFAFA] to-[#F5F5F5] relative overflow-hidden p-8">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
        />

        <Badge className={`absolute top-4 left-4 ${product.tagColor} border-0 rounded-full px-3 py-1 text-xs font-medium`}>
          {product.tag}
        </Badge>

        <div className="absolute inset-0 bg-[#C9A961]/0 group-hover:bg-[#C9A961]/5 transition-colors duration-500" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-serif font-semibold text-[#1A1A1A] mb-2">
          {product.name}
        </h3>

        <p className="text-sm text-[#666666] leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        <Link
          href="/products"
          className="inline-flex items-center text-sm font-medium text-[#C9A961] hover:text-[#B8986B] transition-colors group/link"
        >
          了解详情
          <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
}

export function ProductsSection() {
  return (
    <section
      id="products"
      className="py-24 md:py-32 bg-white"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block text-sm font-medium text-[#F37021] uppercase tracking-[0.3em] mb-4">
            Products
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#4A4A48] mb-6 leading-tight">
            专为30+女性问题肌肤研发
          </h2>

          <p className="text-base md:text-lg text-[#6A6A68] leading-relaxed">
            每一款产品，都持有国妆特证。都经过团队6个月以上试用验证。都采用0添加配方，安全到可以居家使用。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Button
            asChild
            variant="outline"
            className="border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-white rounded-full px-8 transition-all duration-500"
          >
            <Link href="/products">查看全部产品</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

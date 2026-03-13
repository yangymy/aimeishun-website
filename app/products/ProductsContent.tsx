"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard, Product } from "@/components/ProductCard";
import { getProductImagePath } from "@/components/ProductImage";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const baseProducts: Omit<Product, "image">[] = [
  {
    id: 1,
    name: "洁面精华液",
    price: 199,
    benefit: "四大核心技术，吸附自由基、深层洁净、可卸彩妆、0刺激",
    category: "清洁",
    imagePrompt: "A luxury white pump bottle facial cleanser, Japanese minimalist skincare aesthetic...",
    description: "温和清洁肌肤，不破坏皮脂膜，洗后不紧绷"
  },
  {
    id: 2,
    name: "靓肤隔离乳",
    price: 299,
    benefit: "植物养肤专利技术，隔离防晒、清爽清透、温和滋润",
    category: "隔离",
    imagePrompt: "Elegant white bottle with silver cap makeup base primer...",
    description: "隔离防晒、清爽清透、温和滋润、舒缓遮瑕"
  },
  {
    id: 3,
    name: "草本美肌液",
    price: 499,
    benefit: "改善皮肤十大问题，7天祛黄14天净白，排铅排汞",
    category: "精华",
    imagePrompt: "Luxurious turquoise glass bottle with silver flower-shaped cap essence...",
    description: "排铅排汞、淡斑祛斑、紧致提升、改善激素脸黄褐斑"
  },
  {
    id: 4,
    name: "玉肌液",
    price: 439,
    benefit: "独特透皮吸收技术，抗氧化、淡斑美白、抗糖化",
    category: "精华",
    imagePrompt: "Premium skincare serum bottle, Japanese luxury cosmetics style...",
    description: "控油祛痘、激活胶原，细胞级顶尖技术"
  },
  {
    id: 5,
    name: "草本清颜液",
    price: 439,
    benefit: "美白淡斑、消炎杀菌，抑制黑色素、分解黑色素",
    category: "精华",
    imagePrompt: "Amber glass dropper bottle luxury essence, Japanese skincare aesthetic...",
    description: "适用粗黄肌、油田肌、痘痘肌、黄褐斑"
  },
  {
    id: 6,
    name: "净肤精华液",
    price: 1000,
    benefit: "深层修复、医美术后修护，促进胶原再生、抗氧化",
    category: "精华",
    imagePrompt: "Premium blue gradient bottle with rose gold cap serum...",
    description: "修复调理、促进胶原再生、抗氧化、排毒"
  },
  {
    id: 7,
    name: "养护精华液",
    price: 439,
    benefit: "深层修复、促进胶原愈合，修复损伤、延缓衰老",
    category: "精华",
    imagePrompt: "Elegant white bottle with silver cap essence, Japanese luxury skincare style...",
    description: "修复损伤、抗氧化、延缓衰老、排毒"
  },
  {
    id: 8,
    name: "青春童颜精华液",
    price: 299,
    benefit: "强效保湿、抗氧化，让皮肤光滑水润有弹性",
    category: "精华",
    imagePrompt: "Premium white bottle with transparent cap anti-aging serum...",
    description: "强效保湿、抗氧化"
  },
  {
    id: 9,
    name: "美肌倍护精华液",
    price: 499,
    benefit: "1分钟止痒、10分钟退红，修护皮肤屏障、长效保湿",
    category: "精华",
    imagePrompt: "Luxurious white bottle with gold cap protective essence...",
    description: "修护皮肤屏障、长效保湿"
  },
  {
    id: 10,
    name: "靓肤透润霜",
    price: 399,
    benefit: "美白保湿、补水锁水，提亮肌肤、晒后修复",
    category: "面霜",
    imagePrompt: "Elegant silver jar luxury face cream, Japanese high-end skincare aesthetic...",
    description: "美白保湿、补水锁水，提亮肌肤、晒后修复"
  },
  {
    id: 11,
    name: "皮肤肌底冻干粉",
    price: 799,
    benefit: "中国发明专利、暨大8w单位，抗氧化、淡化黑色素",
    category: "冻干粉",
    imagePrompt: "Premium glass vial with green cap freeze-dried powder...",
    description: "修复基底细胞、长皮长肉"
  },
  {
    id: 12,
    name: "多肽倍护面膜",
    price: 168,
    benefit: "16种氨基酸、9大植物精粹，修复红血丝、舒缓保湿",
    category: "面膜",
    imagePrompt: "Luxury facial mask packaging, Japanese high-end skincare aesthetic...",
    description: "修复红血丝、舒缓保湿、抗敏抗炎"
  }
];

const products: Product[] = baseProducts.map((product) => ({
  ...product,
  image: getProductImagePath(product.id, product.name),
}));

const categories = ["全部", "精华", "面霜", "面膜", "冻干粉", "清洁", "隔离"];

export function ProductsContent() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredProducts =
    activeCategory === "全部"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <section className="border-b border-[#E8E2DB] bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#F37021] text-white shadow-lg shadow-[#F37021]/25"
                    : "bg-[#F5F1ED] text-[#6A6A68] hover:bg-[#E8E2DB] hover:text-[#4A4A48]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#F5F1ED' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#F37021]/10 px-4 py-2 text-sm font-medium text-[#F37021]"
            >
              <Sparkles className="h-4 w-4" />
              共 {filteredProducts.length} 款产品
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#E8E2DB]">
                <Sparkles className="h-8 w-8 text-[#6A6A68]" />
              </div>
              <p className="text-lg text-[#6A6A68]">该分类下暂无产品</p>
              <button
                onClick={() => setActiveCategory("全部")}
                className="mt-4 text-sm font-medium text-[#F37021] hover:underline"
              >
                查看全部产品
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20" style={{ backgroundColor: '#F37021' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            需要专业护肤建议？
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
            我们的护肤专家随时为您提供一对一咨询服务，
            帮助您找到最适合的护肤方案。
          </p>
          <Button
            size="lg"
            className="mt-8 gap-2 rounded-full bg-white px-8 py-6 text-base font-medium text-[#F37021] shadow-xl transition-all hover:scale-105 hover:bg-white/95 hover:shadow-2xl"
          >
            <MessageCircle className="h-5 w-5" />
            联系咨询
          </Button>
        </div>
      </section>
    </>
  );
}

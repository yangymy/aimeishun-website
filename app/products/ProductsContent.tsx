"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  skinType: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "氨基酸温和洁面乳",
    description: "温和清洁肌肤，不破坏皮脂膜，洗后不紧绷",
    ingredients: "氨基酸表活、甘油、透明质酸",
    skinType: "所有肤质",
    category: "洁面",
  },
  {
    id: 2,
    name: "玻尿酸保湿精华液",
    description: "深层补水锁水，打造水润透亮肌肤",
    ingredients: "玻尿酸、泛醇、神经酰胺",
    skinType: "干性/混合性",
    category: "精华",
  },
  {
    id: 3,
    name: "烟酰胺亮肤精华",
    description: "提亮肤色，淡化暗沉，均匀肌肤色泽",
    ingredients: "烟酰胺、维生素C、熊果苷",
    skinType: "暗沉肌/混合性",
    category: "精华",
  },
  {
    id: 4,
    name: "积雪草修护面霜",
    description: "修护肌肤屏障，舒缓敏感，强韧肌底",
    ingredients: "积雪草提取物、泛醇、角鲨烷",
    skinType: "敏感肌/受损肌",
    category: "面霜",
  },
  {
    id: 5,
    name: "视黄醇抗皱眼霜",
    description: "淡化眼周细纹，紧致提拉眼部肌肤",
    ingredients: "视黄醇、咖啡因、肽类",
    skinType: "所有肤质",
    category: "眼部护理",
  },
  {
    id: 6,
    name: "防晒霜 SPF50+",
    description: "高倍防晒保护，清爽不油腻，日常防护",
    ingredients: "物理防晒剂、维生素E、透明质酸",
    skinType: "所有肤质",
    category: "防晒",
  },
  {
    id: 7,
    name: "水杨酸祛痘精华",
    description: "祛痘控油，疏通毛孔，改善痘痘肌",
    ingredients: "水杨酸、茶树精油、锌",
    skinType: "油性/痘痘肌",
    category: "精华",
  },
  {
    id: 8,
    name: "神经酰胺修护乳",
    description: "保湿修护双重功效，强健肌肤屏障",
    ingredients: "神经酰胺、胆固醇、脂肪酸",
    skinType: "干性/敏感肌",
    category: "乳液",
  },
  {
    id: 9,
    name: "VC美白精华液",
    description: "美白淡斑，抗氧化，提亮整体肤色",
    ingredients: "维生素C、阿魏酸、维生素E",
    skinType: "暗沉肌/色斑肌",
    category: "精华",
  },
  {
    id: 10,
    name: "胶原蛋白面膜",
    description: "紧致抗衰，补充胶原，提升肌肤弹性",
    ingredients: "胶原蛋白、胜肽、透明质酸",
    skinType: "轻熟龄肌",
    category: "面膜",
  },
  {
    id: 11,
    name: "茶树精油",
    description: "舒缓消炎，局部点涂，快速镇静痘痘",
    ingredients: "澳洲茶树精油、金缕梅、芦荟",
    skinType: "油性/痘痘肌",
    category: "精油",
  },
  {
    id: 12,
    name: "玫瑰纯露喷雾",
    description: "随时随地补水保湿，清新舒缓肌肤",
    ingredients: "大马士革玫瑰纯露、透明质酸",
    skinType: "所有肤质",
    category: "喷雾",
  },
];

const categories = ["全部", "洁面", "精华", "面霜", "乳液", "眼部护理", "防晒", "面膜", "精油", "喷雾"];

export function ProductsContent() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredProducts =
    activeCategory === "全部"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="border-b border-[#E8E2DB] bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-[#F37021] text-white shadow-md"
                    : "bg-[#F5F1ED] text-[#6A6A68] hover:bg-[#E8E2DB]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F5F1ED' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-none bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#F37021]/20 to-[#D4A574]/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-4xl text-[#F37021]/40">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute right-3 top-3">
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-[#F37021] backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="font-serif text-lg text-[#4A4A48]">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-[#6A6A68]">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3 pt-0">
                  <div className="text-sm">
                    <span className="font-medium text-[#F37021]">主要成分：</span>
                    <span className="text-[#6A6A68]">{product.ingredients}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-[#F37021]">适用肤质：</span>
                    <span className="text-[#6A6A68]">{product.skinType}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-[#6A6A68]">该分类下暂无产品</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#F37021' }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            需要专业护肤建议？
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            我们的护肤专家随时为您提供一对一咨询服务，
            帮助您找到最适合的护肤方案。
          </p>
          <Button
            size="lg"
            className="mt-8 gap-2 px-8 py-6 text-base font-medium text-white hover:opacity-90"
            style={{ backgroundColor: '#D4A574' }}
          >
            <MessageCircle className="h-5 w-5" />
            联系咨询
          </Button>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Droplets, Sun, Eye, Leaf, Shield } from "lucide-react";

const products = [
  {
    id: 1,
    name: "氨基酸温和洁面乳",
    tag: "深层清洁",
    tagColor: "bg-[#7A9E8C]/10 text-[#5F7D6E]",
    description: "氨基酸配方，温和不刺激，深层清洁同时保护肌肤屏障，适合敏感肌日常使用。",
    icon: Droplets,
  },
  {
    id: 2,
    name: "玻尿酸保湿精华液",
    tag: "补水保湿",
    tagColor: "bg-blue-100 text-blue-700",
    description: "高浓度玻尿酸，深层补水锁水，让肌肤保持水润饱满状态。",
    icon: Droplets,
  },
  {
    id: 3,
    name: "烟酰胺亮肤精华",
    tag: "美白提亮",
    tagColor: "bg-amber-100 text-amber-700",
    description: "5%烟酰胺配方，温和美白提亮肤色，淡化色斑痘印，均匀肤色。",
    icon: Sparkles,
  },
  {
    id: 4,
    name: "积雪草修护面霜",
    tag: "修护舒缓",
    tagColor: "bg-green-100 text-green-700",
    description: "积雪草提取物，修护受损肌肤，舒缓敏感，强化肌肤屏障。",
    icon: Leaf,
  },
  {
    id: 5,
    name: "视黄醇抗皱眼霜",
    tag: "抗皱紧致",
    tagColor: "bg-purple-100 text-purple-700",
    description: "视黄醇配方，淡化细纹皱纹，紧致眼周，改善黑眼圈问题。",
    icon: Eye,
  },
  {
    id: 6,
    name: "防晒霜 SPF50+",
    tag: "防晒保护",
    tagColor: "bg-orange-100 text-orange-700",
    description: "高倍防晒，轻薄不油腻，有效阻挡UVA/UVB，日常防护必备。",
    icon: Shield,
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const Icon = product.icon;
  return (
    <div className="group bg-white rounded-2xl border border-[#E8E2DB] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square bg-[#F5F1ED] relative overflow-hidden">
        <div className="w-full h-full flex flex-col items-center justify-center text-[#6A6A68]">
          <div className="w-20 h-20 bg-[#7A9E8C]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#7A9E8C]/20 transition-colors">
            <Icon className="w-8 h-8 text-[#7A9E8C]" />
          </div>
          <span className="text-sm font-medium">{product.name}</span>
        </div>

        <Badge className={`absolute top-4 left-4 ${product.tagColor} border-0`}>
          {product.tag}
        </Badge>

        <div className="absolute inset-0 bg-[#7A9E8C]/0 group-hover:bg-[#7A9E8C]/5 transition-colors duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-serif font-semibold text-[#4A4A48] mb-2">
          {product.name}
        </h3>

        <p className="text-sm text-[#6A6A68] leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        <Link
          href="/products"
          className="inline-flex items-center text-sm font-medium text-[#7A9E8C] hover:text-[#5F7D6E] transition-colors group/link"
        >
          了解详情
          <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export function ProductsSection() {
  return (
    <section
      id="products"
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium text-[#7A9E8C] uppercase tracking-wider mb-4">
            明星产品
          </span>

          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-[#4A4A48] mb-4">
            专为30+女性问题肌肤研发
          </h2>

          <p className="text-base text-[#6A6A68] leading-relaxed">
            每一款产品，都持有国妆特证。都经过团队6个月以上试用验证。都采用0添加配方，安全到可以居家使用。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-[#7A9E8C] text-[#7A9E8C] hover:bg-[#7A9E8C]/10"
          >
            <Link href="/products">查看全部产品</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

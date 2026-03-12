import type { Metadata } from "next";
import { AgentContent } from "./AgentContent";

export const metadata: Metadata = {
  title: "代理合作 | 爱美舜",
  description: "爱美舜代理合作计划，0库存一件代发，专业培训支持。专注30+女性问题肌肤护理品牌，复购率85%，助您开启美业创业之路。",
  keywords: ["爱美舜代理", "护肤品代理", "美业创业", "一件代发", "0库存创业", "代理加盟"],
  alternates: {
    canonical: "https://www.aimeishun.cn/agent/",
  },
  openGraph: {
    title: "代理合作 | 爱美舜",
    description: "爱美舜代理合作计划，0库存一件代发，专业培训支持。专注30+女性问题肌肤护理品牌，复购率85%，助您开启美业创业之路。",
    url: "https://www.aimeishun.cn/agent/",
    type: "website",
  },
};

export default function AgentPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F6]">
      <section className="relative bg-[#4A4A48] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7A9E8C]/30 to-transparent" />
        </div>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              代理合作
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              与爱美舜携手，开启您的美业创业之路
              <br />
              专业培训 · 品牌支持 · 区域保护 · 持续共赢
            </p>
          </div>
        </div>
      </section>

      <AgentContent />
    </main>
  );
}

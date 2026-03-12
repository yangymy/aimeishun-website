import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CasesContent } from "./CasesContent";

export const metadata: Metadata = {
  title: "客户案例 | 爱美舜",
  description: "1800+真实客户蜕变故事，祛斑、敏感肌修复、代理成长案例。见证爱美舜功效型护肤品牌的真实效果，从肌肤困扰到自信绽放的真实记录。",
  keywords: ["爱美舜案例", "祛斑案例", "敏感肌修复", "客户见证", "护肤效果", "代理成长"],
  alternates: {
    canonical: "https://www.aimeishun.cn/cases/",
  },
  openGraph: {
    title: "客户案例 | 爱美舜",
    description: "1800+真实客户蜕变故事，祛斑、敏感肌修复、代理成长案例。见证爱美舜功效型护肤品牌的真实效果。",
    url: "https://www.aimeishun.cn/cases/",
    type: "website",
  },
};

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F6]">
      <Navbar />

      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#F5F1ED]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-medium text-[#F37021] uppercase tracking-wider mb-4">
              Success Stories
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#4A4A48] mb-4">
              客户案例
            </h1>
            <p className="text-base md:text-lg text-[#6A6A68] leading-relaxed">
              每一个蜕变故事都是真实的见证，从肌肤困扰到自信绽放，
              <br className="hidden md:block" />
              从创业小白到事业成功，爱美舜与您共同成长
            </p>
          </div>
        </div>
      </section>

      <CasesContent />

      <Footer />
    </main>
  );
}

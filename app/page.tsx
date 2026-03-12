import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FounderSection } from "@/components/FounderSection";
import { ProductsSection } from "@/components/ProductsSection";
import { CasesSection } from "@/components/CasesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "爱美舜 | 专注30+女性问题肌肤护理",
  description: "爱美舜功效型护肤品牌，专注30+女性问题肌肤护理。国家高级美容师陈瑾钰老师一对一指导，1800+成功案例见证，科学分阶护肤方案助您养出健康好肌肤。",
  keywords: ["爱美舜", "护肤品牌", "问题肌肤", "30+女性护肤", "祛斑", "敏感肌修护", "陈瑾钰", "功效型护肤"],
  alternates: {
    canonical: "https://www.aimeishun.cn/",
  },
  openGraph: {
    title: "爱美舜 | 专注30+女性问题肌肤护理",
    description: "爱美舜功效型护肤品牌，专注30+女性问题肌肤护理。国家高级美容师陈瑾钰老师一对一指导，1800+成功案例见证。",
    url: "https://www.aimeishun.cn/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FounderSection />
      <ProductsSection />
      <CasesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

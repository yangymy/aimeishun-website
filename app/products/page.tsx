import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductsContent } from "./ProductsContent";

export const metadata: Metadata = {
  title: "产品中心 | 爱美舜",
  description: "爱美舜12款专业护肤产品，针对色斑、敏感肌、痘痘、衰老等问题肌肤。科学配方，国妆特证，安全有效。洁面、精华、面霜、乳液、眼霜、防晒全品类覆盖。",
  keywords: ["爱美舜产品", "护肤品", "祛斑精华", "敏感肌修护", "抗衰老", "洁面", "保湿", "防晒"],
  alternates: {
    canonical: "https://www.aimeishun.cn/products/",
  },
  openGraph: {
    title: "产品中心 | 爱美舜",
    description: "爱美舜12款专业护肤产品，针对色斑、敏感肌、痘痘、衰老等问题肌肤。科学配方，国妆特证，安全有效。",
    url: "https://www.aimeishun.cn/products/",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="py-16 md:py-24" style={{ backgroundColor: '#F5F1ED' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-[#4A4A48] md:text-5xl lg:text-6xl">
              产品中心
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6A6A68]">
              源自自然，呵护肌肤。爱美舜为您精心挑选12款优质护肤产品，
              满足不同肌肤需求，让美丽从内而外绽放。
            </p>
          </div>
        </div>
      </section>

      <ProductsContent />

      <Footer />
    </main>
  );
}

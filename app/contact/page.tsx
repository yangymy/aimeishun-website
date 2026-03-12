import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "联系我们 | 爱美舜",
  description: "联系爱美舜，获取一对一护肤咨询、代理合作咨询。添加创始人陈瑾钰老师微信，享受专业肌肤诊断和护肤方案建议。工作日9:00-21:00在线。",
  keywords: ["联系爱美舜", "护肤咨询", "微信咨询", "代理合作", "肌肤问题", "陈瑾钰微信"],
  alternates: {
    canonical: "https://www.aimeishun.cn/contact/",
  },
  openGraph: {
    title: "联系我们 | 爱美舜",
    description: "联系爱美舜，获取一对一护肤咨询、代理合作咨询。添加创始人陈瑾钰老师微信，享受专业肌肤诊断和护肤方案建议。",
    url: "https://www.aimeishun.cn/contact/",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--ivory-light)]">
      <section className="bg-gradient-to-b from-[var(--jade)]/10 to-transparent py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4 leading-tight">
            联系爱美舜——
            <br />
            <span className="text-[var(--jade)]">随时为你解答护肤疑问</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--dark-light)] max-w-2xl mx-auto mt-6">
            无论是肌肤问题咨询、产品使用指导，还是商务合作洽谈
            <br />
            都可以找到我们
          </p>
        </div>
      </section>

      <ContactContent />
    </div>
  );
}

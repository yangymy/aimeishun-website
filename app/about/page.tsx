import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "关于我们 | 爱美舜",
  description:
    "了解爱美舜品牌故事、创始人陈瑾钰老师、品牌理念。20余年问题肌肤专家，专注30+女性护肤，1800+成功案例见证。科学分阶护肤，国妆特证产品。",
  keywords: [
    "爱美舜品牌故事",
    "陈瑾钰",
    "品牌创始人",
    "问题肌肤专家",
    "护肤品牌理念",
    "国妆特证",
    "30+女性护肤",
  ],
  alternates: {
    canonical: "https://www.aimeishun.cn/about/",
  },
  openGraph: {
    title: "关于我们 | 爱美舜",
    description:
      "了解爱美舜品牌故事、创始人陈瑾钰老师、品牌理念。20余年问题肌肤专家，专注30+女性护肤，1800+成功案例见证。",
    url: "https://www.aimeishun.cn/about/",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}

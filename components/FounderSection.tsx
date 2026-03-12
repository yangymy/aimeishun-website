import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

export function FounderSection() {
  return (
    <section
      id="founder"
      className="py-16 md:py-24 bg-[#FAF8F6]"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-1 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-[#F37021]/10 rounded-2xl -z-10" />

              <div className="w-full h-full bg-[#F5F1ED] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center text-[#6A6A68] p-8">
                <div className="w-32 h-32 bg-[#F37021]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-4xl">👩</span>
                </div>
                <span className="text-lg font-medium">创始人形象照</span>
                <span className="text-sm mt-2">陈瑾钰老师</span>
                <span className="text-xs mt-1 text-[#8A8A88]">建议尺寸：600x800px</span>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-[#F37021]" />
                  <p className="text-sm font-medium text-[#4A4A48]">国家高级美容师</p>
                </div>
                <p className="text-xs text-[#8A8A88]">20余年一线经验</p>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <span className="inline-block text-sm font-medium text-[#F37021] uppercase tracking-wider mb-4">
              品牌创始人
            </span>

            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-[#4A4A48] mb-6 leading-tight">
              认识瑾钰——
              <span className="block mt-1 text-[#F37021]">
                你的问题肌肤护肤顾问
              </span>
            </h2>

            <div className="space-y-4 text-base text-[#6A6A68] leading-relaxed">
              <p>
                我是陈瑾钰，爱美舜品牌创始人，深耕问题肌肤领域
                <strong className="text-[#4A4A48]">二十余年</strong>
                的国家高级美容师。
              </p>

              <p>
                二十多年前，我还是一名一线美容师。那时候，我见过太多30+的姐妹，因为
                <strong>乱护肤、用激素类产品、踩美容院的坑</strong>
                ，导致烂脸、花冤枉钱。
              </p>

              <p>
                2018年，我创立了爱美舜。
                <strong className="text-[#4A4A48]">8年来</strong>
                ，我们专注于30+女性问题肌肤修护，累计帮助
                <strong>1800多位姐妹</strong>
                解决了色斑、敏感肌、痘痘等肌肤问题。
              </p>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E2DB] my-6">
                <p className="text-[#4A4A48] font-medium italic">
                  "我的护肤理念很简单：好皮肤是养出来的，不是治出来的。30+的女人，护肤要做减法，选对成分比用贵的更重要。"
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                variant="outline"
                className="border-[#F37021] text-[#F37021] hover:bg-[#F37021]/10"
              >
                <Link href="/about">了解品牌故事</Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="text-[#F37021] hover:text-[#D65A0F] hover:bg-[#F37021]/10"
              >
                <Link href="/contact">联系瑾钰咨询 →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

const cases = [
  {
    id: 1,
    title: "40岁黄褐斑修护案例",
    category: "色斑修护",
    duration: "3个月",
    description: "李女士，42岁，黄褐斑困扰十年。使用爱美舜分阶护理方案后，色斑明显淡化，肌肤恢复均匀透亮。",
    result: "色斑淡化70%",
  },
  {
    id: 2,
    title: "敏感肌修复实录",
    category: "敏感肌修护",
    duration: "2个月",
    description: "王女士，38岁，敏感肌十几年，换季必出问题。跟随瑾钰老师的修护方案，肌肤屏障逐渐恢复健康。",
    result: "敏感减少90%",
  },
  {
    id: 3,
    title: "痘痘肌蜕变之旅",
    category: "痘痘肌调理",
    duration: "4个月",
    description: "张女士，35岁，反复长痘困扰多年。科学分阶护肤+内调方案，从根源解决痘痘问题。",
    result: "痘痘减少95%",
  },
];

function CaseCard({ caseItem }: { caseItem: typeof cases[0] }) {
  return (
    <div className="group bg-[#FAF8F6] rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-[#F37021]">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <Badge className="bg-[#F37021]/10 text-[#D65A0F] border-0 hover:bg-[#F37021]/20">
          {caseItem.category}
        </Badge>
        <div className="flex items-center gap-1 text-sm text-[#8A8A88]">
          <Clock className="w-4 h-4" />
          <span>{caseItem.duration}</span>
        </div>
      </div>

      <h3 className="font-serif text-xl font-semibold text-[#4A4A48] mb-3">
        {caseItem.title}
      </h3>

      <p className="text-sm text-[#6A6A68] leading-relaxed mb-4">
        {caseItem.description}
      </p>

      <div className="bg-white rounded-lg p-4 mb-4">
        <span className="text-xs text-[#8A8A88] uppercase tracking-wider">改善效果</span>
        <p className="text-lg font-semibold text-[#F37021]">{caseItem.result}</p>
      </div>

      <Link
        href="/cases"
        className="inline-flex items-center text-sm font-medium text-[#F37021] hover:text-[#D65A0F] transition-colors group/link"
      >
        查看详情
        <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

export function CasesSection() {
  return (
    <section
      id="cases"
      className="py-16 md:py-24 bg-[#F5F1ED]"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium text-[#F37021] uppercase tracking-wider mb-4">
            真实案例
          </span>

          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-[#4A4A48] mb-4">
            见证姐妹们的肌肤蜕变
          </h2>

          <p className="text-base text-[#6A6A68] leading-relaxed">
            每一个案例都是真实的改变，每一个数字背后都是对美丽的坚持
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((caseItem) => (
            <CaseCard key={caseItem.id} caseItem={caseItem} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-[#F37021] text-[#F37021] hover:bg-[#F37021]/10"
          >
            <Link href="/cases">查看全部案例</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sun,
  Baby,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Target,
  Sparkles,
  Shield,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

export const metadata: Metadata = {
  title: "黄褐斑的形成原因和淡化方法 | 爱美舜",
  description: "深入了解黄褐斑的形成原因，掌握科学的淡化方法。从紫外线防护到内在调理，全方位解决黄褐斑困扰，恢复健康透亮肌肤。",
  keywords: ["黄褐斑怎么去除", "黄褐斑形成原因", "淡斑方法", "祛斑精华", "产后祛斑", "色素沉着"],
  alternates: {
    canonical: "https://www.aimeishun.cn/knowledge/黄褐斑的形成原因/",
  },
  openGraph: {
    title: "黄褐斑的形成原因和淡化方法 | 爱美舜",
    description: "深入了解黄褐斑的形成原因，掌握科学的淡化方法。全方位解决黄褐斑困扰，恢复健康透亮肌肤。",
    url: "https://www.aimeishun.cn/knowledge/黄褐斑的形成原因/",
    type: "article",
  },
};

const causes = [
  {
    title: "紫外线照射",
    description: "UVA/UVB刺激黑色素细胞活跃，导致黑色素过度生成并沉积在表皮或真皮层",
    icon: Sun,
    percentage: "70%",
  },
  {
    title: "荷尔蒙变化",
    description: "孕期、口服避孕药、更年期等导致的雌激素水平波动是黄褐斑的主要诱因",
    icon: Baby,
    percentage: "50%",
  },
  {
    title: "遗传因素",
    description: "有家族史的人群更容易出现黄褐斑，且往往程度较重、持续时间更长",
    icon: Clock,
    percentage: "30%",
  },
  {
    title: "其他因素",
    description: "压力、睡眠不足、某些药物、化妆品刺激等也会诱发或加重黄褐斑",
    icon: AlertTriangle,
    percentage: "25%",
  },
];

const types = [
  {
    name: "表皮型黄褐斑",
    characteristics: ["颜色较浅", "边界清晰", "位于表皮层"],
    difficulty: "相对容易淡化",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "真皮型黄褐斑",
    characteristics: ["颜色较深", "边界模糊", "位于真皮层"],
    difficulty: "淡化难度较大",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "混合型黄褐斑",
    characteristics: ["深浅不一", "表皮真皮都有", "最常见"],
    difficulty: "需要综合治疗",
    color: "bg-red-100 text-red-700",
  },
];

const prevention = [
  "全年使用SPF30+ PA+++防晒霜",
  "外出时戴帽子、太阳镜、遮阳伞",
  "避免在紫外线最强时段（10:00-16:00）外出",
  "室内靠近窗户时也要防晒",
  "防晒每2-3小时补涂一次",
];

const treatmentSteps = [
  {
    phase: "第一阶段",
    duration: "1-4周",
    title: "抑制黑色素生成",
    description: "使用含烟酰胺、维C、熊果苷等成分的产品，从源头抑制酪氨酸酶活性",
    products: "美白精华、维C精华",
  },
  {
    phase: "第二阶段",
    duration: "4-8周",
    title: "加速代谢排出",
    description: "促进角质代谢，帮助含有黑色素的角质细胞脱落，淡化表层色斑",
    products: "温和果酸、烟酰胺精华",
  },
  {
    phase: "第三阶段",
    duration: "8-12周",
    title: "深层修护维稳",
    description: "修护肌肤屏障，防止色斑反弹，建立长期防护机制",
    products: "修护精华、防晒霜",
  },
];

const ingredients = [
  {
    name: "烟酰胺",
    mechanism: "抑制黑色素向角质细胞转移",
    concentration: "2-5%",
    effectiveness: "★★★★★",
  },
  {
    name: "维生素C",
    mechanism: "还原黑色素，抗氧化",
    concentration: "10-20%",
    effectiveness: "★★★★☆",
  },
  {
    name: "熊果苷",
    mechanism: "抑制酪氨酸酶活性",
    concentration: "2-7%",
    effectiveness: "★★★★☆",
  },
  {
    name: "传明酸",
    mechanism: "抑制黑色素生成，抗炎",
    concentration: "2-3%",
    effectiveness: "★★★★★",
  },
];

const taboos = [
  {
    wrong: "使用速效祛斑产品",
    reason: "可能含激素或重金属，短期见效但会反弹甚至加重",
  },
  {
    wrong: "频繁去角质",
    reason: "破坏肌肤屏障，反而刺激黑色素生成",
  },
  {
    wrong: "只涂防晒霜不防护",
    reason: "物理防护同样重要，单靠防晒霜不够",
  },
  {
    wrong: "急于求成，叠加多种美白产品",
    reason: "容易造成刺激，引发炎症后色素沉着",
  },
];

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F6]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#F5F1ED] to-[#FAF8F6]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-[#F37021]/10 text-[#F37021] border-[#F37021]/20 mb-4">
              色斑专题
            </Badge>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A4A48] mb-6 leading-tight">
              黄褐斑的形成原因和淡化方法
            </h1>
            <p className="text-lg text-[#6A6A68] leading-relaxed max-w-2xl mx-auto">
              黄褐斑被称为"斑中之王"，是最难对付的色斑类型之一。
              但只要了解成因、科学应对，完全可以淡化改善。
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-[#8A8A88]">
              <span>发布时间：2026年4月12日</span>
              <span>|</span>
              <span>阅读时间：10分钟</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border-[#E8E2DB]">
            <CardContent className="p-8">
              <p className="text-lg text-[#4A4A48] leading-relaxed mb-4">
                很多女性朋友发现，不知从什么时候开始，脸颊两侧出现了对称的褐色斑块。
                它们不像晒斑那样边界清晰，而是呈现模糊的片状，
                <span className="text-[#F37021] font-medium">这就是黄褐斑</span>。
              </p>
              <p className="text-lg text-[#4A4A48] leading-relaxed mb-4">
                黄褐斑多发于30-50岁女性，尤其是孕期和产后妈妈。它不仅影响外观，
                更会给心理带来负担。很多人尝试了各种方法却总是反复，
                其实问题的根源在于：没有找准成因，盲目治疗。
              </p>
              <p className="text-lg text-[#4A4A48] leading-relaxed">
                本文将从科学角度解析黄褐斑的形成机制，并提供经过验证的淡化方案。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Causes */}
      <section className="py-12 md:py-16 bg-[#F5F1ED]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] mb-4">
              黄褐斑的四大成因
            </h2>
            <p className="text-[#6A6A68]">知己知彼，才能百战不殆</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {causes.map((item, index) => (
              <Card key={index} className="bg-white border-[#E8E2DB]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F37021]/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-[#F37021]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-[#4A4A48]">{item.title}</h3>
                        <Badge className="bg-[#F37021]/10 text-[#F37021]">{item.percentage}</Badge>
                      </div>
                      <p className="text-sm text-[#6A6A68]">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] mb-4">
              黄褐斑的三种类型
            </h2>
            <p className="text-[#6A6A68]">不同类型的黄褐斑，淡化难度不同</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {types.map((item, index) => (
              <Card key={index} className="bg-white border-[#E8E2DB]">
                <CardContent className="p-6">
                  <Badge className={`${item.color} mb-4`}>{item.name}</Badge>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-[#8A8A88] mb-2">特点</p>
                      <ul className="space-y-1">
                        {item.characteristics.map((char, i) => (
                          <li key={i} className="text-sm text-[#6A6A68] flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#F37021]" />
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8A88] mb-1">淡化难度</p>
                      <p className="text-sm font-medium text-[#4A4A48]">{item.difficulty}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#F37021]/5 to-[#D4A574]/5">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-[#E8E2DB]">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#F37021]" />
              <h2 className="font-serif text-2xl font-bold text-[#4A4A48]">
                预防胜于治疗：防晒是重中之重
              </h2>
            </div>
            <p className="text-[#6A6A68] mb-6">
              紫外线是黄褐斑的头号诱因，没有做好防晒，任何治疗都是徒劳。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevention.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F37021] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#6A6A68]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Steps */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] mb-4">
              科学淡化三部曲
            </h2>
            <p className="text-[#6A6A68]">循序渐进，安全有效</p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {treatmentSteps.map((step, index) => (
              <Card key={index} className="bg-white border-[#E8E2DB] overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-[#F37021] text-white p-6 md:w-1/4 flex flex-col justify-center items-center">
                    <span className="text-sm opacity-80">{step.phase}</span>
                    <span className="text-2xl font-bold mt-1">{step.duration}</span>
                  </div>
                  <div className="p-6 md:w-3/4">
                    <h3 className="font-medium text-[#4A4A48] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#6A6A68] mb-3">{step.description}</p>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-[#D4A574]" />
                      <span className="text-xs text-[#8A8A88]">推荐：{step.products}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-12 md:py-16 bg-[#F5F1ED]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] mb-4">
              淡化黄褐斑的有效成分
            </h2>
            <p className="text-[#6A6A68]">科学选成分，精准淡斑</p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E2DB]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F37021]/10 border-b border-[#E8E2DB]">
                    <th className="text-left py-4 px-6 font-medium text-[#4A4A48]">成分</th>
                    <th className="text-left py-4 px-6 font-medium text-[#4A4A48]">作用机制</th>
                    <th className="text-left py-4 px-6 font-medium text-[#4A4A48]">推荐浓度</th>
                    <th className="text-left py-4 px-6 font-medium text-[#4A4A48]">有效性</th>
                  </tr>
                </thead>
                <tbody>
                  {ingredients.map((item, index) => (
                    <tr key={index} className="border-b border-[#E8E2DB] last:border-b-0">
                      <td className="py-4 px-6 font-medium text-[#4A4A48]">{item.name}</td>
                      <td className="py-4 px-6 text-sm text-[#6A6A68]">{item.mechanism}</td>
                      <td className="py-4 px-6">
                        <Badge variant="outline">{item.concentration}</Badge>
                      </td>
                      <td className="py-4 px-6 text-[#F37021]">{item.effectiveness}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Product Recommendation */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F37021] to-[#D65A0F] rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold">爱美舜祛斑方案</h2>
            </div>
            <p className="text-white/90 mb-8 leading-relaxed">
              针对黄褐斑的复杂性，爱美舜研发了多靶点祛斑配方。我们的产品结合烟酰胺、
              传明酸、维C衍生物等多种有效成分，从抑制生成、阻断转运、加速代谢三个维度全面淡化色斑。
              国妆特证认证，安全有效。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/10 rounded-xl">
                <p className="text-3xl font-bold mb-1">3阶</p>
                <p className="text-sm text-white/80">科学淡斑</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl">
                <p className="text-3xl font-bold mb-1">国妆特证</p>
                <p className="text-sm text-white/80">安全认证</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl">
                <p className="text-3xl font-bold mb-1">28天</p>
                <p className="text-sm text-white/80">看见改变</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-white text-[#F37021] hover:bg-white/90">
              <Link href="/products">
                了解祛斑方案
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Taboos */}
      <section className="py-12 md:py-16 bg-[#F5F1ED]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] mb-4">
              淡化黄褐斑的四大禁忌
            </h2>
            <p className="text-[#6A6A68]">这些方法不仅无效，还可能让情况更糟</p>
          </div>

          <div className="space-y-4">
            {taboos.map((item, index) => (
              <Card key={index} className="bg-white border-[#E8E2DB] overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-red-50 p-4 md:w-1/3 flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span className="text-red-600 font-medium">禁忌：{item.wrong}</span>
                  </div>
                  <div className="p-4 md:w-2/3 flex items-center">
                    <p className="text-sm text-[#6A6A68]">
                      <span className="text-[#F37021] font-medium">原因：</span>
                      {item.reason}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-[#4A4A48] mb-8 text-center">常见问题</h2>
          <div className="space-y-4">
            <Card className="bg-white border-[#E8E2DB]">
              <CardContent className="p-6">
                <h3 className="font-medium text-[#4A4A48] mb-2">Q: 黄褐斑能彻底去除吗？</h3>
                <p className="text-sm text-[#6A6A68]">
                  A: 黄褐斑可以通过科学护理明显淡化，甚至接近肤色，但很难"彻底去除"。
                  更重要的是建立长期防护机制，防止复发。坚持正确护理，完全可以达到社交距离看不出的效果。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-[#E8E2DB]">
              <CardContent className="p-6">
                <h3 className="font-medium text-[#4A4A48] mb-2">Q: 产后黄褐斑会自己消退吗？</h3>
                <p className="text-sm text-[#6A6A68]">
                  A: 部分产后黄褐斑会随着激素水平恢复而淡化，但并非所有人都会自动消退。
                  建议产后6个月后如仍未消退，应开始积极护理，越早干预效果越好。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-[#E8E2DB]">
              <CardContent className="p-6">
                <h3 className="font-medium text-[#4A4A48] mb-2">Q: 激光能治好黄褐斑吗？</h3>
                <p className="text-sm text-[#6A6A68]">
                  A: 激光治疗对黄褐斑效果有限，甚至可能刺激加重。黄褐斑更适合用外用产品配合内调的方式改善，
                  激光仅作为辅助手段，且需谨慎选择。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F37021] to-[#D65A0F] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
              让黄褐斑不再是困扰
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              每个人的黄褐斑成因和类型不同，我们的专业顾问可以为您分析具体情况，
              制定个性化的淡化方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#F37021] hover:bg-white/90">
                <Link href="/contact">
                  免费肤质分析
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/cases">查看成功案例</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

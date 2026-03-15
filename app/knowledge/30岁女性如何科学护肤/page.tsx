import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Clock,
  Droplets,
  Sun,
  Moon,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "30岁女性如何科学护肤 | 爱美舜",
  description: "30岁女性护肤指南：科学护肤步骤、抗衰老策略、护肤品搭配建议。了解30岁肌肤特点，掌握正确护肤方法，延缓肌肤衰老。",
  keywords: ["30岁女人怎么护肤", "30岁护肤", "抗衰老", "科学护肤步骤", "30岁护肤品推荐", "抗衰老精华"],
  alternates: {
    canonical: "https://www.aimeishun.cn/knowledge/30岁女性如何科学护肤/",
  },
  openGraph: {
    title: "30岁女性如何科学护肤 | 爱美舜",
    description: "30岁女性护肤指南：科学护肤步骤、抗衰老策略、护肤品搭配建议。了解30岁肌肤特点，掌握正确护肤方法。",
    url: "https://www.aimeishun.cn/knowledge/30岁女性如何科学护肤/",
    type: "article",
  },
};

const skinCharacteristics = [
  {
    title: "胶原蛋白流失加速",
    description: "25岁后胶原蛋白每年流失约1%，30岁后流失速度加快，肌肤开始失去弹性",
    icon: Clock,
  },
  {
    title: "新陈代谢减缓",
    description: "细胞更新周期从28天延长至35-40天，肌肤自我修复能力下降",
    icon: Sparkles,
  },
  {
    title: "保湿能力降低",
    description: "皮脂分泌减少，天然保湿因子流失，肌肤更容易干燥紧绷",
    icon: Droplets,
  },
  {
    title: "色斑问题显现",
    description: "紫外线累积损伤显现，黄褐斑、晒斑等色素问题开始出现",
    icon: Sun,
  },
];

const morningRoutine = [
  { step: 1, title: "温和清洁", description: "氨基酸洁面，清除夜间代谢物", duration: "1分钟" },
  { step: 2, title: "爽肤水", description: "补水打底，调节肌肤pH值", duration: "30秒" },
  { step: 3, title: "抗氧化精华", description: "维C或维E精华，抵御自由基", duration: "1分钟" },
  { step: 4, title: "眼霜", description: "针对性解决眼周细纹", duration: "1分钟" },
  { step: 5, title: "保湿乳液/面霜", description: "锁住水分，形成保护膜", duration: "1分钟" },
  { step: 6, title: "防晒", description: "SPF30+ PA+++，全年必备", duration: "2分钟" },
];

const eveningRoutine = [
  { step: 1, title: "卸妆清洁", description: "双重清洁，彻底清除彩妆防晒", duration: "3分钟" },
  { step: 2, title: "爽肤水", description: "二次清洁+补水", duration: "30秒" },
  { step: 3, title: "修护精华", description: "烟酰胺、胜肽等抗老成分", duration: "1分钟" },
  { step: 4, title: "眼霜", description: "滋润修护，淡化黑眼圈", duration: "1分钟" },
  { step: 5, title: "晚霜/睡眠面膜", description: "深层滋养，夜间修护", duration: "1分钟" },
];

const antiAgingIngredients = [
  {
    name: "烟酰胺",
    concentration: "2-5%",
    benefits: ["提亮肤色", "改善细纹", "强化屏障"],
    suitable: "所有肤质",
  },
  {
    name: "维A醇",
    concentration: "0.1-0.3%",
    benefits: ["促进胶原", "淡化皱纹", "改善粗糙"],
    suitable: "耐受肌",
  },
  {
    name: "胜肽",
    concentration: "3-10%",
    benefits: ["紧致肌肤", "淡化细纹", "提升弹性"],
    suitable: "所有肤质",
  },
  {
    name: "玻尿酸",
    concentration: "0.1-1%",
    benefits: ["深层补水", "填充细纹", "提升弹性"],
    suitable: "所有肤质",
  },
];

const commonMistakes = [
  {
    mistake: "只用乳液不用面霜",
    solution: "30+肌肤需要面霜的封闭性锁水，建议乳液+面霜叠加使用",
  },
  {
    mistake: "忽略防晒",
    solution: "紫外线是衰老元凶，无论阴晴都要防晒",
  },
  {
    mistake: "过度清洁",
    solution: "早晚各一次足够，选择氨基酸洁面",
  },
  {
    mistake: "盲目追求高浓度",
    solution: "低浓度长期坚持比高浓度刺激更有效",
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
              护肤指南
            </Badge>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A4A48] mb-6 leading-tight">
              30岁女性如何科学护肤
            </h1>
            <p className="text-lg text-[#6A6A68] leading-relaxed max-w-2xl mx-auto">
              步入30岁，肌肤进入新的生命周期。了解肌肤变化，掌握科学护肤方法，
              让美丽从容绽放。
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-[#8A8A88]">
              <span>发布时间：2026年4月5日</span>
              <span>|</span>
              <span>阅读时间：8分钟</span>
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
                30岁是一个重要的分水岭。明明昨天还被叫"小姑娘"，今天就开始担心眼角的细纹；
                以前熬夜第二天依然神采奕奕，现在却要花一周才能恢复。
              </p>
              <p className="text-lg text-[#4A4A48] leading-relaxed">
                这不是错觉。30岁后，肌肤真的在发生显著变化。但好消息是，
                <span className="text-[#F37021] font-medium">只要掌握正确的护肤方法，完全可以延缓肌肤衰老</span>，
                甚至让肌肤状态比20多岁时更好。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skin Characteristics */}
      <section className="py-12 md:py-16 bg-[#F5F1ED]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] mb-4">
              30岁肌肤的四大变化
            </h2>
            <p className="text-[#6A6A68]">知己知彼，才能百战不殆。先了解肌肤在发生什么变化</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skinCharacteristics.map((item, index) => (
              <Card key={index} className="bg-white border-[#E8E2DB]">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F37021]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-[#F37021]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#4A4A48] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#6A6A68]">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Morning Routine */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-[#F37021]/10 flex items-center justify-center mx-auto mb-4">
              <Sun className="w-8 h-8 text-[#F37021]" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] mb-4">
              晨间护肤步骤
            </h2>
            <p className="text-[#6A6A68]">抵御外界伤害，为肌肤穿上保护衣</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {morningRoutine.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 bg-white rounded-xl p-4 border border-[#E8E2DB]"
              >
                <div className="w-8 h-8 rounded-full bg-[#F37021] text-white flex items-center justify-center font-bold shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-[#4A4A48]">{item.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {item.duration}
                    </Badge>
                  </div>
                  <p className="text-sm text-[#6A6A68]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evening Routine */}
      <section className="py-12 md:py-16 bg-[#F5F1ED]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-[#D4A574]/20 flex items-center justify-center mx-auto mb-4">
              <Moon className="w-8 h-8 text-[#D4A574]" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] mb-4">
              晚间护肤步骤
            </h2>
            <p className="text-[#6A6A68]">夜间是肌肤修护的黄金时间，千万别浪费</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {eveningRoutine.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 bg-white rounded-xl p-4 border border-[#E8E2DB]"
              >
                <div className="w-8 h-8 rounded-full bg-[#D4A574] text-white flex items-center justify-center font-bold shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-[#4A4A48]">{item.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {item.duration}
                    </Badge>
                  </div>
                  <p className="text-sm text-[#6A6A68]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anti-aging Ingredients */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] mb-4">
              30+必备抗衰老成分
            </h2>
            <p className="text-[#6A6A68]">科学选成分，精准抗衰老</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {antiAgingIngredients.map((item, index) => (
              <Card key={index} className="bg-white border-[#E8E2DB]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-xl font-bold text-[#4A4A48]">{item.name}</h3>
                    <Badge className="bg-[#F37021]/10 text-[#F37021]">{item.concentration}</Badge>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-[#8A8A88] mb-1">主要功效</p>
                      <div className="flex flex-wrap gap-2">
                        {item.benefits.map((benefit, i) => (
                          <span key={i} className="text-sm text-[#6A6A68] flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-[#F37021]" />
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-[#8A8A88] mb-1">适用肤质</p>
                      <p className="text-sm text-[#6A6A68]">{item.suitable}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Recommendation */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#F37021]/5 to-[#D4A574]/5">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E8E2DB]">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#F37021]" />
              <h2 className="font-serif text-2xl font-bold text-[#4A4A48]">爱美舜推荐方案</h2>
            </div>
            <p className="text-[#6A6A68] mb-6 leading-relaxed">
              针对30+女性的肌肤特点，爱美舜研发了科学分阶护肤方案。我们的产品配方温和有效，
              富含烟酰胺、胜肽等抗老成分，帮助您从容应对肌肤变化。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-[#FAF8F6] rounded-xl">
                <p className="text-2xl font-bold text-[#F37021] mb-1">30+</p>
                <p className="text-sm text-[#6A6A68]">专为30+研发</p>
              </div>
              <div className="text-center p-4 bg-[#FAF8F6] rounded-xl">
                <p className="text-2xl font-bold text-[#F37021] mb-1">1800+</p>
                <p className="text-sm text-[#6A6A68]">成功案例</p>
              </div>
              <div className="text-center p-4 bg-[#FAF8F6] rounded-xl">
                <p className="text-2xl font-bold text-[#F37021] mb-1">国妆特证</p>
                <p className="text-sm text-[#6A6A68]">安全有效</p>
              </div>
            </div>
            <Button asChild className="bg-[#F37021] hover:bg-[#D65A0F]">
              <Link href="/products">
                了解产品详情
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] mb-4">
              30+护肤常见误区
            </h2>
            <p className="text-[#6A6A68]">避开这些坑，护肤事半功倍</p>
          </div>

          <div className="space-y-4">
            {commonMistakes.map((item, index) => (
              <Card key={index} className="bg-white border-[#E8E2DB] overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-red-50 p-4 md:w-1/3 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-600 font-medium">误区：{item.mistake}</span>
                  </div>
                  <div className="p-4 md:w-2/3 flex items-center">
                    <p className="text-sm text-[#6A6A68]">
                      <span className="text-[#F37021] font-medium">正确做法：</span>
                      {item.solution}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-[#F5F1ED]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-[#4A4A48] mb-8 text-center">常见问题</h2>
          <div className="space-y-4">
            <Card className="bg-white border-[#E8E2DB]">
              <CardContent className="p-6">
                <h3 className="font-medium text-[#4A4A48] mb-2">Q: 30岁开始抗老会不会太早？</h3>
                <p className="text-sm text-[#6A6A68]">
                  A: 不会。预防胜于治疗，30岁正是开始抗衰老的最佳时机。此时肌肤还有较好的自我修复能力，
                  正确的护肤可以有效延缓衰老迹象的出现。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-[#E8E2DB]">
              <CardContent className="p-6">
                <h3 className="font-medium text-[#4A4A48] mb-2">Q: 贵的护肤品一定更好吗？</h3>
                <p className="text-sm text-[#6A6A68]">
                  A: 不一定。关键看成分和配方。有些平价产品成分同样优秀，重要的是选择适合自己肤质和需求的产品，
                  而不是盲目追求高价。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-[#E8E2DB]">
              <CardContent className="p-6">
                <h3 className="font-medium text-[#4A4A48] mb-2">Q: 多久能看到护肤效果？</h3>
                <p className="text-sm text-[#6A6A68]">
                  A: 护肤品一般需要28天（一个皮肤代谢周期）才能看到明显效果。抗衰老是一个长期过程，
                  坚持科学护肤3-6个月会有显著改善。
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
              开启您的科学护肤之旅
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              每个人的肌肤状况都是独特的，我们的专业顾问可以为您提供一对一咨询，
              定制最适合您的护肤方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#F37021] hover:bg-white/90">
                <Link href="/contact">
                  免费咨询
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link href="/products">浏览产品</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  AlertTriangle,
  Bandage,
  Shield,
  CheckCircle2,
  Clock,
  Heart,
  ArrowRight,
  Droplets,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "敏感肌修护的3个阶段 | 爱美舜",
  description: "敏感肌修护完整指南：急救期、修护期、维稳期三阶段科学护理方案。了解敏感肌成因，掌握屏障修护方法，告别泛红刺痛。",
  keywords: ["敏感肌修护", "屏障修护", "敏感肌护肤品", "皮肤屏障受损", "泛红修复", "敏感肌护理"],
  alternates: {
    canonical: "https://www.aimeishun.cn/knowledge/敏感肌修护3阶段/",
  },
  openGraph: {
    title: "敏感肌修护的3个阶段 | 爱美舜",
    description: "敏感肌修护完整指南：急救期、修护期、维稳期三阶段科学护理方案。告别泛红刺痛，重建健康屏障。",
    url: "https://www.aimeishun.cn/knowledge/敏感肌修护3阶段/",
    type: "article",
  },
};

const symptoms = [
  {
    title: "泛红发热",
    description: "脸颊、鼻翼等部位持续泛红，遇热或情绪波动时加重",
    icon: Heart,
  },
  {
    title: "刺痛紧绷",
    description: "使用护肤品时有刺痛感，洗脸后皮肤紧绷不适",
    icon: AlertTriangle,
  },
  {
    title: "干燥脱皮",
    description: "保湿产品难以吸收，皮肤表面有细小皮屑",
    icon: Droplets,
  },
  {
    title: "易受刺激",
    description: "换季、环境变化时容易出现过敏反应",
    icon: Sparkles,
  },
];

const causes = [
  "过度清洁或使用皂基洁面",
  "频繁去角质或使用酸类产品",
  "使用含酒精、香精的刺激性产品",
  "长期暴露在污染环境中",
  "紫外线损伤",
  "精神压力大、作息不规律",
];

const phases = [
  {
    number: "01",
    title: "急救期",
    duration: "1-2周",
    subtitle: "灭火镇静，缓解急性症状",
    goals: ["缓解泛红发热", "减轻刺痛感", "镇静舒缓肌肤"],
    do: [
      "停用所有功效性产品（美白、抗衰、祛痘）",
      "使用温和的氨基酸洁面",
      "选择含积雪草、洋甘菊的舒缓产品",
      "冷敷缓解泛红",
    ],
    dont: [
      "不要用热水洗脸",
      "不要频繁敷面膜",
      "不要用手触摸脸部",
      "不要急于见效乱用产品",
    ],
    color: "bg-red-50 border-red-200",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    number: "02",
    title: "修护期",
    duration: "4-8周",
    subtitle: "重建屏障，修复受损肌肤",
    goals: ["补充细胞间脂质", "修护角质层", "增强肌肤抵抗力"],
    do: [
      "使用含神经酰胺的产品",
      "补充角鲨烷等油脂成分",
      "坚持温和清洁",
      "加强保湿锁水",
    ],
    dont: [
      "不要过早使用酸类产品",
      "不要频繁更换护肤品",
      "不要过度敷面膜",
      "不要忽视防晒",
    ],
    color: "bg-yellow-50 border-yellow-200",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
  {
    number: "03",
    title: "维稳期",
    duration: "长期",
    subtitle: "巩固成果，预防复发",
    goals: ["维持屏障健康", "提升肌肤耐受力", "预防敏感反复"],
    do: [
      "建立稳定的护肤routine",
      "逐步引入温和的功效产品",
      "坚持防晒",
      "注意生活作息",
    ],
    dont: [
      "不要突然停用修护产品",
      "不要频繁尝试新产品",
      "不要熬夜",
      "不要忽视防晒",
    ],
    color: "bg-green-50 border-green-200",
    badgeColor: "bg-green-100 text-green-700",
  },
];

const keyIngredients = [
  {
    name: "神经酰胺",
    function: "修护皮肤屏障",
    concentration: "1-5%",
    suitable: "所有敏感肌",
  },
  {
    name: "积雪草",
    function: "舒缓镇静、促进修复",
    concentration: "2-5%",
    suitable: "急性敏感期",
  },
  {
    name: "角鲨烷",
    function: "滋润保湿、强化屏障",
    concentration: "5-15%",
    suitable: "干燥敏感肌",
  },
  {
    name: "泛醇（B5）",
    function: "保湿修护、舒缓抗炎",
    concentration: "1-5%",
    suitable: "所有敏感肌",
  },
  {
    name: "洋甘菊提取物",
    function: "镇静舒缓、减轻泛红",
    concentration: "1-3%",
    suitable: "泛红敏感肌",
  },
  {
    name: "马齿苋提取物",
    function: "抗炎舒缓、减少刺激",
    concentration: "1-5%",
    suitable: "易受刺激肌",
  },
];

const routine = {
  morning: [
    { step: 1, action: "温水洁面或免洗", note: "急性期可只用清水" },
    { step: 2, action: "舒缓喷雾/爽肤水", note: "选择无酒精配方" },
    { step: 3, action: "修护精华", note: "含神经酰胺/积雪草" },
    { step: 4, action: "修护乳液/面霜", note: "根据干燥程度选择" },
    { step: 5, action: "物理防晒", note: "优先选择硬防晒" },
  ],
  evening: [
    { step: 1, action: "温和卸妆（如有化妆）", note: "使用卸妆油/膏" },
    { step: 2, action: "氨基酸洁面", note: "水温32-35°C" },
    { step: 3, action: "舒缓喷雾/爽肤水", note: "轻拍至吸收" },
    { step: 4, action: "修护精华", note: "可叠加保湿精华" },
    { step: 5, action: "修护面霜", note: "厚敷效果更佳" },
  ],
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F6]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#F5F1ED] to-[#FAF8F6]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-[#F37021]/10 text-[#F37021] border-[#F37021]/20 mb-4">
              敏感肌专题
            </Badge>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#4A4A48] mb-6 leading-tight">
              敏感肌修护的3个阶段
            </h1>
            <p className="text-lg text-[#6A6A68] leading-relaxed max-w-2xl mx-auto">
              敏感肌不是一天形成的，也不会一天就好。
              了解修护的三个阶段，循序渐进地重建健康屏障。
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-[#8A8A88]">
              <span>发布时间：2026年4月19日</span>
              <span>|</span>
              <span>阅读时间：12分钟</span>
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
                洗完脸紧绷刺痛，换季时泛红发痒，用护肤品经常过敏...
                如果你也有这些困扰，那么你可能是<span className="text-[#F37021] font-medium">敏感肌</span>。
              </p>
              <p className="text-lg text-[#4A4A48] leading-relaxed mb-4">
                很多敏感肌的朋友都有一个共同点：急于求成。
                今天听说这个产品好就买，明天听说那个方法有效就试。
                结果呢？皮肤越来越脆弱，问题越来越严重。
              </p>
              <p className="text-lg text-[#4A4A48] leading-relaxed">
                敏感肌修护需要时间，更需要方法。本文将详细介绍敏感肌修护的三个阶段，
                帮助你科学地、一步一步地恢复健康肌肤。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-12 md:py-16 bg-[#F5F1ED]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] mb-4">
              敏感肌的四大表现
            </h2>
            <p className="text-[#6A6A68]">出现这些症状，说明你的皮肤屏障已经受损</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {symptoms.map((item, index) => (
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

      {/* Causes */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-[#E8E2DB]">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-[#F37021]" />
              <h2 className="font-serif text-2xl font-bold text-[#4A4A48]">敏感肌的常见成因</h2>
            </div>
            <p className="text-[#6A6A68] mb-6">
              敏感肌大多是"作"出来的。了解这些常见原因，避免重蹈覆辙。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {causes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#F37021]/10 text-[#F37021] text-sm flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-sm text-[#6A6A68]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three Phases */}
      <section className="py-12 md:py-16 bg-[#F5F1ED]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] mb-4">
              敏感肌修护三阶段
            </h2>
            <p className="text-[#6A6A68]">循序渐进，耐心修护，皮肤需要时间</p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className={`${phase.color} overflow-hidden`}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <div className="text-5xl font-bold text-[#F37021]/20 mb-2">{phase.number}</div>
                      <Badge className={`${phase.badgeColor} mb-2`}>{phase.duration}</Badge>
                      <h3 className="font-serif text-2xl font-bold text-[#4A4A48] mb-1">{phase.title}</h3>
                      <p className="text-sm text-[#6A6A68]">{phase.subtitle}</p>
                    </div>
                    <div className="md:w-3/4 space-y-6">
                      <div>
                        <p className="text-sm font-medium text-[#4A4A48] mb-2">阶段目标</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.goals.map((goal, i) => (
                            <span key={i} className="text-sm text-[#6A6A68] flex items-center gap-1">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              {goal}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm font-medium text-green-600 mb-2 flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" />应该做
                          </p>
                          <ul className="space-y-1">
                            {phase.do.map((item, i) => (
                              <li key={i} className="text-sm text-[#6A6A68] flex items-start gap-2">
                                <span className="text-green-500 mt-1">✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-red-600 mb-2 flex items-center gap-1">
                            <AlertTriangle className="w-4 h-4" />不要做
                          </p>
                          <ul className="space-y-1">
                            {phase.dont.map((item, i) => (
                              <li key={i} className="text-sm text-[#6A6A68] flex items-start gap-2">
                                <span className="text-red-500 mt-1">✗</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Ingredients */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] mb-4">
              敏感肌修护关键成分
            </h2>
            <p className="text-[#6A6A68]">认准这些成分，修护事半功倍</p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E2DB]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F37021]/10 border-b border-[#E8E2DB]">
                    <th className="text-left py-4 px-6 font-medium text-[#4A4A48]">成分</th>
                    <th className="text-left py-4 px-6 font-medium text-[#4A4A48]">主要功效</th>
                    <th className="text-left py-4 px-6 font-medium text-[#4A4A48]">推荐浓度</th>
                    <th className="text-left py-4 px-6 font-medium text-[#4A4A48]">适合人群</th>
                  </tr>
                </thead>
                <tbody>
                  {keyIngredients.map((item, index) => (
                    <tr key={index} className="border-b border-[#E8E2DB] last:border-b-0">
                      <td className="py-4 px-6 font-medium text-[#4A4A48]">{item.name}</td>
                      <td className="py-4 px-6 text-sm text-[#6A6A68]">{item.function}</td>
                      <td className="py-4 px-6">
                        <Badge variant="outline">{item.concentration}</Badge>
                      </td>
                      <td className="py-4 px-6 text-sm text-[#6A6A68]">{item.suitable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Routine */}
      <section className="py-12 md:py-16 bg-[#F5F1ED]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] mb-4">
              敏感肌每日护肤流程
            </h2>
            <p className="text-[#6A6A68]">简单即美，精简护肤</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-[#E8E2DB]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#F37021]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#F37021]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#4A4A48]">晨间护肤</h3>
                </div>
                <div className="space-y-4">
                  {routine.morning.map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#F37021] text-white text-xs flex items-center justify-center shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[#4A4A48]">{item.action}</p>
                        <p className="text-xs text-[#8A8A88]">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#E8E2DB]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#D4A574]/20 flex items-center justify-center">
                    <Bandage className="w-5 h-5 text-[#D4A574]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#4A4A48]">晚间护肤</h3>
                </div>
                <div className="space-y-4">
                  {routine.evening.map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#D4A574] text-white text-xs flex items-center justify-center shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-[#4A4A48]">{item.action}</p>
                        <p className="text-xs text-[#8A8A88]">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Recommendation */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F37021] to-[#D65A0F] rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold">爱美舜敏感肌修护方案</h2>
            </div>
            <p className="text-white/90 mb-8 leading-relaxed">
              爱美舜专为敏感肌研发了分阶修护系列，从急救舒缓到屏障重建，
              提供全周期护理方案。产品配方温和无刺激，通过敏感肌皮肤测试，
              富含神经酰胺、积雪草等修护成分，帮助您安全有效地恢复健康肌肤。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/10 rounded-xl">
                <p className="text-3xl font-bold mb-1">3阶</p>
                <p className="text-sm text-white/80">分阶修护</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl">
                <p className="text-3xl font-bold mb-1">0刺激</p>
                <p className="text-sm text-white/80">温和配方</p>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-xl">
                <p className="text-3xl font-bold mb-1">98%</p>
                <p className="text-sm text-white/80">用户满意</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-white text-[#F37021] hover:bg-white/90">
              <Link href="/products">
                了解修护方案
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
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
                <h3 className="font-medium text-[#4A4A48] mb-2">Q: 敏感肌多久能修护好？</h3>
                <p className="text-sm text-[#6A6A68]">
                  A: 敏感肌修护需要时间，通常需要3-6个月才能看到明显改善。
                  轻度敏感可能1-2个月就能好转，而重度敏感或长期受损的肌肤可能需要6个月以上。
                  关键是坚持正确的护理方法，不要急于求成。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-[#E8E2DB]">
              <CardContent className="p-6">
                <h3 className="font-medium text-[#4A4A48] mb-2">Q: 敏感肌可以用美白产品吗？</h3>
                <p className="text-sm text-[#6A6A68]">
                  A: 急性敏感期不建议使用任何功效性产品，包括美白产品。
                  待肌肤进入维稳期后，可以逐步引入温和的美白产品（如烟酰胺），
                  但要先做局部测试，确认无刺激后再全脸使用。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-[#E8E2DB]">
              <CardContent className="p-6">
                <h3 className="font-medium text-[#4A4A48] mb-2">Q: 敏感肌需要去角质吗？</h3>
                <p className="text-sm text-[#6A6A68]">
                  A: 敏感肌原则上不需要主动去角质。角质层是保护肌肤的重要屏障，
                  敏感肌的角质层本身就比较薄，去角质会进一步损伤屏障。
                  如果确实需要，建议在维稳期使用非常温和的酵素类产品，频率不超过每月1次。
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
              开始你的敏感肌修护之旅
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              每个人的敏感程度和成因不同，我们的专业顾问可以为您分析具体情况，
              制定个性化的修护方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#F37021] hover:bg-white/90">
                <Link href="/contact">
                  免费咨询
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

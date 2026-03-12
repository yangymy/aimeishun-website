import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sparkles,
  Droplets,
  Sun,
  Target,
  Moon,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Calendar,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "护肤知识 | 爱美舜",
  description: "30+女性护肤指南，问题肌肤科普，护肤误区解析。科学护肤知识、季节护肤要点、色斑敏感肌痘痘解决方案，助您养出健康好肌肤。",
  keywords: ["护肤知识", "30+女性护肤", "问题肌肤", "护肤误区", "季节护肤", "敏感肌护理", "祛斑方法"],
  alternates: {
    canonical: "https://www.aimeishun.cn/knowledge/",
  },
  openGraph: {
    title: "护肤知识 | 爱美舜",
    description: "30+女性护肤指南，问题肌肤科普，护肤误区解析。科学护肤知识、季节护肤要点、色斑敏感肌痘痘解决方案。",
    url: "https://www.aimeishun.cn/knowledge/",
    type: "website",
  },
};

const skinCareGuides = [
  {
    id: 1,
    title: "清洁是基础",
    subtitle: "温和净颜，开启护肤第一步",
    description:
      "30+肌肤屏障逐渐脆弱，选择氨基酸类温和洁面产品，避免皂基过度清洁。早晚各一次，水温保持在32-35°C，洁面时间不超过60秒。",
    tips: ["选择pH值5.5-6.5的洁面产品", "避免过度摩擦肌肤", "卸妆要彻底但温和"],
    icon: Sparkles,
    color: "bg-[#F37021]/10 text-[#F37021]",
  },
  {
    id: 2,
    title: "补水是关键",
    subtitle: "深层保湿，锁住年轻水润",
    description:
      "30岁后肌肤保水能力下降，需要多层次补水：爽肤水→精华→乳液→面霜。玻尿酸、神经酰胺是30+肌肤的最佳保湿搭档。",
    tips: ["分层补水效果更佳", "选择含神经酰胺的修护产品", "每周2-3次补水面膜"],
    icon: Droplets,
    color: "bg-[#D4A574]/10 text-[#D4A574]",
  },
  {
    id: 3,
    title: "防晒是必需",
    subtitle: "抵御光老化，守护肌肤年轻",
    description:
      "紫外线是肌肤衰老的最大元凶！30+女性必须全年防晒，SPF30+、PA+++是基本配置。室内靠窗位置也需要防护。",
    tips: ["无论阴晴都要防晒", "每2-3小时补涂一次", "配合遮阳帽效果更佳"],
    icon: Sun,
    color: "bg-[#F37021]/10 text-[#F37021]",
  },
  {
    id: 4,
    title: "精华要精准",
    subtitle: "针对性护理，解决肌肤问题",
    description:
      "30+肌肤开始出现细纹、松弛、色斑等问题，需要针对性精华：烟酰胺亮肤、视黄醇抗衰、胜肽紧致，根据肌肤状况精准选择。",
    tips: ["早C晚A是经典搭配", "不要同时叠加多种强功效精华", "精华用量要足，约2-3滴管"],
    icon: Target,
    color: "bg-[#D4A574]/10 text-[#D4A574]",
  },
  {
    id: 5,
    title: "作息很重要",
    subtitle: "内调外养，美丽由内而发",
    description:
      "再好的护肤品也救不了熬夜的肌肤！晚上11点至凌晨2点是肌肤修复黄金期，保证7-8小时睡眠，配合健康饮食和适量运动。",
    tips: ["晚上11点前入睡", "多喝水，每天至少2000ml", "保持愉悦心情"],
    icon: Moon,
    color: "bg-[#F37021]/10 text-[#F37021]",
  },
];

const skinProblems = [
  {
    id: 1,
    type: "色斑问题",
    badge: "色素沉着",
    badgeColor: "bg-[#D4A574]/20 text-[#B88A5A] border-[#D4A574]/30",
    symptoms: ["黄褐斑", "晒斑", "雀斑", "老年斑"],
    causes: "紫外线照射、荷尔蒙变化、肌肤老化、炎症后色素沉着",
    solutions: [
      "使用含烟酰胺、维生素C的亮肤精华",
      "严格防晒，避免色斑加深",
      "选择温和美白产品，避免刺激",
      "严重色斑建议咨询专业医生",
    ],
  },
  {
    id: 2,
    type: "敏感肌",
    badge: "屏障受损",
    badgeColor: "bg-red-100 text-red-700 border-red-200",
    symptoms: ["红血丝", "屏障受损", "易泛红", "刺痛干痒"],
    causes: "过度清洁、使用刺激产品、环境因素、肌肤屏障功能下降",
    solutions: [
      "停用所有刺激性护肤品",
      "使用含积雪草、神经酰胺的修护产品",
      "简化护肤步骤，精简护肤",
      "避免频繁更换护肤品",
    ],
  },
  {
    id: 3,
    type: "痘痘肌",
    badge: "炎症痤疮",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    symptoms: ["炎性痘痘", "闭口粉刺", "痘印", "毛孔粗大"],
    causes: "油脂分泌旺盛、毛孔堵塞、细菌感染、荷尔蒙波动",
    solutions: [
      "温和清洁，避免过度去油",
      "使用含水杨酸、果酸的疏通产品",
      "不要用手挤压痘痘",
      "炎症严重请及时就医",
    ],
  },
  {
    id: 4,
    type: "衰老肌",
    badge: "抗衰紧致",
    badgeColor: "bg-[#F37021]/20 text-[#D65A0F] border-[#F37021]/30",
    symptoms: ["细纹皱纹", "肌肤松弛", "法令纹", "颈纹"],
    causes: "胶原蛋白流失、弹性纤维断裂、光老化、地心引力",
    solutions: [
      "使用含视黄醇、胜肽的抗衰精华",
      "配合面部按摩提升紧致",
      "补充胶原蛋白和抗氧化剂",
      "坚持使用防晒霜防止光老化",
    ],
  },
];

const skinCareMyths = [
  {
    id: 1,
    myth: "频繁去角质",
    truth: "30+肌肤新陈代谢变慢，角质层变薄，频繁去角质会损伤肌肤屏障",
    correct: "每周1-2次温和去角质即可，敏感肌应减少频率",
    icon: XCircle,
  },
  {
    id: 2,
    myth: "不用防晒",
    truth: "阴天紫外线依然存在，紫外线是导致色斑和衰老的主要原因",
    correct: "全年都要防晒，选择SPF30+、PA+++的防晒产品",
    icon: XCircle,
  },
  {
    id: 3,
    myth: "过度清洁",
    truth: "频繁洗脸、使用皂基洁面会破坏肌肤天然保护膜",
    correct: "早晚各一次温和清洁，选择氨基酸洁面产品",
    icon: XCircle,
  },
  {
    id: 4,
    myth: "乱用产品",
    truth: "盲目跟风网红产品，不考虑自身肌肤状况",
    correct: "根据肌肤类型和问题选择适合的产品，精简护肤",
    icon: XCircle,
  },
  {
    id: 5,
    myth: "忽视作息",
    truth: "再好的护肤品也弥补不了熬夜对肌肤的伤害",
    correct: "保证充足睡眠，晚上11点前入睡，配合健康生活方式",
    icon: XCircle,
  },
];

const seasonalCare = [
  {
    season: "春季",
    focus: "抗过敏修护",
    keyPoints: ["预防花粉过敏", "加强保湿", "温和清洁", "防晒不能少"],
    recommended: "舒缓修护精华、温和保湿霜",
  },
  {
    season: "夏季",
    focus: "控油防晒",
    keyPoints: ["强化防晒", "清爽控油", "晒后修复", "多补水"],
    recommended: "清爽防晒乳、晒后修复凝胶",
  },
  {
    season: "秋季",
    focus: "滋润修复",
    keyPoints: ["加强保湿", "修复屏障", "预防敏感", "开始用面霜"],
    recommended: "滋润型面霜、修护精华油",
  },
  {
    season: "冬季",
    focus: "深层滋养",
    keyPoints: ["厚重保湿", "锁水滋润", "减少去角质", "室内加湿"],
    recommended: "高保湿面霜、护肤油、保湿面膜",
  },
];

export default function KnowledgePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F6]">
      <Navbar />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#F5F1ED] to-[#FAF8F6]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A48] mb-6">
              护肤知识
            </h1>
            <p className="text-lg md:text-xl text-[#6A6A68] leading-relaxed">
              专为30+女性打造的科学护肤指南
              <br />
              <span className="text-[#F37021]">专业、实用、易懂</span>，让美丽有迹可循
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-4">
              30+护肤五大核心要点
            </h2>
            <p className="text-[#6A6A68] max-w-2xl mx-auto">
              步入30岁，肌肤进入新的生命周期，科学护肤从这五个关键点开始
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skinCareGuides.slice(0, 3).map((guide) => (
              <Card
                key={guide.id}
                className="bg-white border-[#E8E2DB] hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-xl ${guide.color} flex items-center justify-center mb-4`}
                  >
                    <guide.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-serif text-xl text-[#4A4A48]">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="text-[#F37021] font-medium">
                    {guide.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-[#6A6A68] leading-relaxed">
                    {guide.description}
                  </p>
                  <ul className="space-y-2">
                    {guide.tips.map((tip, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-[#6A6A68]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F37021] mt-0.5 shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {skinCareGuides.slice(3).map((guide) => (
              <Card
                key={guide.id}
                className="bg-white border-[#E8E2DB] hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-xl ${guide.color} flex items-center justify-center mb-4`}
                  >
                    <guide.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-serif text-xl text-[#4A4A48]">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="text-[#F37021] font-medium">
                    {guide.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-[#6A6A68] leading-relaxed">
                    {guide.description}
                  </p>
                  <ul className="space-y-2">
                    {guide.tips.map((tip, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-[#6A6A68]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F37021] mt-0.5 shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F1ED]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-4">
              问题肌肤科普
            </h2>
            <p className="text-[#6A6A68] max-w-2xl mx-auto">
              了解肌肤问题成因，才能对症下药，找到最适合的解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skinProblems.map((problem) => (
              <Card
                key={problem.id}
                className="bg-white border-[#E8E2DB] hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="font-serif text-xl text-[#4A4A48]">
                      {problem.type}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className={`${problem.badgeColor} font-medium`}
                    >
                      {problem.badge}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {problem.symptoms.map((symptom, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#F5F1ED] text-[#6A6A68] hover:bg-[#E8E2DB]"
                      >
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-[#4A4A48] mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-[#D4A574]" />
                      成因分析
                    </h4>
                    <p className="text-sm text-[#6A6A68] leading-relaxed">
                      {problem.causes}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#4A4A48] mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#F37021]" />
                      解决方案
                    </h4>
                    <ul className="space-y-1.5">
                      {problem.solutions.map((solution, index) => (
                        <li
                          key={index}
                          className="text-sm text-[#6A6A68] flex items-start gap-2"
                        >
                          <span className="text-[#F37021] mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-4">
              护肤五大误区
            </h2>
            <p className="text-[#6A6A68] max-w-2xl mx-auto">
              避开这些常见错误，让你的护肤事半功倍
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {skinCareMyths.map((myth, index) => (
              <Card
                key={myth.id}
                className="bg-white border-[#E8E2DB] hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="bg-red-50 p-6 md:w-1/3 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <myth.icon className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-red-600 font-medium">误区 {index + 1}</span>
                    </div>
                    <h3 className="font-serif text-lg text-[#4A4A48]">{myth.myth}</h3>
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-center">
                    <p className="text-sm text-[#6A6A68] mb-3">
                      <span className="text-red-500 font-medium">错误认知：</span>
                      {myth.truth}
                    </p>
                    <p className="text-sm text-[#6A6A68]">
                      <span className="text-[#F37021] font-medium">正确做法：</span>
                      {myth.correct}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F5F1ED]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-4">
              季节护肤指南
            </h2>
            <p className="text-[#6A6A68] max-w-2xl mx-auto">
              顺应季节变化，调整护肤策略，让肌肤四季如春
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[#E8E2DB] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F37021]/10 border-b border-[#E8E2DB]">
                    <th className="text-left py-4 px-6 font-serif text-[#4A4A48] font-semibold">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#F37021]" />
                        季节
                      </div>
                    </th>
                    <th className="text-left py-4 px-6 font-serif text-[#4A4A48] font-semibold">
                      护肤重点
                    </th>
                    <th className="text-left py-4 px-6 font-serif text-[#4A4A48] font-semibold">
                      关键要点
                    </th>
                    <th className="text-left py-4 px-6 font-serif text-[#4A4A48] font-semibold">
                      推荐产品
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {seasonalCare.map((season, index) => (
                    <tr
                      key={season.season}
                      className="border-b border-[#E8E2DB] last:border-b-0 hover:bg-[#FAF8F6]/50 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                              index === 0
                                ? "bg-green-100 text-green-700"
                                : index === 1
                                ? "bg-orange-100 text-orange-700"
                                : index === 2
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {season.season.charAt(0)}
                          </div>
                          <span className="font-medium text-[#4A4A48]">
                            {season.season}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <Badge
                          variant="outline"
                          className="bg-[#D4A574]/10 text-[#B88A5A] border-[#D4A574]/30 font-medium"
                        >
                          {season.focus}
                        </Badge>
                      </td>
                      <td className="py-4 px-6">
                        <ul className="space-y-1">
                          {season.keyPoints.map((point, i) => (
                            <li
                              key={i}
                              className="text-sm text-[#6A6A68] flex items-center gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-[#F37021]" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-[#6A6A68]">
                          {season.recommended}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#F37021] to-[#D65A0F] rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                还有护肤困惑？
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                每个人的肌肤状况都是独特的，我们的专业护肤顾问可以为您提供
                <span className="text-[#D4A574] font-medium">一对一免费咨询</span>
                ，帮您找到最适合自己的护肤方案。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#F37021] hover:bg-white/90 font-medium px-8"
                >
                  <Link href="/contact">
                    免费咨询
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-medium px-8"
                >
                  <Link href="/products">浏览产品</Link>
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-6">
                专业顾问在线时间：周一至周日 9:00-21:00
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

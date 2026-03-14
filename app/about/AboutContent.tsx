"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  Users,
  Clock,
  Heart,
  Shield,
  Sparkles,
  Leaf,
  Phone,
  Mail,
  MapPin,
  Quote,
  TrendingUp,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Timeline, type TimelineEvent } from "@/components/Timeline";

const timelineEvents: TimelineEvent[] = [
  {
    year: "2003",
    title: "踏入美容行业",
    description:
      "陈瑾钰正式进入美容行业，从一线美容师做起。凭着对护肤的热爱和钻研精神，迅速成长为店里的技术骨干。",
  },
  {
    year: "2008",
    title: "服务客户突破3000人",
    description:
      "5年时间累计服务近万名客户，深入了解30+女性肌肤问题的真实痛点，积累了丰富的肌肤诊断和护理经验。",
  },
  {
    year: "2014",
    title: "开始产品研发探索",
    description:
      "意识到市面上缺少真正适合30+女性的安全有效产品，开始系统学习化妆品配方知识，走访国内外原料供应商。",
    highlight: true,
  },
  {
    year: "2016",
    title: "瑞士技术引进",
    description:
      "赴瑞士考察，引进PH450酶代谢技术，为后续产品配方升级奠定技术基础。",
  },
  {
    year: "2018",
    title: "爱美舜品牌成立",
    description:
      "8年筹备，爱美舜品牌正式成立。确立「分阶分型科学护肤」理念，首款产品研发成功。",
    highlight: true,
  },
  {
    year: "2019",
    title: "首款产品上市",
    description:
      "明星产品「草本美肌液」正式上市，获得国家化妆品备案，首批客户反馈优异。",
  },
  {
    year: "2021",
    title: "国妆特证获批",
    description:
      "核心淡斑产品通过国家特殊化妆品注册，获得国妆特证，功效宣称经过国家权威审核。",
    highlight: true,
  },
  {
    year: "2023",
    title: "服务客户突破1500人",
    description:
      "累计帮助1500+30+女性解决问题肌肤困扰，客户复购率达到65%，口碑持续传播。",
  },
  {
    year: "2025",
    title: "品牌全面升级",
    description:
      "产品配方全面升级，累计服务客户1800+，启动代理合作计划，帮助更多女性科学护肤。",
    highlight: true,
  },
];

const statsData = [
  {
    number: "1800+",
    label: "累计帮助30+女性解决问题肌肤困扰",
    icon: Users,
  },
  {
    number: "20余年",
    label: "创始人深耕问题肌肤领域经验",
    icon: Clock,
  },
  {
    number: "8年",
    label: "品牌创立至今，专注功效型护肤",
    icon: Award,
  },
  {
    number: "12款",
    label: "自主研发产品，覆盖问题肌肤全品类",
    icon: Sparkles,
  },
];

const philosophyData = [
  {
    title: "一人一方，分阶护理",
    icon: Heart,
    description:
      "30+女性的肌肤，和20岁真的不一样。代谢周期延长、锁水能力下降、屏障功能减弱。不同肌肤类型、不同问题阶段，需要的护理方案完全不同。我们根据你的实际情况，推荐适合的产品和用法。",
    details: [
      "第一阶段：修护期（1-28天）——建立耐受，修复屏障",
      "第二阶段：调理期（29-90天）——针对性改善问题",
      "第三阶段：巩固期（91天+）——维持稳定，预防反复",
    ],
  },
  {
    title: "安全有效，居家可用",
    icon: Shield,
    description:
      "爱美舜全线产品均通过国家药监局备案，核心产品持有国妆特证。0添加、0色素、0香精、0激素、0铅汞、0氢醌，安全到可以居家使用，无需专业操作。",
    details: [
      "通过国家药监局备案，合规可靠",
      "核心产品持有国妆特证",
      "瑞士PH450酶代谢技术",
      "通过SGS等第三方机构检测",
    ],
  },
  {
    title: "温和修护，拒绝反弹",
    icon: Leaf,
    description:
      "用温和但有效的方式，帮助肌肤逐步恢复健康状态。可能不如「速效」产品来得快，但效果稳定、不反弹，才是真正对肌肤负责的做法。",
    details: [
      "不追求速效，避免激素依赖",
      "拒绝过度剥脱，保护肌肤屏障",
      "科学配方，注重肌肤耐受度",
      "长期主义，效果稳定不反弹",
    ],
  },
];

const certifications = [
  {
    title: "国家化妆品备案",
    description:
      "爱美舜全线产品均通过国家药监局备案，备案信息可在官网查询",
  },
  {
    title: "国妆特证",
    description:
      "核心产品持有国妆特证（特殊化妆品注册证），功效宣称经过国家审核",
  },
  {
    title: "质量检测",
    description:
      "产品通过SGS等第三方机构检测，不含激素、铅汞、氢醌等违禁成分",
  },
  {
    title: "知识产权",
    description: "多项产品配方专利，品牌商标已注册保护",
  },
];

const milestones = [
  { year: "2003", label: "入行", desc: "踏入美容行业" },
  { year: "2014", label: "探索", desc: "产品研发起步" },
  { year: "2018", label: "创立", desc: "爱美舜品牌成立" },
  { year: "2021", label: "认证", desc: "国妆特证获批" },
  { year: "2025", label: "升级", desc: "品牌全面升级" },
];

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: string;
  suffix?: string;
}) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const isNumeric = !isNaN(numericValue);

  if (!isNumeric) {
    return (
      <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#F37021]">
        {value}
      </span>
    );
  }

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#F37021]"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.6, ease: "backOut" }}
    >
      {value}
      {suffix}
    </motion.span>
  );
}

export function AboutContent() {
  return (
    <div className="min-h-screen bg-[#FAF8F6]">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A4A48] via-[#2C3E35] to-[#4A4A48]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23F37021%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F37021]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#D4A574]/10 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37021]/20 rounded-full mb-6"
            >
              <Star className="w-4 h-4 text-[#F37021]" />
              <span className="text-sm font-medium text-[#F37021]">
                20余年 · 专注问题肌肤修护
              </span>
            </motion.div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              关于爱美舜
              <span className="block mt-2 text-[#F37021]">
                一个专注帮30+姐妹养出好皮肤的护肤品牌
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              从一线美容师到品牌创始人
              <br />
              20余年，只做好一件事
            </p>
          </AnimatedSection>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF8F6] to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-6">
              创立初心
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#F37021] to-[#D4A574] mx-auto rounded-full" />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="prose prose-lg max-w-none text-[#4A4A48] space-y-6">
                <p className="text-lg leading-relaxed">
                  2018年，我创立了爱美舜。但在那之前，我在美容行业已经摸爬滚打了十几年。
                </p>

                <p className="text-lg leading-relaxed">
                  作为一名一线美容师，我见过太多30+的姐妹，因为不懂科学护肤，踩了一个又一个坑：
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-4 my-10">
                {[
                  "听信\"速效祛斑\"，用了含激素的产品，结果变成激素脸",
                  "在美容院花了几万做项目，当时有效，没过多久反弹更严重",
                  "乱刷酸、乱去角质，把好好的皮肤折腾成了敏感肌",
                  "买了一堆贵妇护肤品，却始终没解决根本问题",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#E8E2DB] shadow-sm"
                  >
                    <span className="text-[#F37021] mt-1 flex-shrink-0">•</span>
                    <span className="text-[#6A6A68]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-lg leading-relaxed text-[#4A4A48] mb-6">
                每次看到姐妹们焦虑的样子，我都很心疼。护肤这件事，真的不应该这么复杂。
              </p>

              <blockquote className="relative my-10 py-8 px-8 bg-gradient-to-r from-[#F37021]/10 via-[#F37021]/5 to-transparent rounded-2xl border-l-4 border-[#F37021]">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-[#F37021]/30" />
                <p className="font-serif text-2xl md:text-3xl font-bold text-[#4A4A48] text-center relative z-10">
                  每一张脸都值得被用心对待
                </p>
                <p className="text-center text-[#6A6A68] mt-4">
                  30+女性的肌肤，确实和20岁不一样了。但只要用对方法、选对产品、给肌肤足够的时间，是完全可以改善的。
                </p>
              </blockquote>

              <p className="text-lg leading-relaxed text-[#4A4A48] mb-6">
                所以，我创立了爱美舜。我想做一个品牌，不追求速效，只做真正有效的事。
              </p>

              <div className="bg-[#F37021]/10 rounded-2xl p-8 my-10">
                <p className="text-xl font-medium text-[#4A4A48] text-center mb-4">
                  我的承诺
                </p>
                <p className="text-[#6A6A68] text-center leading-relaxed">
                  所有产品都经过我和团队至少6个月的试用，确认安全有效，才会推向市场。我们不做"7天换脸"的虚假承诺，但我们陪你用科学的方法，一步一步养出健康好皮肤。
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F5F1ED]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37021]/10 rounded-full mb-6"
                >
                  <Award className="w-4 h-4 text-[#F37021]" />
                  <span className="text-sm font-medium text-[#F37021]">
                    品牌创始人
                  </span>
                </motion.div>

                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-6">
                  认识瑾钰——
                  <span className="block mt-1 text-[#F37021]">
                    你的问题肌肤护肤顾问
                  </span>
                </h2>

                <div className="space-y-4 text-[#6A6A68] leading-relaxed mb-8">
                  <p>
                    我是陈瑾钰，爱美舜品牌创始人，深耕问题肌肤领域
                    <strong className="text-[#4A4A48]">二十余年</strong>
                    的国家高级美容师。
                  </p>

                  <p>
                    二十多年前，我还是一名一线美容师。那时候，我见过太多30+的姐妹，因为
                    <strong className="text-[#4A4A48]">乱护肤、用激素类产品、踩美容院的坑</strong>
                    ，导致烂脸、花冤枉钱。
                  </p>

                  <p>
                    2018年，我创立了爱美舜。
                    <strong className="text-[#4A4A48]">8年来</strong>
                    ，我们专注于30+女性问题肌肤修护，累计帮助
                    <strong className="text-[#4A4A48]">1800多位姐妹</strong>
                    解决了色斑、敏感肌、痘痘等肌肤问题。
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8E2DB] mb-8">
                  <p className="text-[#4A4A48] font-medium italic text-lg leading-relaxed">
                    "我的护肤理念很简单：好皮肤是养出来的，不是治出来的。30+的女人，护肤要做减法，选对成分比用贵的更重要。"
                  </p>
                  <p className="text-right text-[#8A8A88] mt-4">—— 陈瑾钰</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-[#4A4A48] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#F37021]" />
                    专业资质
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "国家高级美容师（持证上岗，非自封头衔）",
                      "问题肌肤管理专家（20余年一线实战经验）",
                      "爱美舜品牌创始人（8年品牌运营经验）",
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 text-[#6A6A68]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[3/4] max-w-md mx-auto">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#F37021]/20 to-[#D4A574]/20 rounded-3xl -z-10" />

                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <picture>
                      <source
                        media="(max-width: 640px)"
                        srcSet="/images/founder/founder-small.jpg"
                      />
                      <source
                        media="(max-width: 1024px)"
                        srcSet="/images/founder/founder-medium.jpg"
                      />
                      <img
                        src="/images/founder/founder-large.jpg"
                        alt="陈瑾钰 - 爱美舜品牌创始人"
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </picture>
                  </div>

                  <motion.div
                    className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[220px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-[#F37021]" />
                      <p className="text-sm font-bold text-[#4A4A48]">
                        国家高级美容师
                      </p>
                    </div>
                    <p className="text-xs text-[#8A8A88]">20余年一线经验</p>
                  </motion.div>

                  <motion.div
                    className="absolute -top-4 -left-4 bg-[#F37021] text-white rounded-xl shadow-lg p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="text-2xl font-bold">1800+</div>
                    <div className="text-xs opacity-90">服务客户</div>
                  </motion.div>
                </div>

                <div className="mt-12">
                  <h3 className="font-serif text-xl font-bold text-[#4A4A48] mb-6 text-center">
                    22年历程 · 关键节点
                  </h3>
                  <div className="relative">
                    <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-[#F37021]/20 via-[#F37021] to-[#F37021]/20" />
                    <div className="relative flex justify-between">
                      {milestones.map((milestone, idx) => (
                        <motion.div
                          key={idx}
                          className="flex flex-col items-center bg-[#F5F1ED] px-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="w-3 h-3 rounded-full bg-[#F37021] border-2 border-white shadow mb-2" />
                          <span className="text-xs font-bold text-[#F37021]">
                            {milestone.year}
                          </span>
                          <span className="text-xs text-[#4A4A48] font-medium">
                            {milestone.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-4">
              用数据说话
            </h2>
            <p className="text-[#6A6A68] max-w-2xl mx-auto">
              爱美舜的8年历程，我们用真实数据证明实力
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white border-[#E8E2DB] text-center p-6 hover:shadow-xl transition-all duration-500 group h-full">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#F37021]/20 to-[#D4A574]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-7 h-7 text-[#F37021]" />
                    </div>
                    <AnimatedCounter value={stat.number} />
                    <p className="text-sm text-[#6A6A68] mt-3">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F5F1ED] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F37021]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4A574]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37021]/10 rounded-full mb-6"
            >
              <Heart className="w-4 h-4 text-[#F37021]" />
              <span className="text-sm font-medium text-[#F37021]">
                品牌理念
              </span>
            </motion.div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A4A48] mb-6 leading-tight">
              每一张脸
              <br />
              <span className="text-[#F37021]">都值得被用心对待</span>
            </h2>

            <p className="text-lg text-[#6A6A68] max-w-2xl mx-auto">
              三大核心理念，指导我们做好每一件产品
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {philosophyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="bg-white border-[#E8E2DB] h-full hover:shadow-xl transition-all duration-500 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F37021]/20 to-[#D4A574]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-[#F37021]" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#4A4A48] mb-4 group-hover:text-[#F37021] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-[#6A6A68] mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-3">
                      {item.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-[#6A6A68]"
                        >
                          <span className="text-[#F37021] mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#F37021]/10 rounded-full mb-6"
            >
              <TrendingUp className="w-4 h-4 text-[#F37021]" />
              <span className="text-sm font-medium text-[#F37021]">
                发展历程
              </span>
            </motion.div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-4">
              22年匠心之路
            </h2>
            <p className="text-[#6A6A68] max-w-2xl mx-auto">
              从2003年入行到2025年品牌升级，每一步都走得扎实
            </p>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <Timeline events={timelineEvents} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F5F1ED]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#4A4A48] mb-4">
              合规认证，安心选择
            </h2>
            <p className="text-[#6A6A68] max-w-2xl mx-auto">
              所有资质真实可查，让您用得放心
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white border-[#E8E2DB] text-center h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#F37021]/20 to-[#D4A574]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-7 h-7 text-[#F37021]" />
                    </div>
                    <h3 className="font-semibold text-[#4A4A48] mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-[#6A6A68]">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A4A48] via-[#2C3E35] to-[#4A4A48]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F37021]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#D4A574]/10 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              还有疑问？欢迎联系瑾钰
            </h2>
            <p className="text-white/80 mb-10 max-w-xl mx-auto">
              无论是肌肤问题咨询，还是商务合作洽谈，都可以直接联系我。我会亲自为您解答。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#F37021] hover:bg-[#D65A0F] text-white px-8 py-6 text-base shadow-lg shadow-[#F37021]/25"
              >
                <Phone className="w-5 h-5 mr-2" />
                添加微信咨询
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base"
              >
                <Mail className="w-5 h-5 mr-2" />
                发送邮件
              </Button>
            </div>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>中国 · 深圳</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/30" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>工作日 9:00-21:00</span>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

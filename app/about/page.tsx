import type { Metadata } from "next";
import { Award, Users, Clock, Heart, Shield, Sparkles, Leaf, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "关于我们 | 爱美舜",
  description: "了解爱美舜品牌故事、创始人陈瑾钰老师、品牌理念。20余年问题肌肤专家，专注30+女性护肤，1800+成功案例见证。科学分阶护肤，国妆特证产品。",
  keywords: ["爱美舜品牌故事", "陈瑾钰", "品牌创始人", "问题肌肤专家", "护肤品牌理念", "国妆特证", "30+女性护肤"],
  alternates: {
    canonical: "https://www.aimeishun.cn/about/",
  },
  openGraph: {
    title: "关于我们 | 爱美舜",
    description: "了解爱美舜品牌故事、创始人陈瑾钰老师、品牌理念。20余年问题肌肤专家，专注30+女性护肤，1800+成功案例见证。",
    url: "https://www.aimeishun.cn/about/",
    type: "website",
  },
};

// 时间线数据
const timelineData = [
  {
    year: "2000-2014",
    title: "一线美容师时期",
    description: "从普通美容师做起，服务近万名客户。深入了解30+女性肌肤问题的真实痛点，积累了丰富的肌肤诊断和护理经验。",
  },
  {
    year: "2014-2018",
    title: "产品研发准备期",
    description: "开始系统学习化妆品配方知识，走访国内外原料供应商和研发机构。与团队反复测试配方，确定「分阶分型科学护肤」的品牌理念。",
  },
  {
    year: "2018",
    title: "品牌成立",
    description: "爱美舜品牌正式成立，确立「分阶分型科学护肤」理念，开始为30+女性提供专业护肤解决方案。",
  },
  {
    year: "2019",
    title: "首款产品上市",
    description: "首款明星产品「草本美肌液」上市，获得首批客户认可，开启品牌服务之旅。",
  },
  {
    year: "2020-2023",
    title: "产品线完善",
    description: "产品线扩充至12款，覆盖淡斑、修护、抗衰三大需求。累计服务客户突破1500人，客户复购率达到65%。",
  },
  {
    year: "2024",
    title: "品牌全面升级",
    description: "引入瑞士PH450酶代谢技术，产品配方全面升级。累计服务客户1800+，启动代理合作计划。",
  },
];

// 品牌数据
const statsData = [
  { number: "1800+", label: "累计帮助30+女性解决问题肌肤困扰", icon: Users },
  { number: "20余年", label: "创始人深耕问题肌肤领域经验", icon: Clock },
  { number: "8年", label: "品牌创立至今，专注功效型护肤", icon: Award },
  { number: "12款", label: "自主研发产品，覆盖问题肌肤全品类", icon: Sparkles },
];

// 品牌理念
const philosophyData = [
  {
    title: "一人一方，分阶护理",
    icon: Heart,
    description: "30+女性的肌肤，和20岁真的不一样。代谢周期延长、锁水能力下降、屏障功能减弱。不同肌肤类型、不同问题阶段，需要的护理方案完全不同。我们根据你的实际情况，推荐适合的产品和用法。",
    details: [
      "第一阶段：修护期（1-28天）——建立耐受，修复屏障",
      "第二阶段：调理期（29-90天）——针对性改善问题",
      "第三阶段：巩固期（91天+）——维持稳定，预防反复",
    ],
  },
  {
    title: "安全有效，居家可用",
    icon: Shield,
    description: "爱美舜全线产品均通过国家药监局备案，核心产品持有国妆特证。0添加、0色素、0香精、0激素、0铅汞、0氢醌，安全到可以居家使用，无需专业操作。",
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
    description: "用温和但有效的方式，帮助肌肤逐步恢复健康状态。可能不如「速效」产品来得快，但效果稳定、不反弹，才是真正对肌肤负责的做法。",
    details: [
      "不追求速效，避免激素依赖",
      "拒绝过度剥脱，保护肌肤屏障",
      "科学配方，注重肌肤耐受度",
      "长期主义，效果稳定不反弹",
    ],
  },
];

// 品牌荣誉
const certifications = [
  { title: "国家化妆品备案", description: "爱美舜全线产品均通过国家药监局备案，备案信息可在官网查询" },
  { title: "国妆特证", description: "核心产品持有国妆特证（特殊化妆品注册证），功效宣称经过国家审核" },
  { title: "质量检测", description: "产品通过SGS等第三方机构检测，不含激素、铅汞、氢醌等违禁成分" },
  { title: "知识产权", description: "多项产品配方专利，品牌商标已注册保护" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--ivory-light)]">
      {/* 页面头部区域 */}
      <section className="bg-gradient-to-b from-[var(--jade)]/10 to-transparent py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--dark)] mb-4 leading-tight">
            关于爱美舜——
            <br />
            <span className="text-[var(--jade)]">一个专注帮30+姐妹养出好皮肤的护肤品牌</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--dark-light)] max-w-2xl mx-auto mt-6">
            从一线美容师到品牌创始人
            <br />
            20余年，只做好一件事
          </p>
        </div>
      </section>

      {/* 品牌故事区域 */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--dark)] mb-8 text-center">
              创立初心
            </h2>
            <div className="prose prose-lg max-w-none text-[var(--dark)] space-y-6">
              <p className="text-lg leading-relaxed">
                2018年，我创立了爱美舜。
              </p>
              <p className="text-lg leading-relaxed">
                但在那之前，我在美容行业已经摸爬滚打了十几年。
              </p>
              <p className="text-lg leading-relaxed">
                作为一名一线美容师，我见过太多30+的姐妹，因为不懂科学护肤，踩了一个又一个坑：
              </p>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--jade)] mt-1">•</span>
                  <span>有人听信"速效祛斑"，用了含激素的产品，结果变成激素脸</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--jade)] mt-1">•</span>
                  <span>有人在美容院花了几万做项目，当时有效，没过多久反弹更严重</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--jade)] mt-1">•</span>
                  <span>有人乱刷酸、乱去角质，把好好的皮肤折腾成了敏感肌</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--jade)] mt-1">•</span>
                  <span>有人买了一堆贵妇护肤品，却始终没解决根本问题</span>
                </li>
              </ul>
              <p className="text-lg leading-relaxed">
                每次看到姐妹们焦虑的样子，我都很心疼。
              </p>
              <p className="text-xl font-medium text-[var(--jade)] text-center my-8">
                护肤这件事，真的不应该这么复杂。
              </p>
              <p className="text-lg leading-relaxed">
                30+女性的肌肤，确实和20岁不一样了。代谢变慢、屏障变脆弱、色素更容易沉积。但这些问题，并不是无解的。只要用对方法、选对产品、给肌肤足够的时间，是完全可以改善的。
              </p>
              <p className="text-lg leading-relaxed">
                所以，我创立了爱美舜。
              </p>
              <p className="text-xl font-medium text-[var(--jade)] text-center my-8">
                我想做一个品牌，不追求速效，只做真正有效的事。
              </p>
              <p className="text-lg leading-relaxed">
                所有产品都经过我和团队至少6个月的试用，确认安全有效，才会推向市场。我们不做"7天换脸"的虚假承诺，但我们陪你用科学的方法，一步一步养出健康好皮肤。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 创始人介绍区域 */}
      <section className="py-16 md:py-24 bg-[var(--ivory)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--dark)] mb-12 text-center">
              认识创始人——陈瑾钰
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* 创始人照片占位区 */}
              <div className="bg-[var(--jade)]/10 rounded-2xl aspect-[3/4] flex items-center justify-center">
                <div className="text-center text-[var(--dark-lighter)]">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[var(--jade)]/20 flex items-center justify-center">
                    <span className="text-4xl">👩‍⚕️</span>
                  </div>
                  <p>创始人照片</p>
                </div>
              </div>

              {/* 创始人介绍 */}
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-[var(--dark)]">
                  我是陈瑾钰，爱美舜品牌创始人，国家高级美容师。
                </p>
                <p className="text-lg leading-relaxed text-[var(--dark-light)]">
                  深耕问题肌肤领域二十余年，其中一线美容师客户服务经验14年，累计服务近万名客户。2018年创立爱美舜品牌，至今已有8年品牌历程，累计帮助1800+30+女性解决色斑、敏感肌、痘痘、抗衰等肌肤问题。
                </p>

                {/* 专业资质 */}
                <div className="space-y-3 pt-4">
                  <h3 className="font-semibold text-[var(--dark)]">专业资质</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-[var(--dark-light)]">
                      <Award className="w-5 h-5 text-[var(--jade)]" />
                      <span>国家高级美容师（持证上岗，非自封头衔）</span>
                    </li>
                    <li className="flex items-center gap-2 text-[var(--dark-light)]">
                      <Users className="w-5 h-5 text-[var(--jade)]" />
                      <span>问题肌肤管理专家（20余年一线实战经验）</span>
                    </li>
                    <li className="flex items-center gap-2 text-[var(--dark-light)]">
                      <Sparkles className="w-5 h-5 text-[var(--jade)]" />
                      <span>爱美舜品牌创始人（8年品牌运营经验）</span>
                    </li>
                  </ul>
                </div>

                {/* 护肤理念 */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-semibold text-[var(--dark)]">我的护肤理念</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-medium text-[var(--jade)] mb-2">1. 好皮肤是养出来的，不是治出来的</h4>
                      <p className="text-sm text-[var(--dark-light)]">肌肤问题往往是日积月累形成的，改善也需要遵循肌肤自身的代谢规律。任何承诺"速效""根治"的产品，要么含激素，要么过度剥脱，最终都会伤害肌肤。</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-medium text-[var(--jade)] mb-2">2. 30+的护肤要做减法，不是加法</h4>
                      <p className="text-sm text-[var(--dark-light)]">很多姐妹以为护肤品用得越多越好，结果层层叠加，反而堵塞毛孔、加重负担。其实，选对几款核心产品，精简高效地护理，才是正道。</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-medium text-[var(--jade)] mb-2">3. 专业的事情交给专业的人</h4>
                      <p className="text-sm text-[var(--dark-light)]">护肤是一门科学，但不是高不可攀的科学。普通姐妹不需要成为专家，但需要学会识别靠谱的建议和产品。而我能做的，就是用20余年的专业经验，帮你避开弯路。</p>
                    </div>
                  </div>
                </div>

                {/* 个人承诺 */}
                <div className="bg-[var(--jade)]/10 rounded-xl p-6 mt-6">
                  <h3 className="font-semibold text-[var(--dark)] mb-4">我的承诺</h3>
                  <p className="text-sm text-[var(--dark-light)] mb-4">作为一个从一线做起来的创始人，我向每一位信任爱美舜的姐妹承诺：</p>
                  <ul className="space-y-2 text-sm text-[var(--dark-light)]">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--jade)]">✓</span>
                      <span><strong>产品安全</strong>：所有产品均通过国家化妆品备案，0激素0铅汞</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--jade)]">✓</span>
                      <span><strong>效果真实</strong>：不夸大宣传，所有功效基于真实用户反馈</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--jade)]">✓</span>
                      <span><strong>服务用心</strong>：每一位客户都能得到专业的护肤建议</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--jade)]">✓</span>
                      <span><strong>长期主义</strong>：不做一锤子买卖，只建立长期的信任关系</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 品牌数据区域 */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--dark)] mb-12 text-center">
            用数据说话——爱美舜的8年历程
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {statsData.map((stat, index) => (
              <Card key={index} className="bg-white border-[var(--ivory-dark)] text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-[var(--jade)]" />
                  <div className="font-serif text-3xl md:text-4xl font-bold text-[var(--jade)] mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-[var(--dark-light)]">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 品牌理念区域 */}
      <section className="py-16 md:py-24 bg-[var(--ivory)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--dark)] mb-4 text-center">
            爱美舜的护肤哲学
          </h2>
          <p className="text-center text-[var(--dark-light)] mb-12 max-w-2xl mx-auto">
            三大核心理念，指导我们做好每一件产品
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {philosophyData.map((item, index) => (
              <Card key={index} className="bg-white border-[var(--ivory-dark)] h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full bg-[var(--jade)]/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-[var(--jade)]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[var(--dark)] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[var(--dark-light)] mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--dark-light)]">
                        <span className="text-[var(--jade)] mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程时间线 */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--dark)] mb-12 text-center">
            发展历程
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* 时间线中线 */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-[var(--jade)]/20"></div>

              {timelineData.map((item, index) => (
                <div key={index} className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* 时间点 */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--jade)] border-4 border-white shadow z-10"></div>
                  
                  {/* 内容卡片 */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="bg-white border-[var(--ivory-dark)] hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <span className="inline-block px-3 py-1 bg-[var(--jade)]/10 text-[var(--jade)] text-sm font-semibold rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-[var(--dark)] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[var(--dark-light)] text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* 空白占位（用于交替布局） */}
                  <div className="hidden md:block md:w-[45%]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 品牌荣誉/资质区域 */}
      <section className="py-16 md:py-24 bg-[var(--ivory)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--dark)] mb-4 text-center">
            合规认证，安心选择
          </h2>
          <p className="text-center text-[var(--dark-light)] mb-12 max-w-2xl mx-auto">
            所有资质真实可查，让您用得放心
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white border-[var(--ivory-dark)] text-center h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--jade)]/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[var(--jade)]" />
                  </div>
                  <h3 className="font-semibold text-[var(--dark)] mb-2">{cert.title}</h3>
                  <p className="text-sm text-[var(--dark-light)]">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 底部CTA区域 */}
      <section className="py-16 md:py-20 bg-gradient-to-t from-[var(--jade)]/10 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--dark)] mb-4">
            还有疑问？欢迎联系瑾钰
          </h2>
          <p className="text-[var(--dark-light)] mb-8 max-w-xl mx-auto">
            无论是肌肤问题咨询，还是商务合作洽谈，都可以直接联系我。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[var(--jade)] hover:bg-[var(--jade-dark)] text-white px-8 py-6 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              添加微信咨询
            </Button>
            <Button variant="outline" className="border-[var(--jade)] text-[var(--jade)] hover:bg-[var(--jade)]/10 px-8 py-6 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              发送邮件
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

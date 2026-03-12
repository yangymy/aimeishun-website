"use client";

import { useState } from "react";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Users, 
  Lock,
  AlertCircle,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WeChatModal } from "@/components/WeChatModal";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "添加瑾钰微信",
    description: "一对一肌肤问题诊断、专属护肤方案建议、产品使用指导、优先体验新品",
    note: "工作日 9:00-21:00 在线\n添加时请备注「护肤咨询」",
    primary: true,
    buttonText: "添加微信",
  },
  {
    icon: Phone,
    title: "拨打咨询电话",
    phone: "13538941293",
    description: "紧急问题电话咨询、产品售后问题、代理合作洽谈",
    note: "工作日 9:00-18:00\n如遇忙线，请稍后再拨或优先选择微信咨询",
    primary: false,
    buttonText: "拨打电话",
  },
  {
    icon: Mail,
    title: "发送邮件",
    email: "873974555@qq.com",
    description: "商务合作洽谈、品牌合作邀约、批量采购咨询、意见建议反馈",
    note: "1-3个工作日内回复",
    primary: false,
    buttonText: "发送邮件",
  },
];

const servicePromises = [
  {
    icon: Users,
    title: "真实回复",
    description: "所有咨询均由真人回复，不是机器人。瑾钰老师会亲自参与重要咨询的回复。",
  },
  {
    icon: Shield,
    title: "专业建议",
    description: "基于20余年的专业经验，给出切实可行的建议，不夸大、不忽悠。",
  },
  {
    icon: Lock,
    title: "保护隐私",
    description: "您的个人信息和肌肤状况，我们会严格保密，绝不会泄露给第三方。",
  },
];

const faqData = [
  {
    question: "添加微信后，一般多久会回复？",
    answer: "工作日期间，一般会在2小时内回复。如遇咨询高峰期，可能会稍有延迟，但当天一定会回复。周末和节假日的回复可能会慢一些，请见谅。",
  },
  {
    question: "我没有买过爱美舜的产品，可以咨询吗？",
    answer: "当然可以。无论你是想了解产品、询问肌肤问题，还是单纯咨询护肤知识，都欢迎添加微信。我们不强制推销，只提供专业建议，买不买都没关系。",
  },
  {
    question: "肌肤问题的咨询收费吗？",
    answer: "不收费。目前瑾钰老师的一对一肌肤诊断是免费服务，希望能帮助更多姐妹找到适合自己的护肤方案。但如果需要非常详细的长期跟踪指导，可能会推荐相应的产品或服务。",
  },
  {
    question: "如何辨别真假爱美舜产品？",
    answer: "爱美舜产品目前仅通过官方微信/企业微信、授权代理商、官方合作的线下体验点销售。其他渠道（如某宝、某多个人店铺）购买的产品，我们无法保证真伪。建议添加官方微信，通过正规渠道购买，确保产品品质和售后服务。",
  },
  {
    question: "用了产品出现不适怎么办？",
    answer: "首先，请立即停用产品，用清水洁面。然后添加微信，向我们反馈具体情况。我们会根据你的情况，给出相应的建议。如情况严重，请及时就医。注意：护肤品因人而异，极少数人可能对某些成分敏感。使用前建议先在耳后或手腕内侧测试。",
  },
  {
    question: "我想成为代理，怎么联系？",
    answer: "添加瑾钰微信，回复「代理咨询」，我们会发送详细的代理政策和合作流程。建议先了解清楚，确认认同我们的品牌理念和合作方式后，再决定是否加入。",
  },
  {
    question: "产品有防伪标识吗？",
    answer: "是的，爱美舜全线产品均有防伪标识。收到产品后，可以通过以下方式验证真伪：1. 查看包装上的防伪码 2. 刮开涂层，扫描二维码 3. 输入防伪码查询。如查询结果异常，请立即联系客服。",
  },
];

const consultationTypes = [
  { value: "skin", label: "肌肤问题咨询" },
  { value: "product", label: "产品使用指导" },
  { value: "agent", label: "代理合作洽谈" },
  { value: "service", label: "售后服务" },
  { value: "other", label: "其他" },
];

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "skin",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);

  const handleWeChatClick = async () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      const wechatId = "AMSwmy666";
      try {
        await navigator.clipboard.writeText(wechatId);
        alert("微信ID已复制: " + wechatId + "\n正在打开微信...");
        setTimeout(() => {
          window.location.href = "weixin://";
        }, 1500);
      } catch (err) {
        alert("请手动复制微信ID: " + wechatId);
      }
    } else {
      setIsWeChatModalOpen(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", type: "skin", message: "" });
    }, 3000);
  };

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`border-[var(--ivory-dark)] h-full ${
                  method.primary
                    ? "bg-[var(--orange)] text-white"
                    : "bg-white"
                }`}
              >
                <CardContent className="p-8 flex flex-col h-full">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${
                      method.primary
                        ? "bg-white/20"
                        : "bg-[var(--orange)]/10"
                    }`}
                  >
                    <method.icon
                      className={`w-7 h-7 ${
                        method.primary ? "text-white" : "text-[var(--orange)]"
                      }`}
                    />
                  </div>

                  <h3
                    className={`font-serif text-xl font-bold mb-3 ${
                      method.primary ? "text-white" : "text-[var(--dark)]"
                    }`}
                  >
                    {method.title}
                  </h3>

                  {method.phone && (
                    <p
                      className={`text-2xl font-bold mb-3 ${
                        method.primary ? "text-white" : "text-[var(--orange)]"
                      }`}
                    >
                      {method.phone}
                    </p>
                  )}

                  {method.email && (
                    <p
                      className={`text-lg font-medium mb-3 ${
                        method.primary ? "text-white" : "text-[var(--orange)]"
                      }`}
                    >
                      {method.email}
                    </p>
                  )}

                  <p
                    className={`mb-4 leading-relaxed ${
                      method.primary
                        ? "text-white/90"
                        : "text-[var(--dark-light)]"
                    }`}
                  >
                    {method.description}
                  </p>

                  <p
                    className={`text-sm whitespace-pre-line mb-6 mt-auto ${
                      method.primary
                        ? "text-white/70"
                        : "text-[var(--dark-lighter)]"
                    }`}
                  >
                    {method.note}
                  </p>

                  <Button
                    onClick={() => {
                      if (method.primary) {
                        handleWeChatClick();
                      } else if (method.phone) {
                        window.location.href = `tel:${method.phone}`;
                      } else if (method.email) {
                        window.location.href = `mailto:${method.email}`;
                      }
                    }}
                    className={`w-full mt-auto ${
                      method.primary
                        ? "bg-white text-[var(--orange)] hover:bg-white/90"
                        : "bg-[var(--orange)] text-white hover:bg-[var(--orange-dark)]"
                    }`}
                  >
                    {method.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--ivory)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--dark)] mb-8">
                常见问题——也许这里就有你要的答案
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-[var(--ivory-dark)]"
                  >
                    <AccordionTrigger className="text-left text-[var(--dark)] hover:text-[var(--orange)]">
                      <span className="font-medium">Q{index + 1}: {faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[var(--dark-light)] leading-relaxed">
                      <span className="font-semibold text-[var(--orange)]">A:</span>{" "}
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <Card className="bg-white border-[var(--ivory-dark)]">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl font-bold text-[var(--dark)] mb-2">
                    在线留言
                  </h2>
                  <p className="text-[var(--dark-light)] mb-6">
                    我们会尽快回复你
                  </p>

                  <div className="space-y-4">
                    <p className="text-sm text-[var(--dark-light)]">
                      请点击下方按钮填写表单，我们会尽快与您联系：
                    </p>
                    <a
                      href="https://cqwv02td.jsjform.com/f/W95mWm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-[var(--orange)] hover:bg-[var(--orange-dark)] text-white py-4 px-6 rounded-lg transition-colors"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      填写咨询表单
                    </a>
                    
                    <p className="text-xs text-[var(--dark-lighter)] text-center">
                      表单由金数据提供支持，安全可信
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--dark)] mb-4 text-center">
            我们的服务承诺
          </h2>
          <p className="text-center text-[var(--dark-light)] mb-12 max-w-2xl mx-auto">
            三大承诺，让您安心咨询
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {servicePromises.map((promise, index) => (
              <Card
                key={index}
                className="bg-white border-[var(--ivory-dark)] text-center h-full"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--orange)]/10 flex items-center justify-center">
                    <promise.icon className="w-8 h-8 text-[var(--orange)]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[var(--dark)] mb-3">
                    {promise.title}
                  </h3>
                  <p className="text-[var(--dark-light)]">{promise.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--ivory)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--dark)] mb-4 text-center">
            线下体验——近距离了解爱美舜
          </h2>
          <p className="text-center text-[var(--dark-light)] mb-12 max-w-2xl mx-auto">
            欢迎到店体验，建议提前预约
          </p>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-[var(--ivory-dark)]">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-[var(--dark)] mb-2">
                        爱美舜肌肤管理中心
                      </h3>
                      <div className="flex items-start gap-3 text-[var(--dark-light)]">
                        <MapPin className="w-5 h-5 text-[var(--orange)] mt-0.5 shrink-0" />
                        <span>地址：广东省惠州市惠城区水口街道中心高盛西湖智谷产业园A8栋702室</span>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg overflow-hidden border border-[var(--ivory-dark)]">
                      <iframe
                        src="https://map.qq.com/m/?lat=23.0833&lng=114.4167&zoom=15"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="爱美舜位置"
                      />
                    </div>

                    <div>
                      <h4 className="font-medium text-[var(--dark)] mb-2">营业时间</h4>
                      <div className="flex items-start gap-3 text-[var(--dark-light)]">
                        <Clock className="w-5 h-5 text-[var(--orange)] mt-0.5 shrink-0" />
                        <div>
                          <p>周一至周六 10:00-19:00</p>
                          <p className="text-sm text-[var(--dark-lighter)]">（周日休息，节假日请提前预约）</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-[var(--dark)] mb-2">服务内容</h4>
                      <ul className="space-y-2 text-[var(--dark-light)]">
                        <li className="flex items-center gap-2">
                          <span className="text-[var(--orange)]">•</span>
                          <span>免费肌肤检测</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[var(--orange)]">•</span>
                          <span>产品体验试用</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[var(--orange)]">•</span>
                          <span>一对一护肤咨询</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-[var(--orange)]">•</span>
                          <span>代理面谈洽谈</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[var(--orange)]/10 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-[var(--orange)] mt-0.5 shrink-0" />
                        <div className="text-sm text-[var(--dark-light)]">
                          <p className="font-medium text-[var(--dark)] mb-1">温馨提示</p>
                          <p>建议提前预约，避免等待</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[var(--orange)]/10 rounded-xl flex items-center justify-center min-h-[300px]">
                    <div className="text-center text-[var(--dark-lighter)]">
                      <MapPin className="w-16 h-16 mx-auto mb-4 text-[var(--orange)]/40" />
                      <p>地图位置</p>
                      <p className="text-sm mt-2">（嵌入百度/高德地图）</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-t from-[var(--orange)]/10 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--dark)] mb-4">
            期待与你的交流
          </h2>
          <p className="text-[var(--dark-light)] mb-8 max-w-xl mx-auto">
            无论是肌肤问题、产品咨询，还是合作洽谈
            <br />
            都欢迎随时联系我们
          </p>
          <p className="text-sm text-[var(--dark-lighter)] mb-8">
            我们承诺：真实回复、专业建议、保护隐私
          </p>
          <Button 
            onClick={handleWeChatClick}
            className="bg-[var(--orange)] hover:bg-[var(--orange-dark)] text-white px-8 py-6 text-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            添加微信，开始咨询
          </Button>
        </div>
      </section>

      <WeChatModal 
        isOpen={isWeChatModalOpen} 
        onClose={() => setIsWeChatModalOpen(false)} 
      />
    </>
  );
}

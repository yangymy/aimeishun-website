import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  products: [
    { label: "氨基酸温和洁面乳", href: "/products#cleanser" },
    { label: "玻尿酸保湿精华液", href: "/products#essence" },
    { label: "烟酰胺亮肤精华", href: "/products#niacinamide" },
    { label: "积雪草修护面霜", href: "/products#cream" },
  ],
  company: [
    { label: "关于我们", href: "/about" },
    { label: "品牌故事", href: "/about#story" },
    { label: "创始人陈瑾钰", href: "/about#founder" },
    { label: "联系我们", href: "/contact" },
  ],
  support: [
    { label: "客户案例", href: "/cases" },
    { label: "代理合作", href: "/agent" },
    { label: "护肤知识", href: "/knowledge" },
    { label: "常见问题", href: "/faq" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#4A4A48] text-white">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold text-white">
                爱美舜
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              每一张脸，都值得被用心对待。
              <br />
              专注30+女性问题肌肤修护。
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-[#F37021]" />
                <a href="tel:13538941293" className="hover:text-[#F37021] transition-colors">13538941293</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-[#F37021]" />
                <a href="mailto:873974555@qq.com" className="hover:text-[#F37021] transition-colors">873974555@qq.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-[#F37021]" />
                <span>广东省惠州市惠城区水口街道中心高盛西湖智谷产业园A8栋702室</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">明星产品</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#F37021] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">关于爱美舜</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#F37021] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">服务支持</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#F37021] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">
              © 2026 爱美舜 AIMEISHUN. All rights reserved.
            </p>
            <p className="text-xs text-white/40 text-center md:text-right">
              化妆品不能替代药物治疗，如有严重肌肤问题请先咨询专业医生
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

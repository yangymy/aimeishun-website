import Link from "next/link";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

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
    <footer className="bg-[#FAFAFA] border-t border-[#E8E2DB]/30"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
      >
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
        >
          {/* 品牌信息 */}
          <div className="lg:col-span-1"
          >
            <Link href="/" className="inline-block"
            >
              <span className="font-serif text-3xl font-semibold text-[#C9A961] tracking-wide"
              >
                爱美舜
              </span>
            </Link>
            <p className="mt-5 text-sm text-[#666666] leading-relaxed"
            >
              每一张脸，都值得被用心对待。
              <br />
              专注30+女性问题肌肤修护。
            </p>
            <div className="mt-6 space-y-4"
            >
              <div className="flex items-center gap-3 text-sm text-[#666666]"
              >
                <div className="w-9 h-9 bg-[#C9A961]/10 rounded-lg flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 text-[#C9A961]" />
                </div>
                <a href="tel:13538941293" className="hover:text-[#C9A961] transition-colors duration-300"
                >13538941293</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#666666]"
              >
                <div className="w-9 h-9 bg-[#C9A961]/10 rounded-lg flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 text-[#C9A961]" />
                </div>
                <a href="mailto:873974555@qq.com" className="hover:text-[#C9A961] transition-colors duration-300"
                >873974555@qq.com</a>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#666666]"
              >
                <div className="w-9 h-9 bg-[#C9A961]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <MapPin className="w-4 h-4 text-[#C9A961]" />
                </div>
                <span className="leading-relaxed"
                >广东省惠州市惠城区水口街道中心高盛西湖智谷产业园A8栋702室</span>
              </div>
            </div>
          </div>

          {/* 产品链接 */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#C9A961] mb-6"
            >明星产品</h3>
            <ul className="space-y-3"
            >
              {footerLinks.products.map((link) => (
                <li key={link.href}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-[#666666] hover:text-[#C9A961] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 关于链接 */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#C9A961] mb-6"
            >关于爱美舜</h3>
            <ul className="space-y-3"
            >
              {footerLinks.company.map((link) => (
                <li key={link.href}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-[#666666] hover:text-[#C9A961] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 服务链接 */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#C9A961] mb-6"
            >服务支持</h3>
            <ul className="space-y-3"
            >
              {footerLinks.support.map((link) => (
                <li key={link.href}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-[#666666] hover:text-[#C9A961] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="border-t border-[#E8E2DB]/30 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-sm text-[#999999] flex items-center gap-1"
            >
              © 2026 爱美舜 AIMEISHUN. Made with
              <Heart className="w-4 h-4 text-[#C9A961] fill-[#C9A961]" />
              All rights reserved.
            </p>
            <p className="text-xs text-[#999999] text-center md:text-right"
            >
              化妆品不能替代药物治疗，如有严重肌肤问题请先咨询专业医生
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

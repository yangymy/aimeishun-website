import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { FloatContact } from "@/components/FloatContact";
import { PageLoader } from "@/components/animations/PageLoader";
import { BackToTop } from "@/components/animations/NavbarEffects";
import { StickyBanner } from "@/components/StickyBanner";

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif_SC({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "爱美舜 | 专注30+女性问题肌肤护理",
    template: "%s | 爱美舜"
  },
  description: "爱美舜功效型护肤品牌，专注30+女性问题肌肤护理。国家高级美容师陈瑾钰老师一对一指导，1800+成功案例见证。针对色斑、敏感肌、痘痘、衰老等问题提供科学分阶护肤方案。",
  keywords: ["爱美舜", "护肤品牌", "问题肌肤", "30+女性护肤", "祛斑", "敏感肌修护", "陈瑾钰"],
  authors: [{ name: "爱美舜" }],
  creator: "爱美舜",
  metadataBase: new URL("https://www.aimeishun.cn"),
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.aimeishun.cn",
    siteName: "爱美舜",
    title: "爱美舜 | 专注30+女性问题肌肤护理",
    description: "爱美舜功效型护肤品牌，专注30+女性问题肌肤护理。国家高级美容师陈瑾钰老师一对一指导，1800+成功案例见证。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    other: {
      "baidu-site-verification": "your-baidu-verification-code",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#C9A961",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        <StickyBanner />
        <PageLoader brandName="爱美舜" duration={2000} />
        {children}
        <FloatContact />
        <BackToTop />
      </body>
    </html>
  );
}

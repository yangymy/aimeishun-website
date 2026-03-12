"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/products", label: "产品中心" },
  { href: "/cases", label: "客户案例" },
  { href: "/agent", label: "代理合作" },
  { href: "/knowledge", label: "护肤知识" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "联系我们" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F6]/95 backdrop-blur-md border-b border-[#E8E2DB]">
      <nav className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl font-semibold text-[#4A4A48]">
              爱美舜
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#6A6A68] hover:text-[#F37021] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-[#F37021] hover:bg-[#D65A0F] text-white"
            >
              <Link href="/contact">预约咨询</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-[#4A4A48]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white border-b border-[#E8E2DB] shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-base font-medium text-[#4A4A48] hover:text-[#F37021] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-[#F37021] hover:bg-[#D65A0F] text-white"
                >
                  <Link href="/contact">预约咨询</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

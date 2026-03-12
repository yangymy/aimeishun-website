"use client";

import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { useState } from "react";
import { WeChatModal } from "./WeChatModal";

export function FloatContact() {
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <button
          onClick={() => setIsWeChatModalOpen(true)}
          className="w-12 h-12 rounded-full bg-[#F37021] hover:bg-[#D65A0F] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:ring-offset-2"
          aria-label="添加微信"
        >
          <MessageCircle className="w-5 h-5" />
        </button>

        <a
          href="tel:13538941293"
          className="w-12 h-12 rounded-full bg-[#F37021] hover:bg-[#D65A0F] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F37021] focus:ring-offset-2"
          aria-label="拨打电话"
        >
          <Phone className="w-5 h-5" />
        </a>

        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-[#4A4A48] hover:bg-[#6A6A68] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#4A4A48] focus:ring-offset-2"
          aria-label="回到顶部"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      <WeChatModal
        isOpen={isWeChatModalOpen}
        onClose={() => setIsWeChatModalOpen(false)}
      />
    </>
  );
}

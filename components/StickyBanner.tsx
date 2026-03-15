"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const STORAGE_KEY = "sticky-banner-closed";

export function StickyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // 检查 localStorage 是否已关闭
    const isClosed = localStorage.getItem(STORAGE_KEY);
    if (!isClosed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  // 服务端渲染时不显示，避免 hydration 不匹配
  if (!isClient) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-[#C9A961] to-[#D4A574]"
        >
          <div className="relative flex items-center justify-center px-4 py-2.5 sm:py-3">
            {/* 文字内容 */}
            <p className="text-white text-xs sm:text-sm font-medium text-center pr-8 sm:pr-0">
              <span className="hidden sm:inline">限时免费咨询 | </span>
              <span className="sm:hidden">限时免费咨询 | </span>
              添加微信获取专属护肤方案
            </p>

            {/* 关闭按钮 */}
            <button
              onClick={handleClose}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="关闭横幅"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default StickyBanner;

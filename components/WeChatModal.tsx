"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import Image from "next/image";

interface WeChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WeChatModal({ isOpen, onClose }: WeChatModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-[#FAF8F6] border-[#E8E2DB]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-lg font-semibold text-[#4A4A48]">
            添加微信咨询
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center py-6">
          <div className="relative w-64 h-64 mb-4 bg-white p-4 rounded-lg shadow-sm">
            <Image
              src="/images/wechat-qr.png"
              alt="微信二维码"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <p className="text-sm text-[#6A6A68] mb-2">
            微信号：<span className="font-medium text-[#F37021]">AMSwmy666</span>
          </p>
          
          <p className="text-xs text-[#8A8A88] text-center max-w-xs">
            扫描二维码或复制微信号添加陈瑾钰老师微信，获取专业护肤咨询
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

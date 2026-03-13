"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface PageLoaderProps {
  brandName?: string;
  duration?: number;
}

export function PageLoader({ 
  brandName = "爱美舜", 
  duration = 2000 
}: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      }
    };
    
    requestAnimationFrame(updateProgress);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FAF8F6]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <motion.span
              className="font-serif text-5xl md:text-6xl font-semibold text-[#4A4A48]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2 
              }}
            >
              {brandName}
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[#6A6A68] text-sm md:text-base mb-12"
          >
            专注30+女性问题肌肤护理
          </motion.p>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "200px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative h-[2px] bg-[#E8E2DB] rounded-full overflow-hidden"
            style={{ width: "200px" }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#F37021] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
            <motion.div
              className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-[#F37021]/50 to-transparent"
              animate={{
                x: [-80, 280],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-4 text-sm text-[#8A8A88] font-medium"
          >
            {Math.round(progress)}%
          </motion.span>

          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#F37021]/20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-[#D4A574]/20"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-[#F37021]/30"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

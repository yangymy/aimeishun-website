"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ProductImageProps {
  src?: string;
  name: string;
  category?: string;
  className?: string;
  aspectRatio?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  containerClassName?: string;
}

export function ProductImage({
  src,
  name,
  category,
  className = "",
  aspectRatio = "1 / 1",
  fill = true,
  width,
  height,
  priority = false,
  containerClassName = "",
}: ProductImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(src);

  useEffect(() => {
    setImageSrc(src);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const isRemoteImage = imageSrc?.startsWith("http") || imageSrc?.startsWith("//");
  const showPlaceholder = !imageSrc || hasError;

  return (
    <div
      className={`relative overflow-hidden ${containerClassName}`}
      style={{ aspectRatio: fill ? aspectRatio : undefined }}
    >
      <AnimatePresence mode="wait">
        {showPlaceholder ? (
          <Placeholder
            key="placeholder"
            name={name}
            category={category}
          />
        ) : (
          <motion.div
            key="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full"
          >
            {isRemoteImage ? (
              <img
                src={imageSrc}
                alt={name}
                className={`h-full w-full object-cover ${className}`}
                onLoad={handleLoad}
                onError={handleError}
                loading={priority ? "eager" : "lazy"}
              />
            ) : (
              <Image
                src={imageSrc}
                alt={name}
                fill={fill}
                width={!fill ? width : undefined}
                height={!fill ? height : undefined}
                className={`object-cover ${className}`}
                onLoad={handleLoad}
                onError={handleError}
                priority={priority}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            )}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_-20px_40px_-15px_rgba(0,0,0,0.1)]" />
          </motion.div>
        )}
      </AnimatePresence>

      {!showPlaceholder && !isLoaded && <ShimmerLoader />}
    </div>
  );
}

function Placeholder({ name, category }: { name: string; category?: string }) {
  const initial = name.charAt(0);
  const maxCharsPerLine = 6;
  let line1 = name;
  let line2 = "";
  
  if (name.length > maxCharsPerLine * 1.5) {
    const midpoint = Math.ceil(name.length / 2);
    const breakPoint = name.slice(0, midpoint).lastIndexOf("");
    const actualBreak = breakPoint > 2 ? breakPoint : midpoint;
    line1 = name.slice(0, actualBreak);
    line2 = name.slice(actualBreak);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex h-full w-full flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #F5F1ED 0%, #FAF8F6 50%, #F5F1ED 100%)",
      }}
    >
      <div className="absolute inset-3 rounded-xl border border-[#E8E2DB]" />
      <div className="absolute left-3 top-3 h-4 w-4 rounded-tl-lg border-l-2 border-t-2 border-[#D4A574]/30" />
      <div className="absolute right-3 top-3 h-4 w-4 rounded-tr-lg border-r-2 border-t-2 border-[#D4A574]/30" />
      <div className="absolute bottom-3 left-3 h-4 w-4 rounded-bl-lg border-b-2 border-l-2 border-[#D4A574]/30" />
      <div className="absolute bottom-3 right-3 h-4 w-4 rounded-br-lg border-b-2 border-r-2 border-[#D4A574]/30" />

      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="font-serif text-6xl font-light text-[#F37021]/15 sm:text-7xl"
      >
        {initial}
      </motion.span>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-2 text-center"
      >
        <p className="px-4 text-sm font-medium tracking-wide text-[#4A4A48]/70">
          {line1}
        </p>
        {line2 && (
          <p className="text-sm font-medium tracking-wide text-[#4A4A48]/70">
            {line2}
          </p>
        )}
      </motion.div>

      {category && (
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-3 rounded-full bg-[#F37021]/10 px-3 py-1 text-xs font-medium text-[#F37021]/70"
        >
          {category}
        </motion.span>
      )}
    </motion.div>
  );
}

function ShimmerLoader() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #F5F1ED 25%, #FAF8F6 50%, #F5F1ED 75%)",
        backgroundSize: "200% 100%",
      }}
      animate={{
        backgroundPosition: ["200% 0", "-200% 0"],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

/**
 * Utility function to generate image filename from product name
 * Converts Chinese product names to numbered filenames
 */
export function getProductImageFilename(productId: number, productName: string): string {
  const filenameMap: Record<number, string> = {
    1: "product-1-洁面精华液.jpg",
    2: "product-2-靓肤隔离乳.jpg",
    3: "product-3-草本美肌液.jpg",
    4: "product-4-玉肌液.jpg",
    5: "product-5-草本清颜液.jpg",
    6: "product-6-净肤精华液.jpg",
    7: "product-7-养护精华液.jpg",
    8: "product-8-青春童颜精华液.jpg",
    9: "product-9-美肌倍护精华液.jpg",
    10: "product-10-靓肤透润霜.jpg",
    11: "product-11-皮肤肌底冻干粉.jpg",
    12: "product-12-多肽倍护面膜.jpg",
  };

  return filenameMap[productId] || `${String(productId).padStart(2, "0")}_${productName.toLowerCase().replace(/\s+/g, "_")}.jpg`;
}

export function getProductImagePath(productId: number, productName: string): string {
  const filename = getProductImageFilename(productId, productName);
  return `/images/products/${filename}`;
}

export default ProductImage;

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, ImgHTMLAttributes } from "react";

interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  className?: string;
  containerClassName?: string;
  blurAmount?: number;
  transitionDuration?: number;
  aspectRatio?: string;
}

export function LazyImage({
  src,
  alt,
  placeholderSrc,
  className = "",
  containerClassName = "",
  blurAmount = 20,
  transitionDuration = 0.8,
  aspectRatio,
  ...imgProps
}: LazyImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "100px" });
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${containerClassName}`}
      style={{ aspectRatio }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {placeholderSrc && (
        <img
          src={placeholderSrc}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{ filter: `blur(${blurAmount}px)` }}
        />
      )}
      
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-[${transitionDuration}ms] ${
            isLoaded ? "blur-0 opacity-100" : `opacity-0`
          } ${className}`}
          style={{
            filter: isLoaded ? "blur(0px)" : `blur(${blurAmount}px)`,
            transform: isLoaded ? "scale(1)" : "scale(1.05)",
          }}
          onLoad={handleLoad}
          {...imgProps}
        />
      )}
      
      {!isLoaded && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#F5F1ED] via-[#FAF8F6] to-[#F5F1ED]"
          animate={{
            backgroundPosition: ["-200% 0", "200% 0"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      )}
    </motion.div>
  );
}

interface BlurImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  lowQualitySrc?: string;
}

export function BlurImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  lowQualitySrc,
  ...imgProps
}: BlurImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {lowQualitySrc && (
        <img
          src={lowQualitySrc}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{ filter: "blur(20px)" }}
        />
      )}
      
      <motion.div
        className={`w-full h-full ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-all duration-700"
          style={{ filter: isLoaded ? "blur(0px)" : "blur(20px)" }}
          onLoad={() => setIsLoaded(true)}
          {...imgProps}
        />
      </motion.div>
    </div>
  );
}

interface ProgressiveImageProps {
  src: string;
  alt: string;
  placeholderColor?: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export function ProgressiveImage({
  src,
  alt,
  placeholderColor = "#F5F1ED",
  className = "",
  containerClassName = "",
  priority = false,
}: ProgressiveImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "50px" });
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);

  const handleInView = () => {
    if (!shouldLoad) {
      setShouldLoad(true);
    }
  };

  if (isInView && !shouldLoad) {
    handleInView();
  }

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${containerClassName}`}
      style={{ backgroundColor: placeholderColor }}
    >
      {shouldLoad && (
        <>
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: placeholderColor }}
            animate={{ opacity: isLoaded ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />
          
          <motion.img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover ${className}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              scale: isLoaded ? 1 : 1.05,
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onLoad={() => setIsLoaded(true)}
            loading={priority ? "eager" : "lazy"}
          />
        </>
      )}
    </motion.div>
  );
}

interface FadeImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export function FadeImage({
  src,
  alt,
  className = "",
  delay = 0,
  ...imgProps
}: FadeImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <img
        src={src}
        alt={alt}
        className={`transition-transform duration-700 ${className}`}
        onLoad={() => setIsLoaded(true)}
        {...imgProps}
      />
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { ProductImage } from "./ProductImage";

export interface Product {
  id: number;
  name: string;
  price: number;
  benefit: string;
  category: string;
  imagePrompt: string;
  ingredients?: string;
  description?: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl">
        {/* Product Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <ProductImage
            src={product.image}
            name={product.name}
            category={product.category}
            className="transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F37021]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Price Tag - Hermès Orange */}
          <div className="absolute left-0 top-4 z-10">
            <div className="bg-[#F37021] px-4 py-1.5 text-sm font-bold text-white shadow-lg">
              ¥{product.price}
            </div>
            <div className="h-0 w-0 border-l-8 border-r-0 border-t-0 border-b-8 border-l-transparent border-r-transparent border-b-transparent border-t-[#D65A0F]" />
          </div>

          {/* Category Badge */}
          <div className="absolute right-4 top-4 z-10">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#4A4A48] shadow-sm backdrop-blur-sm">
              {product.category}
            </span>
          </div>

          {/* View Details Button - Appears on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#F37021] shadow-xl transition-transform"
            >
              <Eye className="h-4 w-4" />
              查看详情
            </motion.button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <h3 className="font-serif text-lg font-semibold text-[#4A4A48] transition-colors duration-300 group-hover:text-[#F37021]">
            {product.name}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#6A6A68]">
            {product.benefit}
          </p>

          {/* Subtle Divider */}
          <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-[#E8E2DB] to-transparent" />

          {/* Bottom Info Row */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-[#8A8A88]">
              {product.category}
            </span>
            <span className="text-xs font-medium text-[#F37021]">
              热销推荐
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

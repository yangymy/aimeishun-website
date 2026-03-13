"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="relative">
      
      <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5">
        <motion.div
          className="w-full h-full bg-gradient-to-b from-[#F37021] via-[#D4A574] to-[#F37021]/30"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ originY: 0 }}
        />
      </div>

      
      <div className="space-y-12 md:space-y-16">
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            event={event}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  );
}

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  isInView: boolean;
}

function TimelineItem({ event, index, isInView }: TimelineItemProps) {
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, { once: true, margin: "-50px" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={`relative flex items-start gap-4 md:gap-8 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      
      <motion.div
        className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={itemInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
          ease: "backOut",
        }}
      >
        <div
          className={`w-4 h-4 rounded-full border-4 border-white shadow-lg ${
            event.highlight
              ? "bg-[#F37021]"
              : "bg-[#D4A574]"
          }`}
        />
        
        {event.highlight && (
          <motion.div
            className="absolute inset-0 rounded-full bg-[#F37021]"
            animate={{
              scale: [1, 2, 2],
              opacity: [0.5, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}
      </motion.div>

      
      <motion.div
        className={`ml-12 md:ml-0 md:w-[45%] ${
          isEven ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
        }`}
        initial={{
          opacity: 0,
          x: isEven ? -50 : 50,
        }}
        animate={
          itemInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: isEven ? -50 : 50 }
        }
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: "easeOut",
        }}
      >
        <Card
          className={`bg-white border-[#E8E2DB] hover:shadow-xl transition-all duration-500 overflow-hidden group ${
            event.highlight ? "ring-2 ring-[#F37021]/20" : ""
          }`}
        >
          <CardContent className="p-6">
            
            <div
              className={`flex items-center gap-3 mb-3 ${
                isEven ? "md:justify-end" : ""
              }`}
            >
              <motion.span
                className={`inline-flex items-center gap-2 px-4 py-1.5 text-sm font-bold rounded-full ${
                  event.highlight
                    ? "bg-[#F37021] text-white"
                    : "bg-[#F37021]/10 text-[#F37021]"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {event.highlight && <Sparkles className="w-3.5 h-3.5" />}
                {event.year}
              </motion.span>
            </div>

            
            <h3 className="font-serif text-xl font-bold text-[#4A4A48] mb-3 group-hover:text-[#F37021] transition-colors duration-300">
              {event.title}
            </h3>

            
            <p className="text-[#6A6A68] leading-relaxed text-sm md:text-base">
              {event.description}
            </p>
          </CardContent>

          
          <motion.div
            className="h-1 bg-gradient-to-r from-[#F37021] to-[#D4A574]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ originX: isEven ? 1 : 0 }}
          />
        </Card>
      </motion.div>

      
      <div className="hidden md:block md:w-[45%]" />
    </div>
  );
}


export function CompactTimeline({ events }: TimelineProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <div ref={containerRef} className="relative">
      
      <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F37021] to-[#D4A574]/50" />

      <div className="space-y-6">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative pl-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            
            <div
              className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white shadow ${
                event.highlight ? "bg-[#F37021]" : "bg-[#D4A574]"
              }`}
            />

            
            <div className="bg-white rounded-lg p-4 border border-[#E8E2DB] shadow-sm">
              <span
                className={`inline-block px-2 py-0.5 text-xs font-bold rounded mb-2 ${
                  event.highlight
                    ? "bg-[#F37021] text-white"
                    : "bg-[#F37021]/10 text-[#F37021]"
                }`}
              >
                {event.year}
              </span>
              <h4 className="font-serif font-bold text-[#4A4A48] mb-1">
                {event.title}
              </h4>
              <p className="text-sm text-[#6A6A68]">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

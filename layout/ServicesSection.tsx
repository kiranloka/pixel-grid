"use client";
import React, { useEffect, useState } from "react";
import { Meteors } from "@/components/ui/meteors";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Search,
  Code2,
  MessageSquareHeart,
  BrainCircuit,
} from "lucide-react";
import { Zap, Brain, Send } from "lucide-react";

// --- Micro-Animations ---

const AdsAnimation = () => {
  return (
    <div className="flex h-full w-full items-center justify-center gap-4 p-4 bg-slate-950/20 rounded-xl">
      {/* 1. Phone / Instagram Skeleton */}
      <div className="relative h-32 w-20 rounded-2xl border-2 border-white/10 bg-slate-900 p-1.5 shadow-2xl">
        {/* Profile Header */}
        <div className="flex items-center gap-1 mb-2">
          <div className="h-3 w-3 rounded-full bg-white/10" />
          <div className="h-1 w-8 rounded-full bg-white/10" />
        </div>

        {/* Ad Image Block */}
        <motion.div
          animate={{
            backgroundColor: [
              "rgba(255,255,255,0.05)",
              "rgba(56,189,248,0.2)",
              "rgba(255,255,255,0.05)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-full rounded-sm mb-2 relative overflow-hidden"
        >
          {/* Shimmer Effect */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent"
          />
        </motion.div>

        {/* Caption Lines */}
        <div className="space-y-1">
          <div className="h-1 w-full rounded-full bg-white/10" />
          <div className="h-1 w-3/4 rounded-full bg-white/10" />
        </div>
      </div>

      {/* 2. Growth Sparkline */}
      <div className="flex flex-col items-start justify-center gap-1">
        <span className="text-[10px] font-medium text-sky-400/70 uppercase tracking-widest">
          Reach
        </span>
        <div className="relative h-12 w-24">
          <svg viewBox="0 0 100 40" className="h-full w-full">
            <motion.path
              d="M0 35 L20 32 L40 38 L60 15 L80 18 L100 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-sky-500"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          {/* Subtle Glow under the line */}
          <motion.div
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-0 left-0 h-full w-full bg-sky-500/10 blur-xl"
          />
        </div>
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs font-bold text-white/90"
        >
          +12.4%
        </motion.span>
      </div>
    </div>
  );
};

const SEOAnimation = () => {
  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="flex h-full w-full flex-col gap-3 p-4 pt-6"
    >
      {/* 🔎 Search Bar */}
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1.5"
      >
        <Search className="h-3 w-3 text-zinc-400" />

        {/* Fake typed query */}
        <div className="h-2 w-16 rounded-full bg-zinc-600" />

        {/* Blinking cursor */}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="h-3 w-[2px] bg-emerald-400 rounded"
        />
      </motion.div>

      {/* 📄 Search Results */}
      <div className="flex flex-col gap-2 mt-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: i * 0.25,
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 2.5,
            }}
            className={cn(
              "relative overflow-hidden rounded-full",
              i === 1
                ? "bg-emerald-500/60 h-[10px] w-[85%]"
                : i === 2
                  ? "bg-zinc-700 h-[9px] w-[70%]"
                  : "bg-zinc-800 h-[8px] w-[60%]",
            )}
          >
            {/* ✨ Shimmer scan */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.4,
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const WebDevAnimation = () => {
  // looping animation for each code line (type → hold → erase)
  const lineLoop = (delay: number) =>
    ({
      initial: { opacity: 0, width: "0%" },
      animate: {
        opacity: [0, 1, 1, 0],
        width: ["0%", "100%", "100%", "0%"],
      },
      transition: {
        duration: 4,
        delay,
        times: [0, 0.25, 0.75, 1],
        repeat: Infinity,
        repeatDelay: 1.2,
        ease: "easeInOut",
      },
    }) as any;

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative h-full w-full overflow-hidden rounded-md border border-zinc-800 bg-zinc-950 p-3 font-mono text-[10px] text-zinc-400 shadow-2xl"
    >
      {/* shimmer scan */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      {/* window dots */}
      <div className="mb-3 flex gap-1">
        <div className="h-2 w-2 rounded-full bg-red-500/40 shadow-[0_0_8px_rgba(239,68,68,0.7)]" />
        <div className="h-2 w-2 rounded-full bg-yellow-500/40 shadow-[0_0_8px_rgba(234,179,8,0.7)]" />
        <div className="h-2 w-2 rounded-full bg-green-500/40 shadow-[0_0_8px_rgba(34,197,94,0.7)]" />
      </div>

      <div className="space-y-2">
        {/* line 1 */}
        <motion.div {...lineLoop(0)} className="flex gap-1 overflow-hidden">
          <div className="h-1.5 w-10 bg-purple-500/70 rounded" />
          <div className="h-1.5 w-16 bg-sky-400/70 rounded" />
        </motion.div>

        {/* line 2 */}
        <motion.div
          {...lineLoop(0.4)}
          className="flex gap-1 ml-3 overflow-hidden"
        >
          <div className="h-1.5 w-20 bg-sky-400/70 rounded" />
          <div className="h-1.5 w-10 bg-emerald-400/70 rounded" />
        </motion.div>

        {/* line 3 */}
        <motion.div
          {...lineLoop(0.8)}
          className="flex gap-1 ml-3 overflow-hidden"
        >
          <div className="h-1.5 w-24 bg-sky-400/70 rounded" />
        </motion.div>

        {/* line 4 */}
        <motion.div {...lineLoop(1.2)} className="flex gap-1 overflow-hidden">
          <div className="h-1.5 w-14 bg-purple-500/70 rounded" />
          <div className="h-1.5 w-10 bg-sky-400/70 rounded" />
        </motion.div>

        {/* glowing cursor */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="h-3 w-[2px] bg-sky-400 rounded shadow-[0_0_8px_rgba(56,189,248,0.9)] mt-1"
        />
      </div>
    </motion.div>
  );
};

const FeedbackAnimation = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center p-4">
      {/* Feedback Card Skeleton */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        className="mb-4 w-full max-w-[140px] rounded-xl border border-white/10 bg-white/5 p-3 shadow-2xl"
      >
        {/* User Header Skeleton */}
        <div className="flex items-center gap-2 mb-2">
          <div className="h-4 w-4 rounded-full bg-emerald-500/20" />
          <div className="h-1.5 w-10 rounded-full bg-white/10" />
        </div>

        {/* Stars Row */}
        <div className="flex gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <motion.svg
              key={i}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3 w-3 text-yellow-500/80"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.5 + i * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20,
                repeat: Infinity,
                repeatDelay: 3.2, // Staggered to match card
              }}
            >
              <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
            </motion.svg>
          ))}
        </div>

        {/* Text Line Skeletons */}
        <div className="space-y-1.5">
          <div className="h-1 w-full rounded-full bg-white/5" />
          <div className="h-1 w-2/3 rounded-full bg-white/5" />
        </div>
      </motion.div>

      {/* Sentiment Tracker (The "Increase" Part) */}
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-baseline gap-1">
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              delay: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="text-xs font-bold text-white/90"
          >
            4.9
          </motion.span>
          <span className="text-[8px] uppercase tracking-tighter text-white/30">
            CSAT Score
          </span>
        </div>

        <div className="h-1 w-24 overflow-hidden rounded-full bg-white/5">
          <motion.div
            className="h-full rounded-full bg-linear-to-r from-emerald-500/50 to-emerald-400"
            initial={{ width: "0%" }}
            animate={{ width: "95%" }}
            transition={{
              duration: 1.5,
              delay: 1,
              ease: "circOut",
              repeat: Infinity,
              repeatDelay: 2.5,
            }}
          />
        </div>
      </div>
    </div>
  );
};

const AIAnimation = () => {
  const pulseTransition = {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-slate-950/30">
      {/* Minimal Dot Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "16px 16px",
        }}
      />

      {/* SVG Workflow Connections */}
      <svg className="absolute inset-0 h-full w-full" fill="none">
        {/* Connection: Trigger → Process */}
        <motion.path
          d="M 35 64 L 80 64"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
        <motion.path
          d="M 35 64 L 80 64"
          stroke="url(#flow-1)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
          transition={{ ...pulseTransition, delay: 0 }}
        />

        {/* Connection: Process → Branch (AI) */}
        <motion.path
          d="M 120 64 Q 140 64, 140 40 L 175 40"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
        <motion.path
          d="M 120 64 Q 140 64, 140 40 L 175 40"
          stroke="url(#flow-2)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
          transition={{ ...pulseTransition, delay: 1 }}
        />

        {/* Connection: Process → Branch (Analytics) */}
        <motion.path
          d="M 120 64 Q 140 64, 140 88 L 175 88"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
        <motion.path
          d="M 120 64 Q 140 64, 140 88 L 175 88"
          stroke="url(#flow-3)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
          transition={{ ...pulseTransition, delay: 1.2 }}
        />

        {/* Connection: AI → Deploy */}
        <motion.path
          d="M 215 40 Q 235 40, 235 64 L 255 64"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
        <motion.path
          d="M 215 40 Q 235 40, 235 64 L 255 64"
          stroke="url(#flow-4)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
          transition={{ ...pulseTransition, delay: 2 }}
        />

        {/* Connection: Analytics → Deploy */}
        <motion.path
          d="M 215 88 Q 235 88, 235 64 L 255 64"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
        <motion.path
          d="M 215 88 Q 235 88, 235 64 L 255 64"
          stroke="url(#flow-5)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
          transition={{ ...pulseTransition, delay: 2.2 }}
        />

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="flow-1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="flow-2">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="flow-3">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="flow-4">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="flow-5">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Workflow Nodes */}
      <div className="relative z-10 flex h-full w-full items-center p-3">
        {/* Column 1: Trigger */}
        <div className="flex flex-col justify-center" style={{ width: "25%" }}>
          <WorkflowNode
            icon={<Zap className="h-3 w-3" />}
            label="Trigger"
            color="cyan"
            delay={0}
          />
        </div>

        {/* Column 2: Process */}
        <div className="flex flex-col justify-center" style={{ width: "25%" }}>
          <WorkflowNode
            icon={<Sparkles className="h-3 w-3" />}
            label="Process"
            color="sky"
            delay={0.5}
          />
        </div>

        {/* Column 3: Branch (AI + Analytics) */}
        <div
          className="flex flex-col justify-around"
          style={{ width: "25%", height: "100%" }}
        >
          <WorkflowNode
            icon={<Brain className="h-3 w-3" />}
            label="AI"
            color="purple"
            delay={1}
          />
          <WorkflowNode
            icon={<BarChart3 className="h-3 w-3" />}
            label="Analyze"
            color="blue"
            delay={1.2}
          />
        </div>

        {/* Column 4: Deploy */}
        <div className="flex flex-col justify-center" style={{ width: "25%" }}>
          <WorkflowNode
            icon={<Send className="h-3 w-3" />}
            label="Deploy"
            color="emerald"
            delay={2}
          />
        </div>
      </div>
    </div>
  );
};

// n8n-inspired Workflow Node Component
const WorkflowNode = ({
  icon,
  label,
  color = "sky",
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  color?: string;
  delay?: number;
}) => {
  const colorMap: Record<string, { border: string; glow: string; bg: string }> =
    {
      cyan: {
        border: "rgba(6, 182, 212, 0.3)",
        glow: "rgba(6, 182, 212, 0.4)",
        bg: "rgba(6, 182, 212, 0.1)",
      },
      sky: {
        border: "rgba(56, 189, 248, 0.3)",
        glow: "rgba(56, 189, 248, 0.4)",
        bg: "rgba(56, 189, 248, 0.1)",
      },
      purple: {
        border: "rgba(139, 92, 246, 0.3)",
        glow: "rgba(139, 92, 246, 0.4)",
        bg: "rgba(139, 92, 246, 0.1)",
      },
      blue: {
        border: "rgba(59, 130, 246, 0.3)",
        glow: "rgba(59, 130, 246, 0.4)",
        bg: "rgba(59, 130, 246, 0.1)",
      },
      emerald: {
        border: "rgba(16, 185, 129, 0.3)",
        glow: "rgba(16, 185, 129, 0.4)",
        bg: "rgba(16, 185, 129, 0.1)",
      },
    };

  const colors = colorMap[color] || colorMap.sky;

  return (
    <div className="flex flex-col items-center gap-1">
      <motion.div
        className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 shadow-lg"
        style={{
          border: `1px solid ${colors.border}`,
        }}
        animate={{
          boxShadow: [
            `0 0 0px ${colors.glow}`,
            `0 0 12px ${colors.glow}`,
            `0 0 0px ${colors.glow}`,
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay,
          ease: "easeInOut" as const,
        }}
      >
        {/* Inner glow background */}
        <motion.div
          className="absolute inset-0.5 rounded-lg"
          style={{ backgroundColor: colors.bg }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay,
            ease: "easeInOut" as const,
          }}
        />

        {/* Icon */}
        <div className="relative z-10 text-white/90">{icon}</div>
      </motion.div>

      {/* Label */}
      <span className="text-[7px] font-mono font-semibold uppercase tracking-tight text-white/50">
        {label}
      </span>
    </div>
  );
};

const NodeWrapper = ({
  children,
  label,
  delay,
  activeColor = "border-white/10",
}) => (
  <div className="flex flex-col items-center gap-2">
    <motion.div
      animate={{
        borderColor: [
          "rgba(255,255,255,0.1)",
          "rgba(255,255,255,0.4)",
          "rgba(255,255,255,0.1)",
        ],
        scale: [1, 1.05, 1],
      }}
      transition={{ duration: 3, repeat: Infinity, delay }}
      className={`flex h-10 w-10 items-center justify-center rounded-xl border bg-slate-900 shadow-xl ${activeColor}`}
    >
      {children}
    </motion.div>
    <span className="text-[8px] font-mono font-bold uppercase tracking-tighter text-white/40">
      {label}
    </span>
  </div>
);

export default function ServicesSection() {
  const services = [
    {
      id: "01",
      title: "Running Ads",
      description:
        "Strategic ad campaigns across multiple platforms to maximize your reach and conversion rates.",
      colSpan: "col-span-1 md:col-span-2",
      icon: <BarChart3 className="h-5 w-5 text-white" />,
      visual: <AdsAnimation />,
    },
    {
      id: "02",
      title: "SEO Optimization",
      description:
        "Boost your organic ranking and drive sustainable traffic with data-driven SEO strategies.",
      colSpan: "col-span-1 md:col-span-1",
      icon: <Search className="h-5 w-5 text-white" />,
      visual: <SEOAnimation />,
    },
    {
      id: "03",
      title: "Web Development",
      description:
        "Custom, high-performance websites built to convert visitors into loyal customers.",
      colSpan: "col-span-1 md:col-span-1",
      icon: <Code2 className="h-5 w-5 text-white" />,
      visual: <WebDevAnimation />,
    },
    {
      id: "04",
      title: "Customer Feedback",
      description:
        "Analyze customer sentiment and feedback to improve products and services continuously.",
      colSpan: "col-span-1 md:col-span-1",
      icon: <MessageSquareHeart className="h-5 w-5 text-white" />,
      visual: <FeedbackAnimation />,
    },
    {
      id: "05",
      title: "AI Automations",
      description:
        "Streamline operations and enhance efficiency with cutting-edge AI-powered automation solutions.",
      colSpan: "col-span-1 md:col-span-1",
      icon: <BrainCircuit className="h-5 w-5 text-white" />,
      visual: <AIAnimation />,
    },
  ];

  return (
    <section className="w-full bg-zinc-950 py-20 font-(--font-inter)">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex flex-col items-start">
          <div className="mb-4 inline-block rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-3xl">
            Our Services
          </div>
          <h2 className="text-4xl font-bold tracking-wide text-white sm:text-6xl uppercase">
            What we offer
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">
            Explore our array of services, from web development to e-commerce
            solutions, designed to elevate your online presence and drive
            success in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-1 backdrop-blur-sm transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/60 hover:shadow-[0_0_20px_-10px_rgba(255,255,255,0.15)] ${service.colSpan}`}
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-[20px] bg-zinc-950/50 p-6 md:p-8">
                {/* Visual Area */}
                <div className="mb-6 flex h-32 w-full items-center justify-center overflow-hidden rounded-xl border border-zinc-800/50 bg-zinc-900/30">
                  {service.visual}
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/80 text-sm font-bold text-white shadow-inner shadow-white/5 transition-colors group-hover:bg-zinc-700">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Silver Gradient Border Effect on Hover */}
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-br from-transparent via-zinc-700/10 to-transparent pointer-events-none" />

              <Meteors number={15} className="z-0 opacity-40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

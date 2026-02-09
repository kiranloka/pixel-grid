"use client";
import React from "react";
import { AsciiSaturn } from "@/components/ui/ascii-saturn";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full bg-zinc-950 py-20 font-(--font-inter)">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold tracking-wide text-white sm:text-6xl uppercase">
              ABOUT
            </h2>

            <div className="space-y-6 text-lg text-zinc-400">
              <p className="leading-relaxed">
                The Social is a forward-thinking web development company
                dedicated to transforming your digital vision into reality. With
                a focus on creativity and innovation, we specialize in creating
                bespoke websites that captivate audiences and drive results.
              </p>
            </div>

            <motion.button
              whileHover={{ x: 5 }}
              className="group mt-4 flex w-fit items-center gap-2 text-sm font-medium text-white transition-colors hover:text-amber-500"
            >
              More
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-amber-500 group-hover:bg-amber-500/10">
                <ArrowRight className="h-3 w-3" />
              </div>
            </motion.button>
          </div>

          {/* Right Side - ASCII Saturn */}
          <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-3xl  backdrop-blur-sm">
            <div className="absolute inset-0   pointer-events-none z-10" />
            <AsciiSaturn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

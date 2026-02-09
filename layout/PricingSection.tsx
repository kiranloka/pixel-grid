"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const PricingSection = () => {
  return (
    <section className="w-full bg-zinc-950 py-32 font-(--font-inter)">
      <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="inline-block rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-3xl">
            Get Started
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl max-w-2xl leading-tight">
            Ready to Scale Your Brand?
          </h2>

          <p className="max-w-xl text-lg text-zinc-400 leading-relaxed">
            Book a call with us to get a defined growth audit and receive a
            quoted price tailored specifically for your brand&apos;s needs.
          </p>

          <div className="mt-4">
            {/* Replicated Button Style */}
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex justify-center space-x-2 items-center z-10 rounded-full bg-zinc-950 py-3 px-8 ring-1 ring-white/10 transition-colors group-hover:bg-zinc-900">
                <span className="text-base">Book a Call</span>
                <ArrowRight className="h-5 w-5" />
              </div>
              <span className="absolute bottom-0 left-4.5 h-px w-[calc(100%-2.25rem)] bg-linear-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

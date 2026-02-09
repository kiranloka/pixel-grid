import { Check, X } from "lucide-react";
import React from "react";
import { GlareCard } from "@/components/ui/glare-card";

export default function ComparisonSection() {
  return (
    <section className="width-full bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="mb-4 inline-block rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-3xl">
            Comparison
          </div>
          <h2 className="text-4xl font-bold tracking-wide text-white sm:text-5xl">
            But, why would you
            <br />
            want to work{" "}
            <span className="italic font-playfair-display font-normal">
              with us?
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Other Agencies Card */}
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-10">
            <div className="mb-8 flex items-center justify-center">
              <h3 className="text-2xl text-zinc-500 font-medium">
                Other Agencies
              </h3>
            </div>
            <ul className="space-y-6">
              {[
                "Reactive communication",
                "Single channel approach",
                "Copy paste growth strategies",
                "Lack of research on your industry",
                "Outsourced to junior talent",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-500">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-zinc-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Us Card - Glare Effect */}
          <GlareCard className="flex flex-col items-center justify-center w-full aspect-auto">
            <div className="relative flex flex-col items-start w-full h-full p-8 md:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/5 to-transparent opacity-50" />

              <div className="relative mb-8 flex items-center justify-center gap-2 w-full">
                {/* Logo placeholder */}
                <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs">
                  4
                </div>
                <h3 className="text-2xl font-bold text-white">Conversion</h3>
              </div>

              <ul className="relative space-y-6 w-full">
                {[
                  "Constant, proactive communication",
                  "Omni channel approach",
                  "Tailored best-fit solutions",
                  "Provides industry specific expertise",
                  "Experts with 10+ years of experience",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-200">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlareCard>
        </div>
      </div>
    </section>
  );
}

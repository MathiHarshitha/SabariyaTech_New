"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { techGroups, techStack, type TechGroup } from "@/data/site";
import { Curve } from "@/components/ui/Curve";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2, Lead } from "@/components/ui/Typography";
import { cn, EASE } from "@/lib/utils";

const groupDot: Record<TechGroup, string> = {
  Frontend: "bg-brand-cyan",
  "Backend & Data": "bg-brand-blue",
  "Cloud & DevOps": "bg-brand-orange",
};
const groupStroke: Record<TechGroup, string> = {
  Frontend: "#11BDEB",
  "Backend & Data": "#0878E8",
  "Cloud & DevOps": "#FF6A00",
};

// Light mesh between neighbouring tools, by index into techStack.
const MESH: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [3, 5], [1, 4], [4, 6], [5, 7], [7, 8], [8, 9], [9, 10], [6, 10], [2, 4],
];

export function TechStack() {
  const [focus, setFocus] = useState<TechGroup | null>(null);
  const dim = (g: TechGroup) => focus !== null && focus !== g;

  return (
    <section id="tech" aria-labelledby="tech-title" className="bg-navy-section relative overflow-hidden py-32 text-white md:py-[210px]">
      <Curve variant="into-dark-b" position="top" />
      <div className="container-x relative z-[2] grid items-center gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
        <Reveal>
          <Eyebrow light>Technologies we work with</Eyebrow>
          <H2 id="tech-title" light>
            Built with modern
            <br />
            <span className="text-brand-cyan">engineering.</span>
          </H2>
          <Lead light>We use the best tools and technologies to build scalable and future-ready products.</Lead>
          <div role="group" aria-label="Highlight a category" className="mt-8 flex flex-wrap gap-2">
            {techGroups.map((g) => (
              <button
                key={g.name}
                type="button"
                aria-pressed={focus === g.name}
                onClick={() => setFocus(focus === g.name ? null : g.name)}
                onMouseEnter={() => setFocus(g.name)}
                onMouseLeave={() => setFocus(null)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                  focus === g.name ? "bg-white text-navy-900" : "bg-white/[0.06] text-white/80 ring-1 ring-white/10 hover:bg-white/10",
                )}
              >
                <i className={cn("size-2.5 rounded-full", g.dot)} />
                {g.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* desktop ecosystem */}
        <Reveal delay={0.1} className="relative hidden h-[480px] md:block">
          <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
            {MESH.map(([a, b]) => (
              <line
                key={`${a}-${b}`}
                x1={techStack[a].x}
                y1={techStack[a].y}
                x2={techStack[b].x}
                y2={techStack[b].y}
                stroke="rgb(255 255 255 / 0.08)"
                strokeWidth={1}
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {techStack.map((t) => (
              <line
                key={t.name}
                x1={50}
                y1={50}
                x2={t.x}
                y2={t.y}
                stroke={dim(t.group) ? "rgb(17 189 235 / 0.08)" : focus ? groupStroke[t.group] : "rgb(17 189 235 / 0.3)"}
                strokeWidth={focus === t.group ? 1.6 : 1.2}
                strokeDasharray="4 5"
                vectorEffect="non-scaling-stroke"
                className="animate-dash transition-[stroke] duration-500"
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 flex size-[132px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1.5 rounded-full bg-[radial-gradient(circle_at_35%_30%,#173A6C,#0A2247)] shadow-[0_0_0_12px_rgb(8_120_232/0.07),0_0_0_26px_rgb(8_120_232/0.04),0_30px_60px_-20px_rgb(0_0_0/0.7),inset_0_1px_0_rgb(255_255_255/0.12)]">
            <Image src="/brand/logo-mark.png" alt="" width={48} height={48} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">Your product</span>
          </div>

          <ul aria-label="Technology stack">
            {techStack.map((t, i) => (
              <motion.li
                key={t.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: dim(t.group) ? 0.35 : 1, scale: focus === t.group ? 1.06 : 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, ease: EASE, delay: focus ? 0 : i * 0.04 }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${t.x}%`, top: `${t.y}%` }}
              >
                <span
                  className="neu-dark relative flex animate-float items-center gap-2.5 whitespace-nowrap rounded-[18px] py-2 pl-2 pr-4 font-display text-sm font-semibold text-[#EAF2FF]"
                  style={{ animationDelay: `${-(i % 4) * 1.6}s` }}
                >
                  <span className="grid size-[34px] place-items-center rounded-[11px] bg-white/95 p-1.5">
                    <Image src={t.icon} alt="" width={22} height={22} className="size-[22px] object-contain" />
                  </span>
                  {t.name}
                  <i aria-hidden className={cn("absolute right-2 top-2 size-1.5 rounded-full", groupDot[t.group])} />
                </span>
              </motion.li>
            ))}
          </ul>
        </Reveal>

        {/* mobile: horizontal scroll */}
        <ul aria-label="Technology stack" className="no-scrollbar -mx-[clamp(16px,4vw,48px)] flex snap-x gap-3 overflow-x-auto px-[clamp(16px,4vw,48px)] pb-4 md:hidden">
          {techStack.map((t) => (
            <li
              key={t.name}
              className={cn(
                "neu-dark relative flex shrink-0 snap-start items-center gap-2.5 rounded-[18px] py-2 pl-2 pr-4 font-display text-sm font-semibold text-[#EAF2FF] transition-opacity",
                dim(t.group) && "opacity-35",
              )}
            >
              <span className="grid size-[34px] place-items-center rounded-[11px] bg-white/95 p-1.5">
                <Image src={t.icon} alt="" width={22} height={22} className="size-[22px] object-contain" />
              </span>
              {t.name}
              <i aria-hidden className={cn("absolute right-2 top-2 size-1.5 rounded-full", groupDot[t.group])} />
            </li>
          ))}
        </ul>
      </div>
      <Curve variant="out-of-dark-b" position="bottom" lineClass="stroke-transparent" />
    </section>
  );
}

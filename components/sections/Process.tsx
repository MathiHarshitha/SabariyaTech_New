"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { processSteps } from "@/data/site";
import { accents } from "@/lib/accents";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2, Lead } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

// Path points line up with the step positions below (viewBox 1200 × 320).
const PATH =
  "M0 250 C 40 240 60 236 72 236 C 200 232 230 120 336 120 C 460 120 470 236 600 236 C 730 236 750 136 864 136 C 980 136 1040 60 1128 64 C 1160 66 1185 60 1200 50";
const POS = [
  { x: 6, y: 73.75, up: false },
  { x: 28, y: 37.5, up: true },
  { x: 50, y: 73.75, up: false },
  { x: 72, y: 42.5, up: true },
  { x: 94, y: 20, up: true },
];
const THRESHOLDS = [0.04, 0.27, 0.5, 0.73, 0.94];

export function Process() {
  const flowRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const [reached, setReached] = useState(0);
  const [reachedMobile, setReachedMobile] = useState(0);

  const { scrollYProgress } = useScroll({ target: flowRef, offset: ["start 85%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  useMotionValueEvent(progress, "change", (v) => setReached(THRESHOLDS.filter((t) => v >= t).length));

  const { scrollYProgress: mobileProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const mobileLine = useSpring(mobileProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  useMotionValueEvent(mobileLine, "change", (v) => setReachedMobile(Math.ceil(v * processSteps.length + 0.15)));

  return (
    <section id="process" aria-labelledby="process-title" className="relative isolate overflow-hidden pb-32 pt-20 md:pb-52 md:pt-28">
      <SectionBackdrop variant="mist" />

      <div className="container-x">
        <Reveal className="max-w-[560px]">
          <Eyebrow>Our process</Eyebrow>
          <H2 id="process-title">
            A clear path
            <br />
            from <span className="text-brand-orange">idea</span> to <span className="text-brand-blue">impact.</span>
          </H2>
          <Lead>We follow a simple and collaborative process to turn your ideas into successful digital products.</Lead>
          <Button href="#contact" className="mt-8">
            Let&apos;s Work Together
          </Button>
        </Reveal>

        {/* ---------- desktop: steps sit on a flowing line ---------- */}
        <div ref={flowRef} className="relative mb-[110px] mt-[140px] hidden h-[320px] md:block">
          <svg aria-hidden viewBox="0 0 1200 320" preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible">
            <defs>
              <linearGradient id="process-grad" x1="0" x2="1">
                <stop offset="0" stopColor="#11BDEB" />
                <stop offset=".5" stopColor="#0878E8" />
                <stop offset="1" stopColor="#FF6A00" />
              </linearGradient>
            </defs>
            <path d={PATH} fill="none" stroke="rgb(16 33 61 / 0.07)" strokeWidth={14} strokeLinecap="round" />
            <motion.path d={PATH} fill="none" stroke="url(#process-grad)" strokeWidth={3.5} strokeLinecap="round" style={{ pathLength: progress }} />
          </svg>
          <ol className="absolute inset-0">
            {processSteps.map((s, i) => {
              const on = reached > i;
              return (
                <li key={s.n} className="absolute size-0" style={{ left: `${POS[i].x}%`, top: `${POS[i].y}%` }}>
                  <motion.span
                    animate={{ scale: on ? 1 : 0.7, opacity: on ? 1 : 0.45 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={cn(
                      "absolute left-0 top-0 grid size-[68px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white",
                      accents[s.accent].text,
                    )}
                    style={{
                      boxShadow: on
                        ? `0 0 0 8px ${accents[s.accent].glow}, 0 18px 30px -12px ${accents[s.accent].glow}, inset 0 -4px 8px rgb(16 33 61 / 0.05)`
                        : "0 0 0 8px rgb(16 33 61 / 0.04), inset 0 -4px 8px rgb(16 33 61 / 0.05)",
                    }}
                  >
                    <s.icon aria-hidden className="size-[26px]" />
                  </motion.span>
                  <motion.div
                    animate={{ opacity: on ? 1 : 0.35, y: on ? 0 : 6 }}
                    transition={{ duration: 0.5 }}
                    className={cn("absolute left-0 w-[190px] -translate-x-1/2 text-center", POS[i].up ? "bottom-[54px]" : "top-[54px]")}
                  >
                    <em className="block font-display text-[13px] font-bold not-italic text-brand-orange">{s.n}</em>
                    <b className="block font-display text-lg font-bold uppercase tracking-[-0.02em] text-navy-900">{s.title}</b>
                    <span className="mt-0.5 block text-[13.5px] leading-snug text-muted">{s.body}</span>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ---------- mobile: vertical flowing timeline ---------- */}
        <ol ref={listRef} className="relative mt-14 flex flex-col gap-9 pl-2 md:hidden">
          <span aria-hidden className="absolute bottom-6 left-[41px] top-6 w-[3px] rounded-full bg-ink/[0.07]" />
          <motion.span
            aria-hidden
            style={{ scaleY: mobileLine }}
            className="absolute bottom-6 left-[41px] top-6 w-[3px] origin-top rounded-full bg-gradient-to-b from-brand-orange via-brand-blue to-brand-cyan"
          />
          {processSteps.map((s, i) => {
            const on = reachedMobile > i;
            return (
              <li key={s.n} className="relative flex items-center gap-5">
                <motion.span
                  animate={{ scale: on ? 1 : 0.8 }}
                  className={cn("relative grid size-[66px] shrink-0 place-items-center rounded-full bg-white shadow-soft", accents[s.accent].text)}
                  style={{ boxShadow: on ? `0 0 0 7px ${accents[s.accent].glow}` : undefined }}
                >
                  <s.icon aria-hidden className="size-6" />
                </motion.span>
                <div>
                  <em className="block font-display text-[13px] font-bold not-italic text-brand-orange">{s.n}</em>
                  <b className="block font-display text-lg font-bold uppercase tracking-[-0.02em] text-navy-900">{s.title}</b>
                  <span className="block text-[14px] leading-snug text-muted">{s.body}</span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

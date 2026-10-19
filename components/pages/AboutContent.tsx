"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Anchor,
  ArrowRight,
  CodeXml,
  HeartHandshake,
  ShieldCheck,
  Waves,
  Lightbulb,
  Layers,
} from "lucide-react";
import { about, aboutValues, team } from "@/data/pages";
import { accents } from "@/lib/accents";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2, Lead } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { useRef } from "react";

/* ─────────────────────────────────────────────
   1. WHAT WE STAND FOR
   ───────────────────────────────────────────── */
export function StandFor() {
  return (
    <section
      aria-labelledby="stand-for-title"
      className="relative isolate overflow-hidden bg-navy-950 py-28 text-white md:py-40"
    >
      {/* Brand glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgb(8 120 232 / 0.6), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgb(255 106 0 / 0.55), transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_30%,transparent_80%)]"
      />

      <div className="container-x relative z-10">
        {/* Bold headline */}
        <Reveal className="max-w-[820px]">
          <Eyebrow light>What we stand for</Eyebrow>
          <h2
            id="stand-for-title"
            className="text-[clamp(42px,6vw,80px)] font-extrabold leading-[1.0] tracking-[-0.045em] text-white"
          >
            Engineering that{" "}
            <span className="text-gradient-flow">outlasts the launch.</span>
          </h2>
          <p className="mt-7 max-w-[560px] text-[17px] leading-relaxed text-white/65 md:text-[19px]">
            We don&apos;t ship features and disappear. We build systems designed
            to carry real load, grow with your business, and stay reliable long
            after the first deployment.
          </p>
        </Reveal>

        {/* Philosophy pillars */}
        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((v, i) => (
            <li key={v.title} className={cn(i % 2 === 1 && "lg:translate-y-8")}>
              <Reveal delay={i * 0.09} className="h-full">
                <article className="neu-dark flex h-full flex-col rounded-[28px] p-7">
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-2xl bg-gradient-to-br",
                      accents[v.accent].badge
                    )}
                  >
                    <v.icon aria-hidden className="size-6" />
                  </span>
                  <h3 className="mt-6 text-[18px] font-semibold text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-white/60">
                    {v.body}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Engineering philosophy statement */}
        <Reveal delay={0.2} className="mt-20">
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.03] p-8 sm:p-12 lg:p-14">
            <span
              aria-hidden
              className="absolute right-8 top-8 font-display text-[120px] font-extrabold leading-none tracking-[-0.06em] text-white/[0.03] select-none"
            >
              ST
            </span>
            <div className="relative grid gap-8 lg:grid-cols-[1fr_1px_1fr_1px_1fr]">
              {[
                {
                  icon: CodeXml,
                  label: "Clean architecture",
                  body: "Every system is designed for the next engineer, not just the deadline.",
                  accent: "blue" as const,
                },
                {
                  icon: ShieldCheck,
                  label: "Security by default",
                  body: "Security is not a feature we add later — it is the foundation we build on.",
                  accent: "orange" as const,
                },
                {
                  icon: HeartHandshake,
                  label: "Long-term partnership",
                  body: "We measure success by how well your system performs a year after launch.",
                  accent: "cyan" as const,
                },
              ].map((p, i) => (
                <>
                  {i > 0 && (
                    <div
                      key={`div-${i}`}
                      aria-hidden
                      className="hidden w-px self-stretch bg-white/[0.08] lg:block"
                    />
                  )}
                  <div key={p.label} className="flex flex-col gap-4">
                    <IconBadge icon={p.icon} accent={p.accent} size="sm" />
                    <h3 className="text-[16px] font-semibold text-white">
                      {p.label}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-white/55">
                      {p.body}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   2. WHY WE EXIST — river-to-digital-pathways
   ───────────────────────────────────────────── */
export function WhyWeExist() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const pathLength = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);

  return (
    <section
      ref={ref}
      aria-labelledby="why-title"
      className="relative overflow-hidden bg-canvas py-28 md:py-40"
    >
      <div className="container-x">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          {/* Left — sticky text */}
          <Reveal className="lg:sticky lg:top-32">
            <Eyebrow>Why we exist</Eyebrow>
            <H2 id="why-title">
              The story behind
              <br />
              <span className="text-brand-blue">SabariyaTech.</span>
            </H2>
            <Lead className="mt-6">{about.story}</Lead>
            <p className="mt-8 text-[15px] leading-relaxed text-muted">
              The Sabari River flows through the Eastern Ghats — steady,
              purposeful, unhurried. It does not rush to prove itself. It simply
              keeps moving. That is the engineering culture we are building at
              SabariyaTech: calm under pressure, consistent in delivery,
              dependable over time.
            </p>

          </Reveal>

          {/* Right — river SVG path + story beats */}
          <div className="relative flex flex-col gap-0">
            {/* Animated river path */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-[22px] top-0 h-full w-10"
            >
              <svg
                viewBox="0 0 40 800"
                preserveAspectRatio="none"
                className="h-full w-full"
                aria-hidden
              >
                <defs>
                  <linearGradient
                    id="river-grad"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#11BDEB" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#0878E8" stopOpacity="0.8" />
                    <stop
                      offset="100%"
                      stopColor="#FF6A00"
                      stopOpacity="0.6"
                    />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M20 0 C 28 80, 12 160, 20 240 C 28 320, 12 400, 20 480 C 28 560, 12 640, 20 800"
                  fill="none"
                  stroke="url(#river-grad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ pathLength, opacity: pathOpacity }}
                />
              </svg>
            </div>

            {/* Story beats */}
            {[
              {
                label: "The name",
                heading: "Sabariya — from Sabari",
                body: "The name Sabariya is a direct tribute to the Sabari River. A river that has flowed through the landscape for centuries, carving its path with quiet determination.",
                accent: "cyan" as const,
                icon: Waves,
              },
              {
                label: "The philosophy",
                heading: "Steady, not rushed",
                body: "Rivers do not sprint. They find the most efficient path and follow it with consistency. That is how we approach every project — no shortcuts, no over-engineering, just the right solution built well.",
                accent: "blue" as const,
                icon: Anchor,
              },
              {
                label: "The mission",
                heading: "Digital pathways",
                body: about.mission,
                accent: "orange" as const,
                icon: Layers,
              },
              {
                label: "The vision",
                heading: "Where we are going",
                body: about.vision,
                accent: "blue" as const,
                icon: Lightbulb,
              },
            ].map((beat, i) => (
              <Reveal key={beat.label} delay={i * 0.1}>
                <article className="relative ml-16 mb-8 rounded-[24px] bg-white p-7 shadow-soft">
                  <div className="flex items-start gap-4">
                    <IconBadge icon={beat.icon} accent={beat.accent} size="sm" />
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                        {beat.label}
                      </p>
                      <h3 className="mt-1 text-[18px] font-bold leading-snug tracking-[-0.02em] text-navy-900">
                        {beat.heading}
                      </h3>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                        {beat.body}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FounderTeam() {
  return null;
}

/* ─────────────────────────────────────────────
   4. WHAT'S NEXT — CTA
   ───────────────────────────────────────────── */
export function WhatsNext() {
  return (
    <section
      aria-labelledby="whats-next-title"
      className="relative overflow-hidden bg-canvas py-28 md:py-40"
    >
      {/* Subtle river-wave decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />

      <div className="container-x">
        <div className="relative overflow-hidden rounded-[36px] bg-navy-950 px-8 py-16 text-white shadow-[0_60px_120px_-40px_rgb(7_26_53/0.7)] sm:px-12 md:px-16 md:py-20">
          {/* Background glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-[400px] w-[400px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgb(8 120 232 / 0.7), transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, rgb(255 106 0 / 0.6), transparent 65%)",
            }}
          />

          {/* River wave SVG */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-10"
          >
            <svg
              viewBox="0 0 1440 96"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                d="M0 48 C 180 16, 360 80, 540 48 C 720 16, 900 80, 1080 48 C 1260 16, 1380 64, 1440 48 L1440 96 L0 96 Z"
                fill="url(#wave-grad)"
              />
              <defs>
                <linearGradient id="wave-grad" x1="0" x2="1">
                  <stop offset="0%" stopColor="#11BDEB" />
                  <stop offset="100%" stopColor="#0878E8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[600px]">
              <Reveal>
                <Eyebrow light>What&apos;s next</Eyebrow>
                <h2
                  id="whats-next-title"
                  className="text-[clamp(32px,4.5vw,58px)] font-extrabold leading-[1.04] tracking-[-0.04em] text-white"
                >
                  Have a problem{" "}
                  <span className="text-gradient-flow">worth solving?</span>
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-white/65 md:text-[18px]">
                  Let&apos;s engineer the solution — from architecture to
                  deployment, we build systems that hold up under real-world
                  conditions.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-7 flex flex-wrap gap-3">
                  {[
                    "Web platforms",
                    "AI systems",
                    "Business software",
                    "Cloud infrastructure",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[13px] font-medium text-white/75"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href="/contact" size="lg">
                Start a project
              </Button>
              <Button href="/projects" size="lg" variant="glass">
                See our work
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Legacy exports — kept so existing imports
   in other files don't break
   ───────────────────────────────────────────── */
export function RiverCard() {
  return (
    <div className="relative">
      <div className="relative aspect-[5/4] overflow-hidden rounded-[36px_120px_36px_36px] bg-gradient-to-br from-[#2a4a7a] to-[#f39b4a] shadow-[0_50px_100px_-40px_rgb(7_26_53/0.6)]">
        <Image
          src="/images/process-mist.jpg"
          alt="Mist rolling over a river valley"
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_26_53/0.05)_30%,rgb(7_26_53/0.6))]"
        />
        <p className="absolute left-6 top-6 max-w-[220px] font-script text-[26px] leading-[1.05] text-white [text-shadow:0_2px_18px_rgb(7_26_53/0.45)]">
          Inspired by the Sabari River
        </p>
      </div>
    </div>
  );
}

export function Story() {
  return null;
}
export function Values() {
  return null;
}
export function TeamStrip() {
  return null;
}

"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { Check, Play, Send, Sparkles } from "lucide-react";
import { heroCapabilities, heroStats, site } from "@/data/site";
import { accents } from "@/lib/accents";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { cn, EASE } from "@/lib/utils";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});

const slug = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, "-").replace(/-$/, "");

/* ---------------------------------------------------------
   Console scenes — decorative mockups, one per capability
   --------------------------------------------------------- */
const scene: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

function Bar({ className }: { className?: string }) {
  return <span className={cn("block h-1.5 rounded-full bg-white/15", className)} />;
}

function WebScene() {
  return (
    <motion.div variants={scene} initial="hidden" animate="show" exit="exit" className="flex h-full flex-col gap-3">
      <motion.div variants={item} className="flex items-center justify-between rounded-xl bg-white/[0.06] px-3.5 py-2.5">
        <span className="h-2 w-16 rounded-full bg-white/50" />
        <span className="hidden gap-3 sm:flex">
          {[0, 1, 2, 3].map((i) => (
            <Bar key={i} className="w-9" />
          ))}
        </span>
        <span className="h-6 w-16 rounded-lg bg-brand-orange" />
      </motion.div>
      <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-[1.25fr_1fr]">
        <motion.div
          variants={item}
          className="flex flex-col justify-center gap-2.5 rounded-2xl bg-[linear-gradient(140deg,rgb(8_120_232/0.45),rgb(17_189_235/0.12))] p-5"
        >
          <span className="h-3.5 w-4/5 rounded-full bg-white/85" />
          <span className="h-3.5 w-3/5 rounded-full bg-white/60" />
          <Bar className="mt-2 w-full" />
          <Bar className="w-5/6" />
          <span className="mt-3 flex gap-2">
            <span className="h-7 w-20 rounded-lg bg-white" />
            <span className="h-7 w-16 rounded-lg border border-white/30" />
          </span>
        </motion.div>
        <div className="hidden grid-rows-[1fr_auto] gap-3 sm:grid">
          <motion.div variants={item} className="flex items-end gap-1.5 rounded-2xl bg-white/[0.06] p-4">
            {[38, 56, 44, 70, 62, 84, 92].map((h, i) => (
              <motion.span
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.25 + i * 0.05 }}
                style={{ height: `${h}%` }}
                className="flex-1 origin-bottom rounded-md bg-gradient-to-t from-brand-blue to-brand-cyan"
              />
            ))}
          </motion.div>
          <motion.div variants={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-3.5">
            <span className="grid size-10 place-items-center rounded-full border-[3px] border-emerald-400 font-display text-[11px] font-bold text-white">
              A+
            </span>
            <span className="text-[11.5px] leading-tight text-white/60">
              <b className="block font-display text-[13px] text-white">Core Web Vitals</b>
              Fast on every device
            </span>
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <motion.div key={i} variants={item} className="space-y-2 rounded-xl bg-white/[0.05] p-3">
            <span className="block size-5 rounded-md bg-white/20" />
            <Bar className="w-4/5" />
            <Bar className="w-3/5 bg-white/10" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function AiScene() {
  const flow = ["New enquiry", "AI agent", "CRM", "Team alert"];
  return (
    <motion.div variants={scene} initial="hidden" animate="show" exit="exit" className="flex h-full flex-col gap-3 text-[12.5px]">
      <motion.p variants={item} className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-brand-orange px-3.5 py-2.5 leading-snug text-white">
        Summarise this week&apos;s enquiries and assign follow-ups.
      </motion.p>
      <motion.div variants={item} className="flex max-w-[88%] gap-2.5">
        <span className="grid size-8 shrink-0 place-items-center rounded-[10px] bg-gradient-to-br from-brand-amber to-brand-orange">
          <Sparkles aria-hidden className="size-4 text-white" />
        </span>
        <div className="space-y-2 rounded-2xl rounded-tl-md bg-white/[0.07] px-3.5 py-3 leading-snug text-white/80">
          <p>Done. Enquiries are grouped by priority and each one has an owner.</p>
          {["Leads scored and tagged", "Follow-ups added to the CRM", "Summary sent to the team"].map((t) => (
            <p key={t} className="flex items-center gap-2 text-white/70">
              <Check aria-hidden className="size-3.5 text-emerald-400" /> {t}
            </p>
          ))}
        </div>
      </motion.div>
      <motion.div variants={item} className="mt-auto rounded-2xl border border-white/10 bg-white/[0.04] p-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {flow.map((f, i) => (
            <span key={f} className="flex items-center gap-1.5">
              <span
                className={cn(
                  "rounded-lg px-2.5 py-1.5 font-display text-[11px] font-semibold",
                  i === 1 ? "bg-brand-orange text-white" : "bg-white/10 text-white/80",
                )}
              >
                {f}
              </span>
              {i < flow.length - 1 && <span aria-hidden className="h-px w-4 bg-gradient-to-r from-white/40 to-white/10" />}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.div variants={item} className="flex items-center gap-2 rounded-xl bg-white/[0.06] py-1.5 pl-3.5 pr-1.5 text-white/40">
        Ask your workflow anything…
        <span className="ml-auto grid size-8 place-items-center rounded-lg bg-white text-navy-900">
          <Send aria-hidden className="size-3.5" />
        </span>
      </motion.div>
    </motion.div>
  );
}

function SystemsScene() {
  const kpis = [
    { k: "Orders", v: "1,284", c: "text-brand-cyan" },
    { k: "Invoices", v: "312", c: "text-brand-amber" },
    { k: "In stock", v: "96%", c: "text-emerald-400" },
  ];
  const rows = [
    { name: "Purchase order #4821", tag: "Approved", tone: "bg-emerald-400/15 text-emerald-300" },
    { name: "Fee collection — Term 2", tag: "In progress", tone: "bg-brand-amber/15 text-brand-amber" },
    { name: "Staff attendance sync", tag: "Synced", tone: "bg-brand-cyan/15 text-brand-cyan" },
    { name: "Vendor invoice #1093", tag: "Review", tone: "bg-white/10 text-white/70" },
  ];
  return (
    <motion.div variants={scene} initial="hidden" animate="show" exit="exit" className="flex h-full flex-col gap-3">
      <div className="grid grid-cols-3 gap-3">
        {kpis.map((k) => (
          <motion.div key={k.k} variants={item} className="rounded-xl bg-white/[0.06] p-3">
            <small className="text-[11px] text-white/50">{k.k}</small>
            <b className={cn("block font-display text-lg leading-tight sm:text-xl", k.c)}>{k.v}</b>
          </motion.div>
        ))}
      </div>
      <motion.ul variants={item} className="flex-1 divide-y divide-white/[0.07] overflow-hidden rounded-2xl bg-white/[0.04]">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center gap-3 px-3.5 py-2.5 text-[12.5px]">
            <span className="size-7 shrink-0 rounded-lg bg-white/10" />
            <span className="min-w-0 flex-1 truncate text-white/85">{r.name}</span>
            <span className={cn("shrink-0 rounded-full px-2.5 py-1 text-[10.5px] font-semibold", r.tone)}>{r.tag}</span>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

function CloudScene() {
  const services = ["web-app", "api-gateway", "postgres", "worker-queue"];
  return (
    <motion.div variants={scene} initial="hidden" animate="show" exit="exit" className="flex h-full flex-col gap-3">
      <motion.div variants={item} className="relative h-24 overflow-hidden rounded-2xl bg-white/[0.05] sm:h-28">
        <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
          <defs>
            <linearGradient id="cloud-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#34D399" stopOpacity="0.35" />
              <stop offset="1" stopColor="#34D399" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 70 C 30 62, 50 74, 80 58 S 130 40, 160 48 S 220 26, 250 32 S 290 20, 300 22 V100 H0Z" fill="url(#cloud-fill)" />
          <motion.path
            d="M0 70 C 30 62, 50 74, 80 58 S 130 40, 160 48 S 220 26, 250 32 S 290 20, 300 22"
            fill="none"
            stroke="#34D399"
            strokeWidth={2}
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
          />
        </svg>
        <span className="absolute left-3.5 top-3 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
          Traffic · auto-scaling
        </span>
      </motion.div>
      <motion.ul variants={item} className="grid flex-1 content-start gap-2">
        {services.map((s, i) => (
          <li key={s} className="flex items-center gap-3 rounded-xl bg-white/[0.05] px-3.5 py-2.5 font-mono text-[12px] text-white/80">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" style={{ animationDelay: `${i * 0.4}s` }} />
              <span className="relative size-2 rounded-full bg-emerald-400" />
            </span>
            {s}
            <span aria-hidden className="ml-auto hidden gap-[3px] sm:flex">
              {Array.from({ length: 18 }, (_, j) => (
                <span key={j} className={cn("h-4 w-[3px] rounded-full", j === 11 && i === 2 ? "bg-brand-amber" : "bg-emerald-400/70")} />
              ))}
            </span>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

const scenes: Record<string, () => React.JSX.Element> = {
  "Web Platforms": WebScene,
  "AI & Automation": AiScene,
  "Business Systems": SystemsScene,
  "Cloud & Infrastructure": CloudScene,
};

/* ---------------------------------------------------------
   Hero
   --------------------------------------------------------- */
export function Hero() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [hovering, setHovering] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 20 });
  const sy = useSpring(my, { stiffness: 70, damping: 20 });
  const rotateY = useTransform(sx, (v) => v * 6);
  const rotateX = useTransform(sy, (v) => v * -5);

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const select = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  const onTabKey = (e: React.KeyboardEvent) => {
    const dir = ["ArrowDown", "ArrowRight"].includes(e.key) ? 1 : ["ArrowUp", "ArrowLeft"].includes(e.key) ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + heroCapabilities.length) % heroCapabilities.length;
    select(next);
    tabRefs.current[next]?.focus();
  };

  const current = heroCapabilities[active];
  const Scene = scenes[current.title] ?? WebScene;
  const cycling = auto && !reduce;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pb-12 pt-[112px] lg:pb-[150px] lg:pt-[clamp(100px,15svh,148px)]"
    >
      {/* ---------- backdrop: dot grid + brand glows ---------- */}
      <SectionBackdrop variant="aurora">
        <div className="absolute inset-0 bg-[radial-gradient(rgb(16_33_61/0.1)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_30%,transparent_80%)]" />
      </SectionBackdrop>

      {/* ---------- copy ---------- */}
      <div className="container-x relative text-center">
        <motion.p
          {...rise(0.05)}
          className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-white bg-white/70 py-1.5 pl-1.5 pr-4 font-display text-[11.5px] font-semibold uppercase tracking-[0.22em] text-navy-900 shadow-soft backdrop-blur"
        >
          <span className="rounded-full bg-navy-900 px-2.5 py-1 text-[10px] tracking-[0.16em] text-white">Studio</span>
          Ideas <span className="-ml-1.5 text-brand-orange">flow.</span> Solutions <span className="-ml-1.5 text-brand-blue">grow.</span>
        </motion.p>

        <motion.h1
          id="hero-title"
          {...rise(0.15)}
          className="mx-auto mt-[clamp(16px,3svh,28px)] max-w-[1100px] text-[clamp(42px,11vw,58px)] font-extrabold leading-[1.02] tracking-[-0.045em] md:text-[clamp(44px,min(6.4vw,11.5svh),96px)]"
        >
          Turning ideas into <br className="hidden md:inline" />
          <span className="relative inline-block whitespace-nowrap">
            <span className="text-gradient-warm">impactful</span>
            <svg aria-hidden viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute -bottom-[0.12em] left-[2%] h-[0.22em] w-[96%]">
              <defs>
                <linearGradient id="hero-swoosh" x1="0" x2="1">
                  <stop offset="0" stopColor="#FF9D18" />
                  <stop offset="0.6" stopColor="#FF6A00" />
                  <stop offset="1" stopColor="#11BDEB" />
                </linearGradient>
              </defs>
              <motion.path
                d="M4 18 C 70 6, 170 2, 296 10"
                fill="none"
                stroke="url(#hero-swoosh)"
                strokeWidth={6}
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.8 }}
              />
            </svg>
          </span>{" "}
          <span className="text-gradient-ink">technology.</span>
        </motion.h1>

        <motion.p {...rise(0.28)} className="mx-auto mt-[clamp(16px,3svh,28px)] max-w-[640px] text-[17px] text-muted md:text-[18px]">
          {site.description}
        </motion.p>

        <motion.div {...rise(0.38)} className="mt-[clamp(20px,4svh,36px)] flex justify-center">
          <div className="relative flex flex-col gap-3.5 sm:flex-row">
            <Button href="#contact" size="lg">
              Start a Project
            </Button>
            <Button
              href="#work"
              size="lg"
              variant="soft"
              leading={
                <span className="grid size-9 place-items-center rounded-full bg-navy-900 text-white">
                  <Play aria-hidden className="ml-0.5 size-3 fill-current" />
                </span>
              }
            >
              Explore Our Work
            </Button>

            {/* handwritten note, pinned beside the buttons */}
            <motion.p
              aria-hidden
              initial={{ opacity: 0, x: 12, rotate: -4 }}
              animate={{ opacity: 1, x: 0, rotate: -4 }}
              transition={{ duration: 0.9, ease: EASE, delay: 1 }}
              className="absolute left-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 items-center gap-1.5 whitespace-nowrap text-left font-script text-[24px] leading-[1.05] text-navy-900/70 lg:flex"
            >
              <svg viewBox="0 0 60 44" className="h-10 w-12 shrink-0 text-brand-orange">
                <path d="M56 8 C 46 30, 26 36, 6 30 M6 30 l10 -8 M6 30 l11 5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>
                Technology in motion,
                <br />
                for a better tomorrow
              </span>
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* ---------- build console ---------- */}
      <div className="container-x mt-14 lg:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.45 }}
          onPointerMove={onPointerMove}
          onPointerEnter={() => setHovering(true)}
          onPointerLeave={() => {
            setHovering(false);
            mx.set(0);
            my.set(0);
          }}
          className="relative overflow-hidden rounded-[28px] bg-navy-section p-3 shadow-[0_50px_100px_-40px_rgb(7_26_53/0.6)] sm:p-4 lg:rounded-[36px] lg:p-5"
        >
          <Image
            src="/images/hero-mountains.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1336px) 1240px, 100vw"
            className="object-cover object-[60%_40%] opacity-[0.16] mix-blend-luminosity"
          />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="relative grid gap-3 lg:grid-cols-[minmax(260px,320px)_1fr] lg:gap-5">
            {/* capability tabs */}
            <div className="flex flex-col">
              <p className="hidden px-3 pb-3 pt-2 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 lg:block">
                What we build
              </p>
              <div
                role="tablist"
                aria-label="What we build"
                aria-orientation="vertical"
                onKeyDown={onTabKey}
                className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
              >
                {heroCapabilities.map((c, i) => {
                  const on = i === active;
                  return (
                    <button
                      key={c.title}
                      ref={(el) => {
                        tabRefs.current[i] = el;
                      }}
                      type="button"
                      role="tab"
                      id={`hero-tab-${i}`}
                      aria-selected={on}
                      aria-controls="hero-panel"
                      tabIndex={on ? 0 : -1}
                      onClick={() => select(i)}
                      className={cn(
                        "group relative flex shrink-0 items-center gap-3 overflow-hidden rounded-[18px] p-2.5 pr-4 text-left transition-colors duration-300 lg:p-3",
                        on ? "bg-white text-navy-900" : "text-white hover:bg-white/[0.07]",
                      )}
                    >
                      <span
                        className={cn(
                          "grid size-10 shrink-0 place-items-center rounded-xl transition-colors duration-300",
                          on ? cn("bg-gradient-to-br text-white", accents[c.accent].badge) : "bg-white/10 text-white/80",
                        )}
                      >
                        <c.icon aria-hidden className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <b className="block whitespace-nowrap font-display text-sm font-semibold">{c.title}</b>
                        <small className={cn("hidden text-xs lg:block", on ? "text-muted" : "text-white/50")}>{c.caption}</small>
                      </span>
                      <span className={cn("ml-auto hidden font-display text-xs font-semibold lg:block", on ? "text-brand-orange" : "text-white/30")}>
                        0{i + 1}
                      </span>
                      {on && cycling && (
                        <span
                          aria-hidden
                          key={active}
                          onAnimationEnd={() => setActive((a) => (a + 1) % heroCapabilities.length)}
                          style={{ animationPlayState: hovering ? "paused" : "running" }}
                          className="absolute inset-x-3 bottom-0 h-[3px] origin-left animate-progress rounded-full bg-gradient-to-r from-brand-orange to-brand-cyan"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* stats */}
              <dl className="mt-3 grid grid-cols-3 gap-2 lg:mt-auto lg:gap-0 lg:border-t lg:border-white/10 lg:pt-4">
                {heroStats.map((s, i) => (
                  <div key={s.label} className={cn("rounded-2xl bg-white/[0.05] p-3 lg:rounded-none lg:bg-transparent lg:px-3 lg:py-1", i > 0 && "lg:border-l lg:border-white/10")}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-2xl font-bold leading-tight tracking-[-0.03em] text-white">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </dd>
                    <dd aria-hidden className="text-[11.5px] leading-tight text-white/55">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* console window */}
            <motion.div style={{ rotateX, rotateY, transformPerspective: 1600 }} className="relative">
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] border border-white/10 bg-navy-950/60 shadow-[inset_0_1px_0_rgb(255_255_255/0.06)] backdrop-blur-md lg:rounded-[26px]">
                <div className="flex items-center gap-3 border-b border-white/[0.07] px-4 py-3">
                  <span aria-hidden className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-brand-orange/80" />
                    <span className="size-2.5 rounded-full bg-brand-amber/80" />
                    <span className="size-2.5 rounded-full bg-emerald-400/80" />
                  </span>
                  <span className="min-w-0 truncate rounded-lg bg-white/[0.06] px-3 py-1 font-mono text-[11.5px] text-white/60">
                    ~/sabariyatech/<span className="text-white">{slug(current.title)}</span>
                  </span>
                  <span className="ml-auto flex shrink-0 items-center gap-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300">
                    <span className="size-1.5 rounded-full bg-emerald-400" /> Live
                  </span>
                </div>
                <div
                  id="hero-panel"
                  role="tabpanel"
                  aria-labelledby={`hero-tab-${active}`}
                  className="relative h-[330px] p-4 sm:h-[360px] lg:h-[400px] lg:p-5"
                >
                  <AnimatePresence mode="wait">
                    <Scene key={current.title} />
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

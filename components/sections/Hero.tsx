"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { heroCapabilities, heroStats, site } from "@/data/site";
import { accents } from "@/lib/accents";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { cn, EASE } from "@/lib/utils";

const FLOW = "M120 820 C 260 700, 520 760, 520 640 C 520 540, 300 560, 320 470 C 340 380, 600 420, 680 330 C 740 260, 700 200, 760 150";
const FLOW_2 = "M150 820 C 290 712, 548 770, 546 642 C 544 548, 330 566, 348 476 C 366 392, 620 430, 700 338 C 760 266, 722 206, 786 156";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const imgX = useTransform(sx, (v) => v * -14);
  const imgY = useTransform(sy, (v) => v * -10);
  const cardX = useTransform(sx, (v) => v * 10);
  const cardY = useTransform(sy, (v) => v * 8);

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      onPointerMove={onPointerMove}
      className="relative isolate flex flex-col bg-[radial-gradient(600px_400px_at_0%_10%,rgb(255_157_24/0.08),transparent_70%),radial-gradient(500px_400px_at_30%_90%,rgb(17_189_235/0.07),transparent_70%)] pt-[112px] lg:block lg:min-h-[860px] lg:pb-[210px] lg:pt-[142px]"
    >
      {/* organic mask, echoing the logo's flowing S */}
      <svg width="0" height="0" aria-hidden className="absolute">
        <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
          <path d="M.16,0 H1 V.9 C.9,.97 .78,.9 .62,.94 C.46,.98 .3,1 .18,.9 C.08,.8 .13,.66 .07,.52 C0,.36 .08,.2 .05,.1 C.04,.05 .1,0 .16,0Z" />
        </clipPath>
      </svg>

      {/* ---------- copy ---------- */}
      <div className="container-x relative z-[3] order-1">
        <div className="max-w-[600px]">
          <motion.p {...rise(0.05)} className="mb-6 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.28em] text-navy-900">
            <span aria-hidden className="h-0.5 w-7 rounded-full bg-gradient-to-r from-brand-orange to-brand-blue" />
            Ideas <span className="text-brand-orange">flow.</span> Solutions <span className="text-brand-blue">grow.</span>
          </motion.p>
          <motion.h1
            id="hero-title"
            {...rise(0.15)}
            className="text-[clamp(46px,12vw,60px)] font-extrabold leading-[0.98] tracking-[-0.045em] md:text-[clamp(60px,6.4vw,92px)]"
          >
            Turning
            <br />
            ideas into
            <br />
            <span className="text-gradient-warm">impactful</span>
            <br />
            <span className="text-gradient-ink">technology.</span>
          </motion.h1>
          <motion.p {...rise(0.28)} className="mt-7 max-w-[520px] text-[17px] text-muted md:text-[19px]">
            {site.description}
          </motion.p>
          <motion.div {...rise(0.38)} className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
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
          </motion.div>

          <motion.dl {...rise(0.5)} className="mt-12 grid grid-cols-2 gap-3 sm:flex sm:gap-0">
            {heroStats.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  "rounded-[18px] bg-white p-4 shadow-clay sm:rounded-none sm:bg-transparent sm:p-0 sm:px-6 sm:shadow-none",
                  i === 0 ? "sm:pl-0" : "sm:border-l sm:border-ink/10",
                )}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-[34px] font-bold leading-[1.1] tracking-[-0.03em] text-navy-900">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
                <dd aria-hidden className="mt-1 text-[12.5px] leading-tight text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-[18px] bg-white p-4 shadow-clay sm:rounded-none sm:border-l sm:border-ink/10 sm:bg-transparent sm:p-0 sm:px-6 sm:shadow-none">
              <dt className="sr-only">Reach</dt>
              <dd aria-hidden>
                <svg viewBox="0 0 48 24" className="h-[26px] w-12">
                  <defs>
                    <linearGradient id="inf" x1="0" x2="1">
                      <stop offset="0" stopColor="#FF9D18" />
                      <stop offset="1" stopColor="#F04432" />
                    </linearGradient>
                  </defs>
                  <path d="M24 12c-4-6-8-8-12-8a8 8 0 0 0 0 16c4 0 8-2 12-8s8-8 12-8a8 8 0 0 1 0 16c-4 0-8-2-12-8z" stroke="url(#inf)" strokeWidth="3.2" fill="none" />
                </svg>
              </dd>
              <dd className="text-[12.5px] leading-tight text-muted">
                Growing
                <br />
                <b className="font-display text-[17px] text-navy-900">Globally</b>
              </dd>
            </div>
          </motion.dl>
        </div>
      </div>

      {/* ---------- cinematic visual ---------- */}
      <div className="relative order-2 mx-[clamp(16px,4vw,48px)] mt-12 h-[440px] sm:h-[520px] lg:absolute lg:right-0 lg:top-0 lg:z-[-1] lg:m-0 lg:h-[calc(100%-40px)] lg:w-[58%]">
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          className="absolute inset-0 overflow-hidden rounded-[32px_110px_32px_32px] bg-gradient-to-br from-[#2a4a7a] to-[#f39b4a] lg:rounded-none lg:[clip-path:url(#hero-clip)]"
        >
          <motion.div style={{ x: imgX, y: imgY }} className="absolute -inset-6">
            <Image
              src="/images/hero-mountains.jpg"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-[60%_40%]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_26_53/0.1)_0%,rgb(7_26_53/0.55)_100%)] lg:bg-[linear-gradient(90deg,rgb(247_248_250/0.55)_0%,rgb(247_248_250/0)_26%),linear-gradient(180deg,rgb(7_26_53/0.15)_0%,rgb(7_26_53/0)_30%,rgb(7_26_53/0.45)_100%),linear-gradient(200deg,rgb(255_140_40/0.22),transparent_50%)]" />
          <svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
            <path d={FLOW} fill="none" stroke="rgb(255 170 70 / 0.5)" strokeWidth={34} strokeLinecap="round" className="blur-[14px]" />
            <motion.path
              d={FLOW}
              fill="none"
              stroke="#FFB347"
              strokeWidth={5}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3.2, ease: EASE, delay: 0.5 }}
            />
            <motion.path
              d={FLOW_2}
              fill="none"
              stroke="#4FD3FF"
              strokeWidth={3}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3.2, ease: EASE, delay: 0.8 }}
            />
          </svg>
        </motion.div>

        {/* overlay layer sits outside the clip so cards can float freely */}
        <motion.div style={{ x: cardX, y: cardY }} className="pointer-events-none absolute inset-0">
          <motion.p
            aria-hidden
            initial={{ opacity: 0, y: 16, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -8 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
            className="absolute left-[20%] top-[118px] hidden font-script text-[30px] leading-[1.05] text-white [text-shadow:0_2px_18px_rgb(7_26_53/0.45)] xl:block"
          >
            Technology in motion,
            <br />
            for a better tomorrow
          </motion.p>

          <ul
            aria-label="What we build"
            className="pointer-events-auto absolute inset-x-4 bottom-4 grid grid-cols-2 gap-2 lg:inset-x-auto lg:bottom-auto lg:right-[clamp(20px,4vw,64px)] lg:top-[132px] lg:flex lg:flex-col lg:items-end lg:gap-3"
          >
            {heroCapabilities.map((c, i) => (
              <motion.li
                key={c.title}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.7 + i * 0.12 }}
                whileHover={{ x: -6 }}
                className={cn(
                  "glass flex items-center gap-2.5 rounded-[14px] p-2 pr-3 lg:min-w-[244px] lg:gap-3 lg:rounded-[18px] lg:p-3 lg:pr-5",
                  ["lg:mr-0", "lg:mr-7", "lg:mr-2", "lg:mr-9"][i],
                )}
              >
                <span className={cn("grid size-8 shrink-0 place-items-center rounded-[10px] lg:size-10 lg:rounded-xl", accents[c.accent].soft)}>
                  <c.icon aria-hidden className="size-4 lg:size-5" />
                </span>
                <span className="min-w-0">
                  <b className="block truncate font-display text-[12.5px] font-semibold text-navy-900 lg:text-sm">{c.title}</b>
                  <small className="hidden text-[11px] text-muted min-[400px]:block lg:text-xs">{c.caption}</small>
                </span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="#process"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.2 }}
            className="group pointer-events-auto absolute left-5 top-5 flex items-center gap-3.5 font-display text-[15px] font-semibold leading-tight text-white lg:bottom-[190px] lg:left-[44%] lg:top-auto"
          >
            <span className="relative grid size-16 place-items-center rounded-full bg-white/95 text-navy-900 shadow-[0_14px_30px_-10px_rgb(7_26_53/0.5)] transition-transform duration-300 group-hover:scale-105">
              <span aria-hidden className="absolute -inset-2 animate-pulse-ring rounded-full border-[1.5px] border-white/55" />
              <Play aria-hidden className="ml-0.5 size-5 fill-current" />
            </span>
            <span>
              See How
              <br />
              <span className="font-normal opacity-85">We Build Impact</span>
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* ---------- organic transition ---------- */}
      <svg
        aria-hidden
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className="relative z-[1] order-3 -mt-14 h-[90px] w-full lg:absolute lg:inset-x-0 lg:-bottom-px lg:mt-0 lg:h-[180px]"
      >
        <path className="fill-canvas" d="M0 92 C 220 150 420 160 640 118 C 860 76 1020 30 1200 52 C 1310 66 1390 96 1440 110 V180 H0Z" />
        <path className="fill-none stroke-brand-blue/35" strokeWidth={2} vectorEffect="non-scaling-stroke" d="M0 92 C 220 150 420 160 640 118 C 860 76 1020 30 1200 52 C 1310 66 1390 96 1440 110" />
        <path className="fill-none stroke-brand-orange/30" strokeWidth={2} strokeDasharray="2 8" vectorEffect="non-scaling-stroke" d="M0 104 C 240 160 440 166 660 126 C 880 86 1030 44 1210 64 C 1320 76 1395 104 1440 118" />
      </svg>
    </section>
  );
}

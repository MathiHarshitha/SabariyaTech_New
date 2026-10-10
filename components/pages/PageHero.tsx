"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn, EASE } from "@/lib/utils";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});

type Crumb = { label: string; href?: string };

/**
 * Opening section for inner pages — same light canvas, dot grid and
 * brand glows as the home hero, with a breadcrumb in place of the tagline pill.
 */
export function PageHero({
  crumbs,
  title,
  lead,
  actions,
  aside,
  children,
  id = "page-title",
}: {
  crumbs: Crumb[];
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
  id?: string;
}) {
  return (
    <section aria-labelledby={id} className="relative isolate overflow-hidden pb-16 pt-[120px] md:pb-24 lg:pt-[150px]">
      <SectionBackdrop variant="aurora">
        <div className="absolute inset-0 bg-[radial-gradient(rgb(16_33_61/0.1)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_0%,#000_30%,transparent_80%)]" />
      </SectionBackdrop>

      <div className={cn("container-x grid items-center gap-12", aside && "lg:grid-cols-[1.05fr_0.95fr] lg:gap-16")}>
        <div className={cn(!aside && "max-w-[860px]")}>
          <motion.nav {...rise(0.05)} aria-label="Breadcrumb">
            <ol className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-white bg-white/70 py-1.5 pl-1.5 pr-4 font-display text-[12px] font-semibold text-muted shadow-soft backdrop-blur">
              <li>
                <Link href="/" className="rounded-full bg-navy-900 px-3 py-1 text-white transition-colors hover:bg-brand-orange">
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight aria-hidden className="size-3.5 text-brand-orange" />
                  {c.href && i < crumbs.length - 1 ? (
                    <Link href={c.href} className="transition-colors hover:text-brand-orange">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-navy-900">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>

          <motion.h1
            id={id}
            {...rise(0.15)}
            className="mt-7 text-[clamp(40px,10vw,54px)] font-extrabold leading-[1.02] tracking-[-0.045em] md:text-[clamp(54px,5.6vw,84px)]"
          >
            {title}
          </motion.h1>
          {lead && (
            <motion.p {...rise(0.28)} className="mt-6 max-w-[600px] text-[17px] text-muted md:text-[19px]">
              {lead}
            </motion.p>
          )}
          {actions && (
            <motion.div {...rise(0.38)} className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              {actions}
            </motion.div>
          )}
        </div>

        {aside && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
          >
            {aside}
          </motion.div>
        )}
      </div>

      {children}

    </section>
  );
}

/** Gradient-warm word with the hand-drawn swoosh used in the home hero. */
export function Swoosh({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="text-gradient-warm">{children}</span>
      <svg aria-hidden viewBox="0 0 300 24" preserveAspectRatio="none" className="absolute -bottom-[0.1em] left-[2%] h-[0.2em] w-[96%]">
        <defs>
          <linearGradient id="page-swoosh" x1="0" x2="1">
            <stop offset="0" stopColor="#FF9D18" />
            <stop offset="0.6" stopColor="#FF6A00" />
            <stop offset="1" stopColor="#11BDEB" />
          </linearGradient>
        </defs>
        <motion.path
          d="M4 18 C 70 6, 170 2, 296 10"
          fill="none"
          stroke="url(#page-swoosh)"
          strokeWidth={6}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.8 }}
        />
      </svg>
    </span>
  );
}

/** Small numbered stat used in page-hero asides. */
export function StatRow({ stats, light }: { stats: { value: string; label: string }[]; light?: boolean }) {
  return (
    <dl className={cn("grid gap-3", stats.length === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3")}>
      {stats.map((s) => (
        <div key={s.label} className={cn("flex flex-col rounded-[20px] p-4", light ? "bg-white/[0.06]" : "bg-white shadow-clay")}>
          <dt className={cn("text-[12.5px] leading-tight", light ? "text-white/55" : "text-muted")}>{s.label}</dt>
          <dd className={cn("order-first font-display text-[30px] font-bold leading-tight tracking-[-0.03em]", light ? "text-white" : "text-navy-900")}>
            {s.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

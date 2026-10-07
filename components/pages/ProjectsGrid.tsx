"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BedDouble,
  Building2,
  GraduationCap,
  Mountain,
  Palette,
  Scale,
  ShoppingBag,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { portfolio, type Sector } from "@/data/pages";
import { accents } from "@/lib/accents";
import { cn, EASE } from "@/lib/utils";

const sectorIcons: Record<Sector, LucideIcon> = {
  Tourism: Mountain,
  Education: GraduationCap,
  Legal: Scale,
  Hospitality: BedDouble,
  Healthcare: Stethoscope,
  "Real Estate": Building2,
  "E-commerce": ShoppingBag,
  Design: Palette,
};

// Only show filters for sectors we actually have work in, busiest first.
const sectors = Object.entries(
  portfolio.reduce<Record<string, number>>((acc, p) => ({ ...acc, [p.sector]: (acc[p.sector] ?? 0) + 1 }), {}),
)
  .sort((a, b) => b[1] - a[1])
  .map(([s]) => s as Sector);

const host = (url: string) => new URL(url).hostname.replace(/^www\./, "");
const initials = (t: string) =>
  t
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export function ProjectsGrid() {
  const [filter, setFilter] = useState<Sector | "All">("All");
  const visible = filter === "All" ? portfolio : portfolio.filter((p) => p.sector === filter);

  return (
    <section id="portfolio" aria-label="Projects" className="relative scroll-mt-24 pb-28 pt-12 md:pb-40 md:pt-16">
      <div className="container-x">
        <div role="group" aria-label="Filter projects by industry" className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 py-1">
          {(["All", ...sectors] as const).map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "relative shrink-0 rounded-full px-4 py-2 font-display text-[13.5px] font-semibold transition-colors",
                filter === f ? "text-white" : "bg-white text-navy-900 shadow-soft hover:text-brand-orange",
              )}
            >
              {filter === f && (
                <motion.span layoutId="projects-filter" className="absolute inset-0 rounded-full bg-navy-900" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
              )}
              <span className="relative">
                {f}
                <span className={cn("ml-1.5 text-[11px]", filter === f ? "text-white/60" : "text-muted")}>
                  {f === "All" ? portfolio.length : portfolio.filter((p) => p.sector === f).length}
                </span>
              </span>
            </button>
          ))}
        </div>

        <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p) => {
              const Icon = sectorIcons[p.sector];
              return (
                <motion.li
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-lift">
                    <div className="relative mx-2 mt-2 aspect-[16/10] overflow-hidden rounded-[22px] bg-navy-900">
                      {p.image ? (
                        <>
                          <Image
                            src={p.image}
                            alt=""
                            fill
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                          />
                          <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgb(7_26_53/0.55))]" />
                        </>
                      ) : (
                        <div aria-hidden className="bg-navy-section absolute inset-0">
                          <span
                            className="absolute -right-10 -top-10 size-48 rounded-full blur-2xl"
                            style={{ background: `radial-gradient(circle, ${accents[p.accent].glow.replace(/0\.\d+\)$/, "0.6)")}, transparent 70%)` }}
                          />
                          <svg viewBox="0 0 400 250" preserveAspectRatio="none" className="absolute inset-0 size-full">
                            <path d="M-10 200 C 80 160 140 230 220 170 S 340 70 410 100" fill="none" stroke="rgb(255 157 24 / 0.45)" strokeWidth={2} vectorEffect="non-scaling-stroke" />
                            <path d="M-10 216 C 90 178 150 244 232 184 S 350 88 410 116" fill="none" stroke="rgb(17 189 235 / 0.35)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
                          </svg>
                          <span className="absolute inset-0 grid place-items-center font-display text-[64px] font-extrabold tracking-[-0.05em] text-white/90 transition-transform duration-700 ease-premium group-hover:scale-105">
                            {initials(p.title)}
                          </span>
                        </div>
                      )}
                      <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[11px] text-navy-700 backdrop-blur">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        {host(p.url)}
                      </span>
                      <span className={cn("absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-gradient-to-br px-3 py-1 font-display text-[11.5px] font-semibold text-white", accents[p.accent].badge)}>
                        <Icon aria-hidden className="size-3.5" />
                        {p.sector}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5 pb-6">
                      <h3 className="text-xl font-semibold">{p.title}</h3>
                      <p className="mt-2 text-[14.5px] text-muted">{p.description}</p>
                      <ul className="mb-5 mt-4 flex flex-wrap gap-1.5" aria-label="Features">
                        {p.features.map((f) => (
                          <li key={f} className="rounded-full bg-canvas px-2.5 py-1 text-[11.5px] font-medium text-navy-700">
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link mt-auto inline-flex items-center gap-2 self-start font-display text-sm font-semibold text-navy-900"
                      >
                        Visit live site
                        <span className="sr-only">(opens in a new tab)</span>
                        <ArrowUpRight aria-hidden className="size-4 text-brand-orange transition-transform duration-300 ease-premium group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    </div>
                  </article>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}

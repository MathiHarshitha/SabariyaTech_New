"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, type WorkFilter } from "@/data/site";
import { accents } from "@/lib/accents";
import { Button, LinkArrow } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2, Lead } from "@/components/ui/Typography";
import { cn, EASE } from "@/lib/utils";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

const filters: WorkFilter[] = ["All", "Education", "Travel & Tourism", "Legal Services"];

export function Work() {
  const [filter, setFilter] = useState<WorkFilter>("All");
  const railRef = useRef<HTMLUListElement>(null);
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const scroll = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : rail.clientWidth;
    rail.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section id="work" aria-labelledby="work-title" className="relative isolate py-20 md:pb-32 md:pt-28">
      <SectionBackdrop variant="ribbons" />
      <div className="container-x">
        <Reveal className="grid items-end gap-x-16 gap-y-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>Featured work</Eyebrow>
            <H2 id="work-title">
              Real projects.
              <br />
              Real <span className="text-brand-orange">results.</span>
            </H2>
          </div>
          <div>
            <Lead className="mt-0">
              We work with businesses, institutes and startups to build solutions that create measurable impact.
            </Lead>
            <Button href="#contact" className="mt-7">
              Start a Similar Project
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <div role="group" aria-label="Filter projects" className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 py-1">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => {
                  setFilter(f);
                  railRef.current?.scrollTo({ left: 0, behavior: "smooth" });
                }}
                className={cn(
                  "relative shrink-0 rounded-full px-4 py-2 font-display text-[13.5px] font-semibold transition-colors",
                  filter === f ? "text-white" : "bg-white text-navy-900 shadow-soft hover:text-brand-orange",
                )}
              >
                {filter === f && (
                  <motion.span layoutId="work-filter" className="absolute inset-0 rounded-full bg-navy-900" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>
          <div className="hidden gap-2.5 md:flex">
            {([-1, 1] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => scroll(dir)}
                aria-label={dir === -1 ? "Previous projects" : "Next projects"}
                className="grid size-12 place-items-center rounded-full bg-white text-navy-900 shadow-clay transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-navy-900 hover:text-white"
              >
                {dir === -1 ? <ArrowLeft aria-hidden className="size-[18px]" /> : <ArrowRight aria-hidden className="size-[18px]" />}
              </button>
            ))}
          </div>
        </div>

        <ul
          ref={railRef}
          className="no-scrollbar -mx-1 mt-8 grid snap-x snap-mandatory auto-cols-[85%] grid-flow-col gap-5 overflow-x-auto px-1 pb-10 pt-2 sm:auto-cols-[calc((100%-20px)/2)] lg:auto-cols-[calc((100%-60px)/4)]"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p) => (
              <motion.li
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="snap-start"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="relative mx-2 mt-2 aspect-[4/3] overflow-hidden rounded-[22px] bg-gradient-to-br from-navy-700 to-brand-blue">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 85vw"
                      className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                    />
                    <span className={cn("absolute bottom-3 left-3 rounded-full bg-gradient-to-br px-3 py-1 font-display text-[11.5px] font-semibold text-white", accents[p.accent].badge)}>
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 pb-6">
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-2 text-[14.5px] text-muted">{p.description}</p>
                    <ul className="mb-5 mt-4 flex flex-wrap gap-1.5" aria-label="Scope">
                      {p.scope.map((s) => (
                        <li key={s} className="rounded-full bg-canvas px-2.5 py-1 text-[11.5px] font-medium text-navy-700">
                          {s}
                        </li>
                      ))}
                    </ul>
                    <LinkArrow href="#contact" className="mt-auto">
                      Discuss a similar project
                    </LinkArrow>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Check, Link2, PenLine, type LucideIcon } from "lucide-react";
import { products, site, type ProductId } from "@/data/site";
import { accents } from "@/lib/accents";
import { Button } from "@/components/ui/Button";
import { Curve } from "@/components/ui/Curve";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2, Lead } from "@/components/ui/Typography";
import { AIEditorMockup, ComingSoonMockup, LinkFixMockup } from "@/components/products/Mockups";
import { cn, EASE } from "@/lib/utils";

const icons: Record<ProductId, LucideIcon> = { linkfix: Link2, "ai-editor": PenLine, more: Box };
function ProductMockup({ id }: { id: ProductId }) {
  if (id === "linkfix") return <LinkFixMockup />;
  if (id === "ai-editor") return <AIEditorMockup />;
  return <ComingSoonMockup />;
}

export function Products() {
  const [activeId, setActiveId] = useState<ProductId>("linkfix");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = products.find((p) => p.id === activeId) ?? products[0];

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(e.key)) return;
    e.preventDefault();
    const i = products.findIndex((p) => p.id === activeId);
    const next = (i + (e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1) + products.length) % products.length;
    setActiveId(products[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="products" aria-labelledby="products-title" className="bg-navy-section relative overflow-hidden py-32 text-white md:py-[200px]">
      <Curve variant="into-dark-a" position="top" />
      <span aria-hidden className="pointer-events-none absolute -right-40 top-1/3 size-[520px] rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="container-x relative z-[2]">
        <Reveal className="grid items-end gap-x-16 gap-y-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow light>Our products</Eyebrow>
            <H2 id="products-title" light>
              Tools that make
              <br />
              work <span className="text-brand-orange">simpler.</span>
            </H2>
          </div>
          <div>
            <Lead light className="mt-0">
              We build products to solve real problems and make work more efficient for businesses and teams.
            </Lead>
            <Button href="#products-showcase" className="mt-7">
              View All Products
            </Button>
          </div>
        </Reveal>

        <div id="products-showcase" className="mt-16 grid gap-8 lg:grid-cols-[360px_1fr] lg:gap-12">
          {/* product selector */}
          <div
            role="tablist"
            aria-label="Products"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="no-scrollbar -mx-[clamp(16px,4vw,48px)] flex gap-3 overflow-x-auto px-[clamp(16px,4vw,48px)] pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0"
          >
            {products.map((p, i) => {
              const selected = p.id === activeId;
              return (
                <button
                  key={p.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  type="button"
                  id={`tab-${p.id}`}
                  aria-selected={selected}
                  aria-controls="product-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(p.id)}
                  className={cn(
                    "relative flex min-w-[260px] items-start gap-4 rounded-[22px] p-4 text-left transition-colors duration-300 lg:min-w-0",
                    selected ? "text-ink" : "neu-dark text-white hover:bg-white/5",
                  )}
                >
                  {selected && (
                    <motion.span
                      layoutId="product-tab"
                      className="absolute inset-0 rounded-[22px] bg-white shadow-[0_20px_40px_-18px_rgb(0_0_0/0.55)]"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <IconBadge icon={icons[p.id]} accent={p.accent} size="sm" className="relative" />
                  <span className="relative min-w-0">
                    <span className="flex items-center gap-2">
                      <b className={cn("font-display text-lg font-semibold", selected ? "text-navy-900" : "text-white")}>{p.name}</b>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                          p.status === "Available" ? "bg-[#DDF6EC] text-[#0E8A5F]" : "bg-brand-amber/20 text-brand-amber",
                        )}
                      >
                        {p.status}
                      </span>
                    </span>
                    <span className={cn("mt-1 block text-[13.5px] leading-snug", selected ? "text-muted" : "text-white/60")}>{p.tagline}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* showcase panel */}
          <div id="product-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} className="min-w-0">
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#2A4268] to-[#0D2347] p-2.5 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.7),inset_0_1px_0_rgb(255_255_255/0.15)] sm:p-3">
              <div className="h-[380px] sm:h-[440px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 18, scale: 0.985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.985 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="h-full"
                    aria-hidden
                  >
                    <ProductMockup id={active.id} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="mt-6 flex flex-col gap-5 rounded-[22px] bg-white/[0.04] p-5 ring-1 ring-white/10 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-[15px] text-white/80">{active.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                    {active.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13.5px] text-white/70">
                        <Check aria-hidden className={cn("size-4", accents[active.accent].text)} strokeWidth={3} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  href={
                    active.id === "more"
                      ? `mailto:${site.email}?subject=${encodeURIComponent("Notify me about new SabariyaTech products")}`
                      : `mailto:${site.email}?subject=${encodeURIComponent(`${active.name} enquiry`)}`
                  }
                  variant="glass"
                  size="sm"
                  className="self-start sm:self-auto"
                >
                  {active.id === "more" ? "Get notified" : `Ask about ${active.name}`}
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Curve variant="out-of-dark-a" position="bottom" lineClass="stroke-brand-cyan/70" />
    </section>
  );
}

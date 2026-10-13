import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { coreServices, offerings, supportServices } from "@/data/pages";
import { accents } from "@/lib/accents";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2, Lead } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

/** Numbered list of the three core services for the services hero. */
export function CoreServicesCard() {
  return (
    <div className="bg-navy-section relative overflow-hidden rounded-[32px] p-3 shadow-[0_50px_100px_-40px_rgb(7_26_53/0.6)] sm:p-4">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <p className="px-3 pb-3 pt-2 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">Core services</p>
      <ul className="flex flex-col gap-2">
        {coreServices.map((s, i) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="group flex items-center gap-4 rounded-[20px] p-3 text-white transition-colors hover:bg-white/[0.07]">
              <span className={cn("grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br", accents[s.accent].badge)}>
                <s.icon aria-hidden className="size-6" />
              </span>
              <span className="min-w-0">
                <b className="block font-display text-[15.5px] font-semibold leading-snug">{s.title}</b>
                <small className="text-[12.5px] text-white/55">{s.deliverables.slice(0, 3).join(" · ")}</small>
              </span>
              <span className="ml-auto font-display text-xs font-semibold text-white/30 transition-colors group-hover:text-brand-amber">0{i + 1}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mx-3 mt-3 border-t border-white/10 pb-2 pt-4 text-[13px] text-white/60">
        Plus SEO, marketing, app development, SaaS and cloud — see everything below.
      </p>
    </div>
  );
}

export function CoreServices() {
  return (
    <section aria-label="Core services" className="relative pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="container-x flex flex-col gap-20 md:gap-32">
        {coreServices.map((s, i) => (
          <article key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
              <div className="bg-navy-section relative overflow-hidden rounded-[32px] p-6 sm:p-8">
                <div className="relative flex items-center justify-between">
                  <IconBadge icon={s.icon} accent={s.accent} className="size-16 rounded-[20px]" />
                  <span aria-hidden className="font-display text-[64px] font-extrabold leading-none tracking-[-0.05em] text-white/[0.08]">0{i + 1}</span>
                </div>
                <ul className="relative mt-10 grid grid-cols-2 gap-3">
                  {s.deliverables.map((d, j) => (
                    <li key={d} className="neu-dark rounded-[20px] p-4">
                      <span className={cn("font-display text-xs font-bold", accents[s.accent].text)}>0{j + 1}</span>
                      <b className="mt-1 block font-display text-[15px] font-semibold leading-snug text-white">{d}</b>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Eyebrow>Core service 0{i + 1}</Eyebrow>
              <H2 id={`${s.id}-title`} className="text-[clamp(32px,3.6vw,50px)]">
                {s.title}
              </H2>
              <Lead>{s.body}</Lead>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-[15px] font-medium text-navy-900">
                    <span className={cn("grid size-7 shrink-0 place-items-center rounded-[9px]", accents[s.accent].soft)}>
                      <Check aria-hidden className="size-4" strokeWidth={3} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="mt-9">
                Discuss this service
              </Button>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Offerings() {
  return (
    <section id="offerings" aria-labelledby="offerings-title" className="relative scroll-mt-24 pb-28 pt-8 md:pb-40">
      <div className="container-x">
        <Reveal className="grid items-end gap-x-16 gap-y-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>Everything we offer</Eyebrow>
            <H2 id="offerings-title">
              One team for your whole
              <br />
              <span className="text-brand-orange">digital journey.</span>
            </H2>
          </div>
          <Lead className="mt-0">From the first website to AI agents and cloud infrastructure, we cover every stage of building and growing online.</Lead>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o, i) => (
            <li key={o.title}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <article
                  style={{ ["--tint" as string]: accents[o.accent].tint }}
                  className="clay group relative h-full overflow-hidden rounded-[28px] p-7 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle, ${accents[o.accent].glow}, transparent 70%)` }}
                  />
                  <IconBadge icon={o.icon} accent={o.accent} />
                  <h3 className="mt-6 text-[21px] font-semibold">{o.title}</h3>
                  <p className="mt-2.5 max-w-[280px] pr-10 text-[15px] text-muted">{o.body}</p>
                  <Link
                    href="/contact"
                    aria-label={`Discuss ${o.title}`}
                    className={cn(
                      "absolute bottom-6 right-6 grid size-10 place-items-center rounded-full transition-transform duration-300 ease-premium group-hover:rotate-45",
                      accents[o.accent].soft,
                    )}
                  >
                    <ArrowUpRight aria-hidden className="size-[18px]" />
                  </Link>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-12 flex flex-col gap-4 rounded-[28px] bg-white p-5 shadow-soft lg:flex-row lg:items-center lg:gap-8 lg:pl-8">
          <p className="shrink-0 font-display text-[11.5px] font-semibold uppercase tracking-[0.2em] text-muted">Supporting services</p>
          <ul className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {supportServices.map((s) => (
              <li key={s.title} className="neu-inset flex items-center gap-3 rounded-[18px] px-3.5 py-3 font-display text-[14px] font-semibold text-navy-900">
                <s.icon aria-hidden className="size-5 shrink-0 text-brand-orange" />
                {s.title}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

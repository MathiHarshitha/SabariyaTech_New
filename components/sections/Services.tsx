import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { accents } from "@/lib/accents";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2, Lead } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

export function Services() {
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="relative isolate pb-36 pt-24 md:pb-48 md:pt-32">
      <SectionBackdrop variant="grid" />
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <Reveal className="relative">
          <Eyebrow>What we do</Eyebrow>
          <H2 id="solutions-title" className="max-w-[560px]">
            End-to-end <span className="text-brand-blue">technology</span> solutions for real-world{" "}
            <span className="text-brand-orange">growth.</span>
          </H2>
          <Lead>
            We build digital products, business systems and AI-powered solutions that solve real problems and create
            long-term value.
          </Lead>
          <Button href="#work" className="mt-9">
            Explore Solutions
          </Button>
          <span aria-hidden className="sphere-orange absolute -bottom-28 right-[12%] hidden size-[88px] animate-float lg:block" />
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <li key={s.title} className={cn(i % 2 === 1 && "sm:translate-y-9")}>
              <Reveal delay={i * 0.08} className="h-full">
                <article
                  style={{ ["--tint" as string]: accents[s.accent].tint }}
                  className="clay group relative h-full overflow-hidden rounded-[28px] p-7 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle, ${accents[s.accent].glow}, transparent 70%)` }}
                  />
                  <IconBadge icon={s.icon} accent={s.accent} />
                  <h3 className="mt-6 text-[21px] font-semibold">{s.title}</h3>
                  <p className="mt-2.5 max-w-[260px] text-[15px] text-muted">{s.body}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5 pr-12" aria-label={`${s.title} includes`}>
                    {s.points.map((p) => (
                      <li key={p} className="rounded-full bg-white/80 px-2.5 py-1 text-[11.5px] font-medium text-navy-700 ring-1 ring-ink/[0.06]">
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    aria-label={`Discuss ${s.title}`}
                    className={cn(
                      "absolute bottom-6 right-6 grid size-10 place-items-center rounded-full transition-transform duration-300 ease-premium group-hover:rotate-45",
                      accents[s.accent].soft,
                    )}
                  >
                    <ArrowUpRight aria-hidden className="size-[18px]" />
                  </a>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

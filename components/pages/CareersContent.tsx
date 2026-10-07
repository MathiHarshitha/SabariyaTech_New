import { Briefcase, Check, Clock, Mail, MapPin, Sparkles } from "lucide-react";
import { culture, hiringSteps, openings, team } from "@/data/pages";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Curve } from "@/components/ui/Curve";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2, Lead } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

const apply = (role: string) => `mailto:${site.email}?subject=${encodeURIComponent(`Application: ${role}`)}`;

/** "Now hiring" console card for the careers hero. */
export function HiringCard() {
  return (
    <div className="bg-navy-section relative overflow-hidden rounded-[32px] p-4 text-white shadow-[0_50px_100px_-40px_rgb(7_26_53/0.6)] sm:p-5">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <p className="flex items-center gap-2 px-1 pb-4 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
        <span className="relative flex size-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
          <span className="relative size-2 rounded-full bg-emerald-400" />
        </span>
        Now hiring
      </p>
      <ul className="flex flex-col gap-2">
        {openings.map((o) => (
          <li key={o.title}>
            <a href="#openings" className="flex items-center gap-4 rounded-[20px] bg-white p-3 text-navy-900 transition-transform duration-300 hover:-translate-y-0.5">
              <IconBadge icon={Briefcase} accent="orange" size="sm" />
              <span className="min-w-0">
                <b className="block font-display text-[15.5px] font-semibold">{o.title}</b>
                <small className="text-[12.5px] text-muted">
                  {o.type} · {o.location}
                </small>
              </span>
            </a>
          </li>
        ))}
        <li className="flex items-center gap-4 rounded-[20px] border border-dashed border-white/20 p-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-[14px] bg-white/10">
            <Sparkles aria-hidden className="size-5 text-brand-amber" />
          </span>
          <span>
            <b className="block font-display text-[15px] font-semibold">Open application</b>
            <small className="text-[12.5px] text-white/55">Developers, designers, AI/ML — tell us what you do best.</small>
          </span>
        </li>
      </ul>
      <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
        {[
          { k: "Steps to hire", v: `${hiringSteps.length}` },
          { k: "Based in", v: site.city },
          { k: "Team size", v: `${team.length}` },
        ].map((s) => (
          <div key={s.k} className="flex flex-col">
            <dt className="text-[11.5px] text-white/55">{s.k}</dt>
            <dd className="order-first font-display text-lg font-bold">{s.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Culture() {
  return (
    <section aria-labelledby="culture-title" className="relative pb-24 pt-16 md:pb-32 md:pt-24">
      <div className="container-x">
        <Reveal className="max-w-[640px]">
          <Eyebrow>Life at SabariyaTech</Eyebrow>
          <H2 id="culture-title">
            A place to do your
            <br />
            <span className="text-gradient-warm">best work.</span>
          </H2>
          <Lead>We&apos;re a small, focused team. That means real responsibility from day one and room to grow with the company.</Lead>
        </Reveal>
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {culture.map((c, i) => (
            <li key={c.title} className={cn(i === 1 && "md:translate-y-10")}>
              <Reveal delay={i * 0.08} className="h-full">
                <article className="clay-deep group relative h-full rounded-[30px] p-7 transition-transform duration-500 ease-premium hover:-translate-y-1.5">
                  <span aria-hidden className="absolute right-6 top-6 font-display text-[34px] font-bold tracking-[-0.04em] text-ink/[0.06]">
                    0{i + 1}
                  </span>
                  <IconBadge icon={c.icon} accent={c.accent} className="transition-transform duration-500 ease-premium group-hover:-rotate-6" />
                  <h3 className="mt-6 text-xl font-semibold leading-tight">{c.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{c.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Openings() {
  return (
    <section id="openings" aria-labelledby="openings-title" className="bg-navy-section relative scroll-mt-24 overflow-hidden py-32 text-white md:py-[200px]">
      <Curve variant="into-dark-a" position="top" />
      <div className="container-x relative z-[2]">
        <Reveal className="grid items-end gap-x-16 gap-y-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow light>Open positions</Eyebrow>
            <H2 id="openings-title" light>
              Find your <span className="text-brand-orange">role.</span>
            </H2>
          </div>
          <Lead light className="mt-0">
            Apply by email — send your resume and a few lines about you to {site.email}.
          </Lead>
        </Reveal>

        <ul className="mt-14 flex flex-col gap-5">
          {openings.map((o) => (
            <li key={o.title}>
              <Reveal>
                <article className="grid gap-6 rounded-[28px] bg-white p-6 text-ink shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] sm:p-8 lg:grid-cols-[1.2fr_1fr_auto] lg:items-center lg:gap-10">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <span className="flex items-center gap-1.5 rounded-full bg-brand-orange/10 px-3 py-1 text-[12px] font-semibold text-brand-orange">
                        <Clock aria-hidden className="size-3.5" /> {o.type}
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1 text-[12px] font-semibold text-brand-blue">
                        <MapPin aria-hidden className="size-3.5" /> {o.location}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[26px] font-bold tracking-[-0.03em]">{o.title}</h3>
                    <p className="mt-2 text-[15.5px] text-muted">{o.body}</p>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {o.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[14.5px] font-medium text-navy-900">
                        <span className="grid size-6 shrink-0 place-items-center rounded-[8px] bg-brand-orange/10 text-brand-orange">
                          <Check aria-hidden className="size-3.5" strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Button href={apply(o.title)} size="lg" className="self-start lg:self-center">
                    Apply now
                  </Button>
                </article>
              </Reveal>
            </li>
          ))}
          <li>
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-5 rounded-[28px] border border-dashed border-white/20 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <h3 className="text-xl font-semibold text-white">Don&apos;t see your role?</h3>
                  <p className="mt-1.5 text-[15px] text-white/65">We&apos;re always happy to hear from talented developers, designers and AI/ML engineers.</p>
                </div>
                <Button href={apply("Open application")} variant="glass" arrow={false} leading={<Mail aria-hidden className="ml-2 size-[18px]" />}>
                  Send an open application
                </Button>
              </div>
            </Reveal>
          </li>
        </ul>
      </div>
      <Curve variant="out-of-dark-a" position="bottom" lineClass="stroke-brand-cyan/70" />
    </section>
  );
}

export function HiringProcess() {
  return (
    <section aria-labelledby="hiring-title" className="relative pb-28 pt-20 md:pb-36 md:pt-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <Eyebrow className="justify-center">Hiring process</Eyebrow>
          <H2 id="hiring-title">
            Simple, transparent, <span className="text-brand-blue">human.</span>
          </H2>
          <Lead className="mx-auto">Four steps, clear communication at each one — and no endless rounds.</Lead>
        </Reveal>
        <ol className="relative mt-16 grid gap-6 md:grid-cols-4">
          <span aria-hidden className="absolute left-[12.5%] right-[12.5%] top-[34px] hidden h-[3px] rounded-full bg-gradient-to-r from-brand-orange via-brand-blue to-brand-cyan md:block" />
          {hiringSteps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.1} className="flex flex-col items-center text-center">
                <span className="relative grid size-[68px] place-items-center rounded-full bg-white font-display text-xl font-bold text-brand-orange shadow-[0_0_0_8px_rgb(255_106_0/0.12),0_18px_30px_-12px_rgb(255_106_0/0.3)]">
                  0{i + 1}
                </span>
                <b className="mt-6 block font-display text-lg font-bold text-navy-900">{s.title}</b>
                <span className="mt-1 block max-w-[220px] text-[14.5px] text-muted">{s.body}</span>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal className="mt-16 flex justify-center">
          <Button href={apply("Open application")} size="lg">
            Start your application
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

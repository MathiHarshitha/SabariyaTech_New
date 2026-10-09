import Image from "next/image";
import Link from "next/link";
import { Compass, Eye, MapPin } from "lucide-react";
import { about, aboutValues, portfolio, team } from "@/data/pages";
import { site } from "@/data/site";
import { accents } from "@/lib/accents";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2, Lead } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

/** River photo card for the about hero. */
export function RiverCard() {
  const stats = [
    { value: `${portfolio.length}+`, label: "Live projects" },
    { value: `${team.length}`, label: "Specialists" },
    { value: `${new Set(portfolio.map((p) => p.sector)).size}`, label: "Industries" },
  ];
  return (
    <div className="relative">
      <div className="relative aspect-[5/4] overflow-hidden rounded-[36px_120px_36px_36px] bg-gradient-to-br from-[#2a4a7a] to-[#f39b4a] shadow-[0_50px_100px_-40px_rgb(7_26_53/0.6)]">
        <Image src="/images/process-mist.jpg" alt="Mist rolling over a river valley" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgb(7_26_53/0.05)_30%,rgb(7_26_53/0.6))]" />
        <p className="absolute left-6 top-6 max-w-[220px] font-script text-[26px] leading-[1.05] text-white [text-shadow:0_2px_18px_rgb(7_26_53/0.45)]">
          Inspired by the Sabari River
        </p>
      </div>
      <dl className="glass relative mx-4 -mt-12 grid grid-cols-3 gap-2 rounded-[24px] p-3 sm:mx-8">
        {stats.map((s, i) => (
          <div key={s.label} className={cn("flex flex-col px-3 py-1", i > 0 && "border-l border-ink/10")}>
            <dt className="text-[12px] text-muted">{s.label}</dt>
            <dd className="order-first font-display text-[28px] font-bold leading-tight tracking-[-0.03em] text-navy-900">{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Story() {
  return (
    <section aria-labelledby="story-title" className="relative pb-28 pt-16 md:pb-40 md:pt-24">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32">
          <Eyebrow>Our story</Eyebrow>
          <H2 id="story-title">
            A name that
            <br />
            <span className="text-brand-blue">flows</span> with <span className="text-brand-orange">purpose.</span>
          </H2>
          <Lead>{about.story}</Lead>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14px] font-medium text-navy-900 shadow-soft">
            <MapPin aria-hidden className="size-4 text-brand-orange" /> Proudly based in {site.address}
          </p>
        </Reveal>
        <div className="flex flex-col gap-5">
          {[
            { title: "Our mission", body: about.mission, icon: Compass, accent: "orange" as const },
            { title: "Our vision", body: about.vision, icon: Eye, accent: "blue" as const },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className={cn("clay-deep relative overflow-hidden rounded-[32px] p-8 sm:p-10", i === 1 && "lg:ml-12")}>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full"
                  style={{ background: `radial-gradient(circle, ${accents[c.accent].glow}, transparent 70%)` }}
                />
                <IconBadge icon={c.icon} accent={c.accent} />
                <h3 className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.24em] text-muted">{c.title}</h3>
                <p className="mt-3 font-display text-[clamp(22px,2.2vw,28px)] font-semibold leading-snug tracking-[-0.02em] text-navy-900">{c.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Values() {
  return (
    <section aria-labelledby="values-title" className="bg-navy-section relative overflow-hidden py-24 text-white md:py-32">
      <div className="container-x relative z-[2]">
        <Reveal className="grid items-end gap-x-16 gap-y-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow light>What we stand for</Eyebrow>
            <H2 id="values-title" light>
              Like a river —
              <br />
              <span className="text-gradient-flow">steady and strong.</span>
            </H2>
          </div>
          <Lead light className="mt-0">
            The values we borrowed from the Sabari shape every architecture decision, every timeline and every support call.
          </Lead>
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((v, i) => (
            <li key={v.title} className={cn(i % 2 === 1 && "lg:translate-y-10")}>
              <Reveal delay={i * 0.08} className="h-full">
                <article className="neu-dark h-full rounded-[28px] p-7">
                  <span className={cn("grid size-12 place-items-center rounded-2xl bg-gradient-to-br", accents[v.accent].badge)}>
                    <v.icon aria-hidden className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-[15px] text-white/65">{v.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TeamStrip() {
  return (
    <section aria-labelledby="team-strip-title" className="pb-24 pt-8 md:pb-32">
      <div className="container-x">
        <Reveal className="flex flex-col items-start gap-8 rounded-[32px] bg-white p-6 shadow-soft sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Eyebrow>The people</Eyebrow>
            <h2 id="team-strip-title" className="text-[clamp(28px,3vw,40px)] font-bold leading-[1.08] tracking-[-0.03em]">
              {team.length} specialists. <span className="text-brand-orange">One team.</span>
            </h2>
            <ul className="mt-6 flex -space-x-3">
              {team.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/team/${m.slug}`}
                    title={`${m.name} — ${m.role}`}
                    className="relative block size-14 overflow-hidden rounded-full bg-navy-700 ring-4 ring-white transition-transform duration-300 hover:z-10 hover:-translate-y-1"
                  >
                    <Image src={m.image} alt={m.name} fill sizes="56px" className="object-cover object-top" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Button href="/team" size="lg">
            Meet the team
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { team, type Member } from "@/data/pages";
import { teamValues } from "@/data/site";
import { accents } from "@/lib/accents";
import { Curve } from "@/components/ui/Curve";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2, Lead } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

export function MemberCard({ m }: { m: Member }) {
  return (
    <article className="group relative flex h-full flex-col rounded-[28px] bg-white p-2 shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-gradient-to-br from-navy-700 to-brand-blue">
        <Image
          src={m.image}
          alt={`Portrait of ${m.name}`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
        />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgb(7_26_53/0.65))]" />
        <span className={cn("absolute bottom-3 left-3 rounded-full bg-gradient-to-br px-3 py-1 font-display text-[11.5px] font-semibold text-white", accents[m.accent].badge)}>
          {m.role}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-3.5 pb-4 pt-5">
        <h3 className="text-xl font-semibold">{m.name}</h3>
        <p className="mt-2 text-[14.5px] text-muted">{m.short}</p>
        <ul className="mb-5 mt-4 flex flex-wrap gap-1.5" aria-label={`${m.name}'s focus areas`}>
          {m.tags.map((t) => (
            <li key={t} className="rounded-full bg-canvas px-2.5 py-1 text-[11.5px] font-medium text-navy-700">
              {t}
            </li>
          ))}
        </ul>
        <Link
          href={`/team/${m.slug}`}
          className="mt-auto inline-flex items-center gap-2 self-start font-display text-sm font-semibold text-navy-900 after:absolute after:inset-0 after:rounded-[28px]"
        >
          View Profile
          <span className="sr-only">: {m.name}</span>
          <ArrowRight aria-hidden className="size-4 text-brand-orange transition-transform duration-300 ease-premium group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

/** Photo mosaic for the team hero. */
export function TeamMosaic() {
  const [lead, ...rest] = team;
  return (
    <div className="grid h-[440px] grid-cols-4 grid-rows-2 gap-3 sm:h-[480px]">
      {[lead, ...rest.slice(0, 3)].map((m, i) => (
        <Link
          key={m.slug}
          href={`/team/${m.slug}`}
          className={cn(
            "group relative overflow-hidden rounded-[24px] bg-gradient-to-br from-navy-700 to-brand-blue shadow-soft",
            i === 0 ? "col-span-2 row-span-2" : i === 1 ? "col-span-2" : "col-span-1",
          )}
        >
          <Image
            src={m.image}
            alt={`${m.name}, ${m.role}`}
            fill
            priority={i === 0}
            sizes={i < 2 ? "(min-width: 1024px) 24vw, 50vw" : "(min-width: 1024px) 12vw, 25vw"}
            className="object-cover object-top transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
          />
          {i < 2 && (
            <span className="glass absolute bottom-3 left-3 right-3 rounded-2xl px-3 py-2">
              <b className="block truncate font-display text-[14px] font-semibold text-navy-900">{m.name}</b>
              <small className="block truncate text-[11.5px] text-muted">{m.role}</small>
            </span>
          )}
        </Link>
      ))}
      <a href="#full-team" className="bg-navy-section col-span-1 flex flex-col justify-end rounded-[24px] p-4 text-white transition-transform duration-300 hover:-translate-y-0.5">
        <b className="font-display text-[34px] font-bold leading-none tracking-[-0.03em]">+{team.length - 4}</b>
        <small className="mt-1 text-[12px] leading-tight text-white/60">more on the team</small>
      </a>
    </div>
  );
}

export function TeamGrid() {
  return (
    <section id="full-team" aria-labelledby="full-team-title" className="relative scroll-mt-24 pb-36 pt-16 md:pb-52 md:pt-24">
      <div className="container-x">
        <Reveal className="grid items-end gap-x-16 gap-y-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>Meet everyone</Eyebrow>
            <H2 id="full-team-title">
              Our full <span className="text-brand-orange">team.</span>
            </H2>
          </div>
          <Lead className="mt-0">Engineers, data scientists, marketers and storytellers — the people who design, build and grow every SabariyaTech project.</Lead>
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((m, i) => (
            <li key={m.slug}>
              <Reveal delay={(i % 4) * 0.08} className="h-full">
                <MemberCard m={m} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TeamValues() {
  return (
    <section aria-labelledby="values-title" className="bg-navy-section relative overflow-hidden py-32 text-white md:py-[190px]">
      <Curve variant="into-dark-b" position="top" />
      <div className="container-x relative z-[2] grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <Eyebrow light>What drives us</Eyebrow>
          <H2 id="values-title" light>
            Ideas, people,
            <br />
            technology, <span className="text-gradient-flow">impact.</span>
          </H2>
          <Lead light>Four words that shape how we hire, how we work together and how we build for our clients.</Lead>
        </Reveal>
        <ul className="grid grid-cols-2 gap-4">
          {teamValues.map((v, i) => (
            <li key={v.label}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className={cn("neu-dark flex h-full flex-col gap-6 rounded-[28px] p-6", i % 2 === 1 && "sm:translate-y-8")}>
                  <span className={cn("grid size-12 place-items-center rounded-2xl bg-gradient-to-br", accents[v.accent].badge)}>
                    <v.icon aria-hidden className="size-6" />
                  </span>
                  <b className="font-display text-2xl font-semibold tracking-[-0.02em]">{v.label}</b>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <Curve variant="out-of-dark-b" position="bottom" lineClass="stroke-brand-cyan/70" />
    </section>
  );
}

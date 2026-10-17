import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { team, type Member } from "@/data/pages";
import { teamValues } from "@/data/site";
import { accents } from "@/lib/accents";
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

/** Team photo for the team hero. */
export function TeamMosaic() {
  return (
    <div className="relative h-[440px] overflow-hidden rounded-[24px] bg-navy-700 shadow-soft sm:h-[480px]">
      <Image
        src="/images/team.jpg"
        alt="Team members collaborating around laptops"
        fill
        priority
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
      <span className="absolute bottom-4 left-4 rounded-2xl border border-white/40 bg-white/80 px-4 py-3 font-display text-sm font-semibold text-navy-900 shadow-soft backdrop-blur-sm">
        One team, building what&apos;s next
      </span>
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
              The full <span className="text-brand-orange">SabariyaTech team.</span>
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
    <section aria-labelledby="values-title" className="bg-navy-section relative overflow-hidden py-24 text-white md:py-32">
      <div className="container-x relative z-[2] grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <Eyebrow light>What drives us</Eyebrow>
          <H2 id="values-title" light>
            Ideas, people, technology —
            <br />
            <span className="text-gradient-flow">SabariyaTech impact.</span>
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
    </section>
  );
}

import Image from "next/image";
import { teamValues } from "@/data/site";
import { accents } from "@/lib/accents";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2, Lead } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

export function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="relative pb-24 pt-8 md:pb-32 md:pt-16">
      <svg width="0" height="0" aria-hidden className="absolute">
        <clipPath id="team-clip" clipPathUnits="objectBoundingBox">
          <path d="M.06,.08 C.2,.01 .4,.06 .6,.03 C.78,0 .94,.02 .98,.14 C1,.3 .97,.6 .99,.82 C1,.95 .9,1 .74,.97 C.55,.94 .35,1 .16,.97 C.03,.95 0,.84 .01,.66 C.02,.46 -.01,.2 .06,.08Z" />
        </clipPath>
      </svg>
      <div className="container-x grid items-center gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-14">
        <Reveal>
          <Eyebrow>Our team</Eyebrow>
          <H2 id="team-title">
            A passionate team
            <br />
            building <span className="text-brand-orange">what&apos;s next.</span>
          </H2>
          <Lead>
            A team of developers, data scientists, designers and strategists working together to build innovative
            solutions.
          </Lead>
          <Button href="#contact" className="mt-8">
            Meet Our Team
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          {/* TODO: replace with a real SabariyaTech team photo */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] bg-gradient-to-br from-navy-700 to-brand-orange sm:aspect-[16/10] sm:rounded-none sm:[clip-path:url(#team-clip)]">
            <Image
              src="/images/team.jpg"
              alt="Team collaborating around a laptop"
              fill
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover transition-transform duration-[1.2s] ease-premium hover:scale-[1.03]"
            />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(200deg,transparent_40%,rgb(7_26_53/0.35))]" />
          </div>
          <svg aria-hidden viewBox="0 0 600 400" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 hidden size-full sm:block">
            <defs>
              <linearGradient id="team-line" x1="0" x2="1">
                <stop offset="0" stopColor="#11BDEB" />
                <stop offset=".5" stopColor="#0878E8" />
                <stop offset="1" stopColor="#FF6A00" />
              </linearGradient>
            </defs>
            <path d="M-10 330 C 120 260 220 380 340 300 S 520 160 610 200" fill="none" stroke="url(#team-line)" strokeWidth={3} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>
          <ul
            aria-label="What drives us"
            className="glass-dark relative mx-4 -mt-16 grid grid-cols-2 gap-1.5 rounded-3xl p-3.5 sm:absolute sm:right-4 sm:top-1/2 sm:m-0 sm:flex sm:min-w-[210px] sm:-translate-y-1/2 sm:flex-col lg:-right-3"
          >
            {teamValues.map((v) => (
              <li key={v.label} className="flex items-center gap-3 rounded-2xl py-2 pl-2 pr-4 font-display text-[15px] font-semibold text-white transition-colors hover:bg-white/[0.07]">
                <span className={cn("grid size-[34px] place-items-center rounded-full bg-gradient-to-br text-white", accents[v.accent].badge)}>
                  <v.icon aria-hidden className="size-4" />
                </span>
                {v.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

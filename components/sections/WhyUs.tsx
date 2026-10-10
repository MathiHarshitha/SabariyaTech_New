import { reasons } from "@/data/site";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2, Lead } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

export function WhyUs() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative isolate py-24 md:py-32">
      <SectionBackdrop variant="rings" />
      <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32">
          <Eyebrow>Why SabariyaTech</Eyebrow>
          <H2 id="about-title">
            More than development.
            <br />
            <span className="text-gradient-warm">A long-term partner.</span>
          </H2>
          <Lead>
            We don&apos;t just build software. We help businesses grow with reliable, scalable and future-ready
            solutions.
          </Lead>
          {/* sculpted 3D objects echoing the logo's two spheres */}
          <div aria-hidden className="relative mt-12 hidden h-[200px] lg:block">
            <span className="sphere-blue absolute left-2 top-2 size-[150px] animate-float" />
            <span className="absolute left-[120px] top-[30px] size-40 rounded-full border-[10px] border-transparent opacity-80 [background:linear-gradient(var(--color-canvas),var(--color-canvas))_padding-box,linear-gradient(140deg,rgb(255_157_24/0.6),rgb(17_189_235/0.5))_border-box] [transform:rotateX(70deg)_rotateZ(20deg)]" />
            <span className="sphere-orange absolute left-[170px] top-[110px] size-16 animate-float [animation-delay:-3s]" />
          </div>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <li key={r.title} className={cn(i === 1 && "sm:mt-12", i === 2 && "sm:-mt-7", i === 3 && "sm:mt-5")}>
              <Reveal delay={i * 0.08} className="h-full">
                <article className="clay-deep group relative h-full rounded-[30px] p-7 transition-transform duration-500 ease-premium hover:-translate-y-1.5">
                  <span aria-hidden className="absolute right-6 top-6 font-display text-[34px] font-bold tracking-[-0.04em] text-ink/[0.06]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <IconBadge icon={r.icon} accent={r.accent} className="transition-transform duration-500 ease-premium group-hover:-rotate-6" />
                  <h3 className="mt-6 text-xl font-semibold leading-tight">{r.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{r.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

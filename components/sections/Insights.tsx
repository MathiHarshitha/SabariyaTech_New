import Image from "next/image";
import { insights } from "@/data/site";
import { accents } from "@/lib/accents";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2 } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

const fmt = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

function Meta({ date, readTime, light }: { date: string; readTime: string; light?: boolean }) {
  return (
    <p className={cn("flex items-center gap-2 text-[13px]", light ? "text-[#E3ECF8]/70" : "text-muted")}>
      <time dateTime={date}>{fmt.format(new Date(date))}</time>
      <span aria-hidden>·</span>
      {readTime}
    </p>
  );
}

/*
 * Articles are not published yet, so cards are not links. When a blog exists,
 * wrap each card in a link to its article page.
 */
export function Insights() {
  const [lead, ...rest] = insights;
  return (
    <section id="insights" aria-labelledby="insights-title" className="relative pb-24 md:pb-36">
      <div className="container-x">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Insights</Eyebrow>
            <H2 id="insights-title">
              Ideas, guides
              <br />
              and <span className="text-brand-orange">updates.</span>
            </H2>
          </div>
          <p className="max-w-[340px] text-[15px] text-muted">
            Notes from our work on AI, engineering and digital products. New articles are on the way.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <article className="group relative isolate flex min-h-[460px] items-end overflow-hidden rounded-[32px] shadow-lift lg:min-h-[560px]">
              <Image src={lead.image} alt={lead.alt} fill sizes="(min-width: 1024px) 56vw, 100vw" className="-z-10 object-cover transition-transform duration-1000 ease-premium group-hover:scale-[1.04]" />
              <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(7_26_53/0)_25%,rgb(7_26_53/0.92)_100%)]" />
              <div className="flex max-w-[600px] flex-col items-start gap-3.5 p-7 md:p-9">
                <span className={cn("rounded-full bg-gradient-to-br px-3 py-1 font-display text-[11.5px] font-semibold text-white", accents[lead.accent].badge)}>{lead.category}</span>
                <h3 className="text-[clamp(26px,2.6vw,36px)] font-semibold leading-[1.15] tracking-[-0.03em] text-white">{lead.title}</h3>
                <p className="text-[15.5px] text-[#E3ECF8]/80">{lead.excerpt}</p>
                <div className="flex w-full items-center justify-between gap-3 pt-2">
                  <Meta date={lead.date} readTime={lead.readTime} light />
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">Coming soon</span>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <Reveal key={post.title} delay={0.08 * (i + 1)} className="flex-1">
                <article className="group grid h-full overflow-hidden rounded-[28px] bg-white shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift sm:grid-cols-[44%_1fr]">
                  <div className="relative m-2 aspect-[16/9] overflow-hidden rounded-[22px] bg-gradient-to-br from-navy-700 to-brand-blue sm:aspect-auto">
                    <Image src={post.image} alt={post.alt} fill sizes="(min-width: 1024px) 18vw, (min-width: 640px) 40vw, 100vw" className="object-cover transition-transform duration-1000 ease-premium group-hover:scale-[1.05]" />
                  </div>
                  <div className="flex flex-col items-start gap-3 px-6 pb-6 pt-3 sm:py-6 sm:pl-3">
                    <span className={cn("rounded-full bg-gradient-to-br px-3 py-1 font-display text-[11.5px] font-semibold text-white", accents[post.accent].badge)}>{post.category}</span>
                    <h3 className="text-[19px] font-semibold leading-snug">{post.title}</h3>
                    <p className="text-sm text-muted">{post.excerpt}</p>
                    <div className="mt-auto flex w-full items-center justify-between gap-3 pt-1">
                      <Meta date={post.date} readTime={post.readTime} />
                      <span className="text-xs font-semibold text-brand-orange">Coming soon</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

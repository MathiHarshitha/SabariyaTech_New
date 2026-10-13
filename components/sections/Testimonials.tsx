import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { accents } from "@/lib/accents";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2 } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="relative isolate pb-24 pt-12 md:pb-32 md:pt-20">
      <SectionBackdrop variant="plane" />
      <div className="container-x">
        <Reveal className="mb-14 max-w-[640px]">
          <Eyebrow>Testimonials</Eyebrow>
          <H2 id="testimonials-title">
            Trusted by businesses
            <br />
            and <span className="text-brand-blue">institutions.</span>
          </H2>
        </Reveal>

        <ul className="grid items-center gap-6 md:grid-cols-2 lg:grid-cols-[1fr_1.1fr_1fr]">
          {testimonials.map((t, i) => {
            const feature = i === 1;
            return (
              <li key={t.org} className={cn(feature && "md:col-span-2 md:row-start-1 lg:col-span-1 lg:row-start-auto")}>
                <Reveal delay={i * 0.1}>
                  <figure
                    className={cn(
                      "relative flex flex-col gap-5 rounded-[28px] p-8",
                      feature
                        ? "bg-gradient-to-br from-navy-700 to-navy-900 py-11 text-white shadow-[0_40px_70px_-30px_rgb(7_26_53/0.6)]"
                        : "bg-white shadow-soft",
                    )}
                  >
                    {feature && <Quote aria-hidden className="absolute right-7 top-7 size-11 text-brand-orange/50" />}
                    <blockquote className={cn("text-base italic leading-relaxed", feature ? "text-[17.5px] text-[#E3ECF8]" : "text-ink")}>
                      {t.quote}
                    </blockquote>
                    <figcaption className={cn("flex items-center gap-3 border-t pt-4", feature ? "border-white/10" : "border-ink/[0.07]")}>
                      <span className={cn("grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br font-display text-[12.5px] font-bold text-white", accents[t.accent].badge)}>
                        {t.mono}
                      </span>
                      <span>
                        <b className={cn("block font-display text-[15px] font-semibold", feature ? "text-white" : "text-navy-900")}>{t.org}</b>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

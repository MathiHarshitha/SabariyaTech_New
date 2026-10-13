import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { accents } from "@/lib/accents";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2 } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

/*
 * PLACEHOLDER CONTENT — every quote below must be replaced with a real,
 * approved client testimonial before launch. Ratings are shown greyed out
 * until real ratings exist.
 */
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
                    <span className="absolute -top-3 left-7 rounded-full border border-dashed border-[#E7B84A] bg-[#FFF4D6] px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-[#8A5A00]">
                      Placeholder — replace
                    </span>
                    {feature && <Quote aria-hidden className="absolute right-7 top-7 size-11 text-brand-orange/50" />}
                    <div className="flex gap-0.5 text-[#D6DCE5]" aria-hidden>
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="size-[15px] fill-current" />
                      ))}
                    </div>
                    <blockquote className={cn("text-base italic leading-relaxed", feature ? "text-[17.5px] text-[#E3ECF8]" : "text-ink")}>
                      [{t.quote}]
                    </blockquote>
                    <figcaption className={cn("flex items-center gap-3 border-t pt-4", feature ? "border-white/10" : "border-ink/[0.07]")}>
                      <span className={cn("grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br font-display text-[12.5px] font-bold text-white", accents[t.accent].badge)}>
                        {t.mono}
                      </span>
                      <span>
                        <b className={cn("block font-display text-[15px] font-semibold", feature ? "text-white" : "text-navy-900")}>{t.name}</b>
                        <small className={cn("text-[13px]", feature ? "text-[#D6E2F3]/65" : "text-muted")}>{t.org}</small>
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

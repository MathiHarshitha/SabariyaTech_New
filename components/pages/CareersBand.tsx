import { Mail } from "lucide-react";
import { openings } from "@/data/pages";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/** Closing "we're hiring" card for the team and about pages. */
export function CareersBand() {
  return (
    <section aria-labelledby="careers-band-title" className="relative pb-24 pt-8 md:pb-32">
      <div className="container-x">
        <Reveal className="bg-navy-section relative isolate overflow-hidden rounded-[36px] px-6 py-12 text-white sm:px-12 md:py-16">
          <div aria-hidden className="absolute inset-0 -z-10">
            <div className="absolute -bottom-32 -left-24 size-[420px] rounded-full bg-brand-orange/20 blur-[110px]" />
            <div className="absolute -right-24 -top-32 size-[420px] rounded-full bg-brand-blue/25 blur-[110px]" />
          </div>
          <span aria-hidden className="sphere-orange absolute -right-6 -top-6 hidden size-28 animate-float md:block" />
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                <span className="relative flex size-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative size-2 rounded-full bg-emerald-400" />
                </span>
                We&apos;re hiring · {openings.length} open {openings.length === 1 ? "role" : "roles"}
              </p>
              <h2 id="careers-band-title" className="mt-4 text-[clamp(32px,4vw,54px)] font-bold leading-[1.04] tracking-[-0.035em] text-white">
                Want to build <span className="text-gradient-flow">what&apos;s next</span> with us?
              </h2>
              <p className="mt-4 max-w-[520px] text-[17px] text-[#D6E2F3]/75">
                Work on real client projects, own meaningful parts of the product and grow with a team that cares about clean engineering.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button href="/careers" size="lg">
                View careers
              </Button>
              <Button
                href={`mailto:${site.email}?subject=${encodeURIComponent("Job application")}`}
                size="lg"
                variant="glass"
                arrow={false}
                leading={<Mail aria-hidden className="ml-2 size-[18px]" />}
              >
                Send your CV
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

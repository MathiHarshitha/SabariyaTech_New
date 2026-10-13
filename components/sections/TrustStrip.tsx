import { clients } from "@/data/site";
import { accents } from "@/lib/accents";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

export function TrustStrip() {
  return (
    <section aria-label="Clients" className="relative z-[5] mt-8 lg:-mt-[110px]">
      <div className="container-x">
        <Reveal className="relative isolate overflow-hidden flex flex-col gap-4 rounded-[28px] bg-gradient-to-b from-white to-[#FAFBFC] p-5 shadow-[var(--shadow-clay),0_30px_60px_-30px_rgb(7_26_53/0.2)] xl:flex-row xl:items-center xl:gap-8 xl:py-5 xl:pl-8 xl:pr-5">
          <SectionBackdrop variant="sheen" />
          <p className="shrink-0 font-display text-[11.5px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-muted">
            Trusted by businesses,
            <br className="hidden xl:block" /> institutes and startups
          </p>
          <ul className="grid flex-1 grid-cols-1 gap-3 min-[400px]:grid-cols-2 lg:grid-cols-4">
            {clients.map((c) => (
              <li
                key={c.name}
                className="neu-inset flex items-center gap-3 rounded-[18px] px-3.5 py-3 transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-white hover:shadow-soft"
              >
                <span
                  aria-hidden
                  className={cn(
                    "grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br font-display text-xs font-bold tracking-tight text-white",
                    c.accent === "indigo" ? "from-navy-700 to-navy-900" : accents[c.accent].badge,
                  )}
                >
                  {c.mono}
                </span>
                <span className="min-w-0">
                  <b className="block font-display text-sm font-semibold leading-snug text-navy-900">{c.name}</b>
                  <small className="text-[11.5px] text-muted">{c.sector}</small>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

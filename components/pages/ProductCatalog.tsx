import { Check } from "lucide-react";
import { catalog, type CatalogId } from "@/data/pages";
import { site } from "@/data/site";
import { accents } from "@/lib/accents";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { AIEditorMockup, ComingSoonMockup, InstitutePortalMockup, LinkFixMockup } from "@/components/products/Mockups";
import { cn } from "@/lib/utils";

function Mockup({ id }: { id: CatalogId }) {
  if (id === "institute-portal") return <InstitutePortalMockup />;
  if (id === "linkfix") return <LinkFixMockup />;
  if (id === "ai-editor") return <AIEditorMockup />;
  return <ComingSoonMockup />;
}

const mail = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

/** Quick-jump tiles for the products page hero. */
export function CatalogTiles() {
  return (
    <ul className="grid grid-cols-2 gap-3">
      {catalog.map((p, i) => (
        <li key={p.id} className={cn(i % 2 === 1 && "translate-y-6")}>
          <a
            href={`#${p.id}`}
            style={{ ["--tint" as string]: accents[p.accent].tint }}
            className="clay group flex h-full flex-col gap-4 rounded-[24px] p-5 transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift"
          >
            <IconBadge icon={p.icon} accent={p.accent} size="sm" className="transition-transform duration-500 group-hover:-rotate-6" />
            <span>
              <b className="block font-display text-[17px] font-semibold text-navy-900">{p.name}</b>
              <small
                className={cn(
                  "mt-1.5 inline-block rounded-full px-2 py-0.5 text-[10.5px] font-semibold",
                  p.status === "Available" ? "bg-[#DDF6EC] text-[#0E8A5F]" : "bg-brand-amber/15 text-[#C26A00]",
                )}
              >
                {p.status}
              </small>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ProductCatalog() {
  return (
    <section id="catalog" aria-label="All products" className="relative scroll-mt-24 pb-28 pt-16 md:pb-40 md:pt-24">
      <div className="container-x flex flex-col gap-24 md:gap-36">
        {catalog.map((p, i) => (
          <article key={p.id} id={p.id} aria-labelledby={`${p.id}-title`} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className={cn("min-w-0", i % 2 === 1 && "lg:order-2")}>
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -inset-8 -z-10 rounded-full blur-3xl"
                  style={{ background: `radial-gradient(circle, ${accents[p.accent].glow}, transparent 70%)` }}
                />
                <div aria-hidden className="rounded-[28px] bg-gradient-to-br from-[#2A4268] to-[#0D2347] p-2.5 shadow-[0_40px_80px_-30px_rgb(7_26_53/0.55),inset_0_1px_0_rgb(255_255_255/0.15)] sm:p-3">
                  <div className="h-[380px] sm:h-[440px]">
                    <Mockup id={p.id} />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-center gap-3">
                <IconBadge icon={p.icon} accent={p.accent} />
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-[11px] font-semibold",
                    p.status === "Available" ? "bg-[#DDF6EC] text-[#0E8A5F]" : "bg-brand-amber/15 text-[#C26A00]",
                  )}
                >
                  {p.status}
                </span>
                {p.id === "institute-portal" && (
                  <span className="rounded-full bg-navy-900 px-2.5 py-1 text-[11px] font-semibold text-white">New</span>
                )}
                <span aria-hidden className="ml-auto font-display text-[44px] font-bold leading-none tracking-[-0.04em] text-ink/[0.07]">
                  0{i + 1}
                </span>
              </div>
              <h2 id={`${p.id}-title`} className="mt-6 text-[clamp(34px,3.8vw,52px)] font-bold leading-[1.04] tracking-[-0.035em]">
                {p.name}
              </h2>
              <p className={cn("mt-3 font-display text-lg font-semibold", accents[p.accent].text)}>{p.tagline}</p>
              <p className="mt-4 max-w-[540px] text-[16.5px] text-muted">{p.description}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[15px] font-medium text-navy-900">
                    <span className={cn("grid size-7 shrink-0 place-items-center rounded-[9px]", accents[p.accent].soft)}>
                      <Check aria-hidden className="size-4" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-7 rounded-2xl bg-white px-4 py-3 text-[14px] text-muted shadow-soft">
                <b className="font-display font-semibold text-navy-900">Built for</b> · {p.audience}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {p.status === "Available" ? (
                  <>
                    <Button href={mail(`${p.name} demo request`)}>Request a demo</Button>
                    <Button href="/contact" variant="soft">
                      Talk to us
                    </Button>
                  </>
                ) : (
                  <Button href={mail("Notify me about new SabariyaTech products")}>Get notified</Button>
                )}
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}

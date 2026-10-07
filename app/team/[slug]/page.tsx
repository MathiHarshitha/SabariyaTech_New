import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Mail, MapPin } from "lucide-react";
import { team } from "@/data/pages";
import { site } from "@/data/site";
import { accents } from "@/lib/accents";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/pages/PageHero";
import { MemberCard } from "@/components/pages/TeamGrid";
import { CareersBand } from "@/components/pages/CareersBand";
import { socialIcons } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2 } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const m = team.find((t) => t.slug === slug);
  if (!m) return {};
  return {
    title: `${m.name} — ${m.role}`,
    description: m.short,
    alternates: { canonical: `/team/${m.slug}` },
    openGraph: { images: [{ url: m.image, alt: `Portrait of ${m.name}` }] },
  };
}

export default async function MemberPage({ params }: Props) {
  const { slug } = await params;
  const m = team.find((t) => t.slug === slug);
  if (!m) notFound();

  const LinkedIn = socialIcons.LinkedIn;
  const others = team.filter((t) => t.slug !== m.slug).slice(0, 3);
  const [first, ...last] = m.name.split(" ");

  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Team", href: "/team" }, { label: m.name }]}
        title={
          <>
            {first}
            {last.length > 0 && (
              <>
                {" "}
                <span className="text-gradient-warm">{last.join(" ")}</span>
              </>
            )}
          </>
        }
        lead={m.about}
        actions={
          <>
            {m.linkedin && (
              <Button
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                arrow={false}
                leading={<LinkedIn className="ml-2 size-[18px]" />}
              >
                Connect on LinkedIn
              </Button>
            )}
            <Button
              href={`mailto:${site.email}?subject=${encodeURIComponent(`For ${m.name}`)}`}
              size="lg"
              variant={m.linkedin ? "soft" : "primary"}
              arrow={false}
              leading={<Mail aria-hidden className="ml-2 size-[18px]" />}
            >
              Get in touch
            </Button>
          </>
        }
        aside={
          <div className="relative mx-auto max-w-[460px]">
            <span aria-hidden className="absolute -inset-6 -z-10 rounded-full blur-3xl" style={{ background: `radial-gradient(circle, ${accents[m.accent].glow}, transparent 70%)` }} />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[36px_110px_36px_36px] bg-gradient-to-br from-navy-700 to-brand-blue shadow-[0_50px_100px_-40px_rgb(7_26_53/0.6)]">
              <Image src={m.image} alt={`Portrait of ${m.name}`} fill priority sizes="(min-width: 1024px) 460px, 100vw" className="object-cover object-top" />
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgb(7_26_53/0.55))]" />
            </div>
            <div className="glass absolute -bottom-5 left-5 right-5 flex items-center gap-3 rounded-[20px] p-3 sm:-left-6 sm:right-auto">
              <span className={cn("grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br font-display text-sm font-bold text-white", accents[m.accent].badge)}>
                {m.name
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              <span className="min-w-0 pr-2">
                <b className="block font-display text-[15px] font-semibold text-navy-900">{m.role}</b>
                <small className="flex items-center gap-1 text-[12px] text-muted">
                  <MapPin aria-hidden className="size-3" /> {site.city}, India · {site.name}
                </small>
              </span>
            </div>
          </div>
        }
      />

      <section aria-labelledby="skills-title" className="pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="container-x">
          <Reveal className="clay-deep grid gap-8 rounded-[32px] p-6 sm:p-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-14">
            <div>
              <Eyebrow>Expertise</Eyebrow>
              <H2 id="skills-title" className="text-[clamp(30px,3.2vw,44px)]">
                Skills &amp; <span className={accents[m.accent].text}>tools.</span>
              </H2>
              <p className="mt-4 text-[15.5px] text-muted">{m.short}</p>
            </div>
            <ul className="flex flex-wrap content-start gap-2.5">
              {m.skills.map((s, i) => (
                <li
                  key={s}
                  className={cn(
                    "rounded-full px-4 py-2 font-display text-[14px] font-semibold",
                    i < 3 ? cn("bg-gradient-to-br text-white", accents[m.accent].badge) : "bg-white text-navy-900 shadow-soft",
                  )}
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="more-team-title" className="pb-16 md:pb-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>The team</Eyebrow>
              <H2 id="more-team-title" className="text-[clamp(30px,3.2vw,44px)]">
                Meet more of <span className="text-brand-orange">us.</span>
              </H2>
            </div>
            <Button href="/team" variant="soft">
              Full team
            </Button>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o, i) => (
              <li key={o.slug}>
                <Reveal delay={i * 0.08} className="h-full">
                  <MemberCard m={o} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CareersBand />
    </PageShell>
  );
}

import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero, Swoosh } from "@/components/pages/PageHero";
import { ContactForm } from "@/components/pages/ContactForm";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow, H2, Lead } from "@/components/ui/Typography";
import { accents, type Accent } from "@/lib/accents";

export const metadata: Metadata = {
  title: "Contact",
  description: `Talk to SabariyaTech about your project. Call ${site.phone}, email ${site.email} or visit us at Benz Circle, Vijayawada.`,
  alternates: { canonical: "/contact" },
};

const channels: { label: string; value: string; note: string; href: string; icon: typeof Phone; accent: Accent; external?: boolean }[] = [
  { label: "Call us", value: site.phone, note: "Talk to the team directly", href: site.phoneHref, icon: Phone, accent: "orange" },
  { label: "Email us", value: site.email, note: "Send your brief anytime", href: `mailto:${site.email}`, icon: Mail, accent: "blue" },
  {
    label: "Visit us",
    value: "Benz Circle, Vijayawada",
    note: "Andhra Pradesh, India",
    href: "https://www.google.com/maps/search/?api=1&query=Benz+Circle+Vijayawada",
    icon: MapPin,
    accent: "cyan",
    external: true,
  },
];

const nextSteps = [
  { title: "We read your brief", body: "A real person reviews every message — no bots, no sales scripts." },
  { title: "A quick call", body: "We discuss goals, scope and timelines to understand what you need." },
  { title: "A clear proposal", body: "You get a plan with milestones and costs before any work begins." },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        title={
          <>
            Let&apos;s build something <Swoosh>great.</Swoosh>
          </>
        }
        lead="Have an idea, a problem to solve or a product to grow? Tell us about it — we'll help you turn it into reality."
        actions={
          <ul className="flex w-full flex-col gap-3">
            {channels.slice(0, 2).map((c) => (
              <li key={c.label}>
                <a href={c.href} className="group inline-flex items-center gap-3 font-display text-[17px] font-semibold text-navy-900 transition-colors hover:text-brand-orange">
                  <span className={`grid size-10 place-items-center rounded-full ${accents[c.accent].soft}`}>
                    <c.icon aria-hidden className="size-[18px]" />
                  </span>
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
        }
        aside={<ContactForm />}
      />

      <section aria-label="Ways to reach us" className="pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="container-x">
          <ul className="grid gap-5 md:grid-cols-3">
            {channels.map((c, i) => (
              <li key={c.label}>
                <Reveal delay={i * 0.08} className="h-full">
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    style={{ ["--tint" as string]: accents[c.accent].tint }}
                    className="clay group flex h-full flex-col rounded-[28px] p-7 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-lift"
                  >
                    <IconBadge icon={c.icon} accent={c.accent} className="transition-transform duration-500 group-hover:-rotate-6" />
                    <span className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted">{c.label}</span>
                    <b className="mt-1.5 break-words font-display text-[21px] font-semibold text-navy-900">{c.value}</b>
                    <span className="mt-1 text-[14.5px] text-muted">{c.note}</span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="visit-title" className="pb-24 md:pb-32">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow>What happens next</Eyebrow>
            <H2 id="visit-title">
              From hello to <span className="text-brand-orange">kick-off.</span>
            </H2>
            <Lead>No long forms or waiting games. Here&apos;s how it works after you reach out.</Lead>
            <ol className="mt-9 flex flex-col gap-5">
              {nextSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white font-display text-sm font-bold text-brand-orange shadow-clay">0{i + 1}</span>
                  <span>
                    <b className="block font-display text-lg font-semibold text-navy-900">{s.title}</b>
                    <span className="text-[15px] text-muted">{s.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-navy-section rounded-[32px] p-2.5 shadow-[0_50px_100px_-40px_rgb(7_26_53/0.6)] sm:p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-navy-800">
                <iframe
                  title={`Map showing ${site.name} at Benz Circle, Vijayawada`}
                  src="https://maps.google.com/maps?q=Benz%20Circle%2C%20Vijayawada&z=15&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 size-full border-0"
                />
              </div>
              <p className="flex items-center gap-2 px-3 pb-1.5 pt-3.5 text-[14px] text-white/75">
                <MapPin aria-hidden className="size-4 text-brand-amber" /> {site.address}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, CornerDownLeft, Mail, Phone } from "lucide-react";
import { ctaChecklist, projectTypes, site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

const MARQUEE = ["Web Platforms", "AI Agents", "Business Systems", "Cloud", "SaaS Products", "Digital Growth"];

const field =
  "w-full rounded-[14px] border-0 bg-canvas px-4 text-[15px] text-ink ring-1 ring-ink/[0.06] outline-none transition placeholder:text-muted/70 focus:bg-white focus:ring-2 focus:ring-brand-blue";

function Step({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <span className="mb-1.5 flex items-center gap-2 text-[12.5px] font-semibold text-navy-900">
      <span className="grid size-5 place-items-center rounded-md bg-navy-900 font-display text-[10px] font-bold text-white">{n}</span>
      {children}
    </span>
  );
}

/**
 * Closing call-to-action shared by every page.
 * There is no backend yet, so the brief form composes an email in the
 * visitor's mail app. Swap `onSubmit` for an API route when one exists.
 */
export function FinalCTA() {
  const [type, setType] = useState(projectTypes[0]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const subject = `New project: ${type}${name ? ` — ${name}` : ""}`;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [`Project type: ${type}`];
    if (name) lines.push(`Name: ${name}`);
    lines.push("", message);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative scroll-mt-20 pb-12 pt-6 md:pb-16 md:pt-8">
      <div className="container-x">
        <Reveal className="relative isolate overflow-hidden rounded-[28px] bg-navy-950 text-white shadow-[0_50px_100px_-50px_rgb(7_26_53/0.75)] md:rounded-[36px]">
          {/* light, not lines: two brand glows and a soft dot field */}
          <SectionBackdrop variant="magnet">
            <div className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.07)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />
          </SectionBackdrop>

          {/* kinetic word band */}
          <div aria-hidden className="overflow-hidden border-b border-white/[0.08] py-2.5 md:py-3">
            <div className="flex w-max animate-marquee items-center">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center">
                  {MARQUEE.map((w, i) => (
                    <span key={w} className="flex items-center">
                      <span
                        className={cn(
                          "whitespace-nowrap px-4 font-display text-[clamp(18px,2vw,26px)] font-extrabold leading-none tracking-[-0.035em]",
                          i % 2 === 0 ? "text-white" : "text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.45)]",
                        )}
                      >
                        {w}
                      </span>
                      <span className="text-[clamp(12px,1.2vw,16px)] text-brand-orange">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="grid items-center gap-7 p-5 sm:p-7 lg:grid-cols-[1fr_1.15fr] lg:gap-12 lg:px-10 lg:py-8">
            {/* pitch */}
            <div className="flex flex-col">
              <Eyebrow light className="mb-3 text-[10.5px]">Let&apos;s talk</Eyebrow>
              <h2 id="contact-title" className="text-[clamp(26px,2.7vw,36px)] font-extrabold leading-[1.05] tracking-[-0.035em] text-white">
                Have something
                <br />
                worth <span className="text-gradient-flow">building?</span>
              </h2>
              <p className="mt-3 max-w-[440px] text-[14.5px] leading-relaxed text-[#E3ECF8]/75">
                Tell us what you&apos;re working on. We&apos;ll help you turn it into reality — from first sketch to launch and beyond.
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {ctaChecklist.map((c) => (
                  <li key={c} className="flex items-center gap-1.5 rounded-full bg-white/[0.07] py-1 pl-1 pr-2.5 text-[12px] font-medium text-white/85 ring-1 ring-white/10">
                    <span className="grid size-[18px] place-items-center rounded-full bg-gradient-to-br from-brand-amber to-brand-orange">
                      <Check aria-hidden className="size-2.5" strokeWidth={3.5} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 grid gap-x-6 sm:grid-cols-2">
                {[
                  { label: "Email us", value: site.email, href: `mailto:${site.email}`, icon: Mail },
                  { label: "Call us", value: site.phone, href: site.phoneHref, icon: Phone },
                ].map((c) => (
                  <li key={c.label}>
                    <a href={c.href} className="group flex items-center gap-3 border-t border-white/10 py-2.5 transition-colors hover:text-brand-amber">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/[0.08] transition-colors group-hover:bg-brand-orange group-hover:text-white">
                        <c.icon aria-hidden className="size-4" />
                      </span>
                      <span className="min-w-0">
                        <small className="block text-[10.5px] uppercase tracking-[0.18em] text-white/45">{c.label}</small>
                        <b className="block truncate font-display text-[14px] font-semibold">{c.value}</b>
                      </span>
                      <ArrowUpRight aria-hidden className="ml-auto size-4 shrink-0 text-white/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-amber" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* brief builder */}
            <form id="brief" onSubmit={onSubmit} aria-label="Project brief" className="scroll-mt-28 self-start rounded-[24px] bg-white p-1.5 text-ink shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] lg:rotate-[0.6deg]">
              <div className="flex items-center gap-3 rounded-[19px] bg-canvas px-3.5 py-2.5">
                <span aria-hidden className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-brand-orange/70" />
                  <span className="size-2.5 rounded-full bg-brand-amber/70" />
                  <span className="size-2.5 rounded-full bg-emerald-400/80" />
                </span>
                <span aria-hidden className="font-mono text-[12.5px] font-medium text-navy-700">
                  new-project.brief
                </span>
                <span className="ml-auto rounded-full bg-brand-orange/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-orange">Draft</span>
              </div>

              <div className="p-3.5 sm:p-4">
                <fieldset>
                  <legend>
                    <Step n="01">What do you need?</Step>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((p) => (
                      <label
                        key={p}
                        className={cn(
                          "cursor-pointer rounded-full px-3 py-1 text-[12.5px] font-medium transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand-blue",
                          type === p ? "bg-navy-900 text-white" : "bg-canvas text-navy-900 ring-1 ring-ink/[0.06] hover:ring-brand-orange",
                        )}
                      >
                        <input type="radio" name="type" value={p} checked={type === p} onChange={() => setType(p)} className="sr-only" />
                        {p}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-3.5 grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
                  <label className="block">
                    <Step n="02">Your name</Step>
                    <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={cn(field, "h-10")} placeholder="Your full name" />
                  </label>
                  <label className="block">
                    <Step n="03">What are you building?</Step>
                    <input value={message} onChange={(e) => setMessage(e.target.value)} required className={cn(field, "h-10")} placeholder="Your idea, goals and timeline" />
                  </label>
                </div>

                <p className="mt-3 truncate rounded-lg bg-navy-900/[0.04] px-3 py-1.5 font-mono text-[11px] text-muted" aria-live="polite">
                  <span className="text-navy-700">subject:</span> {subject}
                </p>

                <button
                  type="submit"
                  className="group mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-[14px] bg-[linear-gradient(100deg,var(--color-brand-orange)_0%,var(--color-brand-orange)_45%,var(--color-brand-blue)_100%)] bg-[length:200%_100%] font-display text-[14px] font-semibold text-white shadow-cta transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-[position:100%_0]"
                >
                  Send brief
                  <ArrowRight aria-hidden className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" />
                  <kbd className="ml-1 hidden items-center gap-1 rounded-md bg-white/20 px-1.5 py-0.5 font-sans text-[11px] font-medium sm:inline-flex">
                    <CornerDownLeft aria-hidden className="size-3" /> opens your email
                  </kbd>
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail } from "lucide-react";
import { ctaChecklist, projectTypes, site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Curve } from "@/components/ui/Curve";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Typography";
import { cn, EASE } from "@/lib/utils";

/**
 * There is no backend yet, so the brief form composes an email in the
 * visitor's mail app. Swap `onSubmit` for an API route when one exists.
 */
export function FinalCTA() {
  const [type, setType] = useState(projectTypes[0]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `New project: ${type}${name ? ` — ${name}` : ""}`;
    const lines = [`Project type: ${type}`];
    if (name) lines.push(`Name: ${name}`);
    lines.push("", message);
    const body = lines.join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden bg-navy-900 pb-24 pt-36 text-white md:pb-36 md:pt-[220px]">
      <Curve variant="into-dark-c" position="top" lineClass="stroke-transparent" className="z-[2]" />
      <div aria-hidden className="absolute inset-0 -z-20">
        <Image src="/images/cta-peaks.jpg" alt="" fill sizes="100vw" className="object-cover object-[center_60%]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(7_26_53/0.94)_0%,rgb(7_26_53/0.75)_45%,rgb(7_26_53/0.4)_100%),linear-gradient(0deg,rgb(7_26_53/0.9),transparent_40%)]" />
      </div>
      <svg aria-hidden viewBox="0 0 1440 600" preserveAspectRatio="none" className="absolute inset-0 -z-10 size-full">
        <motion.path
          d="M-20 470 C 240 380 380 520 640 430 S 1040 200 1460 260"
          fill="none"
          stroke="rgb(255 157 24 / 0.75)"
          strokeWidth={2.5}
          vectorEffect="non-scaling-stroke"
          className="drop-shadow-[0_0_8px_rgb(255_106_0/0.6)]"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: EASE }}
        />
        <path d="M-20 500 C 260 410 400 550 660 460 S 1060 230 1460 290" fill="none" stroke="rgb(17 189 235 / 0.55)" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="container-x relative z-[3] grid items-center gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:gap-16">
        <Reveal>
          <Eyebrow light>Let&apos;s talk</Eyebrow>
          <h2 id="contact-title" className="text-[clamp(44px,6.2vw,84px)] font-extrabold leading-none tracking-[-0.04em] text-white">
            Have something
            <br />
            worth <span className="text-gradient-flow">building?</span>
          </h2>
          <p className="mt-6 max-w-[480px] text-lg text-[#E3ECF8]/80">Tell us what you&apos;re working on. We&apos;ll help you turn it into reality.</p>
          <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
            <Button href="#brief" size="lg">
              Start a Conversation
            </Button>
            <Button href={`mailto:${site.email}`} size="lg" variant="glass" arrow={false} leading={<Mail aria-hidden className="ml-2 size-[18px]" />}>
              {site.email}
            </Button>
          </div>
          <ul className="mt-10 grid max-w-[480px] grid-cols-2 gap-x-6 gap-y-3">
            {ctaChecklist.map((c) => (
              <li key={c} className="flex items-center gap-3 font-display text-[15px] font-semibold text-white/90">
                <span className="grid size-7 shrink-0 place-items-center rounded-[9px] bg-gradient-to-br from-brand-amber to-brand-orange shadow-[0_6px_12px_-6px_#FF6A00]">
                  <Check aria-hidden className="size-[15px]" strokeWidth={3} />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <form id="brief" onSubmit={onSubmit} className="glass rounded-[28px] p-6 text-ink sm:p-8 lg:-rotate-1" aria-labelledby="brief-title">
            <h3 id="brief-title" className="text-xl font-semibold">
              Tell us about your project
            </h3>
            <p className="mt-1 text-sm text-muted">This opens a pre-filled email to {site.email}.</p>

            <fieldset className="mt-6">
              <legend className="mb-2.5 text-[13px] font-semibold text-navy-900">What do you need?</legend>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((p) => (
                  <label
                    key={p}
                    className={cn(
                      "cursor-pointer rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand-blue",
                      type === p ? "bg-navy-900 text-white" : "bg-white text-navy-900 ring-1 ring-ink/10 hover:ring-brand-orange",
                    )}
                  >
                    <input type="radio" name="type" value={p} checked={type === p} onChange={() => setType(p)} className="sr-only" />
                    {p}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="mt-5 block">
              <span className="mb-1.5 block text-[13px] font-semibold text-navy-900">Your name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="h-12 w-full rounded-[14px] border-0 bg-white px-4 text-[15px] text-ink shadow-[inset_0_1px_3px_rgb(16_33_61/0.08)] ring-1 ring-ink/10 outline-none transition focus:ring-2 focus:ring-brand-blue"
                placeholder="Jane from Acme"
              />
            </label>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-[13px] font-semibold text-navy-900">What are you building?</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full resize-none rounded-[14px] border-0 bg-white px-4 py-3 text-[15px] text-ink shadow-[inset_0_1px_3px_rgb(16_33_61/0.08)] ring-1 ring-ink/10 outline-none transition focus:ring-2 focus:ring-brand-blue"
                placeholder="A few lines about your idea, goals and timeline"
              />
            </label>
            <button
              type="submit"
              className="group mt-5 inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-2xl bg-[linear-gradient(100deg,var(--color-brand-orange)_0%,var(--color-brand-orange)_45%,var(--color-brand-red)_100%)] bg-[length:200%_100%] font-display text-[15px] font-semibold text-white shadow-cta transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-[position:100%_0]"
            >
              Send brief
              <ArrowRight aria-hidden className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

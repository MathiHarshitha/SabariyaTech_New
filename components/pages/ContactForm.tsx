"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { projectTypes, site } from "@/data/site";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-[14px] border-0 bg-white px-4 text-[15px] text-ink shadow-[inset_0_1px_3px_rgb(16_33_61/0.08)] ring-1 ring-ink/10 outline-none transition focus:ring-2 focus:ring-brand-blue";

/**
 * No backend yet, so the form composes an email in the visitor's mail app.
 * Swap `onSubmit` for an API route when one exists.
 */
export function ContactForm() {
  const [type, setType] = useState(projectTypes[0]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const lines = [
      `Project type: ${type}`,
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
      data.get("phone") ? `Phone: ${data.get("phone")}` : "",
      "",
      String(data.get("message") ?? ""),
    ].filter((l, i) => l !== "" || i === 4);
    const subject = `New enquiry: ${type}${name ? ` — ${name}` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  return (
    <form onSubmit={onSubmit} aria-labelledby="contact-form-title" className="glass rounded-[28px] p-6 text-ink sm:p-8">
      <h2 id="contact-form-title" className="text-xl font-semibold">
        Tell us about your project
      </h2>
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

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-navy-900">Your name</span>
          <input name="name" required autoComplete="name" className={cn(field, "h-12")} placeholder="Your full name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-navy-900">Email</span>
          <input name="email" type="email" required autoComplete="email" className={cn(field, "h-12")} placeholder="you@company.com" />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-[13px] font-semibold text-navy-900">
          Phone <span className="font-normal text-muted">(optional)</span>
        </span>
        <input name="phone" type="tel" autoComplete="tel" className={cn(field, "h-12")} placeholder="+91" />
      </label>
      <label className="mt-4 block">
        <span className="mb-1.5 block text-[13px] font-semibold text-navy-900">What are you building?</span>
        <textarea name="message" required rows={4} className={cn(field, "resize-none py-3")} placeholder="A few lines about your idea, goals and timeline" />
      </label>
      <button
        type="submit"
        className="group mt-5 inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-2xl bg-[linear-gradient(100deg,var(--color-brand-orange)_0%,var(--color-brand-orange)_45%,var(--color-brand-red)_100%)] bg-[length:200%_100%] font-display text-[15px] font-semibold text-white shadow-cta transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-[position:100%_0]"
      >
        Send message
        <ArrowRight aria-hidden className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
}

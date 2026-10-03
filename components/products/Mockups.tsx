"use client";

import { motion } from "framer-motion";
import { FileText, Gauge, LayoutDashboard, Link2, Plus, Repeat2, Send, Settings, Sparkles } from "lucide-react";
import { cn, EASE } from "@/lib/utils";

/* Shared browser chrome */
function Chrome({ url, dark }: { url: string; dark?: boolean }) {
  return (
    <div className={cn("flex items-center gap-1.5 border-b px-3.5 py-2.5", dark ? "border-white/5 bg-white/[0.03]" : "border-ink/5 bg-white/80")}>
      <i className="size-2 rounded-full bg-[#FF8A70]" />
      <i className="size-2 rounded-full bg-[#FFC970]" />
      <i className="size-2 rounded-full bg-[#9BE3B0]" />
      <span className={cn("ml-3 flex-1 truncate rounded-md px-3 py-1 text-[11px]", dark ? "bg-white/5 text-white/45" : "bg-ink/5 text-muted")}>{url}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
export function LinkFixMockup() {
  const bars = [38, 52, 44, 66, 58, 78, 70, 92];
  const rows = [
    { path: "/blog/seo-guide", status: "404", tone: "bg-[#FDE4E0] text-brand-red", action: "Fix", done: false },
    { path: "/services/old-page", status: "301", tone: "bg-[#FFF1DB] text-[#C26A00]", action: "Done", done: true },
    { path: "/pricing", status: "200", tone: "bg-[#DDF6EC] text-[#0E8A5F]", action: "OK", done: true },
    { path: "/case-studies/lms", status: "200", tone: "bg-[#DDF6EC] text-[#0E8A5F]", action: "OK", done: true },
  ];
  const nav = [
    { icon: LayoutDashboard, label: "Dashboard", on: true },
    { icon: Link2, label: "Links" },
    { icon: Repeat2, label: "Redirects" },
    { icon: FileText, label: "Reports" },
    { icon: Settings, label: "Settings" },
  ];
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#F4F6FA] text-ink">
      <Chrome url="app.linkfix.io/dashboard" />
      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-[150px] shrink-0 flex-col gap-1 bg-navy-900 p-3 sm:flex">
          <div className="mb-3 flex items-center gap-2 px-1.5 font-display text-[13px] font-bold text-white">
            <span className="grid size-6 place-items-center rounded-md bg-brand-orange">
              <Link2 className="size-3.5" strokeWidth={2.5} />
            </span>
            LinkFix
          </div>
          {nav.map((n) => (
            <span key={n.label} className={cn("flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11.5px]", n.on ? "bg-white/10 text-white" : "text-white/55")}>
              <n.icon className={cn("size-3.5", n.on && "text-brand-cyan")} /> {n.label}
            </span>
          ))}
        </aside>
        <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
          <div className="flex items-center justify-between">
            <div>
              <b className="font-display text-[15px]">Site health</b>
              <p className="text-[10.5px] text-muted">Last scan · 2 minutes ago</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#DDF6EC] px-2 py-0.5 text-[10px] font-semibold text-[#0E8A5F]">Scan complete</span>
              <span className="rounded-lg bg-brand-orange px-2.5 py-1 text-[10.5px] font-semibold text-white">Run scan</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { k: "Links scanned", v: "12,480" },
              { k: "Broken", v: "37", red: true },
              { k: "Redirects", v: "214" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl bg-white p-2.5 shadow-[0_2px_6px_rgb(16_33_61/0.05)]">
                <small className="block truncate text-[10px] text-muted">{s.k}</small>
                <b className={cn("font-display text-lg", s.red && "text-brand-red")}>{s.v}</b>
              </div>
            ))}
          </div>
          <div className="relative flex h-[96px] items-end gap-2 rounded-xl bg-white p-3 pr-[88px]">
            {bars.map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.05 }}
                className={cn(
                  "flex-1 rounded-t-[4px] rounded-b-[1px] opacity-90",
                  i === bars.length - 1 ? "bg-gradient-to-b from-brand-amber to-brand-orange" : "bg-gradient-to-b from-brand-cyan to-brand-blue",
                )}
              />
            ))}
            <div className="absolute right-3 top-1/2 grid size-[64px] -translate-y-1/2 place-items-center">
              <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90">
                <circle cx="18" cy="18" r="15" fill="none" stroke="#E6ECF4" strokeWidth="3.5" />
                <motion.circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="#16B57F"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 0.96 }}
                  transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
                />
              </svg>
              <span className="text-center leading-none">
                <b className="font-display text-base">96</b>
                <small className="block text-[8px] text-muted">health</small>
              </span>
            </div>
          </div>
          <ul className="flex flex-col gap-1.5">
            {rows.map((r) => (
              <li key={r.path} className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-1.5 text-[10.5px]">
                <code className="min-w-0 flex-1 truncate font-mono text-navy-700">{r.path}</code>
                <span className={cn("rounded px-1.5 font-bold", r.tone)}>{r.status}</span>
                <span className={cn("w-10 rounded px-1.5 text-center font-semibold", r.done ? "bg-[#E8EDF4] text-muted" : "bg-brand-orange text-white")}>{r.action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
export function AIEditorMockup() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#F4F6FA] text-ink">
      <Chrome url="editor.sabariyatech.in/drafts/launch-post" />
      <div className="grid min-h-0 flex-1 grid-cols-1 sm:grid-cols-[1.4fr_1fr]">
        <div className="relative bg-white p-5">
          <div className="mb-4 flex items-center gap-2.5 border-b border-[#EEF1F6] pb-2.5 text-[11px] text-muted">
            <b className="text-ink">B</b>
            <i>I</i>
            <u>U</u>
            <span className="h-3 w-px bg-[#E1E6EE]" />
            <span className="font-semibold text-brand-blue">H2</span>
            <span>Quote</span>
            <span className="ml-auto flex items-center gap-1 rounded-md bg-brand-blue/10 px-2 py-0.5 font-semibold text-brand-blue">
              <Sparkles className="size-3" /> AI
            </span>
          </div>
          <h4 className="text-[17px] font-bold leading-tight">Launching our new booking experience</h4>
          <p className="mt-3 text-[11.5px] leading-relaxed text-muted">
            Planning a river trip should feel as calm as the trip itself. Today we&apos;re introducing a faster way to
            check availability and book in a few taps.
          </p>
          <p className="mt-2 text-[11.5px] leading-relaxed">
            <mark className="rounded bg-gradient-to-r from-brand-cyan/30 to-brand-blue/20 px-0.5 text-ink ring-2 ring-brand-cyan/15">
              Guests can now see live seat availability and pay securely without leaving the page.
            </mark>
          </p>
          <div className="mt-3 space-y-2">
            <p className="h-1.5 w-[92%] rounded bg-[#E9EDF3]" />
            <p className="h-1.5 w-[78%] rounded bg-[#E9EDF3]" />
            <p className="h-1.5 w-[60%] rounded bg-[#E9EDF3]" />
          </div>
          <span className="mt-2 inline-block h-3 w-[1.5px] animate-blink bg-brand-blue" />
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, ease: EASE }}
            className="absolute bottom-5 left-5 right-5 hidden items-center gap-2 rounded-xl border border-brand-blue/15 bg-white p-2.5 text-[10.5px] shadow-[0_12px_30px_-12px_rgb(8_120_232/0.4)] sm:flex"
          >
            <Sparkles className="size-3.5 shrink-0 text-brand-blue" />
            <span className="flex-1 text-muted">Suggestion: shorten to one sentence</span>
            <span className="rounded-md bg-brand-blue px-2 py-0.5 font-semibold text-white">Apply</span>
          </motion.div>
        </div>
        <div className="hidden flex-col gap-2.5 bg-gradient-to-b from-[#F0F6FF] to-[#F7F3FF] p-4 sm:flex">
          <div className="flex items-center gap-2.5">
            <span className="size-8 animate-float rounded-full bg-[radial-gradient(circle_at_35%_30%,#fff_0%,#9EE6FF_20%,#0878E8_60%,#4C3FE0_100%)] shadow-[0_6px_16px_-4px_rgb(8_120_232/0.6),0_0_0_5px_rgb(8_120_232/0.08)]" />
            <span>
              <b className="block font-display text-[12px]">Assistant</b>
              <small className="text-[10px] text-muted">Writing with you</small>
            </span>
          </div>
          <div className="self-end rounded-xl rounded-br-sm bg-navy-900 px-2.5 py-1.5 text-[10.5px] text-white">Make the intro more concise</div>
          <div className="rounded-xl rounded-bl-sm bg-white px-2.5 py-2 text-[10.5px] leading-snug shadow-[0_2px_6px_rgb(16_33_61/0.06)]">
            Rewrote 3 sentences and kept your tone. The intro is now 28 words shorter.
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Improve tone", "Outline", "SEO keywords", "Translate"].map((c) => (
              <span key={c} className="rounded-full border border-brand-blue/20 bg-white px-2 py-0.5 text-[9.5px] font-semibold text-brand-blue">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-auto flex items-center gap-2 rounded-xl bg-white p-2 text-[10.5px] text-muted shadow-[0_2px_6px_rgb(16_33_61/0.06)]">
            <span className="flex-1">Ask AI to…</span>
            <span className="grid size-6 place-items-center rounded-lg bg-brand-blue text-white">
              <Send className="size-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
export function ComingSoonMockup() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#0E1E3A] text-white">
      <Chrome url="labs.sabariyatech.in" dark />
      <div className="relative min-h-0 flex-1 p-5">
        <div className="grid h-full grid-cols-3 grid-rows-2 gap-3 opacity-70 blur-[2px]">
          <span className="col-span-1 row-span-2 rounded-xl border border-white/10 bg-gradient-to-b from-brand-blue/35 to-brand-cyan/5" />
          <span className="col-span-2 rounded-xl border border-white/10 bg-white/5" />
          <span className="rounded-xl border border-white/10 bg-gradient-to-br from-brand-orange/30 to-brand-red/5" />
          <span className="rounded-xl border border-white/10 bg-white/[0.04]" />
        </div>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-2xl border border-white/15 bg-navy-900/60 px-8 py-6 backdrop-blur-md">
          <Plus className="mb-1 size-6 text-brand-amber" />
          <b className="font-display text-lg">Coming soon</b>
          <small className="text-xs text-white/55">In development</small>
          <Gauge className="mt-3 size-4 text-brand-cyan" />
        </div>
      </div>
    </div>
  );
}

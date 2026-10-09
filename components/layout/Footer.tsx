import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Mail, MapPin, PhoneCall } from "lucide-react";
import { footerColumns, site, socials } from "@/data/site";
import { socialIcons } from "@/components/ui/BrandIcons";
import { Logo } from "@/components/ui/Logo";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-[17px] font-semibold text-white">
      {children}
      <span aria-hidden className="mt-3 block h-[2px] w-8 rounded-full bg-brand-blue" />
    </p>
  );
}

export function Footer() {
  const contact = [
    { icon: PhoneCall, label: site.phone, href: site.phoneHref },
    { icon: Mail, label: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Benz Circle, Vijayawada, Andhra Pradesh, India" },
  ];

  return (
    <footer className="relative isolate overflow-hidden bg-[#061936] pb-8 pt-20 text-[#D6E2F3]/80 md:pt-32">
      {/* ---------- backdrop: the logo mark, lit softly behind the links ---------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_0%,rgb(8_120_232/0.22),transparent_70%),radial-gradient(700px_420px_at_100%_100%,rgb(8_120_232/0.18),transparent_70%)]" />
        <div className="absolute left-1/2 top-[-6%] aspect-[780/800] w-[min(760px,120vw)] -translate-x-1/2 opacity-40 mix-blend-screen blur-[1.5px] md:left-[25%] md:top-[-13%] md:w-[38%] md:min-w-[520px] md:translate-x-0 md:opacity-55">
          <Image src="/brand/footer-mark.jpg" alt="" fill sizes="(min-width: 768px) 38vw, 120vw" className="object-contain" />
        </div>
        {/* soft wave bands echoing the logo's water */}
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[70%] w-full">
          <defs>
            <linearGradient id="footer-wave-a" x1="0" x2="1">
              <stop offset="0" stopColor="#0878E8" stopOpacity="0.28" />
              <stop offset="1" stopColor="#0878E8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="footer-wave-b" x1="1" x2="0">
              <stop offset="0" stopColor="#11BDEB" stopOpacity="0.22" />
              <stop offset="1" stopColor="#11BDEB" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 250 C 160 200 300 300 520 330 C 700 355 820 330 900 300 L 900 500 L 0 500Z" fill="url(#footer-wave-a)" />
          <path d="M1440 170 C 1340 260 1220 300 1080 330 C 980 350 900 380 860 420 L 860 500 L 1440 500Z" fill="url(#footer-wave-b)" />
        </svg>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(6_25_54/0.15)_0%,rgb(6_25_54/0.35)_60%,rgb(6_25_54/0.75)_100%)]" />
      </div>

      <div className="container-x">
        <div className="grid gap-0 pb-12 md:grid-cols-3 md:gap-10 md:pb-20 lg:grid-cols-[1.35fr_1fr_1.05fr_0.8fr_1.25fr] lg:gap-8">
          {/* brand */}
          <div className="mb-10 md:col-span-3 lg:col-span-1 lg:mb-0">
            <Link href="/" aria-label={`${site.name} home`} className="inline-block">
              <Logo size={60} className="brightness-0 invert" />
            </Link>
            <p className="mt-5 max-w-[270px] text-[16px] leading-relaxed text-[#D6E2F3]/85">{site.footerLine}</p>
            <ul className="mt-8 flex gap-3">
              {socials.map((s) => {
                const Icon = socialIcons[s.name];
                const cls = "grid size-12 place-items-center rounded-[14px] border border-white/20 bg-white/[0.04] text-white backdrop-blur-sm";
                return (
                  <li key={s.name}>
                    {s.href ? (
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.name}
                        className={`${cls} transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange hover:bg-brand-orange`}
                      >
                        <Icon className="size-5" />
                      </a>
                    ) : (
                      <span title={`${s.name} — coming soon`} className={cls}>
                        <Icon className="size-5" />
                        <span className="sr-only">{s.name} profile coming soon</span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* link columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="border-t border-white/[0.08] md:border-0">
              {/* mobile: accordion */}
              <details className="group md:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-display text-[16px] font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {col.title}
                  <ChevronDown aria-hidden className="size-4 text-brand-amber transition-transform group-open:rotate-180" />
                </summary>
                <ul className="flex flex-col gap-3 pb-5 text-[15px]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="transition-colors hover:text-brand-amber">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
              {/* desktop: open columns */}
              <div className="hidden md:block">
                <Heading>{col.title}</Heading>
                <ul className="mt-7 flex flex-col gap-3 text-[15.5px]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="transition-colors hover:text-brand-amber">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* contact */}
          <div className="border-t border-white/[0.08] pt-6 md:border-0 md:pt-0">
            <Heading>Get in Touch</Heading>
            <ul className="mt-7 flex flex-col gap-4 text-[15.5px]">
              {contact.map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <a href={c.href} className="flex items-center gap-3.5 transition-colors hover:text-brand-amber">
                      <c.icon aria-hidden className="size-5 shrink-0 text-brand-amber" />
                      {c.label}
                    </a>
                  ) : (
                    <p className="flex items-start gap-3.5 leading-snug">
                      <c.icon aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-amber" />
                      <span className="max-w-[240px]">{c.label}</span>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/[0.14] pt-7 text-[14px] md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          {/* TODO: link to real Privacy Policy and Terms pages once written */}
          <nav aria-label="Legal" className="flex items-center gap-5">
            <span>Privacy Policy</span>
            <span aria-hidden className="h-4 w-px bg-white/40" />
            <span>Terms</span>
            <span aria-hidden className="h-4 w-px bg-white/40" />
            <a href="/sitemap.xml" className="transition-colors hover:text-brand-amber">
              Sitemap
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

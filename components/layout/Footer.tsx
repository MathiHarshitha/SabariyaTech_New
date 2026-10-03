import { ChevronDown } from "lucide-react";
import { footerColumns, site, socials } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { socialIcons } from "@/components/ui/BrandIcons";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-900 pb-7 pt-16 text-[#D6E2F3]/70 md:pt-20">
      <div className="container-x">
        <div className="grid gap-0 pb-12 md:grid-cols-3 md:gap-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div className="mb-8 md:col-span-3 lg:col-span-1 lg:mb-0">
            <a href="#home" aria-label={`${site.name} home`}>
              <Logo />
            </a>
            <p className="mt-5 max-w-[240px] text-[15px] leading-relaxed">{site.footerLine}</p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="border-t border-white/[0.08] md:border-0">
              {/* mobile: accordion */}
              <details className="group md:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-display text-[15px] font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {col.title}
                  <ChevronDown aria-hidden className="size-4 text-brand-amber transition-transform group-open:rotate-180" />
                </summary>
                <ul className="flex flex-col gap-2.5 pb-5 text-[14.5px]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="transition-colors hover:text-brand-amber">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
              {/* desktop: open columns */}
              <div className="hidden md:block">
                <p className="mb-5 font-display text-[15px] font-semibold text-white">{col.title}</p>
                <ul className="flex flex-col gap-2.5 text-[14.5px]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="transition-colors hover:text-brand-amber">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="border-t border-white/[0.08] pt-6 md:border-0 md:pt-0">
            <p className="mb-5 font-display text-[15px] font-semibold text-white">Follow Us</p>
            <ul className="flex gap-2.5">
              {socials.map((s) => {
                const Icon = socialIcons[s.name];
                const cls = "grid size-[42px] place-items-center rounded-[13px] bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.06)]";
                return (
                  <li key={s.name}>
                    {s.href ? (
                      <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className={`${cls} transition-all duration-300 hover:-translate-y-1 hover:bg-brand-orange`}>
                        <Icon className="size-[18px]" />
                      </a>
                    ) : (
                      <span title={`${s.name} — coming soon`} className={`${cls} opacity-50`}>
                        <Icon className="size-[18px]" />
                        <span className="sr-only">{s.name} profile coming soon</span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
            <a href={`mailto:${site.email}`} className="mt-5 inline-block text-[14.5px] transition-colors hover:text-brand-amber">
              {site.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/[0.08] pt-6 text-[13.5px] md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          {/* TODO: link to real Privacy Policy and Terms pages once written */}
          <nav aria-label="Legal" className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <a href="/sitemap.xml" className="transition-colors hover:text-brand-amber">
              Sitemap
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

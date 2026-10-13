"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn, EASE } from "@/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  // "/team/posibabu-yalla" still highlights "Team".
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

  // Lock scroll, move focus and support Escape while the menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const trigger = menuBtnRef.current;
    return () => {
      document.documentElement.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-[clamp(12px,3vw,40px)] pt-2.5">
        <div
          className={cn(
            "mx-auto flex max-w-[1300px] items-center justify-between gap-6 rounded-[22px] border border-transparent pl-4 pr-3 transition-all duration-500 ease-premium",
            scrolled
              ? "h-[62px] border-white/70 bg-white/80 shadow-[0_10px_30px_-14px_rgb(7_26_53/0.25)] backdrop-blur-xl backdrop-saturate-150"
              : "h-[72px]",
          )}
        >
          <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
            <Logo size={65} priority />
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex gap-0.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className="relative block rounded-[10px] px-3 py-2 text-[14.5px] font-medium text-navy-900 transition-colors hover:text-brand-orange 2xl:px-4"
                  >
                    {l.label}
                    {isActive(l.href) && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-0 bottom-0 mx-auto h-[2.5px] w-[18px] rounded-full bg-brand-orange"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/contact" size="sm" className="hidden sm:inline-flex">
              Let&apos;s Build
            </Button>
            <button
              ref={menuBtnRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="site-menu"
              className="grid size-11 place-items-center rounded-full bg-white text-navy-900 shadow-clay transition-transform duration-300 ease-premium hover:rotate-90"
            >
              <Menu aria-hidden className="size-[18px]" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-navy-900/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <motion.div
              id="site-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="absolute inset-y-3 right-3 flex w-[min(420px,calc(100%-24px))] flex-col rounded-[28px] bg-canvas px-6 pb-6 pt-5 shadow-[0_30px_80px_-20px_rgb(7_26_53/0.5)]"
            >
              <div className="flex items-center justify-between">
                <Logo size={44} />
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid size-11 place-items-center rounded-full bg-white text-navy-900 shadow-clay"
                >
                  <X aria-hidden className="size-[18px]" />
                </button>
              </div>
              <nav aria-label="Menu" className="mt-9">
                <ul>
                  {navLinks.map((l, i) => (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.04, duration: 0.4, ease: EASE }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(l.href) ? "page" : undefined}
                        className={cn(
                          "block border-b border-ink/[0.07] py-1.5 font-display text-[26px] font-semibold tracking-[-0.03em] transition-all duration-300 hover:pl-2 hover:text-brand-orange",
                          isActive(l.href) ? "text-brand-orange" : "text-navy-900",
                        )}
                      >
                        {l.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="mt-auto flex flex-col gap-4 pt-8">
                <Button href="/contact" onClick={() => setOpen(false)}>
                  Start a Project
                </Button>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 font-medium text-muted hover:text-navy-900">
                  <Mail aria-hidden className="size-[18px]" /> {site.email}
                </a>
                <a href={site.phoneHref} className="-mt-2 flex items-center gap-2.5 font-medium text-muted hover:text-navy-900">
                  <Phone aria-hidden className="size-[18px]" /> {site.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled || open ? "border-b border-night-100 bg-white/90 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href) ? "bg-night-900 text-white" : "text-night-700 hover:bg-night-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="text-sm font-medium text-night-600 hover:text-night-900">
            {site.phone}
          </a>
          <Link
            href="/contact/"
            className="rounded-full bg-sun-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-sun-500/30 transition hover:bg-sun-600"
          >
            Free quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-night-800 hover:bg-night-50 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-night-100 bg-white px-4 pb-5 pt-2 md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-xl px-4 py-3 text-base font-medium ${
                isActive(item.href) ? "bg-night-50 text-night-900" : "text-night-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact/" className="mt-3 block rounded-full bg-sun-500 px-5 py-3 text-center font-semibold text-white">
            Get a free quote
          </Link>
        </nav>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { FontSizeControl } from "@/components/font-size-control";
import { ThemeToggle } from "@/components/theme-toggle";
import { TransliterationToggle } from "@/components/transliteration-toggle";
import type { JourneyLink } from "@/lib/types";

type MobileNavProps = {
  links: Array<{ href: string; label: string }>;
  featuredLinks: JourneyLink[];
};

export function MobileNav({ links, featuredLinks }: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--foreground)]"
        aria-expanded={open}
        aria-label="Open navigation"
      >
        <span>{open ? "Close" : "Menu"}</span>
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-full z-50 mt-3 rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.14)]">
          <nav className="grid gap-2">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    active
                      ? "bg-[var(--accent-soft)] text-[var(--foreground)]"
                      : "text-[var(--muted)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 grid gap-3 rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-4">
            <p className="eyebrow">Reading controls</p>
            <div className="flex flex-wrap gap-2">
              <ThemeToggle />
              <TransliterationToggle />
              <FontSizeControl />
            </div>
          </div>

          <div className="mt-4 space-y-3 rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-4">
            <p className="eyebrow">Guided journey</p>
            {featuredLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-3"
              >
                <p className="text-sm font-medium text-[var(--foreground)]">{link.title}</p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

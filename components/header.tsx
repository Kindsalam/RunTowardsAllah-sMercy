import Link from "next/link";

import { FontSizeControl } from "@/components/font-size-control";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { TransliterationToggle } from "@/components/transliteration-toggle";
import { journeyLinks, siteLinks } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[var(--background)] backdrop-blur-xl">
      <div className="page-shell relative flex min-h-20 items-center justify-between gap-4 py-4">
        <Link href="/" className="min-w-0">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--surface)] text-sm font-semibold text-[var(--brand)]">
              ر
            </div>
            <div>
              <p className="font-display text-2xl leading-none text-[var(--foreground)]">
                Run Towards Allah&apos;s Mercy
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                Ramadan reflection companion
              </p>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {siteLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <TransliterationToggle />
          <FontSizeControl />
        </div>

        <MobileNav links={siteLinks} featuredLinks={journeyLinks} />
      </div>
    </header>
  );
}

"use client";

import { useSiteSettings } from "@/components/site-settings-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useSiteSettings();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
      aria-label="Toggle dark mode"
    >
      <span className="text-base leading-none">{theme === "dark" ? "☾" : "☼"}</span>
      <span className="text-xs uppercase tracking-[0.2em]">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}

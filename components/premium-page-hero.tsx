import type { ReactNode } from "react";

type PremiumPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
};

type PremiumHeroPanelProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  items?: string[];
  tone?: "light" | "dark";
  children?: ReactNode;
};

export function PremiumPageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
}: PremiumPageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_84%,rgba(201,171,103,0.12)_16%),var(--surface))] px-5 py-5 shadow-[0_24px_90px_rgba(8,24,19,0.08)] sm:px-8 sm:py-6 lg:px-10 lg:py-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,171,103,0.18)_0%,_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(16,77,57,0.09)_0%,_transparent_36%)]" />
      <div
        className={`relative grid gap-6 ${
          aside ? "lg:grid-cols-[1.05fr_0.95fr] lg:items-center" : ""
        }`}
      >
        <div className="max-w-[42rem] space-y-3.5">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display text-4xl leading-[0.96] text-[var(--foreground)] sm:text-[3.3rem] lg:text-[4.15rem]">
            {title}
          </h1>
          <p className="reading-copy max-w-xl text-[var(--muted)]">
            {description}
          </p>
          {actions ? (
            <div className="flex flex-col gap-2.5 sm:flex-row">{actions}</div>
          ) : null}
        </div>
        {aside ? <div className="grid gap-3.5 sm:grid-cols-2">{aside}</div> : null}
      </div>
    </section>
  );
}

export function PremiumHeroPanel({
  eyebrow,
  title,
  description,
  items,
  tone = "light",
  children,
}: PremiumHeroPanelProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={
        isDark
          ? "rounded-[24px] border border-[var(--border-soft)] bg-[linear-gradient(160deg,rgba(8,20,15,0.96)_0%,rgba(16,46,36,0.94)_100%)] p-5 text-white shadow-[0_18px_60px_rgba(8,24,19,0.12)] sm:p-6"
          : "rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)]/95 p-4 shadow-[0_18px_60px_rgba(8,24,19,0.06)]"
      }
    >
      <div className="space-y-2.5">
        <p className={isDark ? "eyebrow text-white/70" : "eyebrow"}>{eyebrow}</p>
        {title ? (
          <h2
            className={
              isDark
                ? "text-lg font-semibold text-white"
                : "text-lg font-semibold text-[var(--foreground)]"
            }
          >
            {title}
          </h2>
        ) : null}
        {description ? (
          <p className={isDark ? "reading-copy text-white/86" : "reading-copy text-[var(--muted)]"}>
            {description}
          </p>
        ) : null}
        {items ? (
          <div className="space-y-2.5">
            {items.map((item) => (
              <p
                key={item}
                className={isDark ? "reading-copy text-white/88" : "reading-copy text-[var(--foreground)]"}
              >
                {item}
              </p>
            ))}
          </div>
        ) : null}
        {children ? <div className="space-y-2.5">{children}</div> : null}
      </div>
    </div>
  );
}

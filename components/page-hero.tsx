import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: PageHeroProps) {
  return (
    <section className="border-b border-[var(--border-soft)] pb-6 pt-1 sm:pb-7">
      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="max-w-[42rem] space-y-3.5">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display text-4xl leading-[0.96] text-[var(--foreground)] sm:text-[3.2rem] lg:text-[4rem]">
            {title}
          </h1>
          <p className="reading-copy max-w-xl text-[var(--muted)]">
            {description}
          </p>
        </div>
        {aside ? <div className="max-w-md lg:justify-self-end">{aside}</div> : null}
      </div>
    </section>
  );
}

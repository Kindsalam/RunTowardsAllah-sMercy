import Link from "next/link";

import { CategoryCard } from "@/components/category-card";
import {
  PremiumHeroPanel,
  PremiumPageHero,
} from "@/components/premium-page-hero";
import type { JourneyLink } from "@/lib/types";

type SectionDirectoryPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: JourneyLink[];
  guidanceTitle: string;
  guidanceText: string;
  relatedLinks?: Array<{ href: string; label: string }>;
};

export function SectionDirectoryPage({
  eyebrow,
  title,
  description,
  cards,
  guidanceTitle,
  guidanceText,
  relatedLinks = [],
}: SectionDirectoryPageProps) {
  const primaryCard = cards[0];
  const secondaryLink = relatedLinks[0];

  return (
    <div className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <PremiumPageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        actions={
          primaryCard ? (
            <>
              <Link href={primaryCard.href} className="button-primary">
                {primaryCard.buttonLabel}
              </Link>
              {secondaryLink ? (
                <Link href={secondaryLink.href} className="button-secondary">
                  {secondaryLink.label}
                </Link>
              ) : null}
            </>
          ) : undefined
        }
        aside={
          <>
            <PremiumHeroPanel
              eyebrow="Included here"
              title="Sections to keep close"
              items={cards.map((card) => card.title)}
              description="Start with the sections you return to most often, then build consistency around them."
            />
            <PremiumHeroPanel
              eyebrow="How to begin"
              title={guidanceTitle}
              description={guidanceText}
              tone="dark"
            />
          </>
        }
      />

      <section className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <CategoryCard key={card.href} {...card} />
        ))}
      </section>

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.07)] sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">How to use this section</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            {guidanceTitle}
          </h2>
          <p className="reading-copy text-[var(--muted)]">{guidanceText}</p>
        </div>
        {relatedLinks.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-[var(--border-soft)] bg-[var(--background)] px-4 py-2 text-sm text-[var(--foreground)] transition hover:border-[var(--border-strong)] hover:text-[var(--brand)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}

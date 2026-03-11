import Link from "next/link";

import { CategoryCard } from "@/components/category-card";
import {
  PremiumHeroPanel,
  PremiumPageHero,
} from "@/components/premium-page-hero";
import type { JourneyLink } from "@/lib/types";

type TopicPlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  introTitle: string;
  introText: string;
  relatedCards: JourneyLink[];
};

export function TopicPlaceholderPage({
  eyebrow,
  title,
  description,
  introTitle,
  introText,
  relatedCards,
}: TopicPlaceholderPageProps) {
  const primaryCard = relatedCards[0];
  const secondaryCard = relatedCards[1];

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
              {secondaryCard ? (
                <Link href={secondaryCard.href} className="button-secondary">
                  {secondaryCard.buttonLabel}
                </Link>
              ) : null}
            </>
          ) : undefined
        }
        aside={
          <>
            <PremiumHeroPanel
              eyebrow="Coming soon"
              title="Prepared carefully, not rushed"
              description="This section is being expanded with the same calm structure, visible references, and lightweight reading flow used elsewhere on the site."
            />
            <PremiumHeroPanel
              eyebrow="While this page is prepared"
              title="Keep benefiting from the live sections"
              items={relatedCards.map((card) => card.title).slice(0, 3)}
              tone="dark"
            />
          </>
        }
      />

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.07)] sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Coming soon</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            {introTitle}
          </h2>
          <p className="reading-copy text-[var(--muted)]">{introText}</p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Related sections</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Keep benefiting while this section is being prepared
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {relatedCards.map((card) => (
            <CategoryCard key={card.href} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}

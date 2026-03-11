import Link from "next/link";

import {
  PremiumHeroPanel,
  PremiumPageHero,
} from "@/components/premium-page-hero";

type RouteBridgePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  supportingText: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function RouteBridgePage({
  eyebrow,
  title,
  description,
  supportingText,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: RouteBridgePageProps) {
  return (
    <div className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <PremiumPageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        actions={
          <>
            <Link href={primaryHref} className="button-primary">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="button-secondary">
              {secondaryLabel}
            </Link>
          </>
        }
        aside={
          <>
            <PremiumHeroPanel
              eyebrow="Current destination"
              title={primaryLabel}
              description={supportingText}
            />
            <PremiumHeroPanel
              eyebrow="Route safety"
              title="Existing links still work"
              description="This URL remains available, but the main reading path now sits inside the newer section structure."
              tone="dark"
            />
          </>
        }
      />
    </div>
  );
}

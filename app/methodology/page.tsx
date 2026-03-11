import { CorrectionNote } from "@/components/correction-note";
import { CategoryCard } from "@/components/category-card";
import { PageHero } from "@/components/page-hero";
import { aboutSectionCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Methodology",
  description:
    "Learn how content is handled on Mercy of Allah, including source use, reference visibility, and how corrections are welcomed.",
  path: "/methodology",
});

const methodologyPoints = [
  {
    title: "Qur’an and authentic Sunnah",
    text: "The aim of the site is to stay close to the Qur’an and authentic Sunnah, while adding material carefully and section by section.",
  },
  {
    title: "References remain visible",
    text: "Wherever possible, the source stays visible directly on the page so readers can see what comes from the Qur’an and what comes from hadith.",
  },
  {
    title: "Corrections are welcome",
    text: "Religious content deserves humility and review. If something needs correction, the site should remain easy to improve without breaking the wider structure.",
  },
];

export default function MethodologyPage() {
  return (
    <div className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <PageHero
        eyebrow="Methodology"
        title="How content is prepared on this website"
        description="This page explains the working method behind the site: careful expansion, visible references, and openness to correction while preserving a calm reading experience."
        aside={
          <div className="reading-copy border-l-2 border-[var(--border-soft)] pl-5 text-[var(--foreground)]">
            The goal is not to rush content onto the site. The goal is to add
            it carefully, keep it easy to review, and preserve a stable reading
            experience.
          </div>
        }
      />

      <section className="border-t border-[var(--border-soft)] pt-6">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Why this matters</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            Stability matters as the site grows
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            The website is being expanded in a way that protects recent audit
            improvements: semantic structure, route safety, metadata clarity,
            internal linking, performance, and calm readability. New sections
            should match those standards instead of bypassing them.
          </p>
          <p className="reading-copy text-[var(--muted)]">
            Content should stay close to the Qur’an and authentic Sunnah, keep
            its references visible, and remain open to correction whenever a
            mistake is found.
          </p>
        </div>
      </section>

      <section
        id="method-principles"
        className="space-y-6 border-t border-[var(--border-soft)] pt-6 scroll-mt-28"
      >
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Method principles</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Principles that shape the site
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {methodologyPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-5 shadow-[0_18px_60px_rgba(8,24,19,0.06)]"
            >
              <p className="eyebrow mb-3">Method principle</p>
              <h2 className="text-xl font-semibold text-[var(--foreground)]">
                {point.title}
              </h2>
              <p className="reading-copy mt-3 text-[var(--muted)]">
                {point.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="related-pages"
        className="space-y-6 border-t border-[var(--border-soft)] pt-6 scroll-mt-28"
      >
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Related pages</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Read the wider trust and policy pages
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {aboutSectionCards.map((card) => (
            <CategoryCard key={card.href} {...card} />
          ))}
        </div>
      </section>

      <CorrectionNote plain />
    </div>
  );
}

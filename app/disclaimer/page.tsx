import { CategoryCard } from "@/components/category-card";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { aboutSectionCards } from "@/lib/content";

export const metadata = createMetadata({
  title: "Disclaimer",
  description:
    "Read the review and verification disclaimer for Mercy of Allah, including how to report corrections.",
  path: "/disclaimer",
});

const sections = [
  {
    title: "AI-assisted project",
    body: "This website is built using AI-assisted tools together with human direction and review. The aim is benefit, clarity, and service, not artificial authority.",
  },
  {
    title: "Review with the possibility of error",
    body: "Content is reviewed carefully, but mistakes may still remain in Arabic text, translation, references, or formatting. Users should approach the material with responsible verification.",
  },
  {
    title: "Verify religious content",
    body: "Readers should verify religious content independently, especially before teaching from it, publishing it, or sharing it widely. The goal of the site is benefit, not to replace scholarship or careful checking.",
  },
  {
    title: "Corrections",
    body: "For corrections please contact: salam @ mercyofallah . com",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <PageHero
        eyebrow="Disclaimer"
        title="Benefit is the goal, not authority"
        description="This project is offered sincerely and carefully, but it should still be used with verification, review, and humility."
        aside={
          <div className="reading-copy border-l-2 border-[var(--border-soft)] pl-5 text-[var(--foreground)]">
            This page explains how the site should be used: carefully, with
            verification, and without treating it as a substitute for
            scholarship.
          </div>
        }
      />

      {sections.map((section) => (
        <section
          key={section.title}
          className="border-t border-[var(--border-soft)] pt-6"
        >
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Policy detail</p>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">
              {section.title}
            </h2>
            <p className="reading-copy text-[var(--muted)]">
              {section.body}
            </p>
          </div>
        </section>
      ))}

      <section className="space-y-6 border-t border-[var(--border-soft)] pt-6">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">About section links</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Read the trust, method, and project pages
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            Use these pages to understand the project intention, source method,
            and the wider policies that sit around the public reading content.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {aboutSectionCards.map((card) => (
            <CategoryCard key={card.href} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}

import { SectionDirectoryPage } from "@/components/section-directory-page";
import { adhkarCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Adhkar",
  description:
    "Explore the main daily adhkar categories, beginning with morning and evening remembrance in a calm, lightweight reading structure.",
  path: "/adhkar",
});

export default function AdhkarRoute() {
  return (
    <SectionDirectoryPage
      eyebrow="Adhkar"
      title="Daily remembrance organised by moment and need"
      description="Move between the main categories of daily remembrance and keep the ones you return to most often close."
      cards={adhkarCategoryCards}
      guidanceTitle="Build consistency around a few sections first"
      guidanceText="Start with morning and evening remembrance, then return to them until they become part of the day."
      relatedLinks={[
        { href: "/last-ten-nights", label: "Last 10 Nights" },
        { href: "/quran/rabbana-duas", label: "Rabbana Duas" },
        { href: "/sources", label: "Sources" },
      ]}
    />
  );
}

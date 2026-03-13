import { SectionDirectoryPage } from "@/components/section-directory-page";
import { duaCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Duas",
  description:
    "Explore dua categories including Rabbana duas, prophetic duas, shifa, forgiveness, rizq, family, travel, and daily life in a scalable section structure.",
  path: "/duas",
});

export default function DuasPage() {
  return (
    <SectionDirectoryPage
      eyebrow="Duas"
      title="Supplications organised by theme and need"
      description="Move between dua categories by theme and keep the sections you need most close."
      cards={duaCategoryCards}
      guidanceTitle="Grow the collection without losing clarity"
      guidanceText="Each category is being prepared separately so the collection can grow without losing clarity."
      relatedLinks={[
        { href: "/last-ten-nights", label: "Last 10 Nights" },
        { href: "/adhkar", label: "Adhkar" },
        { href: "/sources", label: "Sources" },
      ]}
    />
  );
}

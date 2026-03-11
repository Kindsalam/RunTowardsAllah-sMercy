import { SectionDirectoryPage } from "@/components/section-directory-page";
import { duaCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Duas",
  description:
    "Explore dua categories including prophetic duas, shifa, forgiveness, rizq, family, travel, and daily life in a scalable section structure.",
  path: "/duas",
});

export default function DuasPage() {
  return (
    <SectionDirectoryPage
      eyebrow="Duas"
      title="Supplications organised by theme and need"
      description="Use this section to move between dua categories as the collection grows. Some sections are placeholders for now, but the structure is in place so expansion stays stable and readable."
      cards={duaCategoryCards}
      guidanceTitle="Grow the collection without losing clarity"
      guidanceText="Each category is being prepared separately so new content can be added carefully without overcrowding the main experience or weakening the current standards."
      relatedLinks={[
        { href: "/quran/rabbana-duas", label: "Qur’anic Rabbana Duas" },
        { href: "/adhkar", label: "Adhkar" },
        { href: "/sources", label: "Sources" },
      ]}
    />
  );
}

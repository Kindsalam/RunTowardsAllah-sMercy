import { SectionDirectoryPage } from "@/components/section-directory-page";
import { adhkarCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Adhkar",
  description:
    "Explore adhkar categories including morning, evening, sleep, protection, and travel in a calm, lightweight reading structure.",
  path: "/adhkar",
});

export default function AdhkarRoute() {
  return (
    <SectionDirectoryPage
      eyebrow="Adhkar"
      title="Daily remembrance organised by moment and need"
      description="Use this section to move between the main categories of daily remembrance. Start with the times you return to most often, then keep the others close as the collection grows."
      cards={adhkarCategoryCards}
      guidanceTitle="Build consistency around a few sections first"
      guidanceText="Morning and evening remembrance are usually the best place to begin. The other categories are being prepared carefully so the structure can grow without disrupting the reading experience."
      relatedLinks={[
        { href: "/last-ten-nights", label: "Last 10 Nights" },
        { href: "/quran/rabbana-duas", label: "Rabbana Duas" },
        { href: "/methodology", label: "Methodology" },
      ]}
    />
  );
}

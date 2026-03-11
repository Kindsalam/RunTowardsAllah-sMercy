import { TopicPlaceholderPage } from "@/components/topic-placeholder-page";
import { quranCategoryCards, duaCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Duas for Family",
  description:
    "A placeholder page for family-related duas covering spouses, children, righteous homes, and the well-being of loved ones.",
  path: "/duas/family",
});

export default function FamilyDuasPage() {
  return (
    <TopicPlaceholderPage
      eyebrow="Duas"
      title="Duas for family"
      description="A family-focused dua section is being prepared carefully so supplications for spouses, children, and righteous homes can be gathered clearly."
      introTitle="A home for duas connected to family life"
      introText="This section will be expanded slowly and respectfully. Until then, keep close to the family-related Rabbana duas already available."
      relatedCards={[
        quranCategoryCards[0],
        duaCategoryCards[6],
        quranCategoryCards[1],
      ]}
    />
  );
}

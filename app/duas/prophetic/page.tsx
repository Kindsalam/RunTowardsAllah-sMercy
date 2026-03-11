import { TopicPlaceholderPage } from "@/components/topic-placeholder-page";
import { adhkarCategoryCards, quranCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Prophetic Duas",
  description:
    "A placeholder page for prophetic duas from the Sunnah, prepared with clear structure, internal linking, and lightweight markup.",
  path: "/duas/prophetic",
});

export default function PropheticDuasPage() {
  return (
    <TopicPlaceholderPage
      eyebrow="Duas"
      title="Prophetic duas"
      description="A dedicated section for prophetic supplications is being prepared carefully so references remain visible and the reading flow stays calm."
      introTitle="A careful home for supplications from the Sunnah"
      introText="This section will be expanded in a way that preserves clear references, light pages, and respectful wording. Until then, keep close to the Qur’anic and adhkar sections already available."
      relatedCards={[
        quranCategoryCards[0],
        adhkarCategoryCards[0],
        adhkarCategoryCards[1],
      ]}
    />
  );
}

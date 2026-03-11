import { TopicPlaceholderPage } from "@/components/topic-placeholder-page";
import { quranCategoryCards, journeyLinks } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Ayat of Guidance",
  description:
    "A placeholder page for Qur'anic verses of guidance, clarity, and steadfastness.",
  path: "/quran/ayat-of-guidance",
});

export default function AyatOfGuidancePage() {
  return (
    <TopicPlaceholderPage
      eyebrow="Qur’an"
      title="Ayat of guidance"
      description="A dedicated section for verses of guidance is being prepared carefully so it can remain clear, calm, and easy to navigate."
      introTitle="Verses that steady the heart with direction"
      introText="This page will gather ayat connected to guidance, firmness, and clarity. Until then, the Rabbana duas and daily remembrance remain strong places to return to."
      relatedCards={[quranCategoryCards[0], quranCategoryCards[1], journeyLinks[2]]}
    />
  );
}

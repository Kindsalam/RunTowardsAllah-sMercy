import { TopicPlaceholderPage } from "@/components/topic-placeholder-page";
import { quranCategoryCards, journeyLinks } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Ayat of Mercy",
  description:
    "A placeholder page for Qur'anic verses of mercy, hope, and nearness to Allah.",
  path: "/quran/ayat-of-mercy",
});

export default function AyatOfMercyPage() {
  return (
    <TopicPlaceholderPage
      eyebrow="Qur’an"
      title="Ayat of mercy"
      description="A dedicated section for Qur’anic verses of mercy is being prepared carefully so it can stay focused, readable, and easy to revisit."
      introTitle="Verses that call the heart toward Allah’s mercy"
      introText="This page will gather selected ayat of mercy with the same clear internal linking and lightweight structure used elsewhere on the site."
      relatedCards={[quranCategoryCards[0], quranCategoryCards[2], journeyLinks[0]]}
    />
  );
}

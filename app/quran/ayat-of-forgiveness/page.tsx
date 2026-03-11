import { TopicPlaceholderPage } from "@/components/topic-placeholder-page";
import { quranCategoryCards, journeyLinks } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Ayat of Forgiveness",
  description:
    "A placeholder page for Qur'anic verses of forgiveness, repentance, and return to Allah.",
  path: "/quran/ayat-of-forgiveness",
});

export default function AyatOfForgivenessPage() {
  return (
    <TopicPlaceholderPage
      eyebrow="Qur’an"
      title="Ayat of forgiveness"
      description="A dedicated section for verses of forgiveness and repentance is being prepared carefully so it can grow without breaking the current reading flow."
      introTitle="Verses that strengthen tawbah and hope"
      introText="This page will gather ayat connected to maghfirah, repentance, and return. Until then, the Rabbana duas remain the strongest Qur’anic place to start."
      relatedCards={[quranCategoryCards[0], quranCategoryCards[1], journeyLinks[0]]}
    />
  );
}

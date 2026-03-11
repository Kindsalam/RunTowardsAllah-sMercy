import { TopicPlaceholderPage } from "@/components/topic-placeholder-page";
import { adhkarCategoryCards, quranCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sleep Adhkar",
  description:
    "A placeholder page for sleep adhkar and bedtime remembrance, prepared with the same calm structure used across the site.",
  path: "/adhkar/sleep",
});

export default function SleepAdhkarPage() {
  return (
    <TopicPlaceholderPage
      eyebrow="Adhkar"
      title="Sleep adhkar"
      description="A dedicated bedtime remembrance section is being prepared carefully so the words, references, and layout can stay clear and easy to return to."
      introTitle="A calm place for remembrance before sleep"
      introText="This section will gather bedtime adhkar and related reminders in one gentle reading flow. Until then, keep returning to the daily categories already available."
      relatedCards={[
        adhkarCategoryCards[0],
        adhkarCategoryCards[1],
        quranCategoryCards[0],
      ]}
    />
  );
}

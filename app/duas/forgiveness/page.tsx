import { TopicPlaceholderPage } from "@/components/topic-placeholder-page";
import { quranCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Duas for Forgiveness",
  description:
    "A placeholder page for duas of tawbah, forgiveness, and pardon, prepared with the same calm and lightweight standards used across the site.",
  path: "/duas/forgiveness",
});

export default function ForgivenessDuasPage() {
  return (
    <TopicPlaceholderPage
      eyebrow="Duas"
      title="Duas for forgiveness"
      description="A dedicated section for repentance, pardon, and asking Allah for forgiveness is being prepared carefully."
      introTitle="Return to Allah with humility and hope"
      introText="This page will gather forgiveness-related supplications in one place. Until then, the Qur’anic Rabbana duas already provide a strong place to return to tawbah and mercy."
      relatedCards={[
        quranCategoryCards[0],
        quranCategoryCards[2],
        quranCategoryCards[1],
      ]}
    />
  );
}

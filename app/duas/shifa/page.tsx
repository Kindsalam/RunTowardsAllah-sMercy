import { TopicPlaceholderPage } from "@/components/topic-placeholder-page";
import { adhkarCategoryCards, quranCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Duas for Shifa",
  description:
    "A placeholder page for duas connected to shifa, relief, and asking Allah for healing and well-being.",
  path: "/duas/shifa",
});

export default function ShifaDuasPage() {
  return (
    <TopicPlaceholderPage
      eyebrow="Duas"
      title="Duas for shifa"
      description="A dedicated shifa section is being prepared carefully so supplications for healing and relief can be gathered with clarity and care."
      introTitle="A gentle place for healing-related supplications"
      introText="This page will be expanded carefully, with emphasis on respectful tone, visible references, and calm reading. Until then, keep close to the daily remembrance and Qur’anic sections."
      relatedCards={[
        adhkarCategoryCards[3],
        quranCategoryCards[0],
        adhkarCategoryCards[1],
      ]}
    />
  );
}

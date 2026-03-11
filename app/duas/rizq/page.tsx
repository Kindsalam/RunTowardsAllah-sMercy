import { TopicPlaceholderPage } from "@/components/topic-placeholder-page";
import { quranCategoryCards, duaCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Duas for Rizq",
  description:
    "A placeholder page for duas connected to provision, sufficiency, and barakah in halal rizq.",
  path: "/duas/rizq",
});

export default function RizqDuasPage() {
  return (
    <TopicPlaceholderPage
      eyebrow="Duas"
      title="Duas for rizq"
      description="A dedicated section for supplications about provision, sufficiency, and barakah is being prepared carefully."
      introTitle="Ask Allah for provision with humility and trust"
      introText="This section will be added carefully so the duas, references, and related reminders can sit together without clutter."
      relatedCards={[
        quranCategoryCards[0],
        duaCategoryCards[6],
        duaCategoryCards[4],
      ]}
    />
  );
}

import { TopicPlaceholderPage } from "@/components/topic-placeholder-page";
import { adhkarCategoryCards, duaCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Travel Duas",
  description:
    "A placeholder page for travel-related duas, departures, journeys, and safe return.",
  path: "/duas/travel",
});

export default function TravelDuasPage() {
  return (
    <TopicPlaceholderPage
      eyebrow="Duas"
      title="Travel duas"
      description="A travel-dua section is being prepared carefully so journey supplications can be collected in a clean and easy-to-return-to layout."
      introTitle="Supplications for departure, movement, and return"
      introText="This page will be expanded carefully. For now, keep travel-related remembrance close through the adhkar section and the broader daily-life categories."
      relatedCards={[
        adhkarCategoryCards[4],
        adhkarCategoryCards[0],
        duaCategoryCards[6],
      ]}
    />
  );
}

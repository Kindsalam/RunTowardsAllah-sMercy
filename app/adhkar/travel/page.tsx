import { TopicPlaceholderPage } from "@/components/topic-placeholder-page";
import { adhkarCategoryCards, duaCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Travel Adhkar",
  description:
    "A placeholder page for travel adhkar and journey remembrance, prepared with the same calm, mobile-friendly standards used across the site.",
  path: "/adhkar/travel",
});

export default function TravelAdhkarPage() {
  return (
    <TopicPlaceholderPage
      eyebrow="Adhkar"
      title="Travel adhkar"
      description="A dedicated section for travel remembrance is being prepared carefully so departures, journeys, and return can stay easy to revisit."
      introTitle="Travel remembrance will be added here soon"
      introText="This page will gather travel adhkar in one structured place. For now, use the existing remembrance sections and the related travel-dua placeholder."
      relatedCards={[
        adhkarCategoryCards[0],
        adhkarCategoryCards[1],
        duaCategoryCards[5],
      ]}
    />
  );
}

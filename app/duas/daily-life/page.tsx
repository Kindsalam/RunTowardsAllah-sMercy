import { TopicPlaceholderPage } from "@/components/topic-placeholder-page";
import { adhkarCategoryCards, quranCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Daily Life Duas",
  description:
    "A placeholder page for duas connected to daily life, routines, and ordinary moments that still deserve remembrance.",
  path: "/duas/daily-life",
});

export default function DailyLifeDuasPage() {
  return (
    <TopicPlaceholderPage
      eyebrow="Duas"
      title="Daily life duas"
      description="A section for daily-life supplications is being prepared carefully so ordinary moments can be linked to remembrance with clarity and ease."
      introTitle="A place for the ordinary moments people return to often"
      introText="This page will eventually hold short, useful duas for common daily situations. Until then, the daily adhkar and Qur’anic sections remain the strongest place to begin."
      relatedCards={[
        adhkarCategoryCards[0],
        adhkarCategoryCards[1],
        quranCategoryCards[0],
      ]}
    />
  );
}

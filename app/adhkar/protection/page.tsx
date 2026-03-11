import { TopicPlaceholderPage } from "@/components/topic-placeholder-page";
import { adhkarCategoryCards, quranCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Protection Adhkar",
  description:
    "A placeholder page for adhkar of protection, refuge, and well-being, prepared with the same clear and lightweight standards used across the site.",
  path: "/adhkar/protection",
});

export default function ProtectionAdhkarPage() {
  return (
    <TopicPlaceholderPage
      eyebrow="Adhkar"
      title="Protection adhkar"
      description="This section is being prepared for adhkar of protection, refuge, and well-being, in sha Allah."
      introTitle="Words to keep close when asking Allah for safety"
      introText="Protection-related adhkar will be collected here carefully so they can be read with confidence, calm, and visible references."
      relatedCards={[
        adhkarCategoryCards[0],
        adhkarCategoryCards[1],
        quranCategoryCards[0],
      ]}
    />
  );
}

import { SectionDirectoryPage } from "@/components/section-directory-page";
import { quranCategoryCards } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Qur’an",
  description:
    "Explore Qur'anic content including Rabbana duas and curated thematic ayat sections in a clear, scalable structure.",
  path: "/quran",
});

export default function QuranPage() {
  return (
    <SectionDirectoryPage
      eyebrow="Qur’an"
      title="Qur’anic content arranged for reflection and return"
      description="Move through the Qur’anic content on the site, beginning with Rabbana duas and the thematic ayat sections being prepared."
      cards={quranCategoryCards}
      guidanceTitle="Keep the Qur’an section focused and easy to revisit"
      guidanceText="The aim is not volume for its own sake, but clear sections people can return to often."
      relatedLinks={[
        { href: "/last-ten-nights", label: "Last 10 Nights" },
        { href: "/adhkar", label: "Adhkar" },
        { href: "/sources", label: "Sources" },
      ]}
    />
  );
}

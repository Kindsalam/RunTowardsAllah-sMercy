import { DailyAdhkarPage } from "@/components/daily-adhkar-page";
import { publicEveningAdhkar } from "@/lib/public-content";

const benefitCards = [
  {
    title: "Protection through the night",
    text: "Ask Allah to guard you, your family, and your home as the night begins.",
  },
  {
    title: "Reflection",
    text: "The evening is a moment to pause, reflect on the day, and seek forgiveness.",
  },
  {
    title: "Peace of heart",
    text: "Remembering Allah settles the heart before rest.",
  },
];

export function EveningAdhkarPage() {
  return (
    <DailyAdhkarPage
      tone="evening"
      items={publicEveningAdhkar}
      heroLabel="Daily remembrance"
      heroTitle="Evening Adhkar"
      heroParagraph="Close the day with remembrance, protection, gratitude, and reflection."
      heroPreviewArabic="أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ"
      heroPreviewText="Let the final words of the day return the heart to calm, gratitude, and trust."
      introTitle="End the day with remembrance"
      introParagraph="Ending the evening with remembrance helps the heart return to calm, gratitude, and reliance upon Allah."
      introSupportingLine="Let the final words of your day be words of remembrance."
      benefitCards={benefitCards}
      listTitle="Evening words to keep close"
      listIntro="Keep this reviewed evening set close and return to it with calm. The layout stays simple so the words remain the focus."
      reflectionTitle="Before the day closes"
      reflectionParagraph="Before sleep, the believer remembers Allah, asks forgiveness for mistakes, and places trust in the One who protects through the night. Ending the day with remembrance softens the heart and brings peace."
      bottomTitle="Return tomorrow with remembrance"
      bottomParagraph="Begin the next morning again with remembrance and gratitude. Small daily habits build a strong and steady heart."
      primaryCtaLabel="Open Morning Adhkar"
      primaryCtaHref="/adhkar/morning"
      secondaryCtaLabel="Read Rabbana Duas"
      secondaryCtaHref="/quran/rabbana-duas"
      completionStoragePrefix="evening-read"
    />
  );
}

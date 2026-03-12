import { DailyAdhkarPage } from "@/components/daily-adhkar-page";
import { publicMorningAdhkar } from "@/lib/public-content";

const benefitCards = [
  {
    title: "Protection",
    text: "Begin the day asking Allah to keep you safe from harm and loss.",
  },
  {
    title: "Gratitude",
    text: "Start the morning by remembering the One who gave you life, time, and another day.",
  },
  {
    title: "Steadiness",
    text: "Anchor your heart before the noise of the day begins.",
  },
];

export function MorningAdhkarPage() {
  return (
    <DailyAdhkarPage
      tone="morning"
      items={publicMorningAdhkar}
      heroLabel="Daily remembrance"
      heroTitle="Morning Adhkar"
      heroParagraph="Begin the day with remembrance, protection, gratitude, and trust in Allah."
      heroPreviewArabic="أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ"
      heroPreviewText="Let the first words of the day draw the heart back to gratitude, reliance, and calm."
      introTitle="Start the day with what benefits the heart"
      introParagraph="Beginning the day with remembrance brings protection, steadiness, gratitude, and peace."
      introSupportingLine="Read a little with consistency rather than rushing through a lot without presence."
      benefitCards={benefitCards}
      listTitle="Morning words to keep close"
      listIntro="Keep this reviewed morning set close and return to it with consistency. The aim is a clear, calm reading flow rather than clutter."
      reflectionTitle="Small words, repeated with sincerity"
      reflectionParagraph="Morning adhkar are not long for the sake of length. Their value is in truthfulness, consistency, and presence of heart. A believer begins the day by remembering Allah, asking for good, and seeking protection before stepping into the duties of life."
      bottomTitle="Carry remembrance into the rest of your day"
      bottomParagraph="Return to these words every morning and let them become part of your routine. What begins with remembrance is more likely to stay grounded, grateful, and protected."
      primaryCtaLabel="Open Evening Adhkar"
      primaryCtaHref="/adhkar/evening"
      secondaryCtaLabel="Read Rabbana Duas"
      secondaryCtaHref="/quran/rabbana-duas"
      completionStoragePrefix="morning-read"
    />
  );
}

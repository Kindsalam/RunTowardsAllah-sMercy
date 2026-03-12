import { createMetadata } from "@/lib/seo";
import Link from "next/link";

import { CopyDuaButton } from "@/components/copy-dua-button";
import { DuaCard } from "@/components/dua-card";
import { publicLastTenNights } from "@/lib/public-content";
import type { DuaItem } from "@/lib/types";

export const metadata = createMetadata({
  title: "Last 10 Nights and Laylatul Qadr",
  description:
    "Keep a reviewed set of duas and reminders close in the last ten nights of Ramadan and while seeking Laylatul Qadr.",
  path: "/last-ten-nights",
});

const laylatulQadrFocus = [
  {
    title: "Seek Laylatul Qadr",
    text: "Look for it in the last ten nights, especially the odd nights.",
  },
  {
    title: "Increase dua",
    text: "Repeat the most important reviewed duas often and with presence of heart.",
  },
  {
    title: "Stay with Qur’an and dhikr",
    text: "Keep these nights alive with recitation, remembrance, repentance, and reflection.",
  },
];

const worshipPriorities = [
  "Return often to the Laylatul Qadr dua",
  "Let Qur’an and dhikr fill the night",
  "Even a few sincere minutes can carry great reward",
];

const recommendedActs: DuaItem[] = [
  {
    id: "last-ten-prayer-on-laylatul-qadr",
    category: "last-ten-nights",
    title: "Stand in prayer on Laylatul Qadr",
    arabic:
      "مَنْ قَامَ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    english:
      "Whoever stands in prayer on Laylatul Qadr with faith and seeking reward will have his past sins forgiven.",
    urdu:
      "جو شخص لیلۃ القدر میں ایمان کے ساتھ اور ثواب کی نیت سے قیام کرے، اس کے پچھلے گناہ معاف کر دیے جاتے ہیں۔",
    benefit:
      "Even a small portion of the night spent in sincere prayer can lead to forgiveness of past sins.",
    sourceType: "hadith",
    sourceReference: "Sahih al-Bukhari 1901",
    sourceUrl: "https://sunnah.com/bukhari:1901",
    authenticity: "sahih",
  },
  {
    id: "last-ten-seek-laylatul-qadr",
    category: "last-ten-nights",
    title: "Seek Laylatul Qadr in the last ten nights",
    arabic:
      "تَحَرَّوْا لَيْلَةَ الْقَدْرِ فِي الْعَشْرِ الأَوَاخِرِ مِنْ رَمَضَانَ",
    english: "Seek Laylatul Qadr in the last ten nights of Ramadan.",
    urdu: "لیلۃ القدر کو رمضان کی آخری دس راتوں میں تلاش کرو۔",
    benefit:
      "Increase worship in all the final nights, especially the odd nights.",
    sourceType: "hadith",
    sourceReference: "Sahih al-Bukhari 2020",
    sourceUrl: "https://sunnah.com/bukhari:2020",
    authenticity: "sahih",
  },
  {
    id: "last-ten-revive-the-night",
    category: "last-ten-nights",
    title: "Revive the night with worship",
    arabic:
      "كَانَ النَّبِيُّ ﷺ إِذَا دَخَلَ الْعَشْرُ الأَوَاخِرُ شَدَّ مِئْزَرَهُ وَأَحْيَا لَيْلَهُ وَأَيْقَظَ أَهْلَهُ",
    english:
      "When the last ten nights began, the Prophet would strive harder, spend the night in worship, and wake his family.",
    urdu:
      "جب آخری عشرہ داخل ہوتا تو نبی ﷺ کمر کس لیتے، رات کو عبادت میں گزارتے، اور اپنے گھر والوں کو جگاتے تھے۔",
    benefit:
      "Dedicate these nights to prayer, Qur’an, dhikr, and encourage your family to worship as well.",
    sourceType: "hadith",
    sourceReference: "Sahih al-Bukhari 2024",
    sourceUrl: "https://sunnah.com/bukhari:2024",
    authenticity: "sahih",
  },
  {
    id: "last-ten-increase-charity",
    category: "last-ten-nights",
    title: "Increase charity in Ramadan",
    arabic:
      "كَانَ رَسُولُ اللَّهِ ﷺ أَجْوَدَ النَّاسِ، وَكَانَ أَجْوَدَ مَا يَكُونُ فِي رَمَضَانَ",
    english:
      "The Messenger of Allah was the most generous of people, and he was even more generous in Ramadan.",
    urdu:
      "رسول اللہ ﷺ سب لوگوں سے زیادہ سخی تھے، اور رمضان میں آپ اور بھی زیادہ سخی ہو جاتے تھے۔",
    benefit:
      "Follow the example of the Prophet by giving charity and helping others during these blessed nights.",
    sourceType: "hadith",
    sourceReference: "Sahih al-Bukhari 6",
    sourceUrl: "https://sunnah.com/bukhari:6",
    authenticity: "sahih",
  },
];

export default function LastTenNightsPage() {
  const featuredDua =
    publicLastTenNights.find((item) => item.featured) ?? publicLastTenNights[0];
  const recommendedReadings = publicLastTenNights.filter(
    (item) => item.id !== featuredDua.id,
  );
  const featuredCopyText = [
    featuredDua.title,
    featuredDua.arabic,
    featuredDua.transliteration
      ? `Transliteration: ${featuredDua.transliteration}`
      : null,
    `English: ${featuredDua.english}`,
    `Urdu: ${featuredDua.urdu}`,
    `Reference: ${featuredDua.sourceReference}`,
  ]
    .filter(Boolean)
    .join("\n\n");

  return (
    <div className="page-shell space-y-10 pb-16 pt-1 sm:space-y-14 sm:pt-2">
      <section className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_84%,rgba(201,171,103,0.12)_16%),var(--surface))] px-5 py-5 shadow-[0_24px_90px_rgba(8,24,19,0.08)] sm:px-8 sm:py-6 lg:px-10 lg:py-7">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,171,103,0.18)_0%,_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(16,77,57,0.09)_0%,_transparent_36%)]" />
        <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-[42rem] space-y-3.5">
            <p className="eyebrow">
              Last Ashra of Ramadan
            </p>
            <h1 className="font-display text-4xl leading-[0.96] text-[var(--foreground)] sm:text-[3.3rem] lg:text-[4.15rem]">
              Make these nights count
            </h1>
            <p className="reading-copy max-w-xl text-[var(--muted)]">
              Nights of mercy, forgiveness, dua, and hope. Begin with the
              most important supplications and reminders for Laylatul Qadr.
            </p>
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <Link href="#featured-main-dua" className="button-primary">
                Begin with the main dua
              </Link>
              <Link href="#recommended-reading" className="button-secondary">
                Recommended reading
              </Link>
            </div>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface)]/95 p-4 shadow-[0_18px_60px_rgba(8,24,19,0.06)]">
              <p className="eyebrow mb-3">Laylatul Qadr focus</p>
              <div className="space-y-3">
                {laylatulQadrFocus.map((item) => (
                  <div key={item.title} className="space-y-1">
                    <p className="reading-copy-compact font-medium text-[var(--foreground)]">{item.title}</p>
                    <p className="reading-copy text-[var(--muted)]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[linear-gradient(160deg,rgba(8,20,15,0.96)_0%,rgba(16,46,36,0.94)_100%)] p-4 text-white shadow-[0_18px_60px_rgba(8,24,19,0.12)]">
              <p className="eyebrow mb-3 text-white/70">Worship priorities</p>
              <div className="space-y-3">
                {worshipPriorities.map((item) => (
                  <p key={item} className="reading-copy text-white/86">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-main-dua" className="space-y-6 scroll-mt-28">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">Featured main dua</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Dua for Laylatul Qadr
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            This is one of the most important duas for Laylatul Qadr.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_82%,rgba(201,171,103,0.12)_18%),var(--surface))] p-1 shadow-[0_24px_90px_rgba(8,24,19,0.08)]">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(201,171,103,0.22)_0%,_transparent_70%)]" />
          <div className="relative">
            <DuaCard
              item={featuredDua}
              copyButtonLabel="Copy dua"
              shareButtonLabel="Share"
            />
          </div>
        </div>
      </section>

      <section id="recommended-acts" className="space-y-6 scroll-mt-28">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Last ten nights</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Acts recommended in these nights
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            These actions are drawn from authentic hadith about the final
            nights of Ramadan and the search for Laylatul Qadr.
          </p>
        </div>

        <div className="grid gap-6">
          {recommendedActs.map((item) => (
            <DuaCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section id="recommended-reading" className="space-y-6 scroll-mt-28">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Recommended reading</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Words to keep close in these nights
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            Keep this small reviewed set of duas and reminders close in the
            last ten nights. Each item is shown with its reference so the page
            stays useful without becoming noisy.
          </p>
        </div>

        <div className="grid gap-6">
          {recommendedReadings.map((item) => (
            <DuaCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(160deg,rgba(9,43,33,0.96)_0%,rgba(18,71,53,0.92)_48%,rgba(201,171,103,0.22)_100%)] px-5 py-8 text-white shadow-[0_30px_120px_rgba(6,20,15,0.22)] sm:px-8 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,246,214,0.2)_0%,_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(201,171,103,0.18)_0%,_transparent_34%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow text-white/72">Laylatul Qadr</p>
            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              A night better than a thousand months
            </h2>
            <p className="reading-copy text-white/88">
              The Night of Decree is better than a thousand months.
            </p>
            <p className="reading-copy text-white/74">
              One night of sincere worship on Laylatul Qadr is better than a
              thousand months of worship.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.12)] backdrop-blur-md sm:p-7">
            <div className="space-y-5">
              <p
                dir="rtl"
                lang="ar"
                className="arabic-quran reading-arabic-quran text-right text-white"
              >
                لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ
              </p>
              <div className="border-t border-white/12 pt-4">
                <Link
                  href="https://quran.com/97/3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/82 underline decoration-white/30 underline-offset-4 transition hover:text-white"
                >
                  Surah Al-Qadr 97:3
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="eyebrow">Reflection</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            A few sincere moments can carry great weight
          </h2>
          <p className="reading-copy text-[var(--muted)]">
            Not every person can do long worship every night. But every
            person can turn back to Allah with sincerity. A few honest
            minutes of dua, istighfar, dhikr, and Qur’an in these nights may
            be heavier than years of habit done without heart.
          </p>
        </div>
        <div className="flex lg:justify-end">
          <Link href="/quran/rabbana-duas" className="button-secondary">
            Read Rabbana Duas
          </Link>
        </div>
      </section>

      <section className="overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,var(--surface),color-mix(in_srgb,var(--surface)_74%,rgba(201,171,103,0.24)_26%))] px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Next step</p>
            <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-5xl">
              Do not leave these nights empty
            </h2>
            <p className="reading-copy max-w-2xl text-[var(--muted)]">
              Stay with reviewed words, keep your tongue busy, and ask Allah
              for forgiveness, mercy, and the best of this world and the next.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <CopyDuaButton
              text={featuredCopyText}
              label="Copy the Laylatul Qadr dua"
            />
            <Link href="/adhkar/evening" className="button-secondary">
              Open Evening Adhkar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

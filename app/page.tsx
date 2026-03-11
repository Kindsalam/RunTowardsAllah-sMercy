import Link from "next/link";

import { CategoryCard } from "@/components/category-card";
import { DuaCard } from "@/components/dua-card";
import { HeroSection } from "@/components/hero-section";
import { ReflectionSection } from "@/components/reflection-section";
import { lastTenNights } from "@/data/last-ten-nights";
import { journeyLinks, whyTheseNightsCards } from "@/lib/content";

export default function HomePage() {
  const featuredDua =
    lastTenNights.find((item) => item.featured) ?? lastTenNights[0];

  return (
    <div className="page-shell space-y-16 py-6 pb-16 sm:space-y-20 sm:py-8">
      <HeroSection />

      <section className="space-y-6">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">Why these nights matter</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            The final stretch of Ramadan is not ordinary time.
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            These nights carry the possibility of Laylatul Qadr, a night better
            than a thousand months. Even brief moments of turning back to Allah
            can carry immeasurable weight.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {whyTheseNightsCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-5 shadow-[0_18px_60px_rgba(8,24,19,0.06)]"
            >
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">Guided journey</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Choose a way to enter worship, not just a page to open.
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            Each path is designed as a gentle entry point, whether you want a
            focused Laylatul Qadr dua, Qur'anic supplications, or steady daily
            remembrance.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {journeyLinks.map((link) => (
            <CategoryCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      <ReflectionSection />

      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Featured Laylatul Qadr dua</p>
            <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
              Keep this dua close through every one of the last ten nights.
            </h2>
            <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
              This is the most prominent featured sample on the site so a visitor
              can begin reciting immediately from the landing page.
            </p>
          </div>
          <Link href="/last-ten-nights" className="button-primary">
            Open the full night collection
          </Link>
        </div>
        <DuaCard item={featuredDua} />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[30px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
          <p className="eyebrow mb-3">Dunya benefits</p>
          <h3 className="text-2xl font-semibold text-[var(--foreground)]">
            The heart becomes steadier in the life you are living now.
          </h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            These duas teach gratitude, clarity, trust, and emotional relief.
            They give words for overwhelm, hope, repentance, family concerns, and
            the need for protection through ordinary life.
          </p>
        </div>
        <div className="rounded-[30px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
          <p className="eyebrow mb-3">Akhirah benefits</p>
          <h3 className="text-2xl font-semibold text-[var(--foreground)]">
            The believer also asks with the next life in view.
          </h3>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
            Forgiveness, mercy, safety from punishment, accepted repentance, and
            sincere worship are central themes in these supplications. They orient
            the soul beyond the temporary and toward what remains.
          </p>
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-3">
            <p className="eyebrow">Authenticity</p>
            <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
              Built around trust, clarity, and careful reading.
            </h2>
            <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
              This site is structured for Qur'anic duas and authentic hadith
              sources only. Arabic text is displayed with full harakat, references
              stay visible, and the starter dataset is clearly labeled as sample
              content so verified expansions can be added responsibly.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5 text-sm leading-7 text-[var(--foreground)]">
              References are shown on every dua card so readers can trace each
              sample entry back to its source collection or verse.
            </div>
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5 text-sm leading-7 text-[var(--foreground)]">
              Transliteration and font controls are optional utilities, not
              clutter. The reading experience stays focused on the text.
            </div>
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5 text-sm leading-7 text-[var(--foreground)]">
              Morning and evening pages include local progress markers so a person
              can quietly keep track of what they have read.
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,var(--surface),color-mix(in_srgb,var(--surface)_74%,rgba(201,171,103,0.26)_26%))] px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Do not waste these nights</p>
            <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-5xl">
              Start reading now, even if you begin with one sincere dua.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              A small, present heart can do more in these nights than a distracted
              one with grand plans. Open a section and begin where you are.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/last-ten-nights" className="button-primary">
              Start with the Last 10 Nights
            </Link>
            <Link href="/morning-azkar" className="button-secondary">
              Read Morning Azkar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

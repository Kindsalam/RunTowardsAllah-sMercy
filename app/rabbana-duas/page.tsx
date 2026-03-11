import Link from "next/link";

import { DuaCard } from "@/components/dua-card";
import { rabbanaDuas } from "@/data/rabbana-duas";

const themeChips = [
  "Forgiveness",
  "Mercy",
  "Guidance",
  "Protection",
  "Patience",
  "Dunya and Akhirah",
  "Family and Offspring",
];

const whyTheseDuasMatter = [
  "forgiveness when we fall short",
  "mercy when we are weak",
  "guidance when we are lost",
  "patience when life becomes heavy",
  "protection from harm and punishment",
  "goodness in both dunya and akhirah",
];

export default function RabbanaDuasPage() {
  const featuredDua = rabbanaDuas.find((item) => item.featured) ?? rabbanaDuas[0];
  const remainingDuas = rabbanaDuas.filter((item) => item.id !== featuredDua.id);
  const firstGroup = remainingDuas.slice(0, 2);
  const secondGroup = remainingDuas.slice(2);

  return (
    <div className="page-shell space-y-12 py-6 pb-16 sm:space-y-16 sm:py-8">
      <section className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_84%,rgba(201,171,103,0.12)_16%),var(--surface))] px-5 py-8 shadow-[0_24px_90px_rgba(8,24,19,0.08)] sm:px-8 sm:py-10 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,171,103,0.18)_0%,_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(16,77,57,0.09)_0%,_transparent_36%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Qur’anic Supplications</p>
            <h1 className="font-display text-4xl leading-none text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Rabbana duas from the Qur’an
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              These are among the most powerful supplications a believer can
              make. They are words that Allah placed in His Book, teaching us
              how to ask for guidance, mercy, forgiveness, patience,
              protection, and success in this life and the next.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(201,171,103,0.28)_0%,_rgba(201,171,103,0.08)_36%,_transparent_68%)] blur-xl" />
            <div className="relative mx-auto max-w-sm rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)]/95 p-5 shadow-[0_20px_70px_rgba(8,24,19,0.06)]">
              <div className="space-y-4">
                <div className="h-11 w-11 rounded-full border border-[var(--border-soft)] bg-[var(--accent-soft)]" />
                <p className="arabic-text text-right text-[2rem] leading-[1.95] text-[var(--foreground)]">
                  رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ
                  حَسَنَةً وَقِنَا عَذَابَ النَّارِ
                </p>
                <div className="rounded-[22px] border border-[var(--border-soft)] bg-[var(--background)] p-4 text-sm leading-7 text-[var(--muted)]">
                  Let the Rabbana duas stay close to the tongue and the heart,
                  not only in Ramadan but beyond it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.07)] sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Intro reflection</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            Words taught by Allah
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            The Rabbana duas are special because they are not just beautiful
            words. They are words chosen by Allah and preserved in the Qur’an.
            They teach us what to ask for, how to ask, and what truly matters
            most.
          </p>
          <p className="text-sm font-medium leading-7 text-[var(--foreground)]">
            Read them slowly, understand their meaning, and make them part of
            your daily life.
          </p>
        </div>
      </section>

      <section className="space-y-5">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Themes</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Common themes running through these duas
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {themeChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[var(--border-soft)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--foreground)] shadow-[0_12px_34px_rgba(8,24,19,0.04)]"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <p className="eyebrow">Main dua list</p>
          <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
            Keep these supplications close
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            This starter page is intentionally seeded with five structured
            entries only, so the full verified Rabbana collection can be added
            later without changing the layout or card system.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_82%,rgba(201,171,103,0.12)_18%),var(--surface))] p-1 shadow-[0_24px_90px_rgba(8,24,19,0.08)]">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(201,171,103,0.22)_0%,_transparent_70%)]" />
          <div className="relative">
            <DuaCard item={featuredDua} />
          </div>
        </div>

        <div className="grid gap-6">
          {firstGroup.map((item) => (
            <DuaCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.07)] sm:px-8">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <p className="eyebrow">Why these duas matter</p>
            <h2 className="font-display text-3xl text-[var(--foreground)] sm:text-4xl">
              These duas ask for what really matters
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {whyTheseDuasMatter.map((point) => (
              <div
                key={point}
                className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5 text-sm leading-7 text-[var(--foreground)]"
              >
                {point}
              </div>
            ))}
          </div>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            A believer does not only ask for relief. A believer asks for what
            brings nearness to Allah and lasting success.
          </p>
        </div>
      </section>

      <section className="grid gap-6">
        {secondGroup.map((item) => (
          <DuaCard key={item.id} item={item} />
        ))}
      </section>

      <section className="overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,var(--surface),color-mix(in_srgb,var(--surface)_74%,rgba(201,171,103,0.24)_26%))] px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">Next step</p>
            <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-5xl">
              Take these words with you every day
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              Do not leave the Rabbana duas only for Ramadan. Read them often,
              understand them deeply, and return to them in times of ease and
              in times of difficulty.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/morning-azkar" className="button-primary">
              Open Morning Azkar
            </Link>
            <Link href="/last-ten-nights" className="button-secondary">
              Return to Last 10 Nights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

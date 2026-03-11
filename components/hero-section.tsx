import Link from "next/link";

export function HeroSection() {
  const stars = [
    "left-[9%] top-[18%]",
    "left-[28%] top-[11%]",
    "left-[63%] top-[16%]",
    "left-[85%] top-[24%]",
    "left-[14%] top-[68%]",
    "left-[54%] top-[76%]",
    "left-[78%] top-[62%]",
  ];

  return (
    <section className="relative overflow-hidden rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(160deg,rgba(9,43,33,0.96)_0%,rgba(18,71,53,0.92)_48%,rgba(201,171,103,0.22)_100%)] px-5 py-8 text-white shadow-[0_30px_120px_rgba(6,20,15,0.22)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,246,214,0.2)_0%,_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(201,171,103,0.18)_0%,_transparent_34%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
      {stars.map((position) => (
        <span
          key={position}
          className={`absolute ${position} h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.65)]`}
        />
      ))}
      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/80 backdrop-blur">
            Based on Qur'an and authentic Sunnah
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">
              Spend the last ten nights in dua, dhikr, and quiet return to Allah.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              A calm reading space for the final stretch of Ramadan, designed to
              help you slow down, recite, reflect, and keep the tongue and heart
              engaged with what is rooted in revelation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/last-ten-nights" className="button-light">
              Start with the Last 10 Nights
            </Link>
            <Link href="/rabbana-duas" className="button-ghost-light">
              Read Quranic Rabbana Duas
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,246,214,0.62)_0%,_rgba(255,246,214,0.12)_36%,_transparent_66%)] blur-xl" />
          <div className="relative mx-auto max-w-sm rounded-[28px] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-white/75">
                <span>Ramadan Nights</span>
                <span>Mobile-first</span>
              </div>
              <div className="rounded-[22px] border border-white/15 bg-black/10 p-5">
                <div className="mb-4 h-10 w-10 rounded-full border border-white/20 bg-white/10" />
                <p className="arabic-text text-right text-3xl leading-[1.9] text-white">
                  اللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[20px] border border-white/10 bg-black/10 p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/65">
                    Read clearly
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Arabic, English, Urdu, and optional transliteration in one calm flow.
                  </p>
                </div>
                <div className="rounded-[20px] border border-white/10 bg-black/10 p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/65">
                    Keep returning
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/80">
                    Designed for quiet revisits through the nights, mornings, and evenings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

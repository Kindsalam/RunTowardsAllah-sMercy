import { DuaCard } from "@/components/dua-card";
import { lastTenNights } from "@/data/last-ten-nights";

export default function LastTenNightsPage() {
  return (
    <div className="page-shell space-y-8 py-6 pb-16 sm:py-8">
      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Last 10 Nights and Laylatul Qadr</p>
          <h1 className="font-display text-4xl leading-none text-[var(--foreground)] sm:text-5xl">
            Keep the most important night-focused duas within reach.
          </h1>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            This page starts with clearly labeled sample entries that are often
            associated with forgiveness, repentance, and asking Allah for mercy in
            the closing nights of Ramadan.
          </p>
        </div>
      </section>

      <div className="grid gap-6">
        {lastTenNights.map((item) => (
          <DuaCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

import { DuaCard } from "@/components/dua-card";
import { morningAzkar } from "@/data/morning-azkar";

export default function MorningAzkarPage() {
  return (
    <div className="page-shell space-y-8 py-6 pb-16 sm:py-8">
      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Morning Azkar</p>
          <h1 className="font-display text-4xl leading-none text-[var(--foreground)] sm:text-5xl">
            Begin the day with remembrance before the noise arrives.
          </h1>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            Each sample card can be marked as read on this device, making the page
            useful for daily revisits without introducing accounts or backend
            state.
          </p>
        </div>
      </section>

      <div className="grid gap-6">
        {morningAzkar.map((item) => (
          <DuaCard
            key={item.id}
            item={item}
            allowCompletion
            completionStorageKey={`morning-read:${item.id}`}
          />
        ))}
      </div>
    </div>
  );
}

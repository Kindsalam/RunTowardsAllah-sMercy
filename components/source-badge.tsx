import type { DuaItem } from "@/lib/types";

type SourceBadgeProps = Pick<
  DuaItem,
  "sourceType" | "authenticity" | "sourceReference"
>;

export function SourceBadge({
  sourceType,
  authenticity,
  sourceReference,
}: SourceBadgeProps) {
  const tone =
    sourceType === "quran"
      ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-100"
      : "bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-100";

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase">
      <span className={`rounded-full px-3 py-1 ${tone}`}>
        {sourceType === "quran" ? "Qur'an" : "Hadith"}
      </span>
      {authenticity ? (
        <span className="rounded-full border border-[var(--border-strong)] px-3 py-1 text-[var(--muted)]">
          {authenticity === "quran" ? "Revelation" : "Sahih sample"}
        </span>
      ) : null}
      <span className="text-[var(--muted)]">{sourceReference}</span>
    </div>
  );
}

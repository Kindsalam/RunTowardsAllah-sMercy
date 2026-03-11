import Link from "next/link";

type AdhkarAliasPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  targetHref: string;
  targetLabel: string;
};

export function AdhkarAliasPage({
  eyebrow,
  title,
  description,
  targetHref,
  targetLabel,
}: AdhkarAliasPageProps) {
  return (
    <div className="page-shell py-6 pb-16 sm:py-8">
      <section className="rounded-[34px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--surface)_84%,rgba(201,171,103,0.12)_16%),var(--surface))] px-5 py-8 shadow-[0_24px_90px_rgba(8,24,19,0.08)] sm:px-8 sm:py-10 lg:px-10">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display text-4xl leading-none text-[var(--foreground)] sm:text-5xl">
            {title}
          </h1>
          <p className="reading-copy max-w-2xl text-[var(--muted)]">
            {description}
          </p>
          <p className="reading-copy text-[var(--muted)]">
            The public adhkar experience now lives on one combined page so
            morning and evening remembrance stay in a single, clearer reading
            flow.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={targetHref} className="button-primary">
              {targetLabel}
            </Link>
            <Link href="/adhkar" className="button-secondary">
              Open Daily Adhkar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

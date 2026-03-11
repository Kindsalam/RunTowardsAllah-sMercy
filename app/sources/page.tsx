import Link from "next/link";

import { sourceReferences } from "@/lib/content";

export default function SourcesPage() {
  return (
    <div className="page-shell space-y-8 py-6 pb-16 sm:py-8">
      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Sources</p>
          <h1 className="font-display text-4xl leading-none text-[var(--foreground)] sm:text-5xl">
            Reference visibility is part of the design, not an afterthought.
          </h1>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            The current dataset is intentionally small and clearly labeled as
            sample content. These references were used to structure the starter
            entries and homepage reflection, and they should remain the basis for
            future verified expansions.
          </p>
        </div>
      </section>

      <section className="grid gap-4">
        {sourceReferences.map((source) => (
          <article
            key={source.href}
            className="rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface)] p-5"
          >
            <p className="eyebrow mb-3">Reference</p>
            <Link
              href={source.href}
              className="text-lg font-semibold text-[var(--foreground)] underline decoration-[var(--border-strong)] underline-offset-4"
            >
              {source.label}
            </Link>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {source.note}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-[30px] border border-[var(--border-soft)] bg-[var(--surface)] p-6">
        <p className="eyebrow mb-3">Content note</p>
        <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
          Urdu and English strings in this starter build are intentionally marked
          as sample translations so a verified editorial pass can replace them
          later without changing the component structure or page design.
        </p>
      </section>
    </div>
  );
}

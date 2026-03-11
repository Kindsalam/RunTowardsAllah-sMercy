import { DuaCard } from "@/components/dua-card";
import { rabbanaDuas } from "@/data/rabbana-duas";

export default function RabbanaDuasPage() {
  return (
    <div className="page-shell space-y-8 py-6 pb-16 sm:py-8">
      <section className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Quranic Rabbana Duas</p>
          <h1 className="font-display text-4xl leading-none text-[var(--foreground)] sm:text-5xl">
            Read the Qur'an's most beloved supplications in a calm, spacious flow.
          </h1>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            These starter entries are labeled as samples, but the structure is
            ready for a larger verified collection of Rabbana duas with source
            visibility and reading controls intact.
          </p>
        </div>
      </section>

      <div className="grid gap-6">
        {rabbanaDuas.map((item) => (
          <DuaCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

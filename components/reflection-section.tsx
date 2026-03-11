export function ReflectionSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface)] px-5 py-8 shadow-[0_20px_80px_rgba(8,24,19,0.08)] sm:px-8 lg:px-10">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,_rgba(214,179,98,0.18)_0%,_transparent_55%)]" />
      <div className="relative space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="eyebrow">Reflection</p>
          <h2 className="font-display text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            "I am truly near."
          </h2>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            The heart of dua is not volume but nearness. These nights invite a
            person to ask with humility, hope, and certainty that Allah hears the
            one who turns to Him.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--panel-strong)] p-5 sm:p-7">
            <p className="arabic-text text-right text-[calc(1.95rem*var(--dua-scale))] leading-[1.9] text-[var(--foreground)]">
              وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ ٱلدَّاعِ إِذَا دَعَانِ
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5">
              <p className="eyebrow mb-3">English</p>
              <p className="text-sm leading-7 text-[var(--foreground)]">
                Sample translation: "When My servants ask you about Me, I am
                truly near. I answer the call of the caller when they call upon
                Me."
              </p>
            </div>
            <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5">
              <p className="eyebrow mb-3">Urdu</p>
              <p className="urdu-text text-right text-base leading-9 text-[var(--foreground)]">
                نمونہ اردو ترجمہ: "اور جب میرے بندے آپ سے میرے بارے میں پوچھیں
                تو بے شک میں قریب ہوں، پکارنے والے کی پکار کا جواب دیتا ہوں جب
                وہ مجھے پکارتا ہے۔"
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--background)] p-5 text-sm leading-7 text-[var(--muted)]">
          In the last ten nights, dua is not only a request list. It is a return,
          an admission of need, and a moment of truth between a servant and the
          One who is already near.
        </div>
      </div>
    </section>
  );
}

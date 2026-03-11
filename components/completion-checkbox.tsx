"use client";

import { useEffect, useState } from "react";

type CompletionCheckboxProps = {
  storageKey: string;
};

export function CompletionCheckbox({ storageKey }: CompletionCheckboxProps) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(window.localStorage.getItem(storageKey) === "true");
  }, [storageKey]);

  function toggleValue() {
    const nextValue = !checked;
    setChecked(nextValue);
    window.localStorage.setItem(storageKey, String(nextValue));
  }

  return (
    <button
      type="button"
      onClick={toggleValue}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition ${
        checked
          ? "border-emerald-600 bg-emerald-100 text-emerald-900 dark:border-emerald-500 dark:bg-emerald-950/50 dark:text-emerald-100"
          : "border-[var(--border-soft)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
      }`}
      aria-pressed={checked}
    >
      <span className="text-base leading-none">{checked ? "✓" : "○"}</span>
      <span>{checked ? "Marked read" : "Mark as read"}</span>
    </button>
  );
}

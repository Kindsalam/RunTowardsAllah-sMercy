"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";
type FontScale = "sm" | "md" | "lg";

type SiteSettingsContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  showTransliteration: boolean;
  toggleTransliteration: () => void;
  fontScale: FontScale;
  setFontScale: (scale: FontScale) => void;
};

const STORAGE_KEYS = {
  theme: "rtam-theme",
  transliteration: "rtam-show-transliteration",
  fontScale: "rtam-font-scale",
} as const;

const SiteSettingsContext = createContext<SiteSettingsContextValue | null>(null);

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [fontScale, setFontScaleState] = useState<FontScale>("md");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(STORAGE_KEYS.theme) as
      | Theme
      | null;
    const storedTransliteration = window.localStorage.getItem(
      STORAGE_KEYS.transliteration,
    );
    const storedFontScale = window.localStorage.getItem(
      STORAGE_KEYS.fontScale,
    ) as FontScale | null;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    setThemeState(storedTheme ?? (prefersDark ? "dark" : "light"));
    setShowTransliteration(storedTransliteration !== "false");
    setFontScaleState(storedFontScale ?? "md");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.fontScale = fontScale;

    window.localStorage.setItem(STORAGE_KEYS.theme, theme);
    window.localStorage.setItem(
      STORAGE_KEYS.transliteration,
      String(showTransliteration),
    );
    window.localStorage.setItem(STORAGE_KEYS.fontScale, fontScale);
  }, [theme, showTransliteration, fontScale]);

  const value = useMemo<SiteSettingsContextValue>(
    () => ({
      theme,
      setTheme: setThemeState,
      toggleTheme: () =>
        setThemeState((current) => (current === "light" ? "dark" : "light")),
      showTransliteration,
      toggleTransliteration: () =>
        setShowTransliteration((current) => !current),
      fontScale,
      setFontScale: setFontScaleState,
    }),
    [fontScale, showTransliteration, theme],
  );

  return (
    <SiteSettingsContext.Provider value={value}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);

  if (!context) {
    throw new Error("useSiteSettings must be used within SiteSettingsProvider");
  }

  return context;
}

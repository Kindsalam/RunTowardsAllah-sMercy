import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

const sizeClasses = {
  sm: "sacred-arabic-size-sm",
  md: "sacred-arabic-size-md",
  lg: "sacred-arabic-size-lg",
  hero: "sacred-arabic-size-hero",
  quran: "sacred-arabic-size-quran",
} as const;

const quranAnnotationPattern = /[\u06DF\u06E0\u06E2\u06ED]/;

type SacredArabicSize = keyof typeof sizeClasses;

type SacredArabicTextProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  size?: SacredArabicSize;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "dir" | "lang">;

function extractTextContent(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(extractTextContent).join("");
  }

  return "";
}

export function SacredArabicText<T extends ElementType = "p">({
  as,
  children,
  className = "",
  size = "lg",
  ...rest
}: SacredArabicTextProps<T>) {
  const Component = as ?? "p";
  const hasAnnotationGlyphs = quranAnnotationPattern.test(extractTextContent(children));
  const annotationClass = hasAnnotationGlyphs ? "sacred-arabic-annotation-safe" : "";

  return (
    <Component
      dir="rtl"
      lang="ar"
      translate="no"
      className={`sacred-arabic ${annotationClass} ${sizeClasses[size]} text-right ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}

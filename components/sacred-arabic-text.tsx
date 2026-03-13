import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

const sizeClasses = {
  sm: "sacred-arabic-size-sm",
  md: "sacred-arabic-size-md",
  lg: "sacred-arabic-size-lg",
  hero: "sacred-arabic-size-hero",
  quran: "sacred-arabic-size-quran",
} as const;

type SacredArabicSize = keyof typeof sizeClasses;

type SacredArabicTextProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  size?: SacredArabicSize;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "dir" | "lang">;

export function SacredArabicText<T extends ElementType = "p">({
  as,
  children,
  className = "",
  size = "lg",
  ...rest
}: SacredArabicTextProps<T>) {
  const Component = as ?? "p";

  return (
    <Component
      dir="rtl"
      lang="ar"
      translate="no"
      className={`sacred-arabic ${sizeClasses[size]} text-right ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}

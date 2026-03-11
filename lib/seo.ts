import type { Metadata } from "next";

export const siteUrl = "https://mercyofallah.com";
export const siteName = "Run Towards Mercy of Allah";
export const defaultDescription =
  "A calm reading space for reviewed Qur'anic duas and hadith-based adhkar, with Arabic, English, Urdu, and clear source references.";

type CreateMetadataArgs = {
  title?: string;
  description?: string;
  path?: string;
  canonicalPath?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/",
  canonicalPath,
  noIndex = false,
}: CreateMetadataArgs): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath ?? path,
    },
    openGraph: {
      type: "website",
      siteName,
      url: path,
      title: title ?? siteName,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? siteName,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : undefined,
  };
}

import { createMetadata } from "@/lib/seo";
import { AdhkarPage } from "@/components/adhkar-page";

export const metadata = createMetadata({
  title: "Morning and Evening Adhkar",
  description:
    "Read morning and evening adhkar in one calm reading space, with Arabic, English, Urdu, and clear hadith references.",
  path: "/adhkar",
});

export default function AdhkarRoute() {
  return <AdhkarPage />;
}

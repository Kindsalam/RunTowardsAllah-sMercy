import { MorningAdhkarPage } from "@/components/morning-adhkar-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Morning Adhkar",
  description:
    "Read morning adhkar in Arabic, English, and Urdu in a calm reading layout with visible references and completion tracking.",
  path: "/adhkar/morning",
});

export default function MorningAdhkarRoute() {
  return <MorningAdhkarPage />;
}

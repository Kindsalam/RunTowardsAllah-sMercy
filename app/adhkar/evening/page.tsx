import { EveningAdhkarPage } from "@/components/evening-adhkar-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Evening Adhkar",
  description:
    "Read evening adhkar in Arabic, English, and Urdu in a calm reading layout with visible references and completion tracking.",
  path: "/adhkar/evening",
});

export default function EveningAdhkarRoute() {
  return <EveningAdhkarPage />;
}

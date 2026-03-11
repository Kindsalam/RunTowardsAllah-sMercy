import { AdhkarAliasPage } from "@/components/adhkar-alias-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Evening Adhkar",
  description:
    "Evening adhkar now lives inside the combined daily adhkar page.",
  path: "/evening-adhkar",
  canonicalPath: "/adhkar",
  noIndex: true,
});

export default function EveningAdhkarRoute() {
  return (
    <AdhkarAliasPage
      eyebrow="Evening Adhkar"
      title="Evening adhkar now lives inside the daily adhkar page"
      description="Use the combined adhkar page to open the evening remembrance section."
      targetHref="/adhkar#evening-adhkar-section"
      targetLabel="Open Evening Adhkar"
    />
  );
}

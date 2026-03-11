import { AdhkarAliasPage } from "@/components/adhkar-alias-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Morning Adhkar",
  description:
    "Morning adhkar now lives inside the combined daily adhkar page.",
  path: "/morning-adhkar",
  canonicalPath: "/adhkar",
  noIndex: true,
});

export default function MorningAdhkarRoute() {
  return (
    <AdhkarAliasPage
      eyebrow="Morning Adhkar"
      title="Morning adhkar now lives inside the daily adhkar page"
      description="Use the combined adhkar page to open the dedicated morning remembrance section."
      targetHref="/adhkar#morning-adhkar-section"
      targetLabel="Open Morning Adhkar"
    />
  );
}

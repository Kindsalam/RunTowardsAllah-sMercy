import { AdhkarAliasPage } from "@/components/adhkar-alias-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Morning Azkar",
  description:
    "This spelling variant now points readers to the combined daily adhkar page.",
  path: "/morning-azkar",
  canonicalPath: "/adhkar",
  noIndex: true,
});

export default function MorningAzkarPage() {
  return (
    <AdhkarAliasPage
      eyebrow="Morning Azkar"
      title="Use the daily adhkar page for morning remembrance"
      description="This alternate spelling is kept only to guide older links to the combined public adhkar page."
      targetHref="/adhkar#morning-adhkar-section"
      targetLabel="Open Morning Adhkar"
    />
  );
}

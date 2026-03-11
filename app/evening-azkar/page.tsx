import { AdhkarAliasPage } from "@/components/adhkar-alias-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Evening Azkar",
  description:
    "This spelling variant now points readers to the combined daily adhkar page.",
  path: "/evening-azkar",
  canonicalPath: "/adhkar",
  noIndex: true,
});

export default function EveningAzkarPage() {
  return (
    <AdhkarAliasPage
      eyebrow="Evening Azkar"
      title="Use the daily adhkar page for evening remembrance"
      description="This alternate spelling is kept only to guide older links to the combined public adhkar page."
      targetHref="/adhkar#evening-adhkar-section"
      targetLabel="Open Evening Adhkar"
    />
  );
}

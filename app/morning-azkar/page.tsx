import { RouteBridgePage } from "@/components/route-bridge-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Morning Azkar",
  description:
    "This spelling variant now points readers to the Morning Adhkar page inside the Adhkar section.",
  path: "/morning-azkar",
  canonicalPath: "/adhkar/morning",
  noIndex: true,
});

export default function MorningAzkarPage() {
  return (
    <RouteBridgePage
      eyebrow="Morning Azkar"
      title="Use the Morning Adhkar page inside the Adhkar section"
      description="This alternate spelling is kept only to guide older links to the current public route."
      supportingText="The canonical route now lives under /adhkar/morning, while this older spelling remains available as a safe bridge."
      primaryHref="/adhkar/morning"
      primaryLabel="Open Morning Adhkar"
      secondaryHref="/adhkar"
      secondaryLabel="Open Adhkar"
    />
  );
}

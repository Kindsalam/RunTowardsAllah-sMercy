import { RouteBridgePage } from "@/components/route-bridge-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Evening Azkar",
  description:
    "This spelling variant now points readers to the Evening Adhkar page inside the Adhkar section.",
  path: "/evening-azkar",
  canonicalPath: "/adhkar/evening",
  noIndex: true,
});

export default function EveningAzkarPage() {
  return (
    <RouteBridgePage
      eyebrow="Evening Azkar"
      title="Use the Evening Adhkar page inside the Adhkar section"
      description="This alternate spelling is kept only to guide older links to the current public route."
      supportingText="The canonical route now lives under /adhkar/evening, while this older spelling remains available as a safe bridge."
      primaryHref="/adhkar/evening"
      primaryLabel="Open Evening Adhkar"
      secondaryHref="/adhkar"
      secondaryLabel="Open Adhkar"
    />
  );
}

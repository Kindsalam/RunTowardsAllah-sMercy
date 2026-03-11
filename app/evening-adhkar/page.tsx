import { RouteBridgePage } from "@/components/route-bridge-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Evening Adhkar",
  description:
    "Evening adhkar now lives inside the Adhkar section of the site.",
  path: "/evening-adhkar",
  canonicalPath: "/adhkar/evening",
  noIndex: true,
});

export default function EveningAdhkarRoute() {
  return (
    <RouteBridgePage
      eyebrow="Evening Adhkar"
      title="Evening adhkar now lives inside the Adhkar section"
      description="Use the dedicated evening route inside the Adhkar section for the current public page."
      supportingText="This older URL still works, but the main route now lives inside the wider Adhkar section."
      primaryHref="/adhkar/evening"
      primaryLabel="Open Evening Adhkar"
      secondaryHref="/adhkar"
      secondaryLabel="Open Adhkar"
    />
  );
}

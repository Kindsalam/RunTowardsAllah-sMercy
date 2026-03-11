import { RouteBridgePage } from "@/components/route-bridge-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Morning Adhkar",
  description:
    "Morning adhkar now lives inside the Adhkar section of the site.",
  path: "/morning-adhkar",
  canonicalPath: "/adhkar/morning",
  noIndex: true,
});

export default function MorningAdhkarRoute() {
  return (
    <RouteBridgePage
      eyebrow="Morning Adhkar"
      title="Morning adhkar now lives inside the Adhkar section"
      description="Use the dedicated morning route inside the Adhkar section for the current public page."
      supportingText="This older URL still works, but the main route now lives inside the wider Adhkar section."
      primaryHref="/adhkar/morning"
      primaryLabel="Open Morning Adhkar"
      secondaryHref="/adhkar"
      secondaryLabel="Open Adhkar"
    />
  );
}

import { RouteBridgePage } from "@/components/route-bridge-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Rabbana Duas",
  description:
    "Rabbana Duas now lives under the Duas section of the site.",
  path: "/rabbana-duas",
  canonicalPath: "/quran/rabbana-duas",
  noIndex: true,
});

export default function RabbanaDuasBridgeRoute() {
  return (
    <RouteBridgePage
      eyebrow="Duas"
      title="Rabbana duas now sits under Duas"
      description="The Rabbana collection is still available on its current page. It is now grouped under Duas so the navigation stays simpler."
      supportingText="Existing links still work here, but the main destination is now the Rabbana page surfaced inside the Duas section."
      primaryHref="/quran/rabbana-duas"
      primaryLabel="Open Rabbana Duas"
      secondaryHref="/duas"
      secondaryLabel="Open Duas"
    />
  );
}

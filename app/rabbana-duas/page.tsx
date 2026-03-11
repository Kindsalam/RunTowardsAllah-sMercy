import { RouteBridgePage } from "@/components/route-bridge-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Rabbana Duas",
  description:
    "Rabbana Duas now lives inside the Qur'an section of the site.",
  path: "/rabbana-duas",
  canonicalPath: "/quran/rabbana-duas",
  noIndex: true,
});

export default function RabbanaDuasBridgeRoute() {
  return (
    <RouteBridgePage
      eyebrow="Qur’an"
      title="Rabbana duas now lives inside the Qur’an section"
      description="The Rabbana collection is still available. It now sits under the Qur’an section so the site structure can grow more clearly."
      supportingText="Existing links still work here, but the main destination is now the Qur’an route for Rabbana duas."
      primaryHref="/quran/rabbana-duas"
      primaryLabel="Open Rabbana Duas"
      secondaryHref="/quran"
      secondaryLabel="Open Qur’an"
    />
  );
}

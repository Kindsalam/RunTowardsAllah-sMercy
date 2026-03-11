import { RabbanaDuasPage } from "@/components/rabbana-duas-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Rabbana Duas",
  description:
    "Read reviewed Rabbana duas from the Qur'an with Arabic, English, Urdu, and clear surah and ayah references.",
  path: "/quran/rabbana-duas",
});

export default function QuranRabbanaDuasRoute() {
  return <RabbanaDuasPage />;
}

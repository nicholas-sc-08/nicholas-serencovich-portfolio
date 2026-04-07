import SectionOne from "@/components/SectionOne";
import { AnimatePresence } from "framer-motion";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }: { params: Promise<{ lang: "en" | "pt" }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return (
    <AnimatePresence>
      <div className="flex flex-col items-center">
      <SectionOne dict={{ title: dict.sectionOne.title, subtitle: dict.sectionOne.subtitle, cta: dict.sectionOne.cta }} />
      </div>
    </AnimatePresence>
  );
}

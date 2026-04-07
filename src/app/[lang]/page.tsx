import SectionOne from "@/components/SectionOne";
import { AnimatePresence } from "framer-motion";
import { getDictionary } from "@/dictionaries";
import Header from "@/components/Header";

export default async function Home({ params }: { params: Promise<{ lang: "en" | "pt" }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <AnimatePresence>
      <Header key={"header"} dict={dict.header}/>
      <div className="flex flex-col items-center">
        <SectionOne key={"header"} dict={{ title: dict.sectionOne.title, subtitle: dict.sectionOne.subtitle, cta: dict.sectionOne.cta }} codeCard={dict.codeCard} />
      </div>
    </AnimatePresence>
  );
}

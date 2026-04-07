import SectionOne from "@/components/SectionOne";
import { AnimatePresence } from "framer-motion";
import { getDictionary } from "@/dictionaries";
import Header from "@/components/Header";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";

export default async function Home({ params }: { params: Promise<{ lang: "en" | "pt" }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <AnimatePresence>
      <Header key={"header"} dict={dict.header}/>
      <div className="flex flex-col items-center pt-30 md:pt-0">
        <SectionOne key={"header"} dict={dict.sectionOne} codeCard={dict.codeCard} />
        <SectionTwo dict={dict.sectionTwo}/>
        <SectionThree dict={dict.sectionThree}/>
        <SectionFour dict={dict.sectionFour}/>
      </div>
    </AnimatePresence>
  );
}

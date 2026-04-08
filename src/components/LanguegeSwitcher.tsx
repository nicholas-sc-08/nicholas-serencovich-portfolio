"use client";

import "flag-icons/css/flag-icons.min.css";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { toggleLanguage } from "@/service/language";

export default function LanguageSwitcher() {
    const pathName = usePathname();
    const router = useRouter();

    const currentLanguege = pathName.split("/")[1];
    const newLanguage = currentLanguege == "pt" ? "en" : "pt";

    return (
        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.10 }}>
            <Button variant={"outline"} className={"cursor-pointer"} onClick={() => toggleLanguage(pathName, router, newLanguage)}>{currentLanguege == "en" ?
                <div className="flex items-center gap-3">
                    <span className="fi fi-br"></span>
                    <span>Português</span>
                </div>
                : <div className="flex items-center gap-3">
                    <span className="fi fi-us"></span>
                    <span>English</span>
                </div>
            }</Button>
        </motion.div>
    )
}
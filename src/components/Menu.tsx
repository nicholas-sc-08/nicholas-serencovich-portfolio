"use client";

import { Header } from "@/shared/header";
import { itemVariants } from "@/shared/item-variants";
import { menuVariants } from "@/shared/menu-variants";
import { motion } from "framer-motion";
import Link from "next/link";
import LanguageSwitcher from "./LanguegeSwitcher";
import { LiaLinkedin } from "react-icons/lia";
import { SiGithub } from "react-icons/si";

export default function Menu({ dict }: { dict: Header }) {
    return (
        <motion.div variants={menuVariants} initial="hidden" animate="visible" viewport={{ once: true, amount: 0.3 }} className="md:hidden flex flex-col gap-10 w-screen max-w-screen pt-10 px-10">
            <nav className="flex flex-col gap-5">
                {dict.navLinks.map((link, i) => (
                    <motion.div key={i} variants={itemVariants}>
                        <Link href={"/"} className="hover:text-primary transition-colors duration-300 font-semibold">{link}</Link>
                    </motion.div>
                ))}
            </nav>
            <div className="flex flex-col gap-5 justify-center items-start">
                <motion.div variants={itemVariants} className="cursor-pointer" whileHover={{ scale: 1.10 }} whileTap={{ scale: 0.95 }}>
                    <Link href={"https://github.com/nicholas-sc-08"} target="_blank" className="flex items-center gap-3"><SiGithub size={30} /> Github</Link>
                </motion.div>
                <motion.div variants={itemVariants} className="cursor-pointer" whileHover={{ scale: 1.10 }} whileTap={{ scale: 0.95 }}>
                    <Link href={"https://www.linkedin.com/in/nicholas-s-carvalho/"} target="_blank" className="flex items-center gap-1"><LiaLinkedin size={35} /> LinkedIn</Link>
                </motion.div>
            </div>
            <motion.div variants={itemVariants} className="flex justify-start">
                <LanguageSwitcher />
            </motion.div>
        </motion.div>
    )
}
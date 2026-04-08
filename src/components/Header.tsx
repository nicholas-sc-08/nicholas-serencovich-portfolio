"use client";

import type { Header } from "@/shared/header";
import { headerVariants } from "@/shared/header-variants";
import { itemVariants } from "@/shared/item-variants";
import { motion } from "framer-motion";
import Link from "next/link";
import { LiaLinkedin } from "react-icons/lia";
import { SiGithub } from "react-icons/si";
import LanguageSwitcher from "./LanguegeSwitcher";
import { Button } from "./ui/button";
import { Ellipsis } from "lucide-react";
import Menu from "./Menu";
import { useRef, useState } from "react";
import ThemeButton from "./ThemeButton";

export default function Header({ dict }: { dict: Header }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const ref = useRef(null);
    return (
        <motion.header variants={headerVariants} className="bg-secondary z-40 border-border border-2 w-screen max-w-screen py-5 fixed" initial="hidden" whileInView={"visible"} viewport={{ once: true, amount: 0.3 }}>
            <motion.div className="flex justify-between items-center px-10">
                <motion.div variants={itemVariants} className="flex items-center justify-center">
                    <img src="/NSLogo.png" className="w-13"/>
                </motion.div>
                <nav className="hidden md:flex gap-5 items-center">
                    {dict.navLinks.map((link, i) => (
                        <motion.div key={i} variants={itemVariants}>
                            <Link href={`#${link.id}`} className="hover:text-primary transition-colors duration-300 font-semibold">{link.name}</Link>
                        </motion.div>
                    ))}
                    <div className="flex ml-5 items-center">
                        <motion.div variants={itemVariants} className="cursor-pointer" whileHover={{ scale: 1.10 }} whileTap={{ scale: 0.95 }}>
                            <Link href={"https://github.com/nicholas-sc-08"} target="_blank"><SiGithub size={25} /></Link>
                        </motion.div>
                        <motion.div variants={itemVariants} className="cursor-pointer" whileHover={{ scale: 1.10 }} whileTap={{ scale: 0.95 }}>
                            <Link href={"https://www.linkedin.com/in/nicholas-s-carvalho/"} target="_blank"><LiaLinkedin size={35} /></Link>
                        </motion.div>
                    </div>
                    <motion.div variants={itemVariants}>
                        <ThemeButton />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <LanguageSwitcher />
                    </motion.div>
                </nav>
                <div className="md:hidden">
                    <motion.div whileTap={{ scale: 0.95 }} whileFocus={{ scale: 1.05 }}>
                        <Button onClick={() => setMenuOpen(!menuOpen)}><Ellipsis /></Button>
                    </motion.div>
                </div>
            </motion.div>
            {menuOpen &&
                <Menu dict={dict} key={"menu"} />
            }
        </motion.header>
    )
}
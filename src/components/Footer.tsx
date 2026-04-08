"use client";

import Link from "next/link";
import { SiGithub, SiGmail } from "react-icons/si";
import { LiaLinkedinIn } from "react-icons/lia";
import { motion } from "framer-motion";
import { containerVariants } from "@/shared/container-variants";
import { itemVariants } from "@/shared/item-variants";
import { FooterProps } from "@/shared/footer";

export default function Footer({ dict }: { dict: FooterProps }) {
    const currentYear = new Date().getFullYear();
    return (
        <motion.footer variants={containerVariants} initial="hidden" whileInView={"visible"} viewport={{ once: true, amount: 0.3 }} className="w-full pt-15 border-t border-border bg-background">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-2 md:text-start text-center">
                    <div className="flex items-center md:justify-start justify-center">
                    <motion.img src="/NSLogo.png" variants={itemVariants} className="text-xl font-bold text-foreground w-20"/>
                    </div>
                    <motion.p variants={itemVariants} className="text-muted-foreground max-w-xs text-sm">{dict.description}</motion.p>
                </div>
                <nav className="flex gap-6 text-sm font-medium text-muted-foreground">
                    {dict.navLinks.map((link, i) => (
                        <motion.div key={i} variants={itemVariants}>
                            <Link href={`#${link.id}`} className="hover:text-primary font-bold transition-colors ">{link.name}</Link>
                        </motion.div>
                    ))}
                </nav>
                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex gap-4">
                        <motion.div variants={itemVariants} className="flex items-center justify-center" whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
                            <Link href="https://github.com/nicholas-sc-08" target="_blank" className="p-2 border-border border-2 bg-secondary rounded-full transition-all"><SiGithub size={20} /></Link>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-center justify-center" whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
                            <Link href="https://www.linkedin.com/in/nicholas-s-carvalho/" target="_blank" className="p-2 border-border border-2 bg-secondary rounded-full transition-all"><LiaLinkedinIn size={20} /></Link>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-center justify-center" whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
                            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=nicholassc.2008@gmail.com" target="_blank" className="p-2 border-border border-2 bg-secondary rounded-full transition-all"><SiGmail size={20} /></Link>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center border-border border-t-2 py-10 mt-20">
                <motion.p variants={itemVariants} className="text-xs text-center text-muted-foreground">© {currentYear} - Florianópolis, Brasil • Licensed under CC BY-NC-ND 4.0</motion.p>
            </div>
        </motion.footer>
    );
}
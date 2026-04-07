"use client";

import { containerVariants } from "@/shared/container-variants";
import { itemVariants } from "@/shared/item-variants";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import CodeCard from "./CodeCard";

export default function SectionOne({ dict, codeCard }: SectionOneProps) {
    return (
        <motion.section variants={containerVariants} className="flex md:flex-row flex-col py-20 px-10 md:h-screen items-center max-w-screen" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.div className="flex flex-col gap-10 text-slate-900">
                <motion.div className="flex flex-col gap-5">
                    <motion.h1 variants={itemVariants} className="text-5xl text-start font-bold">{dict.title}</motion.h1>
                    <motion.p variants={itemVariants} className="text-muted-foreground md:w-1/2 text-start">{dict.subtitle}</motion.p>
                </motion.div>
                <motion.div className="flex gap-5 md:flex-row items-start flex-col">
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="cursor-pointer px-8 text-lg rounded-xl shadow shadow-primary/20" size={"lg"}>{dict.cta}</Button>
                    </motion.div>
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" className="cursor-pointer rounded-xl px-8 text-lg" size={"lg"}>{dict.cta}</Button>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div className="pt-10">
            <CodeCard dict={codeCard}/>
            </motion.div>
        </motion.section>
    )
}
"use client";

import { containerVariants } from "@/shared/container-variants";
import { itemVariants } from "@/shared/item-variants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionTwo({ dict }: SectionTwoProps) {
    return (
        <motion.section variants={containerVariants} initial="hidden" whileInView={"visible"} viewport={{ once: true, amount: 0.3 }} className="bg-secondary w-full p-10 flex items-center justify-around gap-10">
            <motion.div variants={itemVariants} className="flex-shrink-0 justify-center items-center">
                <Image src={"https://avatars.githubusercontent.com/u/153335120?v=4"} alt="profile image" width={350} height={350} className="rounded-2xl shadow-xl"/>
            </motion.div>
            <aside className="flex flex-col gap-5">
                <motion.h2 variants={itemVariants} className="text-4xl text-start font-bold">{dict.title}</motion.h2>
                <article className="flex flex-col gap-5 max-w-2xl">
                    <motion.p>{dict.paragraphOne}</motion.p>
                    <motion.p>{dict.paragraphTwo}</motion.p>
                </article>
            </aside>
        </motion.section>
    )
}
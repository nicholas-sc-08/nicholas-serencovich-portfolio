"use client";

import { containerVariants } from "@/shared/container-variants";
import { itemVariants } from "@/shared/item-variants";
import { SectionThreeProps } from "@/shared/section-three";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function SectionThree({ dict }: SectionThreeProps) {
    return (
        <motion.section variants={containerVariants} initial="hidden" whileInView={"visible"} viewport={{ once: true, amount: 0.3 }} className="w-full max-w-screen h-screen flex flex-col gap-10 p-10">
            <motion.h2 variants={itemVariants} className="font-bold text-4xl">{dict.title}</motion.h2>
            <motion.div className="flex items-strecth overflow-x-auto scrollbar-hide py-10 px-5 snap-x snap-mandatory cursor-grab active:cursor-grabbing gap-10">
                {dict.projects.map((project, i) => (
                    <ProjectCard title={project.title} description={project.description} image={project.image} technologies={project.technologies} key={i} />
                ))}
            </motion.div>
        </motion.section>
    )
}
"use client";

import { containerVariants } from "@/shared/container-variants";
import { itemVariants } from "@/shared/item-variants";
import { SectionThreeProps } from "@/shared/section-three";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function SectionThree({ dict }: SectionThreeProps) {
    return (
        <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="w-full max-w-screen min-h-screen flex flex-col gap-10 py-20">
            <div className="px-10">
                <motion.h2 variants={itemVariants} className="font-bold text-4xl">
                    {dict.title}
                </motion.h2>
            </div>
            <div className="relative w-full group">
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <motion.div className="flex items-stretch overflow-x-auto scrollbar-hide px-10 py-10 snap-x snap-mandatory cursor-grab active:cursor-grabbing gap-10 mask-linear" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                    {dict.projects.map((project, i) => (
                        <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ y: -10, transition: { duration: 0.2 } }} className="flex-shrink-0 w-[80vw] md:w-[420px] snap-center">
                            <ProjectCard title={project.title} description={project.description} image={project.image} technologies={project.technologies} />
                        </motion.div>
                    ))}
                </motion.div>
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
        </motion.section>
    );
}
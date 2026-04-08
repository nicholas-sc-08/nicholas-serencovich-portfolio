"use client";

import { containerVariants } from "@/shared/container-variants";
import { itemVariants } from "@/shared/item-variants";
import { SectionFourProps } from "@/shared/section-four";
import { backendSkills, frontendSkills, infraSkills } from "@/shared/skills";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";

export default function SectionFour({ dict }: SectionFourProps) {
    return (
        <motion.section id={dict.id} className="p-10 w-full border-border border-2 bg-secondary md:text-start text-center grid md:grid-cols-2 grid-cols-1 gap-15" variants={containerVariants} initial="hidden" whileInView={"visible"} viewport={{ once: true, amount: 0.3 }}>
            <div className="flex flex-col gap-5">
                <motion.h3 className="text-3xl font-bold" variants={itemVariants}>{dict.title}</motion.h3>
                <motion.p className="leading-relaxed max-w-xl text-muted-foreground" variants={itemVariants}>{dict.description}</motion.p>
            </div>
            <div className="flex flex-col gap-10 font-semibold text-2xl">
                <motion.h4 variants={itemVariants}>{dict.groupSkillOne}</motion.h4>
                <div className="flex md:justify-start justify-center flex-wrap gap-10">
                    {infraSkills.map((skill, i) => (
                        <SkillIcon icon={skill.icon} name={skill.name} key={i} />
                    ))}
                </div>
                <motion.h4 variants={itemVariants}>{dict.groupSkillTwo}</motion.h4>
                <div className="flex md:justify-start justify-center flex-wrap gap-10">
                    {backendSkills.map((skill, i) => (
                        <SkillIcon icon={skill.icon} name={skill.name} key={i} />
                    ))}
                </div>
                <motion.h4 variants={itemVariants}>{dict.groupSkillThree}</motion.h4>
                <div className="flex md:justify-start justify-center flex-wrap gap-10">
                    {frontendSkills.map((skill, i) => (
                        <SkillIcon icon={skill.icon} name={skill.name} key={i} />
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
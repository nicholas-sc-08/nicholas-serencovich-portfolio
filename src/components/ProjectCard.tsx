"use client";

import { ProjectCardProps } from "@/shared/section-three";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";
import { containerVariants } from "@/shared/container-variants";
import { itemVariants } from "@/shared/item-variants";
import Image from "next/image";

export default function ProjectCard({ title, description, image, technologies }: ProjectCardProps) {
    return (
        <motion.div variants={containerVariants} whileInView={"visible"} initial="hidden" viewport={{ once: true, amount: 0.3 }} whileHover={{ scale: 1.05 }} className="full p-5">
            <Card className="object-cover">
                <CardHeader className="relative w-full aspect-video overflow-hidden flex items-center justify-center">
                    <motion.img variants={itemVariants} src={image} className="rounded-xl w-full h-full object-cover" />
                </CardHeader>
                <CardContent className="flex flex-col gap-5">
                    <motion.h3 variants={itemVariants} className="font-bold text-2xl ">{title}</motion.h3>
                    <motion.p variants={itemVariants} className="max-w-full text-muted-foreground line-clamp-5">{description}</motion.p>
                    <div className="flex gap-3">
                        {technologies.map((tech, i) => (
                            <motion.div key={i} variants={itemVariants} className="flex items-center justify-center">
                                <Image src={tech.image} alt={tech.alt || "tech icon"} width={23} height={25} className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
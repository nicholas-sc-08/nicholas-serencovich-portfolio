"use client";

import { containerVariants } from "@/shared/container-variants";
import { motion } from "framer-motion";

export default function SectionFive() {
    return (
        <motion.section variants={containerVariants} initial="hidden" whileInView={"visible"} viewport={{ once: true, amount: 0.3 }}>
            
        </motion.section>
    )
}
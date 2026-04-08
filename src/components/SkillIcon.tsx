"use client";

import { itemVariants } from "@/shared/item-variants";
import { motion } from "framer-motion";

export default function SkillIcon({ icon, name }: { icon: string, name: string }) {
    return (
        <motion.div variants={itemVariants} viewport={{ once: true, amount: 0.3 }} className="flex flex-col items-center justify-center gap-5">
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}>
                <motion.img whileHover={{scale: 1.10}} src={icon} alt={name} className="w-12 h-12 grayscale hover:grayscale-0 transition-all duration-500" />
            </motion.div>
            <motion.span variants={itemVariants} className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{name}</motion.span>
        </motion.div>
    )
}
"use client";

import { itemVariants } from "@/shared/item-variants";
import { StatusBadge, StatusType } from "@/shared/section-one";
import { motion } from "framer-motion";
import { BookMarked, GitCommitVertical, GitPullRequest, Star } from "lucide-react";
import AnimatedValue from "./AnimatedValue";

// StatusIcon.tsx

export default function StatusIcon({ type, title, value }: StatusBadge) {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <motion.div variants={itemVariants} className="bg-primary text-secondary p-1 w-8 h-8 flex justify-center items-center rounded-full">
                {type == StatusType.COMMITS && <GitCommitVertical />}
                {type == StatusType.PULLREQUEST && <GitPullRequest />}
                {type == StatusType.STARS && <Star />}
            </motion.div>
            <motion.span suppressHydrationWarning variants={itemVariants} className="text-primary">
                <AnimatedValue value={value} />
            </motion.span>
            <motion.span variants={itemVariants} className="text-muted-foreground font-bold">{title}</motion.span>
        </div>
    );
}
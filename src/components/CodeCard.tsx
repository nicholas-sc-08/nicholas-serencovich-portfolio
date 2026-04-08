"use client";

import { itemVariants } from "@/shared/item-variants";
import { motion } from "framer-motion";
import type { CodeCard } from "@/shared/section-one";

export default function CodeCard({ dict }: { dict: CodeCard }) {
    return (
        <motion.div className="w-full max-w-[600px] md:aspect-video aspect-auto bg-slate-900 rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-700/50 p-5 font-mono text-start text-sm leading-relaxed">
            <div className="flex gap-1.5 mb-5">
                <motion.div variants={itemVariants} className="w-3 h-3 rounded-full bg-red-500" ></motion.div>
                <motion.div variants={itemVariants} className="w-3 h-3 rounded-full bg-yellow-400"></motion.div>
                <motion.div variants={itemVariants} className="w-3 h-3 rounded-full bg-emerald-500"></motion.div>
            </div>
            <div className="text-slate-400 ">
                <motion.div variants={itemVariants}>
                    <span className="text-blue-400">@RestController</span>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <span className="text-pink-400">public class</span> <span className="text-blue-300">Portfolio</span> {"{"}
                </motion.div>
                <motion.div variants={itemVariants} className="pl-4">
                    <span className="text-blue-400">@GetMapping</span>(<span className="text-amber-400">"/api/projects"</span>)
                </motion.div>
                <motion.div variants={itemVariants} className="pl-4">
                    <span className="text-pink-400">public</span> <span className="text-blue-300">{`ResponseEntity<List`}</span>&lt;<span className="text-emerald-300">{dict.project}</span>&gt; get() {"{"}
                </motion.div>
                <motion.div variants={itemVariants} className="pl-8">
                    <span className="text-pink-400">private final</span> <span className="text-emerald-400">String</span> <span className="text-blue-300">{dict.name} = </span><span>Nicholas Serencovich Carvalho;</span>
                </motion.div>
                <motion.div variants={itemVariants} className="pl-8">
                    <span className="text-pink-400">private final</span> <span className="text-emerald-400">String</span> <span className="text-blue-300">{dict.local} = </span><span>Florianópolis - SC;</span>
                </motion.div>
                <motion.div variants={itemVariants} className="pl-8">
                    <span className="text-pink-400">private</span> <span className="text-emerald-400">Integer</span> <span className="text-blue-300">{dict.age} = </span><span>18;</span>
                </motion.div>
                <motion.div variants={itemVariants} className="py-4 pl-8">
                    <span className="text-blue-300">{`List<`}</span><span className="text-emerald-400">{"Project"}</span><span className="text-blue-300">{">"}</span><span className="text-blue-300"> {dict.projects.toLowerCase()} = </span><span className="text-blue-400">this</span><span>.service.all();</span>
                </motion.div>
                <motion.div variants={itemVariants} className="pl-8 pt-4">
                    <span className="text-pink-400">return</span> <span className="text-blue-400">ResponseEntity</span><span className="text-blue-300">.ok().body(<span className="text-slate-400">projects</span>);</span>
                </motion.div>
                <motion.div variants={itemVariants} className="pl-4"> {"}"} </motion.div>
                <motion.div variants={itemVariants}> {"}"} </motion.div>
            </div>
        </motion.div>
    )
}
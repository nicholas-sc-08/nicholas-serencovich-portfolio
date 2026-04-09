"use client";

import { containerVariants } from "@/shared/container-variants";
import { itemVariants } from "@/shared/item-variants";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import CodeCard from "./CodeCard";
import { SectionOneProps, StatusType } from "@/shared/section-one";
import { useEffect, useState } from "react";
import StatusIcon from "./StatusIcon";
import { fetchGithubData } from "@/service/stats";
import { useRouter } from "next/navigation";
import { SiGithub, SiGmail } from "react-icons/si";
import Link from "next/link";

export default function SectionOne({ dict, codeCard }: SectionOneProps) {
    const [githubStatus, setGithubStats] = useState({ commits: 0, prs: 0, stars: 0 });
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
        fetchGithubData().then(data => setGithubStats(data));
    }, []);

    const status = [{ title: "Commits", type: StatusType.COMMITS, value: githubStatus.commits }, { title: "Pull Requests", type: StatusType.PULLREQUEST, value: githubStatus.prs }, { title: "Stars", type: StatusType.STARS, value: githubStatus.stars }];
    const email = "nicholassc.2008@gmail.com";
    const subject = encodeURIComponent(dict.emailSubject);
    const body = encodeURIComponent(dict.emailBody);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;


    return (
        <motion.section id={dict.id} variants={containerVariants} className="flex md:flex-row flex-col py-20 md:px-10 px-5 md:h-[850px] md:text-start text-center items-end max-w-screen" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <motion.div className="flex flex-col w-full gap-10 text-slate-900">
                <motion.div className="flex flex-col gap-5">
                    <motion.h1 variants={itemVariants} className="text-5xl text-foreground font-bold">{dict.title}</motion.h1>
                    <motion.p variants={itemVariants} className="text-muted-foreground md:w-1/2">{dict.subtitle}</motion.p>
                </motion.div>
                <motion.div className="flex gap-5 md:flex-row md:items-start items-center flex-col">
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="cursor-pointer px-8 text-lg shadow shadow-primary/20" onClick={() => router.push(`https://github.com/nicholas-sc-08?tab=repositories`)} size={"lg"}><SiGithub />{dict.ctaOne}</Button>
                    </motion.div>
                    <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
                        <Link href={gmailUrl} target="_blank">
                            <Button variant="outline" className="cursor-pointer text-primary px-8 text-lg" size={"lg"}><SiGmail />{dict.ctaTwo}</Button>
                        </Link>
                    </motion.div>
                    <div className="block md:hidden">
                        <Link href={mailtoUrl}>
                            <Button variant="secondary" className="cursor-pointer text-primary px-8 text-lg" size={"lg"}>
                                <SiGmail />{dict.ctaTwo}
                            </Button>
                        </Link>
                    </div>
                </motion.div>
                <div className="flex md:justify-start justify-center gap-8 mt-16 ">
                    {status.map((s, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.05 }}>
                            <StatusIcon title={s.title} value={s.value} type={s.type} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <motion.div className="pt-10 w-full h-full flex justify-end items-center">
                <CodeCard dict={codeCard} />
            </motion.div>
        </motion.section>
    )
}
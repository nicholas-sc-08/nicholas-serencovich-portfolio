"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeButton() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <motion.div className="flex justify-center items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant={"outline"} onClick={() => theme == "light" ? setTheme("dark") : setTheme("light")}>{theme == "light" ? <Moon /> : <Sun />}</Button>
        </motion.div>
    )
}
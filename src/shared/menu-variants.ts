import { Variants } from "framer-motion";

export const menuVariants: Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 200,
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    },
    exit: {
        x: "100%",
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.3
        }
    }
}
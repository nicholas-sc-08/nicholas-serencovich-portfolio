import { Variants } from "framer-motion"

export const headerVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

export const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 0,
        y: 0
    }
}
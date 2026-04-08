"use client";

import { useInView, useSpring, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedValue({ value }: { value: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: "some" });

    const springPrice = useSpring(0, { stiffness: 50, damping: 30, restDelta: 0.001 });
    const displayValue = useTransform(springPrice, latest => `${latest.toFixed(0)}`);

    useEffect(() => {
        if (isInView) {
            springPrice.set(value);
        }
    }, [value, isInView, springPrice]);

    return <motion.span ref={ref}>{displayValue}</motion.span>
}
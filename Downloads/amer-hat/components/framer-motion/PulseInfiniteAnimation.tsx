"use client";
import { motion } from "framer-motion";

const PulseInfiniteOpacity = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            animate={{
                opacity: [1, 0.5, 1],
            }}
            transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
            }}
        >
            {children}
        </motion.div>
    );
};

export default PulseInfiniteOpacity;

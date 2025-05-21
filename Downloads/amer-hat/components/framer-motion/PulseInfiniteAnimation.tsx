"use client";
import { motion } from "framer-motion";

const PulseInfiniteOpacity = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      animate={{
        opacity: [1, 0.6, 1],
      }}
      transition={{
        duration: 3,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PulseInfiniteOpacity;

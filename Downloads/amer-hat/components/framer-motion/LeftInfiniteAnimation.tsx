"use client";
import { motion } from "framer-motion";

const LeftInfiniteAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="absolute bottom-10 left-0 md:left-10"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
    >
      {children}
    </motion.div>
  );
};

export default LeftInfiniteAnimation;

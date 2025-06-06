"use client";
import { motion } from "framer-motion";

const LeftInfiniteAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 md:left-10"
      animate={{ y: [0, -20, 0] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
    >
      {children}
    </motion.div>
  );
};

export default LeftInfiniteAnimation;

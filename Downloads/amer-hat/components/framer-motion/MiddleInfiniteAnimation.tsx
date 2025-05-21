"use client";
import { motion } from "framer-motion";

const MiddleInfiniteAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className=""
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
    >
      {children}
    </motion.div>
  );
};

export default MiddleInfiniteAnimation;
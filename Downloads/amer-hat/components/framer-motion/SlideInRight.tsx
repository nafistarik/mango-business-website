"use client";
import { motion } from "framer-motion";

const SlideInRight = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center lg:text-left"
    >
      {children}
    </motion.div>
  );
};

export default SlideInRight;
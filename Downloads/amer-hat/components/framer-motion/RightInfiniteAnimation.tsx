"use client";
import { motion } from "framer-motion";

const RightInfiniteAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className="absolute -top-0 right-0 md:right-10"
      animate={{ y: [0, -20, 0] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
    >
      {children}
    </motion.div>
  );
};

export default RightInfiniteAnimation;

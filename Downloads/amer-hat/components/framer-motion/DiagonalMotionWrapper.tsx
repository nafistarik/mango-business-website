"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
type DiagonalMotionWrapperProps = {
  children: ReactNode;
  distance?: number; 
  duration?: number; 
};

const DiagonalMotionWrapper = ({
  children,
  distance = 20,
  duration = 2,
}: DiagonalMotionWrapperProps) => {
  return (
    <motion.div
      animate={{
        x: [0, distance, 0],
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};

export default DiagonalMotionWrapper;

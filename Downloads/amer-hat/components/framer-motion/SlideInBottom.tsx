"use client"
import { motion } from "framer-motion";

const SlideInBottom = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {children}
          </motion.div>
    );
};

export default SlideInBottom;
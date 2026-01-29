"use client";

import { motion } from "framer-motion";

const GlowCard = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glowing border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200"></div>
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;

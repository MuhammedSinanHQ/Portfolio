"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
     <div className="w-full h-full relative">
    <motion.div 
    initial={{opacity: 0}}
     animate={{opacity: 1,
      transition: {delay: 2, duration: 0.4, ease: "easeIn"},
      }}
      >
        {/* image with float animation */}
        <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease: "easeInOut"},
      }}
        
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]
        mix-blend-lighten absolute animate-float"
        >
            <Image 
            src="/assets/photo1.png"
             priority 
             quality={100}
              fill
            alt=""
             className="object-contain"
              />
        </motion.div>

        {/* Outer glow ring 1 */}
        <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="253" 
            cy="253"
            r="252"
            stroke="#00ff99"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{opacity: 0}}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>

        {/* Main animated circle */}
        <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute top-0 left-0"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle cx="253" 
          cy="253"
           r="250"
            stroke="#00ff99"
             strokeWidth="4"
             strokeLinecap="round"
             strokeLinejoin="round"
             initial={{strokeDasharray: "24 10 0 0"}}
             animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
             }}
             transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
             }}
              />
        </motion.svg>

        {/* Inner rotating circle */}
        <motion.svg 
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute top-0 left-0"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="253" 
            cy="253"
            r="240"
            stroke="#00ff99"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="10 20"
            animate={{
              rotate: [0, -360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>

        {/* Orbiting dots */}
        {[0, 90, 180, 270].map((angle) => (
          <motion.div
            key={`dot-${angle}`}
            className="absolute w-3 h-3 bg-accent rounded-full"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              rotate: [angle, angle + 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: angle / 360 * 2,
            }}
          >
            <div 
              className="w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_#00ff99]"
              style={{
                transform: `translate(-50%, -50%) translateX(${angle % 180 === 0 ? '125px' : '145px'})`,
              }}
            />
          </motion.div>
        ))}

        {/* Pulsing glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
    </motion.div>
  </div>
  )  
}

export default Photo;
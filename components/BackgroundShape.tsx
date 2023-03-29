import React from "react";
import { motion } from "framer-motion";

function BackgroundShape({}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1],
        borderRadius: ["20%", "20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center z-0"
    >
      <div className="absolute border border-5 border-white rounded-full h-[200px] w-[200px] mt-52 animate-ping"></div>
      <div className="rounded-full border border-white h-[300px] w-[300px] absolute mt-52"></div>
      <div className="rounded-full border-4 border-[#b624e6] h-[500px] w-[500px] absolute mt-52 z-2"></div>
      <div className="rounded-full border-4 border-white h-[650px] w-[650px] absolute mt-52 animate-pulse opacity-20"></div>
    </motion.div>
  );
}

export default BackgroundShape;

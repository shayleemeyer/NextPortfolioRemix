import React from "react";
import { motion } from "framer-motion";
import { Leadership } from "../typings";
import LeadershipCard from "./LeadershipCard";

type Props = {
  leadership: Leadership[];
};
function LeadershipExp({ leadership }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute  top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Leadership Experience
      </h3>

      <div className="w-full h-3/4 flex space-x-5 absolute top-32 basis-auto overflow-x-scroll p-10 snap-mandatory scrollbar-thin scrollbar-track-purple-400/20 scrollbar-thumb-[#b624e6] ">
        {leadership
          ?.slice(0)
          .reverse()
          .map((leadership) => (
            <LeadershipCard key={leadership._id} leadership={leadership} />
          ))}
      </div>
    </motion.div>
  );
}

export default LeadershipExp;

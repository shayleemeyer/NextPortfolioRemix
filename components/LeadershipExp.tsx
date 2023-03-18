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
      <h3 className="absolute mb-10 top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Leadership Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-y-scroll p-10 snap-mandatory scrollbar scrollbar-track-purple-400/20 scrollbar-thumb-[#b624e6] mt-20 h-5/6">
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

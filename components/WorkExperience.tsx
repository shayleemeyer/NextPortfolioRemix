import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experience: Experience[];
};

function WorkExperience({ experience }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute  top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        Experience
      </h3>

      <div className="w-full h-3/4 flex space-x-5 absolute top-28 overflow-x-scroll flexBasis p-10 snap-mandatory scrollbar-thin scrollbar-track-purple-400/20 scrollbar-thumb-[#b624e6] ">
        {experience
          ?.slice(0)
          .reverse()
          .map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;

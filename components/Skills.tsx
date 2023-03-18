import React from "react";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";
import { Skill } from "../typings";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
       max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] texxt-gray-500 text-2xl">
        Skills
      </h3>
      <p className="absolute top-32 text-gray-500 text-xs mr-5 m-3">
        Hover to see skill type and proficiency. Green is highly proficient and
        pink is proficient.
      </p>

      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <SkillIcon key={skill._id} skill={skill} directionLeft />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <SkillIcon key={skill._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;

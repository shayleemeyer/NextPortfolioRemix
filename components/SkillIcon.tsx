import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  proficiency?: string;
  skill: Skill;
};

function SkillIcon({ skill, directionLeft }: Props) {
  const skillColor = () => {
    if (skill.color === "Green") {
      return true;
    }
  };
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full object-cover object-top border-gray-500 filter group-hover:grayscale ease-in-out transition duration-300 h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 "
        src={urlFor(skill?.image).url()}
        alt={""}
      ></motion.img>
      <div
        className={
          skillColor()
            ? "group-hover: bg-[#aad795] h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0 absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out "
            : "group-hover: bg-[#f1b1d4] h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0 absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out  "
        }
      >
        <div className=" flex items-center justify-center h-full">
          <p className={"text-xl font-bold opacity-100"}>{skill.title}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillIcon;

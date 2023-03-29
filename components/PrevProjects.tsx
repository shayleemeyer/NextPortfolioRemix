import { CodeProjects } from "../typings";
import React from "react";
import ProjectsCard from "./ProjectsCard";
import { motion } from "framer-motion";

type Props = {
  codeProjects: CodeProjects[];
};

function PrevProjects({ codeProjects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen  flex relative flex-col text-lft md:flex-row max-w-full
      px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute mb-10 top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Portfolio
      </h3>
      <p className="absolute top-32 text-gray-500 text-xs mr-5">
        Click on any project to see git repository
      </p>
      <div className="overflow-scroll h-4/6 scrollbar-thin  scrollbar-track-purple-400/20 scrollbar-thumb-[#b624e6] top-44 absolute">
        <div className="grid grid-cols-2 gap-10 mt-10 md:mt-3">
          {codeProjects?.map((codeProjects) => (
            <ProjectsCard key={codeProjects._id} codeProjects={codeProjects} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default PrevProjects;

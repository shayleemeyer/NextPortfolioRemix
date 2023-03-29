import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { CodeProjects } from "../typings";

type Props = {
  codeProjects: CodeProjects;
};

function ProjectsCard({ codeProjects }: Props) {
  return (
    <div className="m-5 group relative  flex cursor-pointer shadow-xl shadow-slate-400 rounded-lg">
      <a href={codeProjects?.linkToGit} target="_blank" rel="noopener">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
          }}
          className=" xl:w-[550px] xl:h-[350px] w-500 h-500 group-hover:grayscale ease-in-out transition duration-300 "
          src={urlFor(codeProjects?.projImage).url()}
          alt={""}
        />
      </a>
    </div>
  );
}
export default ProjectsCard;

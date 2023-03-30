import React from "react";
import ReferencesCard from "./ReferencesCard";
import { References } from "../typings";
import { motion } from "framer-motion";

type Props = {
  references: References[];
};

function ProfReferences({ references }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen  relative flex ustify-start md:justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ml-20">
        References
      </h3>
      <div className="absolute overflow-auto top-28 j snap-mandatory scrollbar-thin scrollbar-track-purple-400/20 scrollbar-thumb-[#b624e6] ">
        <div className=" flex space-x-10 basis-auto snap-mandatory ">
          {references?.map((references) => (
            <ReferencesCard key={references._id} references={references} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export default ProfReferences;

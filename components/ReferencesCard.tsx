import { References } from "../typings";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";

type Props = {
  references: References;
};

function ReferencesCard({ references }: Props) {
  return (
    <div
      className="max-w-sm basis-auto overflow-scroll md:overflow-visible scrollbar-thin shadow-xl group relative flex shadow-slate-500 bg-[#9c6198] h-200 flex-col rounded-lg items-center space-y-7  
    p-10 transform transition duration-500 hover:scale-110 cursor-pointer  mt-20"
    >
      <div className="px-6 py-4 justify-center">
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
          className="xl:w-[150px] xl:h-[150px] w-25 h-25 rounded-full object-cover object-top center"
          src={urlFor(references?.referenceImage).url()}
          alt={""}
        />
        <div className="h-80 mb-20">
          <div className="font-bold text-xl mt-5">
            {references.referenceName}
          </div>
          <div className="font-bold text-[#362046] text-l mb-2">
            {references.company}
          </div>
          <p className=" font-xs overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#b624e6] overflow-hidden h-5/6">
            {references.statement}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReferencesCard;

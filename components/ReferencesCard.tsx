import { References } from "../typings";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";

type Props = {
  references: References;
};

function ReferencesCard({ references }: Props) {
  return (
    <div
      className="max-w-sm  overflow-scroll scrollbar-thin shadow-xl shadow-slate-500 bg-[#9c6198] h-200 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
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
          <p className=" font-xs">{references.statement}</p>
        </div>
      </div>
    </div>
  );
}

export default ReferencesCard;

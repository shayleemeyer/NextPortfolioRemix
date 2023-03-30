import { References } from "../typings";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type Props = {
  references: References;
};

function ReferencesCard({ references }: Props) {
  return (
    <div
      className="max-w-sm  basis-auto overflow-scroll md:overflow-visible scrollbar-thin shadow-xl group relative flex shadow-slate-500 bg-[#9c6198] flex-col rounded-lg items-center space-y-7  
    p-10 transform transition duration-500 hover:scale-110 cursor-pointer  mt-20"
    >
      <div className="px-6 py-4 justify-center">
        <a
          className="hover:bg-violet-600 z-50"
          href={references?.linkedInLink}
          target="_blank"
          rel="noopener"
        >
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
            className="h-12 w-12  sm:w-14 sm:h-14 md:w-24 md:h-24 xl:w-32 xl:h-32 hover:underline  rounded-full object-cover justify-center ml-10"
            src={urlFor(references?.referenceImage).url()}
            alt={""}
          />

          <div className="h-80 mb-20">
            <div className="relative mt-5  flex-auto flex flex-row justify-between">
              <div className="font-bold text-md md:text-xl ">
                {references.referenceName}
              </div>
              <LinkedInIcon
                onClick={() =>
                  window.open(references?.linkedInLink, "_blank", "noopener")
                }
              />
            </div>

            <div className="font-bold text-[#362046] text-sm md:text-l  mb-2">
              {references.company}
            </div>
            <p className=" font-xs overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#b624e6] overflow-hidden h-5/6">
              {references.statement}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ReferencesCard;

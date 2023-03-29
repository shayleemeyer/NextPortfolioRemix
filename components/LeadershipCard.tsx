import React from "react";
import { motion } from "framer-motion";
import { Leadership } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  leadership: Leadership;
};

function LeadershipCard({ leadership }: Props) {
  return (
    <article
      className="flex relative group flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]  md:w-[600px]  xl:w-[900px] snap-center bg-[#292929]
      p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 basis-auto overflow-y-scroll xl:overflow-hidden scrollbar-thin scrollbar-track-black scrollbar-thumb-[#b624e6] h-100"
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
        className="xl:w-[200px] xl:h-[200px] w-32 h-32 rounded-full object-cover object-top "
        src={urlFor(leadership?.orgImage).url()}
        alt={""}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">
          {leadership.positionTitle}
        </h4>
        <p className="font-bold text-2xl mt-1"> {leadership.organization}</p>
        <div className="flex space-x-2 my-2"></div>
        <p className="uppercase py-5 text-gray-300">{leadership.year}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg h-80 w-80 xl:w-[800px]  ">
          {leadership.leadershipPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default LeadershipCard;

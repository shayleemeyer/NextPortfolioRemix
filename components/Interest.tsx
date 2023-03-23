import React from "react";
import { motion } from "framer-motion";
import InterestCard from "./InterestCard";
import { Interests } from "../typings";
import { useState } from "react";

type Props = {
  interests: Interests[];
};
function Interest({ interests }: Props) {
  const [selected, setSelected] = useState("books");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
       max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Interests
      </h3>
      <div className="flex flex-col h-5/6">
        <div className="relative m-10  text-gray-500 text-xl flex justify-center align-middle ">
          <button
            onClick={() => setSelected("books")}
            className="m-5 hover:underline"
          >
            Reading List
          </button>
          <button
            onClick={() => setSelected("podcasts")}
            className="m-5 hover:underline"
          >
            Podcasts
          </button>

          <button
            onClick={() => setSelected("rhonda")}
            className="m-5 hover:underline"
          >
            Rhonda
          </button>
        </div>
        <div className="grid grid-cols-3 gap-0 overflow-scroll h-4/6 scrollbar-thin  scrollbar-track-purple-400/20 scrollbar-thumb-[#b624e6] ">
          {selected === "podcasts"
            ? interests
                .filter((interests) => interests.interestId === "podcast")
                ?.map((interests) => (
                  <InterestCard key={interests._id} interests={interests} />
                ))
            : selected === "books"
            ? interests
                .filter((interests) => interests.interestId === "book")
                ?.map((interests) => (
                  <InterestCard key={interests._id} interests={interests} />
                ))
            : selected === "rhonda"
            ? interests
                .filter((interests) => interests.interestId === "Rhonda")
                ?.map((interests) => (
                  <InterestCard key={interests._id} interests={interests} />
                ))
            : null}
        </div>
      </div>
    </motion.div>
  );
}

export default Interest;

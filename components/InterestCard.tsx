import React from "react";
import { Interests } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  interests: Interests;
};

function InterestCard({ interests }: Props) {
  return (
    <div className="group relative flex cursor-pointer h-52 w-52 m-10 my-20 shadow-xl shadow-slate-400 rounded-lg ">
      <div className="h-70 w-30">
        {" "}
        <img
          className="z-10 xl:w-[500px] xl:h-[300px] w-500 h-500 group-hover:grayscale ease-in-out transition duration-300 "
          src={urlFor(interests?.interestsImage).url()}
        />
      </div>
    </div>
  );
}

export default InterestCard;

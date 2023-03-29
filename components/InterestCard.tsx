import React from "react";
import { Interests } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  interests: Interests;
};

function InterestCard({ interests }: Props) {
  return (
    <div className=" group relative flex cursor-pointer rounded-lg ">
      <img
        className=" group-hover:grayscale ease-in-out transition duration-300 "
        src={urlFor(interests?.interestsImage).url()}
      />
    </div>
  );
}

export default InterestCard;

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Interests } from "../../typings";

const query = groq`*[_type == "interests"]`;

type Data = {
  interests: Interests[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const interests: Interests[] = await sanityClient.fetch(query);
  res.status(200).json({ interests });
}

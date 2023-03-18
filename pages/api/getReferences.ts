import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { References } from "../../typings";

const query = groq`*[_type == "references"]`;

type Data = {
  references: References[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const references: References[] = await sanityClient.fetch(query);
  res.status(200).json({ references });
}

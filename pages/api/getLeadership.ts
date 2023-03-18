import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Leadership } from "../../typings";

const query = groq`*[_type == "leadership"]`;

type Data = {
  leadership: Leadership[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const leadership: Leadership[] = await sanityClient.fetch(query);
  res.status(200).json({ leadership });
}

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { CodeProjects } from "../../typings";

const query = groq`*[_type == "codeProjects"]`;

type Data = {
  codeProjects: CodeProjects[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const codeProjects: CodeProjects[] = await sanityClient.fetch(query);
  res.status(200).json({ codeProjects });
}

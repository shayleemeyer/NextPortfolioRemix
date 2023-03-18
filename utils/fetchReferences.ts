import { References } from "../typings";

export const fetchReferences = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getReferences`
  );

  const data = await res.json();
  const references: References[] = data.references;

  return references;
};

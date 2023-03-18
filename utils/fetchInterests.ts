import { Interests } from "../typings";

export const fetchInterests = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getInterests`
  );

  const data = await res.json();
  const interests: Interests[] = data.interests;

  return interests;
};

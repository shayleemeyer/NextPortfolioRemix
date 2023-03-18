import { Leadership } from "../typings";

export const fetchLeadership = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getLeadership`
  );

  const data = await res.json();
  const leadership: Leadership[] = data.leadership;

  return leadership;
};

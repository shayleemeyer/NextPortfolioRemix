import { CodeProjects } from "../typings";
export const fetchCodeProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCodeProjects`
  );

  const data = await res.json();
  const codeProjects: CodeProjects[] = data.codeProjects;

  return codeProjects;
};

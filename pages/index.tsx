import Header from "../components/Header";
import Head from "next/head";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import {
  Skill,
  Experience,
  References,
  CodeProjects,
  Leadership,
  Interests,
} from "../typings";
import { GetStaticProps } from "next";
import PrevProjects from "../components/PrevProjects";
import LeadershipExp from "../components/LeadershipExp";
import ProfReferences from "../components/ProfReferences";
import Interest from "../components/Interest";
import Link from "next/link";
import Image from "next/image";
import { userAgent } from "next/server";
import { useEffect, useState } from "react";

type Props = {
  skills: Skill[];
  experience: Experience[];
  references: References[];
  codeProjects: CodeProjects[];
  leadership: Leadership[];
  interests: Interests[];
};
function Home({
  skills,
  experience,
  references,
  codeProjects,
  leadership,
  interests,
}: Props) {
  const [snap, setSnap] = useState(true);
  useEffect(() => {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("safari") != -1) {
      if (ua.indexOf("chrome") > -1) {
        setSnap(true); // Chrome
      } else {
        setSnap(false); // Safari
      }
    }
  }, []);
  console.log("snap!", snap);
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory basis-auto overflow-y-scroll z-0 scrollbar scrollbar-track-purple-400/20 scrollbar-thumb-[#b624e6]">
      <Head>
        <title>Shaylee's Website</title>
      </Head>
      <Header />
      <section id="hero" className={snap ? "snap-center" : "snap-proximity"}>
        <Hero />
      </section>
      <section id="skills" className={snap ? "snap-start" : "snap-proximity"}>
        <Skills skills={skills} />
      </section>
      <section
        id="experience"
        className={snap ? "snap-center" : "snap-proximity"}
      >
        <WorkExperience experience={experience} />
      </section>
      <section id="projects" className={snap ? "snap-start" : "snap-proximity"}>
        <PrevProjects codeProjects={codeProjects} />
      </section>
      <section
        id="leadership"
        className={snap ? "snap-center" : "snap-proximity"}
      >
        <LeadershipExp leadership={leadership} />
      </section>
      <section
        id="interests"
        className={snap ? "snap-center" : "snap-proximity"}
      >
        <Interest interests={interests} />
      </section>
      <section
        id="references"
        className={snap ? "snap-start" : "snap-proximity"}
      >
        <ProfReferences references={references} />
      </section>
      <Link href="#hero">
        <div className="sticky w-half cursor-pointer bottom-20 md:bottom-7 left-0 float-left ">
          <footer>
            <div className="flex justify-start m-10  w-26 ">
              <Image
                width={20}
                height={20}
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer animate-pulse"
                src="/static/me.png"
                alt=""
              />
            </div>
          </footer>
        </div>
      </Link>
    </div>
  );
}

export async function fetchSkills() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSkills`);
  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
}

export async function fetchReferences() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/getReferences`
  );
  const data = await res.json();
  const references: References[] = data.references;

  return references;
}

export async function fetchLeadership() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/getLeadership`
  );

  const data = await res.json();
  const leadership: Leadership[] = data.leadership;

  return leadership;
}
export async function fetchInterests() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/getInterests`
  );

  const data = await res.json();
  const interests: Interests[] = data.interests;

  return interests;
}

export async function fetchExperience() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/getExperience`
  );

  const data = await res.json();
  const experience: Experience[] = data.experience;

  return experience;
}

export async function fetchCodeProjects() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/getCodeProjects`
  );

  const data = await res.json();
  const codeProjects: CodeProjects[] = data.codeProjects;

  return codeProjects;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills = await fetchSkills();
  const references = await fetchReferences();
  const leadership = await fetchLeadership();
  const interests = await fetchInterests();
  const experience = await fetchExperience();
  const codeProjects = await fetchCodeProjects();

  return {
    props: {
      skills,
      experience,
      references,
      codeProjects,
      leadership,
      interests,
    },
    revalidate: 10,
  };
};

export default Home;

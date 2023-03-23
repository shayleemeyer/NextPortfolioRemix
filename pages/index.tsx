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
//import { fetchSkills } from "../utils/fetchSkills";
//import { fetchExperience } from "../utils/fetchExperience";
//import { fetchReferences } from "../utils/fetchReferences";
//import { fetchCodeProjects } from "../utils/fetchCodeProjects";
//import { fetchLeadership } from "../utils/fetchLeadership";
import PrevProjects from "../components/PrevProjects";
import LeadershipExp from "../components/LeadershipExp";
import ProfReferences from "../components/ProfReferences";
import Footer from "../components/Footer";
import Interest from "../components/Interest";
//import { fetchInterests } from "../utils/fetchInterests";
import Link from "next/link";
import Image from "next/image";

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
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Shaylee's Website</title>
      </Head>
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experience={experience} />
      </section>
      <section id="projects" className="snap-start">
        <PrevProjects codeProjects={codeProjects} />
      </section>
      <section id="leadership" className="snap-center">
        <LeadershipExp leadership={leadership} />
      </section>
      <section id="interests" className="snap-center">
        <Interest interests={interests} />
      </section>
      <section id="references" className="snap-start">
        <ProfReferences references={references} />
      </section>
      <section className="snap-start">
        <Footer />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-20 w-full cursor-pointer">
          <div className="flex justify-start m-10">
            <Image
              width={20}
              height={20}
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer animate-pulse"
              src="/static/me.png"
              alt=""
            />
          </div>
        </footer>
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

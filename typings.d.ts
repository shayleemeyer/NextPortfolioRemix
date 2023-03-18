import { ReactNode } from "react";
import { TitledListValue } from "sanity";
import { Image } from "sanity";
import { Url } from "url";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface Skill extends Base {
  summary: ReactNode;
  _id: Key | null | undefined;
  _type: "skill";
  image: Image;
  title: string;
  url: string;
  color: string;
}

export interface Experience extends Base {
  _type: "experience";
  companyImage: Image;
  jobTitle: string;
  company: string;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyHere: boolean;
  points: string[];
}

export interface References extends Base {
  _type: "references";
  referenceImage: Image;
  referenceName: string;
  company: string;
  statement: string;
}

export interface CodeProjects extends Base {
  _type: "codeProjects";
  language: string;
  linkToGit: string;
  projImage: Image;
}

export interface Leadership extends Base {
  _type: "leadership";
  orgImage: Image;
  positionTitle: string;
  organization: string;
  year: string;
  leadershipPoints: string[];
}

export interface Interests extends Base {
  _type: "interests";
  interestsImage: Image;
  interestTitle: string;
  interestId: string;
}

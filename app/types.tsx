export type GreetingTarget = "male" | "female" | "diverse" | "team" | "default";

export interface UserInfo {
  name: string;
  address: string;
  postalCode: string;
  city: string;
  phone: string;
  email: string;
  personalLinks: string[];
}

export interface CompanyInfo {
  companyName: string;
  address: string;
  postalCode: string;
  city: string;
  contactPersonName: string;
  contactPersonGreetingTarget: GreetingTarget;
}

export interface WorkingExperience {
  workingPlaceName: string;
  workingPlaceCity: string;
  jobTitle: string;
  date: string;
  bulletPoints: string[];
}

export interface Institution {
  institutionName: string;
  degree: string;
  grade: string;
  thesis: string;
  thesisType: string;
  thesisGrade: string;
  date: string;
}

export interface Project {
  projectName: string;
  date: string;
  infoText: string[];
  link: string;
}

export interface Skill {
  title: string;
  text: string;
}

export interface Language {
  language: string;
  motherTongue: boolean;
  level: string;
}

export interface CoverLetterText {
  lines: string[];
}

export interface CoverLetter {
  subject: string;
  text: CoverLetterText[];
  closingFormula: string;
}

export interface Application {
  // Personal Information
  userInfo: UserInfo;
  userSignatureFilename: string;

  // Company Information
  companyInfo: CompanyInfo;

  // Cover Letter
  coverLetter: CoverLetter;

  // Resume
  shortProfileText: string;
  workingExperience: WorkingExperience[];
  education: Institution[];
  projects: Project[];
  skills: Skill[];
  languages: Language[];
}

export function emptyApplication(): Application {
  return {
    userInfo: {
      name: "",
      address: "",
      postalCode: "",
      city: "",
      phone: "",
      email: "",
      personalLinks: [],
    },
    userSignatureFilename: "",
    companyInfo: {
      companyName: "",
      address: "",
      postalCode: "",
      city: "",
      contactPersonName: "",
      contactPersonGreetingTarget: "default",
    },
    coverLetter: { subject: "", text: [], closingFormula: "" },
    shortProfileText: "",
    workingExperience: [],
    education: [],
    projects: [],
    skills: [],
    languages: [],
  };
}

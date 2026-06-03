export type Gender = "male" | "female" | "diverse";

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
  contactPersonGender: Gender;
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
}

export interface Skill {
  title: string;
  text: string;
}

export interface Language {
  language: string;
  motherTongue: boolean;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
}

export interface CoverLetter {
  subject: string;
  introductionText: string;
  mainText: string;
  closingText: string;
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

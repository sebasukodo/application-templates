import { useContext } from "react";
import type { Application } from "../types";
import UserInfoFields from "./applicationForm/UserInfoFields";
import SignatureFields from "./applicationForm/SignatureFields";
import CompanyInfoFields from "./applicationForm/CompanyInfoFields";
import CoverLetterFields from "./applicationForm/CoverLetterFields";
import { ShortProfileTextFields } from "./applicationForm/ShortProfileTextFields";
import { WorkingExperienceFields } from "./applicationForm/WorkingExperience";
import { LanguagesFields } from "./applicationForm/LanguageFields";
import { ApplicationContext } from "~/applicationContext";
import { EducationFields } from "./applicationForm/EducationFields";
import { SkillsFields } from "./applicationForm/SkillFields";
import { ProjectsFields } from "./applicationForm/ProjectFields";

export default function ApplicationForm() {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error("No applicationContext found");
  }

  const { app, setApp } = context;

  const set = <Key extends keyof Application>(
    key: Key,
    value: Application[Key],
  ) => setApp((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="max-w-4xl mx-auto p-6 mt-6">
      <h1 className="text-2xl font-bold mb-8">Application Form</h1>

      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <UserInfoFields
        userInfo={app.userInfo}
        onChange={(value) => set("userInfo", value)}
      />
      <SignatureFields
        signatureFilename={app.userSignatureFilename}
        onChange={(value) => set("userSignatureFilename", value)}
      />

      <h2 className="text-xl font-semibold mb-4">Company Information</h2>
      <CompanyInfoFields
        companyInfo={app.companyInfo}
        onChange={(value) => set("companyInfo", value)}
      />

      <h2 className="text-xl font-semibold mb-4">Cover Letter</h2>
      <CoverLetterFields
        coverLetter={app.coverLetter}
        onChange={(value) => set("coverLetter", value)}
      />

      <h2 className="text-xl font-semibold mb-4">Resume</h2>
      <ShortProfileTextFields
        text={app.shortProfileText}
        onChange={(value) => set("shortProfileText", value)}
      />
      <WorkingExperienceFields
        workingExperience={app.workingExperience}
        onChange={(value) => set("workingExperience", value)}
      />
      <EducationFields
        educations={app.education}
        onChange={(v) => set("education", v)}
      />
      <ProjectsFields
        projects={app.projects}
        onChange={(value) => set("projects", value)}
      />
      <SkillsFields skills={app.skills} onChange={(v) => set("skills", v)} />
      <LanguagesFields
        languages={app.languages}
        onChange={(value) => set("languages", value)}
      />

      <button
        type="button"
        onClick={() => console.log(app)}
        className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700"
      >
        Log Application State
      </button>
    </div>
  );
}

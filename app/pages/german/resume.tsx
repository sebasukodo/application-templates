import { useContext } from "react";
import { ApplicationContext } from "~/applicationContext";
import { getCurrentDateString } from "~/utils";
import NoPrintNavigation from "~/components/NoPrintNavigation";

export default function Resume() {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error("no context");
  }

  const { app, setApp } = context;

  const formattedDate = getCurrentDateString();

  const personalInfo = `${app.userInfo.phone} | ${app.userInfo.email} | ${app.userInfo.address}, ${app.userInfo.postalCode} ${app.userInfo.city}`;
  const personalLinks = app.userInfo.personalLinks.join(" | ");

  const jobs = app.workingExperience.map((prev, index) => {
    return (
      <div
        className={index > 0 ? "mt-3 job-entry" : "mt-2 job-entry"}
        key={prev.workingPlaceName}
      >
        <div className="flex justify-between items-baseline">
          <p className="text-sm font-bold text-gray-900">{prev.jobTitle}</p>
          <p className="text-sm text-gray-600 whitespace-nowrap ml-4">
            {prev.date}
          </p>
        </div>
        <p className="text-sm text-gray-800">
          {`${prev.workingPlaceName} | ${prev.workingPlaceCity}`}
        </p>
        <ul className="mt-2 space-y-1 list-disc list-outside ml-4 marker:font-normal marker:text-gray-600">
          {prev.bulletPoints.map((bullet) => {
            return <li className="text-sm text-gray-800 pl-1">{bullet}</li>;
          })}
        </ul>
      </div>
    );
  });

  const education = app.education.map((prev, index) => {
    return (
      <div className={index > 0 ? "mt-3" : "mt-2"} key={prev.institutionName}>
        <div className="flex justify-between items-baseline">
          <p className="text-sm font-bold text-gray-900">{prev.degree}</p>
          <p className="text-sm text-gray-600 whitespace-nowrap ml-4">
            {prev.date}
          </p>
        </div>
        <p className="text-sm text-gray-800">
          {prev.grade !== ""
            ? `${prev.institutionName} | Abschlussnote: ${prev.grade}`
            : `${prev.institutionName}`}
        </p>
        {prev.thesis !== "" && (
          <p className="text-sm text-gray-800">{`${prev.thesisType}: ${prev.thesis} (Note: ${prev.thesisGrade})`}</p>
        )}
      </div>
    );
  });

  const projects = app.projects.map((prev, index) => {
    return (
      <div className={index > 0 ? "mt-3" : "mt-2"} key={prev.projectName}>
        <div className="flex justify-between items-baseline flex-wrap gap-1">
          <p className="text-sm font-bold text-gray-900">{prev.projectName}</p>
          <p className="text-sm text-gray-600 whitespace-nowrap">{prev.date}</p>
        </div>
        {prev.link !== "" ? (
          <a href={prev.link} className="text-sm text-gray-800 italic my-0">
            {prev.link}
          </a>
        ) : (
          <></>
        )}
        <ul className="mt-2 space-y-1 list-disc list-outside ml-4 marker:font-normal marker:text-gray-600">
          {prev.infoText.map((text) => {
            return <li className="text-sm text-gray-800 pl-1">{text}</li>;
          })}
        </ul>
      </div>
    );
  });

  const skills = app.skills.map((prev) => {
    return (
      <li className="text-sm text-gray-800 pl-1" key={prev.title}>
        <span className="font-semibold text-gray-800">{`${prev.title}: `}</span>
        {prev.text}
      </li>
    );
  });

  const languages = app.languages.map((prev) => {
    return (
      <li className="text-sm text-gray-800 pl-1">
        <span className="font-semibold text-gray-800">{`${prev.language}: `}</span>
        {prev.motherTongue ? "Muttersprache" : prev.level}
      </li>
    );
  });

  return (
    <div className="page bg-white max-w-3xl mx-auto shadow-lg px-14 py-12 text-gray-800 print:shadow-none print:max-w-full print:px-0 print:py-0">
      <NoPrintNavigation />
      <div className="text-center mb-7">
        <h1 className="text-4xl font-bold tracking-wide text-gray-900">
          {app.userInfo.name}
        </h1>
        <div className="flex flex-col">
          <p className="text-sm text-gray-800 mt-2 leading-relaxed">
            {personalInfo}
          </p>
          <p className="text-sm text-gray-800 mt-1 leading-relaxed">
            {personalLinks}
          </p>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 section-title">
          Kurzprofil
        </h2>
        <p className="text-sm text-gray-800 leading-relaxed mt-1">
          {app.shortProfileText}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 section-title">
          Berufserfahrung
        </h2>
        {jobs}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 section-title">
          Ausbildung
        </h2>
        {education}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 section-title">
          Projekte
        </h2>
        {projects}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 section-title">
          Kenntnisse
        </h2>
        <ul className="mt-2 space-y-1 list-disc list-outside ml-4 marker:font-normal marker:text-gray-600">
          {skills}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 section-title">
          Sprachen
        </h2>
        <ul className="mt-2 space-y-1 list-disc list-outside ml-4 marker:font-normal marker:text-gray-600">
          {languages}
        </ul>
      </section>

      <section className="mt-6">
        <div className="h-8 mb-1">
          {app.userSignatureFilename !== "" && (
            <img
              src={`/${app.userSignatureFilename}`}
              alt="Unterschrift"
              className="h-8 w-auto"
            />
          )}
        </div>
        <p className="text-sm text-gray-800">{app.userInfo.name}</p>
        <p className="text-sm text-gray-600">
          {`${app.userInfo.city}, ${formattedDate}`}
        </p>
      </section>
    </div>
  );
}

import { application } from "~/userInfo";

export default function Resume() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  const personalInfo = `${application.userInfo.phone} | ${application.userInfo.email} | ${application.userInfo.address}, ${application.userInfo.postalCode} ${application.userInfo.city}`;
  const personalLinks = application.userInfo.personalLinks.join(" | ");

  const jobs = application.workingExperience.map((prev) => {
    return (
      <div className="mt-2 job-entry" key={prev.workingPlaceName}>
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

  const education = application.education.map((prev) => {
    return (
      <div className="mt-2" key={prev.institutionName}>
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

  const projects = application.projects.map((prev) => {
    return (
      <div className="mt-2" key={prev.projectName}>
        <div className="flex justify-between items-baseline flex-wrap gap-1">
          <p className="text-sm font-bold text-gray-900">{prev.projectName}</p>
          <p className="text-sm text-gray-600 whitespace-nowrap">{prev.date}</p>
        </div>
        <ul className="mt-2 space-y-1 list-disc list-outside ml-4 marker:font-normal marker:text-gray-600">
          {prev.infoText.map((text) => {
            return <li className="text-sm text-gray-800 pl-1">{text}</li>;
          })}
        </ul>
      </div>
    );
  });

  const skills = application.skills.map((prev) => {
    return (
      <li className="text-sm text-gray-800 pl-1" key={prev.title}>
        <span className="font-semibold text-gray-800">{`${prev.title}: `}</span>
        {prev.text}
      </li>
    );
  });

  const languages = application.languages.map((prev) => {
    return (
      <li className="text-sm text-gray-800 pl-1">
        <span className="font-semibold text-gray-800">{`${prev.language}: `}</span>
        {prev.motherTongue ? "Muttersprache" : prev.level}
      </li>
    );
  });

  return (
    <div className="page bg-white max-w-3xl mx-auto shadow-lg px-14 py-12 text-gray-800 print:shadow-none print:max-w-full print:px-0 print:py-0">
      <div className="text-center mb-7">
        <h1 className="text-4xl font-bold tracking-wide text-gray-900">
          {application.userInfo.name}
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
          {application.shortProfileText}
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
          {application.userSignatureFilename !== "" && (
            <img
              src={`/${application.userSignatureFilename}`}
              alt="Unterschrift"
              className="h-8 w-auto"
            />
          )}
        </div>
        <p className="text-sm text-gray-800">{application.userInfo.name}</p>
        <p className="text-sm text-gray-600">
          {`${application.userInfo.city}, ${formattedDate}`}
        </p>
      </section>
    </div>
  );
}

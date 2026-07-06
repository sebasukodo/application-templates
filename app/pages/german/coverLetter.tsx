import { useContext } from "react";
import { ApplicationContext } from "~/applicationContext";
import NoPrintNavigation from "~/components/NoPrintNavigation";
import { getCurrentDateString } from "~/utils";

export default function CoverLetter() {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error("no context");
  }

  const { app, setApp } = context;

  const formattedDate = getCurrentDateString();

  let greeting: string;
  switch (app.companyInfo.contactPersonGreetingTarget) {
    case "female":
      greeting = app.companyInfo.contactPersonName
        ? `Sehr geehrte Frau ${app.companyInfo.contactPersonName},`
        : "Sehr geehrte Damen und Herren,";
      break;

    case "male":
      greeting = app.companyInfo.contactPersonName
        ? `Sehr geehrter Herr ${app.companyInfo.contactPersonName},`
        : "Sehr geehrte Damen und Herren,";
      break;

    case "diverse":
      greeting = app.companyInfo.contactPersonName
        ? `Guten Tag ${app.companyInfo.contactPersonName},`
        : "Sehr geehrte Damen und Herren,";
      break;

    case "team":
      greeting = `Sehr geehrtes Team der ${app.companyInfo.companyName},`;
      break;

    default:
      greeting = "Sehr geehrte Damen und Herren,";
  }

  const mainText = app.coverLetter.text.map((paragraph, index) => {
    const text = paragraph.lines.map((line, lineIndex) => {
      return lineIndex > 0 ? (
        <span key={`coverLetterLine-${lineIndex}`}>
          <br />
          {line}
        </span>
      ) : (
        <span key={`coverLetterLine-${lineIndex}`}>{line}</span>
      );
    });

    return (
      <p
        className="text-sm text-gray-800 leading-relaxed mb-4"
        key={`coverLetter-${index}`}
      >
        {text}
      </p>
    );
  });

  return (
    <div className="page bg-white max-w-3xl mx-auto shadow-lg px-14 py-12 text-gray-800 print:shadow-none print:max-w-full print:px-0 print:py-0">
      <NoPrintNavigation />
      <div className="mb-12">
        <p className="text-sm text-gray-800">{app.userInfo.name}</p>
        <p className="text-sm text-gray-800">{app.userInfo.address}</p>
        <p className="text-sm text-gray-800">{`${app.userInfo.postalCode} ${app.userInfo.city}`}</p>
        <p className="text-sm text-gray-800 mt-1">{app.userInfo.phone}</p>
        <p className="text-sm text-gray-800">{app.userInfo.email}</p>
      </div>

      <div className="mb-12">
        <p className="text-sm text-gray-800">{app.companyInfo.companyName}</p>
        <p className="text-sm text-gray-800">{app.companyInfo.address}</p>
        <p className="text-sm text-gray-800">{`${app.companyInfo.postalCode} ${app.companyInfo.city}`}</p>
      </div>

      <div className="mb-12 text-right">
        <p className="text-sm text-gray-800">
          {app.userInfo.city}, den {formattedDate}
        </p>
      </div>

      <p className="text-sm font-bold text-gray-800 mb-12">
        {app.coverLetter.subject}
      </p>

      <p className="text-sm text-gray-800 mb-4">{greeting}</p>

      {mainText}

      <div>
        <p className="text-sm text-gray-800 mb-2">
          {app.coverLetter.closingFormula}
        </p>
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
      </div>
    </div>
  );
}

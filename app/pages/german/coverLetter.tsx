import { useContext } from "react";
import { Link } from "react-router";
import { ApplicationContext } from "~/applicationContext";

export default function CoverLetter() {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error("No applicationContext found");
  }

  const { app, setApp } = context;

  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  const greeting =
    app.companyInfo.contactPersonGender === "female"
      ? `Sehr geehrte Frau ${app.companyInfo.contactPersonName},`
      : `Sehr geehrter Herr ${app.companyInfo.contactPersonName},`;

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
      <div className="no-print my-8">
        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium text-center hover:bg-blue-700"
        >
          Back to Homepage
        </Link>
      </div>
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

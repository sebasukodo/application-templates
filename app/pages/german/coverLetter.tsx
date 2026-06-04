import { application } from "~/userInfo";

export default function CoverLetter() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  const greeting =
    application.companyInfo.contactPersonGender === "female"
      ? `Sehr geehrte Frau ${application.companyInfo.contactPersonName},`
      : `Sehr geehrter Herr ${application.companyInfo.contactPersonName},`;

  const mainText = application.coverLetter.text.map((paragraph, index) => {
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
      <div className="mb-12">
        <p className="text-sm text-gray-800">{application.userInfo.name}</p>
        <p className="text-sm text-gray-800">{application.userInfo.address}</p>
        <p className="text-sm text-gray-800">{`${application.userInfo.postalCode} ${application.userInfo.city}`}</p>
        <p className="text-sm text-gray-800 mt-1">
          {application.userInfo.phone}
        </p>
        <p className="text-sm text-gray-800">{application.userInfo.email}</p>
      </div>

      <div className="mb-12">
        <p className="text-sm text-gray-800">
          {application.companyInfo.companyName}
        </p>
        <p className="text-sm text-gray-800">
          {application.companyInfo.address}
        </p>
        <p className="text-sm text-gray-800">{`${application.companyInfo.postalCode} ${application.companyInfo.city}`}</p>
      </div>

      <div className="mb-12 text-right">
        <p className="text-sm text-gray-800">
          {application.userInfo.city}, den {formattedDate}
        </p>
      </div>

      <p className="text-sm font-bold text-gray-800 mb-12">
        {application.coverLetter.subject}
      </p>

      <p className="text-sm text-gray-800 mb-4">{greeting}</p>

      {mainText}

      <div>
        <p className="text-sm text-gray-800 mb-2">
          {application.coverLetter.closingFormula}
        </p>
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
      </div>
    </div>
  );
}

import { getCurrentDateString } from "~/utils";
import { fileInputClass } from "./applicationForm/classes";
import type { Application } from "~/types";

export function DownloadJSON({ app }: { app: Application }) {
  const downloadJSON = () => {
    const jsonString = JSON.stringify(app, null, 2);
    const blob = new Blob([jsonString], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${app.companyInfo.companyName.replaceAll(" ", "")}-${app.userInfo.name.replaceAll(" ", "")}-${getCurrentDateString()}.json`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      className="px-6 py-3 rounded-xl bg-green-600 text-white font-medium text-center hover:bg-green-700"
      onClick={downloadJSON}
    >
      Download information as .json
    </button>
  );
}

export function ImportJSON({
  setApp,
}: {
  setApp: React.Dispatch<React.SetStateAction<Application>>;
}) {
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      const text = await file.text();
      const data: Application = JSON.parse(text);
      setApp(data);
    } catch (err) {
      console.log("invalid .json format");
    }
  };

  return (
    <input
      className={fileInputClass}
      type="file"
      accept=".json"
      onChange={handleFileChange}
    />
  );
}

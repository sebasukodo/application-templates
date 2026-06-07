import { useContext } from "react";
import { Link } from "react-router";
import { ApplicationContext } from "~/applicationContext";
import ApplicationForm from "~/components/ApplicationForm";
import { DownloadJSON, ImportJSON } from "~/components/ManageUserJSON";
import { emptyApplication } from "~/types";

export default function UserInformation() {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error("copy userInfo.tsx.example to userInfo.tsx");
  }

  const { app, setApp } = context;

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">
          User Information
        </h1>
        <div className="no-print my-8 flex flex-row gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium text-center hover:bg-blue-700"
          >
            Back to Homepage
          </Link>
          <button
            onClick={() => setApp(emptyApplication())}
            className="px-6 py-3 rounded-xl bg-rose-600 text-white font-medium text-center hover:bg-rose-700"
          >
            Reset User Information
          </button>
        </div>
        <ImportJSON setApp={setApp} />
        <ApplicationForm />
        <DownloadJSON app={app} />
      </div>
    </main>
  );
}

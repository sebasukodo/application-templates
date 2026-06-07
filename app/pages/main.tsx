import { Link } from "react-router";

export default function Main() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">
          Application-Templates Homepage
        </h1>

        <Link
          to="/user-information"
          className="px-6 py-3 rounded-xl bg-amber-500 text-white font-medium text-center hover:bg-amber-600 transition"
        >
          Enter your Information here
        </Link>

        <h2 className="text-xl font-bold text-start mt-8 mb-4">
          German Version:
        </h2>
        <div className="flex flex-col gap-4">
          <Link
            to="/anschreiben"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium text-center hover:bg-blue-700 transition"
          >
            Cover Letter
          </Link>

          <Link
            to="/lebenslauf"
            className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium text-center hover:bg-emerald-700 transition"
          >
            Resume
          </Link>
        </div>
      </div>
    </main>
  );
}

import { Link } from "react-router";

export default function CatchAll() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center flex-col">
        <h1 className="text-3xl font-bold text-center mb-8">
          404 - Page not found
        </h1>
        <Link
          to="/"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium text-center hover:bg-blue-700 transition"
        >
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}

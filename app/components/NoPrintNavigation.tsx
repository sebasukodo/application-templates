import { Link } from "react-router";
import PrintPDF from "./PrintPDF";

export default function NoPrintNavigation() {
  return (
    <div className="no-print my-8 flex flex-row gap-4">
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium text-center hover:bg-blue-700"
      >
        Back to Homepage
      </Link>
      <PrintPDF />
    </div>
  );
}

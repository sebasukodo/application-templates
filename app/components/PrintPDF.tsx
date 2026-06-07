export default function PrintPDF() {
  return (
    <button
      className="px-6 py-3 rounded-xl bg-green-600 text-white font-medium text-center hover:bg-green-700"
      onClick={() => window.print()}
    >
      Print to .pdf
    </button>
  );
}

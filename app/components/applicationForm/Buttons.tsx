export function ArrayFormButton({
  label,
  onClick,
  type,
  className,
}: {
  label?: string;
  onClick: () => void;
  type: "add" | "remove";
  className?: string;
}) {
  var clName = className;
  var buttonText = "";
  if (type === "add") {
    clName += " mt-1 self-start text-sm text-blue-600 underline";
    buttonText = `+ Add ${label}`;
  }
  if (type === "remove") {
    clName += " text-red-500 text-sm";
    buttonText = `X`;
  }

  return (
    <button type="button" onClick={onClick} className={clName}>
      {buttonText}
    </button>
  );
}

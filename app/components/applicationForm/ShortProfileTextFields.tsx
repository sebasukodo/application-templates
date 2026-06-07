import { labelClass, sectionClass } from "./classes";
import { TextAreaInput } from "./InputFields";

export function ShortProfileTextFields({
  text,
  onChange,
}: {
  text: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className={sectionClass}>
      <label htmlFor="shortProfileText" className={`${labelClass} w-full`}>
        Short Profile Text
        <TextAreaInput
          inputID="shortProfileText"
          placeholder="A brief summary about yourself..."
          value={text}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

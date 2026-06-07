import { ArrayFormButton } from "./Buttons";

const inputClass = "border-gray-700 border rounded-md px-2 py-2";

export function Field({
  labelID,
  label,
  children,
}: {
  labelID: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={labelID} className="flex flex-col text-md">
      {label}
      {children}
    </label>
  );
}

export function TextInput({
  inputID,
  placeholder,
  value,
  onChange,
  type = "text",
  extraClass = "",
}: {
  inputID: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  extraClass?: string;
}) {
  return (
    <input
      id={inputID}
      className={`${inputClass} ${extraClass}`}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      type={type}
    />
  );
}

export function TextAreaInput({
  inputID,
  placeholder,
  value,
  onChange,
  extraClass = "",
}: {
  inputID: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  extraClass?: string;
}) {
  return (
    <textarea
      id={inputID}
      className={`${inputClass} ${extraClass} min-h-20 resize-y`}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export function StringListInput({
  label,
  placeholder,
  values,
  onChange,
}: {
  label: string;
  placeholder?: string;
  values: string[];
  onChange: (v: string[]) => void;
}) {
  const update = (index: number, value: string) => {
    const next = [...values];
    next[index] = value;
    onChange(next);
  };
  const add = () => onChange([...values, ""]);
  const remove = (index: number) =>
    onChange(values.filter((_, idx) => idx !== index));

  const allStrings = values.map((value, index) => (
    <div key={`${label}-stringList-${index}`} className="flex gap-2">
      <textarea
        className={`${inputClass} flex-1`}
        placeholder={placeholder}
        value={value}
        onChange={(event) => update(index, event.target.value)}
        rows={1}
      />
      <ArrayFormButton type="remove" onClick={() => remove(index)} />
    </div>
  ));

  return (
    <div className="flex flex-col gap-1 w-full">
      <span className="text-md">{label}</span>
      {allStrings}
      <ArrayFormButton label={label} type="add" onClick={add} />
    </div>
  );
}

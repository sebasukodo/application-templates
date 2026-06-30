import { useEffect, useLayoutEffect, useRef } from "react";
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "0px";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      id={inputID}
      className={`${inputClass} ${extraClass} min-h-20 resize-none overflow-hidden`}
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
  const textareaRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

  useLayoutEffect(() => {
    textareaRefs.current.forEach((textarea) => {
      if (!textarea) return;

      textarea.style.height = "0px";
      textarea.style.height = `${textarea.scrollHeight}px`;
    });
  }, [values]);

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
        ref={(element) => {
          textareaRefs.current[index] = element;
        }}
        className={`${inputClass} flex-1 resize-none overflow-hidden`}
        placeholder={placeholder}
        value={value}
        onChange={(event) => update(index, event.target.value)}
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

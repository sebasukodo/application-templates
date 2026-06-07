import type { Language } from "~/types";
import { Field, TextInput } from "./InputFields";
import { inputClass, labelClass } from "./classes";
import { ArrayFormButton } from "./Buttons";

const languageLevels = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

function LanguageItem({
  language,
  onChange,
  onRemove,
  index,
}: {
  language: Language;
  onChange: (v: Language) => void;
  onRemove: () => void;
  index: number;
}) {
  const set = <Key extends keyof Language>(key: Key, value: Language[Key]) =>
    onChange({ ...language, [key]: value });

  return (
    <div className="flex flex-row flex-wrap gap-4 items-end border border-gray-300 rounded-md p-3 w-full">
      <Field labelID={`lang-name-${index}`} label="Language">
        <TextInput
          inputID={`lang-name-${index}`}
          placeholder="German"
          value={language.language}
          onChange={(value) => set("language", value)}
        />
      </Field>
      <label htmlFor={`lang-level-${index}`} className={labelClass}>
        Level
        <select
          id={`lang-level-${index}`}
          className={inputClass}
          value={language.level}
          onChange={(event) =>
            set("level", event.target.value as Language["level"])
          }
          disabled={language.motherTongue}
        >
          {languageLevels.map((lanLevel) => (
            <option key={lanLevel} value={lanLevel}>
              {lanLevel}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-row items-center gap-2 text-md self-end mb-2">
        <input
          type="checkbox"
          checked={language.motherTongue}
          onChange={(event) => set("motherTongue", event.target.checked)}
          className="w-4 h-4"
        />
        Mother Tongue
      </label>
      <ArrayFormButton type="remove" onClick={onRemove} className="mb-2" />
    </div>
  );
}

export function LanguagesFields({
  languages,
  onChange,
}: {
  languages: Language[];
  onChange: (v: Language[]) => void;
}) {
  const empty = (): Language => ({
    language: "",
    motherTongue: false,
    level: "B1",
  });
  const update = (index: number, value: Language) => {
    const list = [...languages];
    list[index] = value;
    onChange(list);
  };
  const remove = (index: number) =>
    onChange(languages.filter((_, idx) => idx !== index));

  return (
    <div className="mb-8 flex flex-col gap-4">
      <span className="font-semibold text-lg">Languages</span>
      {languages.map((item, index) => (
        <LanguageItem
          key={index}
          index={index}
          language={item}
          onChange={(value) => update(index, value)}
          onRemove={() => remove(index)}
        />
      ))}
      <ArrayFormButton
        type="add"
        label="Language"
        onClick={() => onChange([...languages, empty()])}
      />
    </div>
  );
}

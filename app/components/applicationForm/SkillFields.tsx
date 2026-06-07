import type { Skill } from "~/types";
import { Field, TextInput } from "./InputFields";
import { labelClass } from "./classes";
import { ArrayFormButton } from "./Buttons";

function SkillItem({
  skill,
  onChange,
  onRemove,
  index,
}: {
  skill: Skill;
  onChange: (v: Skill) => void;
  onRemove: () => void;
  index: number;
}) {
  const set = <Key extends keyof Skill>(key: Key, value: Skill[Key]) =>
    onChange({ ...skill, [key]: value });

  return (
    <div className="flex flex-row flex-wrap gap-4 items-end border border-gray-300 rounded-md p-3 w-full">
      <Field labelID={`skill-title-${index}`} label="Skill Title">
        <TextInput
          inputID={`skill-title-${index}`}
          placeholder="Programming Languages"
          value={skill.title}
          onChange={(value) => set("title", value)}
        />
      </Field>
      <label htmlFor={`skill-text-${index}`} className={`${labelClass} flex-1`}>
        Skill Text
        <TextInput
          inputID={`skill-text-${index}`}
          placeholder="TypeScript, Python, Rust"
          value={skill.text}
          onChange={(value) => set("text", value)}
        />
      </label>
      <ArrayFormButton type="remove" onClick={onRemove} className="mb-2" />
    </div>
  );
}

export function SkillsFields({
  skills,
  onChange,
}: {
  skills: Skill[];
  onChange: (v: Skill[]) => void;
}) {
  const empty = (): Skill => ({ title: "", text: "" });
  const update = (index: number, value: Skill) => {
    const list = [...skills];
    list[index] = value;
    onChange(list);
  };
  const remove = (index: number) =>
    onChange(skills.filter((_, idx) => idx !== index));

  return (
    <div className="mb-8 flex flex-col gap-4">
      <span className="font-semibold text-lg">Skills</span>
      {skills.map((item, index) => (
        <SkillItem
          key={index}
          index={index}
          skill={item}
          onChange={(value) => update(index, value)}
          onRemove={() => remove(index)}
        />
      ))}
      <ArrayFormButton
        type="add"
        label="Skill"
        onClick={() => onChange([...skills, empty()])}
      />
    </div>
  );
}

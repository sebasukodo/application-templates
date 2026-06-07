import type { WorkingExperience } from "~/types";
import { Field, StringListInput, TextInput } from "./InputFields";
import { ArrayFormButton } from "./Buttons";

function WorkingExperienceItem({
  workingExperience,
  onChange,
  onRemove,
  index,
}: {
  workingExperience: WorkingExperience;
  onChange: (v: WorkingExperience) => void;
  onRemove: () => void;
  index: number;
}) {
  const set = <Key extends keyof WorkingExperience>(
    key: Key,
    value: WorkingExperience[Key],
  ) => onChange({ ...workingExperience, [key]: value });

  return (
    <div className="border border-gray-300 rounded-md p-4 flex flex-col gap-3 w-full">
      <div className="flex justify-between items-center">
        <span className="font-medium">Experience {index + 1}</span>
        <ArrayFormButton type="remove" onClick={onRemove} />
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        <Field
          labelID={`working-name-${index}`}
          label="Company / Working Place"
        >
          <TextInput
            inputID={`working-name-${index}`}
            placeholder="Acme Corp"
            value={workingExperience.workingPlaceName}
            onChange={(value) => set("workingPlaceName", value)}
          />
        </Field>
        <Field labelID={`working-city-${index}`} label="City">
          <TextInput
            inputID={`working-city-${index}`}
            placeholder="Berlin"
            value={workingExperience.workingPlaceCity}
            onChange={(value) => set("workingPlaceCity", value)}
          />
        </Field>
        <Field labelID={`working-title-${index}`} label="Job Title">
          <TextInput
            inputID={`working-title-${index}`}
            placeholder="Software Engineer"
            value={workingExperience.jobTitle}
            onChange={(value) => set("jobTitle", value)}
          />
        </Field>
        <Field labelID={`working-date-${index}`} label="Date / Period">
          <TextInput
            inputID={`working-date-${index}`}
            placeholder="2021 – 2023"
            value={workingExperience.date}
            onChange={(value) => set("date", value)}
          />
        </Field>
        <StringListInput
          label="Bullet Points"
          values={workingExperience.bulletPoints}
          onChange={(value) => set("bulletPoints", value)}
          placeholder="Developed feature X..."
        />
      </div>
    </div>
  );
}

export function WorkingExperienceFields({
  workingExperience,
  onChange,
}: {
  workingExperience: WorkingExperience[];
  onChange: (v: WorkingExperience[]) => void;
}) {
  const empty = (): WorkingExperience => ({
    workingPlaceName: "",
    workingPlaceCity: "",
    jobTitle: "",
    date: "",
    bulletPoints: [""],
  });
  const update = (index: number, value: WorkingExperience) => {
    const list = [...workingExperience];
    list[index] = value;
    onChange(list);
  };
  const remove = (index: number) =>
    onChange(workingExperience.filter((_, idx) => idx !== index));

  return (
    <div className="mb-8 flex flex-col gap-4">
      <span className="font-semibold text-lg">Working Experience</span>
      {workingExperience.map((item, index) => (
        <WorkingExperienceItem
          key={index}
          index={index}
          workingExperience={item}
          onChange={(value) => update(index, value)}
          onRemove={() => remove(index)}
        />
      ))}
      <ArrayFormButton
        type="add"
        label="Experience"
        onClick={() => onChange([...workingExperience, empty()])}
      />
    </div>
  );
}

import type { Institution } from "~/types";
import { Field, TextInput } from "./InputFields";
import { ArrayFormButton } from "./Buttons";

function EducationItem({
  institution,
  onChange,
  onRemove,
  index,
}: {
  institution: Institution;
  onChange: (v: Institution) => void;
  onRemove: () => void;
  index: number;
}) {
  const set = <Key extends keyof Institution>(
    key: Key,
    value: Institution[Key],
  ) => onChange({ ...institution, [key]: value });

  return (
    <div className="border border-gray-300 rounded-md p-4 flex flex-col gap-3 w-full">
      <div className="flex justify-between items-center">
        <span className="font-medium">Education {index + 1}</span>
        <ArrayFormButton type="remove" onClick={onRemove} />
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        <Field labelID={`education-name-${index}`} label="Institution Name">
          <TextInput
            inputID={`education-name-${index}`}
            placeholder="TU Berlin"
            value={institution.institutionName}
            onChange={(value) => set("institutionName", value)}
          />
        </Field>
        <Field labelID={`education-degree-${index}`} label="Degree">
          <TextInput
            inputID={`education-degree-${index}`}
            placeholder="Bachelor of Science"
            value={institution.degree}
            onChange={(value) => set("degree", value)}
          />
        </Field>
        <Field labelID={`education-grade-${index}`} label="Grade">
          <TextInput
            inputID={`education-grade-${index}`}
            placeholder="1.8"
            value={institution.grade}
            onChange={(value) => set("grade", value)}
          />
        </Field>
        <Field labelID={`education-thesis-${index}`} label="Thesis Title">
          <TextInput
            inputID={`education-thesis-${index}`}
            placeholder="My Thesis"
            value={institution.thesis}
            onChange={(value) => set("thesis", value)}
          />
        </Field>
        <Field labelID={`education-thesisType-${index}`} label="Thesis Type">
          <TextInput
            inputID={`education-thesisType-${index}`}
            placeholder="Bachelor Thesis"
            value={institution.thesisType}
            onChange={(value) => set("thesisType", value)}
          />
        </Field>
        <Field labelID={`education-thesisGrade-${index}`} label="Thesis Grade">
          <TextInput
            inputID={`education-thesisGrade-${index}`}
            placeholder="1.3"
            value={institution.thesisGrade}
            onChange={(value) => set("thesisGrade", value)}
          />
        </Field>
        <Field labelID={`education-date-${index}`} label="Date / Period">
          <TextInput
            inputID={`education-date-${index}`}
            placeholder="2018 – 2021"
            value={institution.date}
            onChange={(value) => set("date", value)}
          />
        </Field>
      </div>
    </div>
  );
}

export function EducationFields({
  educations,
  onChange,
}: {
  educations: Institution[];
  onChange: (v: Institution[]) => void;
}) {
  const empty = (): Institution => ({
    institutionName: "",
    degree: "",
    grade: "",
    thesis: "",
    thesisType: "",
    thesisGrade: "",
    date: "",
  });
  const update = (index: number, value: Institution) => {
    const list = [...educations];
    list[index] = value;
    onChange(list);
  };
  const remove = (index: number) =>
    onChange(educations.filter((_, idx) => idx !== index));

  return (
    <div className="mb-8 flex flex-col gap-4">
      <span className="font-semibold text-lg">Education</span>
      {educations.map((item, index) => (
        <EducationItem
          key={index}
          index={index}
          institution={item}
          onChange={(value) => update(index, value)}
          onRemove={() => remove(index)}
        />
      ))}
      <ArrayFormButton
        type="add"
        label="Education"
        onClick={() => onChange([...educations, empty()])}
      />
    </div>
  );
}

import type { Application } from "~/types";
import { Field, StringListInput, TextInput } from "./InputFields";
import { ArrayFormButton } from "./Buttons";

export default function CoverLetterFields({
  coverLetter,
  onChange,
}: {
  coverLetter: Application["coverLetter"];
  onChange: (v: Application["coverLetter"]) => void;
}) {
  const set = <Key extends keyof typeof coverLetter>(
    key: Key,
    value: (typeof coverLetter)[Key],
  ) => onChange({ ...coverLetter, [key]: value });

  const updateParagraph = (index: number, lines: string[]) => {
    const next = [...coverLetter.text];
    next[index] = { lines };
    set("text", next);
  };
  const addParagraph = () =>
    set("text", [...coverLetter.text, { lines: [""] }]);
  const removeParagraph = (index: number) =>
    set(
      "text",
      coverLetter.text.filter((_, idx) => idx !== index),
    );

  return (
    <div className="mb-8 flex flex-col gap-4">
      <Field labelID="coverLetterSubject" label="Subject">
        <TextInput
          inputID="coverLetterSubject"
          placeholder="Application as Software Engineer"
          value={coverLetter.subject}
          onChange={(value) => set("subject", value)}
        />
      </Field>

      <div className="flex flex-col gap-3">
        <span className="text-md font-medium">Cover Letter Paragraphs</span>
        {coverLetter.text.map((paragraph, index) => (
          <div
            key={`coverLetterText-${index}`}
            className="border border-gray-300 rounded-md p-3 flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Paragraph {index + 1}
              </span>
              <ArrayFormButton
                type="remove"
                onClick={() => removeParagraph(index)}
              />
            </div>
            <StringListInput
              label="Lines"
              values={paragraph.lines}
              onChange={(lines) => updateParagraph(index, lines)}
              placeholder="Your cover letter text..."
            />
          </div>
        ))}
        <ArrayFormButton type="add" label="Paragraph" onClick={addParagraph} />
      </div>

      <Field labelID="closingFormula" label="Closing Formula">
        <TextInput
          inputID="closingFormula"
          placeholder="Mit freundlichen Grüßen"
          value={coverLetter.closingFormula}
          onChange={(value) => set("closingFormula", value)}
        />
      </Field>
    </div>
  );
}

import type { Project } from "~/types";
import { ArrayFormButton } from "./Buttons";
import { Field, StringListInput, TextInput } from "./InputFields";

function ProjectItem({
  project,
  onChange,
  onRemove,
  index,
}: {
  project: Project;
  onChange: (v: Project) => void;
  onRemove: () => void;
  index: number;
}) {
  const set = <Key extends keyof Project>(key: Key, value: Project[Key]) =>
    onChange({ ...project, [key]: value });

  return (
    <div className="border border-gray-300 rounded-md p-4 flex flex-col gap-3 w-full">
      <div className="flex justify-between items-center">
        <span className="font-medium">Project {index + 1}</span>
        <ArrayFormButton type="remove" onClick={onRemove} />
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        <Field labelID={`proj-name-${index}`} label="Project Name">
          <TextInput
            inputID={`proj-name-${index}`}
            placeholder="My Awesome App"
            value={project.projectName}
            onChange={(value) => set("projectName", value)}
          />
        </Field>
        <Field labelID={`proj-date-${index}`} label="Date">
          <TextInput
            inputID={`proj-date-${index}`}
            placeholder="2022"
            value={project.date}
            onChange={(value) => set("date", value)}
          />
        </Field>
        <Field labelID={`proj-link-${index}`} label="Link">
          <TextInput
            inputID={`proj-link-${index}`}
            placeholder="https://github.com/..."
            value={project.link}
            onChange={(value) => set("link", value)}
          />
        </Field>
        <StringListInput
          label="Info Text"
          values={project.infoText}
          onChange={(value) => set("infoText", value)}
          placeholder="Built with React and..."
        />
      </div>
    </div>
  );
}

export function ProjectsFields({
  projects,
  onChange,
}: {
  projects: Project[];
  onChange: (v: Project[]) => void;
}) {
  const empty = (): Project => ({
    projectName: "",
    date: "",
    infoText: [""],
    link: "",
  });
  const update = (index: number, value: Project) => {
    const list = [...projects];
    list[index] = value;
    onChange(list);
  };
  const remove = (index: number) =>
    onChange(projects.filter((_, idx) => idx !== index));

  return (
    <div className="mb-8 flex flex-col gap-4">
      <span className="font-semibold text-lg">Projects</span>
      {projects.map((item, index) => (
        <ProjectItem
          key={index}
          index={index}
          project={item}
          onChange={(value) => update(index, value)}
          onRemove={() => remove(index)}
        />
      ))}
      <ArrayFormButton
        type="add"
        label="Project"
        onClick={() => onChange([...projects, empty()])}
      />
    </div>
  );
}

import type { Application, GreetingTarget } from "~/types";
import { inputClass, labelClass, sectionClass } from "./classes";
import { Field, TextInput } from "./InputFields";

export default function CompanyInfoFields({
  companyInfo,
  onChange,
}: {
  companyInfo: Application["companyInfo"];
  onChange: (value: Application["companyInfo"]) => void;
}) {
  const set = <Key extends keyof typeof companyInfo>(
    key: Key,
    value: (typeof companyInfo)[Key],
  ) => onChange({ ...companyInfo, [key]: value });

  return (
    <div className={sectionClass}>
      <Field labelID="companyName" label="Company Name">
        <TextInput
          inputID="companyName"
          placeholder="Acme GmbH"
          value={companyInfo.companyName}
          onChange={(value) => set("companyName", value)}
        />
      </Field>
      <Field labelID="companyAddress" label="Company Address">
        <TextInput
          inputID="companyAddress"
          placeholder="Firmenstraße 1"
          value={companyInfo.address}
          onChange={(value) => set("address", value)}
        />
      </Field>
      <Field labelID="companyPostalCode" label="Postal Code">
        <TextInput
          inputID="companyPostalCode"
          placeholder="10115"
          value={companyInfo.postalCode}
          onChange={(value) => set("postalCode", value)}
        />
      </Field>
      <Field labelID="companyCity" label="City">
        <TextInput
          inputID="companyCity"
          placeholder="Berlin"
          value={companyInfo.city}
          onChange={(value) => set("city", value)}
        />
      </Field>
      <Field labelID="contactPersonName" label="Contact Person Name">
        <TextInput
          inputID="contactPersonName"
          placeholder="Erika Musterfrau"
          value={companyInfo.contactPersonName}
          onChange={(value) => set("contactPersonName", value)}
        />
      </Field>
      <label htmlFor="contactPersonGreetingTarget" className={labelClass}>
        Contact Person Greeting Type
        <select
          id="contactPersonGreetingTarget"
          className={inputClass}
          value={companyInfo.contactPersonGreetingTarget}
          onChange={(event) =>
            set(
              "contactPersonGreetingTarget",
              event.target.value as GreetingTarget,
            )
          }
        >
          <option value="default">Default</option>
          <option value="team">Team</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="diverse">Diverse</option>
        </select>
      </label>
    </div>
  );
}

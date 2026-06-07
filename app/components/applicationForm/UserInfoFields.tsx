import type { Application } from "~/types";
import { Field, StringListInput, TextInput } from "./InputFields";
import { sectionClass } from "./classes";

export default function UserInfoFields({
  userInfo,
  onChange,
}: {
  userInfo: Application["userInfo"];
  onChange: (a: Application["userInfo"]) => void;
}) {
  const set = <Key extends keyof typeof userInfo>(
    key: Key,
    value: (typeof userInfo)[Key],
  ) => onChange({ ...userInfo, [key]: value });

  return (
    <section className={sectionClass}>
      <Field labelID="userName" label="Your Name">
        <TextInput
          inputID="userName"
          placeholder="Max Mustermann"
          value={userInfo.name}
          onChange={(value) => set("address", value)}
        />
      </Field>
      <Field labelID="userAddress" label="Your Address">
        <TextInput
          inputID="userAddress"
          placeholder="Musterstraße 21"
          value={userInfo.address}
          onChange={(value) => set("address", value)}
        />
      </Field>
      <Field labelID="userPostalCode" label="Postal Code">
        <TextInput
          inputID="userPostalCode"
          placeholder="12345"
          value={userInfo.postalCode}
          onChange={(value) => set("postalCode", value)}
        />
      </Field>
      <Field labelID="userCity" label="City">
        <TextInput
          inputID="userCity"
          placeholder="Berlin"
          value={userInfo.city}
          onChange={(value) => set("city", value)}
        />
      </Field>
      <Field labelID="userPhone" label="Phone">
        <TextInput
          inputID="userPhone"
          placeholder="+49 123 456789"
          value={userInfo.phone}
          onChange={(value) => set("phone", value)}
          type="tel"
        />
      </Field>
      <Field labelID="userEmail" label="Email">
        <TextInput
          inputID="userEmail"
          placeholder="max@example.com"
          value={userInfo.email}
          onChange={(value) => set("email", value)}
          type="email"
        />
      </Field>
      <StringListInput
        label="Personal Links"
        values={userInfo.personalLinks}
        onChange={(value) => set("personalLinks", value)}
        placeholder="https://github.com/..."
      />
    </section>
  );
}

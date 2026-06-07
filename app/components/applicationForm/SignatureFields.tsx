import { sectionClass } from "./classes";
import { Field, TextInput } from "./InputFields";

export default function SignatureFields({
  signatureFilename,
  onChange,
}: {
  signatureFilename: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className={sectionClass}>
      <Field labelID="userSignatureFilename" label="Signature Filename">
        <TextInput
          inputID="userSignatureFilename"
          placeholder="signature.png"
          value={signatureFilename}
          onChange={onChange}
        />
      </Field>
    </div>
  );
}

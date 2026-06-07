import type { Route } from "./+types/coverLetter";
import CoverLetter from "../pages/german/coverLetter";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Anschreiben" }];
}

export default function ApplicationPage() {
  return <CoverLetter />;
}

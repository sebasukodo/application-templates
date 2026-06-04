import type { Route } from "./+types/coverLetter";
import CoverLetter from "../pages/german/coverLetter";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Cover Letter" }];
}

export default function ApplicationPage() {
  return <CoverLetter />;
}

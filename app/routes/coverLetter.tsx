import type { Route } from "./+types/coverLetter";
import CoverLetter from "../pages/german/coverLetter";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Resume" }];
}

export default function ApplicationPage() {
  return <CoverLetter />;
}

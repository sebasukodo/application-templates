import type { Route } from "./+types/coverLetter";
import CoverLetter from "../pages/german/coverLetter";
import { application } from "../userInfo";

export function meta({}: Route.MetaArgs) {
  return [{ title: `${application.userInfo.name} - Anschreiben` }];
}

export default function ApplicationPage() {
  return <CoverLetter />;
}

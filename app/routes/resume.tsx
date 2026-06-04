import type { Route } from "./+types/resume";
import Resume from "../pages/german/resume";
import { application } from "../userInfo";

export function meta({}: Route.MetaArgs) {
  return [{ title: `${application.userInfo.name} - Lebenslauf` }];
}

export default function ResumePage() {
  return <Resume />;
}

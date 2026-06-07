import type { Route } from "./+types/resume";
import Resume from "../pages/german/resume";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Lebenslauf" }];
}

export default function ResumePage() {
  return <Resume />;
}

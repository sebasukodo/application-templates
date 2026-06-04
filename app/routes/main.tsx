import type { Route } from "./+types/main";
import Main from "../pages/main";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Homepage" }];
}

export default function MainPage() {
  return <Main />;
}

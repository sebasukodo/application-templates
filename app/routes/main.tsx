import type { Route } from "./+types/main";
import Main from "../pages/main";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Application-Templates" }];
}

export default function MainPage() {
  return <Main />;
}

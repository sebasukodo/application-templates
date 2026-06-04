import type { Route } from "./+types/main";
import CatchAll from "~/pages/catchAll";

export function meta({}: Route.MetaArgs) {
  return [{ title: "404 - Page not found" }];
}

export default function CatchAllPage() {
  return <CatchAll />;
}

import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/main.tsx"),
  route("anschreiben", "routes/coverLetter.tsx"),
  route("lebenslauf", "routes/resume.tsx"),
] satisfies RouteConfig;

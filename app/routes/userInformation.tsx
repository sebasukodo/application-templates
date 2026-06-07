import type { Route } from "./+types/main";
import UserInformation from "~/pages/userInformation";

export function meta({}: Route.MetaArgs) {
  return [{ title: "User Information" }];
}

export default function UserInformationPage() {
  return <UserInformation />;
}

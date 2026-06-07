import { createContext } from "react";
import type { Application } from "./types";

type ApplicationContextType = {
  app: Application;
  setApp: React.Dispatch<React.SetStateAction<Application>>;
};

export const ApplicationContext = createContext<ApplicationContextType | null>(
  null,
);

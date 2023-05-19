import { ReactNode } from "react";

export interface ThemaProviderProps {
  children: ReactNode;
}

export interface ContextValue {
  darkMode: boolean | null;
  toggleDarkMode: (arg: boolean) => void;
}

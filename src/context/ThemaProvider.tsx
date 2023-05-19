import { createContext, useContext, useState } from "react";
import { ContextValue, ThemaProviderProps } from "./types";

const ThemaContext = createContext<ContextValue>({
  darkMode: null,
  toggleDarkMode: () => {},
});

const ThemaProvider = ({ children }: ThemaProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  const toggleDarkMode = (arg: boolean) => {
    setDarkMode(() => arg);
  };

  const contextValue: ContextValue = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <ThemaContext.Provider value={contextValue}>
      {children}
    </ThemaContext.Provider>
  );
};

const useThema = (): ContextValue => {
  const context = useContext(ThemaContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemaProvider, useThema };

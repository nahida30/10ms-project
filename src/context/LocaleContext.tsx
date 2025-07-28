import React, { createContext, useContext, useState, ReactNode } from "react";

type LocaleContextType = {
  locale: string;
  setLocale: (locale: string) => void;
  messages: Record<string, string>;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState("en");
  const messages = locale === "bn" ? require("../../public/locales/bn/common.json") : require("../../public/locales/en/common.json");

  return (
    <LocaleContext.Provider value={{ locale, setLocale, messages }}>
      {children}
    </LocaleContext.Provider>
  );
}

// default export
export default LocaleProvider;

// Named export for the hook (optional)
export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}

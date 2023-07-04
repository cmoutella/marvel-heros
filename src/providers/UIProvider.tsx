import { createContext, useContext, useState } from "react";
import { NavbarRef } from "@/types";

interface UIContext {
  navbarUI: NavbarRef;
  setNavbarUI: (value: NavbarRef) => void;
}

const DEFAULT_VALUES = {
  navbarUI: null,
  setNavbarUI: (value: NavbarRef) => {},
};

const UIContext = createContext<UIContext>(DEFAULT_VALUES);

export const useUI = () => {
  const context = useContext(UIContext);

  if (context === undefined) {
    throw new Error("Missing UIContext on React three");
  }

  return context;
};

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [navbarUI, setNavbarUI] = useState<NavbarRef>(null);

  const value = {
    navbarUI,
    setNavbarUI,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

import { createContext, useContext, useEffect, useState } from "react";

interface SearchContext {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const DEFAULT_VALUES = {
  searchValue: "",
  setSearchValue: (value: string) => {},
};

const SearchContext = createContext<SearchContext>(DEFAULT_VALUES);

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error("Missing SearchContext on React three");
  }

  return context;
};

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    console.log("val", searchValue);
  }, [searchValue]);

  const value = {
    searchValue,
    setSearchValue,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

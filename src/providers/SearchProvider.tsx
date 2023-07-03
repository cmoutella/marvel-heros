import { checkThumbnail } from "@/utils";
import { createContext, useContext, useEffect, useState } from "react";
import { MARVEL_API_KEY } from "../../public/auth/marvel";
import { Hero, HeroImageOps } from "@/types";

interface SearchContext {
  searchActive: boolean;
  searchValue: string;
  setSearchValue: (value: string) => void;
  heros: Hero[] | [];
}

const DEFAULT_VALUES = {
  searchActive: false,
  searchValue: "",
  setSearchValue: (value: string) => {},
  heros: [],
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
  const [heros, setHeros] = useState<Hero[]>([]);

  const fetchForHeros = async () => {
    const endpoint = new URL(
      `/api/heros?nameStartsWith=${searchValue}`,
      window.location.origin
    );

    await fetch(endpoint)
      .then((_res) => _res.json())
      .then((res) => {
        const heros: Hero[] = res;

        setHeros(heros);
      });
  };

  useEffect(() => {
    if (searchValue.length >= 2) {
      fetchForHeros();
    }
  }, [searchValue]);

  const value = {
    searchActive: searchValue.length >= 2,
    searchValue,
    setSearchValue,
    heros,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

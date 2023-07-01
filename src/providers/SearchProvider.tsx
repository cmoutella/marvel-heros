import { checkThumbnail } from "@/utils";
import { createContext, useContext, useEffect, useState } from "react";
import { MARVEL_API_KEY } from "../../public/auth/marvel";
import { Hero, HeroImageOps } from "@/types";

interface SearchContext {
  searchActive: boolean;
  searchValue: string;
  setSearchValue: (value: string) => void;
  heros: Hero[] | [];
  heroImagePath: (ops: HeroImageOps) => string;
}

const DEFAULT_VALUES = {
  searchActive: false,
  searchValue: "",
  setSearchValue: (value: string) => {},
  heros: [],
  heroImagePath: (ops: HeroImageOps) => "",
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
      `characters?limit=100&nameStartsWith=${searchValue}&apikey=${MARVEL_API_KEY}`,
      "http://gateway.marvel.com/v1/public/"
    );

    await fetch(endpoint)
      .then((_res) => _res.json())
      .then((res) => {
        const allHeros: Hero[] = res.data.results;

        const withImageHeros = allHeros.filter((hero) =>
          checkThumbnail(hero.thumbnail.path)
        );

        setHeros(withImageHeros);
      });
  };

  const heroImagePath = (imageOpts: HeroImageOps) => {
    const imageUrl = `${imageOpts.path}/${imageOpts.variant}.${imageOpts.extension}`;

    return imageUrl;
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
    heroImagePath,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

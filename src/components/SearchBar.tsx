import { useSearch } from "@/providers/SearchProvider";
import { ChangeEvent, ChangeEventHandler } from "react";

const SearchBar = () => {
  const { searchValue, setSearchValue } = useSearch();

  const handleChange = (event: Event) => {
    setSearchValue(event?.target?.value);
  };

  return (
    <input
      name="hero"
      type="text"
      value={searchValue}
      onChange={handleChange}
      className="flex md:min-w-[600px] p-[12px] rounded text-[22px]"
    />
  );
};

export default SearchBar;

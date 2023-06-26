import { useSearch } from "@/providers/SearchProvider";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  const { searchValue, setSearchValue } = useSearch();

  const handleChange = (event: Event) => {
    setSearchValue(event?.target?.value);
  };

  return (
    <span className="relative">
      <MagnifyingGlassIcon className="text-primary h-[33px] absolute left-[12px] top-[12px]" />
      <input
        name="hero"
        type="text"
        value={searchValue}
        onChange={handleChange}
        className="flex md:min-w-[600px] p-[12px] pl-[56px] rounded text-[22px] text-primary"
      />
    </span>
  );
};

export default SearchBar;

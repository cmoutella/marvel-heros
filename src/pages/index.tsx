import SearchBar from "@/components/SearchBar";
import { useSearch } from "@/providers/SearchProvider";
import HeroCard from "@/components/HeroCard";
import { Default as Template } from "@/templates";
import { Hero } from "@/types";

export default function Home() {
  const { heros, searchActive } = useSearch();

  return (
    <Template>
      <div className="w-full flex flex-col items-center pt-[80px] px-24 pb-24 bg-dark">
        <h1 className="text-white text-[98px] mb-[62px]">
          Who is your <span className="text-primary">hero</span>?
        </h1>
        <SearchBar />
        {searchActive && (
          <div className="rounded-lg border-[3px] border-gray-charcoal p-20 mt-[62px] grid grid-cols-2 gap-[24px] gap-y-[40px] w-[940px]">
            {heros?.map((hero: Hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </div>
        )}
      </div>
    </Template>
  );
}

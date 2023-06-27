import SearchBar from "@/components/SearchBar";
import { Hero, useSearch } from "@/providers/SearchProvider";
import HeroCard from "@/components/HeroCard";
import { default as Container } from "@/templates/default";

export default function Home() {
  const { heros, searchActive } = useSearch();

  return (
    <Container>
      <div className="w-full flex flex-col items-center pt-[80px] px-24 pb-24">
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
    </Container>
  );
}

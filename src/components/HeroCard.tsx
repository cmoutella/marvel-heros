import { useSearch } from "@/providers/SearchProvider";
import { Hero } from "@/types";
import { heroImagePath } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/router";

const HeroCard = ({ hero }: { hero: Hero }) => {
  const { setSearchValue } = useSearch();
  const router = useRouter();

  const handleClick = () => {
    setSearchValue("");
    router.push(`/hero/${hero.id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="p-[12px] rounded bg-white flex justify-start items-center mb-[20px]"
    >
      <span className="w-[50px] h-[75px]">
        <Image
          src={heroImagePath({
            path: hero.thumbnail.path,
            extension: hero.thumbnail.extension,
            variant: "portrait_small",
          })}
          alt={hero.name}
          height={50}
          width={75}
        />
      </span>
      <div className="ml-[18px]">
        <span className="text-[18px] font-semibold">{hero.name}</span>
      </div>
    </button>
  );
};

export default HeroCard;

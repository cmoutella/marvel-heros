import { useSearch, type Hero } from "@/providers/SearchProvider";
import Image from "next/image";
import Link from "next/link";

const HeroCard = ({ hero }: { hero: Hero }) => {
  const { heroImagePath } = useSearch();

  return (
    <Link
      href={`/hero/${hero.id}`}
      className="p-[8px] rounded bg-white flex justify-start mb-[20px]"
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
      <div className="ml-[12px]">
        <span className="text-[16px] font-semibold">{hero.name}</span>
      </div>
    </Link>
  );
};

export default HeroCard;

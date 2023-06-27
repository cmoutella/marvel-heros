import { useSearch, type Hero } from "@/providers/SearchProvider";
import { checkThumbnail } from "@/utils";
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
        {checkThumbnail(hero.thumbnail.path) ? (
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
        ) : (
          <div className="w-full h-full bg-dark" />
        )}
      </span>
      <div className="ml-[6px]">
        <span className="text-[18px]">{hero.name}</span>
      </div>
    </Link>
  );
};

export default HeroCard;

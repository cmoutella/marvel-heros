import type { Hero } from "@/providers/SearchProvider";
import Image from "next/image";
import Link from "next/link";

const HeroCard = ({ hero }: { hero: Hero }) => {
  return (
    <Link
      href={`/hero/${hero.id}`}
      className="p-[8px] rounded bg-white flex justify-start mb-[20px]"
    >
      {/* {hero.thumbnail && (
        <Image
          src={hero.thumbnail.path}
          alt={hero.name}
          height={60}
          width={60}
        />
      )} */}
      <div className="ml-[6px]">
        <span className="text-[18px]">{hero.name}</span>
      </div>
    </Link>
  );
};

export default HeroCard;

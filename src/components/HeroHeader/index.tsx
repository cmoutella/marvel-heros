import { Hero } from "@/types";
import { heroImagePath } from "@/utils";
import Image from "next/image";

const HeroHeader = ({ heroInfo }: { heroInfo: Hero }) => {
  const heroName = () => {
    let parenthesys: string = null;
    let name: string = "";

    const indexOfParenthesys = heroInfo.name.indexOf("(");
    if (indexOfParenthesys >= 1) {
      parenthesys = heroInfo.name.substring(indexOfParenthesys - 1);
    }

    name = heroInfo.name.replace(parenthesys ?? "", "");
    const nameParts = name.split(" ");

    return (
      <span className="text-primary text-[98px] font-extrabold w-full">
        {!parenthesys ? nameParts[0] : `${nameParts[0]} ${nameParts[1]}`}
        <span className="text-white text-[58px] uppercase \\\ block m-0 ml-[100px] mt-[-70px]">
          {!parenthesys &&
            nameParts
              .filter((part) => part !== nameParts[0])
              .map((part) => `${part} `)}

          {parenthesys}
        </span>
      </span>
    );
  };

  return (
    <>
      <div className="w-full flex flex-col items-center pt-[80px] px-24 pb-24">
        <Image
          src={heroImagePath({
            path: heroInfo.thumbnail.path,
            extension: heroInfo.thumbnail.extension,
            variant: "landscape_xlarge",
          })}
          alt={heroInfo.name}
          height={300}
          width={300}
        />
        <h1 className="mb-[62px]">{heroName()}</h1>
      </div>
    </>
  );
};

export default HeroHeader;

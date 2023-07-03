import { Hero } from "@/types";
import { heroImagePath } from "@/utils";
import Image from "next/image";

const HeroHeader = ({ heroInfo }: { heroInfo: Hero }) => {
  const heroName = () => {
    let parenthesis: string | null = null;
    let name: string = "";

    const indexOfParenthesis = heroInfo.name.indexOf("(");
    if (indexOfParenthesis >= 1) {
      parenthesis = heroInfo.name.substring(indexOfParenthesis - 1);
    }

    name = heroInfo.name.replace(parenthesis ?? "", "");
    const nameParts = name.split(" ");

    return (
      <span className="text-primary text-[98px] font-extrabold w-full">
        {!parenthesis ? nameParts[0] : `${nameParts[0]} ${nameParts[1]}`}
        <span className="text-white text-[54px] uppercase \\\ block m-0 ml-[100px] mt-[-70px]">
          {!parenthesis &&
            nameParts
              .filter((part) => part !== nameParts[0])
              .map((part) => `${part} `)}

          {parenthesis}
        </span>
      </span>
    );
  };

  return (
    <>
      <div className="bg-dark w-full flex justify-center pt-[80px] px-24 pb-24">
        <div className="border-[3px] border-gray-medium mr-[32px]">
          <Image
            src={heroImagePath({
              path: heroInfo.thumbnail.path,
              extension: heroInfo.thumbnail.extension,
              variant: "portrait_xlarge",
            })}
            alt={heroInfo.name}
            width={300}
            height={500}
          />
        </div>
        <h1 className="mb-[62px]">{heroName()}</h1>
      </div>
    </>
  );
};

export default HeroHeader;

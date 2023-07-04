import { GetStaticPaths, GetStaticProps } from "next";
import { Hero } from "@/types";

import { Show as Template } from "@/templates";
import HeroHeader from "@/components/HeroHeader";

const HeroPage = ({ heroInfo }: { heroInfo: Hero }) => {
  return (
    <Template>
      <HeroHeader heroInfo={heroInfo} />
    </Template>
  );
};

export default HeroPage;

const getHeroData = async (heroId: string) => {
  let heroData;
  const endpoint = new URL(
    `api/hero/${heroId}`,
    "http://marvel-middleware.deno.dev/"
  );

  await fetch(endpoint)
    .then((_res) => _res.json())
    .then((res) => {
      heroData = res;
    })
    .catch(() => {
      heroData = {
        data: "Hero not found",
      };
    });

  return heroData;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const heroId = params?.slug;
  let heroInfo;

  if (typeof heroId === "string") {
    heroInfo = await getHeroData(heroId);
  }

  return { props: { heroInfo } };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

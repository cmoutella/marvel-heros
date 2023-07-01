import { GetStaticPaths, GetStaticProps } from "next";
import { Hero } from "@/types";
import { default as Container } from "@/templates/default";

const HeroPage = ({ heroInfo }: { heroInfo: Hero }) => {
  return <Container>My name is {heroInfo.name}</Container>;
};

export default HeroPage;

const getHeroData = async (heroId: string) => {
  let heroData;
  const endpoint = new URL(`hero/${heroId}?`, "http://localhost:8000");

  await fetch(endpoint)
    .then((_res) => _res.json())
    .then((res) => {
      console.log("res", res);
      console.log("data", res.data);
      heroData = res;
    });

  return heroData;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const heroId = params?.slug;
  let heroInfo: Hero | undefined = undefined;

  if (typeof heroId === "string") {
    heroInfo = await getHeroData(heroId);
  }

  console.log("heroInfo", heroInfo);

  return { props: { heroInfo } };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

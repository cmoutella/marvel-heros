import type { Hero } from "@/providers/SearchProvider";
import { GetStaticPaths, GetStaticProps } from "next";
import { MARVEL_API_KEY } from "../../../public/auth/marvel";
import { default as Container } from "@/templates/default";

const HeroPage = ({ heroInfo }: { heroInfo: Hero }) => {
  return <Container>My name is {heroInfo.name}</Container>;
};

export default HeroPage;

const getHeroData = async (heroId: string) => {
  let heroData: Hero | {} = {};
  const endpoint = new URL(
    `characters/${heroId}?apikey=${MARVEL_API_KEY}`,
    "http://gateway.marvel.com/v1/public/"
  );

  await fetch(endpoint)
    .then((_res) => _res.json())
    .then((res) => {
      console.log(res.data);
      heroData = res.data.results;
    });

  return heroData;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const heroId = params?.heroId;
  let heroInfo: Hero | {} = {};

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

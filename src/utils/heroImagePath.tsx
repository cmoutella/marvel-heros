import { HeroImageOps } from "@/types";

const heroImagePath = (imageOpts: HeroImageOps) => {
  const imageUrl = `${imageOpts.path}/${imageOpts.variant}.${imageOpts.extension}`;

  return imageUrl;
};

export default heroImagePath;

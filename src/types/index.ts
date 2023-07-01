
type Thumbnail = {
  path: string;
  extension: string;
};

type CharacterAppearances = {
  available: number;
  collectionURI: string;
  items: [];
  returned: number;
};

type MoreInfoUrl = {
  type: string;
  url: string;
};

type CharactersUrls = MoreInfoUrl[];

type PortraitImageVariants =
  | "portrait_small"
  | "portrait_medium"
  | "portrait_xlarge"
  | "portrait_fantastic"
  | "portrait_uncanny"
  | "portrait_incredible";

type StandardImageVariants =
  | "standard_small"
  | "standard_medium"
  | "standard_large"
  | "standard_xlarge"
  | "standard_fantastic"
  | "standard_amazing";

type LandscapeImageVariants =
  | "landscape_small"
  | "landscape_medium"
  | "landscape_large"
  | "landscape_xlarge"
  | "landscape_amazing"
  | "landscape_incredible";


export type Hero = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: CharacterAppearances;
  series: CharacterAppearances;
  stories: CharacterAppearances;
  events: CharacterAppearances;
  urls: CharactersUrls;
};

export type HeroImageOps = {
  path: string;
  extension: string;
  variant:
    | PortraitImageVariants
    | StandardImageVariants
    | LandscapeImageVariants;
};
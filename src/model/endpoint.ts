export interface IArticlesApiResponse {
  _self: string;
  blogState?: string;
  byline: {
    text: string;
  };
  canonicalTitle?: string;
  canonicalUrl?: string;
  cardImages: IStringArray[];
  created: string;
  headKicker: string;
  heading: string;
  homepageHead: string;
  homepageTeaser: string;
  id: string;
  isSponsored: boolean;
  kind: string;
  lastUpdated: string;
  mainImages: IApiMainImage[];
  mainVideo?: string;
  profiles?: IStringArray[];
  publicationDate: string;
  redirectUrl?: string;
  slug: string;
  socialHead?: string;
  socialImage?: string;
  socialTeaser?: string;
  source: string;
  status: string;
  topics: IApiTopics;
}

export interface IArticleApiResponse extends IArticlesApiResponse {
  content: {
    blocks: IApiBlocks[];
    kind: string;
  };
  hasOovvuuRecommendations: boolean;
  keywords?: IStringArray;
  relatedStories?: IStringArray;
}

interface IApiBlocks {
  intentions: IStringArray[];
  kind: string;
  text: string;
  version: number;
}

interface IApiMainImage {
  captionText?: string;
  copyrightByline?: string;
  copyrightCredit?: string;
  credit?: string;
  dimensions: string;
  format: string;
  src: string;
}

interface IApiTopics {
  primary: {
    id: string;
    metadata?: object;
    parent?: {
      id?: string;
      metadata?: object;
      seoDescription?: string;
      seoTitle?: string;
      title?: string;
    };
    seoTitle: string;
    title: string;
  };
  secondary?: IStringArray;
}

interface IStringArray {
  [index: number]: string;
}

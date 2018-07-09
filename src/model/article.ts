export interface IArticleContent {
  assets: IMainImages[];
  blocks: IArticleBlocks[];
  byline: string;
  cardHeadline: string;
  created: string;
  headline: string;
  id: string;
  image: { url: string; caption: string };
  kicker: string;
  lastUpdated: string;
  publicationDate: string;
  slug: string;
  source: string;
  teaser: string;
  topics: IArticleTopics;
}

interface IMainImages {
  captionText?: string;
  copyrightByline?: string;
  copyrightCredit?: string;
  credit?: string;
  dimensions: string;
  format: string;
  src: string;
}

export interface IArticleTopics {
  parent: { id: string; title: string };
  primary: { id: string; title: string };
}

export interface IArticleBlocks {
  asset?: {
    byline: string;
    captionText: string;
    copyrightByline: string;
    copyrightCredit: string;
    credit: string;
    crops: string;
    id: string;
    kind: string;
    name: string;
    original: { dimensions: string; format: string; reference: string };
    videoDescription?: string;
  };
  kind: string;
  text: string;
}

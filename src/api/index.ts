import {
  IArticleApiResponse,
  IArticleContent,
  IArticlesApiResponse
} from '../model';
const baseURL = 'https://content.thewest.com.au/v4/publication';

async function fetchArticles(): Promise<IArticleContent[]> {
  try {
    const articlesURL = `${baseURL}?kind=article`;
    const response = await fetch(articlesURL);
    // Fetch promise only reject with a TypeError when a network error
    // occurs. Since 4xx and 5xx responses aren't network errors we need
    // to throw our own error.
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const { documents } = await response.json();

    return Promise.all(mapToArticles(documents));
  } catch (error) {
    return error;
  }
}

async function fetchArticle(articleSlug: string): Promise<any> {
  try {
    const articleURL = `${baseURL}/${articleSlug}`;
    const response = await fetch(articleURL);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    return error;
  }
}

function mapToArticles(documents: any): IArticleContent[] {
  return documents.map(async (a: IArticlesApiResponse) => {
    const b: IArticleApiResponse = await fetchArticle(a.slug);
    return await {
      assets: a.mainImages,
      blocks: b.content.blocks,
      byline: a.byline.text,
      cardHeadline: a.homepageHead,
      created: a.created,
      headline: a.heading,
      id: a.id,
      image: { url: a.mainImages[0].src, caption: a.mainImages[0].captionText },
      kicker: a.headKicker,
      lastUpdated: a.lastUpdated,
      publicationDate: a.publicationDate,
      slug: a.slug,
      source: a.source,
      teaser: a.homepageTeaser,
      topics: {
        primary: { id: a.topics.primary.id, title: a.topics.primary.title }
      }
    };
  });
}

export { fetchArticles };

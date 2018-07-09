import * as React from 'react';
import { IArticleContent } from '../../model';
import { CardContent, CardImage, CardKicker } from './styles/base.styles';
import { CardLink, Headline, LargeCard } from './styles/large.styles';

export default function(props: IArticleContent) {
  const { headline, image, kicker, slug, teaser } = props;
  return (
    <LargeCard>
      <CardLink to={`/article/${slug}`}>
        <CardImage size="Large" imageSrc={image.url}>
          <CardKicker>{kicker}</CardKicker>
        </CardImage>
        <CardContent>
          <Headline>{headline}</Headline>
          <p>{teaser}</p>
        </CardContent>
      </CardLink>
    </LargeCard>
  );
}

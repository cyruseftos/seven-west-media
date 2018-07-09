import * as React from 'react';
import { IArticleContent } from '../../model';
import { CardContent, CardImage, CardKicker } from './styles/base.styles';
import { CardLink, Headline, MediumCard } from './styles/medium.styles';

export default function(props: IArticleContent) {
  const { headline, image, kicker, slug, teaser } = props;
  return (
    <MediumCard>
      <CardLink to={`/article/${slug}`}>
        <CardImage size="Medium" imageSrc={image.url}>
          <CardKicker>{kicker}</CardKicker>
        </CardImage>
        <CardContent>
          <Headline>{headline}</Headline>
          <p>{teaser}</p>
        </CardContent>
      </CardLink>
    </MediumCard>
  );
}

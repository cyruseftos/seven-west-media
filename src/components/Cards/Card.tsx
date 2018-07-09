import * as React from 'react';

import { IArticleContent } from '../../model';
import { CardContent, CardImage, CardKicker } from './styles/base.styles';
import { Card, CardLink, Headline } from './styles/card.styles';

export default function(props: IArticleContent) {
  const { headline, image, kicker, slug, teaser } = props;
  return (
    <Card>
      <CardLink to={`/article/${slug}`}>
        <CardImage size="Default" imageSrc={image.url}>
          <CardKicker>{kicker}</CardKicker>
        </CardImage>
        <CardContent>
          <Headline>{headline}</Headline>
          <p>{teaser}</p>
        </CardContent>
      </CardLink>
    </Card>
  );
}

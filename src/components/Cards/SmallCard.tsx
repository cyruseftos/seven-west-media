import * as React from 'react';
import { IArticleContent } from '../../model';
import { CardContent, CardImage, CardKicker } from './styles/base.styles';
import { CardLink, Headline, SmallCard } from './styles/small.styles';

export default function(props: IArticleContent) {
  const { headline, image, kicker, slug } = props;
  return (
    <SmallCard>
      <CardLink to={`/article/${slug}`}>
        <CardImage size="Small" imageSrc={image.url}>
          <CardKicker>{kicker}</CardKicker>
        </CardImage>
        <CardContent>
          <Headline>{headline}</Headline>
        </CardContent>
      </CardLink>
    </SmallCard>
  );
}

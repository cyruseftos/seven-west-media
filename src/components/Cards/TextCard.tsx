import * as React from 'react';
import { IArticleContent } from '../../model';
import { CardContent } from './styles/base.styles';
import { CardLink, Headline, TextCard } from './styles/text.styles';

export default function(props: IArticleContent) {
  const { headline, slug } = props;
  return (
    <TextCard>
      <CardLink to={`/article/${slug}`}>
        <CardContent>
          <Headline>{headline}</Headline>
        </CardContent>
      </CardLink>
    </TextCard>
  );
}

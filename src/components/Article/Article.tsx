import * as dayjs from 'dayjs';
import * as React from 'react';
import { IArticleContent } from '../../model';
import Content from './Content';
import Image from './Image';
import { Byline, Header, Headline, Wrapper } from './styles/base.styles';
import Topics from './Topics';

export default function(props: Partial<IArticleContent>) {
  const { headline } = props;
  return (
    <Wrapper>
      <Byline>
        {props.byline && `${props.byline} | `} {props.source}
        <time dateTime={props.publicationDate}>
          {dayjs(props.publicationDate).format('dddd, D MMMM YYYY h:mmA')}
        </time>
      </Byline>
      <Header>
        <Headline>{headline}</Headline>
      </Header>
      {props.image && (
        <Image caption={props.image.caption} image={props.image.url} />
      )}
      {props.blocks && <Content blocks={props.blocks} />}
      {props.topics && <Topics topics={props.topics} />}
    </Wrapper>
  );
}

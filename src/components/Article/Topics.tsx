import * as React from 'react';
import { IArticleTopics } from '../../model/article';
import { Topic } from './styles/topics.styles';

interface IArticleContent {
  topics: IArticleTopics;
}

export default function(props: IArticleContent) {
  const { topics } = props;
  return (
    <div>
      {topics.primary && (
        <Topic data-topic-id={topics.primary.id}>{topics.primary.title}</Topic>
      )}
    </div>
  );
}

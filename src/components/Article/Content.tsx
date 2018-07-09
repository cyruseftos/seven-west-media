import * as React from 'react';
import { IArticleBlocks } from '../../model/article';
import Image from './Image';
import { Content } from './styles/content.styles';

interface IArticleContent {
  blocks: IArticleBlocks[];
}

export default function(props: IArticleContent) {
  const { blocks } = props;
  return (
    <Content>
      {blocks.map((block, index) => {
        return (
          <React.Fragment key={`block-${index}`}>
            {block.kind === 'text' && <p>{block.text}</p>}
            {block.kind === 'inline' &&
              (block.asset && block.asset.kind === 'image') && (
                <Image caption={block.asset.captionText} image={block.asset.original.reference} />
              )}
          </React.Fragment>
        );
      })}
    </Content>
  );
}
import * as React from 'react';
import { Caption, Figure, Image, Picture } from './styles/image.styles';

interface IArticleImage {
  caption: string;
  image: string;
}

export default function(props: IArticleImage) {
  const { caption, image } = props;
  return (
    <Figure>
      <Picture>
        <source
          media="@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
          srcSet={`${image}?imwidth=2048&impolicy=.auto`}
        />
        <source
          media="@media (min-width: 640px)"
          srcSet={`${image}?imwidth=1024&impolicy=.auto`}
        />
        <Image src={`${image}?imwidth=640&impolicy=.auto`} alt={caption} />
      </Picture>
      <Caption>
        <strong>Caption: </strong>
        {caption}
      </Caption>
    </Figure>
  );
}

import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { CardBase, CardHeadlineBase, CardLinkBase } from './base.styles';

export const CardLink = styled(Link)`
  ${CardLinkBase};
  grid-template-columns: 1fr;
  grid-template-rows: unset;
  grid-auto-rows: min-content;
`;

export const Headline = styled('h2')`
  ${CardHeadlineBase};
`;

export const SmallCard = styled('article')`
  ${CardBase};
  grid-column: 4 span;

  @media (min-width: 640px) {
    grid-row: 2 span;
    grid-column: 2 span;
  }

  @media (min-width: 1024px) {
    grid-column: unset;
    grid-row: 2 span;
  }
`;
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { CardBase, CardHeadlineBase, CardLinkBase } from './base.styles';

export const CardLink = styled(Link)`
  ${CardLinkBase};
  grid-template-rows: 1fr 1fr;

  @media (min-width: 640px) {
    grid-auto-rows: min-content;
    grid-template-columns: 60% auto;
    grid-template-rows: 1fr;
  }
`;

export const Headline = styled('h2')`
  ${CardHeadlineBase};
`;

export const LargeCard = styled('article')`
  ${CardBase};
  grid-column: 4 span;
  min-height: 20rem;

  @media (min-width: 1024px) {
    grid-column: 3 span;
  }
`;

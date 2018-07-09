import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { CardBase, CardHeadlineBase, CardLinkBase } from './base.styles';

export const CardLink = styled(Link)`
  ${CardLinkBase};
  grid-auto-rows: min-content;
  grid-template-columns: 1fr;
  grid-template-rows: unset;
`;

export const Headline = styled('h2')`
  ${CardHeadlineBase};
  font-size: calc((14 * 1px) + calc(16 - 14) * ((100vw - 420px) / (1200 - 420)));
`;

export const TextCard = styled('article')`
  ${CardBase};
  grid-column: 4 span;

  @media (min-width: 640px) {
    grid-column: 2 span;
    grid-row: 1 span;
  }

  @media (min-width: 1024px) {
    grid-column: unset;
    grid-row: 1 span;
  }
`;
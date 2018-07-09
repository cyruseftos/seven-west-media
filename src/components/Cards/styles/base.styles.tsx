import styled, { css } from 'react-emotion';

export const CardBase = css`
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  overflow: hidden;
  width: 100%;
`;

export const CardContent = styled('div')`
  margin: 20px;
`;

export const CardKicker = styled('span')`
  background-color: black;
  color: white;
  display: inline-block;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 0.3rem 0.5rem;
`;

export const CardImage = styled('div')<{ imageSrc: string; size: string }>`
  background-image: ${props => `url(${props.imageSrc}?imwidth=640&impolicy=.auto)`};
  background-position: center center;
  background-size: cover;
  display: block;
  height: ${props => (props.size === 'Large' ? `100%` : `150px`)};
  overflow: hidden;
`;

export const CardLinkBase = css`
  color: #333;
  display: grid;
  grid-auto-rows: min-content;
  height: 100%;
  text-decoration: none;
  width: 100%;
`;

export const CardHeadlineBase = css`
  color: #333333;
  font-size: calc((18 * 1px) + calc(20 - 18) * ((100vw - 420px) / (1200 - 420)));
  font-weight: 700;
  grid-auto-rows: min-content;
  line-height: 1.5;
  margin: 0;
`;

export const CardWrapper = styled('article')`
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  overflow: hidden;
  width: 100%;
`;

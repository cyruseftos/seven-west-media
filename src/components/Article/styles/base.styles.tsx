import styled from 'react-emotion';

export const Byline = styled('div')`
  border-bottom: 2px solid rgb(229, 229, 229);
  color: rgb(116, 120, 122);
  display: flex;
  font-size: 0.875rem;
  font-weight: 700;
  padding-bottom: 1rem;
  width: 100%;
  flex-direction: column;
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Header = styled('header')`
  border-bottom: 2px solid rgb(229, 229, 229);
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export const Headline = styled('h1')`
  font-size: calc(
    (32 * 1px) + calc(24 - 18) * ((100vw - 420px) / (1200 - 420))
  );
  line-height: 1.167;
  margin: 1rem 0;
`;

export const Wrapper = styled('article')`
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px;
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 1024px;
    padding: 40px;
  }
`;

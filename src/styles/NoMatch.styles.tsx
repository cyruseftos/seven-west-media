import { css } from 'react-emotion';

export const NoMatchIFrame = css`
  height: 0;
  margin-top: 2rem;
  padding-bottom: 81%;
  position: relative;
  width: '100%'
`;

export const PageNotFound = css`
  align-items: center;
  bottom: 0;
  color: white;
  display: flex;
  font-size: calc((48 * 1px) + calc(100 - 48) * ((100vw - 420px) / (1200 - 420)));
  font-weight: bolder;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 1000;
`;

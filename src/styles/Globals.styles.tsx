import { injectGlobal } from 'emotion';

export default injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: rgb(234, 234, 234);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: calc((14 * 1px) + calc(16 - 14) * ((100vw - 420px) / (1200 - 420)));
    line-height: 1.5;
  }
`;

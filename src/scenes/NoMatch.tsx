import * as React from 'react';
import { NoMatchIFrame, PageNotFound } from '../styles/NoMatch.styles';

const NoMatch = () => {
  return (
    <div className={NoMatchIFrame}>
      <div className={PageNotFound}>Page Not Found</div>
      <iframe
        src="https://giphy.com/embed/jcxtvm2bsZDH2"
        width="100%"
        height="100%"
        style={{ position: 'absolute' }}
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen={true}
      />
    </div>
  );
};

export default NoMatch;

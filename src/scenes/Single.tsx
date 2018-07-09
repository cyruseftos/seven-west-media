import * as React from 'react';
import styled from 'react-emotion';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Context } from '../App';
import { Article } from '../components/Article';
import { IArticleContent } from '../model';

export const Container = styled('div')`
  display: flex;
  margin: 40px auto;
  width: 100%;
`;

const Single = (props: RouteComponentProps<any> & {}) => {
  const slug = props.match.params.slug;
  return (
    <Container>
      <Context.Consumer>
        {store => {
          const article = store.state.articles.find(
            (a: IArticleContent) => a.slug === slug
          );
          return <Article {...article} />
        }}
      </Context.Consumer>
    </Container>
  );
};

export default withRouter(Single);

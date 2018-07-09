import * as React from 'react';
import styled from 'react-emotion';
import { Context } from '../App';
import { Card, LargeCard, MediumCard, SmallCard } from '../components/Cards';
import TextCard from '../components/Cards/TextCard';
import { LayoutArray } from '../globals';

export const Grid = styled('section')`
  display: grid;
  grid-gap: 18px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: min-content;
  margin: 40px auto;
`;

export default function() {
  return (
    <Grid>
      <Context.Consumer>
        {store =>
          store.state.articles.map((article, index) => {
            return (
              <React.Fragment key={article.id}>
                {LayoutArray[index] === 'Default' && <Card {...article} />}
                {LayoutArray[index] === 'Large' && <LargeCard {...article} />}
                {LayoutArray[index] === 'Medium' && <MediumCard {...article} />}
                {LayoutArray[index] === 'NoImage' && <TextCard {...article} />}
                {LayoutArray[index] === 'Small' && <SmallCard {...article} />}
              </React.Fragment>
            );
          })
        }
      </Context.Consumer>
    </Grid>
  );
}

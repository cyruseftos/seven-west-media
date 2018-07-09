import * as dayjs from 'dayjs';
import * as React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { fetchArticles } from './api';
import logo from './logo.svg';
import { IArticleContent } from './model';
import Home from './scenes/Home';
import NoMatch from './scenes/NoMatch';
import Single from './scenes/Single';
import { Logo, Main, Time } from './styles/App.styles';

interface IProviderState {
  articles: IArticleContent[];
}

interface IProviderStore {
  state: IProviderState;
}

export const Context = React.createContext({} as IProviderStore);

export default class extends React.Component<{}, IProviderState> {
  public readonly state = { articles: [] };

  public async componentDidMount() {
    try {
      const articles = await fetchArticles();
      await this.setState({ articles });
    } catch (error) {
      console.error(error);
    }
  }

  public render() {
    const store: IProviderStore = { state: this.state };
    return (
      <Main>
        <Context.Provider value={store}>
          <Router>
            <React.Fragment>
              <header>
                <Logo>
                  <span>The West Australian</span>
                  <Link to="/">
                    <img src={logo} alt="The West Australian" />
                  </Link>
                </Logo>
                <Time dateTime={dayjs().toISOString()}>
                  {dayjs().format('dddd, D MMMM YYYY')}
                </Time>
              </header>
              <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/article/:slug" component={Single} />
                <Route component={NoMatch} />
              </Switch>
            </React.Fragment>
          </Router>
        </Context.Provider>
      </Main>
    );
  }
}

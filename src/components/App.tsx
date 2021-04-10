import * as React from 'react';
import * as CSS from 'csstype';
import './App.scss';
import { InteractiveLink } from './InteractiveLink';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Ising } from './Ising';
import { Notes } from './Notes';
import { SteinShakarchiB3 } from './SteinShakarchiB3';
import { Favorites } from './Favorites';
import { LeastFavorites } from './LeastFavorites';
import { PageNotFound } from './PageNotFound';
import { Breadcrumbs } from './Breadcrumbs';

const rootStyle: CSS.Properties = {
  boxSizing: 'border-box',
  WebkitTextSizeAdjust: 'none',
  textSizeAdjust: 'none',

  maxWidth: '720px',
  margin: '0 auto',
  padding: '3vh 20px 12vh 20px',
};

const titleStyle: CSS.Properties = {
  fontSize: '20px',
  marginBottom: '0.5vh',
};

const repoLinkStyle: CSS.Properties = {
  fontSize: '14px',
};

const breadcrumbsStyle: CSS.Properties = {
  margin: '3vh 0',
};

export const App: React.VFC = () => (
  <div style={rootStyle}>
    <h1 style={titleStyle}>liampack.github.io</h1>
    <nav style={breadcrumbsStyle}>
      <Breadcrumbs />
    </nav>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ising" component={Ising} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/least-favorites" component={LeastFavorites} />
      <Route exact path="/notes" component={Notes} />
      <Route
        exact
        path="/notes/stein-shakarchi-b3"
        component={SteinShakarchiB3}
      />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

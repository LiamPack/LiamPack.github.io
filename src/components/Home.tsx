import React from 'react';
import * as CSS from 'csstype';
import { InteractiveLink } from './InteractiveLink';
import { Code, P } from './UI';

const RepoReadmeLink: React.VFC = () => (
  <InteractiveLink href="https://github.com/liampack/LiamPack.github.io.git#readme">
    repo readme
  </InteractiveLink>
);

export const Home: React.VFC = () => (
  <div>
    <P>
      This is an example single page app built with React and React&nbsp;Router
      using <Code>BrowserRouter</Code>. Navigate with the links below and
      refresh the page or copy/paste the url to test out the redirect
      functionality deployed to overcome GitHub&nbsp;Pages incompatibility with
      single page apps (like this one).
    </P>
    <h1>
      {' '}
      <i> Posts </i>{' '}
    </h1>
    <P>
      <InteractiveLink to="/ising">Ising Model</InteractiveLink>
    </P>
  </div>
);

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
    <P>this site serves some purposes.</P>
    <P>
      first, i'm trying to use it as an archiving area for notes i found
      enjoyable to write, thoughts i felt were important to remember, and the
      like.
    </P>
    <P>
      second, i'm using it as an active-learning space. you can only say you
      understand something if you can communicate it well! this is kind of the
      idea.
    </P>
    <P>
      third, i'm hoping some of the things found on this area of the internet
      can be helpful or of use to someone. how that help or use is manifested, i
      have no clue, that's up to you probably.
    </P>
    <h1>
      {' '}
      <i> Posts </i>{' '}
    </h1>
    <P>
      <InteractiveLink to="/ising">Ising Model</InteractiveLink>
    </P>
    <P>
      <InteractiveLink to="/notes">My Notes</InteractiveLink>
    </P>
    <P>
      <InteractiveLink to="/favorites">Things I Like</InteractiveLink>
    </P>
    <P>
      <InteractiveLink to="/least-favorites">
        Things I Don't Like
      </InteractiveLink>
    </P>
  </div>
);

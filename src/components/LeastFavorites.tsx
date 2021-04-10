import React from 'react';
import { MarkdownRender } from './MarkdownRender';
import fs from 'fs';

export const LeastFavorites: React.VFC = () => {
  const post: string = `


[LPac\'s Pages](/)


-   [home](/)
-   [Github](http://github.com/liampack)
-   [Other-Posts](/archive)
-   [Notes](/notes)
-   [favorites](/posts/favorites)





games 
-----


-   the stanley parable
-   thief (2016 or whenever this garbage came out)
-   torchlight 2 \[i just didn\'t like it much i guess\]
-   Civilization V
-   Saints Row: The Third
-   Assassin\'s Creed III




programming langs 
-----------------


-   python when you\'re binding to C++ libraries or you error out at
    runtime
-   php
-   C but only the preprocessor macros
-   C but every other statement has an \`#ifdef WIN32\`
-   C++ but you have to link to a bad version of tensorflow




textbooks 
---------


-   A Modern Approach to Quantum Mechanics: Townsend (all ed.)






[Other posts](/archive)


`;

  return <MarkdownRender>{post}</MarkdownRender>;
};

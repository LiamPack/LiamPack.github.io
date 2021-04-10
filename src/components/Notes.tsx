import React from 'react';
import { MarkdownRender } from './MarkdownRender';

export const Notes: React.VFC = () => {
  const post: string = `
[LPac\'s Pages](/)


-   [home](/)
-   [Github](http://github.com/liampack)
-   [Other-Posts](/archive)
-   [Notes](/notes/index)
-   [favorites](/posts/favorites)


Welcome to the page with all the textbooks in it. I\'ll be putting my
notes here with the hope that someone may find them useful! This is also
to keep myself accountable! We\'ll see if it works!

Stuff here could be notes for anything, but more often than not it\'ll
be notes for textbooks of any shape or size. Sometimes even problems!

If any of my notes or thoughts are incorrect, please let me know! This
may happen especially frequently on the math side!


Math 
----

### [Stein & Shakarchi Book 3: Measure Theory, Integration, & Hilbert Spaces](/notes/stein-shakarchi-b3) 

[Other posts](/archive)


`;

  return <MarkdownRender>{post}</MarkdownRender>;
};

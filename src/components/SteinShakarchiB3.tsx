import React from 'react';
import { MarkdownRender } from './MarkdownRender';

export const SteinShakarchiB3: React.VFC = () => {
  const post: string = `


[LPac\'s Pages](/)


-   [home](/)
-   [Github](http://github.com/liampack)
-   [Other-Posts](/archive)
-   [Notes](/notes)
-   [favorites](/posts/favorites)


For the honors exam I took back in my senior year of college, we were
supposed to have learned up to the end of chapter 2 of this book. Yet no
questions were asked on Lebesgue theory! So I\'m going to try to plow
through a little more of this book. My main question-marks walking into
this are:

1.  Where does the notion of measure come into play with respect to
    differentiation?
2.  Will the fundamental theorem of calculus still hold in this more
    abstract setting?
3.  How will the Lebesuge measure guide us to formulating a more
    abstract notion of \"volume\"? (thinking towards these abstract
    measure spaces)
4.  What\'s a fractal lmao.

If you\'ve found this somehow and are using these notes as an aid,
please **do not** look at any of my (potentially incorrect) problem
solutions until you have made a strong attempt at solving the problem
yourself! You\'ll only learn and digest the material if you put in the
time to think deeply and carefully about why the material is built the
way it is.


Some Chapter 1 Problems 
-----------------------





### 1.3 -- Cantor Sets of Constant Dissection 





#### Problem Statement 


Consider the unit interval $\[0,1\]$ and let $0 \< \\xi \< 1$.
($\\xi = \\frac{1}{3}$ will give the cantor set).

In stage 1 of the construction, remove the centrally situated open
interval in $\[0,1\]$ of length $\\xi$. In stage 2, remove *two*
central intervals each of relative length $\\xi$, one in each of the
remaining intervals after stage 1, and so on.

Let $\\mathcal{C}\_{\\xi}$ denote teh set which remains after
applying the above indefinitely.

-   1\. Prove that the complement of $C\_{\\xi}$ is the union of open
    intervals of total length equal to 1.
-   2\. Show directly that $m\_{\*}(C\_{\\xi}) = 0$.




#### Maybe a solution 





##### 1. 


First, $C\_{\\xi}$ is closed since it is the (arbitrary)
intersection of closed sets: $C\_{\\xi} =
\\cap\_{0}\^{\\infty}C\_{k}$, where $C\_{k}$ denotes the remaining
points of $\[0,1\]$ after the $k\^{th}$ iteration of our
algorithm. To see that each $C\_{k}$ is closed:

-   $C\_{0}$ is closed ($\[0,1\]$).
-   Let $C\_{k-1}$ be closed with remaining length $(1 -
    \\xi)\^{k-1}$. First, $C\_{k} = C\_{k-1} - \\mathcal{O}$,
    where $\\mathcal{O}$ is the set of $k-1$ central open
    intervals of $C\_{k-1}$ of relative length $\\xi$. Then
    $C\_{k}$ is closed as $C\_{k}\^{c} = C\_{k-1}\^{c} \\cup
    \\mathcal{O}$ is open. Unforunately induction saves the day.

Now for the length issue. This seems like a grind to get the interval
lengths adding up to the form of $(1-\\xi)\^{k}$. This seems
reasonable right? On the first iteration, we have $1-\\xi$ length.
In the next, we have $(1-\\xi) - \\xi\\cdot(1 - \\xi) = 1 - 2\\xi +
\\xi\^{2} = (1-\\xi)\^{2}$. On the $(k+1)\^{th}$ iteration we have
$(1-\\xi)\^{k} - \\xi\\cdot(1 - \\xi)\^{k}$. Doesn\'t that seem like
$(1 - \\xi)\^{k+1}$? Right? We\'ll say it does.

Then as $k \\to \\infty$, $(1 - \\xi)\^{k} \\to 0$ if $\\xi \<
1$. Therefore $\_{}C\_{\\xi}\^{c} \\rightarrow 1$ as desired. We
obtain this by applying Theorem 3.2 ($m\_{\*}(C\_{\\xi}) +
m\_{\*}(C\_{\\xi}\^{c}) = 1$), which is allowed since open and closed
sets are measurable.




##### 2. 


First note, as before that $C\_{\\xi} =
\\cap\_{k=0}\^{\\infty}C\_{k}$, where we have that $C\_{k} \\subset
C\_{k-1}$ for all $k$. Then by monotonicity, $m\_{\*}(C\_{\\xi})
\\leq m\_{\*}(C\_{k})$ for all $k$. But we know from the previous
problem that $m\_{\*}(C\_{k}) = (1 - \\xi)\^{k}$ since $C\_{k}$
is exactly the union of disjoint closed cubes, and therefore
$m\_{\*}(C\_{k}) = \\sum\_{i=0}\^{2\^{k}}Q\_{i} = (1-\\xi)\^{k}$.
Then $m\_{\*}(C\_{\\xi}) \\leq (1-\\xi)\^{k}$ for all $k$, and
therefore $m\_{\*}(C\_{\\xi}) = 0$.





#### The significance of this problem 


This problem is actually (for me atleast) one of those
intuition-breaking problems. Choose *any* $\\xi \< 0$ then if you
cut out intervals of relative length $\\xi$ from $\[0,1\]$,
you\'ll end up with a measure zero set no matter what! Imagine choosing
$\\xi = 0.000001$ and initially cutting out the subset
$(0.4999995, 0.5000005)$. Would you think if you iterate on this you
end up with \"essentially nothing\"? Dust? That\'s crazy, and that\'s
the power of infinity at work here.

In some way, this is telling us that the successive powers of two,
cutting each sub-interval specifically *in half* is enough to kill the
whole set, so long as this cut leaves some space between the slices.
Eventually, each slice gets cut up enough so that it turns to dust. The
intuition comes back if you look at the evolution of the first interval:
$\[0, (1-\\xi)/2\] \\to \[0, (1-\\xi)\^{2}/2\^{2}\] \\to \\cdots \\to
\[0, (1-\\xi)\^{k}/2\^{k}\]$. We can already see this set being
crushed at the edge, not only because $(1-\\xi)\^{k}$ will crush
itself, $1/2\^{k} \\to 0$ as well! In the next problem, we see that
you can balance this ratio








[Other posts](/archive)


`;

  return <MarkdownRender>{post}</MarkdownRender>;
};

import React from 'react';
import { MarkdownRender } from './MarkdownRender';

export const Ising: React.VFC = () => {
  const post: string = `
# Compression and the ising model
#### *tags*: trash, physics, information-theory, simulation, cs
#### *status: in-progress*
#### *first draft: Jul 10th, 2019*
#### *recent update: Nov 7, 2020*
**UPDATE**: since taking stat-mech, this post is pretty garbage but i'll
leave it up for posterity. might do a redux on this later. read at
your own risk.
## some background if you need it
Recently (2019) as I was doing some reading on applying
information-theoretic approaches to the detection of phase
transitions in non-equilibrium systems. What does non-equilibrium
mean? In this case, we're talking about *thermal* equilibrium, since
this is *the* hypothesis required to apply the usual methods of
thermodynamics to solve for bulk properties of a system (Heat
capacity, internal energy, entropy, ...). Without this hypothesis,
we can't apply our main statmech tools (maximization of entropy,
microstates equally likely) in deriving relevant quantities.

So what's the deal with information in non-equilibrium systems? In equilibrium
systems we have all the agency in the world to apply thermodynamics and probe
phase transitions of the system. But we don't necessarily have these tools
for an athermal system! But this doesn't mean that there isn't information
hiding in the system, in general we can still make counting arguments about
the distribution of states in a system even if thermal equilibrium isn't
there. What we are "counting" is going to be what saves the day, and this is
where some information theory comes into play. We can use a (non
thermodynamic) entropy to probe the system $S = -\\sum p_i \\ln p_i$ ). Mr. Levine and
company used an information-theoretic approach to the ising model and found
some amazing results!
    `;

  return <MarkdownRender>{post}</MarkdownRender>;
};

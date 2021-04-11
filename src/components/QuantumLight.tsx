import React from 'react';
import { MarkdownRender } from './MarkdownRender';

export const QuantumLight: React.VFC = () => {
  const post: string = `
[liampack.github.io](/)


-   [home](/)
-   [Github](http://github.com/liampack)
-   [Other-Posts](/archive)
-   [Notes](/notes)
-   [favorites](/favorites)

# The Quantum Theory of Light
## 1. Planck's radiation law and Einstein Coefficients
Looks like we're startin to set up for a *semi-classical*
understanding of light and electromagnetic radiation. From what I can
tell, this is necessary in the case where we're dealing with a field
governed by a harmonic oscillator behavior (for instance, the
electromagnetic field confined to a cavity will exhibit resonant modes
that evolve in time through harmonic oscillation). But things get
tricky when we look at energy since in reality, energy doesn't lie on
a continuum, its quantized! Oh god!

A question is when we absolutely have to pass to the quantum
realm. This chapter starts with black-body radiaton, so we're going to
be looking at *thermal excitation* of electromagnetic radiation, and
knowing that statmech has planck's constant looming, energy levels are
likely to be quite small for reasonable temperatures.

### Radiation in a Cavity
Our goal is to characterize electromagnetic radiation confined to a
cavity. In doing this, we're going to have to do some work. First of
all, we're dealing with a system in thermal equilibrium so you know
that partition functions are coming into play somehow, and partition
functions mean we need to know the density of states for a given
energy level to count the number of states for each allowable energy.

What's going to make this problem tractable is passing to the quantum
treatment of the harmonic oscillator. We'll get a rough expression for
the energy confined in the cavity which we'll impose to be quantized
in units of $\\hbar\\omega$ where $\\omega$ is a particular field mode
of the cavity.

So we'll have to
1. Get an expression for the density of modes in the cavity for a
given frequency
2. Quantize the field energy
3. Apply the Boltzmann distribution to the quantized energy
distribution to get the average "number of photons" present in the
cavity $\\langle n \\rangle$
4. Get the average energy density of the electromagnetic field by
counting up the average photon energy: $\\langle n \\rangle \\hbar \\omega \\rho(\\omega)d\\omega$
5. Integrate over the density of energy to get the total energy
density in the cavity.

And this will do most of the job.

I'll paraphrase a very rough solution to the above.

If you've put fields in a box enough you'll know the allowable
solutions to Maxwell's equations in the box are products of sines and
cosines having spatial frequencies a multiple of $\\pi / L$. Then the
density of modes will be given by the number of field modes with a
wave vector between $k$ and $k + dk$. This is roughly the area of one
eight of a spherical shell (we only allow positive wave vector
values!) multiplied by $2\\cdot dk$ to account for polarizations (idk
how exactly this comes about, its been a while. i'll trust the
author). For large $k$ this is approximately

$$\\frac{1}{8}\\big(4\\pi k^2 dk\\big) (\\pi/L)^{-3} \\times 2.$$

Thus our density of modes is proportional to $k^2$, or
$\\omega^2/c^3$.

We then quantize the field energies to be the discrete values $E_n =
(n + \\frac{1}{2})\\hbar\\omega \\, \\, n \\in \\mathbb{Z}^{\\geq 0}$. In thermal equilibrium at temperature $T$, we apply the Boltzmann
distribution to obtain the probability that the modes of oscillation
are *thermally* excited to the $n$ th excited state:

$$P(n) = \\exp(-E_n/k_B T) / \\sum_n\\exp(-E_n/k_B T).$$

After a geometric series, we get that $P(n) = (1 - U)U^n$ where $U = \\exp(-\\hbar\\omega/k_B T)$. Taking an expected value, we have
$$\\langle n \\rangle = \\frac{1}{\\exp(\\hbar \\omega / k_B T) - 1}$$,
the Bose-Einstein distribution for an ensemble of bosons in thermal
equilibrium (which is what photons are so this checks out).

Putting it all together, the average energy density is then

$$\\langle W_T(\\omega) \\rangle d\\omega = \\langle n \\rangle \\hbar \\omega \\rho(\\omega)d\\omega = \\frac{\\omega^3}{\\pi^2 c^3} \\frac{d\\omega}{\\exp(\\hbar\\omega/k_B T) - 1}.$$

### Einstein's A and B coefficients
Here's where the magic is gonna happen, and its no surprise this was
Einstein's idea. 
    `;

  return <MarkdownRender>{post}</MarkdownRender>;
};

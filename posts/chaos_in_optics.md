+++
title = "Chaos in Seemingly Simple Optical Systems"
tags = ["physics", "dynamical systems"]
state = "almost-finished"
date = Date(2022, 11, 23)
+++
# {{ title }}
{{page_tags}}


**NOTE 2022-11-22**: Below is a markdown versino of a
[kind-of-paper](/assets/chaos-optics/packer_paper.pdf) written in the
application of modern technology to older papers in optical systems,
where the computational resources. The figures are largely broken, the
references aren't filled out, and the subtitles aren't formatted
properly at all. For some reason, I wrote all the code to generate the
figures in [Racket](https://racket-lang.org/), which has the very
powerful [Plot](https://docs.racket-lang.org/plot/) library.

I'll be building [Franklin](https://franklinjl.org/) macros to
accommodate this kind of post, which will help the development of future
posts in a similar style.

# Abstract

A particularly illuminating application of analysis in dynamical systems
is to that of (nonlinear) optical systems. These systems are
characterized by a nonlinear response of a material by an incident
electromagnetic wave, allowing for the existence of a variety of
phenomena such as laser pumping, frequency-doubling, four-wave-mixing,
and many more [@shen_principles_1984]. What is less well known is that
chaotic behavior can emerge in even the simplest of these systems. Both
in optical pumping and nonlinear wave propagation, it was predicted that
chaotic behavior was possible and emergent when a particular set of
conditions are met depending on the system. As an example, in the simple
case of optical pumping of a nonlinear gain material, the system can be
modeled by a set of equations known as the Maxwell-Bloch equations
[@harrison_chaos_1986] which bear striking similarity to the Lorenz
system (and in fact, reduce to the Lorenz system under certain
conditions on the parameters). We'll be analyzing a different, but still
seemingly simple, optical system known as the ring cavity with a
dielectric medium. We will be following [@ikeda_multiple-valued_1979]
and [@ikeda_optical_1980] closely. It has been shown
[@ikeda_multiple-valued_1979] that under reasonable boundary conditions
on the ring, the dynamics of the system are given by the
difference-differential equations

$$\begin{aligned} E(t) &= A + BE(t - t_R) \exp\{i[\phi(t) - \phi_0]\},\\
  \gamma^{-1}\dot{\phi}(t) &= -\phi(t) + \text{sgn}(n_2)|E(t -
  t_R)|^2\end{aligned}$$ 
  
where $\gamma$ is a relaxation rate parameter, $A$ is proportional to
the amplitude of the incident field, $B$ characterizes the dissipation
of the electric field through the cavity, and $t_R$ a time delay. This
complex map can be reduced to a one-dimensional real map by
considering instead the intensity $I \propto |E|^2$, which
[@harrison_chaos_1986] showed to be:

$$I_{n+1} = I_{in}\bigg(1 + C\cos\big(\frac{2\pi L}{\lambda}(n_2I_n + \phi_0)\big)\bigg)$$

Variation of the parameters $A$, $B$, $\phi_0$, and $C$ will yield
different possible steady-state solutions. As the steady-state solutions
become unstable through the variation in parameters, the system
undergoes a sequence of bifurcations eventually yielding a chaotic
regime with an associated strange attractor [@ikeda_optical_1980]. We
will calculate the fractal dimension for some of these strange
attractors in the chaotic regime. We will also do analysis in the
one-dimensional real map, which will reveal a period-doubling sequence
akin to the logistic map's road to chaos, followed by sets of chaotic
regimes [@harrison_chaos_1986], along with other surprises which we will
discover for the first time below.

A Brief Introduction to Nonlinear Optics
========================================

Nonlinear Polarization
----------------------

First, we will get at taste of how higher-order dependence of a
dielectric medium on an electric field can produce interesting effects,
especially the effect of an intensity-dependent index of refraction.
This will be key in the model we will study, for this nonlinear response
of the medium in the presence of an electric field will pave the way for
a road to chaos.

In typical optics, we consider a dielectric material which has a
*linear* relationship with incident electromagnetic waves. For
simplicity, we consider only the electric field. We say that a material
is *polarized* when, in a classical approximation, an electric field
aligns the molecular dipoles of the material in a certain direction. The
direction of polarization is in general dependent on the shape of
material, type of material, position in the material, and the frequency
and strength of the incident electric field. In the simplest model, we
assume that the reaction of the material's molecular dipole moment
density $\mathbf{P}$ is *linear* in the electric field strength,
$\mathbf{P} \propto \mathbf{E}$, where $\mathbf{P}\equiv$ "average
dipole moment" for a very small region of space. In a first course of
electromagnetics, the proportionality is taken to be direct, so that
$\mathbf{P} = \epsilon_0\chi_e \mathbf{E}$, where $\chi_e$ is known as
the "electric susceptibility" of the medium [@Griffiths] and quantifies
how strong the reaction of the molecules in the material is to the
incident electric field. In general, the relationship can be true up to
a linear transformation, so that
$\mathbf{P} = \epsilon_0\chi^{(1)}(\mathbf{E})$, where $\chi^{(1)}$ is
known as the first-order (or linear) susceptibility, a linear map
defined at each point in the dielectric medium [@Griffiths]. This
first-order tensor allows for the medium to prefer certain polarization
directions at different locations, although the relationship is still
linear and involves only first "powers" of $\mathbf{E}$. This linear
relationship means that the resulting *intensity* of the total electric
field in the medium can only be linear in the incident electric field
intensity.

Next, we introduce nonlinearities in the dependence of the polarization
$\mathbf{P}$ on the electric field $\mathbf{E}$ by expanding
$\mathbf{P}$ as a power-series in higher-order susceptibility tensors
[@boyd]:

$$\begin{aligned}
  \mathbf{P} &= \epsilon_0[\chi^{(1)}(\mathbf{E}) + \chi^{(2)}(\mathbf{E}, \mathbf{E}) +
                  \chi^{(3)}(\mathbf{E}, \mathbf{E}, \mathbf{E}) + \cdots]\\
                &= \mathbf{P}^{(1)} + \mathbf{P}^{(2)} +
  \mathbf{P}^{(3)} + \cdots,\end{aligned}$$

where we define the $n^{th}$ order polarization to be $\mathbf{P}^{(n)}
= \chi^{(n)}(\mathbf{E}, \cdots, \mathbf{E})$. In more typical component
notation, the $n^{th}$ order polarization component $P^i$ can be written
as $P^i = \sum_{j,k,\cdots}\chi^{(n)}_{ij\cdots}E^jE^k\cdots$. We can
immediately see the nonlinear dependence of $\mathbf{P}$ on $\mathbf{E}$
through the products of components $E^j$ proportioned by
$\chi_{ij\cdots}$. We note that the polarization $\mathbf{P}$, in this
approximation, only depends on the electric field at the *current time
$t$*, $\mathbf{E}(t)$. Physically this means the medium responds
instantaneously to the electric field, which we'll assume from here on
out. In general the dependence is non-instantaneous in the case of
materials with dispersion or loss [@boyd].

Intensity-Dependent Refractive Index
------------------------------------

For simplicity, we drop the tensors and consider the polarization
magnitude and electric field magnitude. The third-order polarization
magnitude $P^{(3)}(t)$ is then expressed as
$P^{(3)}(t) = \epsilon_0\chi^{(3)}E^3(t)\propto E^3(t)$, where
$\chi^{(3)}$ is now a *scalar*, meaning $P$ is linearly dependent on the
cube of $E$. If we assume a monochromatic wave,
$E(t) = \mathcal{E} \cos \omega t$, then using the identity
$\cos^3\omega
t = \frac14 \cos(3\omega t) + \frac34 \cos \omega t$:
$$P^{(3)}(t) = \frac14 \epsilon_0\chi^{(3)}\mathcal{E}^3 \cos 3\omega t + \frac34
  \epsilon_0\chi^{(3)}\mathcal{E}^3\cos\omega t.$$

We can see that two frequency terms emerge: a component with frequency
$3\omega$, known as the third-harmonic generated component, and a
component with the original frequency $\omega$ which gives rise to an
intensity-dependent index of refraction. This intensity-dependent effect
is exactly what we needed. Writing the index of refraction as a function
of frequency, $n(\omega)$ is a known function of $\chi$ when
magnetization can be neglected:
$n(\omega) = \sqrt{1 + \chi_{eff}(\omega)}$, where $\chi_{eff}(\omega)$
is the proportionality between $E(\omega)$ and $P(\omega)$. For our
case, $E$ has a single frequency component $\omega$ and $P$ has two
frequency components, $3\omega$ and $\omega$. As a result, since
$P(\omega) = \epsilon_0[\chi^{(1)}E(\omega) + 3 \chi^{(3)}|E(\omega)|^2 E(\omega)]$,
we can see that $\chi_{eff} = \chi^{(1)} + 3\chi^{(3)}|E(\omega)|^2$.
Since the intensity $I(\omega)$ is proportional to the squared magnitude
of the electric field $|E(\omega)|^2$, we can see that
$n(\omega) = n_0 + n_2I(\omega)$ when we neglect higher order terms than
$|E(\omega)|^2$, where $n_2$ is a constant determined by the above
factors [@boyd].

A Simple System and Some Intuition
----------------------------------

The simple system we wish to analyze is the well-known ring resonator
with a single gain medium along one branch of the ring, see figure
[fig:ring](#fig:ring){reference-type="ref" reference="fig:ring"}.
Light is input from the outside where the light beam then travels along
the ring, guided by the mirrors. Of interest is the lights interaction
with the gain medium, where there is opportunity for amplification and
phase shift of the incoming light. In this way the gain medium acts as a
pump for the incoming light, so that the outgoing light's intensity can
be larger than the input intensity. Yet with the nonlinear nature of the
gain medium, the outgoing light's spectrum may also be different due to
the possibility of higher frequency generation, as we saw with the
third-order polarization.

Intuitively, we can see that the cavity length, $L$ will have an effect
on the phase shift of the incoming light on a single round-trip even in
the linear case. Since light propagates at a different speed in the
medium and at the same speed in the other three branches, we'll have a
phase shift (after one round trip) of
$\phi_{0}=  (2\pi/\lambda) L \cdot n_0$ for a given frequency
$\omega = 2\pi/\lambda$. Since we saw above that the index of refraction
is intensity-dependent in the third-order nonlinear case, we have to
modify this phase shift to $\phi = (2\pi/\lambda) L \cdot n(I) =
(2\pi/\lambda)L \cdot (n_0 + n_2I)$.

![[fig:ring]{#fig:ring label="fig:ring"} From [@ikeda_optical_1980],
a schematic of the ring-resonator used to demonstrate chaotic behavior
in a simple optical system.](/assets/chaos-optics/ring-resonator.png)

Analysis
========

We'll be following and expanding upon some of the analysis of the above
system in [@harrison_chaos_1986] and [@ikeda_optical_1980]. We'll also
fill in the gaps in going from the analysis of the system in
[@ikeda_optical_1980] to [@harrison_chaos_1986] which were very largely
left out in the discussion. We'll see the extent to which the nonlinear
nature of the gain medium effects the evolution of the electric field
intensity and when chaos sets in.

We'll start with a result derived in [@ikeda_multiple-valued_1979] and
utilized in [@ikeda_optical_1980], namely the equations which determine
the evolution of an incident monochromatic light beam around the ring
resonator including the field amplitude and phase shift:
$$\begin{aligned}
  \label{eq:1}
  E(t) &= A + BE(t - t_R)\exp\{i[\phi(t) - \phi_0]\},\\
  \gamma^{-1}\dot{\phi}(t) &= -\phi(t) + \text{sgn}(n_2)|E(t - t_R)|^2.\end{aligned}$$

These equations are arrived at in [@ikeda_multiple-valued_1979] through
the Maxwell-Debye equations which govern the propagation of light in a
two-level system when the system is "homogeneously broadened," and the
details are beyond the scope of this paper.

Now to describe the physical meaning of some parameters. First, $E(t)$
is a dimensionless form of the electric field amplitude at the ring's
top-left corner, where distance is measured around the circle starting
from the top-left corner and wrapping around after the entire ring is
traversed. Importantly, $E(t) \propto \sqrt{(2\pi/\lambda)n_2}$. $n_2$
is the nonlinear refractive instance we arrived at above, $\phi(t)$ is
the phase shift suffered by the electric field in the medium, $\phi_0$
is the mismatch of the cavity's length with the light's wavelength (as
above, $\phi_0 = (2\pi/\lambda)n_0$, $\gamma$ is a measure of the
relaxation rate of the phase shift. $A$ is proportional to the amplitude
of the incident electric field, and $B$ characterizes the dissipation of
the electric field in the cavity. Importantly,
$A \propto \sqrt{(2\pi/\lambda)n_2}E_I$, the incident electric field.
$t_R$ is a time delay from the propagation of light through the medium,
$t_R =
L/c$. We can see that the electric field amplitude $E(t_0)$ at some time
$t_0$ will depend only on the electric field before the last "round
trip" of the light, $t_{0} - t_R$ when ignoring the vacuum regions of
the cavity. Since the refractive index is $0$ in a vacuum, the gain
medium produces all effects on the electric field and time-differences
can be taken relative to the end-points of the medium.

To analyze this system we'll assume that we reach a steady-state in the
phase shift $\dot{\phi}(t) = 0$ so that
$\phi(t) = \text{sgn}(n_2)|E(t - t_R)|^2$, or alternatively that
$\gamma t_R \to \infty$. Then we have that
$E(t) = A + BE(t - t_R) \exp\{i[\text{sgn}(n_2) |E(t - t_R)|^2 - \phi_0]\}$.
Multiplying both sides by $E_{in}$, normalizing, and assuming $n_2$ is
*negative*, we can again re-write: $$\begin{aligned}
  E(t) &= A + BE(t - t_R) \exp\{i[-|E(t - t_R)|^2 - \phi_0]\}\\
  \Rightarrow E(t)I_{in} &= A\cdot E_{in}  + B\cdot I_{in} E(t - t_R) \exp\{i[-|E(t-t_{R})|^2 -
                           \phi_0]\}\\
  \Rightarrow \tilde{I}(t) &= \tilde{I}_{in}(1 + C \exp\{-i(n_2\tilde{I}(t - t_R) - \phi_0)\})\end{aligned}$$
(Author's Note: We cheated in the above and simply re-assigned
$E(t)\cdot E_{in} \to I(t)$ for each occurrence, since I don't see a
physical way that [@harrison_chaos_1986] arrived at its central equation
other than by this kind of re-labeling. What should have happened is
that an equation for intensity should have fallen out after multiplying
both sides of $E(t)$ by its complex conjugate, but this introduces cross
terms not included in [@harrison_chaos_1986], so I left them out in
favor of sticking with the literature. I suspect this could have been a
mistake).

Taking the real part of both sides we arrive at the central
one-dimensional mapping analyzed in [@harrison_chaos_1986], re-label
$\tilde{I} \to I$, utilizing the fact that
$\cos(\theta) = \cos(-\theta)$ and letting $I_n = I(nt_R)$:

$$\begin{aligned}
  \label{eq:2}
  I_{n+1} &= I_{in}\bigg(1 + C\cos\big[\frac{2\pi L}{\lambda}n_2 I_{n} + \phi_0\big]\bigg)\end{aligned}$$
Notice that when nonlinear effects can be neglected ($n_2 = 0$),
$I_{n+1} = I_{in}(1 +
C\cos\phi_0)$, which is the result from linear optics of light being
continually pumped by a gain medium through a ring resonator, which is
reassuring.

The steady-state solution $I_s$ can be reached by solving
$I_s = I_{in}(1 + C\cos(\frac{2\pi L}{\lambda}n_{2} I_s + \phi_0))$, but
we won't get much further than that. The result is a globally stable
fixed point which we can see from figure
[fig:cobweb-stable](#fig:cobweb-stable){reference-type="ref"
reference="fig:cobweb-stable"}.

Finally, in [@harrison_chaos_1986], they simply state that "the Liapunov
exponent" is $\log \frac{I_{in}C}{2}$, for which chaos occurs when
$I_{in}C > 2$, but this cannot be the case since a single Liapunov
exponent doesn't globally apply to the system unless there is a single
globally attracting trajectory. Furthermore, the Liapunov exponent
calculated in the below changes significantly depending on the
trajectory and type of trajectory. We also found stable trajectories on
cycles for $I_{in}C > 2$, in the case $I_{in} = 1$. Finally, we'll see
in the next section that there are sometimes *two stable trajectory
types*, for which the Liapunov exponent is *different*. This seems to
have been another oversight in [@harrison_chaos_1986].

![[fig:cobweb-stable]{#fig:cobweb-stable
label="fig:cobweb-stable"}Cobweb diagram of the intensity map with a
globally stable solution. The Liapunov exponent is calculated
empirically to be $\lambda \approx
    -0.3205$, indicating nearby neighborhoods shrinking towards it
throughout any starting trajectory](/assets/chaos-optics/map-stable.png)

The Journey to Chaos
--------------------

We can see qualitatively, as we increase $C$ from $1.0$, a series of
period doubling occurs, examples of which are shown in figure
[fig:cycles](#fig:cycles){reference-type="ref"
reference="fig:cycles"}. Each of these cycles has a negative Liapunov
exponent and a derivative with magnitude less than one, calculated as a
product of the derivative of each point in the cycle.

![[fig:cycles]{#fig:cycles label="fig:cycles"} A representative set
of cobwebs of the $I_{n+1}$ map's period doubling phenomena for $C$
increasing above $1.0$. The Liapunov exponent is calculated empirically
to be negative for each trajectory
($\lambda \approx -0.10966, -0.39309, -0.08662$ for the 2-cycle,
4-cycle, and 8-cycle respectively). We also calculated the derivative
products on each trajectory's cycle points to be less than one,
indicating these cycles are, in fact, stable
($\Pi_if'(x_i) = 0.64491, 0.45558, 0.50001$ for the 2-cycle, 4-cycle,
and 8-cycle respectively).](/assets/chaos-optics/map-2cycle.png "fig:")
![[fig:cycles]{#fig:cycles label="fig:cycles"} A representative set
of cobwebs of the $I_{n+1}$ map's period doubling phenomena for $C$
increasing above $1.0$. The Liapunov exponent is calculated empirically
to be negative for each trajectory
($\lambda \approx -0.10966, -0.39309, -0.08662$ for the 2-cycle,
4-cycle, and 8-cycle respectively). We also calculated the derivative
products on each trajectory's cycle points to be less than one,
indicating these cycles are, in fact, stable
($\Pi_if'(x_i) = 0.64491, 0.45558, 0.50001$ for the 2-cycle, 4-cycle,
and 8-cycle respectively).](/assets/chaos-optics/map-4cycle.png "fig:")
![[fig:cycles]{#fig:cycles label="fig:cycles"} A representative set
of cobwebs of the $I_{n+1}$ map's period doubling phenomena for $C$
increasing above $1.0$. The Liapunov exponent is calculated empirically
to be negative for each trajectory
($\lambda \approx -0.10966, -0.39309, -0.08662$ for the 2-cycle,
4-cycle, and 8-cycle respectively). We also calculated the derivative
products on each trajectory's cycle points to be less than one,
indicating these cycles are, in fact, stable
($\Pi_if'(x_i) = 0.64491, 0.45558, 0.50001$ for the 2-cycle, 4-cycle,
and 8-cycle respectively).](/assets/chaos-optics/map-8cycle.png "fig:")

Chaos
-----

The sequence of period doubling roughly continues until chaos occurs at
some threshold $C$ value. We can see from figure
[fig:chaos](#fig:chaos){reference-type="ref" reference="fig:chaos"}
that chaotic behavior characteristic of an unstable-everywhere map
occurs, reminiscent of the logistic map above its critical control value
$r_c$. This chaotic behavior continues, but we also encounter brief
periods of periodic behavior much like in the case of the logistic map.
To get a better idea of how the global dynamics evolve with $C$, we
continue with an orbit diagram, something which wasn't calculated in
neither [@harrison_chaos_1986] nor [@ikeda_optical_1980], but which
shines a very bright light on the behavior of this map.

![[fig:chaos]{#fig:chaos label="fig:chaos"} A cobweb diagram at
$C = 2.4$ of the chaotic behavior that ensues above a threshold $C$
value. The Liapunov exponent was calculated empirically to be $\lambda
  \approx 0.3937816 > 0$ and the derivative at each point visited to be
$f'(x) > 1$, reinforcing the fact that this is a chaotic
regime.](/assets/chaos-optics/map-chaos.png)

Orbit Diagram Analysis
----------------------

A number of very surprising results appear in the orbit diagram
calculation and analysis, see figure
[fig:orbit](#fig:orbit){reference-type="ref" reference="fig:orbit"}.
The orbit diagram, while at times similar to the logistic map's orbit
diagram, has stark differences.

First, we can see on the right plot of figure
[fig:orbit](#fig:orbit){reference-type="ref" reference="fig:orbit"}
that the $8$-cycle branches leading to chaos briefly split into lobed
$16-$cycle trajectories, something which provably doesn't occur in the
logistic map. This is likely due to the non-unimodal nature of
$1 + \cos \theta$, which becomes greatly exaggerated as the nonlinear
coefficient $n_2$ increases to an appreciable value. As an example of
how unwieldy and unpredictable the orbit diagram can become in the case
of strong nonlinearity, we calculated the orbit diagram when
$n_2 = 10.0$ and find striking qualities in figure
[fig:nonlinear](#fig:nonlinear){reference-type="ref"
reference="fig:nonlinear"}. A period-doubling sequence to chaos appears
much sooner, with fully chaotic behavior occurring at $C \approx 0.22$,
a full order of magnitude sooner than in the case of $n_2 = 1.0$. We can
also see a jump from chaos to fully ordered behavior around
$C \approx 0.27$, where another period-doubling sequence to chaos
occurs. Finally, the lower branch of the previous chaotic regime appears
and fills in the gap between itself and the new chaotic branch,
producing a cone of chaos which continues for as far as we could
calculate (with extremely short periodic regimes).

![[fig:orbit]{#fig:orbit label="fig:orbit"} The orbit diagram for
the $I_{n+1}$ map. Chaos ensues at some critical $C$ value around
$\approx 2.3$, but the situation is even less clear than in the logistic
map case. On the right is a zoomed-in piece of the orbit diagram in the
range $C \in [2.1, 2.7]$. In contrast to the logistic map, "lobes"
appear briefly on each of the period-8 branches giving brief periods of
period-16 cycles. Artifacts also appear for $C$ ranges leading up to
chaos, in this case an artifact appears around $C \approx 2.26$ where
the branches of the orbit diagram are broken by streaks. This is
investigated further in figure
[fig:non-smear-orbit](#fig:non-smear-orbit){reference-type="ref"
reference="fig:non-smear-orbit"}](/assets/chaos-optics/finite-map-orbit-plot.png "fig:")
![[fig:orbit]{#fig:orbit label="fig:orbit"} The orbit diagram for
the $I_{n+1}$ map. Chaos ensues at some critical $C$ value around
$\approx 2.3$, but the situation is even less clear than in the logistic
map case. On the right is a zoomed-in piece of the orbit diagram in the
range $C \in [2.1, 2.7]$. In contrast to the logistic map, "lobes"
appear briefly on each of the period-8 branches giving brief periods of
period-16 cycles. Artifacts also appear for $C$ ranges leading up to
chaos, in this case an artifact appears around $C \approx 2.26$ where
the branches of the orbit diagram are broken by streaks. This is
investigated further in figure
[fig:non-smear-orbit](#fig:non-smear-orbit){reference-type="ref"
reference="fig:non-smear-orbit"}](/assets/chaos-optics/finite-map-orbit-plot-zoom.png "fig:")

![[fig:nonlinear]{#fig:nonlinear label="fig:nonlinear"} A
calculation of an orbit diagram for the $I_{n+1}$ map in the case of a
very strong nonlinear coefficient $n_2 = 10.0$. First, chaos occurs much
more quickly at around $C \approx 0.22$, a full order of magnitude
smaller from $n_2 = 1.0$ with no change in the map's magnitude. Second,
the chaos abruptly stops discontinuously around $0.27$ to produce a
second period-doubling sequence to chaos, where the lower branch of the
previous chaotic portion re-appears and is "filled in" past a certain
critical value $C
\approx 0.355$, where chaos dominates for the forseeable future (with
small periodic windows).](/assets/chaos-optics/finite-map-orbit-diagram-highly-nonlinear.png)

Second, we can see the appearance of artifacts in the descent to chaos,
see figures
[fig:non-smear-orbit](#fig:non-smear-orbit){reference-type="ref"
reference="fig:non-smear-orbit"} and
[fig:ghost-timeseries](#fig:ghost-timeseries){reference-type="ref"
reference="fig:ghost-timeseries"}. On many separate re-calculations of
the orbit diagram we saw the appearance of separate stable yet unusual
cycles that were "thick" in comparison to the true cycles appearing
earlier in the period-doubling sequence. These thick cycles have
periodic motion, although no point is visited twice in the trajectory.
In the thick cycle shown, the cycle was found to have a Liapunov
exponent $\lambda \approx -0.9997$ and a derivative product on the cycle
to be $\Pi_if'(x_i) \approx 0$, indicating super-stability! Thus we see
the appearance of *two* stable cycles, one of which has "contained
chaos," such that the trajectory never repeats itself. This is
reminiscent of a strange attractor, where there is a qualitatively clear
orbit that appears, but there exists chaotic behavior within the
confines of the orbit.

![[fig:non-smear-orbit]{#fig:non-smear-orbit
label="fig:non-smear-orbit"} A close-up between an orbit diagram with
few artifacts (left) and a separate orbit diagram calculation with thick
and spotty artifacts (right) in the range $C \in [2.26, 2.29]$, as well
as representative trajectories for the non-artifact and artifact
trajectories appearing at $C=2.268$ (bottom). The initial value of the
map was chosen to be uniform in the range $I_0 \in [0, 2]$, leading to
different *unique* asymptotic trajectories in very tight regions. The
expected stable cycle trajectory appears on the left diagram,
continuously connecting from the previous branches. Another "thick"
trajectory shows itself periodically in the road to chaos, where the
trajectory is roughly periodic but does not repeat itself and wobbles
about separate cycle points, see figure
[fig:ghost-timeseries](#fig:ghost-timeseries){reference-type="ref"
reference="fig:ghost-timeseries"} for a time-series of the thick
trajectory.](/assets/chaos-optics/non-smear-orbit.png "fig:")
![[fig:non-smear-orbit]{#fig:non-smear-orbit
label="fig:non-smear-orbit"} A close-up between an orbit diagram with
few artifacts (left) and a separate orbit diagram calculation with thick
and spotty artifacts (right) in the range $C \in [2.26, 2.29]$, as well
as representative trajectories for the non-artifact and artifact
trajectories appearing at $C=2.268$ (bottom). The initial value of the
map was chosen to be uniform in the range $I_0 \in [0, 2]$, leading to
different *unique* asymptotic trajectories in very tight regions. The
expected stable cycle trajectory appears on the left diagram,
continuously connecting from the previous branches. Another "thick"
trajectory shows itself periodically in the road to chaos, where the
trajectory is roughly periodic but does not repeat itself and wobbles
about separate cycle points, see figure
[fig:ghost-timeseries](#fig:ghost-timeseries){reference-type="ref"
reference="fig:ghost-timeseries"} for a time-series of the thick
trajectory.](/assets/chaos-optics/smear-orbit.png "fig:")

![[fig:non-smear-orbit]{#fig:non-smear-orbit
label="fig:non-smear-orbit"} A close-up between an orbit diagram with
few artifacts (left) and a separate orbit diagram calculation with thick
and spotty artifacts (right) in the range $C \in [2.26, 2.29]$, as well
as representative trajectories for the non-artifact and artifact
trajectories appearing at $C=2.268$ (bottom). The initial value of the
map was chosen to be uniform in the range $I_0 \in [0, 2]$, leading to
different *unique* asymptotic trajectories in very tight regions. The
expected stable cycle trajectory appears on the left diagram,
continuously connecting from the previous branches. Another "thick"
trajectory shows itself periodically in the road to chaos, where the
trajectory is roughly periodic but does not repeat itself and wobbles
about separate cycle points, see figure
[fig:ghost-timeseries](#fig:ghost-timeseries){reference-type="ref"
reference="fig:ghost-timeseries"} for a time-series of the thick
trajectory.](/assets/chaos-optics/non-smear-period.png "fig:")
![[fig:non-smear-orbit]{#fig:non-smear-orbit
label="fig:non-smear-orbit"} A close-up between an orbit diagram with
few artifacts (left) and a separate orbit diagram calculation with thick
and spotty artifacts (right) in the range $C \in [2.26, 2.29]$, as well
as representative trajectories for the non-artifact and artifact
trajectories appearing at $C=2.268$ (bottom). The initial value of the
map was chosen to be uniform in the range $I_0 \in [0, 2]$, leading to
different *unique* asymptotic trajectories in very tight regions. The
expected stable cycle trajectory appears on the left diagram,
continuously connecting from the previous branches. Another "thick"
trajectory shows itself periodically in the road to chaos, where the
trajectory is roughly periodic but does not repeat itself and wobbles
about separate cycle points, see figure
[fig:ghost-timeseries](#fig:ghost-timeseries){reference-type="ref"
reference="fig:ghost-timeseries"} for a time-series of the thick
trajectory.](/assets/chaos-optics/smear-period.png "fig:")

![[fig:ghost-timeseries]{#fig:ghost-timeseries
label="fig:ghost-timeseries"} A time-series plot of the fat trajectory
shown in the bottom-right of
[fig:non-smear-orbit](#fig:non-smear-orbit){reference-type="ref"
reference="fig:non-smear-orbit"}. On the left is the non-truncated
trajectory and on the right is a zoom-in of the wobbling cycle
demonstrated qualitatively by the cobweb diagram. No point is visited
twice, giving a sense of "predictable chaos" or "bounded chaos" as in
the case of the Lorenz map's strange attractor, although there is no
bouncing *between* orbits in the finite-map case due to the stability of
the thick orbit ($\lambda \approx -0.99997$ and
$\Pi_{i} f(x_{i}) \approx 0$ indicating this is in fact a *super-stable*
(/assets/chaos-optics/thick) cycle!!)](ghost-time.png "fig:")
![[fig:ghost-timeseries]{#fig:ghost-timeseries
label="fig:ghost-timeseries"} A time-series plot of the fat trajectory
shown in the bottom-right of
[fig:non-smear-orbit](#fig:non-smear-orbit){reference-type="ref"
reference="fig:non-smear-orbit"}. On the left is the non-truncated
trajectory and on the right is a zoom-in of the wobbling cycle
demonstrated qualitatively by the cobweb diagram. No point is visited
twice, giving a sense of "predictable chaos" or "bounded chaos" as in
the case of the Lorenz map's strange attractor, although there is no
bouncing *between* orbits in the finite-map case due to the stability of
the thick orbit ($\lambda \approx -0.99997$ and
$\Pi_{i} f(x_{i}) \approx 0$ indicating this is in fact a *super-stable*
(/assets/chaos-optics/thick) cycle!!)](ghost-time-zoom.png "fig:")

Finally, we compare the $I_{n+1}$ map to the logistic map in the case of
small nonlinearity $n_2 = 0.05$. Since $\cos\theta \approx 1 - x^2/2$,
we have that $I_{n+1}
\approx (1 + C(1 - \frac12 x^2))$, which is a roughly unimodal map on
its domain. The resulting comparison in figure
[fig:logistic-comp](#fig:logistic-comp){reference-type="ref"
reference="fig:logistic-comp"} then shows that the universality theorems
likely hold approximately for our nonlinear map as the orbit diagrams
grow increasingly similar to each-other. This has an interesting
implication: even in the case of small nonlinearity in a dielectric
medium, strong enough input intensity is *guaranteed* to produce chaos
eventually by reduction to the logistic map, although the power levels
required may be unrealistically and un-physically large.

![[fig:logistic-comp]{#fig:logistic-comp label="fig:logistic-comp"}
A comparison of the logistic map orbit diagram and the $I_{n+1}$ orbit
diagram in the case of very small nonlinearity, in this case $n =
  0.05$. The result are two very similar orbit diagrams due to the fact
that $\cos\theta$ expands into a quadratic when $\theta$ is small. The
universality theorems for finite difference maps on unimodal
distributions then apply, yielding qualitatively similar orbit
diagrams.](/assets/chaos-optics/logistic-map-orbit-plot.png "fig:")
![[fig:logistic-comp]{#fig:logistic-comp label="fig:logistic-comp"}
A comparison of the logistic map orbit diagram and the $I_{n+1}$ orbit
diagram in the case of very small nonlinearity, in this case $n =
  0.05$. The result are two very similar orbit diagrams due to the fact
that $\cos\theta$ expands into a quadratic when $\theta$ is small. The
universality theorems for finite difference maps on unimodal
distributions then apply, yielding qualitatively similar orbit
diagrams.](/assets/chaos-optics/finite-map-orbit-plot-small-n2.png "fig:")

(Complex) Chaos
---------------

We now return to the complex map. To turn the difference-differential
equation pair into a difference map, we return to the adiabatic case of
the above complex map, set $E_n =
E(nt_R)$ so that our complex iterated map is $$\begin{aligned}
E_{n+1} = A + BE_{n}\exp\{i(|E_n|^2 - \phi_0)\}\end{aligned}$$ We
restrict ourselves to the case $\phi_0 = 0$ and $B = 0.4$ while varying
$A$ as in [@ikeda_optical_1980] and expand upon their analysis by
calculating the fractal dimension for different values of $A$ at the
onset of chaos.

First, we confirm that we have a correct implementation of the complex
map, shown in figure
[fig:paper-comp](#fig:paper-comp){reference-type="ref"
reference="fig:paper-comp"}. The two generated sequences look
qualitatively similar which is a good sign, allowing us to proceed.
Notably, we produce around $30,000$ points for each of the generated
plots below which opens the door for more precise fractal dimension
calculations. We also plot points in the sequence with an opacity of
$0.1$ to emphasize roughly-uniform distribution of the map over the
fractal. This allows us to say that the trajectories are truly chaotic,
bouncing around in a seemingly random manner in the chaotic regime at a
"uniform" rate, although regions of higher density of points appear due
to the twisting of the fractal around certain bends and curves, for
example the zoom-in of the fractal inner spiral in
[fig:paper-chaos](#fig:paper-chaos){reference-type="ref"
reference="fig:paper-chaos"}. We calculate the fractal dimension of each
chaotic example by the procedure outlined in [@strogatz]: First, we
generate a long series of points and remove the transient. Then we
choose a sequence of $\epsilon_i >
0$. For each point on the trajectory $\mathbf{z}$, we then calculate
$N_{\epsilon_i}(\mathbf{z})$, the number of neighbors of $\mathbf{z}$
within an $\epsilon_i$-ball. For our case, we instead calculated an
$\epsilon$-box to speed up calculations since quadratic distances would
have significantly slowed down this step. Finally, calculate the
correlation $C(\epsilon_i) = \frac{1}{\text{\# of points }
  \mathbf{z}}\sum_{\mathbf{z}}N_{\epsilon_i}(\mathbf{z})$. We then plot
$\log \epsilon_i$ vs. $\log C(\epsilon_i)$ and get a rough slope, which
approximates the correlation dimension of the fractal. Since the
correlation dimension is bounded above by the fractal dimension, this
should be a good enough measure for when we have something fractal-like.
For the below, we need to be careful to choose each $\epsilon$ large
enough to obtain an appreciable neighborhood of points but small enough
so that the neighborhood doesn't cross over into different "twists" of
the fractal. For this reason, we chose $\epsilon \in [0.01,
1.0]$. In practice, we approximate the above sum $\sum_{\mathbf{z}}$ by
choosing $5000$ random points of the generated map and averaging their
neighborhood sizes, which should give reasonable approximation to
$C(\epsilon)$ and significantly speed up calculation.

We chose three different complex iteration cases: $A = 2.0, 3.9,$ and
$10.0$. These correspond to the cases of low chaos, "medium" chaos, and
"high" chaos respectively, which is deemed qualitatively by how tightly
the geometric object is being wound. In figure
[fig:min-chaos](#fig:min-chaos){reference-type="ref"
reference="fig:min-chaos"}, we calculate the trajectory of the complex
map to be a roughly $1$-dimensional curve with signs of increasing
dimension as we increase $A$. Next, we reproduce the fractal of figure
[fig:paper-comp](#fig:paper-comp){reference-type="ref"
reference="fig:paper-comp"} in figure
[fig:paper-chaos](#fig:paper-chaos){reference-type="ref"
reference="fig:paper-chaos"} and find the correlation dimension to be
roughly $1.41$, a reasonable number. Finally, in the case of high-chaos
when the geometric object is tightly and densely wound at $A = 10.0$, we
still reach a correlation dimension of $1.41$.

![[fig:paper-comp]{#fig:paper-comp label="fig:paper-comp"} A
comparison between our empirically calculated complex fractal and the
fractal shown in [@ikeda_optical_1980]. Our fractal was calculated with
$30,000$ iterations of the complex map with an opacity of $0.1$ given to
each generated point, demonstrating qualitatively that the trajectory is
chaotic and uniform over the
attractor.](/assets/chaos-optics/5.0_3.9_0.4_1_paper.png.png "fig:")
![[fig:paper-comp]{#fig:paper-comp label="fig:paper-comp"} A
comparison between our empirically calculated complex fractal and the
fractal shown in [@ikeda_optical_1980]. Our fractal was calculated with
$30,000$ iterations of the complex map with an opacity of $0.1$ given to
each generated point, demonstrating qualitatively that the trajectory is
chaotic and uniform over the
attractor.](/assets/chaos-optics/5.0_3.9_0.4_1_paper.png_zoom.png "fig:")

![[fig:paper-comp]{#fig:paper-comp label="fig:paper-comp"} A
comparison between our empirically calculated complex fractal and the
fractal shown in [@ikeda_optical_1980]. Our fractal was calculated with
$30,000$ iterations of the complex map with an opacity of $0.1$ given to
each generated point, demonstrating qualitatively that the trajectory is
chaotic and uniform over the attractor.](/assets/chaos-optics/paper.png)

![[fig:min-chaos]{#fig:min-chaos label="fig:min-chaos"} An example
of early chaos in the complex map at $A =
  2.0$. We calculate the fractal dimension to be barely above $1$, which
is supported qualitatively by a zoom-in on the
fractal.](/assets/chaos-optics/5.0_2.0_0.4_1_minchaos.png "fig:")
![[fig:min-chaos]{#fig:min-chaos label="fig:min-chaos"} An example
of early chaos in the complex map at $A =
  2.0$. We calculate the fractal dimension to be barely above $1$, which
is supported qualitatively by a zoom-in on the
fractal.](/assets/chaos-optics/5.0_2.0_0.4_1_minchaos_zoom.png "fig:")

![[fig:min-chaos]{#fig:min-chaos label="fig:min-chaos"} An example
of early chaos in the complex map at $A =
  2.0$. We calculate the fractal dimension to be barely above $1$, which
is supported qualitatively by a zoom-in on the
fractal.](/assets/chaos-optics/2.0_0.4_1_correlation.png)

![[fig:paper-chaos]{#fig:paper-chaos label="fig:paper-chaos"} An
example of mid-term chaos at $A = 3.9$, with the fractal in figure
[fig:min-chaos](#fig:min-chaos){reference-type="ref"
reference="fig:min-chaos"} being continually twisted into a spiral. We
calculate the fractal dimension to be roughly
$1.41$.](/assets/chaos-optics/5.0_3.9_0.4_1_paper.png.png "fig:")
![[fig:paper-chaos]{#fig:paper-chaos label="fig:paper-chaos"} An
example of mid-term chaos at $A = 3.9$, with the fractal in figure
[fig:min-chaos](#fig:min-chaos){reference-type="ref"
reference="fig:min-chaos"} being continually twisted into a spiral. We
calculate the fractal dimension to be roughly
$1.41$.](/assets/chaos-optics/5.0_3.9_0.4_1_paper.png_zoom.png "fig:")

![[fig:paper-chaos]{#fig:paper-chaos label="fig:paper-chaos"} An
example of mid-term chaos at $A = 3.9$, with the fractal in figure
[fig:min-chaos](#fig:min-chaos){reference-type="ref"
reference="fig:min-chaos"} being continually twisted into a spiral. We
calculate the fractal dimension to be roughly
$1.41$.](/assets/chaos-optics/3.9_0.4_1_correlation.png)

![[fig:max-chaos]{#fig:max-chaos label="fig:max-chaos"} An example
of late-term chaos at $A = 10.0$. Although the fractal is twisted into
more densely packed spirals, the calculated dimension remains comparable
to that of [fig:paper-chaos](#fig:paper-chaos){reference-type="ref"
reference="fig:paper-chaos"} at around
$1.41$.](/assets/chaos-optics/5.0_10.0_0.4_1_paper.png.png "fig:")
![[fig:max-chaos]{#fig:max-chaos label="fig:max-chaos"} An example
of late-term chaos at $A = 10.0$. Although the fractal is twisted into
more densely packed spirals, the calculated dimension remains comparable
to that of [fig:paper-chaos](#fig:paper-chaos){reference-type="ref"
reference="fig:paper-chaos"} at around
$1.41$.](/assets/chaos-optics/5.0_10.0_0.4_1_paper.png_zoom.png "fig:")

![[fig:max-chaos]{#fig:max-chaos label="fig:max-chaos"} An example of
late-term chaos at $A = 10.0$. Although the fractal is twisted into more
densely packed spirals, the calculated dimension remains comparable to
that of [fig:paper-chaos](#fig:paper-chaos){reference-type="ref"
reference="fig:paper-chaos"} at around
$1.41$.](/assets/chaos-optics/10.0_0.4_1_correlation.png)

Conclusions
===========

We started by introducing a simple nonlinear effect in a dielectric
medium in the ring resonator system. From this, clear chaos emerges at a
high-intensity input field due to the system reducing to an iterated map
in the adiabatic case $\gamma t_R \to \infty$, which allowed an analysis
in either a complex iterated map of the field amplitude
[@ikeda_optical_1980] or a real-valued map of the intensity
[@harrison_chaos_1986]. The results are visually different but
qualitatively related by chaos. In the case of the real map, we
generated slices of the orbit diagram with important qualitative
differences from the usual logistic and unimodal maps. These differences
are then exacerbated as the nonlinear optical coefficient $n_2$ is
increased further. We also found the coexistence of stable cycles with
super-stable thick cycles, which have behavior reminiscent of a strange
attractor whereby the thick trajectories have periodic motion but no
repetition of the same points. In the case of the complex map, we
generated sets of fractals and calculated the correlation dimension in
each case, with the correlation dimension roughly saturating at
$\approx 1.41$.

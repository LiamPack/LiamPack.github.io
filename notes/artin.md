+++
title = "Algebra; Artin"
tags = ["notes", "math", "algebra"]
date = Date(2023, 01, 16)
firstdraft = Date(2023, 01, 16)
lastupdate = Date(2022, 11, 22)
+++

# {{ title }}

{{page_tags}}

*last updated: {{lastupdate}}*

Another book we were supposed to know inside-and-out for my honors
exams in college. Algebra is the backbone of mathematical description,
and (finite-dimensional) linear algebra is possibly the most important
tool in the tool-belt: whats better than turning a complicated problem
into a problem of counting dimension? The problems I choose to write
up will probably be sparse, and even more sparsely updated.

\toc 

## Chapter 1 -- Matrices
### An aside on the determinant
Ah yes, the study of matrices.

I've always found it interesting that this book starts off batting
with matrices and their properties. Most algebra textbooks start with
set theory, category theory, or jump straight into books, but Artin
has a broader plan.

Matrices end up a central tool of study for the topics that are most
interesting in this book: vector spaces over arbitrary fields,
symmetries of the plane, compact and differentiable groups,
representation theory, etc. 

A basis is almost always chosen; this isn't as bad as it seems if
you're a coordinate-free purist. While you've cached in a choice at
the price of more elements to juggle around, you have gain a concrete
method for computing elementary operations and determinants, but
perhaps most importantly, you get to visualize whats happening.

In the second edition of this book (which is the hard-copy I have),
Artin doesn't talk much about the geometric effects of a matrix on the
underlying $\R^n$ vector space. In the third edition, he finally adds
commentary on the meaning of the determinant, providing a key fact in
the understanding of matrices: *the determinant measures the expansion
or contraction of a unit-cube after its pushed through a matrix, with
sign indicating orientiation*. It doesn't get more important than
that --- this is a fact that, on my first encounter, I just took to be
a "cute" side effect of the definitions. But this fact extends far
further than the insulated study of matrices, and underlies one of my
favorite mathematical objects: the alternating tensors.

The alternating tensors give you volumes of projections. In more
words, if $\psi(v_1,\cdots,v_k)$ is an alternating tensor, then $\psi$
measures the resulting volume from adding up different projections of
the $k$-dimensional parallelopiped formed by $(v_1,\cdots,v_k)$. In
the case of $\psi(v_1,\cdots,v_k) = \det([v_1,\cdots,v_k])$, this
gives precisely the volume of the parallelopiped formed by the
inputted vectors.

Why would you care? For fun, suppose we're working in $\R^n$ and we
have an alternating $k$-tensor at every point in space, i.e. a family
$\{\psi_p\}_{p\in \R^n}$. Taking $n=3$ and $k=2$, this is analagous to
having a very *very* tiny parallelogram at every point in space marking
how much "k-volume" is being occupied. Why could this be useful?
Imagine you have a two-dimensional surface in $\R^3$ and you'd like to
know the surface area of the volume. In multivariable calculus, you
learn to take a funny integral that looks something like \[\int_S ||
\frac{\partial f}{\partial u} \times \frac{\partial f}{\partial v}||du
dv\]

which you're told is measuring the "surface area" at every local point
thanks to the cross-product. Abusing notation and making up math,
another way to write this would be to derive a tensor field $\psi_p$
at every point on the surface which would measure the local
deformation the surface applies to a unit square, and then add them
up: \[\int_S \psi_p\] where we've dropped the $dx$ type objects since
they're meaningless anyway. If there's a way to derive a tensor field
given a surface, and if there's a way to define an integral with
respect to these fields, then we can now integrate functions over
k-dimensional surfaces. 

All that to say: I think starting with matrices, understanding their
algebra, and building a geometric intuition for $\R^n$ is good. There
are other approaches to the material which are also good, but given
that this book will eventually turn to matrix groups like $SU(n)$,
and to be poetic, this seems like a good ideaN.

<!-- The determinant is a very tidy function which has a peculiar property: -->
<!-- Given a matrix $A$ and the elementary row operation $E_{ij}$ which -->
<!-- swaps row $i$ and $j$, $\det(E_{ij} A) = -\det(A)$ (which is due to -->
<!-- $\det$ being a homomorphism from $\R^{n^2}$ to $\R$ and $\det(E_{ij}) -->
<!-- = -1$, but this doesn't capture the geometry yet).  -->

### 1.1.13 -- Nilpotent Matrices
\problem{A square matrix $A$ is *nilpotent* if $A^k = 0$ for some $k >
0$. Prove that if $A$ is nilpotent, then $I+A$ is invertible. Do this
by finding its inverse.}{}
We're looking for the inverse, $(I + A)^{-1}$. Being very tricky and
taking a formal power series:

\[(I+A)^{-1} = 1 - A + A^2 - A^3 + \cdots \]

note that I have made no attempt to define what equals sign $=$ means
in this case, but I'm sure things will work out well; if we find an
inverse that works which is a finite sum, we don't have to justify the
convergence of the infinite series.

So we calculate. Since $A^k = 0$ for some $k>0$, then $A^n = 0$ for
all $ n \geq k$. Therefore we can heuristically see that \[(I+A)^{-1}
= \sum_{n=0}^{k-1} (-1)^n A^n,\]

where we define through analogy $A^0 = I$. Computing by hand, 

\begin{align}
(I+A)(I+A)^{-1} &= (I+A)\sum_{n=0}^{k-1}(-1)^n A^n\\
	&= \sum_{n=0}^{k-1}(-1)^n A^n + \sum_{n=0}^{k-1}(-1)^n A^{n+1}\\
	&= I + (-A + A) + (-A^2 + A^2) + \cdots + (-A^{k-1} + A^{k-1}) +
	A^k\\
	&= I
\end{align}

So our candidate inverse ended up working due to in-between terms
telescoping and the final $A^k$ term dying due to the nilpotent
property. Since $A$ and $I+A$ are square, this inverse is the unique
inverse and we're done.

*Commentary*: From what I can glean without looking into the future,
Artin put this problem here to give an appreciation for nilpotent
matrices (duh) since they'll come up later (oh! hey thats fun). In the
context of differential equations, a linear differential equation 
\[x' = Ax\] 
admits very different structures depending on the structure of
$A$. The formal solution to such a differential equation takes the
form of $x(t) = C\exp(At)$, where $\exp(A)$ is defined as a formal power
series in $A$. How do you know if it converges? Well the naiive thing
to do is to declare the power series convergent if all entries of the
matrix $\exp(A)$ converge point-wise. 

When you plug in a nilpotent matrix into the power series, you end up
with a truncated series with all terms above $k$ dying off. There are
implications on the types of vector fields which can be generated by a
differential equation defined through a nilpotent matrix, so dusting
off some of this algebra was fun.

I first learned about this in Hirsch and Smale's *Differential
Equations, Dynamical Systems, and Linear Algebra*, which is a much
older version of a book under a [very similar
name](https://www.amazon.com/Differential-Equations-Dynamical-Systems-Introduction/dp/0123820103). The
study of linear differential equations is central to the theory,
since, as usual, problems of a local character end up being problems
in linear algebra.

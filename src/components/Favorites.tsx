import React from 'react';
import { MarkdownRender } from './MarkdownRender';
import fs from 'fs';

export const Favorites: React.VFC = () => {
  const post: string = `


[LPac\'s Pages](/)


-   [home](/)
-   [Github](http://github.com/liampack)
-   [Other-Posts](/archive)
-   [Notes](/notes)
-   [favorites](/favorites)




nothing in any particular order.

probably not exhaustive.

very not finished.


music artists / composers 
-------------------------





### chilly 


-   C418
-   Snail\'s House
-   Lena Raine
-   In Love with a Ghost
-   City Girl
-   Grynpyret
-   Nujabes
-   Cehryl




### won\'t categorize 


-   Jai Wolf
-   ODESZA
-   Anamanaguchi
-   Madeon
-   Snakehips
-   Flight Facilities
-   Kero Kero Bonito
-   Crying
-   Lights
-   Denzel Curry
-   Kendrick Lamar
-   Vic Mensa but for only 2 songs (orange soda, down on my luck)
-   The Old Kanye
-   Tyler, The Creator
-   Noname
-   Mac Miller
-   Death Grips
-   Bad Bad Not Good
-   The Internet
-   Lovewave
-   Dua Lipa
-   Amy Winehouse
-   Theo Katzman
-   Kimbra
-   Yerin Baek
-   Mizuki Ohira
-   Nobuo Uematsu
-   Yanaginagi
-   the peggies
-   Aimer
-   tricot
-   OOHYO
-   IU
-   YUI
-   BOL4
-   AKMU
-   Maica~n~
-   Carpenters
-   HYUKOH
-   Eddy Kim
-   Sambomaster




### jazz 


-   Thelonius Monk
-   John Coltrane
-   Herbie Hancock
-   Scott Hamilton
-   Ben Webster
-   Betty Carter
-   Bill Evans
-   Wes Montgomery
-   Louis Armstrong
-   Duke Ellington
-   Chet Baker
-   Dexter Gordon
-   Miles Davis
-   Nina Simone




### classical 


-   Tchaikovsky
-   Felix Mendelssohn
-   Can\'t hate Beethoven can we
-   Shostakovich





games 
-----


-   SM64
-   Cave Story
-   Final Fantasy IV
-   Guild Wars 2
-   Metroid: Zero Mission
-   Super Metroid
-   Metroid Fusion
-   Metroid Prime
-   Metroid Pinball
-   Metroid Hunters
-   SSBM for the nintendo gamecube
-   SSBB for the nintendo wii
-   VA-11 Hall-A: Cyberpunk Bartender
-   Dwarf Fortress
-   Celeste
-   FEZ
-   KOF XIII
-   Risk of Rain (first one, haven\'t played the second)
-   Minecraft
-   Terraria
-   Dota 2
-   Demon\'s Souls (PS3), Darksouls 1 and 2
-   Tales of Maj\'Eyal
-   Maplestory \[younger me asked me to put this down\]
-   TESV: Skyrm
-   Bloons TD 6
-   Warframe
-   Portal 2
-   Sonic Adventure 2
-   Sonic CD
-   Sonic Generations
-   VVVVV
-   \[honestly the call of duty games are pretty fun don\'t dock it\]
    -   \[halo games too those were fire\]
-   Undertale




websites 
--------


-   <https://arzg.github.io>




programming languages 
---------------------


-   Julia
-   Racket
-   Common Lisp
-   Emacs Lisp
-   Hy \[lmao\]
-   C
-   SML
-   Elm
-   Bash
-   GNUPlot \[yeah i\'m counting it back off please\]




textbooks 
---------





### physics 


-   Introduction to Electrodynamics: Griffiths, David J. (4th ed.)
-   Electricity and Magnetism: Purcell E. M. (2013)
-   \[jackson\'s electrodynamics i guess but its a little psycho for
    me\]
-   thermodynamics: Enrico Fermi (Dover ed.)
-   Introduction to Modern Statistical Mechanics: Chandler, David (all
    ed.)
-   Physical Biology of the Cell: Rob Phillips, et. al (2nd Ed.)
-   Classical Mechanics: Taylor, John R. (2005)




### math 


-   Analysis II: Tao, Terrance
-   Real Analysis: Carothers, N.L.
-   Analysis on Manifolds: Munkres, James (1st ed.)
-   the first half of Topology: Munkres, James (2nd ed.)
-   Algebra Chapter 0: Aluffi, Paolo (2009) \[don\'t ask about chapter
    8+ though\]
-   \[the first 3 chapters of\] Real Analysis (princeton lectures III):
    Stein & Shakarchi
-   \[I bet I would like Do Carmo\'s green book if i understook any of
    it\]
-   Topology: Armstrong




### Education 


-   Experience and Education: John Dewey
-   The Process of Education: Bruner
-   Cuba\'s Academic Advantage: Carnoy




### Programming Language Theory 


-   Types and Programming Languages: Pierce, Benjamin (2002)
-   Foundations of Logic Programming: Lloyd, J.W.




### algorithms 


-   Algorithm Design: Kleinberg & Tardos
-   Introduction to Algorithms: CLRS (3rd ed.) \[haven\'t read all of it
    but i\'m legally required to put this here\]




### machine learning 


-   Whatever little I know from Pattern Recognition and Machine
    Learning: Bishop




### computer systems 


-   Computer Networking, A Top Down Approach: Kurose, Ross (7th ed.)







[Other posts](/archive)


`;

  return <MarkdownRender>{post}</MarkdownRender>;
};

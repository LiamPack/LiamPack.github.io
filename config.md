<!--
Add here global page variables to use throughout your website.
-->
+++
author = "Liam Packer"
mintoclevel = 2

# Add here files or directories that should be ignored by Franklin, otherwise
# these files might be copied and, if markdown, processed by Franklin which
# you might not want. Indicate directories by ending the name with a `/`.
# Base files such as LICENSE.md and README.md are ignored by default.
ignore = ["node_modules/", "old_site/"]

# RSS (the website_{title, descr, url} must be defined to get RSS)
generate_rss = true
website_title = "Liam Packer"
website_descr = "Liam Packer's Feed"
website_url   = "https://liampack.github.io/"
+++

<!--
Add here global latex commands to use throughout your pages.
-->
\newcommand{\R}{\mathbb R}
\newcommand{\scal}[1]{\langle #1 \rangle}

\newcommand{\note}[1]{@@note @@title warning Note@@ @@content #1 @@ @@} \newcommand{\warn}[1]{@@warning @@title warning Warning!@@ @@content #1 @@ @@}
\newcommand{\definition}[2]{
  @@definition
  **Definition**: (_!#1_)
  #2
  @@
}

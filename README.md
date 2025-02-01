# liampack.github.io

Structure: site pages are written in markdown in [./markdown](). These
are compiled into html files with [https://pandoc.org/](pandoc) (see
[./template.html]()). Just `make` and `make clean`.

[assets/](./assets/) contain pdf's linked throughout the website, or
images or thumbnails used in a document. Top-level includes basics
like my cv, and files linked in [misc.md](./misc.md), and
[assets/teaching/](./assets/teaching/) for files linked throughout the
[teaching.md](./teaching.md) tree.

## todos
- research statement
- instead of local `make` of html, add to github actions
- sync script for notes pdfs since these are elsewhere on my computer

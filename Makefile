outfiles := index.html posts.html post1.html research.html teaching.html misc.html 2240.html 6110.html
all: $(outfiles)

%.html: markdown/%.md template.html style.css
	pandoc -s $< -o $@ --template=template.html

clean:
	rm -f $(outfiles)

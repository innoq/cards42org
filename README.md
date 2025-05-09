# cards42.org

*[German version (outdated)](README_de.md)*

## What is this all about?

This is the repository for the website [cards42.org](https://cards42.org). The cards42 project consists (in the final stage) of 42 cards, which support software architects in their daily architectural work.

The cards provide brief food for thought for deadlocked situations and help to shed new light on difficult challenges.

Backgrounds and more details about the cards are available on [cards42.org](https://cards42.org).

## How can I contribute?

cards42 is an open project where people can bring in new ideas.


### Proofreading

The cards42 project was originally created in the German language.
We've decided to translated the cards in English as well.
We would appreciate any comments or/and suggestions for improvements.

### New ideas for cards

You are also welcome to contribute your ideas for new cards.
Just [open a new ticket](https://github.com/innoq/cards42org_en/issues/new) and describe your idea.
Maybe you already have a sketch of the cards?
Just upload it and we can discuss it.
We would then work out the idea together and also redesign it graphically.

### Description texts

The texts explaining the cards can be found under `descriptions` (German version) or `descriptions_EN)` (English version).
Feel free to create a new Pull Request with your changes or additions to the existing texts.
You can also contribute a new text together with a new card.
Please follow the naming conventions described below.

### Your participation

We will be happy to mention your name on our website [cards42.org](https://cards42.org) under the "Contributors" section!
Feel free to add yourself under `_info/90_contributors.md`.

## What are some of the rules?

When you are creating a new card, there are some conventions to adhere to.
The card images (under `cards`) and their descriptions (under `_descriptions`) are brought together using file name conventions.

* The file name `cardname` of a card is `card<2-digit number>.png`
* The file name of a description is `<cardname>_<tag>.md`

Using Jekyll / Liquid, the corresponding information in the `index.html` is thus extracted from the file names.

## How is it built?

### Website

The page is generated via [Jekyll](https://jekyllrb.com/)
Every time you make a change in the master branch, GitHub rebuilds the website.

A local installation of Jekyll for local testing is also possible:

```
gem install bundler jekyll
```

The website can then be opened locally.

Build the website with the command

```
jekyll serve
```

Under <https://localhost:4000/>, you can then take a look at the website.

### Pictures

_Only relevant for the main maintainers of the project_

The PNG images are generated by Ghostscript from the print PDFs of INNOQ (the company that came up with the idea for the cards and most of the cards are from so far).

Step 1: With the original PDF, the print margins must first be removed:

```
gs -sDEVICE=pdfwrite -o "cards42_temp.pdf" -g2960x4144 -c "<< /Install { -22 -22 translate } bind >> setpagedevice" -f cards42.pdf
```

Step 2: The individual cards are exported without title and explanation card (`-dFirstPage=3`) as PNG images (`-sDEVICE=png16`) with anti-aliasing (`-dTextAlphaBits=4` and `-dGraphicsAlphaBits=4`) in 144 DPI (`-r144`) and the naming scheme `-o card%02d.png` defined above.

```
gs -dFirstPage=3 -sDEVICE=png16m -dTextAlphaBits=4 -dGraphicsAlphaBits=4 -r144 -o card%02d.png cards42_temp.pdf
```

Alternatively, we directly export PNGs from the publishing software.


Additionally, we create preview pictures e.g. for social networks. These need to be smaller with additional whitespace on each side. We use ImageMagick for this.

```
for file in *.png; do convert -resize 50% -gravity center -extent 450x450 $file $file; done
```

### Internationalization

* Originally, the cards42 project was created in the German language. The English edition was integrated in the original German version with a few adjustments:
  * the layout for the English cards was duplicated and refactored into several files
  * the cards and descriptions for English version are in directories with a postfix `_EN`
  * the English version of the `index.html` is in the root directory `/en` to allow the entry point cards42.org/en
  * the URL to the cards is not based on an HTML anchor (#), but URL-based to create similar short URLs to the cards
  * there is the main site that contains all cards but also a dedicated page for each card
  * both content on the main site and the cards' pages are identical

## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons license" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons - Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</a>.
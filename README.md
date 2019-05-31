# cards42.org

## Was ist das hier?

Dies ist das Repository für die Homepage [cards42.org](https://cards42.org). Das cards42-Projekt besteht (in der Endausbaustufe) aus 42 Karten, welche Softwarearchitektinnen und Softwarearchitekten bei der täglichen Architekturarbeit unterstützen.

Die Karten geben kurze Denkanstöße für festgefahrene Situationen und helfen, neues Licht auf schwierige Herausforderungen zu werfen.

Hintergründe und mehr Details zu den Karten sind auf [cards42.org](https://cards42.org) zu finden.

## Wie wir das gebaut?

### Website

Derzeit hemdsärmlich über [pandoc](https://pandoc.org/) mit dem Befehl

```
pandoc -s --toc -c style.css --include-before-body=header.html --include-after-body=footer.html *.md > index.html
```

Später sollen die Markdown-Dateien mittels GitHub-Pages / Jekyll automatische gebaut werden (siehe https://nicolas-van.github.io/easy-markdown-to-github-pages/).

### Bilder

Die PNG-Bilder werden per Ghostscript erzeugt.

Schritt 1: Bei der Original-PDF müssen zuerst die Ränder entfernt werden:

```
gs -sDEVICE=pdfwrite -o "cards42_temp.pdf" -g2960x4144 -c "<< /Install { -22 -22 translate } bind >> setpagedevice" -f cards42.pdf
```

Schritt 2: Danach werden die einzelnen PDF-Seiten als PNG-Bilder (mit Anti-Aliasing und 144 DPI) exportiert:

```
gs -sDEVICE=png16m -dTextAlphaBits=4 -dGraphicsAlphaBits=4 -r144 -o card%02d.png cards42_temp.pdf

```
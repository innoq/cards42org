# cards42.org

## Was ist das hier?

Dies ist das Repository für die Homepage [cards42.org](https://cards42.org). Das cards42-Projekt besteht (in der Endausbaustufe) aus 42 Karten, welche Softwarearchitektinnen und Softwarearchitekten bei der täglichen Architekturarbeit unterstützen.

Die Karten geben kurze Denkanstöße für festgefahrene Situationen und helfen, neues Licht auf schwierige Herausforderungen zu werfen.

Hintergründe und mehr Details zu den Karten sind auf [cards42.org](https://cards42.org) zu finden.

## Was muss beachtet werden?

Die Kartenbilder (unter `cards`) und deren Beschreibungen (unter `_descriptions`) werden über Namenskonventionen der Dateinamen zusammengefügt.

* Der Dateiname `cardname` einer Karte lautet `card<2-stellige Nummer>.png`
* Der Dateiname einer Beschreibung lautet `<cardname>_<tag>.md`

Über Jekyll / Liquid werden in der `index.html` so die entsprechenden Informationen aus den Dateinamen extrahiert.

## Wie wir das gebaut?

### Website

Derzeit hemdsärmlich über bash mit dem Befehl 🙈

```
cat header.html `find . -name "card*.md"` footer.html > index.html
```

Später sollen die Markdown-Dateien mittels GitHub-Pages / Jekyll automatische gebaut werden (siehe https://nicolas-van.github.io/easy-markdown-to-github-pages/). Daher sind die derzeitigen HTML-Snippets bereits in separaten `.md`-Dateien abgelegt.

### Bilder

Die PNG-Bilder werden per Ghostscript erzeugt. Die einzelnen PDF-Seiten als PNG-Bilder (mit Anti-Aliasing und 144 DPI) exportiert. Dabei werden die ersten zwei Seiten (= Titel- und Erklärungskarte) übersprungen (`-dFirstPage=3`).

```
gs -dFirstPage=3 -sDEVICE=png16m -dTextAlphaBits=4 -dGraphicsAlphaBits=4 -r144 -o card%02d.png cards42_final.pdf```
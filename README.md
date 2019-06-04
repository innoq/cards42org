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

Die Seite wird über [Jekyll](https://jekyllrb.com/) erzeugt.

### Bilder

Die PNG-Bilder werden per Ghostscript erzeugt.

ie PNG-Bilder werden per Ghostscript erzeugt.

Schritt 1: Bei der Original-PDF müssen zuerst die Druckränder entfernt werden:

```
gs -sDEVICE=pdfwrite -o "cards42_temp.pdf" -g2960x4144 -c "<< /Install { -22 -22 translate } bind >> setpagedevice" -f cards42.pdf
```

Schritt 2: Die einzelnen Karten werden ohne Titel- und Erklärungskarte (`-dFirstPage=3`) als PNG-Bilder (`-sDEVICE=png16`) mit Anti-Aliasing (`-dTextAlphaBits=4` und `-dGraphicsAlphaBits=4`) in 144 DPI (`-r144`) und dem weiter oben definierten Namensschema `-o card%02d.png` exportiert.

```
gs -dFirstPage=3 -sDEVICE=png16m -dTextAlphaBits=4 -dGraphicsAlphaBits=4 -r144 -o card%02d.png cards42_temp.pdf
```
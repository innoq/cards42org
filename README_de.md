# cards42.org

## Was ist das hier?

Dies ist das Repository für die Homepage [cards42.org](https://cards42.org). Das cards42-Projekt besteht (in der Endausbaustufe) aus 42 Karten, welche Softwarearchitektinnen und Softwarearchitekten bei der täglichen Architekturarbeit unterstützen.

Die Karten geben kurze Denkanstöße für festgefahrene Situationen und helfen, neues Licht auf schwierige Herausforderungen zu werfen.

Hintergründe und mehr Details zu den Karten sind auf [cards42.org](https://cards42.org) zu finden.

## Wie kann ich hier mitarbeiten?

### Beschreibungstexte

Die Texte, welche die Karten erklären, findest Du unter `_descriptions`. Erstelle gerne einen neuen Pull Request mit Deinen Änderungen oder Ergänzungen zu den vorhandenen Texten. Einen neuen Text kannst Du zusammen mit einer neuen Karte ebenfalls beisteuern. Halte Dich hier bitte an die Namenskonventionen, welche weiter unten beschrieben sind.

### Neue Kartenideen

Gerne kannst Du auch Deine Ideen für neue Karten beitragen. Öffne dazu einfach ein neues Ticket in Repository und beschreibe Deine Idee. Vielleicht hast Du auch schon eine Skizze der Karte? Lade sie einfach hoch und wir diskutieren drüber. Wir würden dann die Idee gemeinsam ausarbeiten und auch grafisch redesignen.

### Deine Mitarbeit

Gerne nennen wir Deinen Namen dann auf unserer Website [cards42.org](https://cards42.org) unter der "Mitwirkende"-Sektion!

## Was muss beachtet werden?

Die Kartenbilder (unter `cards`) und deren Beschreibungen (unter `_descriptions`) werden über Namenskonventionen der Dateinamen zusammengefügt.

* Der Dateiname `cardname` einer Karte lautet `card<2-stellige Nummer>.png`
* Der Dateiname einer Beschreibung lautet `<cardname>_<tag>.md`

Über Jekyll / Liquid werden in der `index.html` so die entsprechenden Informationen aus den Dateinamen extrahiert.

## Wie wird das gebaut?

### Website

Die Seite wird über [Jekyll](https://jekyllrb.com/) erzeugt. Bei jeder Änderung wird die Website über GitHub neu erzeugt.

Eine lokale Installation von Jekyll ist hiermit möglich:

```
gem install bundler jekyll
```

Anschließend kann die Website lokal mit dem Befehl

```
jekyll serve
```

gebaut und unter <https://localhost:4000/> betrachtet werden.

### Bilder

Die PNG-Bilder werden per Ghostscript aus den Druck-PDFs von INNOQ erzeugt.

Schritt 1: Bei der Original-PDF müssen zuerst die Druckränder entfernt werden:

```
gs -sDEVICE=pdfwrite -o "cards42_temp.pdf" -g2960x4144 -c "<< /Install { -22 -22 translate } bind >> setpagedevice" -f cards42.pdf
```

Schritt 2: Die einzelnen Karten werden ohne Titel- und Erklärungskarte (`-dFirstPage=3`) als PNG-Bilder (`-sDEVICE=png16`) mit Anti-Aliasing (`-dTextAlphaBits=4` und `-dGraphicsAlphaBits=4`) in 144 DPI (`-r144`) und dem weiter oben definierten Namensschema `-o card%02d.png` exportiert.

```
gs -dFirstPage=3 -sDEVICE=png16m -dTextAlphaBits=4 -dGraphicsAlphaBits=4 -r144 -o card%02d.png cards42_temp.pdf
```

## Lizenz

<a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"><img alt="Creative Commons Lizenzvertrag" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png" /></a><br />Dieses Werk ist lizenziert unter einer <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Namensnennung - Keine Bearbeitungen 4.0 International Lizenz</a>.

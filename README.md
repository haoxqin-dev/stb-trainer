# StB-Trainer

Lern-App zur Steuerberaterprüfung. Erste Ausbaustufe: Abgabenordnung, Folien 2 bis 119.

## Dateien

    stb-trainer/
    ├── index.html             Shell: Oberfläche, Level, Wiederholung, Fristenrechner
    ├── sw.js                  Offlinebetrieb
    ├── manifest.webmanifest   Installation auf dem Startbildschirm
    ├── icon.svg, icon-180.png, icon-512.png
    ├── data/
    │   ├── faecher.json       Liste der verfügbaren Fächer
    │   └── ao.json            Abgabenordnung
    └── README.md

## Veröffentlichen

1. Neues Repository `stb-trainer` auf GitHub anlegen, Sichtbarkeit public.
2. Alle Dateien hochladen, Ordnerstruktur beibehalten.
3. Settings → Pages → Source: Deploy from a branch, Branch `main`, Ordner `/ (root)`.
4. Nach ein bis zwei Minuten erreichbar unter `https://<benutzername>.github.io/stb-trainer/`.

Auf dem Handy die Adresse öffnen und über das Teilen-Menü zum Startbildschirm hinzufügen.
Danach startet sie wie eine App und funktioniert auch ohne Netz.

## Ein weiteres Fach ergänzen

1. Neue Datei `data/ust.json` nach demselben Aufbau wie `ao.json` anlegen.
2. In `data/faecher.json` eine Zeile ergänzen:

       { "id": "ust", "titel": "Umsatzsteuer" }

3. Beide Dateien hochladen. An `index.html` ist nichts zu ändern.

Der Lernfortschritt wird je Fach getrennt gespeichert.

## Aufbau einer Fachdatei

| Abschnitt | Inhalt |
|---|---|
| knoten | Stationen des Prüfungsaufbaus für die Verortungsleiste |
| bloecke | Gliederung des Skripts mit Foliennummern |
| normen | Stichwort und Norm für den Paragraphen-Modus |
| fragen | Inhaltsfragen mit Begründung und Kernaussage der Norm |
| faelle | Fälle mit Weichenschritten |

Die Verortungsleiste zieht ihre Register aus `knoten`. Jedes Fach bekommt damit automatisch
seine eigene Systematik, ohne Änderung am Code.

## Modi

| Modus | Inhalt |
|---|---|
| Paragraphen | Stichwort vorgeben, Norm zuordnen |
| Inhalt | Fragen zum Stoff, mit Begründung und Normkern |
| Fälle | Fälle in Weichenschritten entlang der Gliederung |
| Fristen | zufällig erzeugte Bekanntgabeberechnungen |

## Funktionen

Verortungsleiste über jeder Frage mit Markierung der aktuellen Station und Pfadangabe.

Drei Schwierigkeitsstufen. Drei richtige Antworten in Folge heben die Stufe, zwei falsche senken sie.

Wiederholung nach dem Leitner-Prinzip: sofort, dann nach einem, drei, sieben und einundzwanzig Tagen.

Tagesziel von fünfzehn Fragen und Seriezähler.

Fehlerprotokoll der letzten vierzig Fehlversuche mit Norm.

Fortschritt sichern und laden als JSON-Datei, damit Laptop und Handy denselben Stand haben.

## Hinweise zum Offlinebetrieb

Die App holt bei bestehender Verbindung immer den aktuellen Stand und greift nur ohne Netz
auf den Zwischenspeicher zurück. Falls doch einmal eine alte Fassung erscheint, hilft der
Knopf „Aktualisieren" in der Fußzeile.

Der Lernfortschritt liegt im Browser und wandert nicht automatisch zwischen Geräten.

Normtexte sind sinngemäß verkürzt und kein Wortlaut.

Der Fristenrechner berücksichtigt Samstage und Sonntage, keine gesetzlichen Feiertage.

# Autobilanz

**Was dein Auto wirklich kostet.**

Autobilanz vergleicht die Gesamtkosten deiner Autos, auch gegenüber einem Leben ohne Auto. Sie beantwortet die Fragen, die bei einer Autoentscheidung wirklich zählen: Lohnt sich ein Wechsel, und ab wann? Kann ich mir das Auto leisten? Wann verkaufe ich am besten? Was ist mein Auto in ein paar Jahren noch wert?

Version 1.62 · Stand 12. November 2026

---

## Inhalt

1. [Funktionen](#funktionen)
2. [So funktioniert es](#so-funktioniert-es)
3. [Die Bereiche der App](#die-bereiche-der-app)
4. [So rechnet die App](#so-rechnet-die-app)
5. [Daten und Datenschutz](#daten-und-datenschutz)
6. [Installation und Hosting](#installation-und-hosting)
7. [Technik](#technik)
8. [Quellen](#quellen)
9. [Haftungsausschluss](#haftungsausschluss)
10. [Vor einer Veröffentlichung](#vor-einer-veröffentlichung)

---

## Funktionen

- **Zwei Eingabemodi**
  - *Ruckzuck:* 7 Pflichtangaben und 6 freiwillige pro Auto, bei Kredit oder Leasing 3 bis 4 mehr. Den Rest schätzt die App mit Richtwerten.
  - *Intensiv:* rund 15 Pflichtangaben und gut 60 freiwillige pro Auto, vom Kredit bis zum TÜV. Die genaueste Rechnung.
- **Antriebe:** Diesel, Benzin, Elektro und Plug-in-Hybrid (elektrischer Fahranteil, getrennter Verbrauch für Strom und Sprit). Nicht möglich: Autogas (LPG), Erdgas und Wasserstoff.
- **Rollen:** Bestand als Erst-, Zweit-, Dritt- oder Viertauto, Kandidat oder Verkaufskandidat.
- **Vergleich** von bis zu vier Autos oder gegen „Kein Auto“ (Bus, Bahn, Carsharing):
  - Kosten über die Zeit als Grafik mit Antippen für Details
  - Gegenüberstellung nach Kostenarten mit Differenz in € oder %
  - Was ist mein Auto noch wert? Restwert-Prognose bis 30 Jahre, auf Wunsch ab Erstzulassung
- **Fazit**
  - Ein roter Faden in drei Fragen: Lohnt sich ein Wechsel? Kann ich mir das Auto leisten? Wann verkaufe ich am besten?
  - Klare Antwort mit Zeitachse (Break-even, Kredit abbezahlt, Ende der Steuerbefreiung, Akku-Grenze) und Rangliste aller verglichenen Autos
  - Kann ich mir das Auto leisten? Anteil am Netto-Einkommen mit Ampel und empfohlener Rücklage
  - Brauche ich mein Zweitauto? Beide behalten oder eines verkaufen, mit einstellbarem Anteil für das Erstauto und ÖPNV für den Rest
  - Wann verkaufe ich am besten? Für jedes Auto im Bestand das Verkaufsjahr mit den geringsten Kosten pro Jahr, ganz ohne Nachfolger
  - CO₂ im Betrieb
  - Termine und Fristen (HU, Inspektion, Ölwechsel, Versicherung)
  - Meine Fragen, beantwortet: Am Ende beantwortet das Fazit jede Frage vom Start in einem Satz, mit dem Kritischen Check als Abschluss
  - PDF-Export als persönliche Autobilanz
- **Energie**
  - Tankladungen: Protokoll mit echtem Verbrauch
  - Auswertung: Verbrauch und Energiekosten, Lademix und Akkuwert für Elektroautos, Vergleich nach Laufleistung
  - Spritpreise: Verlauf seit 1950 (E10, E5, Super Plus, Diesel, Premium-Diesel), Prognose in drei Szenarien, Wann tanke ich am günstigsten?, Zusammensetzung des Literpreises, Ursachen von Preisänderungen
  - Strompreise: Haushalt seit 1998, öffentliches Laden AC und DC, Wo lade ich am günstigsten? mit Jahreskosten je Ladeort, Zusammensetzung des Strompreises mit Regler für die Strommenge, Was hat den Strompreis bewegt? mit Bestandteilen Jahr für Jahr seit 1998
  - Prognose in drei Szenarien bis 30 Jahre
- **Hell und Dunkel**, automatisch oder von Hand umschaltbar.

## So funktioniert es

1. Auf **Start** den Modus wählen: Ruckzuck oder Intensiv. Wechseln geht jederzeit über das Symbol oben rechts.
2. Unter **Fahrzeuge** das eigene Auto und mindestens einen Kandidaten eintragen. Orange markierte Felder sind Startwerte der App, die du prüfen solltest.
3. Im **Fazit** die Antwort lesen und den Zeitraum einstellen.
4. Unter **Vergleich** und **Energie** die Details ansehen.
5. Optional: das Fazit als **PDF** sichern. Der Knopf ist aktiv, sobald alle Pflichtangaben vorhanden sind. Fehlende Angaben stehen darunter und führen per Tipp direkt zum Feld.

## Die Bereiche der App

| Bereich | Inhalt |
|---|---|
| **Start** | Moduswahl und Route mit 9 Stationen von „Meine Autos“ bis „Termine“ |
| **Fahrzeuge** | Auto, Kosten, Finanzierung, Termine und Allgemein, mit Anzeige der Pflichtangaben |
| **Energie** | Tankladungen, Auswertung (Energiekosten, Akku, Laufleistung), Spritpreise, Strompreise |
| **Vergleich** | Fahrzeuge im Vergleich, Kosten nach Kostenarten, Wert |
| **Fazit** | Antwort, Haltedauer, Rangliste, Budget, Verkaufszeitpunkt, Termine, Meine Fragen beantwortet, PDF |

Beim Wechsel zwischen den Bereichen merkt sich die App, wo du zuletzt warst.

## So rechnet die App

- **Gesamtkosten** = Energie, Kfz-Steuer, Versicherung, Wartung, Reifen, Reparaturen, Parken, Pflege, Bußgelder, ÖPNV (öffentlicher Personennahverkehr, nur ohne Auto), Wertverlust, Akkuverschleiß, Kreditkosten, Leasingraten, entgangene Rendite und Einmalkosten, abzüglich THG-Prämie.
- **Entgangene Rendite:** Auch beim Barkauf bringt das im Auto gebundene Geld keine Zinsen mehr. Die App setzt dafür einen einstellbaren Zinssatz an (Standard 5 %).
- **Wertverlust:** Marktkurve nach Antrieb und Alter, verfeinert mit Kilometerstand, Haltern, Klasse und Karosserie (wirken auf das Tempo des Wertverlusts), Zustand, Wartungsnachweis, letzter HU, Lackfarbe, Getriebe, Akku, Schaden und Ausstattung. Ausgerichtet an deinem heutigen Fahrzeugwert.
- **Akku:** Alterung je nach Lademix von 1,4 bis 3,0 Prozentpunkten pro Jahr, ab 80 % Restkapazität schneller. Bewertet wird der Marktwert im Auto und der Wert als Gebrauchtteil.
- **Bester Verkaufszeitpunkt:** Für jedes Verkaufsjahr: alle Kosten bis zum Verkauf, inklusive Wertverlust, geteilt durch die Jahre. Am günstigsten ist das Jahr mit den geringsten Kosten pro Jahr. Früh wiegt der hohe Wertverlust, später die steigenden Reparaturen.
- **Plug-in-Hybrid:** Energie = elektrischer Anteil × Stromverbrauch × Strompreis im Mix plus restlicher Anteil × Verbrauch mit Motor × Spritpreis. Startwert 45 % elektrisch. Stromverbrauch ohne eigene Angabe aus Batterie ÷ Reichweite plus Zuschlag. Wertverlust mit der Marktkurve für Benziner.
- **Budget:** Gesamtkosten pro Monat im Verhältnis zum Netto-Einkommen. Grün bis 10 % (20-4-10-Regel), Gelb bis 15 %, darüber Rot.
- **Rücklage:** ein Jahr Werkstatt und Reifen plus Selbstbeteiligung der Kasko.
- **CO₂ im Betrieb:** Diesel 2,65 kg/l, Benzin 2,37 kg/l, Strom 344 g/kWh, beim Plug-in-Hybrid nach Fahranteil. Herstellung nicht enthalten.

In der App erklärt jeder Bereich unter „So wird gerechnet“ die Details.

## Daten und Datenschutz

- Alle Eingaben bleiben im Browser auf deinem Gerät (`localStorage`, Schlüssel `kfz-kalkulator-v3`).
- Kein Konto, kein Tracking, keine Cookies, keine Werbung, keine externen Schriften oder Skripte.
- Sichern und Laden als JSON-Datei, optional direkt in ein eigenes GitHub-Repository, auf Wunsch automatisch nach jeder Änderung (Schalter unter „Allgemein“).
- Lässt sich der Speicher einmal nicht lesen, legt die App eine Kopie unter `kfz-kalkulator-v3-sicherung` an, statt zu überschreiben.
- **Zurücksetzen** löscht alle Eingaben. Zum Bestätigen muss ein Regler ganz nach rechts gezogen werden.
- Beim Aufruf der Seite verarbeitet der Webhoster technisch nötige Daten wie die IP-Adresse.

## Installation und Hosting

1. Alle Dateien in ein Verzeichnis eines statischen Webspace legen, zum Beispiel GitHub Pages:
   - `index.html`
   - `sw.js`
   - `manifest.webmanifest`
   - `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png`
2. Die Seite im Browser öffnen.
3. Auf dem iPhone: in Safari auf „Teilen“ und „Zum Home-Bildschirm“. Die App läuft dann wie eine eigene App und funktioniert auch offline.

Optional: Liegt `kfz-daten.json` neben `index.html`, kann die App sie beim Start laden. In einem öffentlichen Repository kann diese Datei jeder lesen.

## Technik

- Eine einzige Datei `index.html` mit HTML, CSS und JavaScript. Keine Abhängigkeiten, kein Build-Schritt.
- Progressive Web App mit Service Worker (`sw.js`) für den Offline-Betrieb.
- **Bei jeder neuen Version den Cache-Namen in `sw.js` erhöhen** (aktuell `autobilanz-v1.62`), sonst sehen Nutzer weiter die alte Version.
- Versionsnummer und Datum stehen in `index.html` unter `const APP={…}` und in der App unter „Allgemein“, „Über die App“.
- Schrift: Systemschrift des Geräts (auf dem iPhone SF Pro).

## Quellen

- ADAC: Kraftstoffpreise (Monats- und Jahresmittel)
- BDEW-Strompreisanalyse: Haushaltsstrompreise seit 1998 (3.500 kWh im Jahr)
- LichtBlick-Ladesäulencheck (Auswertung Statista): öffentliche Ladepreise AC und DC 2023 bis 2025
- ICCT und Fraunhofer ISI (2022): elektrischer Fahranteil von Plug-in-Hybriden
- Aral, Kraftstoffpreise Jahresmittel 2024: Aufschläge für Super E5, Super Plus und Premium-Diesel
- BDEW-Strompreisanalyse Oktober 2026: Zusammensetzung des Haushaltsstrompreises
- Fraunhofer ISE (2024): Stromgestehungskosten von Solarstrom
- Deutsche Bundesbank: Dollarkurse
- US-Energiebehörde EIA über FRED, BP Statistical Review und Energy Institute: Rohölpreise
- IW Köln (Bardt 2012): Methode zur Zerlegung des Literpreises
- BloombergNEF: Akku-Packpreise
- Geotab und NREL: Akkualterung und Lebensdauer
- Umweltbundesamt: THG-Quote und CO₂-Emissionsfaktor des Strommix 2025
- Volksbanken Raiffeisenbanken: 20-4-10-Regel zur Autofinanzierung

## Haftungsausschluss

Alle Ergebnisse sind Schätzungen auf Basis deiner Angaben und öffentlicher Durchschnittswerte. Sie ersetzen keine Finanz-, Steuer- oder Rechtsberatung. Einzelne Modelle, Märkte und Verträge können deutlich abweichen.

## Vor einer Veröffentlichung

- [ ] **Impressum:** Name, Anschrift und E-Mail des Anbieters in `index.html` unter `const APP={…imp:'',mail:''}` eintragen. Ob ein Impressum Pflicht ist, hängt davon ab, ob das Angebot geschäftsmäßig ist.
- [ ] **Datenschutzerklärung** mit den Angaben des Webhosters ergänzen.
- [ ] **Lizenz** festlegen, zum Beispiel MIT für offenen Quellcode oder „Alle Rechte vorbehalten“.
- [ ] Nutzungsbedingungen der Datenquellen prüfen, vor allem für die ADAC-Preisdaten.

---

© 2026 Autobilanz

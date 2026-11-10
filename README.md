# Autobilanz

**Was dein Auto wirklich kostet.** Autobilanz vergleicht die Gesamtkosten von Autos – Bestandsauto, Kandidaten oder „kein Auto“ – und beantwortet die Frage, ob und ab wann sich ein Wechsel lohnt.

Version 1.55 · Stand 10. November 2026

## Funktionen

- **Zwei Eingabemodi:** *Ruckzuck* (etwa 10 Angaben pro Auto, Rest als Richtwerte) und *Intensiv* (alle Angaben, inklusive Kredit, Leasing und Terminen).
- **Vergleich:** Gesamtkosten über die Zeit mit Tabelle und Differenzspalte, Rangliste für bis zu 4 Autos, Vergleich nach Laufleistung, „Was wäre, wenn?“.
- **Fazit:** klare Antwort mit Break-even, Wert- und Akkuprognose bis 30 Jahre, Termine und Fristen, PDF-Export.
- **Energie:** Tankprotokoll, Spritpreise seit 1950, Zusammensetzung des Literpreises, Prognose in drei Szenarien.

## So funktioniert es

1. Auf **Start** den Modus wählen.
2. Unter **Fahrzeuge** das eigene Auto und mindestens einen Kandidaten eintragen.
3. Im **Fazit** die Antwort lesen. Unter **Vergleich** stehen die Details.

## Technik

- Eine einzige Datei `index.html` mit HTML, CSS und JavaScript, keine Abhängigkeiten, kein Build.
- Progressive Web App: `manifest.webmanifest` und `sw.js` (Offline-Cache). Bei jeder neuen Version den Cache-Namen in `sw.js` erhöhen.
- Daten liegen nur im `localStorage` des Browsers (Schlüssel `kfz-kalkulator-v3`). Sicherung als JSON-Datei, optional direkt in ein GitHub-Repository.
- Hosting: beliebiger statischer Webspace, z. B. GitHub Pages.

## Datenschutz

Keine Konten, kein Tracking, keine Cookies, keine externen Schriften oder Skripte. Beim Abruf der Seite verarbeitet der Webhoster technisch nötige Daten (z. B. IP-Adresse). Vor einer Veröffentlichung eine Datenschutzerklärung mit den Angaben des Hosters ergänzen.

## Quellen

ADAC (Kraftstoffpreise), Deutsche Bundesbank (Dollarkurse), US-Energiebehörde EIA über FRED, BP Statistical Review und Energy Institute (Rohöl), IW Köln (Preiszerlegung), BloombergNEF (Akkupreise), Geotab und NREL (Akkualterung), Umweltbundesamt (THG-Quote).

## Haftungsausschluss

Alle Ergebnisse sind Schätzungen auf Basis der eigenen Angaben und öffentlicher Durchschnittswerte. Sie ersetzen keine Finanz-, Steuer- oder Rechtsberatung.

## Impressum

Vor einer Veröffentlichung ergänzen: Name, Anschrift und E-Mail des Anbieters. In der App in `index.html` unter `const APP={…imp:'',mail:''}` eintragen.

## Lizenz

© 2026. Lizenz noch festlegen (z. B. MIT für offenen Quellcode oder „Alle Rechte vorbehalten“).

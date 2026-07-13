# Galleria Stampe Fotografiche

Sito statico (HTML/CSS/JS puro, nessuna build) per mostrare le tue foto e
rimandare all'acquisto delle stampe. Pensato per essere pubblicato gratis
su GitHub Pages.

## Struttura file

```
index.html        pagina principale
style.css          stile grafico
photos-data.js     elenco foto (qui aggiungi le tue immagini)
main.js            logica: filtri categoria, griglia, lightbox
```

Attualmente le foto sono **placeholder**: al posto delle immagini vedi
riquadri colorati con scritto il titolo e la categoria, cosi' puoi vedere
subito com'e' fatto il sito senza dover scegliere le foto adesso.

## Come aggiungere le foto vere

1. Crea una cartella `images` accanto a `index.html`.
2. Copia dentro le foto scelte (consiglio: JPG compressi, max ~1500px sul
   lato lungo, cosi' il sito resta leggero).
3. Apri `photos-data.js` e per ogni foto:
   - cambia `title` con il titolo che vuoi mostrare
   - cambia `category` con la categoria (es. `paesaggi`, `natura`,
     `ritratti`, `astratto`, `viaggi`, `bn`, o una nuova a piacere)
   - valorizza `image` con il percorso, es. `"images/etna-alba.jpg"`
   - opzionale: `price` se vuoi mostrare un prezzo indicativo
4. Puoi aggiungere o togliere foto semplicemente aggiungendo/rimuovendo
   oggetti dall'elenco `PHOTOS`. Il filtro per categoria e la griglia si
   aggiornano da soli, non serve toccare `main.js`.

Esempio di una foto con immagine reale:

```js
{
  id: 1,
  title: "Alba sull'Etna",
  category: "paesaggi",
  image: "images/etna-alba.jpg",
  price: "45€"
}
```

## Personalizzare i testi

- **Sezione "Chi sono"**: modifica il paragrafo segnaposto in `index.html`
  (cerca `[Scrivi qui due o tre righe su di te...]`).
- **Link Saal Digital**: nella sezione "Acquistare una stampa" in
  `index.html`, sostituisci `https://www.saal-digital.it/` con il link
  diretto alla tua galleria/catalogo su Saal Digital.
- **Instagram**: sostituisci `href="#"` nel footer con il link al tuo
  profilo.
- **Email di contatto**: gia' impostata su cipriano.miche@gmail.com,
  cambiala se preferisci un altro indirizzo.

## Pubblicare su GitHub Pages

1. Crea un nuovo repository su GitHub (es. `galleria-stampe`).
2. Nella cartella di questo progetto:
   ```bash
   git init
   git add .
   git commit -m "Prima versione galleria"
   git branch -M main
   git remote add origin https://github.com/<tuo-utente>/galleria-stampe.git
   git push -u origin main
   ```
3. Su GitHub: Settings → Pages → Source → seleziona branch `main`,
   cartella `/root`, salva.
4. Dopo un paio di minuti il sito sara' online su
   `https://<tuo-utente>.github.io/galleria-stampe/`.

## Note

- Nessuna dipendenza esterna, nessun framework: apri `index.html` nel
  browser e funziona anche offline, senza server.
- Il sito non gestisce pagamenti: il pulsante "Vedi le stampe su Saal
  Digital" porta fuori al tuo catalogo esterno, e il pulsante email apre
  il client di posta per richieste dirette.

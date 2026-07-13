/*
 * DATI DELLA GALLERIA
 * -----------------------------------------------------
 * Ogni oggetto qui sotto rappresenta una foto/stampa.
 * Per ora sono tutti PLACEHOLDER (nessuna immagine reale collegata):
 * la griglia mostra un riquadro colorato al posto della foto,
 * cosi' puoi vedere subito la struttura del sito senza dover
 * scegliere le foto adesso.
 *
 * QUANDO SEI PRONTO AD AGGIUNGERE LE FOTO VERE:
 * 1. Crea una cartella "images" accanto a questo file.
 * 2. Copia dentro le tue foto (es. images/etna-alba.jpg).
 * 3. In ogni oggetto qui sotto, valorizza il campo "image" con
 *    il percorso del file, es: image: "images/etna-alba.jpg"
 * 4. In main.js, la funzione createPhotoCard() gia' gestisce
 *    sia il caso "image" presente (mostra la foto vera) sia il
 *    caso "image" assente (mostra il placeholder colorato).
 *
 * CATEGORIE: usa quelle che ti servono, o creane di nuove
 * (il filtro in alto si genera automaticamente da questo elenco).
 * Categorie di esempio gia' usate qui sotto: paesaggi, natura,
 * ritratti, astratto, viaggi, bn (bianco e nero).
 */

const PHOTOS = [
  {
    id: 1,
    title: "Titolo foto 1",
    category: "paesaggi",
    image: null, // es: "images/paesaggio-01.jpg"
    price: null  // opzionale, es: "35€"
  },
  {
    id: 2,
    title: "Titolo foto 2",
    category: "natura",
    image: null,
    price: null
  },
  {
    id: 3,
    title: "Titolo foto 3",
    category: "ritratti",
    image: null,
    price: null
  },
  {
    id: 4,
    title: "Titolo foto 4",
    category: "astratto",
    image: null,
    price: null
  },
  {
    id: 5,
    title: "Titolo foto 5",
    category: "viaggi",
    image: null,
    price: null
  },
  {
    id: 6,
    title: "Titolo foto 6",
    category: "bn",
    image: null,
    price: null
  },
  {
    id: 7,
    title: "Titolo foto 7",
    category: "paesaggi",
    image: null,
    price: null
  },
  {
    id: 8,
    title: "Titolo foto 8",
    category: "natura",
    image: null,
    price: null
  },
  {
    id: 9,
    title: "Titolo foto 9",
    category: "viaggi",
    image: null,
    price: null
  }
];

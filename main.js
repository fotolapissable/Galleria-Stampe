/*
 * LOGICA DELLA GALLERIA
 * -----------------------------------------------------
 * Legge l'elenco PHOTOS da photos-data.js, genera i pulsanti
 * di filtro per categoria, disegna la griglia e gestisce il
 * lightbox (l'anteprima grande al click).
 * Non serve modificare questo file per aggiungere foto:
 * basta editare photos-data.js.
 */

const grid = document.getElementById("gallery-grid");
const filtersEl = document.getElementById("filters");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxMeta = document.getElementById("lightbox-meta");
const lightboxClose = document.getElementById("lightbox-close");

let activeCategory = "tutte";

function getCategories() {
  const cats = new Set(PHOTOS.map((p) => p.category));
  return ["tutte", ...cats];
}

function createFilterButtons() {
  const categories = getCategories();
  filtersEl.innerHTML = "";
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === activeCategory ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      activeCategory = cat;
      renderGallery();
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.toggle("active", b.textContent === cat));
    });
    filtersEl.appendChild(btn);
  });
}

function createPhotoCard(photo) {
  const card = document.createElement("div");
  card.className = "photo-card";
  card.addEventListener("click", () => openLightbox(photo));

  if (photo.image) {
    // Foto reale disponibile: mostra l'immagine vera.
    const img = document.createElement("img");
    img.src = photo.image;
    img.alt = photo.title;
    img.loading = "lazy";
    card.appendChild(img);
  } else {
    // Nessuna immagine ancora: mostra il placeholder colorato.
    const placeholder = document.createElement("div");
    placeholder.className = `photo-placeholder cat-${photo.category}`;
    const info = document.createElement("div");
    info.className = "photo-info";
    info.innerHTML = `
      <div class="photo-title">${photo.title}</div>
      <div class="photo-cat">${photo.category}</div>
    `;
    placeholder.appendChild(info);
    card.appendChild(placeholder);
  }

  return card;
}

function renderGallery() {
  grid.innerHTML = "";
  const filtered =
    activeCategory === "tutte"
      ? PHOTOS
      : PHOTOS.filter((p) => p.category === activeCategory);

  filtered.forEach((photo) => grid.appendChild(createPhotoCard(photo)));
}

function openLightbox(photo) {
  lightboxImage.innerHTML = "";
  if (photo.image) {
    const img = document.createElement("img");
    img.src = photo.image;
    img.alt = photo.title;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    lightboxImage.appendChild(img);
    lightboxImage.className = "lightbox-image";
  } else {
    lightboxImage.className = `lightbox-image photo-placeholder cat-${photo.category}`;
  }

  lightboxTitle.textContent = photo.title;
  lightboxMeta.textContent = photo.price
    ? `${photo.category} · ${photo.price}`
    : photo.category;

  lightbox.classList.add("open");
}

function closeLightbox() {
  lightbox.classList.remove("open");
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

document.getElementById("year").textContent = new Date().getFullYear();

createFilterBu
/* ====== À MODIFIER : tes infos ====== */
const SITE = {
  name: "Ton nom",
  tagline: "Une ligne pour te présenter : ce que tu fais, comment, avec quoi.",
  contactLabel: "contact@exemple.fr",
  contactLink: "mailto:contact@exemple.fr"
};

/* Une entrée par pièce. Dépose les photos dans le dossier images/
   et indique leur nom ici (1 ou 2 photos max). Tant qu'une photo
   n'existe pas, un cadre gris s'affiche à la place. */
const PIECES = [
  { title: "Pièce 1",  meta: "Matière, 2026", desc: "Courte description de la pièce.", photos: ["images/01-a.jpg", "images/01-b.jpg"] },
  { title: "Pièce 2",  meta: "Matière, 2026", desc: "Courte description de la pièce.", photos: ["images/02-a.jpg", "images/02-b.jpg"] },
  { title: "Pièce 3",  meta: "Matière, 2026", desc: "Courte description de la pièce.", photos: ["images/03-a.jpg", "images/03-b.jpg"] },
  { title: "Pièce 4",  meta: "Matière, 2026", desc: "Courte description de la pièce.", photos: ["images/04-a.jpg", "images/04-b.jpg"] },
  { title: "Pièce 5",  meta: "Matière, 2026", desc: "Courte description de la pièce.", photos: ["images/05-a.jpg", "images/05-b.jpg"] },
  { title: "Pièce 6",  meta: "Matière, 2026", desc: "Courte description de la pièce.", photos: ["images/06-a.jpg", "images/06-b.jpg"] },
  { title: "Pièce 7",  meta: "Matière, 2026", desc: "Courte description de la pièce.", photos: ["images/07-a.jpg", "images/07-b.jpg"] },
  { title: "Pièce 8",  meta: "Matière, 2026", desc: "Courte description de la pièce.", photos: ["images/08-a.jpg", "images/08-b.jpg"] },
  { title: "Pièce 9",  meta: "Matière, 2026", desc: "Courte description de la pièce.", photos: ["images/09-a.jpg", "images/09-b.jpg"] },
  { title: "Pièce 10", meta: "Matière, 2026", desc: "Courte description de la pièce.", photos: ["images/10-a.jpg", "images/10-b.jpg"] }
];
/* ====== fin de la zone à modifier ====== */

const $ = id => document.getElementById(id);

function frame(src, alt) {
  const f = document.createElement("div");
  f.className = "frame";
  f.textContent = "Photo à venir";
  if (src) {
    const i = new Image();
    i.alt = alt;
    i.onload = () => { f.textContent = ""; f.appendChild(i); };
    i.src = src;
  }
  return f;
}

document.title = SITE.name;
$("name").textContent = SITE.name;
$("tagline").textContent = SITE.tagline;
$("contact").textContent = SITE.contactLabel;
$("contact").href = SITE.contactLink;

PIECES.forEach((p, n) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.className = "card";
  a.href = "#" + (n + 1);
  a.append(frame(p.photos[0], p.title));
  a.insertAdjacentHTML("beforeend", "<h3></h3><p class='meta'></p>");
  a.querySelector("h3").textContent = p.title;
  a.querySelector(".meta").textContent = p.meta;
  li.append(a);
  $("grid").append(li);
});

let lastScroll = 0;
function route() {
  const n = parseInt(location.hash.slice(1), 10);
  const p = PIECES[n - 1];
  const view = $("view");
  if (!p) {
    if (!view.hidden) { view.hidden = true; document.body.style.overflow = ""; window.scrollTo(0, lastScroll); }
    return;
  }
  if (view.hidden) lastScroll = window.scrollY;
  $("v-title").textContent = p.title;
  $("v-meta").textContent = p.meta;
  $("v-desc").textContent = p.desc;
  const box = $("photos");
  box.replaceChildren(...p.photos.slice(0, 2).map(s => frame(s, p.title)));
  const total = PIECES.length;
  $("prev").href = "#" + (n === 1 ? total : n - 1);
  $("next").href = "#" + (n === total ? 1 : n + 1);
  view.hidden = false;
  view.scrollTop = 0;
  document.body.style.overflow = "hidden";
  document.title = p.title + " – " + SITE.name;
}
addEventListener("hashchange", route);
addEventListener("keydown", e => {
  if ($("view").hidden) return;
  if (e.key === "Escape") location.hash = "";
  if (e.key === "ArrowLeft") location.hash = $("prev").hash;
  if (e.key === "ArrowRight") location.hash = $("next").hash;
});
route();

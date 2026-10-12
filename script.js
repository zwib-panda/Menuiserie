/* ====== À MODIFIER : tes infos ====== */
const SITE = {
  name: "Sébastien ZwiB Hô",
  tagline: " travaux personnels de menuiserie",
  contactLabel: "zwib.ho@gmail.com   06 03 94 26 87",
  contactLink: "mailto:zwib.ho@gmail.com"
};

/* Une entrée par pièce. Dépose les photos dans le dossier images/
   et indique leur nom ici (1 ou 2 photos max). Tant qu'une photo
   n'existe pas, un cadre gris s'affiche à la place. */
const PIECES = [
  { title: "table de salon",  meta: "Bois (plancher recuperé dans une grange) / métal, 2014", desc: "table a manger 2mx1m", photos: ["images/table01.png","images/table02.png","images/table03.png"] },
  { title: "luminaire Nuage",  meta: "Bois, 2015", desc: "Petit luminaire decoratif", photos: ["images/nuage01.jpg", "images/nuage02.jpg"] },
  { title: "Bureau",  meta: "Contreplaqué, 2022", desc: "Bureau avec casiers de rangement et cache pour cable ordinateur, sans clou ni vis", photos: ["images/bureau01.jpg", "images/bureau02.jpg","images/bureau03.jpg","images/bureau05.jpg","images/bureau04.jpg"] },
  { title: "Table Basse",  meta: "Palette, 2021", desc: "juste de la recup.", photos: ["images/TableBasse01.jpg", "images/TableBasse02.jpg","images/TableBasse03.jpg"] },
  { title: "lit cabane",  meta: "Bois, 2015", desc: "Lit double sur cabane pour les enfants", photos: ["images/lit_01.png", "images/lit_02.png"] },
  { title: "Jardinieres",  meta: "Bois, 2025", desc: "Jardinière permaculture avec réserve d’eau intégrée", photos: ["images/jardiniere01.jpg", "images/jardiniere02.jpg","images/jardiniere03.jpg"] },
  { title: "Cuisine",  meta: "Bois,metal, 2013", desc: "Renovation complete de cuisine, plan de travail en bois, cerusage des portes, et verrière en metal", photos: ["images/cuisinecachan04.png","images/cuisinecachan01.png","images/cuisinecachan02.png","images/cuisinecachan03.png"] },
  { title: "verrière",  meta: "Bois/verre, 2022", desc: "verrière sur mesure", photos: ["images/verriere01.jpg", "images/verriere02.jpg"] },
  { title: "Ilot centrale",  meta: "Planche de coffrage, 2021", desc: "Creation d un ilot centrale suspendu a partir de planches de coffrage 2mx1m (accessoirement conception et installation complete de la cuisine)", photos: ["images/cuisinBres04.jpg", "images/cuisinBres03.jpg","images/cuisinBres02.JPG","images/cuisinBres01.png"] },
  { title: "support pour filet", meta: "bois, 2021", desc: "Creation de tremie et cerclage en bois pour accroche de filet decoratif", photos: ["images/filet01.png","images/filet02.png","images/filet03.png","images/filet04.png"] },
  { title: "Tables de chevet", meta: "bois, 2021", desc: "petites table de chevet dans une ambiance zen", photos: ["images/chevet01.jpg", "images/chevet02.jpg", "images/chevet03.jpg"] }, 
  { title: "Porte Coulissante", meta: "bois, 2021", desc: "Creation d une porte coulissante legere style grange pour une chambre", photos: ["images/porte01.png"] }, 
  { title: "Ikea Hack", meta: "bois/cannage, 2021", desc: "Modification de portes ikea pour decoration en cannage", photos: ["images/canage01.png"] }, 
  { title: "Cuisine",  meta: "Bois, 2011", desc: "Conception et réalisation d'une cuisine, avec grand plan de travail en bambou", photos: ["images/cuisineVille01.JPG","images/cuisineVille02.JPG"] },
  { title: "Poulailler", meta: "bois,PVC, 2021", desc: "Petit poulailler en mode recup, avec acces facile pour nettoyage et recuperation des oeufs", photos: ["images/poulailler01.jpg","images/poulailler02.jpg"] }, 
  { title: "Manche de Couteau", meta: "bois/metal, 2026", desc: "forge d'un couteau et creation du manche en bois d'olivier", photos: ["images/couteau01.jpg", "images/couteau02.jpg"] }, 
  { title: "jouet Poussette", meta: "bois/tissus, 2014", desc: "Creation d'une poussette à doudous, normalement les peluches...", photos: ["images/poussette02.png", "images/poussette03.png", "images/poussette01.png"] }, 
  { title: "Amenagement Diverse", meta: "bois", desc: "Divers aménagements: entrée tablette, etagère Salle de bain, étagere, cadre porte guitare, assises brasero et terrain de petanque, tablette WC...", photos: ["images/amenagement01.jpg", "images/amenagement02.jpg", "images/amenagement03.jpg", "images/amenagement04.jpg", "images/amenagement05.jpg", "images/amenagement07.jpg"] }, 
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
  box.replaceChildren(...p.photos.map(s => frame(s, p.title)));
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
  if ($("view").hidden || !$("zoom").hidden) return;
  if (e.key === "Escape") location.hash = "";
  if (e.key === "ArrowLeft") location.hash = $("prev").hash;
  if (e.key === "ArrowRight") location.hash = $("next").hash;
});
route();
/* ====== Zoom photo ====== */
const zoom = $("zoom"), zimg = $("zoom-img");
let sc = 1, tx = 0, ty = 0, pinch = 0, travel = 0;
const pts = new Map();
let gal = [], gi = 0, sx = 0, sy = 0, multi = false;
function showAt(n) {
  if (!gal.length) return;
  gi = (n + gal.length) % gal.length;
  sc = 1; tx = ty = 0; apply();
  zimg.src = gal[gi].src; zimg.alt = gal[gi].alt;
}
function apply() {
  const bx = zimg.clientWidth * sc / 2, by = zimg.clientHeight * sc / 2;
  tx = Math.max(-bx, Math.min(bx, tx));
  ty = Math.max(-by, Math.min(by, ty));
  zimg.style.transform = `translate(${tx}px,${ty}px) scale(${sc})`;
}
function zoomAt(x, y, ns) {
  ns = Math.min(6, Math.max(1, ns));
  const r = zoom.getBoundingClientRect();
  const px = x - (r.left + r.width / 2), py = y - (r.top + r.height / 2);
  const k = ns / sc;
  tx = px - (px - tx) * k;
  ty = py - (py - ty) * k;
  sc = ns;
  if (sc === 1) tx = ty = 0;
  apply();
}
function openZoom(src, alt) {
  sc = 1; tx = ty = 0; apply();
  zimg.src = src; zimg.alt = alt;
  zoom.hidden = false;
}
function closeZoom() { zoom.hidden = true; zimg.removeAttribute("src"); }
const two = () => { const [a, b] = [...pts.values()]; return { d: Math.hypot(a.x - b.x, a.y - b.y), x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }; };

$("photos").addEventListener("click", e => {
  const i = e.target.closest("img");
  if (!i) return;
  gal = [...$("photos").querySelectorAll("img")];
  gi = gal.indexOf(i);
  openZoom(i.src, i.alt);
});
zoom.addEventListener("wheel", e => {
  e.preventDefault();
  zoomAt(e.clientX, e.clientY, sc * (e.deltaY < 0 ? 1.2 : 1 / 1.2));
}, { passive: false });
zoom.addEventListener("pointerdown", e => {
  if (e.target.closest("button")) return;
  pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pts.size === 1) { sx = e.clientX; sy = e.clientY; multi = false; } else multi = true;
  travel = 0;
  pinch = pts.size === 2 ? two().d : 0;
});
zoom.addEventListener("pointermove", e => {
  const p = pts.get(e.pointerId);
  if (!p) return;
  const dx = e.clientX - p.x, dy = e.clientY - p.y;
  travel += Math.abs(dx) + Math.abs(dy);
  p.x = e.clientX; p.y = e.clientY;
  if (pts.size === 2) {
    const t = two();
    if (pinch) zoomAt(t.x, t.y, sc * t.d / pinch);
    pinch = t.d; travel = 99;
  } else if (sc > 1) { tx += dx; ty += dy; apply(); }
});
["pointerup", "pointercancel"].forEach(ev => zoom.addEventListener(ev, e => {
  const was = pts.has(e.pointerId);
  pts.delete(e.pointerId); pinch = 0;
  if (ev === "pointerup" && was && !multi && sc === 1 && pts.size === 0) {
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) showAt(gi + (dx < 0 ? 1 : -1));
  }
}));
zoom.addEventListener("dblclick", e => { if (e.target === zimg) zoomAt(e.clientX, e.clientY, sc > 1 ? 1 : 2.5); });
zoom.addEventListener("click", e => { if (e.target !== zimg && travel < 6) closeZoom(); });
addEventListener("keydown", e => {
  if (zoom.hidden) return;
  if (e.key === "Escape") closeZoom();
  if (e.key === "ArrowRight") showAt(gi + 1);
  if (e.key === "ArrowLeft") showAt(gi - 1);
});
$("zoom-close").addEventListener("click", closeZoom);
addEventListener("hashchange", () => { if (!zoom.hidden) closeZoom(); });

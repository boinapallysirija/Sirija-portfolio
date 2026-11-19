import { projects, achievements } from "./data.js";
import "./styles.css";

const projectGrid = document.querySelector("#projectGrid");
const achievementGrid = document.querySelector("#achievementGrid");

function safeLink(url, label, className = "text-link") {
  if (!url) return "";
  return `<a class="${className}" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}

function renderProjects(filter = "all") {
  const visible = projects.filter(p => filter === "all" || p.category === filter);
  projectGrid.innerHTML = visible.map((p, index) => `
    <article class="project-card reveal visible">
      <div class="project-visual ${p.visual}">
        <span class="visual-label">${p.label}</span>
        <span class="visual-symbol">${["✳","◉","⌖","◌","◇","文","✉","▤"][projects.indexOf(p)]}</span>
        <span class="visual-index">${String(projects.indexOf(p)+1).padStart(2,"0")}</span>
      </div>
      <div class="project-body">
        <div class="project-title-row"><h3>${p.title}</h3>${p.featured ? '<span class="featured-dot" title="Featured project">✦</span>' : ""}</div>
        <p>${p.description}</p>
        <div class="tags project-tags">${p.stack.map(s => `<span>${s}</span>`).join("")}</div>
        <div class="project-links">${safeLink(p.github, "GitHub ↗")}${safeLink(p.demo, "Live demo ↗")}</div>
      </div>
    </article>
  `).join("");
}

function renderAchievements() {
  achievementGrid.innerHTML = achievements.map((a, i) => `
    <article class="achievement-card reveal visible ${a.highlight ? "achievement-highlight" : ""}">
      <div class="achievement-top"><span class="achievement-type">${a.type}</span><span class="achievement-number">${String(i+1).padStart(2,"0")}</span></div>
      <h3>${a.title}</h3><p class="achievement-detail">${a.detail}</p><p class="achievement-issuer">${a.issuer}</p>
      ${a.file ? `<a class="certificate-link" href="/assets/certificates/${a.file}" target="_blank" rel="noreferrer">View certificate ↗</a>` : ""}
    </article>
  `).join("");
}

renderProjects();
renderAchievements();

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const progress = document.querySelector("#progress");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}, { passive: true });

const words = ["AI", "machine learning", "web applications", "useful solutions"];
let wordIndex = 0;
setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  document.querySelector("#typedWord").textContent = words[wordIndex];
}, 2200);

document.querySelector("#year").textContent = new Date().getFullYear();

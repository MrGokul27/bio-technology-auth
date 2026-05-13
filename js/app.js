console.log("Bio Technology Project Loaded");

// Redirect anchor links with no matching section to 404
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = this.getAttribute("href");
    if (target === "#" || !document.querySelector(target)) {
      e.preventDefault();
      window.location.href = "404.html";
    }
  });
});

// Scroll animations
const animateSelectors = [
  { sel: ".sec-title", anim: "fade-up", delay: 0 },
  { sel: ".about__thumb", anim: "fade-right", delay: 0 },
  { sel: ".about__content", anim: "fade-left", delay: 150 },
  { sel: ".service-card", anim: "fade-up", delay: 0 },
  { sel: ".case-studies__item", anim: "zoom-in", delay: 0 },
  { sel: ".blog-card", anim: "fade-up", delay: 0 },
  { sel: ".about__feature", anim: "fade-up", delay: 0 },
  { sel: ".dash-stat", anim: "fade-up", delay: 0 },
  { sel: ".dash-card", anim: "fade-up", delay: 0 },
  { sel: ".footer-widget", anim: "fade-up", delay: 0 },
];

animateSelectors.forEach(({ sel, anim }) => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.setAttribute("data-animate", anim);
    el.style.transitionDelay = i * 120 + "ms";
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document
  .querySelectorAll("[data-animate]")
  .forEach((el) => observer.observe(el));

//// ANIMATE ON SCROLL
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const animate = document.querySelectorAll(".animate");
animate.forEach((el) => {
  observer.observe(el);
});

//// STICKY HEADER
const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

//// MENU NAVIGATION
const headerEl = document.querySelector("header");
const icons = document.querySelector(".icons");
const close = document.querySelector(".js-close");
const navEl = document.querySelector(".js-nav");
icons.addEventListener("click", () => {
  headerEl.classList.toggle("open");
});
navEl.addEventListener("click", () => {
  headerEl.classList.remove("open");
});

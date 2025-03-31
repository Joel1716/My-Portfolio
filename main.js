<<<<<<< HEAD
import { tech, profiles } from "./data.js";
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
const navEl = document.querySelector(".js-nav");
icons.addEventListener("click", () => {
  headerEl.classList.toggle("open");
});
navEl.addEventListener("click", () => {
  headerEl.classList.remove("open");
});

/// TECH LOGOS DISPLAY ON PAGE
const logos = document.querySelector(".js-logos");
function logoCreation() {
  let imageHTML = "";
  let logoSlideHTML = "";
  let i = 0;
  tech.forEach((eachImage) => {
    imageHTML += `   <img
      src="${eachImage.img}"
   />`;
  });
  while (i < 2) {
    logoSlideHTML += `<div class="logos-slide">
    ${imageHTML}
          </div>`;
    i++;
  }
  logos.innerHTML = logoSlideHTML;
}
logoCreation();

//// PROFILES DISPLAY ON PAGE
function profileCreation() {
  const listOfProjects = document.querySelector(".js-list-of-projects");
  let languageHTML = "";
  let profileHTML = "";
  profiles.forEach((profile) => {
    languageHTML = "";
    profile.languages.forEach((language) => {
      languageHTML += `<div>${language}</div>`;
    });
    profileHTML += ` 
      <div class="each-project">
         <div class="whatsapp-image-container">
              <img class="whatsapp-image" src="${profile.img}" alt="" />
          </div>
          <div class="project-content">
              <h2>${profile.title}</h2>
              <div class="project-type">${profile.type}</div>
              <p class="project-message">${profile.message}</p>
            <div class="view-tech">
                <h2>Technologies Used</h2>
              <div class="projects-tech">${languageHTML}</div>
              <div class="view-project">
                  <a
                    href="${profile.link}"
                    target="_blank"
                    >View</a
                  >
              </div>
            </div>
          </div>;
      </div>`;
  });
  listOfProjects.innerHTML = profileHTML;
}
profileCreation();
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from redirecting

    const form = event.target;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/manqgknv", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          document.querySelector(".status-message").style.display = "block";
          form.reset(); // Clear the form
        } else {
          alert("Error sending message. Please try again.");
        }
      })
      .catch((error) => alert("Error: " + error));
  });
=======
import { tech, profiles } from "./data.js";
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
/// TECH LOGOS DISPLAY ON PAGE
const logos = document.querySelector(".js-logos");
function logoCreation() {
  let imageHTML = "";
  let logoSlideHTML = "";
  let i = 0;
  tech.forEach((eachImage) => {
    imageHTML += `   <img
      src="${eachImage.img}"
   />`;
  });
  while (i < 2) {
    logoSlideHTML += `<div class="logos-slide">
    ${imageHTML}
          </div>`;
    i++;
  }
  logos.innerHTML = logoSlideHTML;
}
logoCreation();

//// PROFILES DISPLAY ON PAGE
function profileCreation() {
  const listOfProjects = document.querySelector(".js-list-of-projects");
  let languageHTML = "";
  let profileHTML = "";
  profiles.forEach((profile) => {
    languageHTML = "";
    profile.languages.forEach((language) => {
      languageHTML += `<div>${language}</div>`;
    });
    profileHTML += ` 
      <div class="each-project">
         <div class="whatsapp-image-container">
              <img class="whatsapp-image" src="${profile.img}" alt="" />
          </div>
          <div class="project-content">
              <h2>${profile.title}</h2>
              <div class="project-type">${profile.type}</div>
              <p class="project-message">${profile.message}</p>
            <div class="view-tech">
                <h2>Technologies Used</h2>
              <div class="projects-tech">${languageHTML}</div>
              <div class="view-project">
                  <a
                    href="${profile.link}"
                    target="_blank"
                    >View</a
                  >
              </div>
            </div>
          </div>;
      </div>`;
  });
  listOfProjects.innerHTML = profileHTML;
}
profileCreation();
///// RECEIVING INPUTS

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from redirecting

    const form = event.target;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/manqgknv", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          document.querySelector(".status-message").style.display = "block";
          form.reset(); // Clear the form
        } else {
          alert("Error sending message. Please try again.");
        }
      })
      .catch((error) => alert("Error: " + error));
  });
>>>>>>> origin/main

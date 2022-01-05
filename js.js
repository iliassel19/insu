const navlist = document.querySelector(".nav-list");
const navlistitem = document.querySelectorAll(".nav-list-item");
const btns = document.querySelector(".btns");
const close = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  if (navlist.classList.contains("show")) {
    navlist.classList.remove("show");
    close.style.display = "none";
    hamburger.style.display = "block";
  } else {
    navlist.classList.add("show");
    close.style.display = "block";
    hamburger.style.display = "none";
  }
}

btns.addEventListener("click", toggleMenu);

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      navlist.classList.toggle("show");
    close.style.display = "none";
    hamburger.style.display = "block";
  });
});
// STICKY NAVIGATION

const sectionHeroEl = document.querySelector(".section-hero");

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

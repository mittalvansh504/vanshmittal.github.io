/*-----------------Toggle icon navbar ---------------------*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/*----------------- Scroll section active link ---------------------*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector('header nav a[href*="' + id + '"]')
          .classList.add("active");
      });
    }
  });

  /*----------------- Sticky navbar ---------------------*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*----------------- Remove toggle icon and navbar ---------------------*/
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

/*----------------- Scroll Reveal ---------------------*/
ScrollReveal({
  distance: "80px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*----------------- typed js ---------------------*/
const typed = new Typed(".multiple-text", {
  strings: ["Software Developer", "Backend Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});



function toggleReadMore() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("readMoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}


function toggleReadMore(contentId, btnId) {
  let moreText = document.getElementById(contentId);
  let btnText = document.getElementById(btnId);

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btnText.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "Read More";
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const projectLinks = {
    "Object Detection Model": "https://github.com/mittalvansh504/Object_Detection_Model",
    "Job Portal (MERN)": "https://github.com/mittalvansh504/Job_Portal",
    "Travel Website": "https://github.com/mittalvansh504/Boostoing_Tourism_Industry",
    "Rock-Paper-Scissors Game": "https://github.com/mittalvansh504/Rock_Paper_Sessior_by_Java"
  };
  document.querySelectorAll(".portfolio-box").forEach(box => {
    let title = box.querySelector("h4").innerText;
    let githubIcon = box.querySelector("a");      
    if (projectLinks[title]) {
      githubIcon.addEventListener("click", e => {
        e.preventDefault();
        window.open(projectLinks[title], "_blank");
      });
    }
  });
});

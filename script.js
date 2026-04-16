/*----------------- Toggle icon navbar ---------------------*/
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
      });

      let activeLink = document.querySelector(
        'header nav a[href*="' + id + '"]'
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
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
ScrollReveal().reveal(".home-content p, .about-content", {
  origin: "right",
});

/*----------------- Typed JS ---------------------*/
const typed = new Typed(".multiple-text", {
  strings: ["Software Developer", "Backend Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

/*----------------- Read More (About + Skills FIXED) ---------------------*/
function toggleReadMore(contentId, btnId) {
  // About section (no params)
  if (!contentId) {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnText.innerHTML = "Read Less";
    }
  } 
  // Skills section (with params)
  else {
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
}

/*----------------- Portfolio Click Fix ---------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const projectLinks = {
    "Object Detection Model":
      "https://github.com/mittalvansh504/Object_Detection_Model",
    "Job Portal (MERN)":
      "https://github.com/mittalvansh504/Job_Portal",
    "Travel Website":
      "https://github.com/mittalvansh504/Boostoing_Tourism_Industry",
    "Rock-Paper-Scissors Game":
      "https://github.com/mittalvansh504/Rock_Paper_Sessior_by_Java",
  };

  document.querySelectorAll(".portfolio-box").forEach((box) => {
    let title = box.querySelector("h4")?.innerText;
    let githubIcon = box.querySelector("a");

    if (projectLinks[title] && githubIcon) {
      githubIcon.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(projectLinks[title], "_blank");
      });
    }
  });
});



const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    btn.style.transform = `translate(${x*0.2}px, ${y*0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

window.addEventListener("mousemove", e => {
  const img = document.querySelector(".home-img img");
  let x = (window.innerWidth / 2 - e.pageX) / 30;
  let y = (window.innerHeight / 2 - e.pageY) / 30;
  img.style.transform = `translate(${x}px, ${y}px)`;
});
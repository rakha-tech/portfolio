// Custom cursor
const cursor = document.querySelector(".cursor");
const cursorFollower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  setTimeout(() => {
    cursorFollower.style.left = e.clientX + "px";
    cursorFollower.style.top = e.clientY + "px";
  }, 100);
});

// Menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.style.background = "rgba(10, 10, 10, 0.95)";
    nav.style.backdropFilter = "blur(20px)";
  } else {
    nav.style.background = "rgba(10, 10, 10, 0.9)";
    nav.style.backdropFilter = "blur(10px)";
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      // Animate stats numbers
      if (entry.target.classList.contains("stat")) {
        animateCounter(entry.target.querySelector(".stat-number"));
      }
    }
  });
}, observerOptions);

// Observe elements
document
  .querySelectorAll(".about, .skills, .projects, .contact")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Form handling
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // Here you would typically send the data to a server
  console.log("Form data:", data);

  // Show success message
  alert("Thank you for your message! I will get back to you soon.");

  // Reset form
  e.target.reset();
});

// Add typing effect to hero title
const heroTitle = document.querySelector(".hero-title");
const text = heroTitle.textContent;
heroTitle.textContent = "";

let i = 0;
function typeWriter() {
  if (i < text.length) {
    heroTitle.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing effect when page loads
window.addEventListener("load", () => {
  setTimeout(typeWriter, 1);
});

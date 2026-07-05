const text = "Web Developer | Front-End Enthusiast | JavaScript Learner";
const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = function () {
    typeEffect();
};

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Navbar background change on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#111";
        navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    } else {
        navbar.style.background = "#222";
        navbar.style.boxShadow = "none";
    }
});
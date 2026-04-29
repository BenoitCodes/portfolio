
/* =========================
   LOADER
========================= */
window.addEventListener("load", () => {
const loader = document.getElementById("loader");
setTimeout(() => {
loader.style.display = "none";
}, 1200);
});


/* =========================
   DARK / LIGHT MODE
========================= */

const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
toggle.textContent = "☀️";
}else{
toggle.textContent = "🌙";
}
});


/* =========================
   TYPING EFFECT
========================= */

const typingText = document.querySelector(".hero-text h3");

const words = [
"Backend Developer",
"Beat Maker",
"Node.js Expert",
"Full Stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect(){

currentWord = words[wordIndex];

if(isDeleting){
charIndex--;
}else{
charIndex++;
}

typingText.textContent = currentWord.substring(0, charIndex);

if(!isDeleting && charIndex === currentWord.length){
isDeleting = true;
setTimeout(typeEffect, 1200);
return;
}

if(isDeleting && charIndex === 0){
isDeleting = false;
wordIndex = (wordIndex + 1) % words.length;
}

setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();


/* =========================
   BUTTON SCROLL SMOOTH
========================= */

document.querySelector(".btn-primary").addEventListener("click", () => {
document.getElementById("about").scrollIntoView({behavior:"smooth"});
});

document.querySelector(".btn-secondary").addEventListener("click", () => {
document.getElementById("contact").scrollIntoView({behavior:"smooth"});
});


/* =========================
   ACTIVE NAV LINK ON SCROLL
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {
const sectionTop = section.offsetTop - 150;

if(window.scrollY >= sectionTop){
current = section.getAttribute("id");
}
});

navLinks.forEach(link => {
link.classList.remove("active");
if(link.getAttribute("href").includes(current)){
link.classList.add("active");
}
});

});
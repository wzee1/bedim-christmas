// --------------
// --------------
// Hamburger Menu
// --------------
// --------------

const hamburgerIcon = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const navLinks = document.querySelectorAll(".nav__links");
const logo = document.getElementById("logo");

// Toggles the menu
hamburgerIcon.addEventListener("click", () => {
   menu.classList.toggle("nav-active");
})

// Removes menu if a link is clicked
navLinks.forEach(navLinks => {
   navLinks.addEventListener("click", () => {
      menu.classList.remove("nav-active");
   });
});

// Removes menu if logo is clicked
logo.addEventListener("click", () => {
   menu.classList.remove("nav-active");
})

// ----------
// ----------
// Dark Theme
// ----------
// ----------

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun";
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bxs-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bx bxs-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener("click", () => {
   document.body.classList.toggle(darkTheme);
   themeButton.classList.toggle(iconTheme);
   localStorage.setItem('selected-theme', getCurrentTheme());
   localStorage.setItem('selected-icon', getCurrentIcon());
})

// ---------------
// ---------------
// Current Section
// ---------------
// ---------------

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
   const scrollY = window.pageYOffset

   sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop - 300,
         sectionId = current.getAttribute('id'),
         sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
         sectionsClass.classList.add('active-link')
      }else{
         sectionsClass.classList.remove('active-link')
      }                                                    
   })
}
window.addEventListener('scroll', scrollActive)

// -------------
// -------------
// Scroll Reveal
// -------------
// -------------

ScrollReveal({
   origin: "top",
   distance: "32px",
   duration: 2000,
   delay: 400,
});

if (screen.height <= 667) {
   ScrollReveal().reveal(".hero__right", {origin: "right"});
   ScrollReveal().reveal(".hero__left", {origin: "left", delay: 1000});

   ScrollReveal().reveal(".share__left", {origin: "right"});
   ScrollReveal().reveal(".share__right", {origin: "left", delay: 500});

   ScrollReveal().reveal(".decorations__header, .decorations__cards--flex");
   ScrollReveal().reveal(".accessories__header, .accessories__cards--flex");
   ScrollReveal().reveal(".sendGift");
} else if (screen.height <= 1000) {
   ScrollReveal().reveal(".hero__right", {origin: "right"});
   ScrollReveal().reveal(".hero__left", {origin: "left", delay: 1000});

   ScrollReveal().reveal(".share__left", {origin: "right", delay: 2000});
   ScrollReveal().reveal(".share__right", {origin: "left", delay: 500});

   ScrollReveal().reveal(".decorations__header, .decorations__cards--flex");
   ScrollReveal().reveal(".accessories__header, .accessories__cards--flex");
   ScrollReveal().reveal(".sendGift");
} else {
   ScrollReveal().reveal(".hero__left", {origin: "left"});
   ScrollReveal().reveal(".hero__right", {origin: "right", delay: 1000});

   ScrollReveal().reveal(".share__left", {origin: "right", delay: 1500});
   ScrollReveal().reveal(".share__right", {origin: "left", delay: 2000});

   ScrollReveal().reveal(".decorations__header, .decorations__cards--flex", {delay: 2500});
   ScrollReveal().reveal(".accessories__header, .accessories__cards--flex", {delay: 500});
   ScrollReveal().reveal(".sendGift");
}
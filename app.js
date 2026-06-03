/* ======================================
   WALTER JUNIO PONTES TEIXEIRA
   PORTFÓLIO ULTRA PREMIUM
====================================== */

/* ==========================
   MENU MOBILE
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click", ()=>{

        navLinks.classList.toggle("active");

    });

}

/* ==========================
   FECHAR MENU AO CLICAR
========================== */

document.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

/* ==========================
   EFEITO DIGITAÇÃO
========================== */

const typingElement =
document.getElementById("typing");

const professions = [

    "Data Scientist",
    "Software Developer",
    "Database Specialist",
    "Technology Consultant",
    "Machine Learning Enthusiast",
    "Data Analytics Specialist"

];

let professionIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect(){

    if(!typingElement) return;

    const currentText =
    professions[professionIndex];

    if(!deleting){

        typingElement.innerHTML =
        currentText.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentText.length){

            deleting = true;

            setTimeout(typingEffect,2000);

            return;
        }

    }else{

        typingElement.innerHTML =
        currentText.substring(0,charIndex-1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            professionIndex++;

            if(professionIndex >= professions.length){

                professionIndex = 0;

            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 60 : 120
    );

}

typingEffect();

/* ==========================
   CONTADORES ANIMADOS
========================== */

const counters =
document.querySelectorAll(".counter");

const animateCounter = counter => {

    const target =
    Number(counter.dataset.target);

    const speed = 200;

    const updateCounter = ()=>{

        const current =
        Number(counter.innerText);

        const increment =
        Math.ceil(target / speed * 10);

        if(current < target){

            counter.innerText =
            current + increment;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText =
            target;

        }

    };

    updateCounter();

};

const counterObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(
".card,.skill-card,.stat-card,.timeline-item"
);

function revealOnScroll(){

    const windowHeight =
    window.innerHeight;

    revealElements.forEach(el=>{

        const elementTop =
        el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            el.classList.add("show");

        }

    });

}

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* ==========================
   NAVBAR SCROLL
========================== */

const navbar =
document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(5,8,22,.95)";

        navbar.style.boxShadow =
        "0 0 20px rgba(0,229,255,.15)";

    }else{

        navbar.style.background =
        "rgba(5,8,22,.7)";

        navbar.style.boxShadow =
        "none";

    }

});

/* ==========================
   BOTÃO TOPO
========================== */

const scrollTopButton =
document.createElement("button");

scrollTopButton.innerHTML =
'<i class="fas fa-arrow-up"></i>';

scrollTopButton.id = "scrollTop";

document.body.appendChild(
scrollTopButton
);

scrollTopButton.style.cssText = `
position:fixed;
bottom:30px;
right:30px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#00e5ff;
color:#000;
font-size:20px;
cursor:pointer;
display:none;
z-index:9999;
box-shadow:0 0 15px rgba(0,229,255,.5);
transition:.3s;
`;

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        scrollTopButton.style.display =
        "block";

    }else{

        scrollTopButton.style.display =
        "none";

    }

});

scrollTopButton.addEventListener(
"click",
()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

/* ==========================
   PARALLAX HERO
========================== */

const hero =
document.querySelector("#hero");

window.addEventListener("scroll",()=>{

    const offset =
    window.pageYOffset;

    if(hero){

        hero.style.backgroundPositionY =
        offset * 0.4 + "px";

    }

});

/* ==========================
   PARTICLES JS
========================== */

if(typeof particlesJS !== "undefined"){

particlesJS("particles-js", {

  particles: {

    number: {
      value: 90
    },

    color: {
      value: "#00e5ff"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.4
    },

    size: {
      value: 3
    },

    move: {

      enable: true,

      speed: 1.5,

      direction: "none",

      random: false,

      straight: false,

      out_mode: "out"

    },

    line_linked: {

      enable: true,

      distance: 150,

      color: "#00e5ff",

      opacity: 0.3,

      width: 1

    }

  },

  interactivity: {

    detect_on: "canvas",

    events: {

      onhover: {
        enable: true,
        mode: "repulse"
      },

      onclick: {
        enable: true,
        mode: "push"
      }

    }

  },

  retina_detect: true

});

}

/* ==========================
   ANO AUTOMÁTICO
========================== */

const footer =
document.querySelector("footer p");

if(footer){

footer.innerHTML =

`© ${new Date().getFullYear()}
Walter Junio Pontes Teixeira
| Todos os direitos reservados`;

}

/* ==========================
   CONSOLE SIGNATURE
========================== */

console.log(`

====================================

WALTER JUNIO PONTES TEIXEIRA

DATA SCIENCE PORTFOLIO

GitHub:
https://github.com/KASSAMBA-MTB

====================================

`);
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(8,26,53,.92)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(10,25,55,.75)";
        header.style.boxShadow = "none";

    }

});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

const tracks = document.querySelectorAll(".slide-track");

tracks.forEach(track => {

    track.addEventListener("mouseenter", () => {

        track.style.animationPlayState = "running";

    });

    track.addEventListener("mouseleave", () => {

        track.style.animationPlayState = "running";

    });

});

const logo = document.querySelector(".logo");

let scale = true;

setInterval(() => {

    if (scale) {

        logo.style.transform = "scale(1.08)";

    } else {

        logo.style.transform = "scale(1)";

    }

    scale = !scale;

}, 1200);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let value = window.scrollY;

    hero.style.opacity = 1 - value / 700;

});

console.log("%c🎮 Selamat Datang di EmuVerse", "color:#25B8FF;font-size:18px;font-weight:bold;");
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

cards.forEach(card => {

    observer.observe(card);

});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.background = "rgba(8,26,53,.96)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(8,26,53,.88)";
        header.style.boxShadow = "none";

    }

});

const logo = document.querySelector(".logo");

let zoom = true;

setInterval(() => {

    if (zoom) {

        logo.style.transform = "scale(1.05)";

    } else {

        logo.style.transform = "scale(1)";

    }

    zoom = !zoom;

}, 1000);

const downloadButtons = document.querySelectorAll(".download-btn");

downloadButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(.95)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        }, 150);

    });

});

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".3s";

    });

});

console.log(
    "%c🎮 EmuVerse Emulator Loaded",
    "color:#25B8FF;font-size:18px;font-weight:bold;"
);
const cards = document.querySelectorAll(".info-card");

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

const logo = document.querySelector(".about-logo");

let scale = 1;
let direction = 1;

setInterval(() => {

    if (direction === 1) {

        scale += 0.002;

        if (scale >= 1.06) {

            direction = -1;

        }

    } else {

        scale -= 0.002;

        if (scale <= 1) {

            direction = 1;

        }

    }

    logo.style.transform = `scale(${scale})`;

}, 25);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s";

    });

});

const menu = document.querySelectorAll(".navbar a");

menu.forEach(item => {

    item.addEventListener("click", () => {

        menu.forEach(nav => {

            nav.classList.remove("active");

        });

        item.classList.add("active");

    });

});

console.log(
"%c🎮 EmuVerse About Loaded",
"color:#25B8FF;font-size:18px;font-weight:bold;"
);
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
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(8,26,53,.88)";
        header.style.boxShadow = "none";

    }

});

const logo = document.querySelector(".logo");

let scale = 1;
let direction = 1;

setInterval(() => {

    if (direction === 1) {

        scale += 0.01;

        if (scale >= 1.06) direction = -1;

    } else {

        scale -= 0.01;

        if (scale <= 1) direction = 1;

    }

    logo.style.transform = `scale(${scale})`;

}, 40);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.boxShadow =
        `${(x-rect.width/2)/18}px ${(y-rect.height/2)/18}px 30px rgba(37,184,255,.35)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "0 0 0 rgba(0,0,0,0)";

    });

});

const buttons = document.querySelectorAll(".download-btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(.95)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        },150);

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
"%c🎮 EmuVerse Game Loaded",
"color:#25B8FF;font-size:18px;font-weight:bold;"
);
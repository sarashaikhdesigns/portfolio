window.addEventListener("DOMContentLoaded", () => {

    let lastX = 0;
    let lastY = 0;

    document.addEventListener("mousemove", (e) => {

        const distance = Math.hypot(
            e.clientX - lastX,
            e.clientY - lastY
        );

        if (distance < 10) return;

        lastX = e.clientX;
        lastY = e.clientY;

        for (let i = 0; i < 1; i++) {

            const star = document.createElement("div");
            star.className = "cursor-star";
            star.innerHTML = "★";

            const spread = 40;

            star.style.left =
                e.clientX + (Math.random() - 0.5) * spread + "px";

            star.style.top =
                e.clientY + (Math.random() - 0.5) * spread + "px";

            star.style.fontSize =
                (20 + Math.random() * 5) + "px";

            document.body.appendChild(star);

            setTimeout(() => {
                star.remove();
            }, 1200);
        }
    });

    // Arrow toggle
const arrow = document.querySelector(".scroll-arrow");
const works = document.querySelector("#selected-works");

function updateArrow() {
    const selectedWorksY = works.offsetTop;

    if (window.scrollY >= selectedWorksY - 200) {
        arrow.textContent = "↑";
        arrow.href = "#top";
    } else {
        arrow.textContent = "↓";
        arrow.href = "#selected-works";
    }
}

window.addEventListener("scroll", updateArrow);
updateArrow();

});
window.addEventListener("DOMContentLoaded", () => {

    let lastX = 0;
    let lastY = 0;

    document.addEventListener("mousemove", (e) => {

        const distance = Math.hypot(
            e.clientX - lastX,
            e.clientY - lastY
        );

        // Create stars more frequently for a smoother trail
        if (distance < 10) return;

        lastX = e.clientX;
        lastY = e.clientY;

        // Create 3 stars every movement
        for (let i = 0; i < 1; i++) {

            const star = document.createElement("div");
            star.className = "cursor-star";
            star.innerHTML = "★";

            // Keep stars close together
            const spread = 40;

            star.style.left =
                e.clientX + (Math.random() - 0.5) * spread + "px";

            star.style.top =
                e.clientY + (Math.random() - 0.5) * spread + "px";

            // Slightly larger stars
            star.style.fontSize =
                (20 + Math.random() * 5) + "px";

            document.body.appendChild(star);

            setTimeout(() => {
                star.remove();
            }, 1200);
        }
    });

});
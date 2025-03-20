const mobileToggle = document.querySelector(".mobile-toggle");
const nav = document.querySelector("nav");

mobileToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        nav.classList.remove("active");

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth",
            });
        }
    });
});

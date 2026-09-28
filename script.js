// ===============================
// MENU MOBILE
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Fermer le menu après avoir cliqué sur un lien
    document.querySelectorAll("#navMenu a").forEach(link => {

        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });

    });
}


// ===============================
// ANNÉE AUTOMATIQUE
// ===============================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ===============================
// ANIMATION AU SCROLL
// ===============================

const cards = document.querySelectorAll(
    ".service-card, .quick-card, .price-card, .contact-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.1
        }
    );


    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });

} else {

    // Si le navigateur ne supporte pas IntersectionObserver
    cards.forEach(card => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    });

}
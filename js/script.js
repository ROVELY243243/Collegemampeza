// ======================================================
// COLLÈGE MAMPEZA
// JavaScript principal du site
// ======================================================


// ======================================================
// MENU MOBILE
// ======================================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        // Change l'icône du bouton
        if (navLinks.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });


    // Fermer le menu après avoir cliqué sur un lien
    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });

}


// ======================================================
// FORMULAIRE DE CONTACT
// ======================================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Récupération des informations
        const nom = document.getElementById("nom").value.trim();

        const telephone =
            document.getElementById("telephone").value.trim();

        const emailElement = document.getElementById("email");

        const email = emailElement
            ? emailElement.value.trim()
            : "";

        const sujet = document.getElementById("sujet").value;

        const message =
            document.getElementById("message").value.trim();


        // Vérification
        if (!nom || !telephone || !sujet || !message) {

            alert(
                "Veuillez remplir tous les champs obligatoires."
            );

            return;

        }


        // Numéro WhatsApp de l'établissement
        const numeroWhatsApp = "243892793805";


        // Création du message
        let texteWhatsApp =
            "Bonjour Collège Mampeza,%0A%0A";

        texteWhatsApp +=
            "*Nouvelle demande depuis le site web*%0A%0A";

        texteWhatsApp +=
            "*Nom :* " + encodeURIComponent(nom) + "%0A";

        texteWhatsApp +=
            "*Téléphone :* " +
            encodeURIComponent(telephone) +
            "%0A";

        if (email) {

            texteWhatsApp +=
                "*Email :* " +
                encodeURIComponent(email) +
                "%0A";

        }

        texteWhatsApp +=
            "*Sujet :* " +
            encodeURIComponent(sujet) +
            "%0A%0A";

        texteWhatsApp +=
            "*Message :*%0A" +
            encodeURIComponent(message);


        // Création du lien WhatsApp
        const whatsappURL =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            texteWhatsApp;


        // Ouvrir WhatsApp
        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );


        // Réinitialiser le formulaire
        contactForm.reset();

    });

}


// ======================================================
// ANNEE AUTOMATIQUE DANS LE FOOTER
// ======================================================

const currentYear = new Date().getFullYear();

const footerYears =
    document.querySelectorAll(".footer-bottom p");

footerYears.forEach(function (element) {

    element.innerHTML =
        element.innerHTML.replace(
            /©\s*\d{4}/,
            "© " + currentYear
        );

});


// ======================================================
// ANIMATION LÉGÈRE AU DÉFILEMENT
// ======================================================

const animatedElements =
    document.querySelectorAll(
        ".card, .about-intro, .gallery-item, .news-card"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show-element"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    animatedElements.forEach(function (element) {

        element.classList.add(
            "hidden-element"
        );

        observer.observe(element);

    });

}
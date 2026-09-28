const typingText = document.getElementById("typing-text");

const roles = [
    "Flutter Developer",
    "Software Engineer",
   
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    typingText.textContent = currentRole.substring(0, charIndex);

    charIndex++;

    if (charIndex > currentRole.length) {

        setTimeout(() => {

            charIndex = 0;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

            typeEffect();

        }, 1500);

        return;
    }

    setTimeout(typeEffect, 100);

}

typeEffect();






































// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    // Close mobile menu after clicking a link

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });

}


// =========================
// CERTIFICATE LIGHTBOX
// =========================

const modal = document.getElementById("certificateModal");
const modalImage = document.getElementById("certificateModalImage");
const closeBtn = document.querySelector(".modal-close");
const certificateButtons =
    document.querySelectorAll(".certificate-view");


if (
    modal &&
    modalImage &&
    certificateButtons.length > 0
) {

    certificateButtons.forEach(button => {

        button.addEventListener("click", () => {

            const image = button
                .closest(".certificate-card")
                .querySelector("img");

            if (!image) return;

            modalImage.src = image.src;

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    // Close button

    if (closeBtn) {

        closeBtn.addEventListener("click", () => {

            modal.classList.remove("active");

            modalImage.src = "";

            document.body.style.overflow = "";

        });

    }


    // Click outside image

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("active");

            modalImage.src = "";

            document.body.style.overflow = "";

        }

    });


    // Escape key

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            modal.classList.remove("active");

            modalImage.src = "";

            document.body.style.overflow = "";

        }

    });

}



// =========================
// ABOUT SCROLL ANIMATION
// =========================

const aboutSection = document.querySelector(".about-content");

if (aboutSection) {

    const aboutObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    aboutObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.2
        }
    );

    aboutObserver.observe(aboutSection);
}





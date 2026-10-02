const images = document.querySelectorAll(".gallery-image");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const counter = document.getElementById("lightbox-counter");

const closeButton = document.querySelector(".lightbox-close");
const prevButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");

let currentIndex = 0;


/* =========================================
   OPEN
========================================= */

function openLightbox(index) {

    currentIndex = index;

    updateLightbox();

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================
   UPDATE
========================================= */

function updateLightbox() {

    lightboxImage.src = images[currentIndex].src;

    lightboxImage.alt = images[currentIndex].alt;

    counter.textContent =
        `${currentIndex + 1} / ${images.length}`;

}


/* =========================================
   NEXT
========================================= */

function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;

    }

    updateLightbox();

}


/* =========================================
   PREVIOUS
========================================= */

function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = images.length - 1;

    }

    updateLightbox();

}


/* =========================================
   CLOSE
========================================= */

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================================
   IMAGE CLICK
========================================= */

images.forEach((image, index) => {

    image.addEventListener("click", () => {

        openLightbox(index);

    });

});


/* =========================================
   BUTTONS
========================================= */

nextButton.addEventListener("click", nextImage);

prevButton.addEventListener("click", previousImage);

closeButton.addEventListener("click", closeLightbox);


/* =========================================
   CLICK OUTSIDE
========================================= */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


/* =========================================
   KEYBOARD
========================================= */

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active")) {

        return;

    }


    if (event.key === "ArrowRight") {

        nextImage();

    }


    if (event.key === "ArrowLeft") {

        previousImage();

    }


    if (event.key === "Escape") {

        closeLightbox();

    }

});
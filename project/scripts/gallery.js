const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

const cosplays = [
    {
        itemName: "Lego Darth Maul Head",
        finished: "2024, March, 18",
        imageUrl: "images/darth-maul-selfie.jpg",
        construction: "3D",
        wearable: true
    },
    {
        itemName: "S.T.A.L.K.E.R. Veles Detector",
        finished: "2024, January, 18",
        imageUrl: "images/veles-detector.jpg",
        construction: "3D",
        wearable: false
    }
  ];

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    const navLinks = document.querySelectorAll("nav a");

    function displayCosplays(filteredCosplays) {
        main.innerHTML = ""

        const galleryGrid = document.createElement("div");
        galleryGrid.classList.add("gallery-grid");

        filteredCosplays.forEach(cosplay => {
            const card = document.createElement("figure");

            const imgWrapper = document.createElement("div");
            imgWrapper.classList.add("image-container");

            const title = document.createElement("h3");
            title.textContent = cosplay.itemName;

            const caption = document.createElement("figcaption");
            caption.innerHTML = `
                <p><strong>Finished:</strong> ${cosplay.finished}</p>
            `;

            const img = document.createElement("img");
            img.src = cosplay.imageUrl;
            img.alt = cosplay.itemName;
            img.loading = "lazy";

            imgWrapper.appendChild(title);
            imgWrapper.appendChild(caption);
            imgWrapper.appendChild(img);

            card.appendChild(imgWrapper);
            galleryGrid.appendChild(card);
        });
        main.appendChild(galleryGrid);
    }
    function filterCosplays(filter) {
        let filteredList = [];

        switch (filter) {
            case "⬅Home":
                window.location.href = "home.html";
                return;
            case "Wearables":
                filteredList = cosplays.filter(t => t.wearable === true);
                break;
            case "Props":
                filteredList = cosplays.filter(t => t.wearable === false);
                break;
            case "3D Printed":
                filteredList = cosplays.filter(t => t.construction === "3D");
                break;
            case "Tailored":
                filteredList = cosplays.filter(t => t.construction === "tailored");
                break;
            case "All":
                filteredList = cosplays;
                break;
        }
        displayCosplays(filteredList);
    }
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const filter = event.target.textContent.trim();
            filterCosplays(filter);
        });
    });
    displayCosplays(cosplays);
});
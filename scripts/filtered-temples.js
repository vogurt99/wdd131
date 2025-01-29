const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Quezon, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-44351.jpg"
    },
    {
        templeName: "Cebu Philippines",
        location: "Cebu, Philippines",
        dedicated: "2010, June, 13",
        area: 29556,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/cebu-city-philippines-temple/cebu-city-philippines-temple-33251.jpg"
    },
    {
        templeName: "Urdaneta Philippines",
        location: "Urdaneta, Philippines",
        dedicated: "2024, April, 28",
        area: 32604,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/urdaneta-philippines-temple/urdaneta-philippines-temple-45856.jpg"
    }
  ];

document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    const navLinks = document.querySelectorAll("nav a");

    function displayTemples(filteredTemples) {
        main.innerHTML = ""

        filteredTemples.forEach(temple => {
            const card = document.createElement("figure");

            const imgWrapper = document.createElement("div");
            imgWrapper.classList.add("image-container");

            const title = document.createElement("h3");
            title.textContent = temple.templeName;

            const caption = document.createElement("figcaption");
            caption.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
            `;

            const img = document.createElement("img");
            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = "lazy";

            imgWrapper.appendChild(title);
            imgWrapper.appendChild(caption);
            imgWrapper.appendChild(img);

            card.appendChild(imgWrapper);
            main.appendChild(card);
        });
    }
    function filterTemples(filter) {
        let filteredList = [];

        switch (filter) {
            case "Old":
                filteredList = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
                break;
            case "New":
                filteredList = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
                break;
            case "Large":
                filteredList = temples.filter(t => t.area > 90000);
                break;
            case "Small":
                filteredList = temples.filter(t => t.area < 10000);
                break;
            default:
                filteredList = temples;
        }
        displayTemples(filteredList);
    }
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            filterTemples(event.target.textContent.trim());
        });
    });
    displayTemples(temples);
});

//Last Modified
const copyrightElement = document.getElementById('copyright');
const lastModifiedElement = document.getElementById('lastModified');

const currentYear = new Date().getFullYear();
copyrightElement.textContent = `© ${currentYear}`;

const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuToggle.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
});
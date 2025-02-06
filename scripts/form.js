const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const reviewCount = getReviewCount();
    const counterDisplay = document.getElementById("reviewCounter");
    if (counterDisplay) {
        counterDisplay.textContent = `Reviews Submitted: ${reviewCount}`;
    }
});

function getReviewCount() {
    return parseInt(localStorage.getItem("reviewCount")) || 0;
}

function setReviewCount(count) {
    localStorage.setItem("reviewCount", count);
}

function increaseReviewCount() {
    let count = parseInt(localStorage.getItem("reviewCount")) || 0;
    count++;
    localStorage.setItem("reviewCount", count);
}

//Get Dates
const copyrightElement = document.getElementById('copyright');
const lastModifiedElement = document.getElementById('lastModified');

const currentYear = new Date().getFullYear();
copyrightElement.textContent = `© ${currentYear}`;

const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
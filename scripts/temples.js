const copyrightElement = document.getElementById('copyright');
const lastModifiedElement = document.getElementById('lastModified');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

const currentYear = new Date().getFullYear();
copyrightElement.textContent = `© ${currentYear}`;

const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuToggle.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
});
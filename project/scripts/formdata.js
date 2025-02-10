document.addEventListener("DOMContentLoaded", () => {
    const fnameInput = document.querySelector('input[name="fname"]');
    const lnameInput = document.querySelector('input[name="lname"]');
    const emailInput = document.querySelector('input[name="email"]');

    if (fnameInput) fnameInput.value = localStorage.getItem("fname") || "";
    if (lnameInput) lnameInput.value = localStorage.getItem("lname") || "";
    if (emailInput) emailInput.value = localStorage.getItem("email") || "";

    if (fnameInput) fnameInput.addEventListener("input", () => localStorage.setItem("fname", fnameInput.value));
    if (lnameInput) lnameInput.addEventListener("input", () => localStorage.setItem("lname", lnameInput.value));
    if (emailInput) emailInput.addEventListener("input", () => localStorage.setItem("email", emailInput.value));
});

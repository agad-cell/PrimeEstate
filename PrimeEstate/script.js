



const navbar = document.querySelector("#navbar");
const navToggler = document.querySelector("#navbar-toggle");

navToggler.addEventListener("click", () => navbar.classList.toggle("active"));





const header = document.querySelector("#header");


window.addEventListener("scroll", e => {
    header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
});





const toggleBtns = document.querySelectorAll(".fav-btn");

toggleBtns.forEach(toggleBtn => {
    toggleBtn.addEventListener("click", () => {
        toggleBtn.classList.toggle("active");
    });
});



const changer = document.getElementById('theme');

changer.addEventListener('click', function () {
    document.body.classList.toggle('change-theme');





});
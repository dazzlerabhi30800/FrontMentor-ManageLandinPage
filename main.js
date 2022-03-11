const menuBtn = document.querySelector('.menu__btn i');
const navbar = document.querySelector('.navbar');
console.log(navbar);

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('show');
});
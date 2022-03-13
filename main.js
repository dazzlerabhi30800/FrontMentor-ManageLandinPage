const menuBtn = document.querySelector('.menu__btn i');
const navbar = document.querySelector('.navbar');
const profileImage = document.querySelector('.profile__img img');
const heading = document.querySelector('.name');
const description = document.querySelector('.profile__description');
const input = document.querySelector('.input__wrapper input');
const button  = document.querySelector('.input__wrapper .btn');
const error = document.querySelector('.error');

console.log(error);
const tl = gsap.timeline({defaults : {duration : .75, ease:'power1.out'}});


tl.fromTo('.profile__img img', {opacity : 0}, {opacity : 1, duration : 0.5});
tl.fromTo('.name', {opacity : 0}, {opacity : 1, duration : 0.5}, '<50%');
tl.fromTo('.profile__description', {opacity : 0}, {opacity : 1, duration : 0.5}, '<50%');

button.addEventListener('click', () => {
    const inputText = input.value;
    // console.log(inputText);
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailPattern.test(inputText)) {
        setTimeout(function() {
            error.innerText = "Your email has been verified";
            error.classList.add('active');
            
        }, 50);
        setTimeout(function() {
            error.classList.remove('active');
        }, 4000);
        
    } else {
        setTimeout(function() {
            error.innerText = "Please enter valid email";
            error.classList.add('active');
        }, 50);
        setTimeout(function() {
            error.classList.remove('active');
        }, 4000);
        
    }
})

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('show');
});

const buttons = document.querySelectorAll('.circle');
const slider = document.querySelector('.profile__item');

buttons.forEach(button => {
    button.onclick = () => {
        removeColor();
        button.classList.add('active');
        slider.style.transform = `translateX(calc(-100% * ${button.dataset.index}))`;
    }
})

function removeColor() {
    buttons.forEach(button => {
        button.classList.remove('active');
    })
}


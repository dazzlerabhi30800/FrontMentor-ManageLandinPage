const menuBtn = document.querySelector('.menu__btn i');
const navbar = document.querySelector('.navbar');
const profileImage = document.querySelector('.profile__img img');
const heading = document.querySelector('.name');
const description = document.querySelector('.profile__description');
const oneCircle = document.querySelector('#one');
const twoCircle = document.querySelector('#two');
const threeCircle = document.querySelector('#three');
const fourCircle = document.querySelector('#four');
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

oneCircle.addEventListener('click', () => {
    oneCircle.classList.add('active');
    twoCircle.classList.remove('active');
    threeCircle.classList.remove('active');
    fourCircle.classList.remove('active');
    profileImage.src = "images/avatar-anisha.png";
    heading.innerText = "Anisha Li";
    description.innerText = ` “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”`;
    tl.fromTo('.profile__img img', {opacity : 0}, {opacity : 1, duration : 0.5});
tl.fromTo('.name', {opacity : 0}, {opacity : 1, duration : 0.5}, '<50%');
tl.fromTo('.profile__description', {opacity : 0}, {opacity : 1, duration : 0.5}, '<50%');
})
twoCircle.addEventListener('click', () => {
    oneCircle.classList.remove('active');
    twoCircle.classList.add('active');
    threeCircle.classList.remove('active');
    fourCircle.classList.remove('active');
    profileImage.src = "images/avatar-ali.png";
    heading.innerText = "Ali Bravo";
    description.innerText = `“We have been able to cancel so many other subscriptions since using Manage.There is no more cross-channel confusion and everyone is much more focused.”`;
    tl.fromTo('.profile__img img', {opacity : 0}, {opacity : 1, duration : 0.5});
    tl.fromTo('.name', {opacity : 0}, {opacity : 1, duration : 0.5}, '<50%');
    tl.fromTo('.profile__description', {opacity : 0}, {opacity : 1, duration : 0.5}, '<50%');
})
threeCircle.addEventListener('click', () => {
    oneCircle.classList.remove('active');
    twoCircle.classList.remove('active');
    threeCircle.classList.add('active');
    fourCircle.classList.remove('active');
    profileImage.src = "images/avatar-richard.png";
    heading.innerText = "Richard Watts";
    description.innerText = `“Manage allows us to provide structure and process. It keeps us organized and focused.I can’t stop recommending them to everyone I talk to!”`;
    tl.fromTo('.profile__img img', {opacity : 0}, {opacity : 1, duration : 0.5});
    tl.fromTo('.name', {opacity : 0}, {opacity : 1, duration : 0.5}, '<50%');
    tl.fromTo('.profile__description', {opacity : 0}, {opacity : 1, duration : 0.5}, '<50%');
})
fourCircle.addEventListener('click', () => {
    oneCircle.classList.remove('active');
    twoCircle.classList.remove('active');
    threeCircle.classList.remove('active');
    fourCircle.classList.add('active');
    profileImage.src = "images/avatar-shanai.png";
    heading.innerText = "Shanai Gough";
    description.innerText = `“Their software allows us to track, manage and collaborate on our projects from anywhere.It keeps the whole team in-sync without being intrusive.”`;
    tl.fromTo('.profile__img img', {opacity : 0}, {opacity : 1, duration : 0.5});
    tl.fromTo('.name', {opacity : 0}, {opacity : 1, duration : 0.5}, '<50%');
    tl.fromTo('.profile__description', {opacity : 0}, {opacity : 1, duration : 0.5}, '<50%');
})
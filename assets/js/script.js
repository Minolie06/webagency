const mobileNavBtn = document.getElementById('mobile-nav-button');
const body = document.getElementsByTagName('body')[0];


mobileNavBtn.addEventListener('click', () => {
    body.classList.toggle('mobile-open')
})
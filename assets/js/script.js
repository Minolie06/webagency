const mobileNavBtn = document.getElementById('mobile-nav-button');
const body = document.getElementsByTagName('body')[0];
const slides = document.getElementsByClassName("slide-item")
const slideBar = document.getElementById('slide-bar');


mobileNavBtn.addEventListener('click', () => {
    body.classList.toggle('mobile-open')
})


var slideIndex = 1;
for (i = 0; i < slides.length; i++) {
    var bar = document.createElement('div');
    bar.setAttribute("id", `bar-${i+1}`);
    bar.style.width = `calc(100% / ${slides.length})`
    bar.style.backgroundColor = 'var(--color-accent)'
    bar.style.visibility = 'hidden';
    slideBar.appendChild(bar);
}
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    document.getElementById(`bar-${i+1}`).style.visibility = 'hidden';
  }
  slides[slideIndex-1].style.display = "block";  
  document.getElementById(`bar-${slideIndex}`).style.visibility = 'visible'
}
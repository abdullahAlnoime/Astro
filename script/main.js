let hamburger = document.querySelector('header nav .container img:last-of-type');
let bulletsNav = document.querySelector('header nav .container .bullets');
hamburger.onclick = () => {
  hamburger.classList.toggle('opacity');
  bulletsNav.classList.toggle('show-nav');
};
let bullets = document.querySelectorAll('header nav .container .bullets span a');
bullets.forEach((elm) => {
  elm.onclick = () => {
    removeAllActive();
    elm.classList.add('active');
  };
});

function removeAllActive() {
  bullets.forEach((elm) => {
    elm.classList.remove('active');
  });
}
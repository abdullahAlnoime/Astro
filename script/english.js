let selectLang = document.querySelector('header > .container:first-of-type .lang select');
selectLang.onchange = (event) => {
  if (event.target.value === 'AR') {
    let myPage = redirectPage(document.title);
    location.href = myPage ;
    event.target.value = 'ENG' ;
  }
};
function redirectPage(name) {
  switch (name) {
    case 'Astro':
      return 'astro-ar.html' ;
      break;
    case 'Services':
      return 'services-ar.html' ;
      break;
    case 'About Us':
      return 'about-ar.html' ;
      break;
    case 'Contact Us':
      return 'contact-ar.html' ;
      break;
    case 'Our Blog':
      return 'blog-ar.html' ;
      break;
  }
}
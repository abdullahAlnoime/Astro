let selectLang = document.querySelector('header > .container:first-of-type .lang select');
selectLang.onchange = (event) => {
  if (event.target.value === 'إنجليزي') {
    let myPage = redirectPage(document.title);
    location.href = myPage ;
    event.target.value = 'عربي' ;
  }
};
function redirectPage(name) {
  switch (name) {
    case 'آسترو':
      return 'astro.html' ;
      break;
    case 'الخدمات':
      return 'services.html' ;
      break;
    case 'من نحن':
      return 'about.html' ;
      break;
    case 'اتصل بنا':
      return 'contact.html' ;
      break;
    case 'المدونة':
      return 'blog.html' ;
      break;
  }
}
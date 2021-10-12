let specialBlog = document.querySelectorAll('.sp-blog');
let showButton = document.querySelectorAll('.container .blog section > button');
showButton.forEach((elm, ind) => {
  elm.onclick = function() {
    specialBlog[ind].classList.toggle('show');
    if (specialBlog[ind].classList.contains('show')) {
      elm.textContent = 'اقرأ القليل';
    } else {
      elm.textContent = 'اقرأ المزيد';
    }
  };
});
String.prototype.toArabicDigits = function() {
  var id = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return this.replace(/[0-9]/g, function(w) {
    return id[+w];
  });
}
let inputName = document.querySelectorAll('.leave-comment #name');
let inputMsg = document.querySelectorAll('.leave-comment #message');
let sendMsg = document.querySelectorAll('.leave-comment div form');
let addComment = document.querySelectorAll('.comments');
let spaceOfComment = document.querySelectorAll('.sp-comment h2 span');
let totalComment = document.querySelectorAll('.blog section > div div span:last-of-type');
sendMsg.forEach((elm, ind) => {
  elm.onsubmit = () => {
    let today = new Date();
    var date = `
        ${today.getDate().toString().toArabicDigits()} ${nameMonth(today.getMonth()+1)} ${today.getFullYear().toString().toArabicDigits()}
        `;
    let hours = today.getHours();
    let minutes = today.getMinutes();
    if (hours < 10) {
      hours = '٠' + hours;
    }
    if (minutes < 10) {
      minutes = '٠' + minutes;
    }
    var time = ` ${hours.toString().toArabicDigits()}:${minutes.toString().toArabicDigits()} `;
    var dateTime = ` ${date} في ${time} `;
    let contentComment = `
        <div class="person unknown">
            <img src="./images/unknown.png" alt="صورة شخص غير معروف">
            <div>
              <div class="comment-head">
                <img src="./images/icons/person.svg" alt="صورة شخص"> <span>${inputName[ind].value}</span>
                <img src="./images/icons/date.svg" alt="أيقونة تاريخ"> <span>${dateTime}</span> <span>رد</span>
              </div>
              <div class="comment-body"><img src="./images/unknown.png" alt="غير معروف" style='width: 18%; right: 4px;'>${inputMsg[ind].value}</div>
            </div>
          </div>
      `;
    addComment[ind].innerHTML += contentComment;
    inputMsg[ind].value = '';
    inputName[ind].value = '';
    spaceOfComment[ind].textContent = addComment[ind].children.length.toString().toArabicDigits();
    totalComment[ind].textContent = addComment[ind].children.length.toString().toArabicDigits() + ' تعليق' ;
    return false;
  };
});
let spaceLike = document.querySelectorAll('.sp-blog .buttons span:first-of-type');
let buttonLike = document.querySelectorAll('.sp-blog .buttons button:first-of-type');
let spaceTwitter = document.querySelectorAll('.sp-blog .buttons span:last-of-type');
let buttonTwitter = document.querySelectorAll('.sp-blog .buttons button:last-of-type');

buttonLike.forEach((elm, ind) => {
  elm.onclick = () => {
    elm.classList.toggle('clicked');
    if (elm.classList.contains('clicked')) {
      spaceLike[ind].textContent = parseInt(toEnglishDigits(spaceLike[ind].textContent)) + 1;
      spaceLike[ind].textContent = spaceLike[ind].textContent.toArabicDigits();
    } else {
      spaceLike[ind].textContent = parseInt(toEnglishDigits(spaceLike[ind].textContent)) - 1;
      spaceLike[ind].textContent = spaceLike[ind].textContent.toArabicDigits();
    }
  };
});
buttonTwitter.forEach((elm, ind) => {
  elm.onclick = () => {
    elm.classList.toggle('clicked');
    if (elm.classList.contains('clicked')) {
      spaceTwitter[ind].textContent = parseInt(toEnglishDigits(spaceTwitter[ind].textContent)) + 1;
      spaceTwitter[ind].textContent = spaceTwitter[ind].textContent.toArabicDigits();
    } else {
      spaceTwitter[ind].textContent = parseInt(toEnglishDigits(spaceTwitter[ind].textContent)) - 1;
      spaceTwitter[ind].textContent = spaceTwitter[ind].textContent.toArabicDigits();
    }
  };
});

function nameMonth(number) {
  switch (number) {
    case 1:
      return 'كانون الثاني';
      break;
    case 2:
      return 'شباط';
      break;
    case 3:
      return 'آذار';
      break;
    case 4:
      return 'نيسان';
      break;
    case 5:
      return 'أيار';
      break;
    case 6:
      return 'حزيران';
      break;
    case 7:
      return 'تموز';
      break;
    case 8:
      return 'آب';
      break;
    case 9:
      return 'أيلول';
      break;
    case 10:
      return 'تشرين الأول';
      break;
    case 11:
      return 'تشرين الثاني';
      break;
    case 12:
      return 'كانون الأول';
      break;
  }
}

function toEnglishDigits(str) {
  e = '٠'.charCodeAt(0);
  str = str.replace(/[٠-٩]/g, function(t) {
    return t.charCodeAt(0) - e;
  });
  return str;
}
let buttonSearch = document.querySelector('.show-search');
let searchBar = document.querySelector('aside');
buttonSearch.onclick = () => {
  searchBar.classList.toggle('searchBar');
  buttonSearch.classList.toggle('buttonSearch');
};
let specialBlog = document.querySelectorAll('.sp-blog');
let showButton = document.querySelectorAll('.container .blog section > button');
showButton.forEach((elm, ind) => {
  elm.onclick = function() {
    specialBlog[ind].classList.toggle('show');
    if (specialBlog[ind].classList.contains('show')) {
      elm.textContent = 'read less';
    } else {
      elm.textContent = 'read more';
    }
  };
});
let inputName = document.querySelectorAll('.leave-comment #name');
let inputMsg = document.querySelectorAll('.leave-comment #message');
let sendMsg = document.querySelectorAll('.leave-comment div form');
let addComment = document.querySelectorAll('.comments');
let spaceOfComment = document.querySelectorAll('.sp-comment h2 span');
sendMsg.forEach((elm, ind) => {
  elm.onsubmit = () => {
    let today = new Date();
    var date = `
        ${today.getDate()} ${nameMonth(today.getMonth()+1)} ${today.getFullYear()}
        `;
    let hours = today.getHours();
    let minutes = today.getMinutes();
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    var time = ` ${hours}:${minutes} `;
    var dateTime = ` ${date} At ${time} `;
    let contentComment = `
        <div class="person unknown">
            <img src="./images/unknown.png" alt="unknown image">
            <div>
              <div class="comment-head">
                <img src="./images/icons/person.svg" alt="person icon"> <span>by ${inputName[ind].value}</span>
                <img src="./images/icons/date.svg" alt="date icon"> <span>${dateTime}</span> <span>reply</span>
              </div>
              <div class="comment-body"><img src="./images/unknown.png" alt="unknown" style='width: 18%; left: 4px;'>${inputMsg[ind].value}</div>
            </div>
          </div>
      `;
    addComment[ind].innerHTML += contentComment;
    inputMsg[ind].value = '';
    inputName[ind].value = '';
    spaceOfComment[ind].textContent = addComment[ind].children.length;
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
      spaceLike[ind].textContent = parseInt(spaceLike[ind].textContent) + 1;
    } else {
      spaceLike[ind].textContent = parseInt(spaceLike[ind].textContent) - 1;
    }
  };
});
buttonTwitter.forEach((elm, ind) => {
  elm.onclick = () => {
    elm.classList.toggle('clicked');
    if (elm.classList.contains('clicked')) {
      spaceTwitter[ind].textContent = parseInt(spaceTwitter[ind].textContent) + 1;
    } else {
      spaceTwitter[ind].textContent = parseInt(spaceTwitter[ind].textContent) - 1;
    }
  };
});

function nameMonth(number) {
  switch (number) {
    case 1:
      return 'january';
      break;
    case 2:
      return 'february';
      break;
    case 3:
      return 'march';
      break;
    case 4:
      return 'april';
      break;
    case 5:
      return 'may';
      break;
    case 6:
      return 'june';
      break;
    case 7:
      return 'jully';
      break;
    case 8:
      return 'augast';
      break;
    case 9:
      return 'september';
      break;
    case 10:
      return 'october';
      break;
    case 11:
      return 'november';
      break;
    case 12:
      return 'december';
      break;
  }
}
let buttonSearch = document.querySelector('.show-search');
let searchBar = document.querySelector('aside');
buttonSearch.onclick = () => {
  searchBar.classList.toggle('searchBar');
  buttonSearch.classList.toggle('buttonSearch');
};
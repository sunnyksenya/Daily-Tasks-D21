// Задание 2. При заходе на страницу, спустя 5 секунд выскакивает всплывающее окно с checkbox. Если пользователь отметил checkbox то окно больше не показывается ни на одной странице сайта. Если окно просто закрылось - то при следующем обновлении - открывается снова.
var a = document.createElement('div');
a.className = 'initial';
document.body.appendChild(a);
var b = document.createElement('div');
b.className = 'box';
document.querySelector('.initial').appendChild(b);
var c = document.createElement('input');
c.type = 'checkbox';
document.querySelector('.box').appendChild(c);

setTimeout(function(){
  if (localStorage.getItem('agree')) {
    b.style.opacity = 0;
  } else {
    b.style.opacity = 1;
  }
}, 5000);

document.querySelector('input').addEventListener('click', function ifChecked(event) {
  localStorage.setItem('agree', c.checked);
})

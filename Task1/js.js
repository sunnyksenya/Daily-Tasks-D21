// Реализуйте программу: при клике на любом элементе на странице выводится класс этого элемента. Если класс отсутствует - то выводится имя тега.

var a = document.createElement('p');
document.body.appendChild(a);
document.addEventListener('click', function myFunction(event) {
  // console.log(event.target.className);
  document.querySelector('p').innerHTML = event.target.className;
  if (event.target.className == "") {
    // console.log(event.target.localName);
    document.querySelector('p').innerHTML = event.target.localName;
  }
});

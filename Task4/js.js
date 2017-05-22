var i = 0;
$(document).ready(function () {
  // установим интервал в одну секунду
  var timer = setInterval(choose, 1000);
  $('img').on('scroll')
});

// function choose() {
//   i++;
//   // выделит все элементы списка до элемента с индексом i
//   $("li:eq(" + (i - 1) + ")")
//   .css("background-color", "white");
//
//   // выделит элементы списка по индексу i
//   $("li:eq(" + i + ")")
//   .css("background-color", "yellow");
// };

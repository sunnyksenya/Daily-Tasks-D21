$(document).ready(function () {
  $('button').on('click', myFunction);
})
function myFunction() {
  var a = $('.one').val() * $('.two').val();
  $('p').html(a);
  if (a < 100) {
    $('p').css('border', '1px solid green')
  } else {
    $('p').css('border', '1px solid red')
  }
};

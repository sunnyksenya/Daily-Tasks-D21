$(document).ready(function () {
  $('div').css('display', 'none');
  $('p').on('click', myFunction);
  function myFunction() {
    $('p + div').css('display', 'none');
    $(this).next('div').css('display', 'table');
  }
});

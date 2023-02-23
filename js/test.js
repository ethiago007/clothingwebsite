window.console = window.console || function (t) { };
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}

$(document).ready(function () {
  $('#so-close').click(function () {
    $('.s-soft').addClass('so-collapse');
    $('#so-open').delay(300).css('left', '0');
  });
  $('.facebook').mouseover(function () {
    $('span.fa-facebook').css('margin-left', '30px');
   $('.fullf').show(); 
  })
  $('.facebook').mouseleave(function () {
    $('span.fa-facebook').css('margin-left', '0px');
    $('.fullf').hide(); 
   })
   $('.twitter').mouseover(function () {
    $('span.fa-twitter').css('margin-left', '30px');
   $('.fullt').show(); 
  })
  $('.twitter').mouseleave(function () {
    $('span.fa-twitter').css('margin-left', '0px');
    $('.fullt').hide(); 
   })
  $('#so-open').click(function () {
    $('#so-open').css('left', '-60px');
    $('.s-soft').removeClass('so-collapse');
  });
  
}); 
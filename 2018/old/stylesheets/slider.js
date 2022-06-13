function slideShow(){
  var $active = $('#images img.active');
  if ( $active.length == 0) $active = $('#images img:last');

  var $next = $active.next().length ? $active.next()
  : $('#images img:first');

  $active.addClass('last-active');

  $next.css({opacity: 0.0})
  .addClass('active')
  .animate({opacity: 1.25}, 2000, function() {
    $active.removeClass('active last-active')
  });
}

$(document).ready(function() {
  setInterval("slideShow()", 3000);

});

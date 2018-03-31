$(function() {
  const $asides = $('aside:not(.interviewer)');

  function placeAsideToTopOfPrevSibling(i, e) {
    $el = $(e);
    $prev = $el.prev('*:not(aside)');

    $el.css('top', $prev.position().top);
  }

  function plaseAsides() {
    $asides.each(placeAsideToTopOfPrevSibling);
  }

  const ro = new ResizeObserver(plaseAsides);
  ro.observe(document.querySelector('.article'));
});
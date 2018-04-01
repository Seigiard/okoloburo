$(function() {
  const $asides = $('aside:not(.interviewer)');

  function placeAsideToTopOfPrevSibling(i, e) {
    $el = $(e);
    $el.addClass('aside__positioned');

    $prev = $el.prev('*:not(aside)');
    if (!$prev) {
      return;
    }
    $el.css('top', $prev.position().top);
  }

  function plaseAsides() {
    $asides.each(placeAsideToTopOfPrevSibling);
  }

  const ro = new ResizeObserver(plaseAsides);
  ro.observe(document.querySelector('.article'));
});
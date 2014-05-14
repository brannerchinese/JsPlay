$(document).ready(function () {
  /* Create menu. */
  $('#menu').append('<input type="button" value="Add to-do item">')
  $('#menu').mouseenter(function() {
    $('#menu').fadeTo('swing', 1);
  });
  $('#menu').mouseleave(function() {
    $('#menu').fadeTo('swing', 0);
  });
  /* Create ordered list. */
  /* Add checker for past-due. Past-due is flagged. */
  /* Make sortable. */
  /* Add button for "done". */
});

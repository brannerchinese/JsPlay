$(document).ready(function () {
  /* Add fading effects to menu.*/
  $('#menu').mouseenter(function() {
    $(this).fadeTo('swing', 1);
  });
  $('#menu').mouseleave(function() {
    $(this).fadeTo('swing', 0);
  });
  /* Create ordered list. */
  $('#button').click(function() {
    var content = $('#content').val();
    if (content === '') {return} else {$('#content').val('')}
    $('#list ol').append('<li>' + content + '</li>');
  });
  /* Add checker for past-due. Past-due is flagged. */
  /* Make sortable. */
  /* Add button for "done". */

/*function checkCR(e) {
  var evnt = e || window.event;
  if (evnt.keyCode == 13) {
    var content = $('#content').val();
    $('#list ol').append('<li>' + content + '</li>');
  }*/
});



/* David Branner, 20140515 */

$(document).ready(function () {
  function addLI() {
    var content = $('#content').val();
    if (content === '') {return} else {$('#content').val('')}
    $('#list ol').append('<li>' + content + '</li>');
  }

  /* Add fading effects to menu.*/
  $('#menu').mouseenter(function() {
    $(this).fadeTo('fast', 1);
  });
  $('#menu').mouseleave(function() {
    $(this).fadeTo('slow', 0);
  });
  /* Create ordered list. */
  $('#form').submit(function () {
    addLI();
    return false;
  });

  /* Make sortable by hand (requires jQuery UI). */
  $('#list ol').sortable();

  /* Add check-box for "done". */
  /* Add dates. */
  /* Add checker for past-due. Past-due is flagged. */

});



/* David Branner, 20140519 */

/* focus should be automatic in form when visible. */

$(document).ready(function () {
  function addLI() {
    var content = $('#content').val();
    if (content === '') {return} else {$('#content').val('')}
    $('#list ol').prepend('<li>' + content + '</li>');
    /* Double click to move between "to-do" and "done" lists. */
    var lists = {list:'#done', done:'#list'};
    $('li').dblclick(function() {
      /* Find nth parent: $(this).parents().eq(n) */
      var whichList = $(this).parents().eq(1).attr('id');
      $(lists[whichList] + ' ol').prepend($(this));
      /* Must also remove `this` manually; `prepend` alone is not enough. */
      $('#' + whichList + ' ol').remove($(this));
    });
  }

  /* Add fading effects to form.*/
  $('#content').focus();
  $('#inputs').hover(
    function() {
      $(this).fadeTo('fast', 1);
      $('#content').focus();
    },
    function() {
      $(this).fadeTo('slow', 0);
      $('#content').blur();
    });
  /* Create ordered list. */
  $('#form').submit(function () {
    addLI();
    return false;
  });

  /* Make lists sortable by hand (requires jQuery UI). */
  $('ol').sortable();

  /* Add dates. */
  /* Add checker for past-due. Past-due is flagged. */

  /* Sliding instructions-menu. */
  $('#menuContent').load('html/menu.html');
});



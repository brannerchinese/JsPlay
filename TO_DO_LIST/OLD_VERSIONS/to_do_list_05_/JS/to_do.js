/* David Branner, 20140515 */

/* focus should be automatic in form when visible. */

$(document).ready(function () {
  function addLI() {
    var content = $('#content').val();
    if (content === '') {return} else {$('#content').val('')}
    $('#list ol').prepend('<li>' + content + '</li>');
    var lists = {list:'#done', done:'#list'};
    var cursor = 0;
    $('li').dblclick(function() {
      /* Find nth parent: $(this).parents().eq(n) */
      var whichList = $(this).parents().eq(1).attr('id');
      $(lists[whichList] + ' ol').prepend($(this));
    });
  }

  /* Add fading effects to menu.*/
  $('#content').focus();
  $('#menu').hover(
    function() {
      $(this).fadeTo('fast', 1);
      $('#content').focus();
    },
    function() {
      $(this).fadeTo('slow', 0);
    });
  /* Create ordered list. */
  $('#form').submit(function () {
    addLI();
    return false;
  });

  /* Make lists sortable by hand (requires jQuery UI). */
  $('ol').sortable();

  /* Add check-box for "done". */
  /* Add dates. */
  /* Add checker for past-due. Past-due is flagged. */

});



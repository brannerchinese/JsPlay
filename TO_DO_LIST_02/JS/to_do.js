$(document).ready(function () {
  function addLI() {
    var content = $('#content').val();
    if (content === '') {return} else {$('#content').val('')}
    $('#list ol').append('<li>' + content + '</li>');
  }

  function checkCR(e) {
    var evnt = e || window.event;
    if (evnt.keyCode == 13) {
        addLI();
    }
  }

  /* Add fading effects to menu.*/
  $('#menu').mouseenter(function() {
    $(this).fadeTo('fast', 1);
  });
  $('#menu').mouseleave(function() {
    $(this).fadeTo('slow', 0);
  });
  /* Create ordered list. */
/*  $('#button').click(function() {
    addLI()
  }); */
  $('#form').submit(function () {
    addLI();
    return false;
  });
  /* Add checker for past-due. Past-due is flagged. */
  /* Make sortable. */
  /* Add button for "done". */

});



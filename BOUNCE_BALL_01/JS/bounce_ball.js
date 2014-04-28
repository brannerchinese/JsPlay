// 20140427
// David Prager Branner

var hidden = false;
var loops = 14;
var updown;
var field_width = $(window).width();
var field_height = $(window).height();
// Now must calculate feasible values.

var toggle = function () {
    if (hidden) {
      $("#ball").show();
      hidden = false;
    } else {
      $("#ball").hide();
      hidden = true;
    }
};

$(document).ready(function() {
    $("#button").click(function() {
      toggle();
    });
    $("#button2").click(function() {
      for (var t = 0; t < loops; t++) {
//        updown = Math.round((loops-t) / 2) - 1;
        if (t > loops/2) {updown=-1;}
        else {updown=1;}
        change = updown * Math.pow((loops/2)-t, 2);
        $("#ball").animate({
            top: '-=' + change + 'px',
            left: '+=' + t + 'px'
        }, {easing: "linear",duration:2000});
      }
    });
});

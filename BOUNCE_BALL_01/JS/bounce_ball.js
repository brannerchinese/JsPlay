// 20140427
// David Prager Branner

var hidden = false;
var loops = 14;
var g = 1;
var h = 0;
var v = 10;
var updown;

var toggle = function () {
    if (hidden) {
        $("#ball").show();
        hidden = false;
    } else {
        $("#ball").hide();
        hidden = true;
    }
};

$(document).ready(function () {
    $("#button").click(function () {
        toggle();
    });
    $("#button2").click(function () {
        for (var t = 0; t < loops; t++) {
          v -= g * t;
          h += v * (t) - (g * Math.pow(t, 2) / 2);
          updown = ((loops / 2) - t);
          change = updown* Math.pow((loops/2)-t, 2);
            $("#ball").animate({
                'top': '-=' + change + 'px',
                    'left': '+=12px'
            }, {
                easing: "linear"
            });
        }
    });
});

// 20140427
// David Prager Branner

var hidden = false;
var loops = 12;


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
            $("#ball").animate({
                    'top': '-=' + ((loops / 2) - t) * Math.pow((loops / 2) - t, 2) + 'px',
                    'left': '+=12px'
            }, {
                easing: "linear"
            });
        }
    });
});

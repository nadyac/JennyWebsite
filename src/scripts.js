/*jslint browser: true, devel: true */
/*global $, JQuery*/
function popup() {
    "use strict";
    alert("Hello World");
}

$(function getWinSize() {
    //Call variable to hold window size
    "use strict";
    var win_Width = $(window).width(),
        win_Height = $(window).height();
    alert("Width: " + win_Width + " Height: " + win_Height);
});
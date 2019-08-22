'use strict';
alert("input:   ", $("input").val());
$("#login").click(function() {
    alert("input:   ", $("input").val());
    alert("username:   ", $("#username").val());
    alert("password:   ", $("#password").val());
    alert("username1   ", $("input:text").val());
    alert("password1   ", $("input:password").val());
});
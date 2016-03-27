$(document).ready(function () {
    $('.hover-class').hover(function () {

        // alert('in')
        var className = $(this).attr('value');
        $('.mrbean').addClass(className);


    })
    $(".hover-class").mouseout(function () {
        var className = $(this).attr('value');
        $('.mrbean').removeClass(className);
    });


});
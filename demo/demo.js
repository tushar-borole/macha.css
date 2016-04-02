$(document).ready(function () {
    var html = "";


    var animationJson = [];
    animationJson = [{
        'name': 'Shake',
        'color': '#3F51B5',
        'classname': 'macha-animation-shake'
    }, {
        'name': 'Vibrate',
        'color': '#3F51B5',
        'classname': 'macha-animation-vibrate'
    }, {
        'name': 'bouncingball',
        'color': '#FFEB3B',
        'classname': 'macha-animation-bouncingball'
    }, {
        'name': 'fall',
        'color': '#512DA8',
        'classname': 'macha-animation-fall'
    }, {
        'name': 'Blur',
        'color': '#009688',
        'classname': 'macha-animation-blur'
    }, {
        'name': 'Blink',
        'color': '#FF5722',
        'classname': 'macha-animation-blink'
    },{
        'name': 'Swing',
        'color': '#CDDC39',
        'classname': 'macha-animation-swing'
    },{
        'name': 'Rubberband',
        'color': '#00796B',
        'classname': 'macha-animation-rubberband'
    }]
/*    ,{
        'name': 'rolljump',
        'color': '#00796B',
        'classname': 'macha-animation-rolljump'
    }*/
    for (i = 0; i < animationJson.length; i++) {
        $('head').append('<link rel="stylesheet" type="text/css" href="src/' + animationJson[i].classname + '.css">');
        html += '<div class="col-md-1 col-xs-6">' +
            '<div class="effect-container-single">' +
            '<a class="hover-class" value="' + animationJson[i].classname + '" style="background-color:' + animationJson[i].color + '"></a>' +
            '<p>' + animationJson[i].name + '</p>' +
            '<p class="class-name">.' + animationJson[i].classname + '</p>' +
            ' </div>' +
            '</div>'
    }

    $("#append-element").empty();

    $("#append-element").html(html)
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
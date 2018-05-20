/*eslint-env browser*/

$(document).ready(function () {
    //MOVE TO THE NEXT IMAGE
    $("#right").click(function () {
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active');
        } else {
            currentImg.removeClass('active').css('z-index', -10);
            $('.slider img').first().addClass('active').css('z-index', 10);
            $('ul li').first().addClass('active');
        }
    });

    //MOVE TO THE PREVOUS IMAGE
    $("#left").click(function () {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active');
        } else {
            currentImg.removeClass('active').css('z-index', -10);
            $('.slider img').last().addClass('active').css('z-index', 10);
            $('ul li').last().addClass('active');
        }
    });


    //DISPLAY IMAGES SELECTED 
    var currentImg = 1;
    $('li').click(function (e) {
        //console.log(this);
        $('li').removeClass('active');
        $(this).addClass('active');


        currentImg = $(this).index() + 1;
        $('.slider img').removeClass('active').fadeOut();
        $('.slider img:nth-of-type(' + currentImg + ')').addClass('active');
    });
});
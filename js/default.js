$(document).ready(function () {
    // Bootstrap Select
    var $selectpicker = $('.selectpicker');
    $selectpicker.selectpicker();


    var counter = 0;
    $('.language-bar .active').click(function(){
        if(counter == 0){
            $('.language-bar li:not(.active)').addClass('active');
            counter++
        }else{
            counter = 0;
            $('.language-bar li').not(':first').removeClass('active');

        }
    });


    $('.burger-btn').click(function(){
        $('.burger-nav').addClass('active');
    });

    $('.close-btn').click(function(){
       $('.burger-nav').removeClass('active');
    });
     $('.clicker-menu').click(function(){
         $('.bg-inner-menu').toggleClass('active');
     });
});
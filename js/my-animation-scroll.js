$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();

        if(verticalScroll >= 200) {

            $('#tomas').addClass('rollIn');
        }
        
         if(verticalScroll >= 300) {

            $('.marcela').addClass('bounce infinite');
        }               
        
        if(verticalScroll >= 400) {

            $('#jerry').addClass('slideInDown');
        }        
        

    });
});
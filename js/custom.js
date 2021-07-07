//header fix
var ww = $(window).width();

// navigation script
$("#sideNavigation li:has(ul)").prepend('<span class="down"></span>');
    $(".toggle-icon").click(function() {
    $(this).toggleClass("open");
    $("#menu").slideToggle();
});
            
function apperMenu(){
            
            $('#sideNavigation li span.down').click(function() {
                $(this).toggleClass('up');
                //alert("hi");
                $(this).siblings('ul').delay(20).slideToggle(200);
                $(this).parents('li').siblings('li').children('ul').slideUp();
                $(this).siblings('ul').children('li').children('ul').slideUp();
                $(this).parents('li').siblings('li').children('span').removeClass('up');
                $(this).siblings('ul').children('li').children('span').removeClass('up');
        });
    
}

$(window).load(function() {
   apperMenu();
});

$(window).resize(function() {    
    // apperMenu();
    if($(window).width()>812){
        $('.side-menu').show()
    }else{
        $('.side-menu').hide()
    }
});

// side menu toggle in mobile 

$('.side-menu-toggle').on('click', function(){
    $('.side-menu').slideToggle(300);
})


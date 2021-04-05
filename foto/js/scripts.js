$('.grid').masonry({
    itemSelector: '.grid.Item',
    columnWidth: '.gridSizer',
    percentPosition: true,
    gutter: 0,
    stagger: 30
    // transitionDuraction: '.5s'
});

$(document).ready(function(){
    $('.gridItem').hide();
    $('.bird').show();
    $('.filter').removeClass('filtered')
    $('.button1').addClass('filtered')
});
$('.button1').click(function(){
    $('.gridItem').hide();
    $('.bird').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button2').click(function(){
    $('.gridItem').hide();
    $('.nature').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button3').click(function(){
    $('.gridItem').hide();
    $('.landscape').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button4').click(function(){
    $('.gridItem').hide();
    $('.conceptual').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button5').click(function(){
    $('.gridItem').hide();
    $('.architecture').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});
$('.button6').click(function(){
    $('.gridItem').hide();
    $('.gridItem').show();
    $('.filter').removeClass('filtered')
    $(this).addClass('filtered')
});




// if ($rndmFilter == selected){
//     $selected[content].append ($rndmFilter[value])
// }
mediaQuery = window.matchMedia("(max-width: 950px)");




    if (mediaQuery['matches'] == true) {
        $(function(){
            $('.menu').hide();
            $('.mobileMenu').show();
            $('.filter').hide();
            $('.selected').show();
       });
        $('.selected').append('Conceptual' + ' &#9776;')            
        $(function(){
            $('.selected').click(function(){
                $('.filter').show();
                $('.selected').hide();
            });
            $('.button1').click(function(){
                $('.selected').empty();
                $('.selected').prepend('All'+'&#9776;')
                $('.filter').hide();
                $('.selected').show();
            });
            
            $('.button4').click(function(){
                $('.selected').empty();
                $('.selected').prepend('Nature' +' &#9776;')
                $('.filter').hide();
                $('.selected').show();
            });
            $('.button5').click(function(){
                $('.selected').empty();
                $('.selected').prepend('Landscapes' +' &#9776;')
                $('.filter').hide();
                $('.selected').show();
            });
            
            $('.button6').click(function(){
                $('.selected').empty();
                $('.selected').prepend('Macro' +' &#9776;')
                $('.filter').hide();
                $('.selected').show();
            });
            $('.button7').click(function(){
                $('.selected').empty();
                $('.selected').prepend('Architecture' +' &#9776;')
                $('.filter').hide();
                $('.selected').show();
            });
            $('.button8').click(function(){
                $('.selected').empty();
                $('.selected').prepend('Conceptual' +' &#9776;')
                $('.filter').hide();
                $('.selected').show();
            });
        });
    };

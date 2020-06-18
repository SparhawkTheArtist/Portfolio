// on document load, load brsy
$(document).ready(function(){
    $(".projectNav").slick({
        slidesToScroll: 1,
        asNavFor: '.project',
        initialSlide: 0,
        dots: true,
        lazyLoad: 'ondemand',
        centerMode: true,
        focusOnSelect: true,
        waitForAnimate: false,
        variableWidth: true,
    });
    $(".project").slick({
        arrows: false, dots: false, 
        adaptiveHeight: false, variableWidth: false,
        waitForAnimate: false,
        lazyLoad: 'ondemand',
        fade: true,
        speed: 1000,
    });
    // this is the row of images that is the project's nav
    glry('bsry');
});



// on click, activate respective gallery
$("#bsry").click(function(){glry('bsry')});
$("#mhgn").click(function(){glry('mhgn')});


// function to append gallery images
function glry(rndm){
    $('.gallery').hide()
    $('.projectTitle').removeClass("currentProject");
    $("."+rndm).show();
    $('#'+rndm).addClass('currentProject')
};

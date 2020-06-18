// on document load, load correct gallery
$(document).ready(function () {
    if ($("#pageTitle").text() == ("Illustration")) { glry('bsry') }
    else if ($("#pageTitle").text() == ("Photography")) { glry('bird') }
    else if ($("#pageTitle").text() == ("Design")) { glry('clab') };
});



// turn off slick when in mobile format
mediaQ = window.matchMedia('(max-width: 850px)');

// on document load, load brsy
$(document).ready(function () {
    $(".projectNav").hide();
    if (mediaQ['matches'] == false) {
        $(".projectNav").show();
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
            arrows: true, dots: false,
            asNavFor: '.projectNav',
            adaptiveHeight: false, variableWidth: false,
            waitForAnimate: false,
            lazyLoad: 'ondemand',
            fade: true,
            speed: 1000,
        });
        if ($("#pageTitle").text() == ("Illustration")) { glry('bsry') }
        else if ($("#pageTitle").text() == ("Photography")) { glry('bird') }
        else if ($("#pageTitle").text() == ("Design")) { glry('clab') };
    }
});




// gallery triggers for illustration
$("#ntlp").click(function () { glry('ntlp') });
$("#bsry").click(function () { glry('bsry') });
$("#mhgn").click(function () { glry('mhgn') });
$("#spce").click(function () { glry('spce') });
$("#rabn").click(function () { glry('rabn') });

//gallery triggers for design
$("#sptn").click(function () { glry('sptn') });
$("#clab").click(function () { glry('clab') });
$("#mnzr").click(function () { glry('mnzr') });
$("#pzza").click(function () { glry('pzza') });
$("#nemn").click(function () { glry('nemn') });

//gallery triggers for photography
$("#bird").click(function () { glry('bird') });
$("#germ").click(function () { glry('germ') });
$("#ldsc").click(function () { glry('ldsc') });
$("#natr").click(function () { glry('natr') });




// function to append gallery images
function glry(rndm) {
    $('.gallery').hide()
    $('.projectTitle').removeClass("currentProject");
    $("." + rndm).show();
    $('#' + rndm).addClass('currentProject')
};
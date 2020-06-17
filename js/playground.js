// on document load, load brsy
$(document).ready(function(){glry('envr')});
// on click, activate respective gallery


$("#envr").click(function(){glry('envr')});
$("#bsry").click(function(){glry('bsry')});
$("#stkr").click(function(){glry('stkr')});
$("#mhgn").click(function(){glry('mhgn')});
$("#misc").click(function(){glry('misc')});

function slickMe(){
    // make project 'slick', this is the big image in the middle of the page
    $(".project").slick({
        arrows: false, dots: true, 
        adaptiveHeight: true, variableWidth: false,
        autoplay: false,
        pauseOnHover: false,
        pauseOnFocus: true,
    });
    // this is the row of images that is the project's nav
    $(".projectNav").slick({
        slidesToScroll: 1,
        autoplaySpeed: 1800,
        asNavFor: '.project',
        initialSlide: 0,
        autoplay: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        
        variableWidth: true,
    });
    //diagnostic slide stuff

    // $('.projectNav').on('afterChange', function(event, slick, currentSlide){
    //     console.log( $(".projectNav").slick('slickCurrentSlide'))
    //     console.log( $(".project").slick('slickCurrentSlide'))
    // });
    $(".projectNav").slick('slickGoTo', 0, true);
    $(".project").slick('slickGoTo', 0, true);

}

// function to append gallery images
function glry(rndm){
    console.log(rndm)
    $(".project").slick('unslick');
    $(".projectNav").slick('unslick');

    $('.gallery').empty(); //clear gallery of all content
    //Append content to gallery and nav
    if (rndm == 'bsry'){
        $('.gallery').append(`
        <section id="bsryProject" class="projectNav">
        <div class="navContainer"><img src="/img/ills/bsry/Artboard 1_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/bsry/Artboard 10_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/bsry/BSRY_mockup_V02_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/bsry/BSRY_poster_series1_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/bsry/BSRY_poster_series2_thumb.jpg" alt=""></div>
        </section>
        <section class=" bsry project">
            <!-- a href creates lightbox gallery; img is full version, nav contains small version of image-->
            <a href="/img/ills/bsry/Artboard 1full.jpg" data-lightbox="1" data-title=""><img src="/img/ills/bsry/Artboard 1full.jpg" alt=""></a>
            <a href="/img/ills/bsry/Artboard 10full.jpg" data-lightbox="2" data-title=""><img src="/img/ills/bsry/Artboard 10full.jpg" alt=""></a>
            <a href="/img/ills/bsry/BSRY_mockup_V02_full.jpg" data-lightbox="3" data-title=""><img src="/img/ills/bsry/BSRY_mockup_V02_full.jpg" alt=""></a>
            <a href="/img/ills/bsry/BSRY_poster_series1_full.jpg" data-lightbox="4" data-title=""><img src="/img/ills/bsry/BSRY_poster_series1_full.jpg" alt=""></a>
            <a href="/img/ills/bsry/BSRY_poster_series2_full.jpg" data-lightbox="5" data-title=""><img src="/img/ills/bsry/BSRY_poster_series2_full.jpg" alt=""></a>
        </section>`
        );
    }
    else if (rndm == 'envr'){
        $('.gallery').append(`
        <section id="bsryProject" class="projectNav">
        <div class="navContainer"><img src="/img/ills/envr/LDSC_moonlight_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/envr/LDSC_waterfall_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/envr/LDSC_palmTree_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/envr/LDSC_paper_1_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/envr/LDSC_desert_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/envr/LDSC_sunset_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/envr/LDSC_kazu_thumb.jpg" alt=""></div>
        </section>
        <section class=" bsry project">
        <a href="/img/ills/envr/LDSC_moonlight_full.jpg" data-lightbox="envr3" data-title=""><img src="/img/ills/envr/LDSC_moonlight_full.jpg" alt=""></a>
        <a href="/img/ills/envr/LDSC_waterfall_full.jpg" data-lightbox="envr7" data-title=""><img src="/img/ills/envr/LDSC_waterfall_full.jpg" alt=""></a>
        <a href="/img/ills/envr/LDSC_palmTree_full.jpg" data-lightbox="envr4" data-title=""><img src="/img/ills/envr/LDSC_palmTree_full.jpg" alt=""></a>
        <a href="/img/ills/envr/LDSC_paper_1_full.jpg" data-lightbox="envr5" data-title=""><img src="/img/ills/envr/LDSC_paper_1_full.jpg" alt=""></a>
        <a href="/img/ills/envr/LDSC_desert_full.jpg" data-lightbox="envr1" data-title=""><img src="/img/ills/envr/LDSC_desert_full.jpg" alt=""></a>
        <a href="/img/ills/envr/LDSC_sunset_full.jpg" data-lightbox="envr6" data-title=""><img src="/img/ills/envr/LDSC_sunset_full.jpg" alt=""></a>
        <a href="/img/ills/envr/LDSC_kazu_full.jpg" data-lightbox="envr2" data-title=""><img src="/img/ills/envr/LDSC_kazu_full.jpg" alt=""></a>
            </section>`
        );
    }
    else if (rndm == 'mhgn'){
        rval = 'mhgn'
        $('.gallery').append(`
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/ills/`+rval+`/Artboard 4_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/Artboard 6_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/Artboard 7_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/Artboard 10_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/Artboard 11_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/Artboard 12_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/Artboard 14_thumb.jpg" alt=""></div>
        </section>
        <section class=" bsry project">
        <a href="/img/ills/`+rval+`/Artboard 4_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/Artboard 4_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/Artboard 6_full.jpg" data-lightbox="`+rval+`2" data-title=""><img src="/img/ills/`+rval+`/Artboard 6_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/Artboard 7_full.jpg" data-lightbox="`+rval+`3" data-title=""><img src="/img/ills/`+rval+`/Artboard 7_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/Artboard 10_full.jpg" data-lightbox="`+rval+`4" data-title=""><img src="/img/ills/`+rval+`/Artboard 10_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/Artboard 11_full.jpg" data-lightbox="`+rval+`5" data-title=""><img src="/img/ills/`+rval+`/Artboard 11_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/Artboard 12_full.jpg" data-lightbox="`+rval+`6" data-title=""><img src="/img/ills/`+rval+`/Artboard 12_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/Artboard 14_full.jpg" data-lightbox="`+rval+`7" data-title=""><img src="/img/ills/`+rval+`/Artboard 14_full.jpg" alt=""></a>
        </section>`
        );
    }
    else if (rndm == 'stkr'){
        rval = 'stkr'
        $('.gallery').append(`
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/ills/`+rval+`/Artboard 4_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/Artboard 6_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/Artboard 7_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/Artboard 10_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/Artboard 11_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/Artboard 12_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/Artboard 14_thumb.jpg" alt=""></div>
        </section>
        <section class=" bsry project">
        <a href="/img/ills/`+rval+`/Artboard 4_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/Artboard 4_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/Artboard 6_full.jpg" data-lightbox="`+rval+`2" data-title=""><img src="/img/ills/`+rval+`/Artboard 6_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/Artboard 7_full.jpg" data-lightbox="`+rval+`3" data-title=""><img src="/img/ills/`+rval+`/Artboard 7_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/Artboard 10_full.jpg" data-lightbox="`+rval+`4" data-title=""><img src="/img/ills/`+rval+`/Artboard 10_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/Artboard 11_full.jpg" data-lightbox="`+rval+`5" data-title=""><img src="/img/ills/`+rval+`/Artboard 11_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/Artboard 12_full.jpg" data-lightbox="`+rval+`6" data-title=""><img src="/img/ills/`+rval+`/Artboard 12_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/Artboard 14_full.jpg" data-lightbox="`+rval+`7" data-title=""><img src="/img/ills/`+rval+`/Artboard 14_full.jpg" alt=""></a>
        </section>`
        );
    }
    slickMe();
    //add class to nav links to show which is currently active
    $('.projectTitle').removeClass("currentProject");
    $('#'+rndm).addClass('currentProject')
};

// everything works
console.log('everything  is fine')
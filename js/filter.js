// on document load, load correct gallery
$(document).ready(function(){
    if ($("#pageTitle").text() == ("Illustration")){glryIlls('bsry');slickMedia()}
    else if ($("#pageTitle").text() == ("Photography")){glryFoto('bird');slickMedia()}
    else if ($("#pageTitle").text() == ("Design")){glryDesn('clab');slickMedia()};
});




// turn off slick when in mobile format
mediaQ = window.matchMedia('(max-width: 850px)');
function slickMedia(){
    if (mediaQ['matches'] == true){
    $(function(){
        $('.project').slick('unslick');
        $('.projectNav').hide();
    });
}};




// gallery triggers for illustration
$("#ntlp").click(function(){glryIlls('ntlp');slickMedia()});
$("#bsry").click(function(){glryIlls('bsry');slickMedia()});
$("#mhgn").click(function(){glryIlls('mhgn');slickMedia()});
$("#spce").click(function(){glryIlls('spce');slickMedia()});

//gallery triggers for design
$("#sptn").click(function(){glryDesn('sptn');slickMedia()});
$("#clab").click(function(){glryDesn('clab');slickMedia()});
$("#mnzr").click(function(){glryDesn('mnzr');slickMedia()});
$("#pzza").click(function(){glryDesn('pzza');slickMedia()});
$("#nemn").click(function(){glryDesn('nemn');slickMedia()});

//gallery triggers for photography
$("#bird").click(function(){glryFoto('bird');slickMedia()});
$("#germ").click(function(){glryFoto('germ');slickMedia()});
$("#ldsc").click(function(){glryFoto('ldsc');slickMedia()});
$("#natr").click(function(){glryFoto('natr');slickMedia()});




//create slick
function slickMe(){
    // make project 'slick', this is the big image in the middle of the page
    $(".project").slick({
        arrows: false, dots: false, 
        adaptiveHeight: false, variableWidth: false,
        autoplay: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        waitForAnimate: false,
        asNavFor: '.projectNav',
        autoPlaySpeed: 2000,
        lazyLoad: 'ondemand',
        fade: true,
        speed: 1000,
    });
    // this is the row of images that is the project's nav
    $(".projectNav").slick({
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        asNavFor: '.project',
        initialSlide: 0,
        autoplay: true,
        dots: true,
        lazyLoad: 'ondemand',
        pauseOnHover: true,
        pauseOnFocus: true,
        centerMode: true,
        focusOnSelect: true,
        waitForAnimate: false,
        variableWidth: true,
    });

    $(".projectNav").slick('slickGoTo', 0, true);
    $(".project").slick('slickGoTo', 0, true);
    $(window).trigger('resize'); // this resets slick height on init, solves the problem of initial slide not having a height

};




//append ills images
function glryIlls(rndm){
    console.log(rndm)
    $(".project").slick('unslick');
    $(".projectNav").slick('unslick');

    $('.gallery').empty(); //clear gallery of all content
    //Append content to gallery and nav
    if (rndm == 'bsry'){
        rval = 'bsry'
        $('.gallery').append(`
        <section class='info'>
        <p>The Bestiary began as a learning experience: I couldn't draw animals, so I set out to learn how. After dozens of hours of ilustration, I finally had a grasp on drawing strange beasts. I wanted to create something out of this collection that could be seen and used, and the Bestiary Card Deck was born.</p>
        <p>After many more hours of concept sketching and design, I had completed the card deck. Along the way, I learned a lot about illustration and design.</p>
        </section>
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/ills/`+rval+`/BSRY_aSpades_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/BSRY_3spades_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/BSRY_5spades_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/BSRY_kClubs_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/BSRY_mockup_V02_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/BSRY_poster_series1_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/BSRY_poster_series2_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/BSRY_all_thumb.jpg" alt=""></div>
        </section>
        <section class=" bsry project">
        <a href="/img/ills/`+rval+`/BSRY_aSpades_full.jpg" data-lightbox="`+rval+`3" data-title=""><img src="/img/ills/`+rval+`/BSRY_aSpades_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/BSRY_3spades_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/BSRY_3spades_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/BSRY_5spades_full.jpg" data-lightbox="`+rval+`2" data-title=""><img src="/img/ills/`+rval+`/BSRY_5spades_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/BSRY_kClubs_full.jpg" data-lightbox="`+rval+`4" data-title=""><img src="/img/ills/`+rval+`/BSRY_kClubs_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/BSRY_mockup_V02_full.jpg" data-lightbox="`+rval+`5" data-title=""><img src="/img/ills/`+rval+`/BSRY_mockup_V02_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/BSRY_poster_series1_full.jpg" data-lightbox="`+rval+`6" data-title=""><img src="/img/ills/`+rval+`/BSRY_poster_series1_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/BSRY_poster_series2_full.jpg" data-lightbox="`+rval+`7" data-title=""><img src="/img/ills/`+rval+`/BSRY_poster_series2_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/BSRY_all_full.jpg" data-lightbox="`+rval+`8" data-title=""><img src="/img/ills/`+rval+`/BSRY_all_full.jpg" alt=""></a>
        </section>
        `
        );
    }
    else if (rndm == 'ntlp'){
        rval = 'ntlp'
        $('.gallery').append(`
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/ills/`+rval+`/ntlp1_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/ntlp2_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/ntlp3_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/ntlp4_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/ntlp5_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/ntlp6_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/ntlp8_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/ntlp9_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/ntlp7_thumb.jpg" alt=""></div>
        </section>
        <section class=" bsry project">
        <a href="/img/ills/`+rval+`/ntlp1_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/ntlp1_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/ntlp2_full.jpg" data-lightbox="`+rval+`2" data-title=""><img src="/img/ills/`+rval+`/ntlp2_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/ntlp3_full.jpg" data-lightbox="`+rval+`3" data-title=""><img src="/img/ills/`+rval+`/ntlp3_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/ntlp4_full.jpg" data-lightbox="`+rval+`4" data-title=""><img src="/img/ills/`+rval+`/ntlp4_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/ntlp5_full.jpg" data-lightbox="`+rval+`5" data-title=""><img src="/img/ills/`+rval+`/ntlp5_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/ntlp6_full.jpg" data-lightbox="`+rval+`6" data-title=""><img src="/img/ills/`+rval+`/ntlp6_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/ntlp8_full.jpg" data-lightbox="`+rval+`7" data-title=""><img src="/img/ills/`+rval+`/ntlp8_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/ntlp9_full.jpg" data-lightbox="`+rval+`8" data-title=""><img src="/img/ills/`+rval+`/ntlp9_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/ntlp7_full.jpg" data-lightbox="`+rval+`9" data-title=""><img src="/img/ills/`+rval+`/ntlp7_full.jpg" alt=""></a>
        </section>
        <p><em>*Not affiliated in any way with the National Parks</em></p>
        `
        );
    }
    else if (rndm == 'mhgn'){
        rval = 'mhgn'
        $('.gallery').append(`
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/ills/`+rval+`/MHGN_4_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/MHGN_7_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/MHGN_8_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/MHGN_11_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/MHGN_12_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/MHGN_13_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/MHGN_17_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/MHGN_19_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/MHGN_23_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/MHGN_24_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/MHGN_27_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/MHGN_28_thumb.jpg" alt=""></div>
        </section>
        <section class=" bsry project">
        <a href="/img/ills/`+rval+`/MHGN_4_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/MHGN_4_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/MHGN_7_full.jpg" data-lightbox="`+rval+`2" data-title=""><img src="/img/ills/`+rval+`/MHGN_7_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/MHGN_8_full.jpg" data-lightbox="`+rval+`3" data-title=""><img src="/img/ills/`+rval+`/MHGN_8_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/MHGN_11_full.jpg" data-lightbox="`+rval+`4" data-title=""><img src="/img/ills/`+rval+`/MHGN_11_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/MHGN_12_full.jpg" data-lightbox="`+rval+`5" data-title=""><img src="/img/ills/`+rval+`/MHGN_12_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/MHGN_13_full.jpg" data-lightbox="`+rval+`6" data-title=""><img src="/img/ills/`+rval+`/MHGN_13_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/MHGN_17_full.jpg" data-lightbox="`+rval+`7" data-title=""><img src="/img/ills/`+rval+`/MHGN_17_full.jpg" alt=""></a>    
        <a href="/img/ills/`+rval+`/MHGN_19_full.jpg" data-lightbox="`+rval+`8" data-title=""><img src="/img/ills/`+rval+`/MHGN_19_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/MHGN_23_full.jpg" data-lightbox="`+rval+`9" data-title=""><img src="/img/ills/`+rval+`/MHGN_23_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/MHGN_24_full.jpg" data-lightbox="`+rval+`10" data-title=""><img src="/img/ills/`+rval+`/MHGN_24_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/MHGN_27_full.jpg" data-lightbox="`+rval+`11" data-title=""><img src="/img/ills/`+rval+`/MHGN_27_full.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/MHGN_28_full.jpg" data-lightbox="`+rval+`12" data-title=""><img src="/img/ills/`+rval+`/MHGN_28_full.jpg" alt=""></a>
        </section>`
        );
    }
    else if (rndm == 'spce'){
        rval = 'spce'
        $('.gallery').append(`
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/ills/`+rval+`/SPCE_mockup_V01_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/SPCE_aSpades_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/SPCE_aDiamond_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/SPCE_4Diamond_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/SPCE_10Diamond_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/ills/`+rval+`/SPCE_kDiamond_thumb.jpg" alt=""></div>
        </section>
        <section class=" bsry project">
        <a href="/img/ills/`+rval+`/SPCE_mockup_V01_thumb.jpg" data-lightbox="`+rval+`5" data-title=""><img src="/img/ills/`+rval+`/SPCE_mockup_V01_thumb.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/SPCE_aSpades_thumb.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/SPCE_aSpades_thumb.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/SPCE_aDiamond_thumb.jpg" data-lightbox="`+rval+`2" data-title=""><img src="/img/ills/`+rval+`/SPCE_aDiamond_thumb.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/SPCE_4Diamond_thumb.jpg" data-lightbox="`+rval+`3" data-title=""><img src="/img/ills/`+rval+`/SPCE_4Diamond_thumb.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/SPCE_10Diamond_thumb.jpg" data-lightbox="`+rval+`4" data-title=""><img src="/img/ills/`+rval+`/SPCE_10Diamond_thumb.jpg" alt=""></a>
        <a href="/img/ills/`+rval+`/SPCE_kDiamond_thumb.jpg" data-lightbox="`+rval+`7" data-title=""><img src="/img/ills/`+rval+`/SPCE_kDiamond_thumb.jpg" alt=""></a>
        </section>`
        );
    }
    slickMe();
    //add class to nav links to show which is currently active
    $('.projectTitle').removeClass("currentProject");
    $('#'+rndm).addClass('currentProject')
};

//append desn images
function glryDesn(rndm){
    console.log(rndm)
    $(".project").slick('unslick');
    $(".projectNav").slick('unslick');

    $('.gallery').empty(); //clear gallery of all content
    //Append content to gallery and nav
    if (rndm == 'sptn'){
        rval = 'sptn'
        $('.gallery').append(`
        <section class='info'>
        <p>Spartan was a freetime project to create a sports brand.</p>
        </section>
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/desn/`+rval+`/SPTN_logo_mckp_hat_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/SPTN_logo_mckp_shrt_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/SPTN_logo_ills_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/SPTN_logo_silhthumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/SPTN_logo_vars_thumb.jpg" alt=""></div>

        </section>
        <section class=" `+rval+` project">
        <a href="/img/desn/`+rval+`/SPTN_logo_mckp_hat_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/desn/`+rval+`/SPTN_logo_mckp_hat_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/SPTN_logo_mckp_shrt_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/desn/`+rval+`/SPTN_logo_mckp_shrt_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/SPTN_logo_ills_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/desn/`+rval+`/SPTN_logo_ills_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/SPTN_logo_silhfull.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/desn/`+rval+`/SPTN_logo_silhfull.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/SPTN_logo_vars_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/desn/`+rval+`/SPTN_logo_vars_full.jpg" alt=""></a>

        </section>
        `
        );
    }
    else if (rndm == 'clab'){
        rval = 'clab'
        $('.gallery').append(`
        <section class="info">
        <p>The CoLab project was my senior capstone project at Eastern Washington University. Our task was to create a brand for and design the programming for a collaborative center in a new univeristy building in downtown Spokane. My main task in this project was creating the branding for the space.</p>
        <p>This project required extensive research, site visits, and interviews/surveys with students, professors, and community members in order to put together a plan for how the CoLab would best be used.</p>
        </section>
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/desn/`+rval+`/CLAB_mockup_logo_01_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/CLAB_mockup_logo_02_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/CLAB_mockup_lanyard_01_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/CLAB_mockup_lanyard_02_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/CLAB_styleGuide_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/CLAB_diagram_thumb.jpg" alt=""></div>
        </section>
        <section class=" bsry project">
        <a href="/img/desn/`+rval+`/CLAB_mockup_logo_01_full.jpg" data-lightbox="`+rval+`2" data-title=""><img src="/img/desn/`+rval+`/CLAB_mockup_logo_01_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/CLAB_mockup_logo_02_full.jpg" data-lightbox="`+rval+`3" data-title=""><img src="/img/desn/`+rval+`/CLAB_mockup_logo_02_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/CLAB_mockup_lanyard_01_full.jpg" data-lightbox="`+rval+`4" data-title=""><img src="/img/desn/`+rval+`/CLAB_mockup_lanyard_01_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/CLAB_mockup_lanyard_02_full.jpg" data-lightbox="`+rval+`5" data-title=""><img src="/img/desn/`+rval+`/CLAB_mockup_lanyard_02_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/CLAB_styleGuide_full.jpg" data-lightbox="`+rval+`6" data-title=""><img src="/img/desn/`+rval+`/CLAB_styleGuide_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/CLAB_diagram_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/desn/`+rval+`/CLAB_diagram_full.jpg" alt=""></a>
        </section>
        `
        );
    }
    else if (rndm == 'mnzr'){
        rval = 'mnzr'
        $('.gallery').append(`
        <section class='info'>
        <p>The goal of the Manzanar project was to create a photobook that presented the works of Dorothea Lang and Ansel Adams with respect to the material. The subject of the photobook was Manzanar, an internment camp during World War II. </p>
        </section>
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/desn/`+rval+`/MNZR_mockup_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/MNZR_page06_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/MNZR_page10_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/MNZR_page18_thumb.jpg" alt=""></div>
        </section>
        <section class=" bsry project">
        <a href="/img/desn/`+rval+`/MNZR_mockup_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/desn/`+rval+`/MNZR_mockup_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/MNZR_page06_full.jpg" data-lightbox="`+rval+`2" data-title=""><img src="/img/desn/`+rval+`/MNZR_page06_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/MNZR_page10_full.jpg" data-lightbox="`+rval+`3" data-title=""><img src="/img/desn/`+rval+`/MNZR_page10_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/MNZR_page18_full.jpg" data-lightbox="`+rval+`4" data-title=""><img src="/img/desn/`+rval+`/MNZR_page18_full.jpg" alt=""></a>
        </section>
        `
        );
    }
    else if (rndm == 'pzza'){
        rval = 'pzza'
        $('.gallery').append(`
        <section class='info'>
        <p>A typography class proect to redesign the menu's for Bennedito's Brewpub in Spokane, WA. The main challenge of the task was to fit to much content into a specified area, while maintaing the Brewpub's aesthetic.</p>
        </section>
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/desn/`+rval+`/PZZA_mockup_menu_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/PZZA_pizza_01_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/PZZA_pizza_02_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/PZZA_brew_01_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/PZZA_brew_02_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/PZZA_beer_thumb.jpg" alt=""></div>
        </section>
        <section class=" bsry project">
        <a href="/img/desn/`+rval+`/PZZA_mockup_menu_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/desn/`+rval+`/PZZA_mockup_menu_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/PZZA_pizza_01_full.jpg" data-lightbox="`+rval+`2" data-title=""><img src="/img/desn/`+rval+`/PZZA_pizza_01_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/PZZA_pizza_02_full.jpg" data-lightbox="`+rval+`3" data-title=""><img src="/img/desn/`+rval+`/PZZA_pizza_02_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/PZZA_brew_01_full.jpg" data-lightbox="`+rval+`4" data-title=""><img src="/img/desn/`+rval+`/PZZA_brew_01_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/PZZA_brew_02_full.jpg" data-lightbox="`+rval+`5" data-title=""><img src="/img/desn/`+rval+`/PZZA_brew_02_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/PZZA_beer_full.jpg" data-lightbox="`+rval+`6" data-title=""><img src="/img/desn/`+rval+`/PZZA_beer_full.jpg" alt=""></a>
        </section>
        `
        );
    }
    else if (rndm == 'nemn'){
        rval = 'nemn'
        $('.gallery').append(`
        <section class='info'>
        <p>Nemean Manes is a class project, wherein I was tasked with design a product that solved a problem, and to create the branding for the product as well.</p>
        </section>
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/desn/`+rval+`/NEMN_concept_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/NEMN_logo_thumb.jpg"_thumb alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/NEMN_styleGuide_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/NEMN_mockup_BC_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/NEMN_mockup_postcard_thumb.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/desn/`+rval+`/NEMN_production_thumb.jpg" alt=""></div>
        </section>
        <section class=" `+rval+` project">
        <a href="/img/desn/`+rval+`/NEMN_concept_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/desn/`+rval+`/NEMN_concept_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/NEMN_logo_full.jpg" data-lightbox="`+rval+`2" data-title=""><img src="/img/desn/`+rval+`/NEMN_logo_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/NEMN_styleGuide_full.jpg" data-lightbox="`+rval+`6" data-title=""><img src="/img/desn/`+rval+`/NEMN_styleGuide_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/NEMN_mockup_BC_full.jpg" data-lightbox="`+rval+`3" data-title=""><img src="/img/desn/`+rval+`/NEMN_mockup_BC_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/NEMN_mockup_postcard_full.jpg" data-lightbox="`+rval+`4" data-title=""><img src="/img/desn/`+rval+`/NEMN_mockup_postcard_full.jpg" alt=""></a>
        <a href="/img/desn/`+rval+`/NEMN_production_full.jpg" data-lightbox="`+rval+`5" data-title=""><img src="/img/desn/`+rval+`/NEMN_production_full.jpg" alt=""></a>
        </section>
        `
        );
    }
    slickMe();
    //add class to nav links to show which is currently active
    $('.projectTitle').removeClass("currentProject");
    $('#'+rndm).addClass('currentProject')
};

//append foto images
function glryFoto(rndm){
    console.log(rndm)
    $(".project").slick('unslick');
    $(".projectNav").slick('unslick');

    $('.gallery').empty(); //clear gallery of all content
    //Append content to gallery and nav
    if (rndm == 'bird'){
        rval = 'bird'
        $('.gallery').append(`
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC5505.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC5568.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC6369.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC7597.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC6803.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC9918.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC7440.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC9810.jpg" alt=""></div>
        </section>
        <section class=" `+rval+` project">
        <a href="/img/foto/`+rval+`/DSC5505.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/foto/`+rval+`/DSC5505.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC5568.jpg" data-lightbox="`+rval+`2" data-title=""><img src="/img/foto/`+rval+`/DSC5568.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC6369.jpg" data-lightbox="`+rval+`3" data-title=""><img src="/img/foto/`+rval+`/DSC6369.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC7597.jpg" data-lightbox="`+rval+`7" data-title=""><img src="/img/foto/`+rval+`/DSC7597.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC6803.jpg" data-lightbox="`+rval+`4" data-title=""><img src="/img/foto/`+rval+`/DSC6803.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC9918.jpg" data-lightbox="`+rval+`9" data-title=""><img src="/img/foto/`+rval+`/DSC9918.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC7440.jpg" data-lightbox="`+rval+`6" data-title=""><img src="/img/foto/`+rval+`/DSC7440.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC9810.jpg" data-lightbox="`+rval+`8" data-title=""><img src="/img/foto/`+rval+`/DSC9810.jpg" alt=""></a>
        </section>
        `
        );
    }
    else if (rndm == 'germ'){
        rval = 'germ'
        $('.gallery').append(`
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC7685.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC7728.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC7809.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC7999.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC8095.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC8149.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC8289.jpg" alt=""></div>
        </section>
        <section class=" `+rval+` project">
        <a href="/img/foto/`+rval+`/DSC7685.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/foto/`+rval+`/DSC7685.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC7728.jpg" data-lightbox="`+rval+`2" data-title=""><img src="/img/foto/`+rval+`/DSC7728.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC7809.jpg" data-lightbox="`+rval+`3" data-title=""><img src="/img/foto/`+rval+`/DSC7809.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC7999.jpg" data-lightbox="`+rval+`4" data-title=""><img src="/img/foto/`+rval+`/DSC7999.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC8095.jpg" data-lightbox="`+rval+`5" data-title=""><img src="/img/foto/`+rval+`/DSC8095.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC8149.jpg" data-lightbox="`+rval+`6" data-title=""><img src="/img/foto/`+rval+`/DSC8149.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC8289.jpg" data-lightbox="`+rval+`7" data-title=""><img src="/img/foto/`+rval+`/DSC8289.jpg" alt=""></a>
        </section>`
        );
    }
    else if (rndm == 'natr'){
        rval = 'natr'
        $('.gallery').append(`
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC5346.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC6964.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC7455.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC8492.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC8747.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC8904.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC8985.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC9365.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC9428.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC9477.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC9871.jpg" alt=""></div>
        </section>
        <section class=" `+rval+` project">
        <a href="/img/foto/`+rval+`/DSC5346.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/foto/`+rval+`/DSC5346.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC6964.jpg" data-lightbox="`+rval+`2" data-title=""><img src="/img/foto/`+rval+`/DSC6964.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC7455.jpg" data-lightbox="`+rval+`4" data-title=""><img src="/img/foto/`+rval+`/DSC7455.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC8492.jpg" data-lightbox="`+rval+`5" data-title=""><img src="/img/foto/`+rval+`/DSC8492.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC8747.jpg" data-lightbox="`+rval+`6" data-title=""><img src="/img/foto/`+rval+`/DSC8747.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC8904.jpg" data-lightbox="`+rval+`7" data-title=""><img src="/img/foto/`+rval+`/DSC8904.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC8985.jpg" data-lightbox="`+rval+`8" data-title=""><img src="/img/foto/`+rval+`/DSC8985.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC9365.jpg" data-lightbox="`+rval+`9" data-title=""><img src="/img/foto/`+rval+`/DSC9365.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC9428.jpg" data-lightbox="`+rval+`10" data-title=""><img src="/img/foto/`+rval+`/DSC9428.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC9477.jpg" data-lightbox="`+rval+`11" data-title=""><img src="/img/foto/`+rval+`/DSC9477.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC9871.jpg" data-lightbox="`+rval+`12" data-title=""><img src="/img/foto/`+rval+`/DSC9871.jpg" alt=""></a>
        </section>`
        );
    }
    else if (rndm == 'ldsc'){
        rval = 'ldsc'
        $('.gallery').append(`
        <section id="`+rval+`Project" class="projectNav">
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC7033.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC7473.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC7901.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC8500.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC8972.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC9072.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC9079.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC9082.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC9205.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC9222.jpg" alt=""></div>
        <div class="navContainer"><img src="/img/foto/`+rval+`/DSC9323.jpg" alt=""></div>
        </section>
        <section class=" `+rval+` project">
        <a href="/img/foto/`+rval+`/DSC7033.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/foto/`+rval+`/DSC7033.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC7473.jpg" data-lightbox="`+rval+`2" data-title=""><img src="/img/foto/`+rval+`/DSC7473.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC7901.jpg" data-lightbox="`+rval+`3" data-title=""><img src="/img/foto/`+rval+`/DSC7901.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC8500.jpg" data-lightbox="`+rval+`4" data-title=""><img src="/img/foto/`+rval+`/DSC8500.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC8972.jpg" data-lightbox="`+rval+`5" data-title=""><img src="/img/foto/`+rval+`/DSC8972.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC9072.jpg" data-lightbox="`+rval+`6" data-title=""><img src="/img/foto/`+rval+`/DSC9072.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC9079.jpg" data-lightbox="`+rval+`7" data-title=""><img src="/img/foto/`+rval+`/DSC9079.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC9082.jpg" data-lightbox="`+rval+`8" data-title=""><img src="/img/foto/`+rval+`/DSC9082.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC9205.jpg" data-lightbox="`+rval+`9" data-title=""><img src="/img/foto/`+rval+`/DSC9205.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC9222.jpg" data-lightbox="`+rval+`10" data-title=""><img src="/img/foto/`+rval+`/DSC9222.jpg" alt=""></a>
        <a href="/img/foto/`+rval+`/DSC9323.jpg" data-lightbox="`+rval+`11" data-title=""><img src="/img/foto/`+rval+`/DSC9323.jpg" alt=""></a>
        </section>`
        );
    }
    slickMe();
    //add class to nav links to show which is currently active
    $('.projectTitle').removeClass("currentProject");
    $('#'+rndm).addClass('currentProject')
};




//raben is special, I didn't want him to be skipped over by that pesky autoplay...
$("#rabn").click(function(){
    $(".project").slick('unslick');
    $(".projectNav").slick('unslick');
    $('.gallery').empty();
    rval = 'rabn'
    $('.gallery').append(`
    <section class=" bsry project">
    <a href="/img/ills/`+rval+`/RABN_1_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/RABN_1_full.jpg" alt=""></a>
    <a href="/img/ills/`+rval+`/RABN_2_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/RABN_2_full.jpg" alt=""></a>
    <a href="/img/ills/`+rval+`/RABN_3_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/RABN_3_full.jpg" alt=""></a>
    <a href="/img/ills/`+rval+`/RABN_4_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/RABN_4_full.jpg" alt=""></a>
    <a href="/img/ills/`+rval+`/RABN_5_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/RABN_5_full.jpg" alt=""></a>
    <a href="/img/ills/`+rval+`/RABN_6_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/RABN_6_full.jpg" alt=""></a>
    <a href="/img/ills/`+rval+`/RABN_7_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/RABN_7_full.jpg" alt=""></a>
    <a href="/img/ills/`+rval+`/RABN_8_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/RABN_8_full.jpg" alt=""></a>
    <a href="/img/ills/`+rval+`/RABN_10_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/RABN_10_full.jpg" alt=""></a>
    <a href="/img/ills/`+rval+`/RABN_11_full.jpg" data-lightbox="`+rval+`1" data-title=""><img src="/img/ills/`+rval+`/RABN_11_full.jpg" alt=""></a>
    </section>`
    );
    $(".project").slick({
        arrows: true, dots: true, 
        adaptiveHeight: true, variableWidth: false,
        autoplay: false,
        waitForAnimate: false,
        fade: false,
        speed: 1000,
    });
    if (mediaQ['matches'] == true){
        $(function(){
            $('.project').slick('unslick');
        });
    };
    $('.projectTitle').removeClass("currentProject");
    $('#rabn').addClass('currentProject');
    $(window).trigger('resize');
    // this is the row of images that is the project's nav

    // $(".project").slick('slickGoTo', 0, true);

});
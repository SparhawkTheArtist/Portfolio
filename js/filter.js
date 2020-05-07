// populate gallery and highlight current page
function filter(rndm){
    
    // clear gallery tag to make way for new gallery content
    $('#gallery').empty();
    rval = rndm['value']
    rname = rndm['name']
    
    // remove styling for previous project
    for (i=0;i<arrays.length;i++){
        document.querySelector("#"+arrays[i]).classList.remove('currentProject')
    }
    // add styling for current project
    document.querySelector("#"+rname).classList.add('currentProject')
    // append images to gallery based on page and project
    for ( let i =0; i < rval.length; i++){
        newImg = ('<a href="' + rval[i] +'" data-lightbox="gallery" data-title="" class="thumb item"' + i + '"><img src="' + rval[i] + '"></a>');
        $("#gallery").hide().append(newImg).delay(500).fadeIn(1500);
    };
};

// for ills page
if (document.querySelector('#pageTitle').textContent ==("Illustration")){
    // create arrays
    envr = {name:'envr', value:[]}
    bsry = {name:'bsry', value:[]}
    misc = {name:'misc', value:[]}
    mhgn = {name:'mhgn', value:[]}
    stkr = {name:'stkr', value:[]}
    arrays = ['envr', 'bsry', 'misc', 'mhgn', 'stkr']

    // automatically populate arrasy from folders
    for (i = 1; i < 16; i++){
        mhgn['value'].push("/img/ills/mhgn/mhgn" + i + ".jpg")
    }
    for (i = 1; i < 8; i++){
        envr['value'].push("/img/ills/envr/envr" + i + ".jpg")
    }
    for (i = 1; i < 12; i++){
        misc['value'].push("/img/ills/misc/misc" + i + ".jpg")
    }
    for (i = 1; i < 10; i++){
        bsry['value'].push("/img/ills/bsry/bsry" + i + ".jpg")
    }
    for (i = 1; i < 23; i++){
        stkr['value'].push("/img/ills/stkr/stkr" + i + ".jpg")
    }
    
    
    // listen for click event to filter
    filter(envr)
    document.querySelector("#envr").addEventListener( 'click', () =>{
        filter(envr);
        console.log(envr);
    })
    document.querySelector('#misc').addEventListener( 'click', () =>{
        filter(misc);
        console.log(misc);
    })
    document.querySelector('#bsry').addEventListener( 'click', () =>{
        filter(bsry);
        console.log(bsry);
    })
    document.querySelector('#mhgn').addEventListener( 'click', () =>{
        filter(mhgn);
        console.log(mhgn);
    })
    document.querySelector('#stkr').addEventListener( 'click', () =>{
        filter(stkr);
        console.log(stkr);
    })
}


// for foto page
if (document.querySelector('#pageTitle').textContent ==("Photography")){
    bird = {name:'bird', value:[]}
    germ = {name:'germ', value:[]}
    ldsc = {name:'ldsc', value:[]}
    mscf = {name:'mscf', value:[]}
    natr = {name:'natr', value:[]}
    ylst = {name:'ylst', value:[]}
    arrays = ['bird','germ','ldsc','mscf','natr','ylst'];

    for (i = 1; i < 23; i++){
        bird['value'].push("/img/foto/BIRD/bird" + i + ".jpg")
    }
    for (i = 1; i < 25; i++){
        germ['value'].push("/img/foto/GERM/germ" + i + ".jpg")
    }
    for (i = 1; i < 7; i++){
        ldsc['value'].push("/img/foto/LDSC/ldsc" + i + ".jpg")
    }
    for (i = 1; i < 5; i++){
        mscf['value'].push("/img/foto/MSCF/mscf" + i + ".jpg")
    }
    for (i = 1; i < 68; i++){
        natr['value'].push("/img/foto/NATR/natr" + i + ".jpg")
    }
    for (i = 1; i < 19; i++){
        ylst['value'].push("/img/foto/YLST/ylst" + i + ".jpg")
    }


    filter(bird)
    document.querySelector("#bird").addEventListener( 'click', () =>{
        filter(bird);
        console.log(bird);
    })
    document.querySelector('#germ').addEventListener( 'click', () =>{
        filter(germ);
        console.log(germ);
    })
    document.querySelector('#ldsc').addEventListener( 'click', () =>{
        filter(ldsc);
        console.log(ldsc);
    })
    document.querySelector('#natr').addEventListener( 'click', () =>{
        filter(natr);
        console.log(natr);
    })
    document.querySelector('#ylst').addEventListener( 'click', () =>{
        filter(ylst);
        console.log(ylst);
    })
    document.querySelector('#mscf').addEventListener( 'click', () =>{
        filter(mscf);
        console.log(mscf);
    })
}



// for desn page
if (document.querySelector('#pageTitle').textContent ==("Design")){
    spar = {name:'spar', value:[]}
    gdte = {name:'gdte', value:[]}
    rjse = {name:'rjse', value:[]}
    sptn = {name:'sptn', value:[]}
    iccf = {name:'iccf', value:[]}
    nemn = {name:'nemn', value:[]}
    arrays = ['spar','gdte','rjse','sptn','iccf','nemn'];

    for (i = 1; i < 8; i++){
        spar['value'].push("/img/desn/spar/spar" + i + ".jpg")
    }
    for (i = 1; i < 6; i++){
        gdte['value'].push("/img/desn/gdte/gdte" + i + ".jpg")
    }
    for (i = 1; i < 5; i++){
        rjse['value'].push("/img/desn/rjse/rjse" + i + ".jpg")
    }
    for (i = 1; i < 7; i++){
        sptn['value'].push("/img/desn/sptn/sptn" + i + ".jpg")
    }
    for (i = 1; i < 5; i++){
        iccf['value'].push("/img/desn/iccf/iccf" + i + ".jpg")
    }
    for (i = 1; i < 5; i++){
        nemn['value'].push("/img/desn/nemn/nemn" + i + ".jpg")
    }


    filter(spar)
    document.querySelector("#spar").addEventListener( 'click', () =>{
        filter(spar);
        $('.info').empty();
        $(".info").append(`<section class="info"><p>My personal logo and brand, Sparhawk began as a class project that I came to realize was a good fit for my own brand.</p>
        <h4>Project Type:</h4>
        <p>Logo Design/Branding</p>
        <h4>Tools used</h4>
        <ul>
          <li>Adobe Illustrator</li>
        </ul></section>`)
        console.log(spar);
    })
    document.querySelector('#gdte').addEventListener( 'click', () =>{
        filter(gdte);
        $('.info').empty();
        $(".info").append(`<section class="info"><p>A logo that I designed for a fake tea company.</p>
        <h4>Project Type:</h4>
        <p>Logo Design/Branding</p>
        <h4>Tools used</h4>
        <ul>
          <li>Adobe Illustrator</li>
          <li>Wacom Intuos tablet</li>
        </ul></section>`)

        console.log(gdte);
    })
    document.querySelector('#rjse').addEventListener( 'click', () =>{
        filter(rjse);
        $('.info').empty();
        $(".info").append(`<section class="info"><p>A branding design project for a freelance copyeditor working primarily on natural science journal articles.</p>
        <h4>Project Type:</h4>
        <p>Logo Design/Branding</p>
        <h4>Tools used</h4>
        <ul>
          <li>Adobe Illustrator</li>
          <li>Adobe InDesign</li>
        </ul></section>`)
        console.log(rjse);
    })
    document.querySelector('#iccf').addEventListener( 'click', () =>{
        filter(iccf);
        $('.info').empty();
        $(".info").append(`<section class="info"><p>A series of trail signs that I illustrated for a class project, working with the Indian Creek Community Forest in Washington State.</p>
        <h4>Project Type:</h4>
        <p>Trail signage <br> Illustration</p>
        <h4>Tools used</h4>
        <ul>
          <li>Adobe Illustrator</li>
          <li>Pencil & paper</li>
        </ul></section>`)
        console.log(iccf);
    })
    document.querySelector('#sptn').addEventListener( 'click', () =>{
        filter(sptn);
        $('.info').empty();
        $(".info").append(`<section class="info"><p>A logo that I designed for a fake sportswear company.</p>
        <h4>Project Type:</h4>
        <p>Logo Design/Branding</p>
        <h4>Tools used</h4>
        <ul>
          <li>Adobe Illustrator</li>
          <li>Wacom Intuos tablet</li>
        </ul></section>`)
        console.log(sptn);
    })
    document.querySelector('#nemn').addEventListener( 'click', () =>{
        filter(nemn);
        $('.info').empty();
        $(".info").append(`<section class="info"><p>A logo that I designed for a production assignment, building a brand for a product in order to solve a problem and learn about packaging design in the process. </p>
        <h4>Project Type:</h4>
        <p>Logo Design/Branding <br>Production/Packaging design</p>
        <h4>Tools used</h4>
        <ul>
          <li>Adobe Illustrator</li>
          <li>Wacom Intuos tablet</li>
        </ul>
        <h4>Process Document</h4>
        <p>Documentation of my process in branding, production research, and designing of brand identity and packaging. </p>
        <p><a href="https://drive.google.com/file/d/1l0OrNTzi40TwIpoNjOaW4ULDJIFqne_y/view?usp=sharing" target="_blank" rel="noopener noreferrer">NEMN_processDocument_191208.pdf</a></p>
</section>`)
        console.log(nemn);
    })
}

// for (i=0; i < arrays.length; i++){
//     rndm = arrays[i]
//     newArr= []
//     for (g = 1; g < 5 ; g++){
//         newVar = ("/img/ills/"+rndm+'/'+rndm+g+('.png' || '.jpg'))
//         console.log(newVar)
//         if (typeof newVar !== 'undefined'){
//             newArr.push(newVar);
//         };
//         // console.log(newArr)
//     }
// };
// console.log(newArr)
// console.log(mhgn)
// console.log(stkr)
// console.log(misc)
// console.log(envr)

// for (i=0; i < arrays.length; i++){
//     rndm = arrays[i]
//     ID = document.querySelector('#' + rndm)
//     console.log(ID)
//     ID.addEventListener( 'click', () =>{
//         filter();
//         console.log(envr);
//     });
// }

    




// everything works
console.log('everything  is fine')
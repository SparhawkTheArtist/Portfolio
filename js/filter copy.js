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
        $("#gallery2").hide().append(newImg).delay(500).fadeIn(1500);
    };
};



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
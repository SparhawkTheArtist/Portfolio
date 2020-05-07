mediaQuery = window.matchMedia("(max-width: 850px)");


navDisplay()



// window.addEventListener('resize', ()=>{navDisplay()});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#menu").style.top = "0";
  } else {
    document.querySelector("#menu").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}



// back to top button fade in
function backToTop(){
    if (window.scrollY < 300){
        document.querySelector('#toTop').style.bottom = '-100%';
    }
    else {
        document.querySelector('#toTop').style.bottom = '0';
    };
};
window.onload = backToTop



// highlight active page in nav
function activePage(){
    if ($('#pageTitle').text() == ('Story')){
        $('.nav5').addClass('activePage');
    }
    else if ($('#pageTitle').text() == ('Design')){
        $('.nav1').addClass('activePage');
    }
    else if ($('#pageTitle').text() == ('Motion Design')){
        $('.nav3').addClass('activePage');
    }
    else if ($('#pageTitle').text() == ('Illustration')){
        $('.nav2').addClass('activePage');
    }
    else if ($('#pageTitle').text() == ('Photography')){
        $('.nav4').addClass('activePage');
    }
    else if ($('#pageTitle').text() == ('Get in Contact')){
        $('.nav6').addClass('activePage');
    };
}


// display nav 
function navDisplay() {
    // display nav in mobile
    if (mediaQuery['matches'] == true){
        $(function(){
            $("#nav-placeholder").empty();

            $("#nav-placeholder").append(`<aside class="mobileNav">
                
                <nav>
                    <ul>
                    <li><a href="index.html" class="nav2 navButton2">Illustration</a></li>
                    <li><a href="desn.html" class="nav1 navButton2">Design</a></li>
                    <li><a href="foto.html" class="nav4 navButton2">Photography</a></li>
                    <li><a href="motn.html" class="nav3 navButton2">Motion Design</a></li>
                    <li><a href="stry.html" class="nav5 navButton2">Story</a></li>
                    <li><a href="cntc.html" class="nav6 navButton2">Get in Contact</a></li>

                    </ul>
                </nav>

                <footer>
                <p>Cooper Smith</p>
                <p>Copyright &copy; 2015-<span class="year">2020</span></p>
                <p>sparhawktheartist@gmail.com</p>
                <p>IG: @Sparhawktheartist</p>
                </footer>
            </aside>
            <a href="#top" id="toTop">Back to top</a>`
            );
            activePage()
        });
        $(function(){
            $('main').prepend('<a href="#" id="menu" class="navButton">Menu</a>')
        });
    };
    window.addEventListener('scroll', backToTop);
    $('.filters a').addClass('mobile')

    

// display nav in web
if (mediaQuery['matches'] == false){
    $(function(){
        $("#nav-placeholder").empty();
        $("#nav-placeholder").append(`<aside id="webNav"> 
            <img src="/img/desn/spar/SPAR_logo_illustrated.png" alt="Sparhawk Logo">
            <nav>
            <ul>
                <li><a href="index.html" class="nav2">Illustration</a></li>
                <li><a href="desn.html" class="nav1">Design</a></li>
                <li><a href="foto.html" class="nav4">Photography</a></li>
                <li><a href="motn.html" class="nav3">Motion Design</a></li>
                <li><a href="stry.html" class="nav5">Story</a></li>
                <li><a href="cntc.html" class="nav6">Get in Contact</a></li>
            </ul>
            </nav>
            <footer>
            <p>Cooper Smith</p>
            <p>Copyright &copy; 2015-<span class="year">2020</span></p>
            <p>sparhawktheartist@gmail.com</p>
            <p>IG: @Sparhawktheartist</p>
            </footer>
            </aside>`
            );
            // highlight current page link in nav
            activePage()
        });
    };
};



// open menu on mobile nav
$('main').on('click', '.navButton', function(){
    $('.mobileNav').css('z-index','10');
    $('.mobileNav').css('opacity','1');
    console.log('green')
});



// Copyright Date
var today = new Date();
var year = today.getFullYear();
$('.year').text(year);



// Light box
lightbox.option({
    'resizeDuration': 300,
    'wrapAround': true,
    'disableScrolling': true,
    'imageFadeDuration':200,
    'fadeDuration': 300,
    'alwaysShowNavOnTouchDevices': true
});


// copy email on click
new ClipboardJS('.btn');
if (document.querySelector('#pageTitle').textContent == "Get in Contact"){
document.querySelector('.btn').addEventListener('click', () =>{
    alert("'sparhawktheartist@gmail.com' copied to clipboard")
})}


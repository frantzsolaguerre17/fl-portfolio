
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick =()=> {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll =()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}



/*TYPING TEXT IN HOME*/
const typed = new Typed('.mutliple-text', {
    strings: ['Web Developer', 'Mobile Developer', 'Backend Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1200,
    loop:true,
});



/*PORTFOLIO BUTTONS ACTION TO FILTER GALLERY*/
var $galleryContainer = $('.gallery').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
    $('.button-group .button').removeClass('active');
    $(this).addClass('active');

    var value = $(this).attr('data-filter');
    $galleryContainer.isotope({
        filter: value
    })
})



/*PROGRESS BAR WHEN SCROLLING*/
let progressBar = document.querySelector('.progress-line');

window.addEventListener('scroll', function (){
    let pageScrolled = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.width = `${(pageScrolled/height)*100}%`;
})



/*CHANGE COLOR NAVBAR LINK CORRESPONDING TO THE CURRENT SECTION
  AND ADD BAR HORIZONALLY WHEN SCROLLING*/
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    // Loop through each section to see if it's in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove 'active' class from all links and add it to the current one
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});



/*MULTI LANGUAGE*/

/*English*/
$(function() {
    $(".en").click(function () {
        $(".navbar").children().eq(0).text("Home");
        $(".navbar").children().eq(1).text("About");
        $(".navbar").children().eq(2).text("Portfolio");
        $(".navbar").children().eq(3).text("Resume");
        $(".navbar").children().eq(4).text("Skills");
        $(".navbar").children().eq(5).text("Service");
        $(".navbar").children().eq(6).text("Contact");

        $(".language-selected").text("English");

        $(".language-selected").removeClass("fr");
        $(".language-selected").removeClass("ht");

        $(".language-selected").addClass("en");

        $("#intro_text").text()

        $("#intro_text").text("Seasoned software developer, with solid training and proven skills in the development of web\n" +
            "            and mobile applications, I demonstrate great autonomy and effective collaboration within a team.\n" +
            "            My responsibility, my ability to work under pressure and my flexibility are all assets that I bring to bear.");

    });
});



/*Francais*/
$(function() {
    $(".fr").click(function () {
        $(".navbar").children().eq(0).text("Acceuil");
        $(".navbar").children().eq(1).text("A Propos");
        $(".navbar").children().eq(2).text("Portfolio");
        $(".navbar").children().eq(3).text("Résumé");
        $(".navbar").children().eq(4).text("Compétence");
        $(".navbar").children().eq(5).text("Service");
        $(".navbar").children().eq(6).text("Contact");
        $(".language-selected").text("Francais");

        $(".language-selected").removeClass("en");
        $(".language-selected").removeClass("ht");

        $(".language-selected").addClass("fr");

        $("#intro_text").text("Développeur de logiciels chevronné, doté d'une solide formation et de " +
            "compétences avérées dans le développement d'applications web et mobiles, je fais preuve d'une " +
            "grande autonomie et d'une collaboration efficace au sein d'une équipe. Mon sens des responsabilités, ma " +
            "capacité à travailler sous pression et ma flexibilité sont autant d'atouts que je mets à profit.");

    });
});



/*kreyol*/
$(function() {
    $(".ht").click(function () {
        $(".navbar").children().eq(0).text("Akey");
        $(".navbar").children().eq(1).text("A Pwopo");
        $(".navbar").children().eq(2).text("Pofolyo");
        $(".navbar").children().eq(3).text("Rezime");
        $(".navbar").children().eq(4).text("Konpetans");
        $(".navbar").children().eq(5).text("Sevis");
        $(".navbar").children().eq(6).text("Kontak");
        $(".language-selected").text("Kreyol");

        $(".language-selected").removeClass("fr");
        $(".language-selected").removeClass("en");

        $(".language-selected").addClass("ht");

        $("#intro_text").text("Devlopè lojisyèl ki gen eksperyans, ak fòmasyon solid ak " +
            "ak konpetans pwouve nan devlopman aplikasyon wèb ak mobil, mwen demontre gwo otonomi " +
            "ak kolaborasyon efikas nan yon ekip. Sans responsabilite mwen, kapasite mwen poum travay " +
            "sou presyon ak fleksibilite mwen se yon avantaj ke mwen itilize byen.");

    });
});



/*DARK THEME*/
var icon = document.getElementById("icon");

icon.onclick = function (){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun2.png";
    }else {
        icon.src = "images/moon.png"
    }
}

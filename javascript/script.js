

/*MENU IN RESPONSIVE*/
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Lorsque l'on clique sur l'icône du menu
menu.onclick = () => {
    // Change l'icône et affiche/masque le menu
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Lorsque l'on fait défiler la page, le menu se ferme
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}



/*TYPING TEXT IN HOME*/
const typed = new Typed('.mutliple-text', {
    strings: ['Desktop App Developer', 'Mobile Developer', 'Web Developer', 'IT Content Creator'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1200,
    loop:true,
});



/*const typedFrench = new Typed('.mutliple-text', {
    strings: ['Développeur Web', 'Développeur Mobile', 'Développeur Backend'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1200,
    loop:true,
});*/




/*PORTFOLIO BUTTONS ACTION TO FILTER GALLERY*/
// Get the filter buttons
const filterItems = document.querySelectorAll(".filter-item");

// Loop through the buttons and add click event listener
filterItems.forEach(item => {
    item.addEventListener("click", function(){
        // Remove the active class from the previous button
        filterItems.forEach(item => item.classList.remove("active"));
        // Add the active class to the current button
        this.classList.add("active");
        // Get the data-filter attribute of the button
        const filterValue = this.getAttribute("data-filter");
        // Get the gallery items
        const galleryItems = document.querySelectorAll(".gallery-item");
        // Loop through the gallery items and show or hide them based on the filter value
        galleryItems.forEach(item => {
            if (filterValue === "all" || item.getAttribute("data-category") === filterValue){
                // Show the item
                item.style.display = "block";
                item.classList.add("show");
            } else {
                // Hide the item
                item.style.display = "none";
                item.classList.remove("show");
            }
        });
    });
});



/*
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
*/



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
        /* $(".navbar").children().eq(2).text("Portfolio");*/
        $(".navbar").children().eq(2).text("Resume");
        $(".navbar").children().eq(3).text("Skills");
        $(".navbar").children().eq(4).text("Service");
        $(".navbar").children().eq(5).text("Contact");

        $(".language-selected").text("English");

        $(".language-selected").removeClass("fr");
        $(".language-selected").removeClass("ht");

        $(".language-selected").addClass("en");

        $("#hello_im").html("Hello, Hello, my name is");
        $("#im_text").html("I'm a </span>");

        $("#intro_text").text("Seasoned software developer, with solid training and proven skills in the development of web\n" +
            "            and mobile applications, I demonstrate great autonomy and effective collaboration within a team.\n" +
            "            My responsibility, my ability to work under pressure and my flexibility are all assets that I bring to bear.");

        $("#btn_download").text("Download CV");
        $("#btn").text("Hire me");

        $("#btn_cv_francais").html("CV (French)");
        $("#btn_cv_anglais").html("CV (English)");

        $("#years_id").html("Years of<br>Experience");
        $("#projects_id").html("Projects <br> Completed");
        $("#technology_id").html("Technologies <br> Mastered")
        $("#commit_id").html("Code <br> Commits");

        $("#about_id").html("About <span class=\"span_me\">Me</span>");
        $("#ImSofwareEngineer_id").html("<span class=\"span_yellow\">I'm a</span> <span class=\"span_software_dev\"> Software Developer</span>");

        $("#about_text").html("I’m Frantzso Laguerre, a seasoned software developer with comprehensive training and a proven track record\n" +
            "            in web and mobile application development. I consistently demonstrate strong independence in my work while\n" +
            "            excelling in team-based collaborations. My commitment to responsibility, combined with the ability to\n" +
            "            maintain focus and performance under high-pressure situations, exemplifies my resilience and effectiveness.\n" +
            "            Additionally, my adaptability allows me to seamlessly navigate complex, multi-faceted projects, ensuring\n" +
            "            high-quality results even when faced with tight deadlines. <br> <br>\n" +
            "\n" +
            "            I bring a proactive mindset to my work, always striving to learn and integrate new technologies, while my\n" +
            "            attention to detail ensures that every aspect of the project is thoroughly considered. My excellent\n" +
            "            problem-solving abilities, paired with a passion for innovation and continuous improvement, enable me to\n" +
            "            tackle challenges with confidence and deliver solutions that exceed expectations. This combination of\n" +
            "            technical expertise, strong work ethic, and forward-thinking vision makes me a valuable asset to any\n" +
            "            development team or project.");



        $("#resume_id").html("Resu<span style=\"color: #113D60\">me</span>");

        $("#educExp_id").html("Education &<span style=\"color: #113D60\"> Experience </span>");

        $("#unitech_date").html("<span>2013 - 2017 | Computer scientist</span>");
        $("#solutions_date").html("<span>2023 - 2024 | Developer</span>");
        $("#lamartiniere_date").html("<span>2006 - 2013 | Classical School</span>");
        $("#emanagement_date").html("<span>2019 - 2021 | Developer</span>");
        $("#unitech_id").html("I graduated with a Bachelor's degree in Computer Science after completing a 4-year course at UNITECH University.\n" +
            "                    During my studies, I acquired a solid theoretical and practical training in various areas of computer science, including\n" +
            "                    programming, databases, web development and computer systems.");


        $("#solutions_id").html("I did an internship with the development company SOLUTIONS S.A, where I had the opportunity to work on real software\n" +
            "                    development projects. This experience enabled me to apply my programming skills, collaborate with a professional team\n" +
            "                    and contribute to innovative technical solutions.");


        $("#lamartiniere_id").html("I completed my secondary education at Collège Mixte Lamartinière. This period enabled me to develop solid academic\n" +
            "skills and lay the foundations for my future training in computer science, while preparing me for the challenges of\n" +
            "the university world.");

        $("#emanagement_id").html("E-Management specializes in Information Technology services, particularly custom Information Iechnology systems, helping"+
            "entrepreneurs manage their businesses with tailored solutions. I worked there as a software developer, contributing to"+
            "various projects.");

        $("#myskills_id").html("My Ski<span>lls</span>");
        $("#skillsparagraph").html("Here are the skills, tools and technology I have mastered and used to bring ideas to life, solve problems, and deliver projects " +
            "efficiently.");

        $("#programmingskills_id").html("Programming Skills");
        $("#databaseskills_id").html("DataBase Skills");
        $("#otherskills_id").html("IDE, Tools and other Technology used");


        $("#it_content_creat").html("IT Content Creator");
        $("#it_content_paragraph").html("I create IT content that focuses on education, offering practical tips, solving\n" +
            "        real-world problems, and guiding users through the complexities of the tech world\n" +
            "        with detailed explanations and easy-to-follow solutions.");
        $("#recently_pub").html("Recently Published Videos");

        $("#laverite_partie1").html("The truth behind technology myths | PART 3");
        $("#laverite_partie1_pararaph").html("Discover the truth behind the 7 most common technology myths | Part Three");
        $("#watch_it_facebook").html("Watch it");
        $("#watch_it_youtube").html("Watch it");

        $("#laverite_partie2").html("The truth behind technology myths | PART 2");
        $("#laverite_partie1_pararaph2").html("Discover the truth behind the 7 most common technology myths | Part Two");
        $("#watch_it_facebook2").html("Watch it");
        $("#watch_it_youtube2").html("Watch it");

        $("#laverite_partie3").html("The truth behind technology myths | PART 1");
        $("#laverite_partie1_pararaph3").html("Discover the truth behind the 7 most common technology myths | Part One");
        $("#watch_it_facebook3").html("Watch it");
        $("#watch_it_youtube3").html("Watch it");

        $("#choix_ord").html("Which computer for your needs | GUIDE");
        $("#choix_ord_paragraph").html("Find out how to choose the right laptop for your needs in just a few minutes.");
        $("#watch_it_facebook4").html("Watch it");
        $("#watch_it_youtube4").html("Watch it");

        $("#bloquer_acces").html("How to block access to a website on a Windows PC | TRICK");
        $("#bloquer_acces_paragraph").html("Learn how to block access to any website on your Windows PC");
        $("#watch_it_facebook5").html("Watch it");
        $("#watch_it_youtube5").html("Watch it");

        $("#activer_god_mode").html("These apps you should have on your smartphone.");
        $("#activer_god_mode_paragraph").html("Find out The Best Apps You’ll Regret Not Discovering Sooner");
        $("#watch_it_facebook6").html("Watch it");
        $("#watch_it_youtube6").html("Watch it");

        $("#changer_icone").html("The most common traps on social media and how to avoid them");
        $("#changer_icone_paragraph").html(" You will Find out how to avoid traps and swindle on social media");
        $("#watch_it_facebook7").html("Watch it");
        $("#watch_it_youtube7").html("Watch it");


        $("#services_id").html("Services");

        $("#whatIOffer_id").html("<span style=\"color: orange\" >What</span> I <span> Offer </span>");

        $("#backendDevelopment_id").html("Backend Development");

        $("#backdev_id").html("I develop server-side functionalities to keep applications running smoothly. I work\n" +
            "                with databases, configure APIs and ensure that data flows correctly between the frontend\n" +
            "                and backend.");
        $("#destopDevTitle_id").html("Desktop Development");

        $("#mobilDevelopmentTitle_id").html("Mobile Development");
        $("#DevelopMobilParag_id").html("I design and develop mobile applications, focusing on efficiency and ease of use.\n" +
            "                Each project is designed to deliver a fluid, responsive experience, with solutions\n" +
            "                that meet user expectations and corporate objectives.");
        $("#webDevelopmentTitle_id_").html("Web Development");
        $("#webDevelopmentParag_id_").text("I design and develop high-performance applications and websites, combining functionality\n" +
            "                with a high-quality user experience. Each project is carefully crafted to meet user needs\n" +
            "                while respecting web standards.");

        $("#contactMeTitle_id").html("Contact <span>Me</span>");
        $("#sendMessage_id").html("Send Message");

        $("#copyright_id").html("");
        $("#copyright_id").html("");


    });
});



/*Francais*/
$(function() {
    $(".fr").click(function () {
        $(".navbar").children().eq(0).text("Acceuil");
        $(".navbar").children().eq(1).text("A Propos");
        /* $(".navbar").children().eq(2).text("Portfolio");*/
        $(".navbar").children().eq(2).text("Résumé");
        $(".navbar").children().eq(3).text("Compétence");
        $(".navbar").children().eq(4).text("Services");
        $(".navbar").children().eq(5).text("Contact");
        $(".language-selected").text("Français");

        $(".language-selected").removeClass("en");
        $(".language-selected").removeClass("ht");

        $(".language-selected").addClass("fr");

        $("#hello_im").html("Salut, Mon nom est");

        $("#im_text").html("Je suis un </span>");

        $("#intro_text").text("Développeur de logiciels chevronné, doté d'une solide formation et de " +
            "compétences avérées dans le développement d'applications web et mobiles, je fais preuve d'une " +
            "grande autonomie et d'une collaboration efficace au sein d'une équipe. Mon sens des responsabilités, ma " +
            "capacité à travailler sous pression et ma flexibilité sont autant d'atouts que je mets à profit.");

        $("#btn_download").text("Télécharger CV");
        $("#btn").text("Embauchez-moi");
        $("#btn_cv_francais").html("CV (Français)");
        $("#btn_cv_anglais").html("CV (Anglais)");

        $("#years_id").html("Années<br>d'expérience");
        $("#projects_id").html("Projets <br> Réalisés");
        $("#technology_id").html("Technologies <br> maîtrisées");
        $("#commit_id").html("Commits de <br> code");


        $("#about_id").html("A Propos de <span class=\"span_me\">Moi</span>");
        $("#ImSofwareEngineer_id").html("<span class=\"span_yellow\">Je suis un </span> <span class=\"span_software_dev\"> Développeur Logiciel</span>");

        $("#about_text").html("Je suis Frantzso Laguerre, un développeur de logiciels chevronné ayant reçu une formation complète et ayant fait ses preuves dans le développement d'applications web et mobiles.\n" +
            "             Je fais preuve d'une grande indépendance dans mon travail tout en excellant dans les collaborations en équipe.\n" +
            "              Mon sens des responsabilités, associé à ma capacité à\n" +
            "            de rester concentré et performant dans des situations de forte pression, illustre ma résilience et mon efficacité.\n" +
            "              En outre, ma capacité d'adaptation me permet de mener à bien des projets complexes et à multiples facettes, en garantissant des résultats de haute qualité, même lorsque les délais sont serrés.\n" +
            "            <br> <br>" +
            "             " +
            "" +
            "" +
            "J'apporte un état d'esprit proactif à mon travail, m'efforçant toujours d'apprendre et d'intégrer de nouvelles technologies.\n" +
            "            Mon souci du détail me permet de m'assurer que chaque aspect du projet est bien pris en compte. Mes excellentes\n" +
            "            capacités de résolution de problèmes, associées à une passion pour l'innovation et l'amélioration continue, me permettent de relever les défis avec confiance et de fournir des solutions qui dépassent les attentes.\n" +
            "            Cette combinaison de\n" +
            "            d'expertise technique, d'éthique de travail et de vision avant-gardiste fait de moi un atout précieux pour toute équipe ou projet de développement.\n");


        $("#resume_id").html("Parcours <span style=\"color: #003846\"> Professionnel</span>");

        $("#educExp_id").html("Formation &<span style=\"color : #003846\"> Expérience </span>");

        $("#unitech_date").html("<span>2013 - 2017 | Sciences Informatiques</span>");
        $("#solutions_date").html("<span>2023 - 2024 | Développeur</span>");
        $("#lamartiniere_date").html("<span>2006 - 2013 | Ecole Classique</span>");
        $("#emanagement_date").html("<span>2019 - 2021 | Développeur</span>");

        $("#unitech_id").html("J'ai obtenu une licence en informatique après avoir suivi un cursus de quatre ans à l'université UNITECH.\n" +
            "                    Au cours de mes études, j'ai acquis une solide formation théorique et pratique dans divers domaines de l'informatique, notamment " +
            "la programmation, les bases de données, le développement web et les systèmes informatiques.");


        $("#solutions_id").html("J'ai effectué un stage au sein de la société de développement SOLUTIONS S.A., où j'ai eu l'opportunité de travailler sur de vrais " +
            "projets de développement logiciel. Cette expérience m'a permis d'appliquer mes compétences en programmation, de collaborer avec une équipe professionnelle " +
            "et de contribuer à des solutions techniques innovantes.");

        $("#lamartiniere_id").html("J'ai complété mes études secondaires au Collège Mixte Lamartinière. Cette période m'a permis de développer de solides connaissances académiques"+
            "compétences et poser les bases de ma future formation en informatique, tout en me préparant aux défis de"+
            "le monde universitaire.");

        $("#emanagement_id").html("E-Management est spécialisé dans les services informatiques, en particulier les systèmes informatiques personnalisés, aidant les entrepreneurs " +
            "à gérer leur entreprise avec des solutions sur mesure. J'y ai travaillé en tant que développeur de logiciels, contribuant à divers projets.");


        $("#myskills_id").html("Mes Compéten<span>ces</span>");
        $("#skillsparagraph").html("Voici les compétences, les outils et la technologie que j'ai maîtrisés et utilisés pour donner vie à des idées, résoudre des problèmes et réaliser " +
            "des projets efficacement.");

        $("#programmingskills_id").html("Compétences Programmation");
        $("#databaseskills_id").html("Compétences Base de Données");
        $("#otherskills_id").html("IDE, Outils et autre Technologie utilisée");

        $("#it_content_creat").html("Créateur de contenu informatique");
        $("#it_content_paragraph").html("Je crée du contenu informatique axé sur l'éducation, offrant des conseils " +
            "pratiques, résolvant des problèmes réels et guidant les utilisateurs à travers les complexités du monde " +
            "de la technologie grâce à des explications détaillées et des solutions faciles à suivre.");

        $("#recently_pub").html("Vidéos récemment publiées");
        $("#laverite_partie1").html("La vérité derrière les mythes technologiques | PARTIE 3");
        $("#laverite_partie1_pararaph").html("Découvrez la vérité derrière les 7 mythes les plus courants en technologie | Troisième Partie");
        $("#watch_it_facebook").html("Regardez-le");
        $("#watch_it_youtube").html("Regardez-le");

        $("#laverite_partie2").html("La vérité derrière les mythes technologiques | PARTIE 2");
        $("#laverite_partie1_pararaph2").html("Découvrez la vérité derrière les 7 mythes les plus courants en technologie | Deuxième Partie");
        $("#watch_it_facebook2").html("Regardez-le");
        $("#watch_it_youtube2").html("Regardez-le");

        $("#laverite_partie3").html("La vérité derrière les mythes technologiques | PARTIE 3");
        $("#laverite_partie1_pararaph3").html("Découvrez la vérité derrière les 7 mythes les plus courants en technologie | Première Partie");
        $("#watch_it_facebook3").html("Regardez-le");
        $("#watch_it_youtube3").html("Regardez-le");

        $("#choix_ord").html("Quel ordinateur choisir selon vos besoins | GUIDE");
        $("#choix_ord_paragraph").html("Découvrez comment choisir l'ordinateur portable adapté à vos besoins en quelques minutes.");
        $("#watch_it_facebook4").html("Regardez-le");
        $("#watch_it_youtube4").html("Regardez-le");

        $("#bloquer_acces").html("Comment bloquer l'acces a un site web sur un PC windows | ASTUCE");
        $("#bloquer_acces_paragraph").html("Apprenez à bloquer l'accès à n'importe quel site web sur votre PC Windows");
        $("#watch_it_facebook5").html("Regardez-le");
        $("#watch_it_youtube5").html("Regardez-le");

        $("#activer_god_mode").html("Ces applications que tu devrais avoir sur ton smartphone.");
        $("#activer_god_mode_paragraph").html("Les Applications Que Tu Regretteras de Ne Pas Avoir Découvertes Plus Tôt");
        $("#watch_it_facebook6").html("Regardez-le");
        $("#watch_it_youtube6").html("Regardez-le");

        $("#changer_icone").html("Les pièges les plus courants sur les réseaux sociaux et comment les éviter");
        $("#changer_icone_paragraph").html("Découvrez comment éviter les pièges sur les réseaux sociaux");
        $("#watch_it_facebook7").html("Regardez-le");
        $("#watch_it_youtube7").html("Regardez-le");

        $("#services_id").html("Services");
        $("#whatIOffer_id").html("<span style=\"color: orange\" >Ce que</span> j'<span>offre</span>");

        $("#backendDevelopment_id").html("Développement Backend");

        $("#backdev_id").html("Je développe des fonctionnalités côté serveur pour assurer le bon fonctionnement des applications. " +
            "Je travaille avec des bases de données, configure les API et m'assure que les données circulent correctement entre le " +
            "frontend et le backend.");

        $("#destopDevTitle_id").html("Développement Desktop");
        $("#desktopParag_id").html("Je développe des applications de bureau performantes, alliant fonctionnalités et une expérience " +
            "utilisateur fluide. Chaque projet est minutieusement conçu pour répondre aux exigences des utilisateurs tout en " +
            "garantissant une compatibilité sur toutes les plateformes.");

        $("#mobilDevelopmentTitle_id").html("Développement Mobile");
        $("#DevelopMobilParag_id").html("Je conçois et développe des applications mobiles en mettant l'accent sur l'efficacité " +
            "et la facilité d'utilisation. Chaque projet est conçu pour offrir une expérience fluide et réactive, avec des solutions " +
            "répondant aux attentes des utilisateurs et aux objectifs de l'entreprise.");

        $("#webDevelopmentTitle_id_").html("Développement <br>Web");
        $("#webDevelopmentParag_id_").text("Je conçois et développe des applications et des sites web performants, alliant fonctionnalités " +
            "et une expérience utilisateur de haute qualité. Chaque projet est soigneusement élaboré pour répondre aux besoins des " +
            "utilisateurs tout en respectant les standards du web.");

        $("#contactMeTitle_id").html("Contactez <span>Moi</span>");
        $("#sendMessage_id").html("Envoyer Message");

    });
});



/*kreyol*/
$(function() {
    $(".ht").click(function () {
        $(".navbar").children().eq(0).text("Akèy");
        $(".navbar").children().eq(1).text("A Pwopo");
        /* $(".navbar").children().eq(2).text("Pofolyo");*/
        $(".navbar").children().eq(2).text("Rezime");
        $(".navbar").children().eq(3).text("Konpetans");
        $(".navbar").children().eq(4).text("Sèvis");
        $(".navbar").children().eq(5).text("Kontak");
        $(".language-selected").text("Kreyòl");

        $(".language-selected").removeClass("fr");
        $(".language-selected").removeClass("en");

        $(".language-selected").addClass("ht");

        $("#hello_im").html("Bonswa, Non mwen se");

        $("#im_text").html("Mwen se yon </span>");
        $("#intro_text").text("Devlopè lojisyèl ki gen eksperyans, ak fòmasyon solid ak " +
            "ak konpetans pwouve nan devlopman aplikasyon wèb ak mobil, mwen demontre gwo otonomi " +
            "ak kolaborasyon efikas nan yon ekip. Sans responsabilite mwen, kapasite mwen poum travay " +
            "sou presyon ak fleksibilite mwen se yon avantaj ke mwen itilize byen.");


        $("#btn_download").text("Telechaje CV");
        $("#btn").text("Anboche mwen");

        $("#btn_cv_francais").html("CV (Fransè)");
        $("#btn_cv_anglais").html("CV (Anglè)");

        $("#years_id").html("Ane <br> Eksperyans");
        $("#projects_id").html("Pwojè <br> Reyalize");
        $("#technology_id").html("Teknoloji <br> Metrize")
        $("#commit_id").html("Kòd <br> Komit");

        $("#about_id").html("A Pwopo de <span class=\"span_me\">Mwen</span>");
        $("#ImSofwareEngineer_id").html("<span class=\"span_yellow\">Mwen se </span> <span class=\"span_software_dev\"> Devlopè lojisyèl</span>");


        $("#about_text").html("Mwen se Frantzso Laguerre, yon devlopè lojisyèl eksperimante ak yon fòmasyon " +
            "konplè e ki fè prèv nan devlopman wèb ak aplikasyon mobil. Mwen demontre anpil endepandans " +
            "nan travay mwen e ekselans mwen nan kolaborasyon ekip. Sans responsablite mwen, ansanm ak kapasite " +
            "mwen pou mwen rete konsantre nan sitiyasyon sou presyon montre rezistans mwen ak efikasite mwen. " +
            "Anplis de sa, kapasite mwen pou mwen adapte mwen pèmèt mwen konplete avèk siksè pwojè konplèks, asire " +
            "rezilta bon jan kalite, menm lè dat limit yo sere. <br> <br>\n"+
            "" +
            "" +
            "" +
            "Mwen pote yon mantalite aktif nan travay mwen, toujou fè efò pou aprann ak entegre nouvo " +
            "teknoloji, pandan ke mwen pote atansyon sou tout ti detay asire ke tout aspè nan pwojè a byen konsidere. Ekselan " +
            "kapasite mwen pou rezoud pwoblèm, ansanm ak yon pasyon pou inovasyon ak amelyorasyon kontinyèl, pèmèt " +
            "mwen atake defi ak konfyans epi bay solisyon ki depase atant. Konbinezon ekspètiz " +
            "teknik, etik travay solid, ak vizyon fè de mwen yon atou valab nan nenpòt ekip devlopman oswa " +
            "pwojè.");


        $("#resume_id").html("Pakou <span style=\"color: #113D60\"> Pwofesyonèl</span>");

        $("#educExp_id").html("Fòmasyon &<span style=\"color : #113D60\"> Eksperyans </span>");

        $("#unitech_date").html("<span>2013 - 2017 | Syans Enfòmatik</span>");
        $("#solutions_date").html("<span>2023 - 2024 | Devlopè</span>");
        $("#lamartiniere_date").html("<span>2006 - 2013 | Lekòl Klasik</span>");
        $("#emanagement_date").html("<span>2019 - 2021 | Devlopè</span>");


        $("#unitech_id").html("Mwen diplome nan syans enfòmatik apre mwen te fin swiv kou pandan 4 ane nan UNITECH.\n" +
            "Pandan etid mwen yo, mwen te resevwa fòmasyon solid teyorik ak pratik nan divès domèn enfòmatik, sitou" +
            "programasyon, baz done, devlopman aplikasyon wèb ak sistèm enfòmatik.");


        $("#solutions_id").html("Mwen te fè yon estaj nan konpayi devlopman lojisyèl ki rele SOLUTIONS S.A., kote mwen te gen opòtinite pou mwen travay sou " +
            "pwojè reyèl devlopman lojisyèl. Eksperyans sa pèmèt mwen aplike konpetans mwen nan pwogramasyon pou kolabore ak yon ekip pwofesyonèl" +
            "ak kontribye nan solisyon teknik inovatè.");

        $("#lamartiniere_id").html("Mwen te konplete edikasyon segondè mwen nan Collège Mixte Lamartinière. Peryòd sa a te pèmèt mwen devlope konpetans akademik solid"+
            " epi mete fondasyon pou fòmasyon mwen nan syans enfòmatik, pandan y ap prepare m 'pou defi yo nan"+
            "mond inivèsite a.");

        $("#emanagement_id").html("E-Management espesyalize nan sèvis Teknoloji Enfòmasyon, patikilyèman sistèm enfòmatik pèsonalize, ede antreprenè jere biznis yo " +
            "Mwen te travay la kòm yon devlopè lojisyèl, kontribye nan plizyè pwojè lojisyèl.");


        $("#myskills_id").html("Konpetans<span> Mwen</span>");
        $("#skillsparagraph").html("Konpetans, zouti ak teknoloji mwen metrize ak itilize pou mw reyalize pwojè yo, rezoud pwoblèm, epi delivre pwojè avèk efikasite.");

        $("#programmingskills_id").html("Konpetans Pwogramasyon");
        $("#databaseskills_id").html("Konpetans Baz de Done");
        $("#otherskills_id").html("IDE, Zouti e lòt Teknoloji Itilize");

        $("#it_content_creat").html("Kreyatè kontni enfòmatik");
        $("#it_content_paragraph").html("Mwen kreye kontni enfòmatik ki konsantre sou edikasyon, ofri konsèy pratik, rezoud pwoblèm " +
            "mond reyèl la, epi gide itilizatè yo atravè konpleksite mond teknoloji a ak eksplikasyon detaye ak solisyon fasil a swiv.");

        $("#recently_pub").html("Videyo ki fèk pibliye");
        $("#laverite_partie1").html("Verite ki kache dèyè mit teknoloji | PATI 3");
        $("#laverite_partie1_pararaph").html("Dekouvri verite ki dèyè 7 mit ki pi komen nan teknoloji | Twazyèm Pati");
        $("#watch_it_facebook").html("Gade li");
        $("#watch_it_youtube").html("Gade li");

        $("#laverite_partie2").html("Verite ki kache dèyè mit teknoloji | PATI 2");
        $("#laverite_partie1_pararaph2").html("Dekouvri verite ki dèyè 7 mit ki pi komen nan teknoloji | Twazyèm Pati");
        $("#watch_it_facebook2").html("Gade li");
        $("#watch_it_youtube2").html("Gade li");

        $("#laverite_partie3").html("Verite ki kache dèyè mit teknoloji | PATI 1");
        $("#laverite_partie1_pararaph3").html("Dekouvri verite ki dèyè 7 mit ki pi komen nan teknoloji | Premye Pati");
        $("#watch_it_facebook3").html("Gade li");
        $("#watch_it_youtube3").html("Gade li");

        $("#choix_ord").html("Ki òdinatè pou chwazi selon bezwen ou | GID");
        $("#choix_ord_paragraph").html("Aprann kijan pou w chwazi bon laptòp pou bezwen ou nan kèk minit.");
        $("#watch_it_facebook4").html("Gade li");
        $("#watch_it_youtube4").html("Gade li");

        $("#bloquer_acces").html("Kijan yo bloke aksè yon sit wèb sou yon òdinatè Windows | ASTIS");
        $("#bloquer_acces_paragraph").html("Aprann kijan pou bloke aksè nenpòt sit wèb sou yon òdinatè Windows");
        $("#watch_it_facebook5").html("Gade li");
        $("#watch_it_youtube5").html("Gade li");

        $("#activer_god_mode").html("Aplikasyon sa yo ou ta dwe genyen sou telefòn ou");
        $("#activer_god_mode_paragraph").html("Aplikasyon sa yo Ke wap regrèt Ou Pat konnen Pi Bonè");
        $("#watch_it_facebook6").html("Gade li");
        $("#watch_it_youtube6").html("Gade li");

        $("#changer_icone").html("Pyèj ki pi plis sou rezo sosyo yo ak kòman pou evite yo");
        $("#changer_icone_paragraph").html("Dekouvri kòman pou ou evite pyèj sou rezo sosyo yo");
        $("#watch_it_facebook7").html("Gade li");
        $("#watch_it_youtube7").html("Gade li");

        $("#services_id").html("Sèvis");
        $("#whatIOffer_id").html("<span style=\"color: orange\" >Sa</span> Mwen <span>Ofri</span>");

        $("#backendDevelopment_id").html("Devlopman Backend");

        $("#backdev_id").html("Mwen devlope fonksyonalite bò sèvè pou kenbe aplikasyon yo mache san pwoblèm. Mwen travay " +
            "ak baz done, konfigirasyon API epi asire ke done yo sikile kòrèkteman ant entèfas la ak backend lan.");

        $("#destopDevTitle_id").html("Devlopman Desktop");
        $("#desktopParag_id").html("Mwen devlope aplikasyon pou desktop(Biwo), ki melanje fonksyonalite ak yon " +
            "eksperyans itilizatè san pwoblèm. Chak pwojè fèt ak anpil atansyon pou satisfè bezwen itilizatè yo pandan l " +
            "asire konpatibilite sou tout platfòm.");

        $("#mobilDevelopmentTitle_id").html("Devlopman Mobil");
        $("#DevelopMobilParag_id").html("Mwen konsevwa ak devlope aplikasyon mobil, konsantre sou efikasite ak fasilite " +
            "pou itilize yo. Chak pwojè fèt pou bay yon eksperyans fasil ki reponn ak solisyon ki satisfè atant itilizatè yo ak " +
            "objektif antrepriz yo.");

        $("#webDevelopmentTitle_id_").html("Devlopman Wèb");
        $("#webDevelopmentParag_id_").text("Mwen konsevwa ak devlope aplikasyon ak sit wèb ki pwisan, ki melanje fonksyonalite " +
            "ak yon eksperyans itilizatè kalite siperyè. Chak pwojè fèt avèk anpil swen pou satisfè bezwen itilizatè yo pandan l " +
            "respekte estanda entènèt yo.");

        $("#contactMeTitle_id").html("Kontakte <span>Mwen</span>");

        $("#sendMessage_id").html("Voye Mesaj");

    });
});



/*DARK THEME*/
var icon = document.getElementById("icon");
var profil = document.getElementById("profil_id");
var about_profil = document.getElementById("about_profil_id");
icon.onclick = function (){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun2.png";
        /*profil.src = "images/profil_picture.png";*/
       /* about_profil.src = "images/profil_picture.png"*/
    }else {
        icon.src = "images/moon.png";
       /* profil.src = "images/profil_picture.png";*/
      /*  about_profil.src = "images/profil_picture.png";*/
    }
}


/*CONTACT FORM*/
const contactForm = document.getElementById("contactForm");
const sendMessage_id = document.getElementById("sendMessage_id");
const spinner = document.getElementById("spinner");
const errorDiv = document.getElementById("error");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Vérifier si l'utilisateur est en ligne
    if (!navigator.onLine) {
        errorDiv.classList.remove("hidden");
        return;
    } else {
        errorDiv.classList.add("hidden");
    }

    // Désactiver le bouton et afficher le spinner
    sendMessage_id.disabled = true;
    spinner.classList.remove("hidden");

    // Récupérer les données du formulaire
    const templateParams = {
        fullName: document.getElementById("fullName").value,
        emailAddress: document.getElementById("emailAddress").value,
        phone_id: document.getElementById("phone_id").value,
        emailSubject: document.getElementById("emailSubject").value,
        yourMessage_id: document.getElementById("yourMessage_id").value,
    };

    // Envoyer les données via EmailJS
    emailjs
        .send("service_x5ixr4v", "template_jelfzs2", templateParams)
        .then(() => {
            alert("Message sent successfully!");
            contactForm.reset();
            spinner.classList.remove("hidden");

        })
        .catch((error) => {
            console.error("Error sending message:", error);
            alert("Failed to send the message. Please try again later.");
        })
        .finally(() => {
            // Réactiver le bouton et masquer le spinner
            sendMessage_id.disabled = false;
            spinner.classList.add("hidden");
        });
});


/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(registration => {
                console.log("Service Worker registered with scope:", registration.scope);
            })
            .catch(error => {
                console.log("Service Worker registration failed:", error);
            });
    });
}*/

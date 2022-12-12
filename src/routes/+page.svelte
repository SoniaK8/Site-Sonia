<script>
	import Form from '$lib/components/form.svelte'
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

    import { onMount } from 'svelte'
	import { supabase } from '$lib/supabaseClient'

	let contactForWhat = []
    let contactFromWhere = []
     let contactKnowMe = []
	onMount(async () => {
		const { data, error } = await supabase
			.from('Contact_ForWhat')
			.select('ForWhat')
		contactForWhat = data

         const { data: dataFromWhere, error: errorFromWhere } = await supabase
			.from('Contact_FromWhere')
			.select('FromWhere')
            contactFromWhere = dataFromWhere
       
       const { data: dataKnowMe, error: errorKnowMe} = await supabase
			.from('Contact_KnowMe')
			.select('HowKnowMe')
            contactKnowMe = dataKnowMe


	})
</script>

<svelte:head>
   

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<title> Sonia KUETE</title>
	<meta name="Page de présentation de Sonia KUETE. En dérnière année d'école d'ingénieur généraliste à l'EIGSI La Rochelle et en contrat de professionnalisation avec ALSTOM où j'occupe le poste d'ingénieure Projet | Data analyst | Business Intelligence - BI" content="width=device-width, initial-scale=1.0">
	
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
    
</svelte:head>

<body>

<header class="navbar2">
    <a href="#" class="logo"><span>Sonia</span> KUETE</a>
    <div class="menuToggle" onclick="toggleMenu();"></div>
    <ul class="navbar">
        <li><a href="#banniere" onclick="toggleMenu();">Accueil</a></li>
        <li><a href="#apropos" onclick="toggleMenu();">A propos</a></li>
        <li><a href="#menu" onclick="toggleMenu();">Compétences</a></li>
        <li><a href="#expert" onclick="toggleMenu();">Expériences Pro</a></li>
        <li><a href="#temoignage" onclick="toggleMenu();">Références</a></li>
        <li><a href="#contact" onclick="toggleMenu();">Contact</a></li>
        <a href="#" class="btn-reserve" onclick="toggleMenu();">Rendez-Vous</a>
    </ul>
</header>
<section class="banniere" id="banniere">
    <div class="contenu">
        <h2>Data, Projets, Business, Digitalisation...</h2>
        <p>Si tels sont les domaines qui vous intéressent, alors vous êtes chez la bonne personne.</p>
				<p>Je vous aide à resoudre les problèmes qui vous créent de la non-valeur dans votre entreprise.
				</p>
        <a href="#" class="btn1">Compétences</a>
        <a href="#" class="btn2">Rendez-Vous</a>
    </div>
</section>
<section class="apropos" id="apropos">
    <div class="row">
        <div class="col50">
            <h2 class="titre-texte"><span>A</span> Propos De Moi</h2>
            <p>En dérnière année d'école d'ingénieur généraliste à l'EIGSI La Rochelle, j'ai toujours été passionnée par l'innovation et les technologies pointues.  Aujourd'hui je suis intéressée par les domaines qui touchent à la <b>Gestion de Projets | Data & Business analytics | Business Intelligence - BI et transformation digitale.</b> J'aime apprendre, relever des défis et me surpasser à chaque succès.
            </p>
						<p> J'ai pour valeurs : <b>Excellence, Unité, Innovation, Satisfaction
clients, l'Eco-resposabilité.</b>
        </div>
        <div class="col50">
            <div class="img">
                <img src="https://cdn.pixabay.com/photo/2015/10/31/11/58/financial-equalization-1015266__340.jpg" alt="image">
            </div>
        </div>
    </div>
</section>

<section class="menu" id="menu">
    <div class="titre">
        <h2 class="titre-texte"><span>C</span>ompétences</h2>
        <p>J'ai acquis de nombreuses compétences dans mon parcours. Parmi lesquelles sont incluses : </p>
    </div>
    <div class="contenu">
        <div class="box">
            <div class="imbox">
                <img src="https://www.upslide.net/wp-content/uploads/cache/2021/03/excel-to-power-bi/1471307147.png" alt="" width="200" height="400">
            </div>
            <div class="text">
                <h3>Data Viz</h3>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://www.tech-wonders.com/wp-content/uploads/2020/02/data-storytelling-vector-icons.png" alt="">
            </div>
            <div class="text">
                <h3>Storytelling</h3>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://data36.com/wp-content/uploads/2017/01/languages-data-mining-r-python-sql.jpg" alt="">
            </div>
            <div class="text">
                <h3>Programmation</h3>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://allnvysbhq.cloudimg.io/v7/www.projectsmart.co.uk/img/pm-sphere.png" alt="">
            </div>
            <div class="text">
                <h3>Project Management</h3>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://image.shutterstock.com/image-photo/professional-african-business-people-handshaking-260nw-158383982.jpg" alt="">
            </div>
            <div class="text">
                <h3>Business & Negotiation</h3>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://ptssystems.co.in/wp-content/uploads/2022/08/erp-software-company-india.png" alt="">
            </div>
            <div class="text">
                <h3>Transformation Digitale</h3>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://cdn.pixabay.com/photo/2014/03/26/08/49/autonomy-298473_960_720.jpg" alt="">
            </div>
            <div class="text">
                <h3>Autonomy</h3>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895__340.png" alt="">
            </div>
            <div class="text">
                <h3>Team Spirit</h3>
            </div>
        </div>
    </div>
 
 <div class="titre">
    <a href="/voirplus" class="btn1">Voir Plus</a>
 </div>
</section>
<section class="expert" id="expert">
    <div class="titre">
        <h2 class="titre-texte">Expériences <span>P</span>rofessionnelles</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
    </div>
    <div class="contenu">
        <div class="box">
            <div class="imbox">
                <img src="https://albiparc.com/wp-content/uploads/2019/10/portfolio-header-alstom.jpg" alt="">
            </div>
            <div class="text">
                <h3>ALSTOM</h3>
								<h4>Ingénieure Projet | Data Analyst | BI</h4>
								<p>Contrat de Professionnalisation - 1 an (en cours)</p>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://data.gessulli.com.br/file/2016/06/08/H094943-F00000-L836.png" alt="">
            </div>
            <div class="text">
                <h3>ADISSEO</h3>
								<h4>Assistante Chef de Projet Digital et Conduite du Changement</h4>
								<p>Stage - 4 mois</p>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://ite-prod-cdn-end.azureedge.net/sharedmedia/africaoilweek/media/assets/untitled-design-(100).png?ext=.png" alt="">
            </div>
            <div class="text">
                <h3>VIVO ENERGY MAROC</h3>
								<h4>Ingénieure Gestion de Projet | Performance Industrielle</h4>
								<p>Stage - 2 mois</p>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://www.oulmes.ma/wp-content/uploads/2020/03/Logo_Lemo.png" alt="">
            </div>
            <div class="text">
                <h3>Les Eaux Minérales d'Oulmès</h3>
								<h4>Technicienne Automaticienne</h4>
								<p>Stage - 1 mois</p>
            </div>
        </div>
    </div>
 
</section>
 <section class="temoignage" id="temoignage">
    <div class="titre blanc">
        <h2 class="titre-texte">Que Disent mes <span>T</span>uteurs</h2>
        <p>J'ai eu des expériences très enrichissantes partout où j'ai exercé. </p>
    </div>
    <div class="contenu">
        <div class="box">
            <div class="imbox">
                <img src="https://cdn-icons-png.flaticon.com/512/147/147135.png" alt="">
            </div>
            <div class="text">
                <p>Sonia a fait preuve d'investissement pendant son stage pour fournir le travail demandé.</p>
								<p>Elle a su s'adapter à l'entreprise et à fait preuve d'autonomie.</p>
								<p>Sonia a été d'une grande aide pour avancer sur le projet ADDIXYZ.</p>
                <h3>Mme Juana Celle - Chargée de mission ADDIXYZ - ADISSEO</h3>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCUecve2ZMT__2xNmpUEkGB2ZduvbxF3Z2g&usqp=CAU" alt="">
            </div>
            <div class="text">
                <p>Sonia a developpé un plan d'accompagnement effectif pour le personnel des stations service SHELL au Maroc.</p>
								<p>Elle a su être force de proposition au coeur de l'excellence opérationnelle de l'entreprise.</p>
                <h3>Mme Fatima-Ezzahra MOUTTAKI - Retail Maintenance Manager - VIVO Energy Maroc</h3>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="">
            </div>
            <div class="text">
                <p>Sonia a fait preuve de rigueur et de travail d'équipe dans l'exécution de ses missions.</p>
                <h3>M. Adil - Ingénieur Automaticien - Les Eaux Minérales d'Oulmès</h3>
            </div>
        </div>
    </div>
 </section>
 <section class="contact" id="contact">
     <div class="titre noir">
         <h1 class="titre-text"><span>C</span>ontact</h1>
         <p>Vous pouvez me joindre ICI. Faites moi confiance et vous verrez.</p>
     </div>
     <Form />

    

    <div class="div">
    
    
    </div>


 </section>

<section class="contact" id="contact">
     <div class="titre noir">
         <h1 class="titre-text"><span>I</span>nformation</h1>
         <p>Dites m'en plus sur vous !.</p>
     </div>
     

     <p>Que me proposez-vous ?</p>
    <select>
     
        {#each contactForWhat as { ForWhat }, i}
            <option value={i}>{ForWhat}</option>
        {/each}
    </select>
    
     <p>Qui êtes-vous ?</p>
     <select>
    
        {#each contactFromWhere as { FromWhere }, i}
            <option value={i}>{FromWhere}</option>
        {/each}
    </select>

     <p>Comment m'avez-vous connu ?</p>

     <select>
        {#each contactKnowMe as { HowKnowMe }, i}
            <option value={i}>{ HowKnowMe }</option>
        {/each}
    </select>
       


 </section>




 <div class="copyright">
     <p>copyright 2022 <a href="#">Sonia KUETE</a> Tous droits reservés</p>
 </div>
 <script type="text/javascript">
     window.addEventListener('scroll', function(){
         const header =document.querySelector('header');
         header.classList.toggle("sticky", window.scrollY > 0 );
     });

     function toggleMenu(){
         const tmenuToggle = document.querySelector('.menuToggle');
         const navbar = document.querySelector('.navbar');
         navbar.classList.toggle('active');
         menuToggle.classList.toggle('active');
     }
 </script>

</body>

<style>
.navbar2 {
    background-color: #757575;
}
	*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
    scroll-behavior: smooth;
}

p{
    font-weight: 300;
    color: #2B2A2A;
}

header{
    position: fixed;
    top: 0%;
    left: 0%;
    padding: 20px 10px;
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: 0.5s;
		
}

.logo{
    color: #fff;
    font-weight: bold;
    font-size: 2em;
    text-decoration: none;
}
.logo span{
    color: #fb911f;
}

.navbar{
    display: flex;
    position: relative;
}
.navbar li{
    list-style: none;
}
.navbar a{
    color: #fff;
    text-decoration: none;
    margin-left: 30px;
    font-weight: 700;
}

.btn-reserve{
    padding: 10px 20px;
    background: #fb911f;
   margin-top: -10px;
   text-transform:uppercase ;
}

.btn-reserve:hover{
    background: #d87710;
    transition: ease-out;
}

header .navbar li a:hover{
    color: #fb911f;
    border-bottom: 2px solid #fb911f;
}

.banniere{
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(./images/pageheader-banner.jpg);
    background-size: cover;
}

.banniere .contenu{
    max-width: 70%;
    text-align: center;
		
		
}
.banniere .contenu h2{
    color: #2B2A2A;
    font-size: 3em;
    text-transform: capitalize;
}
.contenu p:nth-child(2){
    color: #2B2A2A;
    font-size: 1.2em;
}

.btn1{
    font-size: 1em;
    color: #fff;
    background: #fb911f;
    padding: 10px 20px;
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.5s;
    margin-left: 10px;
}
.btn2{
    font-size: 1em;
    color: #fff;
    background: #2a4963;
    padding: 10px 20px;
    display: inline-block;
    margin-top: 20px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.5s;
    margin-left: 10px;
}

.btn1:hover{
letter-spacing: 4px;
}
section{
    padding: 100px;
}
.row{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.row .col50{
    position: relative;
    width: 48%;
    justify-content: center;
    align-items: center;

}

.row .col50 h2{
    margin-bottom: 20px;
}

.titre-texte{
    color: #000;
    font-size: 2em;
    font-weight: 300px;
    text-transform: capitalize;
}

.titre-texte span{
    color: #fb911f;
    font-size: 1.5em;
    font-weight: 700px;
}

.row .col50 img{
    height: 450px;
    width: 600px;
    position: relative;
}

.titre{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.menu{
    margin-top: -100px;
}

.menu .contenu{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;
}

.menu .contenu .box{
    width: 350px;
    margin: 20px;
    border: 20px solid #fff;
    box-shadow: 20px 15px 35px rgba(0,0,0, 0.8);
}

.menu .contenu .box .imbox{
    position: relative;
    width: 100%;
    height: 300px;
}

.menu .contenu .box .imbox img{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.menu .contenu .box .text{
    text-align: center;
    font-weight: 300px;
    color: #111;
}

.menu .contenu .box .text h3{
    font-weight: 400;
}

.expert{
    margin-top:-100px;
}

.expert .contenu{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
}

.expert .contenu .box{
    width: 250px;
    margin: 15px;
}
.expert .contenu .box img{
    position: relative;
    width: 100%;
    height: 300px;
    top: 0;
    left: 0;
    object-fit: cover;
}

.expert .contenu .box h3{
    color: #111;
    font-weight: 400;
    text-align: center;
}

.temoignage{
    background-image: url(./images/bg2.jpg);
    background-size: cover;
}

.temoignage .contenu{
    display: flex;
    margin-top: 40px;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
}

.temoignage .contenu .box{
    width: 340px;
    margin: 20px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    padding: 40px;
}

.temoignage .contenu .box .imbox{
    width: 80px;
    height: 80px;
    border-radius: 50px;
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
}

.temoignage .contenu .box .imbox img{
    position: relative;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    object-fit: cover;
    justify-content: center;
    align-items: center;
}

.temoignage .contenu .box .text{
    text-align: center;
    color: #666;
    font-style: italic;
}

.temoignage .contenu .box .text h3{
    color: #fb911f;
    margin-top: 20px;
    font-size: 1em;
    font-weight: 600;
}

.blanc .titre-texte{
    color: #2B2A2A;
}

.blanc .titre-texte,
.blanc p{
    color: #2B2A2A;
}

.contact{
    background-size: cover;
    box-shadow: 2px 2px 12px rgba(0,0,0, 0.8);
    width: 100%;
    background-position: unset;
     margin: 20px 0;
}

.contactform{
    padding: 75px 50px;
    background: #fff;
    box-shadow: 5px 15px 50px rgba(0,0,0, 0.8);
    max-width: 500px;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    margin-left: 38%;
}

.contactform .inputboite{
    position: relative;
    width: 100%;
    margin-bottom: 20px;
}

.contactform h3{
    color: #111;
    font-size: 1.2em;
    margin-bottom: 20px;
}

.contactform .inputboite input,
.contactform .inputboite textarea{
    width: 100%;
    border: 1px solid #555;
    padding: 10px;
    color: #111;
    outline: none;
    font-size: 16px;
    font-weight: 300;
    resize: none;
}

.contactform .inputboite input[type="submit"]{
    font-size: 1em;
    font-weight: 700;
    color: #ffff;
    background: #fb911f;
    display: inline-block;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    outline: none;
    border: none;
    transition: 0.5s;
    max-width: 120px;
    align-items: center;
    justify-content: center;
}

.copyright{
    padding: 20px 40px;
    border-top: 2px solid rgba(0,0,0, 0.1);
    background: rgba(228,222,222,);
    text-align: center;
}

.copyright p:nth-child(1){
    color: #333;
}

.copyright a {
    color: #fb911f;
    text-decoration: none;
    font-weight: 600;
    font-style: italic;
}

.contact .titre-text span{
    color: #fb911f;
    font-size: 2em;
}

header.sticky{
    background: #fff;
    padding: 10px 10px;
    box-shadow: 0px 5px 20px rgba(0,0,0, 0.05);
}

header.sticky .logo{
    color: #000;
}

header.sticky .navbar li a {
    color: #000;
}

header.sticky li a:hover{
    color: #fb911f;
    border-bottom: 2px solid #fb911f;
}

@media (max-width: 991px) {
header, 
header.sticky{
    padding: 10px 20px;
}

header .navbar li{
    margin-left: 0px;
}

header .navbar li a {
    text-decoration: none;
    color: #111;
    font-size: 1.6em;
    font-weight: 300;
}

.navbar{
    display: none;
}
section{
    padding: 20px;
}

header .navbar.active{
    width: 100%;
    height: calc(100% -68px);
    position: fixed;
    top: 68px;
    left:0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #ffff;
    align-items: center;
}

.menuToggle{
    position: relative;
    width: 40px;
    height: 40px;
    background-image: url(./images/menu.png);
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    background-size: 30px;
}

.menuToggle.active
{
    background-image: url(./images/close.png);
    background-size: 25px;
    background-repeat: no-repeat;
    background-origin: center;
}

header.sticky .menuToggle{
    filter: invert(1);
}


.banniere .contenu h2{
    font-size: 2em;
}

.row .col50 img{
    margin-left: 18%;
}

.contenu p:nth-child(2){
    font-size: 1.2em;
}
.expert{
    margin-top: 0px;
}

.menu{
    margin-top: 0px;
}

.row{
    display: flex;
    flex-direction: column;
}



.temoignage h2{
    font-size: 2em;
    text-align: center;
}

.temoignage p{
text-align: center;
}

.contactform{
    margin-left: 25%;
}


    .row .col50 {
        position: relative;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
    
    }

    .row{
        flex-direction: column;
    }
}

@media (max-width: 480px)
{
    .banniere .contenu h2{
        font-size: 2.2em;
        color: #fff;
    }

    .titre-text{
        color: #000;
        font-size: 2rem;
        font-weight: 300;
        text-transform: capitalize;
    }

    .temoignage h2 
    {
        font-size: 1.1em;
    }

    .temoignage p{
        text-align: center;
    }

    .div{
        padding: 20px 40px;
    border-top: 2px solid rgba(0,0,0, 0.1);
    background: rgba(228,222,222,);
    text-align: center;
   
    }
}

</style>

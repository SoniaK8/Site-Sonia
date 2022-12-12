<svelte:head>
	<title>A propos</title>
	<meta name="A Propos de moi" content="About this app" />
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


<section class="expert" id="expert">
    <div class="titre">
        <h1 class="titre-texte"> <span>E</span>ducation</h1>
       
    </div>
    <div class="contenu">
        <div class="box">
            <div class="imbox">
                <img src="https://blog.headway-advisory.com/wp-content/uploads/2017/10/Campus-Casablanca-copie-683x1024.jpg" alt="">
            </div>
            <div class="text">
                <h3>EIGSI | Ecole d'Ingénieurs Généralistes - La Rochelle | Casablanca</h3>
								<h4>Diplôme d'ingénieur généraliste - Entreprise du Futur</h4>
								<p>2019 - 2023</p>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/300511497_574188187740031_2537764759276764003_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=FSI-MakO7t8AX-dZd3c&_nc_ht=scontent-cdt1-1.xx&oh=00_AfBhKhUW-DFy94yUApq5ockvIpnBlTdm8-KnRmcXV8ZiOg&oe=639D1F51" alt="">
            </div>
            <div class="text">
                <h3>Institut Spécialisé dans les métiers de l'Automobile | ISMA - Salé </h3>
								<h4>DTS - Diplôme de Technicien Spécialisé en Mécatronique</h4>
								<p>2017-2019</p>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/301193606_513146344146725_7829771084961321685_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ZHNYCkL81DkAX8jc9p6&_nc_ht=scontent-cdg2-1.xx&oh=00_AfBuJ0OxuNAKcVr1wJRIGcZk9806dJuv7tn9fyjiqhxqtQ&oe=639C972D" alt="">
            </div>
            <div class="text">
                <h3>Gulf-Field National Advanced School of Petroleum - Limbé </h3>
								<h4>HPD - Diplôme de Technicien Spécialisé en Génie Pétrolier</h4>
								<p>2015-2017</p>
            </div>
        </div>
        <div class="box">
            <div class="imbox">
                <img src="https://scontent-cdt1-1.xx.fbcdn.net/v/t31.18172-8/28699129_1683749064997005_7712067898634209568_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=r6rR7mhhGiAAX-FiZI7&_nc_ht=scontent-cdt1-1.xx&oh=00_AfDSLx4HKolCUn5XuqL2xm0qmbAARQeAy0W5ATKxligrKw&oe=63BEE741" alt="">
            </div>
            <div class="text">
                <h3>Dauphine III</h3>
								<h4>GCE Advanced Level (BAC Anglophone)</h4>
								<p>2013-2015</p>
            </div>
        </div>
    </div>
 
</section>













</body>

<style>
.navbar2 {
    background-color: #757575;

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
.expert{
    margin-top: 0px;
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
}
</style>
<svelte:head>
	<title>A propos</title>
	<meta name="A Propos de moi" content="About this app" />
</svelte:head>

<body>
<div class="text-column">
	nouvelle page
</div>
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


</style>
//Função para mostrar o login
/* DESCARTADO NA MVP1

function showLogin() {
    let changeBlock = document.querySelector('#loginArea');
    if (showBlock == true) {
        console.log('hi')
        changeBlock.style.display = 'none';
        showBlock = false;
        console.log('Bloco de login ocultado - var == ' + showBlock);
    }

    else if (showBlock == false) {
        changeBlock.style.display = 'block';
        showBlock = true;
        console.log('Bloco de login exibido - var == ' + showBlock);

    }
}
//Mostra bloco de login
var buttonLogin = document.createElement('a');
buttonLogin.setAttribute('id','login');
buttonLogin.style.cursor = 'pointer';
buttonLogin.style.fontweight = 'bold';
buttonLogin.style.color = 'var(--color-secondary)';
buttonLogin.innerHTML = "Log in";
buttonLogin.onclick = showLogin;
var linkA = document.querySelector('span.login a');
document.querySelector('span.login').replaceChild(buttonLogin, linkA);
//document.querySelector('span.login a').innerHTML = buttonLogin;
var showBlock = false;
*/


const adminButton = document.querySelector('div.siteadminlink.nav-item.nav-link');
if(adminButton != null) {
    let divUser = document.querySelector('.nav.navbar-nav.ml-auto');
    divUser.appendChild(adminButton);
}

//navbar navbar-expand loggedNavbar

//Insere a imagem tratada no cabecalho e ajusta os elementos
//Faz diversos tratamentos para exibição do header
if (document.querySelector('div.usermenu').querySelector('span.userbutton') !=null) {
    let navbar = document.querySelector('nav.navbar');
    navbar.classList.add('loggedNavbar');
    document.querySelector('ul.navbar-nav.d-none.d-md-flex').classList.add('loggedDisplayNone');
    //document.querySelector('nav.navbar .logo img').classList.add('loggedDisplayNone');
    //document.querySelector('a.navbar-brand.has-logo').classList.add('linkNavbar');
    $('nav.fixed-top.navbar.navbar-fhs.navbar-expand.moodle-has-zindex.loggedNavbar a').removeClass('navbar-brand has-logo');
    $(".logo.d-none.d-sm-inline img").addClass("imageSizeLogged");
}

//Ícones de idioma
let langUSA = document.createElement('a');
langUSA.setAttribute('class','IconFlagHeader');
langUSA.target = "_self";

let langBR = langUSA.cloneNode(true);
langUSA.href = "https://academy.sysmanager.com.br/?lang=en"
langBR.href = "https://academy.sysmanager.com.br/?lang=pt_br"

let imgUSA = document.createElement('img');
imgUSA.setAttribute("src",'/sys-academy/images/icon-usa.svg');
imgUSA.style = 'height:15px';
imgUSA.alt = 'icon-usa';

let imgBr = document.createElement('img');
imgBr.setAttribute("src",'/sys-academy/images/icon-brazil.svg');
imgBr.style = 'height:15px';
imgBr.alt = 'icon-br';

langUSA.appendChild(imgUSA);
langBR.appendChild(imgBr);

//Cria atalho para cadastro
let logIn = document.createElement('a');
logIn.id = 'logInID';
logIn.href = '/login/index.php';
let imgLogIn = document.createElement('img');
imgLogIn.setAttribute('class', 'imgsHeader');
imgLogIn.src = '/sys-academy/images/customized-images/botao-login.png';
logIn.appendChild(imgLogIn);

let signUp = document.createElement('a');
signUp.href = '/login/signup.php?';
let imgSignup = document.createElement('img');
imgSignup.setAttribute('class', 'imgsHeader');
imgSignup.src = '/sys-academy/images/customized-images/botao-registre.png';
signUp.appendChild(imgSignup);

//let logText;

const lang = document.documentElement.lang;
switch (lang) {
    case 'en' :
        //logText = "You're not logged in ";
        //logIn.innerHTML = "Log In";
        //signUp.innerHTML = 'Signup';
        break;
    case 'pt_br':
        //logText = "Você não está logado ";
        //logIn.innerHTML = 'Entrar';
        //signUp.innerHTML = 'Registre-se';
        break;
}

var divLang = document.querySelector("span.login");
if (divLang != null) {
    divLang.innerHTML = '';
    //divLang.append(logText);
    //divLang.append("(");
    divLang.appendChild(logIn); //Insere botão de login
    divLang.append(" ");
    divLang.appendChild(signUp); //Insere botão de cadastro
    //divLang.append(")");
    divLang.appendChild(langBR);
    divLang.appendChild(langUSA);
}

else {
    var divLang = document.querySelector("ul.navbar-nav.ml-auto");
    divLang.appendChild(langBR);
    divLang.appendChild(langUSA);
}


console.log('Script de header executado com sucesso');


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
let divUser = document.querySelector('.nav.navbar-nav.ml-auto');

divUser.appendChild(adminButton);


console.log('Script de header executado com sucesso');


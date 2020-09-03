let TitleH1 = document.querySelector('div.card-title.text-xs-center h1');
document.querySelector('div.card-title.text-xs-center hr').outerHTML = "";
TitleH1.outerHTML = "";

let TitleImg = document.querySelector('div.card-title.text-xs-center');
let imgSys = document.createElement('img');
imgSys.setAttribute('class', 'imgSys');
imgSys.setAttribute('src', 'http://18.206.191.3/sys-academy/images/logo.png'); // CAMINHO EM PRODUÇÃO /sys-academy/images/logo.png'
imgSys.setAttribute('alt', 'Logo Sys Academy');

TitleImg.appendChild(imgSys);

let BtnSys = document.querySelector('.potentialidp a img').cloneNode(true);
let LinkPosition = document.querySelector('.potentialidp a')
let LinkLogin = document.querySelector('.potentialidp a').textContent = "";
LinkPosition.appendChild(BtnSys);   
LinkPosition.append("Login integrado Sys Manager");

console.log('Script da página de login executado com sucesso')
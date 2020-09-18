let imgDiv = document.createElement('div');
imgDiv.id = 'imgDiv';
let imgSys = document.createElement('img');
imgSys.id = 'imgSys';
imgSys.setAttribute('src','/sys-academy/images/logo-s.png');
let textNode = "Login Sys Manager";

imgDiv.appendChild(imgSys);
imgDiv.append(textNode);


//$('a.btn.btn-secondary.btn-block').append(imgDiv);


/* Reposiciona o título de 'novidade' */
$('#fordsonlogin').prepend($('#newsTitle'));

/* Cria mensagem de login */
let imgLogin = document.querySelector('.btn.btn-secondary.btn-block img').cloneNode(true);
let nodeText = "Login Sys Academy";
let buttonLogin = document.querySelectorAll('.btn.btn-secondary.btn-block')
buttonLogin[1].innerText = ""
buttonLogin[1].appendChild(imgLogin);
buttonLogin[1].append(nodeText);

console.log('Script da página de login executado com sucesso')


//Organiza os itens do login
/*let TitleH1 = document.querySelector('div.card-block h1');
TitleH1.outerHTML = "";
let TitleImg = document.querySelector('div.card-block');
let divContentImg = document.createElement('div');
divContentImg.id = 'divImgSys';
divContentImg.appendChild(imgSys);
TitleImg.insertBefore(divContentImg, TitleImg.children[0]);

let BtnSys = document.querySelector('.potentialidp a img').cloneNode(true);
let LinkPosition = document.querySelector('.potentialidp a')
let LinkLogin = document.querySelector('.potentialidp a').textContent = "";
LinkPosition.appendChild(BtnSys);   
LinkPosition.append("Login integrado Sys Manager");*/


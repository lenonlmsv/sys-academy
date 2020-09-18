//Cria a div em cinza escuro no fim da página e reposiciona o conteúdo
const divFooter = document.createElement('div');
divFooter.setAttribute('id','divFooter');

const divMedium = document.createElement('div');
divMedium.setAttribute('id','divMedium');

const divContent = document.createElement('div');
divContent.setAttribute('id','divContent');
divContent.innerHTML = "Legal notice";

const divBackTop = document.createElement('div');
divBackTop.setAttribute('id','divBackTop');
let h1 = document.createElement('h1');
h1.innerHTML = "Apagar";
divBackTop.appendChild(h1);

divMedium.appendChild(divContent);
divMedium.appendChild(divBackTop);

divFooter.appendChild(divMedium);

document.querySelector('#page-footer').appendChild(divFooter);

window.onload = function() {
    const backTop = document.querySelector('#back-to-top').cloneNode(true);
    document.getElementById('back-to-top').outerHTML = ""
    document.getElementById('divBackTop').appendChild(backTop);
}

//muda os ícones 
document.querySelector('i.fa.fa-globe').setAttribute('class','fa fa-map-marker');
document.querySelector('i.fa.fa-mobile-phone').setAttribute('class','fa fa-phone');      

console.log("Script de footer executado com sucesso.")


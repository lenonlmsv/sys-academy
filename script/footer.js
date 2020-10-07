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
    /*const backTopElement = document.querySelector('#back-to-top');
    const backTop = backTopElement.cloneNode(true);
    
    if (backTop != null) {
        document.getElementById('back-to-top').outerHTML = ""
        document.getElementById('divBackTop').appendChild(backTop);
    }*/

    /* Move o forms para o local correto */
    const formEmbed = document.querySelector('#mc_embed_signup');
    if (formEmbed != null) {
        //document.querySelectorAll('.markettiles .col-md-4')[1].appendChild(c);
        var divForm = document.querySelector('#page-footer div.col-md-8');
        divForm.insertBefore(formEmbed,divForm.children[1]);
    }
}


//muda os ícones 
document.querySelector('i.fa.fa-globe').setAttribute('class','fa fa-map-marker');
document.querySelector('i.fa.fa-mobile-phone').setAttribute('class','fa fa-phone');

//Ícones de idioma
    let langUSAFooter = document.createElement('a');
    langUSAFooter.setAttribute('class','IconFlagFooter');
    langUSAFooter.target = "_self";

    let langBRFooter = langUSAFooter.cloneNode(true);
    langUSAFooter.href = "https://academy.sysmanager.com.br/?lang=en"
    langBRFooter.href = "https://academy.sysmanager.com.br/?lang=pt_br"

    let imgUSAFooter = document.createElement('img');
    imgUSAFooter.setAttribute("src",'/sys-academy/images/icon-usa.svg');
    imgUSAFooter.style = 'height:2rem';
    imgUSAFooter.alt = 'icon-usa';

    let imgBrFooter = document.createElement('img');
    imgBrFooter.setAttribute("src",'/sys-academy/images/icon-brazil.svg');
    imgBrFooter.style = 'height:2rem';
    imgBrFooter.alt = 'icon-br';

    langUSAFooter.appendChild(imgUSAFooter);
    langBRFooter.appendChild(imgBrFooter);

    let divFooterLanguage = document.createElement('div');
    divFooterLanguage.setAttribute('class', 'languageFooter');
    divFooterLanguage.appendChild(langBRFooter);
    divFooterLanguage.appendChild(langUSAFooter);

    let divLangFooter = document.querySelector("#page-footer div.col-md-4");
    divLangFooter.appendChild(divFooterLanguage);


console.log("Script de footer executado com sucesso.");
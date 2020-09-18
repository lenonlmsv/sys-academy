//Reposiciona elementos na página e insere outros
let divTitle = document.createElement('div');
//divTitle.setAttribute('style', 'display:flex; justify-content:center; margin: 1rem 0 4rem 0;');
divTitle.setAttribute('id', 'mktDiv');

/*let titleMkt = document.querySelector('div#frontpage-available-course-list h2').cloneNode(true);
titleMkt.setAttribute('id', 'mktTitle');*/

let titleMkt = document.createElement('h2');
titleMkt.id = 'mktTitle';

titleMkt.innerHTML = 'Mural';
divTitle.appendChild(titleMkt);

let mktArea = document.querySelector('#region-main');
mktArea.insertBefore(divTitle, mktArea.children[4]);

let cardsTitle = document.querySelectorAll('h3.card-title');

for (i = 0; i < cardsTitle.length; i++) {
    if (i % 2 != 0) {
        cardsTitle[i].setAttribute('style','background-color:var(--color-primary-light)!important');
        console.log('Cores alteradas')
    }

    else {
        cardsTitle[i].setAttribute('style','background-color:var(--color-secondary)!important');
        console.log('Cores alteradas')
    }
}

//Insere a linha acima dos títulos dentro da página
/*let hr = document.createElement('hr');
hr.setAttribute('class', 'fade-line');

let divCategories = document.querySelector('#frontpage-category-names');
divCategories.insertBefore(hr.cloneNode(true),divCategories.children[0]);

let instuctorArea = document.querySelector('#instuctorArea');
instuctorArea.insertBefore(hr.cloneNode(true),instuctorArea.children[0]);

let mktDiv = document.querySelector('#instuctorArea');
instuctorArea.insertBefore(hr.cloneNode(true),instuctorArea.children.length[-2]);
instuctorArea.appendChild(divTitle); //Acrescenta o 'Mural'*/

//Insere imagens nos links de categoria
let imgCategory = document.createElement('img');
imgCategory.className = "imgCategory";

let divsToCategories = document.getElementsByClassName('category notloaded');
for (i=0; i < divsToCategories.length; i++) {
    divsToCategories[i].insertBefore(imgCategory.cloneNode(true), divsToCategories[i].children[0])
    //Insere imagem de tecnologia
    if (divsToCategories[i].querySelector('a').innerHTML == "Tecnologia") {
        divsToCategories[i].childNodes[0].setAttribute('src','/sys-academy/images/customized-images/botao-tecnologia.png');
        divsToCategories[i].childNodes[0].setAttribute('alt','Tecnologia');
        //divsToCategories[i].childNodes[1].childNodes[0].setAttribute('style','background-color:var(--color-primary); background-image:none!important');
    }
    //Insere imagem de gestão
    else if (divsToCategories[i].querySelector('a').innerHTML == "Gestão") {
        divsToCategories[i].childNodes[0].setAttribute('src','/sys-academy/images/customized-images/botao-gestao.png');
        divsToCategories[i].childNodes[0].setAttribute('alt','Gestão');
        //divsToCategories[i].childNodes[1].childNodes[0].setAttribute('style','background-color:var(--color-secondary-dark); background-image:none!important');
    }
}

//Reposiciona o botão
let buttonCourse = document.getElementById('buttonCourses');
document.querySelector('div.course_category_tree.clearfix.frontpage-category-names').appendChild(buttonCourse);

//Retira o menu expansível das telas de home e login
let pageName = document.querySelector('body').id;
let unloggedUser = document.querySelector('span.login').innerHTML;
if (pageName.includes('page-site-index' || 'page-course-index-category' && unloggedUser.includes('You are not logged in'))) {
    document.querySelector('div.d-inline-block.mr-3').outerHTML = "";
}

/* Reposiciona itens dentro da área de marketing */
let contentsDivMkt = document.getElementById('page-content').querySelectorAll('div.text_to_html');
let primeDivMktg = document.getElementById('page-content').querySelectorAll('div.market-tile');
let eraseContent = document.getElementById('page-content').querySelectorAll('div.marketcontent.marketing1image');

for (i = 0; i < primeDivMktg.length; i++) {
        primeDivMktg[i].appendChild(contentsDivMkt[i]);
        eraseContent[0].innerHTML = ""
}

/* Decora o elemento do meio na área de marketing */
document.querySelectorAll('#region-main .markettiles div.col-md-4')[1].style.border = "1px solid gray";
document.querySelectorAll('#region-main .markettiles div.col-md-4')[1].style.borderRadius = "10px";

/* Move o forms para o local correto */
var c = document.querySelector('#signupForm');
document.querySelectorAll('.markettiles .col-md-4')[1].appendChild(c);

console.log("Script da homepage executado com sucesso")
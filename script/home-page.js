let divTitle = document.createElement('div');
divTitle.setAttribute('style', 'display:flex; justify-content:center;');
divTitle.setAttribute('id', 'mktDiv');

let titleMkt = document.querySelector('div#frontpage-available-course-list h2').cloneNode(true);
titleMkt.setAttribute('id', 'mktTitle');

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
}

console.log("Script da homepage executado com sucesso")
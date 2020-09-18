//Seleciona o estilo a ser importado para a página
let pageTitleControler = document.querySelector('body').id;

//Insere os elementos na home sem estar logado
if (pageTitleControler.includes('page-site-index') && ($('div.usermenu span.login').text().includes('ainda não se identificou') || $('div.usermenu span.login').text().includes('not logged'))) {
    //Insere o CSS correspondente
    let homePageCSS = document.createElement('link');
    homePageCSS.href = '/sys-academy/style/home-page.css';
    homePageCSS.rel = 'stylesheet';
    document.head.appendChild(homePageCSS);
    /*let homePageCSSPartial = document.createElement('link');
    homePageCSSPartial.href = '/sys-academy/style/home-page-partial-html.css';
    homePageCSSPartial.rel = 'stylesheet';
    document.head.appendChild(homePageCSSPartial);*/
    //Insere o JS correspondente
    let homePageScript = document.createElement('script');
    homePageScript.type = 'text/javascript';
    homePageScript.src = '/sys-academy/script/home-page.js'
    document.body.appendChild(homePageScript);
    let homePageScriptPartial = document.createElement('script');
    homePageScriptPartial.type = 'text/javascript';
    homePageScriptPartial.src = '/sys-academy/script/home-page-partial.js'
    document.body.appendChild(homePageScriptPartial);
    console.log('Script page-site-index (sem login) executado')
}

else if (pageTitleControler.includes('page-site-index') && document.querySelector('div.usermenu').querySelector('span.userbutton') != null) {
    /* Remove elementos quando logado */
    $('#frontpage-available-course-list, div.markettiles, #mc_embed_signup').css('display','none');
    
    const newLocal = window.onload = () => { $('#mc_embed_signup').css('display', 'none'); };
    newLocal();
    console.log('Script page-site-index (logado) executado')  
}

//Insere os elementos na página de login
else if (pageTitleControler.includes('page-login-index')) {
    //Insere o CSS correspondente
    let loginPageCSS = document.createElement('link');
    loginPageCSS.href = '/sys-academy/style/login-page.css';
    loginPageCSS.rel = 'stylesheet';
    document.head.appendChild(loginPageCSS);
    //Insere o JS correspondente
    let loginPageScript = document.createElement('script');
    loginPageScript.type = 'text/javascript';
    loginPageScript.src = '/sys-academy/script/login-page.js'
    document.body.appendChild(loginPageScript);
}

//Insere os elementos no dashboard
//Páginas que tenham o menu lateral
else if (pageTitleControler.includes('page-my-index')) {
    //Insere o CSS correspondente
    let dashboardPageCSS = document.createElement('link');
    dashboardPageCSS.href = '/sys-academy/style/dashboard-page.css';
    dashboardPageCSS.rel = 'stylesheet';
    document.head.appendChild(dashboardPageCSS);
    //Insere o JS correspondente
    /*let dashboardPageScript = document.createElement('script');
    dashboardPageScript.type = 'text/javascript';
    dashboardPageScript.src = '/sys-academy/script/dashboard-page.js'
    document.body.appendChild(dashboardPageScript);*/
}

else if (pageTitleControler.includes('page-calendar-view')) {
    //Insere o CSS correspondente
    let calendarPageCSS = document.createElement('link');
    calendarPageCSS.href = '/sys-academy/style/calendar-page.css';
    calendarPageCSS.rel = 'stylesheet';
    document.head.appendChild(calendarPageCSS);
    console.log('Script de página de calendário executado com sucesso')
    //Insere o JS correspondente
    /*let calendarPageScript = document.createElement('script');
    calendarPageScript.type = 'text/javascript';
    calendarPageScript.src = '/sys-academy/script/calendar-page.js'
    document.body.appendChild(calendarPageScript);*/
}

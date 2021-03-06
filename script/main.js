//Seleciona o estilo a ser importado para a página
let pageTitleControler = document.querySelector('body').id;
let pageGiveClasses = document.querySelector('div.giveClassSelector');

//Insere os elementos na home sem estar logado
if (pageTitleControler.includes('page-site-index') && $('#logInID' != null)) {
    //$('div.usermenu span.login').text().includes('ainda não se identificou') || $('div.usermenu span.login').text().includes('not logged'))) {
    
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
    console.log('Script page-site-index executado')
    
    //Executa na página interna de 'home'
    if (pageTitleControler.includes('page-site-index') && document.querySelector('div.usermenu').querySelector('span.userbutton') != null) {
        /* Remove elementos quando logado */
        //$('#frontpage-available-course-list, div.markettiles, #mc_embed_signup').css('display','none');

        
        console.log('Script page-site-index (logado) executado')  
    }
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
    let dashboardPageScript = document.createElement('script');
    dashboardPageScript.type = 'text/javascript';
    dashboardPageScript.src = '/sys-academy/script/dashboard-page.js'
    document.body.appendChild(dashboardPageScript);
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

else if (pageTitleControler.includes('page-login-signup')) {
    //Insere o CSS correspondente
    let pageSignUp = document.createElement('link');
    pageSignUp.href = '/sys-academy/style/signup-page.css';
    pageSignUp.rel = 'stylesheet';
    document.head.appendChild(pageSignUp);
    console.log('Script de página de cadastro executado com sucesso')
    //Insere o JS correspondente
    /*let pageSignUpScript = document.createElement('script');
    pageSignUpScript.type = 'text/javascript';
    pageSignUpScript.src = '/sys-academy/script/signup-page.js' //Ainda não criado
    document.body.appendChild(pageSignUpScript);*/
}

//Importa o script para as páginas criadas com o plugin
/*else if (pageTitleControler.includes('page-login-signup') && pageGiveClasses != null) {
    //Insere o CSS correspondente
    let giveClassesStyle = document.createElement('link');
    giveClassesStyle.href = '/sys-academy/style/give-classes-page.css';
    giveClassesStyle.rel = 'stylesheet';
    document.head.appendChild(giveClassesStyle);
    console.log('Script de página de cadastro executado com sucesso')
    //Insere o JS correspondente
    let giveClassesScript = document.createElement('script');
    giveClassesScript.type = 'text/javascript';
    giveClassesScript.src = '/sys-academy/script/give-classes-page.js' //Ainda não criado
    document.body.appendChild(giveClassesScript);
}*/

(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    console.log(openButton)

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
        console.log("prueba click")
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });
})();
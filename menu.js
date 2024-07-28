(() => {
    const refs = {
    openMenuBtn: document.querySelector('.mob-menu-open-btn'),
    closeMenuBtn: document.querySelector('.mob-menu-close-btn'),
    menu: document.querySelector('.mob-menu'),
    };
    
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    
    function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    }
    })();    
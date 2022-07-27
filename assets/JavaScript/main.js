// ========= manu show y Hidden ======== // 
const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'), 
 navClose = document.getElementById('nav-close');

// ======= Menu Show ========= //
//validate if constant exists
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// ======= MENU HIDDEN ====== // 
// Validate if constants exists 
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

//============ remove menu mobile ======= // 
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// =============ACCORDION LIST========== //

// ============ QUALIFICATION TABS =======  // 

// ========== SERVICES MODAL =========== // 



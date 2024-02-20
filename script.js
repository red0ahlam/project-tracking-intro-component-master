const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.getElementById('main-navigation');

mobileToggle.addEventListener('click', ()=>{
    if (mobileToggle.getAttribute('aria-expanded') == 'true'){
        mobileToggle.setAttribute('aria-expanded','false')
    }else {
        mobileToggle.setAttribute('aria-expanded','true')
    }
    nav.classList.toggle('hide')
})

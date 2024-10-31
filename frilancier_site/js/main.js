let btn = document.querySelector('.nav_btn');
let nav_btn_img = document.querySelector('.nav_btn img');
let nav_elem = document.querySelector('.nav');
let if_short_menu_open = false;
btn.addEventListener('click', () => {
    if (!if_short_menu_open) {
        nav_elem.classList.add('open')
        nav_btn_img.setAttribute('src', 'img/icons/nav-close.svg');
        if_short_menu_open=true;
    }
    else{
        nav_elem.classList.remove('open');
        nav_btn_img.setAttribute('src', 'img/icons/nav-open.svg');
        if_short_menu_open=false;
    }
})
AOS.init({
    disable:'phone',
    once:true
});
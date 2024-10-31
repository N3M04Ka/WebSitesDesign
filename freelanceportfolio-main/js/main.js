let btn_dark = document.querySelector('.dark_mode_btn');

if(window.matchMedia&&window.matchMedia('(prefers-color-shceme:dark)').matches){
    btn_dark.classList.toggle("dmb_active")
    document.querySelector('body').classList.add('dark');
}

if (localStorage.getItem('darkMode') == 'dark') {
    btn_dark.classList.toggle("dmb_active")
    document.querySelector('body').classList.add('dark');
}
else if (localStorage.getItem('darkMode') == 'light') {
    btn_dark.classList.remove("dmb_active")
    document.querySelector('body').classList.remove('dark');
}

btn_dark.onclick = function () {
    btn_dark.classList.toggle("dmb_active")
    let isdark = document.querySelector('body').classList.toggle('dark')
    if (isdark)
        localStorage.setItem('darkMode', 'dark');
    else
        localStorage.setItem('darkMode', 'light');
}
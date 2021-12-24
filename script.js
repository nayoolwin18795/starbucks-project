const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const mask = document.getElementById('menu-mask')

function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    mask.classList.toggle('mobile-menu-mask')
    document.body.classList.toggle('no-scroll')
}

window.onscroll = (e) => {
    if (window.pageYOffset > 0 && window.pageYOffset < 86) {
        nav.style.top = 85 - window.pageYOffset + "px"
        mask.style.top = 85 - window.pageYOffset + "px"
    }
}

btn.addEventListener('click', navToggle)
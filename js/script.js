const togglebutton = document.getElementsByClassName('menu-btn')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

togglebutton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})
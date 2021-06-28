const toggleMenu = document.querySelector('.toggle-menu');
const mobileNav = document.querySelector('.mobile-nav');
const backdrop = document.querySelector('.backdrop');

toggleMenu.addEventListener('click', function () {
    mobileNav.classList.add('open-mobile-nav');
    backdrop.classList.add('open-backdrop')
})

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open-mobile-nav');
    backdrop.classList.remove('open-backdrop');
})
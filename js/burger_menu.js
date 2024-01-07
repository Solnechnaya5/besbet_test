let burgerIcon = document.querySelector('.burger-menu-icon');
let burgerMenu = document.querySelector('.burger-menu');

burgerIcon.addEventListener('click', function showMenu() {
    burgerIcon.classList.toggle('open-menu');
    burgerMenu.classList.toggle('open-menu');
})
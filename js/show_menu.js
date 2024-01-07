let openers = document.querySelectorAll('.footer-links__column-title');
let menuLinks = document.querySelectorAll('.footer-links__list');

function removeOpenClass() {
    menuLinks.forEach((menuLinks) => menuLinks.classList.remove('active'));
  }

for (let i = 0; i < openers.length; i++) {
    openers[i].onclick = function openAnswer() {
        removeOpenClass();
        openers[i].querySelector('.expand-box__arrow').classList.toggle('transform');
        menuLinks[i].classList.add('active');
    }
    

}
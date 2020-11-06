import img from './icon-opener.svg';

const toggleElement = document.querySelector('.main-nav__toggle');
const menuElement = document.querySelector('.main-nav');

function changeMenuClass() {
  menuElement.classList.toggle('main-nav--closed');
  menuElement.classList.toggle('main-nav--opened');
}

function changeAriaLabelAttribute() {
  let ariaValue = menuElement.classList.contains('main-nav--closed')
    ? 'Открыть меню'
    : 'Закрыть меню';

  toggleElement.setAttribute('aria-label', ariaValue)
}

function onNavToggleClick() {
  changeMenuClass();
  changeAriaLabelAttribute();
}

toggleElement.addEventListener('click', onNavToggleClick)
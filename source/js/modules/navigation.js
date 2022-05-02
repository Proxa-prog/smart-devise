const navigationButton = document.querySelector('.footer__navigation-button');
const footerNavigation = document.querySelector('.footer__navigation');
const navigationList = document.querySelector('.footer__navigation-list');
const navigationListTitle = footerNavigation.querySelector('h2');

const navigationListOpen = () => {
  navigationButton.addEventListener('click', () => {
    navigationList.classList.toggle('footer__navigation-list--open');
    navigationListTitle.classList.toggle('footer__navigation-before--open');
    navigationListTitle.classList.toggle('footer__navigation-before--closed');
  });
};

export default navigationListOpen;

const navigationList = document.querySelector('.footer__navigation-list');
const contactsList = document.querySelector('.footer__contacts-list');

const jsOn = () => {
  navigationList.classList.remove('footer__navigation-list--open');
  contactsList.classList.remove('footer__contacts-list--open');
};

export default jsOn;

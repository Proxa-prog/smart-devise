const navigationButton = document.querySelector('.footer__navigation-button');
const footerNavigation = document.querySelector('.footer__navigation');
const navigationList = document.querySelector('.footer__navigation-list');
const navigationListTitle = footerNavigation.querySelector('h2');
const footerContacts = document.querySelector('.footer__contacts');
const contactsList = document.querySelector('.footer__contacts-list');
const contactsListTitle = footerContacts.querySelector('h2');

const navigationListOpen = () => {
  navigationButton.addEventListener('click', () => {
    if (contactsList.classList.contains('footer__contacts-list--open')) {
      contactsList.classList.remove('footer__contacts-list--open');
      contactsListTitle.classList.remove('footer__contacts-before--open');
    }

    navigationList.classList.toggle('footer__navigation-list--open');
    navigationListTitle.classList.toggle('footer__navigation-before--open');
    navigationListTitle.classList.toggle('footer__navigation-before--closed');
  });
};

export default navigationListOpen;

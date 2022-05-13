const footerContacts = document.querySelector('.footer__contacts');
const contactsList = document.querySelector('.footer__contacts-list');
const contactsListTitle = footerContacts.querySelector('h2');
const contactsButton = document.querySelector('.footer__contacts-button');

const footerNavigation = document.querySelector('.footer__navigation');
const navigationList = document.querySelector('.footer__navigation-list');
const navigationListTitle = footerNavigation.querySelector('h2');

const contactsListOpen = () => {
  contactsButton.addEventListener('click', () => {
    if (navigationList) {
      if (navigationList.classList.contains('footer__navigation-list--open')) {
        navigationList.classList.remove('footer__navigation-list--open');
        navigationListTitle.classList.remove('footer__navigation-before--open');
      }
    }

    contactsList.classList.toggle('footer__contacts-list--open');
    contactsListTitle.classList.toggle('footer__contacts-before--open');
    contactsListTitle.classList.toggle('footer__contacts-before--closed');
  });
};

export default contactsListOpen;

const navigationBotton = document.querySelector('.footer__navigation-button');
const navigationList = document.querySelector('.footer__navigation-list');

const accordionOpen = () => {
  navigationBotton.addEventListener('click', () => {
    navigationList.style.display = 'block';
  });
}

export default accordionOpen;

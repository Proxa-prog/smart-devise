import {buttonShowMore, textHidden, TABLET_WIDTH} from './variables';

const aboutCompanyButton = () => {
  buttonShowMore.addEventListener('click', () => {
    let windowWidth = document.documentElement.clientWidth;

    if (buttonShowMore.textContent === 'Подробнее') {
      buttonShowMore.textContent = 'Свернуть';
    } else {
      buttonShowMore.textContent = 'Подробнее';
    }

    if (windowWidth >= TABLET_WIDTH) {
      for (let i = 0; i < textHidden.length; i++) {
        textHidden[i].classList.toggle('about-company__text-show');
        textHidden[0].classList.toggle('about-company__text-show');
        textHidden[i].classList.toggle('about-company__text-hidden');
        textHidden[0].classList.toggle('about-company__text-hidden');
      }
    } else {
      for (let i = 0; i < textHidden.length; i++) {
        textHidden[i].classList.toggle('about-company__text-show');
        textHidden[i].classList.toggle('about-company__text-hidden');
      }
    }
  });
};

export default aboutCompanyButton;

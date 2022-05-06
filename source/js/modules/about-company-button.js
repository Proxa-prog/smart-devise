import {buttonShowMore, textHidden, TABLET_WIDTH} from './variables';

const aboutCompanyButton = () => {
  buttonShowMore.addEventListener('click', () => {
    let windowWidth = document.documentElement.clientWidth;

    if (windowWidth >= TABLET_WIDTH) {
      for (let i = 0; i < textHidden.length; i++) {
        textHidden[i].classList.toggle('about-company__text-show');
        textHidden[0].classList.toggle('about-company__text-show');
      }
    } else {
      for (let i = 0; i < textHidden.length; i++) {
        textHidden[i].classList.toggle('about-company__text-show');
      }
    }
  });
};

export default aboutCompanyButton;

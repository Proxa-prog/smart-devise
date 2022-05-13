import {TABLET_WIDTH, textHidden} from './variables';
import aboutCompanyButton from './about-company-button';

let windowWidth = document.documentElement.clientWidth;

const checkWindowWidth = () => {
  if (windowWidth >= TABLET_WIDTH) {
    for (let i = 0; i < textHidden.length; i++) {
      textHidden[0].classList.add('about-company__text-hidden');
      textHidden[1].classList.add('about-company__text-show');
      textHidden[2].classList.add('about-company__text-show');
    }

    aboutCompanyButton();
  } else {
    for (let i = 1; i < textHidden.length; i++) {
      textHidden[i].classList.add('about-company__text-show');
    }

    aboutCompanyButton();
  }
};

export default checkWindowWidth;

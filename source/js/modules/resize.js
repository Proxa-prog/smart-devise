import {TABLET_WIDTH, textHidden} from './variables';
import aboutCompanyButton from './about-company-button';

const resizeWindow = () => {
  window.addEventListener('resize', () => {
    let windowWidth = document.documentElement.clientWidth;

    if (windowWidth >= TABLET_WIDTH) {
      for (let i = 0; i < textHidden.length; i++) {
        textHidden[i].classList.remove('about-company__text-show');
      }
      aboutCompanyButton();
    } else {
      aboutCompanyButton();
    }
  });
};

export default resizeWindow;

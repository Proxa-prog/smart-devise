const anchorsLinks = document.querySelectorAll('a[href^="#"]');

const smoothScroll = () => {
  for (let anchorLink of anchorsLinks) {
    anchorLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = anchorLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export default smoothScroll;

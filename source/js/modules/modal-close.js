const buttonClose = document.querySelector('.modal-feedback__button-close');
const modalFeedback = document.querySelector('.modal-feedback');
const isOpen = document.querySelector('.is-open');

const modalClose = () => {
  isOpen.addEventListener('click', () => {
    isOpen.style.display = 'none';
    modalFeedback.style.display = 'none';
  });

  buttonClose.addEventListener('click', () =>{
    isOpen.style.display = 'none';
    modalFeedback.style.display = 'none';
  });
};

export default modalClose;

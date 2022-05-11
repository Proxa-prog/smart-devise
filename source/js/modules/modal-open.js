const buttonOpen = document.querySelector('.header__button');
const modalFeedback = document.querySelector('.modal-feedback');
const isOpen = document.querySelector('.is-open');
const inputName = document.querySelector('.modal-feedback__name');

const modalOpen = () => {
  buttonOpen.addEventListener('click', () => {
    isOpen.style.display = 'block';
    modalFeedback.style.display = 'block';
    inputName.focus();
  });
};

export default modalOpen;

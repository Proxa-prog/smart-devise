const element = document.getElementById('phone-maks');
const modalMask = document.getElementById('phone-mask-modal');

const maskOptions = {
  mask: '+{7}(000)000-00-00',
};
const mask = IMask(element, maskOptions);
const mask2 = IMask(modalMask, maskOptions);

const deliveryPopup = document.querySelector("#delivery-popup");
const body = document.querySelector("body");

export const closeModal = () => {
  deliveryPopup.classList.remove("delivery-popup--active");
  body.classList.remove("lock");
};

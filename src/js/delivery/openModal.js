const deliveryPopup = document.querySelector("#delivery-popup");
const body = document.querySelector("body");

export const openModal = () => {
  deliveryPopup.classList.add("delivery-popup--active");
  body.classList.add("lock");
};

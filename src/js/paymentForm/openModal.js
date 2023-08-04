const paymentPopup = document.querySelector("#payment-popup");
const body = document.querySelector("body");

export const openModal = () => {
  paymentPopup.classList.add("payment-popup--active");
  body.classList.add("lock");
};

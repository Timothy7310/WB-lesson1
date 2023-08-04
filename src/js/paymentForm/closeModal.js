const paymentPopup = document.querySelector("#payment-popup");
const body = document.querySelector("body");

export const closeModal = () => {
  paymentPopup.classList.remove("payment-popup--active");
  body.classList.remove("lock");
};

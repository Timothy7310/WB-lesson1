import { openModal } from "./openModal";
import { closeModal } from "./closeModal";
import { changePaymentData } from "./changePaymentData";

export const handlePaymentForm = () => {
  const changePaymentButton = document.querySelector("#change-payment-button");
  const paymentPopupOverlay = document.querySelector("#payment-popup-overlay");
  const paymentPopupCloseButton = document.querySelector(
    "#payment-popup-close"
  );
  const paymentForm = document.querySelector("#payment-form");

  changePaymentButton.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });

  paymentPopupOverlay.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
  });

  paymentPopupCloseButton.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
  });

  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    changePaymentData();
    closeModal();
  });
};

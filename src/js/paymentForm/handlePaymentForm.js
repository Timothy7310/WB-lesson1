import { openModal } from "./openModal";
import { closeModal } from "./closeModal";
import { changePaymentData } from "./changePaymentData";

export const handlePaymentForm = () => {
  const changePaymentButton = document.querySelector("#change-payment-button");
  const changePaymentOrderButton = document.querySelector(
    "#order-payment-change"
  );
  const paymentPopupOverlay = document.querySelector("#payment-popup-overlay");
  const paymentPopupCloseButton = document.querySelector(
    "#payment-popup-close"
  );
  const paymentForm = document.querySelector("#payment-form");

  changePaymentButton.addEventListener("click", openModal);
  changePaymentOrderButton.addEventListener("click", openModal);

  paymentPopupOverlay.addEventListener("click", closeModal);

  paymentPopupCloseButton.addEventListener("click", closeModal);

  paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    changePaymentData();
    closeModal();
  });
};

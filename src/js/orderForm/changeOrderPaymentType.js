export const changeOrderPaymentType = () => {
  const orderPaymentCheckbox = document.querySelector(
    'input[name="order-payment-type"]'
  );
  const submitButton = document.querySelector("#order-submit");
  const totalPriceInput = document.querySelector('input[name="order-price"]');
  const orderPaymentTypeInput = document.querySelector(
    'input[name="order-payment"]'
  );
  const price = +totalPriceInput.value;
  const paymentOfflineText = document.querySelector(
    ".order__payment-type-text"
  );

  if (orderPaymentCheckbox.checked) {
    if (price === 0) {
      submitButton.textContent = "Заказать";
      submitButton.disabled = true;
      return;
    }
    submitButton.textContent = `Оплатить ${price.toLocaleString()} сом`;
    paymentOfflineText.classList.add("order__payment-type-text--hide");
    orderPaymentTypeInput.value = "online";
    submitButton.disabled = false;
  } else {
    submitButton.textContent = "Заказать";
    paymentOfflineText.classList.remove("order__payment-type-text--hide");
    orderPaymentTypeInput.value = "offline";
    submitButton.disabled = false;
  }
};

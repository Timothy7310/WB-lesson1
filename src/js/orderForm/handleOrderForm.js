import { openTooltip } from "./openTooltip";
import { changeOrderPaymentType } from "./changeOrderPaymentType";

export const handleOrderForm = () => {
  const orderForm = document.querySelector("#order-form");
  const orderDeliveryTooltip = document.querySelector(
    "#order-delivery-tooltip"
  );

  const orderPaymentCheckbox = document.querySelector(
    'input[name="order-payment-type"]'
  );

  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  orderDeliveryTooltip.addEventListener("click", openTooltip);

  orderPaymentCheckbox.addEventListener("click", changeOrderPaymentType);
};

import { openTooltip } from "./openTooltip";

export const handleOrderForm = () => {
  const orderForm = document.querySelector("#order-form");
  const orderDeliveryTooltip = document.querySelector(
    "#order-delivery-tooltip"
  );

  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  orderDeliveryTooltip.addEventListener("click", openTooltip);
};

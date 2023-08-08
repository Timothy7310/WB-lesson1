import { openDeliveryTooltip } from "./openDeliveryTooltip";

export const handleDelivery = () => {
  const deliveryTooltipButton = document.querySelector("#delivery-tooltip");

  deliveryTooltipButton.addEventListener("click", openDeliveryTooltip);
};

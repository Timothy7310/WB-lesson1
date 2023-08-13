import { openDeliveryTooltip } from "./openDeliveryTooltip";
import { toggleDeliveryList } from "./toggleDeliveryList";
import { openModal } from "./openModal";
import { closeModal } from "./closeModal";

export const handleDelivery = () => {
  const deliveryTooltipButton = document.querySelector("#delivery-tooltip");
  const deliveryPopupForm = document.querySelector("#delivery-popup-form");
  const changeDeliveryButton = document.querySelector(
    "#change-delivery-button"
  );
  const orderChangeDeliveryButton = document.querySelector(
    "#order-delivery-change"
  );
  const deliveryPopupOverlay = document.querySelector(
    "#delivery-popup-overlay"
  );
  const deliveryPopupCloseButton = document.querySelector(
    "#delivery-popup-close"
  );
  const deliveryAddress = document.querySelector("#delivery-address");
  const orderDeliveryAddress = document.querySelector(
    "#order-delivery-address"
  );
  const orderDeliveryAddressInput = document.querySelector(
    'input[name="order-address"]'
  );

  const deliveryTypeSelector = 'input[name="delivery-type"]';
  const deliveryAddressSelector = 'input[name="delivery-address"]';

  let address =
    document.querySelector('input[name="delivery-address"]:checked')?.value ??
    "";

  changeDeliveryButton.addEventListener("click", openModal);
  orderChangeDeliveryButton.addEventListener("click", openModal);

  deliveryPopupOverlay.addEventListener("click", closeModal);

  deliveryPopupCloseButton.addEventListener("click", closeModal);

  deliveryTooltipButton.addEventListener("click", openDeliveryTooltip);

  deliveryPopupForm.addEventListener("change", (e) => {
    const target = e.target;

    if (target.closest(deliveryTypeSelector)) {
      const element = target.closest(deliveryTypeSelector);
      toggleDeliveryList(element.value);
    }

    if (target.closest(deliveryAddressSelector)) {
      const element = target.closest(deliveryAddressSelector);
      address = element.value;
    }
  });

  deliveryPopupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    deliveryAddress.textContent = address;
    orderDeliveryAddress.textContent = address;
    orderDeliveryAddressInput.value = address;
    closeModal();
  });
};

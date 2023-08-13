export const toggleDeliveryList = (type) => {
  const listCourier = document.querySelector("#delivery-address-courier");
  const listPickUp = document.querySelector("#delivery-address-pick-up");
  const activeClass = "delivery-popup__form-addresses-list--active";

  if (type === "courier") {
    listCourier.classList.add(activeClass);
    listPickUp.classList.remove(activeClass);
  } else if (type === "pick-up") {
    listCourier.classList.remove(activeClass);
    listPickUp.classList.add(activeClass);
  }
};

import { isFormValid } from "../contactsForm/isFormValid";

export const disabledOrderSubmit = () => {
  const orderSubmit = document.querySelector("#order-submit");
  if (isFormValid()) {
    orderSubmit.disabled = false;
  } else {
    orderSubmit.disabled = true;
  }
};

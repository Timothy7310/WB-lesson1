import { openTooltip } from "./openTooltip";
import { changeOrderPaymentType } from "./changeOrderPaymentType";
import { formValidation } from "../contactsForm/formValidation";
import { disabledOrderSubmit } from "./disabledOrderSubmit";
import { isFormValid } from "../contactsForm/isFormValid";

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
    formValidation();
    disabledOrderSubmit();

    if (!isFormValid()) {
      return;
    }

    console.log("submited");
  });

  orderDeliveryTooltip.addEventListener("click", openTooltip);

  orderPaymentCheckbox.addEventListener("click", changeOrderPaymentType);
};

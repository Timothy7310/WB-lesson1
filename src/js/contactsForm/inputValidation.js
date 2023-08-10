import { disabledOrderSubmit } from "../orderForm/disabledOrderSubmit";

export const inputValidation = (input, inputValue, validationFunc) => {
  const errorClass = "contacts__item-input--error";

  if (inputValue.length === 0) {
    return;
  }

  if (validationFunc(inputValue)) {
    input.classList.remove(errorClass);
  } else {
    input.classList.add(errorClass);
  }

  disabledOrderSubmit();
};

import { nameValidation } from "./nameValidation";
import { emailValidation } from "./emailValidation";
import { phoneValidation } from "./phoneValidation";
import { tinValidation } from "./tinValidation";

export const formValidation = () => {
  const nameInput = document.querySelector('input[name="contacts-name"]');
  const secondnameInput = document.querySelector(
    'input[name="contacts-secondname"]'
  );
  const emailInput = document.querySelector('input[name="contacts-email"]');
  const phoneInput = document.querySelector('input[name="contacts-phone"]');
  const TINInput = document.querySelector('input[name="contacts-TIN"]');

  const orderSubmit = document.querySelector("#order-submit");

  const errorClass = "contacts__item-input--error";

  const validationData = [
    {
      html: nameInput,
      isCorrect: nameValidation(nameInput.value),
    },
    {
      html: secondnameInput,
      isCorrect: nameValidation(secondnameInput.value),
    },
    {
      html: emailInput,
      isCorrect: emailValidation(emailInput.value),
    },
    {
      html: phoneInput,
      isCorrect: phoneValidation(phoneInput.value),
    },
    {
      html: TINInput,
      isCorrect: tinValidation(TINInput.value),
    },
  ];

  validationData.forEach((item) => {
    item.isCorrect
      ? item.html.classList.remove(errorClass)
      : item.html.classList.add(errorClass);
  });

  if (validationData.map((x) => x.isCorrect).includes(false)) {
    orderSubmit.disabled = true;
  } else {
    orderSubmit.disabled = false;
  }

  return validationData;
};

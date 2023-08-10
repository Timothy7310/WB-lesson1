import { phoneMaskInput } from "./phoneMask";
import { phoneMaskKeyDown } from "./phoneMask";
import { removeLettersByPaste } from "./removeLettersByPaste";
import { inputValidation } from "./inputValidation";
import { nameValidation } from "./nameValidation";
import { emailValidation } from "./emailValidation";
import { phoneValidation } from "./phoneValidation";
import { tinValidation } from "./tinValidation";

export const handleContactForm = () => {
  const contactsPhone = document.querySelector("#contacts-phone");
  const contactsForm = document.querySelector("#contacts-form");

  const nameInput = document.querySelector('input[name="contacts-name"]');
  const secondnameInput = document.querySelector(
    'input[name="contacts-secondname"]'
  );
  const emailInput = document.querySelector('input[name="contacts-email"]');
  const phoneInput = document.querySelector('input[name="contacts-phone"]');
  const TINInput = document.querySelector('input[name="contacts-TIN"]');

  const inputErrorClass = "contacts__item-input--error";

  contactsPhone.addEventListener("keydown", phoneMaskKeyDown);
  contactsPhone.addEventListener("input", phoneMaskInput);
  contactsPhone.addEventListener("paste", removeLettersByPaste);

  nameInput.addEventListener("blur", (e) => {
    const { target } = e;
    inputValidation(target, target.value, nameValidation);
  });
  secondnameInput.addEventListener("blur", (e) => {
    const { target } = e;
    inputValidation(target, target.value, nameValidation);
  });
  emailInput.addEventListener("blur", (e) => {
    const { target } = e;
    inputValidation(target, target.value, emailValidation);
  });
  phoneInput.addEventListener("blur", (e) => {
    const { target } = e;
    inputValidation(target, target.value, phoneValidation);
  });
  TINInput.addEventListener("blur", (e) => {
    const { target } = e;
    inputValidation(target, target.value, tinValidation);
  });

  contactsForm.addEventListener("keyup", (e) => {
    if (e.target.classList.contains(inputErrorClass)) {
      switch (e.target.getAttribute("name")) {
        case "contacts-name":
          inputValidation(nameInput, nameInput.value, nameValidation);
          break;
        case "contacts-secondname":
          inputValidation(
            secondnameInput,
            secondnameInput.value,
            nameValidation
          );
          break;
        case "contacts-email":
          inputValidation(emailInput, emailInput.value, emailValidation);
          break;
        case "contacts-phone":
          inputValidation(phoneInput, phoneInput.value, phoneValidation);
          break;
        case "contacts-TIN":
          inputValidation(TINInput, TINInput.value, tinValidation);
          break;
      }
    }
  });
};

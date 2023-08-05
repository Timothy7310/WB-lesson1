import { phoneMaskInput } from "./phoneMask";
import { phoneMaskKeyDown } from "./phoneMask";
import { removeLettersByPaste } from "./removeLettersByPaste";

export const handleContactForm = () => {
  const contactsPhone = document.querySelector("#contacts-phone");

  contactsPhone.addEventListener("keydown", phoneMaskKeyDown);
  contactsPhone.addEventListener("input", phoneMaskInput);
  contactsPhone.addEventListener("paste", removeLettersByPaste);
};

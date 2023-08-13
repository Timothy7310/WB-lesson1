export const phoneValidation = (phone) => {
  const phoneInput = document.querySelector("#input-wraning-phone");
  if (phone.length === 0) {
    phoneInput.textContent = "Укажите номер телефона";
  } else {
    phoneInput.textContent = "Формат: +9 999 999 99 99";
  }

  const reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/gm;
  const isCorrect = reg.test(phone);
  return isCorrect;
};

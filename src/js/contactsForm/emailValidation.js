export const emailValidation = (email) => {
  const emailInput = document.querySelector("#input-wraning-email");
  if (email.length === 0) {
    emailInput.textContent = "Укажите электронную почту";
  } else {
    emailInput.textContent = "Проверьте адрес электронной почты";
  }
  const reg =
    /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;

  const isCorrect = reg.test(email);
  return isCorrect;
};

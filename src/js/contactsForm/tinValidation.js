export const tinValidation = (tin) => {
  const TINInput = document.querySelector("#input-wraning-tin");
  if (tin.length === 0) {
    TINInput.textContent = "Укажите ИНН";
  } else {
    TINInput.textContent = "Проверьте ИНН";
  }

  const reg = /^\d{14}$/gm;
  const isCorrect = reg.test(tin);
  return isCorrect;
};

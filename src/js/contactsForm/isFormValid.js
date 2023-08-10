export const isFormValid = () => {
  const errorInputs = document.querySelectorAll(".contacts__item-input--error");

  return errorInputs.length === 0;
};

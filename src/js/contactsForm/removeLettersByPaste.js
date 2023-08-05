import { getNumbers } from "./getNumbers";

export const removeLettersByPaste = (e) => {
  const { target } = e;
  const inputNumbersValue = getNumbers(target);
  const pasted = e.clipboardData || window.clipboardData;
  if (pasted) {
    const pastedText = pasted.getData("Text");
    if (/\D/g.test(pastedText)) {
      target.value = inputNumbersValue;
      return;
    }
  }
};

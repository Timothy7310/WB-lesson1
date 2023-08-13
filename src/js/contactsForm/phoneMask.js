import { getNumbers } from "./getNumbers";

export const phoneMaskInput = (e) => {
  const { target } = e;
  let inputNumbersValue = getNumbers(target);
  const [firstLetter] = inputNumbersValue;
  const isPhoneCode = ["7", "8", "9"].includes(firstLetter);
  const selectionStart = target.selectionStart;
  let formattedInputValue = "";

  if (!inputNumbersValue) {
    return (target.value = "");
  }

  if (target.value.length !== selectionStart) {
    if (target.value.length === 18) {
      target.value = target.value
        .split("")
        .filter((_letter, index) => index !== selectionStart - 1)
        .join("");
    }

    if (e.data && /\D/g.test(e.data)) {
      target.value = inputNumbersValue;
    }
    return;
  }

  if (isPhoneCode) {
    if (firstLetter === "9") {
      inputNumbersValue = "7" + inputNumbersValue;
    }

    const firstSymbols = firstLetter === "8" ? "8" : "+7";
    formattedInputValue = `${firstSymbols} `;

    if (inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
    }
  } else {
    formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
  }

  target.value = formattedInputValue;
};

export const phoneMaskKeyDown = (e) => {
  const inputValue = e.target.value.replace(/\D/g, "");
  const isBackspace = e.keyCode === 8;
  if (isBackspace && inputValue.length === 1) {
    e.target.value = "";
  }
};

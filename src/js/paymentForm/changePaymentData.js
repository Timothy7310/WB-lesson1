const paymentCardNumber = document.querySelector("#payment-card-number");
const paymentCardDate = document.querySelector("#payment-card-date");
const paymentCardType = document.querySelector("#payment-card-type");

const orderPaymentCardNumber = document.querySelector(
  "#order-payment-card-number"
);
const orderPaymentCardType = document.querySelector("#order-payment-card-type");

export const changePaymentData = () => {
  const { cardNumber, cardType, cardIcon, cardMonth, cardYear } =
    document.querySelector('input[name="payment-method"]:checked').dataset;

  paymentCardType.setAttribute("alt", cardType);
  paymentCardType.setAttribute("src", cardIcon);

  orderPaymentCardType.setAttribute("alt", cardType);
  orderPaymentCardType.setAttribute("src", cardIcon);

  paymentCardNumber.textContent = cardNumber;
  orderPaymentCardNumber.textContent = cardNumber;
  paymentCardDate.textContent = `${cardMonth}/${cardYear}`;
};

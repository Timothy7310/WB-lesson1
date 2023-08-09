export const handleOrderForm = () => {
  const orderForm = document.querySelector("#order-form");

  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};

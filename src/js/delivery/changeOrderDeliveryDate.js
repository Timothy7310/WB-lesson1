export const changeOrderDeliveryDate = (arr) => {
  const [firstDate, secondDate] = arr;
  const orderDeliveryDate = document.querySelector("#order-delivery-date");
  const oneDay = 86400000;

  const startDate = firstDate.date ? firstDate.date : null;
  const endDate = secondDate.date
    ? secondDate.date + oneDay
    : startDate
    ? startDate + oneDay
    : null;

  if (startDate !== null && endDate !== null) {
    const start = new Date(startDate).toLocaleString("ru", { day: "numeric" });
    const end = new Date(endDate).toLocaleString("ru", {
      day: "numeric",
      month: "short",
    });
    orderDeliveryDate.textContent = `${start}–${end}`;
  } else {
    orderDeliveryDate.textContent = "";
  }
};

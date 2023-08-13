export const getTimeDelivery = (timestamp) => {
  const oneDay = 86400000;
  const startDate = new Date(timestamp).toLocaleDateString("ru", {
    day: "numeric",
  });
  const endDate = new Date(timestamp + oneDay).toLocaleDateString("ru", {
    day: "numeric",
    month: "long",
  });
  return `${startDate}—${endDate}`;
};

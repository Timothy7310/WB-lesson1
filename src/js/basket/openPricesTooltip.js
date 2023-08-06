export const openPricesTooltip = (id) => {
  const tooltip = document.querySelector(`#prices-tooltip-window--${id}`);
  tooltip.classList.toggle("basket__item-prices-tooltip--active");
};

export const openCompanyTooltip = (id) => {
  const tooltip = document.querySelector(`#company-tooltip-window--${id}`);
  tooltip.classList.toggle("basket__item-company-tooltip--active");
};

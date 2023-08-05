import { openCompanyTooltip } from "./openCompanyTooltip";
import { openPricesTooltip } from "./openPricesTooltip";

export const handleBasket = () => {
  const companyTooltipButton = document.querySelector("#company-tooltip");
  const pricesTooltipButton = document.querySelector("#prices-tooltip");

  companyTooltipButton.addEventListener("click", openCompanyTooltip);
  pricesTooltipButton.addEventListener("click", openPricesTooltip);
};

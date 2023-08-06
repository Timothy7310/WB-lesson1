import { openCompanyTooltip } from "./openCompanyTooltip";
import { openPricesTooltip } from "./openPricesTooltip";

export const handleBasket = () => {
  const companyTooltipButton = document.querySelector("#company-tooltip");
  const pricesTooltipButton = document.querySelector("#prices-tooltip");
  const basketListCurrent = document.querySelector("#basket-list-current");

  basketListCurrent.addEventListener("click", (e) => {
    e.preventDefault();
    const { target } = e;

    if (target.closest(".basket__item-company-button")) {
      const element = target.closest(".basket__item-company-button");
      openCompanyTooltip(element.dataset.id);
    }

    if (target.closest(".basket__item-price-old")) {
      const element = target.closest(".basket__item-price-old");
      openPricesTooltip(element.dataset.id);
    }
  });
};

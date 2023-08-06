import { openCompanyTooltip } from "./openCompanyTooltip";
import { openPricesTooltip } from "./openPricesTooltip";

export const handleBasket = () => {
  const companyTooltipClass = ".basket__item-company-button";
  const pricesTooltipClass = ".basket__item-price-old";
  const basketCheckboxClass = ".basket__checkbox";

  const basketListCurrent = document.querySelector("#basket-list-current");
  const basketCheckboxAll = document.querySelector("#basket-checkbox-all");
  const allCheckboxItem = document.querySelectorAll(".basket__checkbox--item");

  const checkedClass = "basket__checkbox--checked";

  basketListCurrent.addEventListener("click", (e) => {
    e.preventDefault();
    const { target } = e;

    if (target.closest(companyTooltipClass)) {
      const element = target.closest(companyTooltipClass);
      openCompanyTooltip(element.dataset.id);
    }

    if (target.closest(pricesTooltipClass)) {
      const element = target.closest(pricesTooltipClass);
      openPricesTooltip(element.dataset.id);
    }

    if (target.closest(basketCheckboxClass)) {
      const element = target.closest(basketCheckboxClass);
      element.classList.toggle(checkedClass);

      const isEveryCheckedItem = Array.from(allCheckboxItem).every((x) =>
        x.classList.contains(checkedClass)
      );

      if (basketCheckboxAll.classList.contains(checkedClass)) {
        basketCheckboxAll.classList.remove(checkedClass);
      }

      if (isEveryCheckedItem) {
        basketCheckboxAll.classList.add(checkedClass);
      }
    }
  });

  basketCheckboxAll.addEventListener("click", (e) => {
    e.preventDefault();

    basketCheckboxAll.classList.toggle(checkedClass);
    allCheckboxItem.forEach((x) => {
      if (basketCheckboxAll.classList.contains(checkedClass)) {
        x.classList.add(checkedClass);
      } else {
        x.classList.remove(checkedClass);
      }
    });
  });
};

import { openCompanyTooltip } from "./openCompanyTooltip";
import { openPricesTooltip } from "./openPricesTooltip";
import { basketItems } from "../../mocks/user";
import { createDeliveryInfo } from "../delivery/createDeliveryInfo";

export const handleBasket = () => {
  const companyTooltipClass = ".basket__item-company-button";
  const pricesTooltipClass = ".basket__item-price-old";
  const basketCheckboxClass = ".basket__checkbox";
  const basketIncrementClass = ".basket__item-counter--inc";
  const basketDecrementClass = ".basket__item-counter--dec";

  const basketListCurrent = document.querySelector("#basket-list-current");
  const basketCheckboxAll = document.querySelector("#basket-checkbox-all");
  const allCheckboxItem = document.querySelectorAll(".basket__checkbox--item");

  const basketAccordionCurrent = document.querySelector("#accordion-current");
  const basketCurrentList = document.querySelector("#basket-list-current");
  const basketAccordionMissing = document.querySelector("#accordion-missing");
  const basketMissingList = document.querySelector("#basket-list-missing");

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

      const allCheckedItems = document.querySelectorAll(
        'input[name="basket-item"].basket__checkbox--checked'
      );
      createDeliveryInfo(allCheckedItems);
    }

    if (target.closest(basketIncrementClass)) {
      const element = target.closest(basketIncrementClass);
      const id = element.dataset.id;
      const [item] = basketItems.filter((x) => x.id === +id);

      item.class.incCount();
    }

    if (target.closest(basketDecrementClass)) {
      const element = target.closest(basketDecrementClass);
      const id = element.dataset.id;
      const [item] = basketItems.filter((x) => x.id === +id);

      item.class.decCount();
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

    const allCheckedItems = document.querySelectorAll(
      'input[name="basket-item"].basket__checkbox--checked'
    );
    createDeliveryInfo(allCheckedItems);
  });

  basketAccordionCurrent.addEventListener("click", (e) => {
    basketAccordionCurrent.classList.toggle("basket__accordion-button--close");
    basketCurrentList.classList.toggle("basket__list--hidden");
    basketCheckboxAll.disabled = basketCheckboxAll.disabled ? false : true;
  });

  basketAccordionMissing.addEventListener("click", (e) => {
    basketAccordionMissing.classList.toggle("basket__accordion-button--close");
    basketMissingList.classList.toggle("basket__list--hidden");
  });
};

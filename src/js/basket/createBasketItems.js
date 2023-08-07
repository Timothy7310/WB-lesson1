import { userData } from "../../mocks/user";
import { createSubinfo } from "./createSubinfo";
import { getDiscountSum } from "./getDiscountSum";

export const createBasketItems = () => {
  let result = "";
  let basketListCurrent = document.querySelector("#basket-list-current");
  userData.items.forEach((item) => {
    if (item.isAvailable) {
      result += `
        <li class="basket__item">
            <label class="basket__checkbox-label">
            <input
                name="basket-item"
                type="checkbox"
                class="basket__checkbox basket__checkbox--item"
            />
            </label>
            <picture class="basket__item-img-wrap">
                <source
                    srcset="${item.images.webpMedium} 1x, 
                    ${item.images.webpLarge} 2x"
                    type="image/webp"
                />
                <img
                    class="basket__item-img"
                    src="${item.images.commonMedium}"
                    srcset="${item.images.commonLarge} 2x"
                    alt=""
                />
            </picture>

            <div class="basket__item-text-wrap">
                <a href="#">
                    <h3 class="basket__item-title">${item.name}</h3>
                </a>
                ${
                  item.subinfo
                    ? `<div class="basket__item-subinfo">
                            ${createSubinfo(item.subinfo)}
                        </div>`
                    : ""
                }
                <span class="basket__item-store">${item.store}</span>
                <div class="basket__item-company">
                    <span class="basket__item-company-name">
                        ${item.company.name}
                    </span>
                    <button 
                        class="basket__item-company-button" 
                        id="company-tooltip--${item.id}"
                        data-id="${item.id}"
                    >
                        <svg class="basket__item-company-button-icon">
                            <use href="src/assets/icons/sprite.svg#company"></use>
                        </svg>
                    </button>
                    <div 
                        class="basket__item-company-tooltip" 
                        id="company-tooltip-window--${item.id}"
                        data-id="${item.id}"
                    >
                        <h4 class="basket__item-company-title">
                            ${item.company.name}
                        </h4>
                        <span class="basket__item-company-code">
                            ОГРН: ${item.company.code}
                        </span>
                        <span class="basket__item-company-address">
                            ${item.company.address}
                        </span>
                    </div>
                </div>
            </div>

            <div class="basket__item-interactive">
                <div class="basket__item-counter">
                    <button class="basket__item-counter-button basket__item-counter--inc">
                        -
                    </button>
                    <span class="basket__item-counter-num">1</span>
                    <button class="basket__item-counter-button basket__item-counter--dec">
                        +
                    </button>
                </div>
                ${
                  item.total <= 10
                    ? `<span class="basket__item-counter-left">Осталось ${item.total} шт.</span>`
                    : ""
                }
                <div class="basket__item-personal">
                    <button class="basket__item-favorite">
                        <svg class="basket__item-favorite-icon">
                            <use href="src/assets/icons/sprite.svg#favorite"></use>
                        </svg>
                    </button>
                    <button class="basket__item-delete">
                        <svg class="basket__item-delete-icon">
                            <use href="src/assets/icons/sprite.svg#delete"></use>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="basket__item-prices">
                <span class="basket__item-price-new"> ${Math.round(
                  item.price -
                    getDiscountSum(
                      item.discount + userData.userDiscount,
                      item.price
                    )
                )} сом </span>
                <button 
                    class="basket__item-price-old" 
                    id="prices-tooltip--${item.id}"
                    data-id="${item.id}"
                >
                    ${item.price} сом
                </button>
                <div 
                    class="basket__item-prices-tooltip" 
                    id="prices-tooltip-window--${item.id}"
                    data-id="${item.id}"
                >
                    <div class="basket__item-prices-tooltip-row">
                        <span class="basket__item-prices-tooltip-discount">
                            Скидка ${item.discount}%
                        </span>
                        <span class="basket__item-prices-tooltip-price">
                            −${getDiscountSum(
                              item.discount,
                              item.price
                            ).toFixed()} сом
                        </span>
                    </div>
                    <div class="basket__item-prices-tooltip-row">
                        <span class="basket__item-prices-tooltip-discount">
                            Скидка покупателя ${userData.userDiscount}%
                        </span>
                        <span class="basket__item-prices-tooltip-price">
                            −${getDiscountSum(
                              userData.userDiscount,
                              item.price
                            ).toFixed()} сом
                        </span>
                    </div>
                </div>
            </div>
        </li>
        `;
    }
  });
  basketListCurrent.innerHTML = result;
};

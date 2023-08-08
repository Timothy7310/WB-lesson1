import { getBasketItemByID } from "../../mocks/user";
import { createDeliveryItems } from "./createDeliveryItems";
import { getTimeDelivery } from "./getTimeDelivery";

export const createDeliveryInfo = (checkedItems) => {
  const root = document.querySelector("#delivery-items");
  const basketItems = Array.from(checkedItems)
    .map((x) => x.dataset.id)
    .map((id) => getBasketItemByID(+id))
    .reduce(
      (acc, item) => {
        if (item.data.shipping.length > 1) {
          return [
            {
              date: item.data.shipping[0].date,
              items: [
                ...acc[0].items,
                { count: item.data.shipping[0].items, class: item },
              ],
            },
            {
              ...acc[1],
              date: item.data.shipping[1].date,
              items: [
                ...acc[1].items,
                { count: item.data.shipping[1].items, class: item },
              ],
            },
          ];
        }
        return [
          {
            date: item.data.shipping[0].date,
            items: [
              ...acc[0].items,
              { count: item.data.shipping[0].items, class: item },
            ],
          },
          { ...acc[1] },
        ];
      },
      [
        { date: "", items: "" },
        { date: "", items: "" },
      ]
    );

  root.innerHTML = "";
  basketItems.forEach((item) => {
    if (item.items.length !== 0) {
      const element = document.createElement("div");
      element.className = "delivery__row delivery__row--date";
      element.innerHTML = `
            <span class="delivery__row-name delivery__date">
                ${getTimeDelivery(item.date)}
            </span>
            <div class="delivery__date-items">
                ${createDeliveryItems(item.items)}
            </div>
        `;
      root.appendChild(element);
    }
  });
};

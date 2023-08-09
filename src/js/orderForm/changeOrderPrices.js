import { getBasketItemByID } from "../../mocks/user";
import { changeOrderPaymentType } from "./changeOrderPaymentType";

export const changeOrderPrices = (checkedItems) => {
  const basketItems = Array.from(checkedItems)
    .map((x) => x.dataset.id)
    .map((id) => getBasketItemByID(+id));

  const totalCountRoot = document.querySelector("#order-subinfo-total-count");
  const totalPriceRoot = document.querySelector("#order-subinfo-total-price");
  const totalDiscountRoot = document.querySelector(
    "#order-subinfo-total-discount"
  );
  const totalPriceWithDiscountRoot =
    document.querySelector("#order-total-price");

  const totalPriceInput = document.querySelector('input[name="order-price"]');

  let totalCount = 0;
  let totalPrice = 0;
  let totalDiscount = 0;
  let totalPriceWithDiscount = Math.round(totalPrice - totalDiscount);

  basketItems.forEach((item) => {
    totalCount += item.count;
    totalPrice += item.count * item.data.price;
    totalDiscount +=
      item.count *
      item.getDiscountSum(
        item.userDiscount + item.data.discount,
        item.data.price
      );
    totalPriceWithDiscount = Math.round(totalPrice - totalDiscount);
  });

  const pr = new Intl.PluralRules("ru");
  const suffixes = new Map([
    ["zero", "товаров"],
    ["one", "товар"],
    ["few", "товара"],
    ["many", "товаров"],
  ]);
  const suffix = suffixes.get(pr.select(totalCount));

  totalCountRoot.textContent = `${totalCount} ${suffix}`;
  totalPriceRoot.textContent = `${totalPrice.toLocaleString()} сом`;
  totalDiscountRoot.textContent = `${totalCount > 0 ? "−" : ""} ${Math.round(
    totalDiscount
  ).toLocaleString()} сом`;
  totalPriceWithDiscountRoot.textContent = `${totalPriceWithDiscount.toLocaleString()} сом`;

  totalPriceInput.value = totalPriceWithDiscount;

  changeOrderPaymentType();
};

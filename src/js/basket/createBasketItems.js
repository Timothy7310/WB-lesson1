import { basketItems } from "../../mocks/user";

export const createBasketItems = () => {
  basketItems.forEach((item) => item.class.render());
};

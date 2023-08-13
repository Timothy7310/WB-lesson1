import { BasketItem } from "../js/basket/BasketItem";

import shirtCommonMedium from "../assets/images/shirt@1x.jpg";
import shirtCommonLarge from "../assets/images/shirt@2x.jpg";
import shirtWebpMedium from "../assets/images/shirt@1x.webp";
import shirtWebpLarge from "../assets/images/shirt@2x.webp";

import phoneCommonMedium from "../assets/images/phone@1x.jpg";
import phoneCommonLarge from "../assets/images/phone@2x.jpg";
import phoneWebpMedium from "../assets/images/phone@1x.webp";
import phoneWebpLarge from "../assets/images/phone@2x.webp";

import pencilsCommonMedium from "../assets/images/pencils@1x.jpg";
import pencilsCommonLarge from "../assets/images/pencils@2x.jpg";
import pencilsWebpMedium from "../assets/images/pencils@1x.webp";
import pencilsWebpLarge from "../assets/images/pencils@2x.webp";

import penCommonMedium from "../assets/images/pen@1x.jpg";
import penCommonLarge from "../assets/images/pen@2x.jpg";
import penWebpMedium from "../assets/images/pen@1x.webp";
import penWebpLarge from "../assets/images/pen@2x.webp";

import barbieCommonMedium from "../assets/images/barbie@1x.jpg";
import barbieCommonLarge from "../assets/images/barbie@2x.jpg";
import barbieWebpMedium from "../assets/images/barbie@1x.webp";
import barbieWebpLarge from "../assets/images/barbie@2x.webp";

import pokemonCommonMedium from "../assets/images/pokemon@1x.jpg";
import pokemonCommonLarge from "../assets/images/pokemon@2x.jpg";
import pokemonWebpMedium from "../assets/images/pokemon@1x.webp";
import pokemonWebpLarge from "../assets/images/pokemon@2x.webp";

export const userData = {
  userDiscount: 10,
  items: [
    {
      id: 1,
      isAvailable: true,
      name: "Футболка UZcotton мужская",
      store: "Коледино WB",
      company: {
        name: "OOO Вайлдберриз",
        code: "5167746237148",
        address:
          "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
      },
      subinfo: [
        {
          name: "Цвет",
          value: "белый",
        },
        {
          name: "Размер",
          value: "56",
        },
      ],
      images: {
        commonMedium: shirtCommonMedium,
        commonLarge: shirtCommonLarge,
        webpMedium: shirtWebpMedium,
        webpLarge: shirtWebpLarge,
      },
      price: 1051,
      discount: 40,
      total: 2,
      shipping: [
        {
          items: 2,
          date: new Date(new Date().getTime() + 3 * 86400000).getTime(),
        },
      ],
    },
    {
      id: 2,
      isAvailable: true,
      name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
      store: "Коледино WB",
      company: {
        name: "OOO Мегапрофстиль",
        code: "5167746237148",
        address:
          "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
      },
      subinfo: [
        {
          name: "Цвет",
          value: "прозрачный",
        },
      ],
      images: {
        commonMedium: phoneCommonMedium,
        commonLarge: phoneCommonLarge,
        webpMedium: phoneWebpMedium,
        webpLarge: phoneWebpLarge,
      },
      price: 11500,
      discount: 20,
      total: 230,
      shipping: [
        {
          items: 184,
          date: new Date(new Date().getTime() + 3 * 86400000).getTime(),
        },
        {
          items: 46,
          date: new Date(new Date().getTime() + 5 * 86400000).getTime(),
        },
      ],
    },
    {
      id: 3,
      isAvailable: true,
      name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber&#8209;Castell',
      store: "Коледино WB",
      company: {
        name: "OOO Вайлдберриз",
        code: "5167746237148",
        address:
          "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
      },
      subinfo: null,
      images: {
        commonMedium: pencilsCommonMedium,
        commonLarge: pencilsCommonLarge,
        webpMedium: pencilsWebpMedium,
        webpLarge: pencilsWebpLarge,
      },
      price: 475,
      discount: 55,
      total: 2,
      shipping: [
        {
          items: 2,
          date: new Date(new Date().getTime() + 3 * 86400000).getTime(),
        },
      ],
    },
    {
      id: 4,
      isAvailable: false,
      name: "Ручки шариковые синие набор для школы 50 штук, линия 0,35 мм",
      store: "Коледино WB",
      company: {
        name: "САМСОН",
        code: "1023404239540",
        address:
          "400059, Волгоградская обл, г Волгоград, ул им. Никитина, д. 2, помещ. 17",
      },
      subinfo: null,
      images: {
        commonMedium: penCommonMedium,
        commonLarge: penCommonLarge,
        webpMedium: penWebpMedium,
        webpLarge: penWebpLarge,
      },
      price: null,
      discount: null,
      total: null,
      shipping: null,
    },
    {
      id: 5,
      isAvailable: false,
      name: "Кукла Барби Безграничные движения GXF04",
      store: "Коледино WB",
      company: {
        name: "FAMOUS",
        code: "323480000002803",
        address: null,
      },
      subinfo: null,
      images: {
        commonMedium: barbieCommonMedium,
        commonLarge: barbieCommonLarge,
        webpMedium: barbieWebpMedium,
        webpLarge: barbieWebpLarge,
      },
      price: null,
      discount: null,
      total: null,
      shipping: null,
    },
    {
      id: 6,
      isAvailable: false,
      name: "Мягкая игрушка Покемон/Pokemon ",
      store: "Коледино WB",
      company: {
        name: "Самохин Алексей Анатольевич",
        code: "312280125700010",
        address: null,
      },
      subinfo: null,
      images: {
        commonMedium: pokemonCommonMedium,
        commonLarge: pokemonCommonLarge,
        webpMedium: pokemonWebpMedium,
        webpLarge: pokemonWebpLarge,
      },
      price: null,
      discount: null,
      total: null,
      shipping: null,
    },
  ],
};

export const basketItems = userData.items.map((data) => {
  return {
    id: data.id,
    class: new BasketItem(data, 1, userData.userDiscount),
  };
});

export const getBasketItemByID = (id) => {
  return basketItems.find((x) => x.id === id).class;
};

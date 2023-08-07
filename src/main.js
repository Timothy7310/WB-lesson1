import "./index.scss";

import { handleSearchForm } from "./js/searchForm/handleSearchForm";
import { handlePaymentForm } from "./js/paymentForm/handlePaymentForm";
import { handleContactForm } from "./js/contactsForm/handleContactForm";
import { handleBasket } from "./js/basket/handleBasket";
import { createBasketItems } from "./js/basket/createBasketItems";

handleSearchForm();
handlePaymentForm();
handleContactForm();
createBasketItems();
handleBasket();

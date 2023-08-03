import "./index.scss";

import { searchFormHandler } from "./js/searchForm/searchFormHandler";

searchFormHandler();
// const searchForm = document.querySelector(".header__search");
// const searchInput = document.querySelector(".header__search-input");
// const headerOverlay = document.querySelector(".header__overlay");

// const createOpenSearchButton = (className) => {
//   const openSearchForm = document.createElement("button");
//   openSearchForm.innerHTML = `
//     <svg class="header__search-button-icon">
//     <use href="src/assets/icons/sprite.svg#search"></use>
//     </svg>
//     `;
//   openSearchForm.setAttribute("aria-label", "Открыть поиск");
//   openSearchForm.type = "button";
//   openSearchForm.className = className;
//   return openSearchForm;
// };

// const createCloseSearchButton = (className) => {
//   const closeSearchForm = document.createElement("button");
//   closeSearchForm.innerHTML = `
//   <svg class="header__search-button-icon header__search-button-icon--close">
//   <use href="src/assets/icons/sprite.svg#close-form"></use>
//   </svg>
//   `;
//   closeSearchForm.type = "button";
//   closeSearchForm.setAttribute("aria-label", "Закрыть поиск");
//   closeSearchForm.className = className;
//   return closeSearchForm;
// };

// const openSearchForm = (openButtonClass) => {
//   searchForm.classList.add("header__search--active");
//   headerOverlay.classList.add("header__overlay--active");

//   const openButton = document.querySelector(`.${openButtonClass}`);
//   openButton.remove();

//   searchForm.appendChild(
//     createCloseSearchButton(
//       "header__search-button header__search-button--close"
//     )
//   );
// };

// const closeSearchForm = (closeButtonClass) => {
//   searchForm.classList.remove("header__search--active");
//   headerOverlay.classList.remove("header__overlay--active");

//   const closeButton = document.querySelector(`.${closeButtonClass}`);
//   closeButton.remove();

//   searchForm.appendChild(
//     createOpenSearchButton("header__search-button header__search-button--open")
//   );
// };

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault("");
//   console.log(searchInput.value);
// });

// searchForm.addEventListener("click", (e) => {
//   const target = e.target;
//   if (target.closest(".header__search-button--close")) {
//     closeSearchForm("header__search-button--close");
//   }
//   if (target.closest(".header__search-button--open")) {
//     openSearchForm("header__search-button--open");
//   }
// });

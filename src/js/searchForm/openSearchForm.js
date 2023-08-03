import { createCloseSearchButton } from "./createCloseSearchButton";

export const openSearchForm = (openButtonClass, headerOverlay, searchForm) => {
  searchForm.classList.add("header__search--active");
  headerOverlay.classList.add("header__overlay--active");

  const openButton = document.querySelector(`.${openButtonClass}`);
  openButton.remove();

  searchForm.appendChild(
    createCloseSearchButton(
      "header__search-button header__search-button--close"
    )
  );
};

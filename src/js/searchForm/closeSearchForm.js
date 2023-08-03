import { createOpenSearchButton } from "./createOpenSearchButton";

export const closeSearchForm = (
  closeButtonClass,
  headerOverlay,
  searchForm
) => {
  searchForm.classList.remove("header__search--active");
  headerOverlay.classList.remove("header__overlay--active");

  const closeButton = document.querySelector(`.${closeButtonClass}`);
  closeButton.remove();

  searchForm.appendChild(
    createOpenSearchButton("header__search-button header__search-button--open")
  );
};

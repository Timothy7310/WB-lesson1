import { openSearchForm } from "./openSearchForm";
import { closeSearchForm } from "./closeSearchForm";

export const handleSearchForm = () => {
  const searchForm = document.querySelector(".header__search");
  const searchInput = document.querySelector(".header__search-input");
  const headerOverlay = document.querySelector(".header__overlay");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault("");
    console.log(searchInput.value);
  });

  searchForm.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".header__search-button--close")) {
      closeSearchForm(
        "header__search-button--close",
        headerOverlay,
        searchForm
      );
    }
    if (target.closest(".header__search-button--open")) {
      openSearchForm("header__search-button--open", headerOverlay, searchForm);
    }
  });
};

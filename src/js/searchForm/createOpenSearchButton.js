export const createOpenSearchButton = (className) => {
  const openSearchForm = document.createElement("button");
  openSearchForm.innerHTML = `
    <svg class="header__search-button-icon">
    <use href="src/assets/icons/sprite.svg#search"></use>
    </svg>
    `;
  openSearchForm.setAttribute("aria-label", "Открыть поиск");
  openSearchForm.type = "button";
  openSearchForm.className = className;
  return openSearchForm;
};

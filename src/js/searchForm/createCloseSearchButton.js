export const createCloseSearchButton = (className) => {
  const closeSearchForm = document.createElement("button");
  closeSearchForm.innerHTML = `
  <svg class="header__search-button-icon header__search-button-icon--close">
  <use href="src/assets/icons/sprite.svg#close-form"></use>
  </svg>
  `;
  closeSearchForm.type = "button";
  closeSearchForm.setAttribute("aria-label", "Закрыть поиск");
  closeSearchForm.className = className;
  return closeSearchForm;
};

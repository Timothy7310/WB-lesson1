export const createSubinfo = (subinfo) => {
  let result = "";
  subinfo.forEach((info) => {
    result += `<span class="basket__item-subinfo-text">${info.name}: ${info.value}</span>`;
  });
  return result;
};

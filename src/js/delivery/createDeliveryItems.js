export const createDeliveryItems = (items) => {
  let result = "";
  items.forEach((item) => {
    result += `
          <div class="delivery__date-item">
              <picture>
                <source
                    srcset="
                    ${item.class.data.images.webpMedium} 1x,
                        ${item.class.data.images.webpLarge} 2x
                    "
                    type="image/webp"
                />
                <img
                    class="delivery__date-item-img"
                    alt='${item.class.data.name}'
                    src="${item.class.data.images.commonMedium}"
                    srcset="${item.class.data.images.commonLarge} 2x"
                />
              </picture>
              <span class="delivery__date-item-count">${item.count}</span>
          </div>
          `;
  });
  return result;
};

export class BasketItem {
  constructor(data, count, userDiscount) {
    this.data = data;
    this.count = count;
    this.userDiscount = userDiscount;
    this.root = document.querySelector("#basket-list-current");
    this.rootItemSelector = `.basket__item[data-id="${this.data.id}"]`;
  }

  getDiscountSum = (discount, sum) => {
    return (discount / 100) * sum;
  };

  incCount() {
    const root = document.querySelector(this.rootItemSelector);
    const incButton = root.querySelector(".basket__item-counter--inc");
    const decButton = root.querySelector(".basket__item-counter--dec");
    if (this.count + 1 === this.data.total) {
      this.count += 1;
      this.updatePriceInfo();
      this.updateCounterInfo();
      incButton.disabled = true;
    } else if (this.count < this.data.total) {
      this.count += 1;
      this.updatePriceInfo();
      this.updateCounterInfo();
    }
    decButton.disabled = false;
  }

  decCount() {
    const root = document.querySelector(this.rootItemSelector);
    const incButton = root.querySelector(".basket__item-counter--inc");
    const decButton = root.querySelector(".basket__item-counter--dec");
    if (this.count === 2) {
      this.count -= 1;
      this.updatePriceInfo();
      this.updateCounterInfo();
      decButton.disabled = true;
    } else if (this.count > 2) {
      this.count -= 1;
      this.updatePriceInfo();
      this.updateCounterInfo();
    }
    incButton.disabled = false;
  }

  getTotalPrice() {
    return this.count * this.data.price;
  }

  renderSubinfo() {
    let result = "";
    this.data.subinfo.forEach((info) => {
      result += `<span class="basket__item-subinfo-text">${info.name}: ${info.value}</span>`;
    });
    return result;
  }

  render() {
    if (this.data.isAvailable) {
      const element = document.createElement("li");
      element.classList.add("basket__item");
      element.setAttribute("data-id", this.data.id);
      const elementHTML = `
        <label class="basket__checkbox-label">
            <input
                name="basket-item"
                type="checkbox"
                class="basket__checkbox basket__checkbox--item"
            />
        </label>
        <picture class="basket__item-img-wrap">
            <source
                srcset="${this.data.images.webpMedium} 1x, 
                ${this.data.images.webpLarge} 2x"
                type="image/webp"
            />
            <img
                class="basket__item-img"
                src="${this.data.images.commonMedium}"
                srcset="${this.data.images.commonLarge} 2x"
                alt=""
            />
        </picture>

        <div class="basket__item-text-wrap">
            <a href="#">
                <h3 class="basket__item-title">${this.data.name}</h3>
            </a>
            ${
              this.data.subinfo
                ? `<div class="basket__item-subinfo">
                        ${this.renderSubinfo()}
                    </div>`
                : ""
            }
            <span class="basket__item-store">${this.data.store}</span>
            <div class="basket__item-company">
                <span class="basket__item-company-name">
                    ${this.data.company.name}
                </span>
                <button 
                    class="basket__item-company-button" 
                    id="company-tooltip--${this.data.id}"
                    data-id="${this.data.id}"
                >
                    <svg class="basket__item-company-button-icon">
                        <use href="src/assets/icons/sprite.svg#company"></use>
                    </svg>
                </button>
                <div 
                    class="basket__item-company-tooltip" 
                    id="company-tooltip-window--${this.data.id}"
                    data-id="${this.data.id}"
                >
                    <h4 class="basket__item-company-title">
                        ${this.data.company.name}
                    </h4>
                    <span class="basket__item-company-code">
                        ОГРН: ${this.data.company.code}
                    </span>
                    <span class="basket__item-company-address">
                        ${this.data.company.address}
                    </span>
                </div>
            </div>
        </div>

        <div class="basket__item-interactive">
            <div class="basket__item-counter">
                <button data-id="${
                  this.data.id
                }" class="basket__item-counter-button basket__item-counter--dec"  
                ${this.count <= 1 ? 'disabled=""' : ""}>
                    <svg class="basket__item-counter-button-icon">
                        <use href="src/assets/icons/sprite.svg#minus"></use>
                    </svg>
                </button>
                <span class="basket__item-counter-num">${this.count}</span>
                <button data-id="${
                  this.data.id
                }" class="basket__item-counter-button basket__item-counter--inc">
                    <svg class="basket__item-counter-button-icon">
                        <use href="src/assets/icons/sprite.svg#plus"></use>
                    </svg>
                </button>
            </div>
            ${
              this.data.total <= 10
                ? `<span class="basket__item-counter-left">Осталось ${this.data.total} шт.</span>`
                : ""
            }
            <div class="basket__item-personal">
                <button class="basket__item-favorite">
                    <svg class="basket__item-favorite-icon">
                        <use href="src/assets/icons/sprite.svg#favorite"></use>
                    </svg>
                </button>
                <button class="basket__item-delete">
                    <svg class="basket__item-delete-icon">
                        <use href="src/assets/icons/sprite.svg#delete"></use>
                    </svg>
                </button>
            </div>
        </div>
        <div class="basket__item-prices">
        
            <span class="basket__item-price-new">
                ${Math.round(
                  this.getTotalPrice() -
                    this.getDiscountSum(
                      this.data.discount + this.userDiscount,
                      this.getTotalPrice()
                    )
                )} сом 
            </span>
            <button 
                class="basket__item-price-old" 
                id="prices-tooltip--${this.data.id}"
                data-id="${this.data.id}"
            >
                ${this.getTotalPrice()} сом
            </button>
            <div 
                class="basket__item-prices-tooltip" 
                id="prices-tooltip-window--${this.data.id}"
                data-id="${this.data.id}"
            >
                <div class="basket__item-prices-tooltip-row">
                    <span class="basket__item-prices-tooltip-discount">
                        Скидка ${this.data.discount}%
                    </span>
                    <span class="basket__item-prices-tooltip-price">
                        −${this.getDiscountSum(
                          this.data.discount,
                          this.getTotalPrice()
                        ).toFixed()} сом
                    </span>
                </div>
                <div class="basket__item-prices-tooltip-row">
                    <span class="basket__item-prices-tooltip-discount">
                        Скидка покупателя ${this.userDiscount}%
                    </span>
                    <span class="basket__item-prices-tooltip-price">
                        −${this.getDiscountSum(
                          this.userDiscount,
                          this.getTotalPrice()
                        ).toFixed()} сом
                    </span>
                </div>
            </div>
        </div>
    `;
      element.innerHTML = elementHTML;

      this.root.append(element);
    }
  }

  updatePriceInfo() {
    const root = document.querySelector(this.rootItemSelector);
    const pricesRoot = root.querySelector(".basket__item-prices");

    pricesRoot.innerHTML = `
        <span class="basket__item-price-new">
            ${Math.round(
              this.getTotalPrice() -
                this.getDiscountSum(
                  this.data.discount + this.userDiscount,
                  this.getTotalPrice()
                )
            )} сом
        </span>
        <button 
            class="basket__item-price-old" 
            id="prices-tooltip--${this.data.id}"
            data-id="${this.data.id}"
        >
            ${this.getTotalPrice()} сом
        </button>
        <div 
            class="basket__item-prices-tooltip" 
            id="prices-tooltip-window--${this.data.id}"
            data-id="${this.data.id}"
        >
            <div class="basket__item-prices-tooltip-row">
                <span class="basket__item-prices-tooltip-discount">
                    Скидка ${this.data.discount}%
                </span>
                <span class="basket__item-prices-tooltip-price">
                    −${this.getDiscountSum(
                      this.data.discount,
                      this.getTotalPrice()
                    ).toFixed()} сом
                </span>
            </div>
            <div class="basket__item-prices-tooltip-row">
                <span class="basket__item-prices-tooltip-discount">
                    Скидка покупателя ${this.userDiscount}%
                </span>
                <span class="basket__item-prices-tooltip-price">
                    −${this.getDiscountSum(
                      this.userDiscount,
                      this.getTotalPrice()
                    ).toFixed()} сом
                </span>
            </div>
        </div>
    `;
  }

  updateCounterInfo() {
    const root = document.querySelector(this.rootItemSelector);
    const counterRoot = root.querySelector(".basket__item-counter-num");
    counterRoot.textContent = this.count;
  }
}

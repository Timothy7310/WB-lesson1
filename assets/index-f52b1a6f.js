var $=Object.defineProperty;var M=(s,e,t)=>e in s?$(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var k=(s,e,t)=>(M(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();const x=s=>{const e=document.createElement("button");return e.innerHTML=`
  <svg class="header__search-button-icon header__search-button-icon--close">
  <use href="src/assets/icons/sprite.svg#close-form"></use>
  </svg>
  `,e.type="button",e.setAttribute("aria-label","Закрыть поиск"),e.className=s,e},C=(s,e,t)=>{t.classList.add("header__search--active"),e.classList.add("header__overlay--active"),document.querySelector(`.${s}`).remove(),t.appendChild(x("header__search-button header__search-button--close"))},D=s=>{const e=document.createElement("button");return e.innerHTML=`
    <svg class="header__search-button-icon">
    <use href="src/assets/icons/sprite.svg#search"></use>
    </svg>
    `,e.setAttribute("aria-label","Открыть поиск"),e.type="button",e.className=s,e},q=(s,e,t)=>{t.classList.remove("header__search--active"),e.classList.remove("header__overlay--active"),document.querySelector(`.${s}`).remove(),t.appendChild(D("header__search-button header__search-button--open"))},T=()=>{const s=document.querySelector(".header__search"),e=document.querySelector(".header__search-input"),t=document.querySelector(".header__overlay");s.addEventListener("submit",o=>{o.preventDefault(""),console.log(e.value)}),s.addEventListener("click",o=>{const a=o.target;a.closest(".header__search-button--close")&&q("header__search-button--close",t,s),a.closest(".header__search-button--open")&&C("header__search-button--open",t,s)})},P=document.querySelector("#payment-popup"),R=document.querySelector("body"),I=()=>{P.classList.add("payment-popup--active"),R.classList.add("lock")},U=document.querySelector("#payment-popup"),B=document.querySelector("body"),_=()=>{U.classList.remove("payment-popup--active"),B.classList.remove("lock")},E=document.querySelector("#payment-card-number"),A=document.querySelector("#payment-card-date"),v=document.querySelector("#payment-card-type"),O=()=>{const{cardNumber:s,cardType:e,cardIcon:t,cardMonth:o,cardYear:a}=document.querySelector('input[name="payment-method"]:checked').dataset;v.setAttribute("alt",e),v.setAttribute("src",t),E.textContent=s,A.textContent=`${o}/${a}`},W=()=>{const s=document.querySelector("#change-payment-button"),e=document.querySelector("#payment-popup-overlay"),t=document.querySelector("#payment-popup-close"),o=document.querySelector("#payment-form");s.addEventListener("click",a=>{a.preventDefault(),I()}),e.addEventListener("click",a=>{a.preventDefault(),_()}),t.addEventListener("click",a=>{a.preventDefault(),_()}),o.addEventListener("submit",a=>{a.preventDefault(),O(),_()})},L=s=>s.value.replace(/\D/g,""),j=s=>{const{target:e}=s;let t=L(e);const[o]=t,a=["7","8","9"].includes(o),n=e.selectionStart;let i="";if(!t)return e.value="";if(e.value.length!==n){e.value.length===18&&(e.value=e.value.split("").filter((p,b)=>b!==n-1).join("")),s.data&&/\D/g.test(s.data)&&(e.value=t);return}a?(o==="9"&&(t="7"+t),i=`${o==="8"?"8":"+7"} `,t.length>1&&(i+="("+t.substring(1,4)),t.length>=5&&(i+=") "+t.substring(4,7)),t.length>=8&&(i+="-"+t.substring(7,9)),t.length>=10&&(i+="-"+t.substring(9,11))):i="+"+t.substring(0,16),e.value=i},F=s=>{const e=s.target.value.replace(/\D/g,"");s.keyCode===8&&e.length===1&&(s.target.value="")},N=s=>{const{target:e}=s,t=L(e),o=s.clipboardData||window.clipboardData;if(o){const a=o.getData("Text");if(/\D/g.test(a)){e.value=t;return}}},H=()=>{const s=document.querySelector("#contacts-phone");s.addEventListener("keydown",F),s.addEventListener("input",j),s.addEventListener("paste",N)},V=s=>{document.querySelector(`#company-tooltip-window--${s}`).classList.toggle("basket__item-company-tooltip--active")},z=s=>{document.querySelector(`#prices-tooltip-window--${s}`).classList.toggle("basket__item-prices-tooltip--active")};class K{constructor(e,t,o){k(this,"getDiscountSum",(e,t)=>e/100*t);this.data=e,this.count=t,this.userDiscount=o,this.root=document.querySelector("#basket-list-current"),this.rootMissing=document.querySelector("#basket-list-missing"),this.rootItemSelector=`.basket__item[data-id="${this.data.id}"]`}incCount(){const e=document.querySelector(this.rootItemSelector),t=e.querySelector(".basket__item-counter--inc"),o=e.querySelector(".basket__item-counter--dec");this.count+1===this.data.total?(this.count+=1,this.updatePriceInfo(),this.updateCounterInfo(),t.disabled=!0):this.count<this.data.total&&(this.count+=1,this.updatePriceInfo(),this.updateCounterInfo()),o.disabled=!1}decCount(){const e=document.querySelector(this.rootItemSelector),t=e.querySelector(".basket__item-counter--inc"),o=e.querySelector(".basket__item-counter--dec");this.count===2?(this.count-=1,this.updatePriceInfo(),this.updateCounterInfo(),o.disabled=!0):this.count>2&&(this.count-=1,this.updatePriceInfo(),this.updateCounterInfo()),t.disabled=!1}getTotalPrice(){return this.count*this.data.price}renderSubinfo(){let e="";return this.data.subinfo.forEach(t=>{const o=t.name.toLowerCase()==="цвет"?"basket__item-subinfo-text--color":"basket__item-subinfo-text--size";e+=`<span class="basket__item-subinfo-text ${o}">${t.name}: ${t.value}</span>`}),e}render(){var e,t,o;if(this.data.isAvailable){const a=document.createElement("li");a.classList.add("basket__item"),a.setAttribute("data-id",this.data.id);const n=`
        <div class="basket__item-checkbox-wrap">
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
          ${(o=(t=(e=this.data)==null?void 0:e.subinfo)==null?void 0:t[1])!=null&&o.value?`<span class="basket__item-size-mob">
                ${this.data.subinfo[1].value}
              </span>`:""}
        </div>

        <div class="basket__item-text-wrap">
            <a href="#">
                <h3 class="basket__item-title">${this.data.name}</h3>
            </a>
            ${this.data.subinfo?`<div class="basket__item-subinfo">
                        ${this.renderSubinfo()}
                    </div>`:""}
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
                <button data-id="${this.data.id}" class="basket__item-counter-button basket__item-counter--dec"  
                ${this.count<=1?'disabled=""':""}>
                    <svg class="basket__item-counter-button-icon">
                        <use href="src/assets/icons/sprite.svg#minus"></use>
                    </svg>
                </button>
                <span class="basket__item-counter-num">${this.count}</span>
                <button data-id="${this.data.id}" class="basket__item-counter-button basket__item-counter--inc">
                    <svg class="basket__item-counter-button-icon">
                        <use href="src/assets/icons/sprite.svg#plus"></use>
                    </svg>
                </button>
            </div>
            ${this.data.total<=10?`<span class="basket__item-counter-left">Осталось ${this.data.total} шт.</span>`:""}
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
                ${Math.round(this.getTotalPrice()-this.getDiscountSum(this.data.discount+this.userDiscount,this.getTotalPrice())).toLocaleString()} сом 
            </span>
            <button 
                class="basket__item-price-old" 
                id="prices-tooltip--${this.data.id}"
                data-id="${this.data.id}"
            >
                ${this.getTotalPrice().toLocaleString()} сом
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
                        −${Math.round(this.getDiscountSum(this.data.discount,this.getTotalPrice())).toLocaleString()} сом
                    </span>
                </div>
                <div class="basket__item-prices-tooltip-row">
                    <span class="basket__item-prices-tooltip-discount">
                        Скидка покупателя ${this.userDiscount}%
                    </span>
                    <span class="basket__item-prices-tooltip-price">
                        −${Math.round(this.getDiscountSum(this.userDiscount,this.getTotalPrice())).toLocaleString()} сом
                    </span>
                </div>
            </div>
        </div>
    `;a.innerHTML=n,this.root.append(a)}else this.renderMissing()}updatePriceInfo(){const t=document.querySelector(this.rootItemSelector).querySelector(".basket__item-prices");t.innerHTML=`
        <span class="basket__item-price-new">
            ${Math.round(this.getTotalPrice()-this.getDiscountSum(this.data.discount+this.userDiscount,this.getTotalPrice())).toLocaleString()} сом
        </span>
        <button 
            class="basket__item-price-old" 
            id="prices-tooltip--${this.data.id}"
            data-id="${this.data.id}"
        >
            ${this.getTotalPrice().toLocaleString()} сом
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
                    −${Math.round(this.getDiscountSum(this.data.discount,this.getTotalPrice())).toLocaleString()} сом
                </span>
            </div>
            <div class="basket__item-prices-tooltip-row">
                <span class="basket__item-prices-tooltip-discount">
                    Скидка покупателя ${this.userDiscount}%
                </span>
                <span class="basket__item-prices-tooltip-price">
                    −${Math.round(this.getDiscountSum(this.userDiscount,this.getTotalPrice())).toLocaleString()} сом
                </span>
            </div>
        </div>
    `}updateCounterInfo(){const t=document.querySelector(this.rootItemSelector).querySelector(".basket__item-counter-num");t.textContent=this.count}renderMissing(){const e=document.createElement("li");e.className="basket__item basket__item--missing",e.setAttribute("data-id",this.data.id);const t=`
        <picture class="basket__item-img-wrap">
            <source
                srcset="${this.data.images.webpMedium} 1x, 
                ${this.data.images.webpLarge} 2x"
                type="image/webp"
            />
            <img
                class="basket__item-img basket__item-img--missing"
                src="${this.data.images.commonMedium}"
                srcset="${this.data.images.commonLarge} 2x"
                alt=""
            />
        </picture>

        <div class="basket__item-text-wrap">
          <a href="#">
              <h3 class="basket__item-title basket__item-title--missing">${this.data.name}</h3>
          </a>
          ${this.data.subinfo?`<div class="basket__item-subinfo">
                      ${this.renderSubinfo()}
                  </div>`:""}
        </div>
        <div class="basket__item-interactive basket__item-interactive--missing">
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
      `;e.innerHTML=t,this.rootMissing.append(e)}}const X=""+new URL("shirt@1x-5418eba6.jpg",import.meta.url).href,G=""+new URL("shirt@2x-e353b835.jpg",import.meta.url).href,Y=""+new URL("shirt@1x-2b568758.webp",import.meta.url).href,Z=""+new URL("shirt@2x-f493c28c.webp",import.meta.url).href,J=""+new URL("phone@1x-c7cb40ab.jpg",import.meta.url).href,Q=""+new URL("phone@2x-8a4dc3a0.jpg",import.meta.url).href,ee=""+new URL("phone@1x-b5c088cf.webp",import.meta.url).href,te=""+new URL("phone@2x-d9550c1a.webp",import.meta.url).href,se=""+new URL("pencils@1x-f00cbe4b.jpg",import.meta.url).href,ae=""+new URL("pencils@2x-353373df.jpg",import.meta.url).href,oe=""+new URL("pencils@1x-2224c57b.webp",import.meta.url).href,ie=""+new URL("pencils@2x-971bfdca.webp",import.meta.url).href,ne=""+new URL("pen@1x-b4675443.jpg",import.meta.url).href,ce=""+new URL("pen@2x-fec750d9.jpg",import.meta.url).href,re=""+new URL("pen@1x-e151bf12.webp",import.meta.url).href,le=""+new URL("pen@2x-56181382.webp",import.meta.url).href,ue=""+new URL("barbie@1x-196bf65c.jpg",import.meta.url).href,me=""+new URL("barbie@2x-7a3b9666.jpg",import.meta.url).href,de=""+new URL("barbie@1x-fa947f1f.webp",import.meta.url).href,pe=""+new URL("barbie@2x-9f85e697.webp",import.meta.url).href,be=""+new URL("pokemon@1x-26745cd2.jpg",import.meta.url).href,he=""+new URL("pokemon@2x-7ccfe829.jpg",import.meta.url).href,_e=""+new URL("pokemon@1x-7b75f7ea.webp",import.meta.url).href,ge=""+new URL("pokemon@1x-7b75f7ea.webp",import.meta.url).href,y={userDiscount:10,items:[{id:1,isAvailable:!0,name:"Футболка UZcotton мужская",store:"Коледино WB",company:{name:"OOO Вайлдберриз",code:"5167746237148",address:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},subinfo:[{name:"Цвет",value:"белый"},{name:"Размер",value:"56"}],images:{commonMedium:X,commonLarge:G,webpMedium:Y,webpLarge:Z},price:1051,discount:40,total:2,shipping:[{items:2,date:new Date(new Date().getTime()+3*864e5).getTime()}]},{id:2,isAvailable:!0,name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",store:"Коледино WB",company:{name:"OOO Мегапрофстиль",code:"5167746237148",address:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},subinfo:[{name:"Цвет",value:"прозрачный"}],images:{commonMedium:J,commonLarge:Q,webpMedium:ee,webpLarge:te},price:11500,discount:55,total:230,shipping:[{items:184,date:new Date(new Date().getTime()+3*864e5).getTime()},{items:46,date:new Date(new Date().getTime()+5*864e5).getTime()}]},{id:3,isAvailable:!0,name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber&#8209;Castell',store:"Коледино WB",company:{name:"OOO Вайлдберриз",code:"5167746237148",address:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},subinfo:null,images:{commonMedium:se,commonLarge:ae,webpMedium:oe,webpLarge:ie},price:475,discount:55,total:2,shipping:[{items:184,date:new Date(new Date().getTime()+3*864e5).getTime()}]},{id:4,isAvailable:!1,name:"Ручки шариковые синие набор для школы 50 штук, линия 0,35 мм",store:"Коледино WB",company:{name:"САМСОН",code:"1023404239540",address:"400059, Волгоградская обл, г Волгоград, ул им. Никитина, д. 2, помещ. 17"},subinfo:null,images:{commonMedium:ne,commonLarge:ce,webpMedium:re,webpLarge:le},price:null,discount:null,total:null,shipping:null},{id:5,isAvailable:!1,name:"Кукла Барби Безграничные движения GXF04",store:"Коледино WB",company:{name:"FAMOUS",code:"323480000002803",address:null},subinfo:null,images:{commonMedium:ue,commonLarge:me,webpMedium:de,webpLarge:pe},price:null,discount:null,total:null,shipping:null},{id:6,isAvailable:!1,name:"Мягкая игрушка Покемон/Pokemon ",store:"Коледино WB",company:{name:"Самохин Алексей Анатольевич",code:"312280125700010",address:null},subinfo:null,images:{commonMedium:be,commonLarge:he,webpMedium:_e,webpLarge:ge},price:null,discount:null,total:null,shipping:null}]},g=y.items.map(s=>({id:s.id,class:new K(s,1,y.userDiscount)})),fe=()=>{const s=".basket__item-company-button",e=".basket__item-price-old",t=".basket__checkbox",o=".basket__item-counter--inc",a=".basket__item-counter--dec",n=document.querySelector("#basket-list-current"),i=document.querySelector("#basket-checkbox-all"),p=document.querySelectorAll(".basket__checkbox--item"),b=document.querySelector("#accordion-current"),w=document.querySelector("#basket-list-current"),f=document.querySelector("#accordion-missing"),S=document.querySelector("#basket-list-missing"),r="basket__checkbox--checked";n.addEventListener("click",l=>{l.preventDefault();const{target:c}=l;if(c.closest(s)){const u=c.closest(s);V(u.dataset.id)}if(c.closest(e)){const u=c.closest(e);z(u.dataset.id)}if(c.closest(t)){c.closest(t).classList.toggle(r);const m=Array.from(p).every(d=>d.classList.contains(r));i.classList.contains(r)&&i.classList.remove(r),m&&i.classList.add(r)}if(c.closest(o)){const m=c.closest(o).dataset.id,[d]=g.filter(h=>h.id===+m);d.class.incCount()}if(c.closest(a)){const m=c.closest(a).dataset.id,[d]=g.filter(h=>h.id===+m);d.class.decCount()}}),i.addEventListener("click",l=>{l.preventDefault(),i.classList.toggle(r),p.forEach(c=>{i.classList.contains(r)?c.classList.add(r):c.classList.remove(r)})}),b.addEventListener("click",l=>{b.classList.toggle("basket__accordion-button--close"),w.classList.toggle("basket__list--hidden"),i.disabled=!i.disabled}),f.addEventListener("click",l=>{f.classList.toggle("basket__accordion-button--close"),S.classList.toggle("basket__list--hidden")})},ke=()=>{g.forEach(s=>s.class.render())};T();W();H();ke();fe();

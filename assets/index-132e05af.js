var j=Object.defineProperty;var H=(s,e,t)=>e in s?j(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var I=(s,e,t)=>(H(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const V=s=>{const e=document.createElement("button");return e.innerHTML=`
  <svg class="header__search-button-icon header__search-button-icon--close">
  <use href="src/assets/icons/sprite.svg#close-form"></use>
  </svg>
  `,e.type="button",e.setAttribute("aria-label","Закрыть поиск"),e.className=s,e},z=(s,e,t)=>{t.classList.add("header__search--active"),e.classList.add("header__overlay--active"),document.querySelector(`.${s}`).remove(),t.appendChild(V("header__search-button header__search-button--close"))},Z=s=>{const e=document.createElement("button");return e.innerHTML=`
    <svg class="header__search-button-icon">
    <use href="src/assets/icons/sprite.svg#search"></use>
    </svg>
    `,e.setAttribute("aria-label","Открыть поиск"),e.type="button",e.className=s,e},K=(s,e,t)=>{t.classList.remove("header__search--active"),e.classList.remove("header__overlay--active"),document.querySelector(`.${s}`).remove(),t.appendChild(Z("header__search-button header__search-button--open"))},X=()=>{const s=document.querySelector(".header__search"),e=document.querySelector(".header__search-input"),t=document.querySelector(".header__overlay");s.addEventListener("submit",o=>{o.preventDefault(""),console.log(e.value)}),s.addEventListener("click",o=>{const n=o.target;n.closest(".header__search-button--close")&&K("header__search-button--close",t,s),n.closest(".header__search-button--open")&&z("header__search-button--open",t,s)})},G=document.querySelector("#payment-popup"),Y=document.querySelector("body"),P=()=>{G.classList.add("payment-popup--active"),Y.classList.add("lock")},J=document.querySelector("#payment-popup"),Q=document.querySelector("body"),q=()=>{J.classList.remove("payment-popup--active"),Q.classList.remove("lock")},ee=document.querySelector("#payment-card-number"),te=document.querySelector("#payment-card-date"),T=document.querySelector("#payment-card-type"),se=document.querySelector("#order-payment-card-number"),E=document.querySelector("#order-payment-card-type"),oe=document.querySelector('input[name="order-card-number"]'),ne=()=>{const{cardNumber:s,cardType:e,cardIcon:t,cardMonth:o,cardYear:n}=document.querySelector('input[name="payment-method"]:checked').dataset;T.setAttribute("alt",e),T.setAttribute("src",t),E.setAttribute("alt",e),E.setAttribute("src",t),ee.textContent=s,se.textContent=s,oe.value=s,te.textContent=`${o}/${n}`},ae=()=>{const s=document.querySelector("#change-payment-button"),e=document.querySelector("#order-payment-change"),t=document.querySelector("#payment-popup-overlay"),o=document.querySelector("#payment-popup-close"),n=document.querySelector("#payment-form");s.addEventListener("click",P),e.addEventListener("click",P),t.addEventListener("click",q),o.addEventListener("click",q),n.addEventListener("submit",a=>{a.preventDefault(),ne(),q()})},U=s=>s.value.replace(/\D/g,""),ce=s=>{const{target:e}=s;let t=U(e);const[o]=t,n=["7","8","9"].includes(o),a=e.selectionStart;let r="";if(!t)return e.value="";if(e.value.length!==a){e.value.length===18&&(e.value=e.value.split("").filter((l,c)=>c!==a-1).join("")),s.data&&/\D/g.test(s.data)&&(e.value=t);return}n?(o==="9"&&(t="7"+t),r=`${o==="8"?"8":"+7"} `,t.length>1&&(r+="("+t.substring(1,4)),t.length>=5&&(r+=") "+t.substring(4,7)),t.length>=8&&(r+="-"+t.substring(7,9)),t.length>=10&&(r+="-"+t.substring(9,11))):r="+"+t.substring(0,16),e.value=r},re=s=>{const e=s.target.value.replace(/\D/g,"");s.keyCode===8&&e.length===1&&(s.target.value="")},ie=s=>{const{target:e}=s,t=U(e),o=s.clipboardData||window.clipboardData;if(o){const n=o.getData("Text");if(/\D/g.test(n)){e.value=t;return}}},O=()=>document.querySelectorAll(".contacts__item-input--error").length===0,N=()=>{const s=document.querySelector("#order-submit");O()?s.disabled=!1:s.disabled=!0},h=(s,e,t)=>{const o="contacts__item-input--error";e.length!==0&&(t(e)?s.classList.remove(o):s.classList.add(o),N())},f=s=>{const e=s.replace(/\s/gm,"");return/^[a-zA-Zа-яА-Я-]+$/.test(e)},x=s=>{const e=document.querySelector("#input-wraning-email");return s.length===0?e.textContent="Укажите электронную почту":e.textContent="Проверьте адрес электронной почты",/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u.test(s)},D=s=>{const e=document.querySelector("#input-wraning-phone");return s.length===0?e.textContent="Укажите номер телефона":e.textContent="Формат: +9 999 999 99 99",/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/gm.test(s)},M=s=>{const e=document.querySelector("#input-wraning-tin");return s.length===0?e.textContent="Укажите ИНН":e.textContent="Проверьте ИНН",/^\d{14}$/gm.test(s)},le=()=>{const s=document.querySelector("#contacts-phone"),e=document.querySelector("#contacts-form"),t=document.querySelector('input[name="contacts-name"]'),o=document.querySelector('input[name="contacts-secondname"]'),n=document.querySelector('input[name="contacts-email"]'),a=document.querySelector('input[name="contacts-phone"]'),r=document.querySelector('input[name="contacts-TIN"]'),l="contacts__item-input--error";s.addEventListener("keydown",re),s.addEventListener("input",ce),s.addEventListener("paste",ie),t.addEventListener("blur",c=>{const{target:i}=c;h(i,i.value,f)}),o.addEventListener("blur",c=>{const{target:i}=c;h(i,i.value,f)}),n.addEventListener("blur",c=>{const{target:i}=c;h(i,i.value,x)}),a.addEventListener("blur",c=>{const{target:i}=c;h(i,i.value,D)}),r.addEventListener("blur",c=>{const{target:i}=c;h(i,i.value,M)}),e.addEventListener("keyup",c=>{if(c.target.classList.contains(l))switch(c.target.getAttribute("name")){case"contacts-name":h(t,t.value,f);break;case"contacts-secondname":h(o,o.value,f);break;case"contacts-email":h(n,n.value,x);break;case"contacts-phone":h(a,a.value,D);break;case"contacts-TIN":h(r,r.value,M);break}})},de=s=>{document.querySelector(`#company-tooltip-window--${s}`).classList.toggle("basket__item-company-tooltip--active")},ue=s=>{document.querySelector(`#prices-tooltip-window--${s}`).classList.toggle("basket__item-prices-tooltip--active")},_=""+new URL("sprite-1b93b490.svg",import.meta.url).href;class me{constructor(e,t,o){I(this,"getDiscountSum",(e,t)=>e/100*t);this.data=e,this.count=t,this.userDiscount=o,this.root=document.querySelector("#basket-list-current"),this.rootMissing=document.querySelector("#basket-list-missing"),this.rootItemSelector=`.basket__item[data-id="${this.data.id}"]`}incCount(){const e=document.querySelector(this.rootItemSelector),t=e.querySelector(".basket__item-counter--inc"),o=e.querySelector(".basket__item-counter--dec");this.count+1===this.data.total?(this.count+=1,this.updatePriceInfo(),this.updateCounterInfo(),t.disabled=!0):this.count<this.data.total&&(this.count+=1,this.updatePriceInfo(),this.updateCounterInfo()),o.disabled=!1}decCount(){const e=document.querySelector(this.rootItemSelector),t=e.querySelector(".basket__item-counter--inc"),o=e.querySelector(".basket__item-counter--dec");this.count===2?(this.count-=1,this.updatePriceInfo(),this.updateCounterInfo(),o.disabled=!0):this.count>2&&(this.count-=1,this.updatePriceInfo(),this.updateCounterInfo()),t.disabled=!1}getTotalPrice(){return this.count*this.data.price}renderSubinfo(){let e="";return this.data.subinfo.forEach(t=>{const o=t.name.toLowerCase()==="цвет"?"basket__item-subinfo-text--color":"basket__item-subinfo-text--size";e+=`<span class="basket__item-subinfo-text ${o}">${t.name}: ${t.value}</span>`}),e}render(){var e,t,o;if(this.data.isAvailable){const n=document.createElement("li");n.classList.add("basket__item"),n.setAttribute("data-id",this.data.id);const a=`
        <div class="basket__item-checkbox-wrap">
          <label class="basket__checkbox-label">
              <input
                  data-id="${this.data.id}"
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
                        <use href="${_}#company"></use>
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
                        <use href="${_}#minus"></use>
                    </svg>
                </button>
                <span class="basket__item-counter-num">${this.count}</span>
                <button data-id="${this.data.id}" class="basket__item-counter-button basket__item-counter--inc">
                    <svg class="basket__item-counter-button-icon">
                        <use href="${_}#plus"></use>
                    </svg>
                </button>
            </div>
            ${this.data.total<=10?`<span class="basket__item-counter-left">Осталось ${this.data.total} шт.</span>`:""}
            <div class="basket__item-personal">
                <button class="basket__item-favorite">
                    <svg class="basket__item-favorite-icon">
                        <use href="${_}#favorite"></use>
                    </svg>
                </button>
                <button class="basket__item-delete">
                    <svg class="basket__item-delete-icon">
                        <use href="${_}#delete"></use>
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
    `;n.innerHTML=a,this.root.append(n)}else this.renderMissing()}updatePriceInfo(){const t=document.querySelector(this.rootItemSelector).querySelector(".basket__item-prices");t.innerHTML=`
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
                      <use href="${_}#favorite"></use>
                  </svg>
              </button>
              <button class="basket__item-delete">
                  <svg class="basket__item-delete-icon">
                      <use href="${_}#delete"></use>
                  </svg>
              </button>
          </div>
        </div>
      `;e.innerHTML=t,this.rootMissing.append(e)}}const pe=""+new URL("shirt@1x-5418eba6.jpg",import.meta.url).href,be=""+new URL("shirt@2x-e353b835.jpg",import.meta.url).href,he=""+new URL("shirt@1x-2b568758.webp",import.meta.url).href,ye=""+new URL("shirt@2x-f493c28c.webp",import.meta.url).href,ge=""+new URL("phone@1x-c7cb40ab.jpg",import.meta.url).href,_e=""+new URL("phone@2x-8a4dc3a0.jpg",import.meta.url).href,ve=""+new URL("phone@1x-b5c088cf.webp",import.meta.url).href,fe=""+new URL("phone@2x-d9550c1a.webp",import.meta.url).href,ke=""+new URL("pencils@1x-f00cbe4b.jpg",import.meta.url).href,Le=""+new URL("pencils@2x-353373df.jpg",import.meta.url).href,Se=""+new URL("pencils@1x-2224c57b.webp",import.meta.url).href,we=""+new URL("pencils@2x-971bfdca.webp",import.meta.url).href,Ce=""+new URL("pen@1x-b4675443.jpg",import.meta.url).href,qe=""+new URL("pen@2x-fec750d9.jpg",import.meta.url).href,$e=""+new URL("pen@1x-e151bf12.webp",import.meta.url).href,xe=""+new URL("pen@2x-56181382.webp",import.meta.url).href,De=""+new URL("barbie@1x-196bf65c.jpg",import.meta.url).href,Me=""+new URL("barbie@2x-7a3b9666.jpg",import.meta.url).href,Ie=""+new URL("barbie@1x-fa947f1f.webp",import.meta.url).href,Pe=""+new URL("barbie@2x-9f85e697.webp",import.meta.url).href,Te=""+new URL("pokemon@1x-26745cd2.jpg",import.meta.url).href,Ee=""+new URL("pokemon@2x-7ccfe829.jpg",import.meta.url).href,Ae=""+new URL("pokemon@1x-7b75f7ea.webp",import.meta.url).href,Re=""+new URL("pokemon@1x-7b75f7ea.webp",import.meta.url).href,A={userDiscount:10,items:[{id:1,isAvailable:!0,name:"Футболка UZcotton мужская",store:"Коледино WB",company:{name:"OOO Вайлдберриз",code:"5167746237148",address:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},subinfo:[{name:"Цвет",value:"белый"},{name:"Размер",value:"56"}],images:{commonMedium:pe,commonLarge:be,webpMedium:he,webpLarge:ye},price:1051,discount:40,total:2,shipping:[{items:2,date:new Date(new Date().getTime()+3*864e5).getTime()}]},{id:2,isAvailable:!0,name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",store:"Коледино WB",company:{name:"OOO Мегапрофстиль",code:"5167746237148",address:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},subinfo:[{name:"Цвет",value:"прозрачный"}],images:{commonMedium:ge,commonLarge:_e,webpMedium:ve,webpLarge:fe},price:11500,discount:55,total:230,shipping:[{items:184,date:new Date(new Date().getTime()+3*864e5).getTime()},{items:46,date:new Date(new Date().getTime()+5*864e5).getTime()}]},{id:3,isAvailable:!0,name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber&#8209;Castell',store:"Коледино WB",company:{name:"OOO Вайлдберриз",code:"5167746237148",address:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},subinfo:null,images:{commonMedium:ke,commonLarge:Le,webpMedium:Se,webpLarge:we},price:475,discount:55,total:2,shipping:[{items:2,date:new Date(new Date().getTime()+3*864e5).getTime()}]},{id:4,isAvailable:!1,name:"Ручки шариковые синие набор для школы 50 штук, линия 0,35 мм",store:"Коледино WB",company:{name:"САМСОН",code:"1023404239540",address:"400059, Волгоградская обл, г Волгоград, ул им. Никитина, д. 2, помещ. 17"},subinfo:null,images:{commonMedium:Ce,commonLarge:qe,webpMedium:$e,webpLarge:xe},price:null,discount:null,total:null,shipping:null},{id:5,isAvailable:!1,name:"Кукла Барби Безграничные движения GXF04",store:"Коледино WB",company:{name:"FAMOUS",code:"323480000002803",address:null},subinfo:null,images:{commonMedium:De,commonLarge:Me,webpMedium:Ie,webpLarge:Pe},price:null,discount:null,total:null,shipping:null},{id:6,isAvailable:!1,name:"Мягкая игрушка Покемон/Pokemon ",store:"Коледино WB",company:{name:"Самохин Алексей Анатольевич",code:"312280125700010",address:null},subinfo:null,images:{commonMedium:Te,commonLarge:Ee,webpMedium:Ae,webpLarge:Re},price:null,discount:null,total:null,shipping:null}]},w=A.items.map(s=>({id:s.id,class:new me(s,1,A.userDiscount)})),W=s=>w.find(e=>e.id===s).class,Be=s=>{let e="";return s.forEach(t=>{e+=`
          <div class="delivery__date-item">
              <picture>
                <source
                    srcset="
                    ${t.class.data.images.webpMedium} 1x,
                        ${t.class.data.images.webpLarge} 2x
                    "
                    type="image/webp"
                />
                <img
                    class="delivery__date-item-img"
                    alt='${t.class.data.name}'
                    src="${t.class.data.images.commonMedium}"
                    srcset="${t.class.data.images.commonLarge} 2x"
                />
              </picture>
              <span class="delivery__date-item-count">${t.count}</span>
          </div>
          `}),e},Ue=s=>{const t=new Date(s).toLocaleDateString("ru",{day:"numeric"}),o=new Date(s+864e5).toLocaleDateString("ru",{day:"numeric",month:"long"});return`${t}—${o}`},Oe=s=>{const[e,t]=s,o=document.querySelector("#order-delivery-date"),n=864e5,a=e.date?e.date:null,r=t.date?t.date+n:a?a+n:null;if(a!==null&&r!==null){const l=new Date(a).toLocaleString("ru",{day:"numeric"}),c=new Date(r).toLocaleString("ru",{day:"numeric",month:"short"});o.textContent=`${l}–${c}`}else o.textContent=""},R=s=>{const e=document.querySelector("#delivery-items"),t=Array.from(s).map(o=>o.dataset.id).map(o=>W(+o)).reduce((o,n)=>n.data.shipping.length>1?[{date:n.data.shipping[0].date,items:[...o[0].items,{count:n.data.shipping[0].items,class:n}]},{...o[1],date:n.data.shipping[1].date,items:[...o[1].items,{count:n.data.shipping[1].items,class:n}]}]:[{date:n.data.shipping[0].date,items:[...o[0].items,{count:n.data.shipping[0].items,class:n}]},{...o[1]}],[{date:"",items:""},{date:"",items:""}]);e.innerHTML="",t.forEach(o=>{if(o.items.length!==0){const n=document.createElement("div");n.className="delivery__row delivery__row--date",n.innerHTML=`
            <span class="delivery__row-name delivery__date">
                ${Ue(o.date)}
            </span>
            <div class="delivery__date-items">
                ${Be(o.items)}
            </div>
        `,e.appendChild(n)}}),Oe(t)},F=()=>{const s=document.querySelector('input[name="order-payment-type"]'),e=document.querySelector("#order-submit"),t=document.querySelector('input[name="order-price"]'),o=document.querySelector('input[name="order-payment"]'),n=+t.value,a=document.querySelector(".order__payment-type-text");if(s.checked){if(n===0){e.textContent="Заказать",e.disabled=!0;return}e.textContent=`Оплатить ${n.toLocaleString()} сом`,a.classList.add("order__payment-type-text--hide"),o.value="online",e.disabled=!1}else e.textContent="Заказать",a.classList.remove("order__payment-type-text--hide"),o.value="offline",e.disabled=!1},S=s=>{const e=Array.from(s).map(d=>d.dataset.id).map(d=>W(+d)),t=document.querySelector("#order-subinfo-total-count"),o=document.querySelector("#header-basket-count"),n=document.querySelector("#header-mob-basket-count"),a=document.querySelector("#order-subinfo-total-price"),r=document.querySelector("#order-subinfo-total-discount"),l=document.querySelector("#order-total-price"),c=document.querySelector('input[name="order-price"]');let i=0,y=0,p=0,g=Math.round(y-p);e.forEach(d=>{i+=d.count,y+=d.count*d.data.price,p+=d.count*d.getDiscountSum(d.userDiscount+d.data.discount,d.data.price),g=Math.round(y-p)});const m=new Intl.PluralRules("ru"),u=new Map([["zero","товаров"],["one","товар"],["few","товара"],["many","товаров"]]).get(m.select(i));t.textContent=`${i} ${u}`,o.textContent=i,n.textContent=i,a.textContent=`${y.toLocaleString()} сом`,r.textContent=`${i>0?"−":""} ${Math.round(p).toLocaleString()} сом`,l.textContent=`${g.toLocaleString()} сом`,c.value=g,F()},Ne=()=>{const s=".basket__item-company-button",e=".basket__item-price-old",t=".basket__checkbox",o=".basket__item-counter--inc",n=".basket__item-counter--dec",a='input[name="basket-item"].basket__checkbox--checked',r=document.querySelector("#basket-list-current"),l=document.querySelector("#basket-checkbox-all"),c=document.querySelectorAll(".basket__checkbox--item"),i=document.querySelector("#accordion-current"),y=document.querySelector("#basket-list-current"),p=document.querySelector("#accordion-missing"),g=document.querySelector("#basket-list-missing"),m="basket__checkbox--checked";r.addEventListener("click",b=>{b.preventDefault();const{target:u}=b;if(u.closest(s)){const d=u.closest(s);de(d.dataset.id)}if(u.closest(e)){const d=u.closest(e);ue(d.dataset.id)}if(u.closest(t)){u.closest(t).classList.toggle(m);const k=Array.from(c).every(L=>L.classList.contains(m));l.classList.contains(m)&&l.classList.remove(m),k&&l.classList.add(m);const v=document.querySelectorAll(a);R(v),S(v)}if(u.closest(o)){const k=u.closest(o).dataset.id,[v]=w.filter(C=>C.id===+k);v.class.incCount();const L=document.querySelectorAll(a);S(L)}if(u.closest(n)){const k=u.closest(n).dataset.id,[v]=w.filter(C=>C.id===+k);v.class.decCount();const L=document.querySelectorAll(a);S(L)}}),l.addEventListener("click",b=>{b.preventDefault(),l.classList.toggle(m),c.forEach(d=>{l.classList.contains(m)?d.classList.add(m):d.classList.remove(m)});const u=document.querySelectorAll(a);R(u),S(u)}),i.addEventListener("click",b=>{i.classList.toggle("basket__accordion-button--close"),y.classList.toggle("basket__list--hidden"),l.disabled=!l.disabled}),p.addEventListener("click",b=>{p.classList.toggle("basket__accordion-button--close"),g.classList.toggle("basket__list--hidden")})},We=()=>{w.forEach(s=>s.class.render())},Fe=()=>{document.querySelector("#delivery-tooltip-window").classList.toggle("delivery__return-tooltip--active")},je=s=>{const e=document.querySelector("#delivery-address-courier"),t=document.querySelector("#delivery-address-pick-up"),o="delivery-popup__form-addresses-list--active";s==="courier"?(e.classList.add(o),t.classList.remove(o)):s==="pick-up"&&(e.classList.remove(o),t.classList.add(o))},He=document.querySelector("#delivery-popup"),Ve=document.querySelector("body"),B=()=>{He.classList.add("delivery-popup--active"),Ve.classList.add("lock")},ze=document.querySelector("#delivery-popup"),Ze=document.querySelector("body"),$=()=>{ze.classList.remove("delivery-popup--active"),Ze.classList.remove("lock")},Ke=()=>{var g;const s=document.querySelector("#delivery-tooltip"),e=document.querySelector("#delivery-popup-form"),t=document.querySelector("#change-delivery-button"),o=document.querySelector("#order-delivery-change"),n=document.querySelector("#delivery-popup-overlay"),a=document.querySelector("#delivery-popup-close"),r=document.querySelector("#delivery-address"),l=document.querySelector("#order-delivery-address"),c=document.querySelector('input[name="order-address"]'),i='input[name="delivery-type"]',y='input[name="delivery-address"]';let p=((g=document.querySelector('input[name="delivery-address"]:checked'))==null?void 0:g.value)??"";t.addEventListener("click",B),o.addEventListener("click",B),n.addEventListener("click",$),a.addEventListener("click",$),s.addEventListener("click",Fe),e.addEventListener("change",m=>{const b=m.target;if(b.closest(i)){const u=b.closest(i);je(u.value)}b.closest(y)&&(p=b.closest(y).value)}),e.addEventListener("submit",m=>{m.preventDefault(),r.textContent=p,l.textContent=p,c.value=p,$()})},Xe=()=>{document.querySelector("#order-delivery-window").classList.toggle("order__delivery-return-tooltip--active")},Ge=()=>{const s=document.querySelector('input[name="contacts-name"]'),e=document.querySelector('input[name="contacts-secondname"]'),t=document.querySelector('input[name="contacts-email"]'),o=document.querySelector('input[name="contacts-phone"]'),n=document.querySelector('input[name="contacts-TIN"]'),a=document.querySelector("#order-submit"),r="contacts__item-input--error",l=[{html:s,isCorrect:f(s.value)},{html:e,isCorrect:f(e.value)},{html:t,isCorrect:x(t.value)},{html:o,isCorrect:D(o.value)},{html:n,isCorrect:M(n.value)}];return l.forEach(c=>{c.isCorrect?c.html.classList.remove(r):c.html.classList.add(r)}),l.map(c=>c.isCorrect).includes(!1)?a.disabled=!0:a.disabled=!1,l},Ye=()=>{const s=document.querySelector("#order-form"),e=document.querySelector("#order-delivery-tooltip"),t=document.querySelector('input[name="order-payment-type"]');s.addEventListener("submit",o=>{o.preventDefault(),Ge(),N(),O()&&console.log("submited")}),e.addEventListener("click",Xe),t.addEventListener("click",F)};X();ae();le();We();Ne();Ke();Ye();

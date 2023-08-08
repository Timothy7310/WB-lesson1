var x=Object.defineProperty;var C=(s,e,t)=>e in s?x(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var w=(s,e,t)=>(C(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const q=s=>{const e=document.createElement("button");return e.innerHTML=`
  <svg class="header__search-button-icon header__search-button-icon--close">
  <use href="src/assets/icons/sprite.svg#close-form"></use>
  </svg>
  `,e.type="button",e.setAttribute("aria-label","Закрыть поиск"),e.className=s,e},T=(s,e,t)=>{t.classList.add("header__search--active"),e.classList.add("header__overlay--active"),document.querySelector(`.${s}`).remove(),t.appendChild(q("header__search-button header__search-button--close"))},P=s=>{const e=document.createElement("button");return e.innerHTML=`
    <svg class="header__search-button-icon">
    <use href="src/assets/icons/sprite.svg#search"></use>
    </svg>
    `,e.setAttribute("aria-label","Открыть поиск"),e.type="button",e.className=s,e},I=(s,e,t)=>{t.classList.remove("header__search--active"),e.classList.remove("header__overlay--active"),document.querySelector(`.${s}`).remove(),t.appendChild(P("header__search-button header__search-button--open"))},E=()=>{const s=document.querySelector(".header__search"),e=document.querySelector(".header__search-input"),t=document.querySelector(".header__overlay");s.addEventListener("submit",a=>{a.preventDefault(""),console.log(e.value)}),s.addEventListener("click",a=>{const o=a.target;o.closest(".header__search-button--close")&&I("header__search-button--close",t,s),o.closest(".header__search-button--open")&&T("header__search-button--open",t,s)})},B=document.querySelector("#payment-popup"),R=document.querySelector("body"),U=()=>{B.classList.add("payment-popup--active"),R.classList.add("lock")},A=document.querySelector("#payment-popup"),O=document.querySelector("body"),k=()=>{A.classList.remove("payment-popup--active"),O.classList.remove("lock")},W=document.querySelector("#payment-card-number"),j=document.querySelector("#payment-card-date"),S=document.querySelector("#payment-card-type"),F=()=>{const{cardNumber:s,cardType:e,cardIcon:t,cardMonth:a,cardYear:o}=document.querySelector('input[name="payment-method"]:checked').dataset;S.setAttribute("alt",e),S.setAttribute("src",t),W.textContent=s,j.textContent=`${a}/${o}`},N=()=>{const s=document.querySelector("#change-payment-button"),e=document.querySelector("#payment-popup-overlay"),t=document.querySelector("#payment-popup-close"),a=document.querySelector("#payment-form");s.addEventListener("click",o=>{o.preventDefault(),U()}),e.addEventListener("click",o=>{o.preventDefault(),k()}),t.addEventListener("click",o=>{o.preventDefault(),k()}),a.addEventListener("submit",o=>{o.preventDefault(),F(),k()})},D=s=>s.value.replace(/\D/g,""),H=s=>{const{target:e}=s;let t=D(e);const[a]=t,o=["7","8","9"].includes(a),n=e.selectionStart;let i="";if(!t)return e.value="";if(e.value.length!==n){e.value.length===18&&(e.value=e.value.split("").filter((d,u)=>u!==n-1).join("")),s.data&&/\D/g.test(s.data)&&(e.value=t);return}o?(a==="9"&&(t="7"+t),i=`${a==="8"?"8":"+7"} `,t.length>1&&(i+="("+t.substring(1,4)),t.length>=5&&(i+=") "+t.substring(4,7)),t.length>=8&&(i+="-"+t.substring(7,9)),t.length>=10&&(i+="-"+t.substring(9,11))):i="+"+t.substring(0,16),e.value=i},V=s=>{const e=s.target.value.replace(/\D/g,"");s.keyCode===8&&e.length===1&&(s.target.value="")},z=s=>{const{target:e}=s,t=D(e),a=s.clipboardData||window.clipboardData;if(a){const o=a.getData("Text");if(/\D/g.test(o)){e.value=t;return}}},K=()=>{const s=document.querySelector("#contacts-phone");s.addEventListener("keydown",V),s.addEventListener("input",H),s.addEventListener("paste",z)},X=s=>{document.querySelector(`#company-tooltip-window--${s}`).classList.toggle("basket__item-company-tooltip--active")},G=s=>{document.querySelector(`#prices-tooltip-window--${s}`).classList.toggle("basket__item-prices-tooltip--active")},m=""+new URL("sprite-b16ddd98.svg",import.meta.url).href;class Y{constructor(e,t,a){w(this,"getDiscountSum",(e,t)=>e/100*t);this.data=e,this.count=t,this.userDiscount=a,this.root=document.querySelector("#basket-list-current"),this.rootMissing=document.querySelector("#basket-list-missing"),this.rootItemSelector=`.basket__item[data-id="${this.data.id}"]`}incCount(){const e=document.querySelector(this.rootItemSelector),t=e.querySelector(".basket__item-counter--inc"),a=e.querySelector(".basket__item-counter--dec");this.count+1===this.data.total?(this.count+=1,this.updatePriceInfo(),this.updateCounterInfo(),t.disabled=!0):this.count<this.data.total&&(this.count+=1,this.updatePriceInfo(),this.updateCounterInfo()),a.disabled=!1}decCount(){const e=document.querySelector(this.rootItemSelector),t=e.querySelector(".basket__item-counter--inc"),a=e.querySelector(".basket__item-counter--dec");this.count===2?(this.count-=1,this.updatePriceInfo(),this.updateCounterInfo(),a.disabled=!0):this.count>2&&(this.count-=1,this.updatePriceInfo(),this.updateCounterInfo()),t.disabled=!1}getTotalPrice(){return this.count*this.data.price}renderSubinfo(){let e="";return this.data.subinfo.forEach(t=>{const a=t.name.toLowerCase()==="цвет"?"basket__item-subinfo-text--color":"basket__item-subinfo-text--size";e+=`<span class="basket__item-subinfo-text ${a}">${t.name}: ${t.value}</span>`}),e}render(){var e,t,a;if(this.data.isAvailable){const o=document.createElement("li");o.classList.add("basket__item"),o.setAttribute("data-id",this.data.id);const n=`
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
          ${(a=(t=(e=this.data)==null?void 0:e.subinfo)==null?void 0:t[1])!=null&&a.value?`<span class="basket__item-size-mob">
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
                        <use href="${m}#company"></use>
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
                        <use href="${m}#minus"></use>
                    </svg>
                </button>
                <span class="basket__item-counter-num">${this.count}</span>
                <button data-id="${this.data.id}" class="basket__item-counter-button basket__item-counter--inc">
                    <svg class="basket__item-counter-button-icon">
                        <use href="${m}#plus"></use>
                    </svg>
                </button>
            </div>
            ${this.data.total<=10?`<span class="basket__item-counter-left">Осталось ${this.data.total} шт.</span>`:""}
            <div class="basket__item-personal">
                <button class="basket__item-favorite">
                    <svg class="basket__item-favorite-icon">
                        <use href="${m}#favorite"></use>
                    </svg>
                </button>
                <button class="basket__item-delete">
                    <svg class="basket__item-delete-icon">
                        <use href="${m}#delete"></use>
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
    `;o.innerHTML=n,this.root.append(o)}else this.renderMissing()}updatePriceInfo(){const t=document.querySelector(this.rootItemSelector).querySelector(".basket__item-prices");t.innerHTML=`
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
                      <use href="${m}#favorite"></use>
                  </svg>
              </button>
              <button class="basket__item-delete">
                  <svg class="basket__item-delete-icon">
                      <use href="${m}#delete"></use>
                  </svg>
              </button>
          </div>
        </div>
      `;e.innerHTML=t,this.rootMissing.append(e)}}const Z=""+new URL("shirt@1x-5418eba6.jpg",import.meta.url).href,J=""+new URL("shirt@2x-e353b835.jpg",import.meta.url).href,Q=""+new URL("shirt@1x-2b568758.webp",import.meta.url).href,ee=""+new URL("shirt@2x-f493c28c.webp",import.meta.url).href,te=""+new URL("phone@1x-c7cb40ab.jpg",import.meta.url).href,se=""+new URL("phone@2x-8a4dc3a0.jpg",import.meta.url).href,oe=""+new URL("phone@1x-b5c088cf.webp",import.meta.url).href,ae=""+new URL("phone@2x-d9550c1a.webp",import.meta.url).href,ie=""+new URL("pencils@1x-f00cbe4b.jpg",import.meta.url).href,ne=""+new URL("pencils@2x-353373df.jpg",import.meta.url).href,ce=""+new URL("pencils@1x-2224c57b.webp",import.meta.url).href,re=""+new URL("pencils@2x-971bfdca.webp",import.meta.url).href,le=""+new URL("pen@1x-b4675443.jpg",import.meta.url).href,de=""+new URL("pen@2x-fec750d9.jpg",import.meta.url).href,ue=""+new URL("pen@1x-e151bf12.webp",import.meta.url).href,me=""+new URL("pen@2x-56181382.webp",import.meta.url).href,pe=""+new URL("barbie@1x-196bf65c.jpg",import.meta.url).href,be=""+new URL("barbie@2x-7a3b9666.jpg",import.meta.url).href,he=""+new URL("barbie@1x-fa947f1f.webp",import.meta.url).href,_e=""+new URL("barbie@2x-9f85e697.webp",import.meta.url).href,ge=""+new URL("pokemon@1x-26745cd2.jpg",import.meta.url).href,ve=""+new URL("pokemon@2x-7ccfe829.jpg",import.meta.url).href,ye=""+new URL("pokemon@1x-7b75f7ea.webp",import.meta.url).href,fe=""+new URL("pokemon@1x-7b75f7ea.webp",import.meta.url).href,$={userDiscount:10,items:[{id:1,isAvailable:!0,name:"Футболка UZcotton мужская",store:"Коледино WB",company:{name:"OOO Вайлдберриз",code:"5167746237148",address:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},subinfo:[{name:"Цвет",value:"белый"},{name:"Размер",value:"56"}],images:{commonMedium:Z,commonLarge:J,webpMedium:Q,webpLarge:ee},price:1051,discount:40,total:2,shipping:[{items:2,date:new Date(new Date().getTime()+3*864e5).getTime()}]},{id:2,isAvailable:!0,name:"Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",store:"Коледино WB",company:{name:"OOO Мегапрофстиль",code:"5167746237148",address:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},subinfo:[{name:"Цвет",value:"прозрачный"}],images:{commonMedium:te,commonLarge:se,webpMedium:oe,webpLarge:ae},price:11500,discount:55,total:230,shipping:[{items:184,date:new Date(new Date().getTime()+3*864e5).getTime()},{items:46,date:new Date(new Date().getTime()+5*864e5).getTime()}]},{id:3,isAvailable:!0,name:'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber&#8209;Castell',store:"Коледино WB",company:{name:"OOO Вайлдберриз",code:"5167746237148",address:"129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"},subinfo:null,images:{commonMedium:ie,commonLarge:ne,webpMedium:ce,webpLarge:re},price:475,discount:55,total:2,shipping:[{items:2,date:new Date(new Date().getTime()+3*864e5).getTime()}]},{id:4,isAvailable:!1,name:"Ручки шариковые синие набор для школы 50 штук, линия 0,35 мм",store:"Коледино WB",company:{name:"САМСОН",code:"1023404239540",address:"400059, Волгоградская обл, г Волгоград, ул им. Никитина, д. 2, помещ. 17"},subinfo:null,images:{commonMedium:le,commonLarge:de,webpMedium:ue,webpLarge:me},price:null,discount:null,total:null,shipping:null},{id:5,isAvailable:!1,name:"Кукла Барби Безграничные движения GXF04",store:"Коледино WB",company:{name:"FAMOUS",code:"323480000002803",address:null},subinfo:null,images:{commonMedium:pe,commonLarge:be,webpMedium:he,webpLarge:_e},price:null,discount:null,total:null,shipping:null},{id:6,isAvailable:!1,name:"Мягкая игрушка Покемон/Pokemon ",store:"Коледино WB",company:{name:"Самохин Алексей Анатольевич",code:"312280125700010",address:null},subinfo:null,images:{commonMedium:ge,commonLarge:ve,webpMedium:ye,webpLarge:fe},price:null,discount:null,total:null,shipping:null}]},f=$.items.map(s=>({id:s.id,class:new Y(s,1,$.userDiscount)})),ke=s=>f.find(e=>e.id===s).class,Le=s=>{let e="";return s.forEach(t=>{e+=`
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
          `}),e},we=s=>{const t=new Date(s).toLocaleDateString("ru",{day:"numeric"}),a=new Date(s+864e5).toLocaleDateString("ru",{day:"numeric",month:"long"});return`${t}—${a}`},M=s=>{const e=document.querySelector("#delivery-items"),t=Array.from(s).map(a=>a.dataset.id).map(a=>ke(+a)).reduce((a,o)=>o.data.shipping.length>1?[{date:o.data.shipping[0].date,items:[...a[0].items,{count:o.data.shipping[0].items,class:o}]},{...a[1],date:o.data.shipping[1].date,items:[...a[1].items,{count:o.data.shipping[1].items,class:o}]}]:[{date:o.data.shipping[0].date,items:[...a[0].items,{count:o.data.shipping[0].items,class:o}]},{...a[1]}],[{date:"",items:""},{date:"",items:""}]);e.innerHTML="",t.forEach(a=>{if(a.items.length!==0){const o=document.createElement("div");o.className="delivery__row delivery__row--date",o.innerHTML=`
            <span class="delivery__row-name delivery__date">
                ${we(a.date)}
            </span>
            <div class="delivery__date-items">
                ${Le(a.items)}
            </div>
        `,e.appendChild(o)}})},Se=()=>{const s=".basket__item-company-button",e=".basket__item-price-old",t=".basket__checkbox",a=".basket__item-counter--inc",o=".basket__item-counter--dec",n=document.querySelector("#basket-list-current"),i=document.querySelector("#basket-checkbox-all"),d=document.querySelectorAll(".basket__checkbox--item"),u=document.querySelector("#accordion-current"),y=document.querySelector("#basket-list-current"),p=document.querySelector("#accordion-missing"),b=document.querySelector("#basket-list-missing"),c="basket__checkbox--checked";n.addEventListener("click",h=>{h.preventDefault();const{target:r}=h;if(r.closest(s)){const l=r.closest(s);X(l.dataset.id)}if(r.closest(e)){const l=r.closest(e);G(l.dataset.id)}if(r.closest(t)){r.closest(t).classList.toggle(c);const _=Array.from(d).every(v=>v.classList.contains(c));i.classList.contains(c)&&i.classList.remove(c),_&&i.classList.add(c);const g=document.querySelectorAll('input[name="basket-item"].basket__checkbox--checked');M(g)}if(r.closest(a)){const _=r.closest(a).dataset.id,[g]=f.filter(v=>v.id===+_);g.class.incCount()}if(r.closest(o)){const _=r.closest(o).dataset.id,[g]=f.filter(v=>v.id===+_);g.class.decCount()}}),i.addEventListener("click",h=>{h.preventDefault(),i.classList.toggle(c),d.forEach(l=>{i.classList.contains(c)?l.classList.add(c):l.classList.remove(c)});const r=document.querySelectorAll('input[name="basket-item"].basket__checkbox--checked');M(r)}),u.addEventListener("click",h=>{u.classList.toggle("basket__accordion-button--close"),y.classList.toggle("basket__list--hidden"),i.disabled=!i.disabled}),p.addEventListener("click",h=>{p.classList.toggle("basket__accordion-button--close"),b.classList.toggle("basket__list--hidden")})},$e=()=>{f.forEach(s=>s.class.render())},Me=()=>{document.querySelector("#delivery-tooltip-window").classList.toggle("delivery__return-tooltip--active")},De=s=>{const e=document.querySelector("#delivery-address-courier"),t=document.querySelector("#delivery-address-pick-up"),a="delivery-popup__form-addresses-list--active";s==="courier"?(e.classList.add(a),t.classList.remove(a)):s==="pick-up"&&(e.classList.remove(a),t.classList.add(a))},xe=document.querySelector("#delivery-popup"),Ce=document.querySelector("body"),qe=()=>{xe.classList.add("delivery-popup--active"),Ce.classList.add("lock")},Te=document.querySelector("#delivery-popup"),Pe=document.querySelector("body"),L=()=>{Te.classList.remove("delivery-popup--active"),Pe.classList.remove("lock")},Ie=()=>{var y;const s=document.querySelector("#delivery-tooltip"),e=document.querySelector("#delivery-popup-form"),t=document.querySelector("#change-delivery-button"),a=document.querySelector("#delivery-popup-overlay"),o=document.querySelector("#delivery-popup-close"),n=document.querySelector("#delivery-address"),i='input[name="delivery-type"]',d='input[name="delivery-address"]';let u=((y=document.querySelector('input[name="delivery-address"]:checked'))==null?void 0:y.value)??"";t.addEventListener("click",qe),a.addEventListener("click",L),o.addEventListener("click",L),s.addEventListener("click",Me),e.addEventListener("change",p=>{const b=p.target;if(b.closest(i)){const c=b.closest(i);De(c.value)}b.closest(d)&&(u=b.closest(d).value)}),e.addEventListener("submit",p=>{p.preventDefault(),n.textContent=u,L()})};E();N();K();$e();Se();Ie();

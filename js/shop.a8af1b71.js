(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop"],{"0eb4":function(e,t,c){"use strict";c.d(t,"b",(function(){return i}));var n=c("7a23"),a=Object(n["I"])("data-v-0f1effd0");Object(n["t"])("data-v-0f1effd0");var r={class:"toast"};Object(n["r"])();var s=a((function(e,t,c,a,s,o){return Object(n["q"])(),Object(n["d"])("div",r,Object(n["z"])(c.message),1)})),o={props:["message"]},i=function(){var e=Object(n["u"])({show:!1,toastMessage:""}),t=function(t){e.show=!0,e.toastMessage=t,setTimeout((function(){e.show=!1,e.toastMessage=""}),2e3)},c=Object(n["A"])(e),a=c.toastMessage,r=c.show;return{showToast:t,toastMessage:a,show:r}};c("1a4e");o.render=s,o.__scopeId="data-v-0f1effd0";t["a"]=o},"0f9e":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=Object(n["I"])("data-v-539e4986");Object(n["t"])("data-v-539e4986");var r={class:"wrapper"},s=Object(n["h"])("img",{class:"wrapper__img",src:"http://www.dell-lee.com/imgs/vue3/user.png"},null,-1),o={class:"wrapper__input"},i={class:"wrapper__input"},u={class:"wrapper__input"};Object(n["r"])();var l=a((function(e,t,c,a,l,d){var p=Object(n["x"])("Toast");return Object(n["q"])(),Object(n["d"])("div",r,[s,Object(n["h"])("div",o,[Object(n["G"])(Object(n["h"])("input",{class:"wrapper__input__content",placeholder:"请输入用户名","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.username=e})},null,512),[[n["C"],a.username]])]),Object(n["h"])("div",i,[Object(n["G"])(Object(n["h"])("input",{class:"wrapper__input__content",placeholder:"请输入密码",type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e})},null,512),[[n["C"],a.password]])]),Object(n["h"])("div",u,[Object(n["G"])(Object(n["h"])("input",{class:"wrapper__input__content",placeholder:"确认密码",type:"password",autocomplete:"new-password","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.ensurement=e})},null,512),[[n["C"],a.ensurement]])]),Object(n["h"])("div",{class:"wrapper__register-button",onClick:t[4]||(t[4]=function(){return e.handlerRegister&&e.handlerRegister.apply(e,arguments)})},"注册"),Object(n["h"])("div",{class:"wrapper__register-link",onClick:t[5]||(t[5]=function(){return a.handlerLoginClick&&a.handlerLoginClick.apply(a,arguments)})},"已有帐号去登录"),a.show?(Object(n["q"])(),Object(n["d"])(p,{key:0,message:a.toastMessage},null,8,["message"])):Object(n["e"])("",!0)])})),d=c("1da1"),p=(c("96cf"),c("6c02")),h=c("b775"),b=c("0eb4"),_=function(e){var t=Object(p["d"])(),c=Object(n["u"])({username:"",password:"",ensurement:""}),a=function(){var n=Object(d["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(h["b"])("/api/user/register",{username:c.username,password:c.password});case 3:a=n.sent,0===(null===a||void 0===a?void 0:a.errno)?t.push({name:"Login"}):e("注册失败"),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),e("请求失败");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),r=Object(n["A"])(c),s=r.username,o=r.password,i=r.ensurement;return{username:s,password:o,ensurement:i,handlerRegister:a}},j=function(){var e=Object(p["d"])(),t=function(){e.push({name:"Login"})};return{handlerLoginClick:t}},O={name:"Register",components:{Toast:b["a"]},setup:function(){var e=Object(b["b"])(t),t=e.showToast,c=e.toastMessage,n=e.show,a=_(),r=a.username,s=a.password,o=a.ensurement,i=a.handleRegister,u=j(),l=u.handlerLoginClick;return{username:r,password:s,ensurement:o,handleRegister:i,handlerLoginClick:l,show:n,toastMessage:c}}};c("d143");O.render=l,O.__scopeId="data-v-539e4986";t["default"]=O},1148:function(e,t,c){"use strict";var n=c("a691"),a=c("1d80");e.exports=function(e){var t=String(a(this)),c="",r=n(e);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(t+=t))1&r&&(c+=t);return c}},1914:function(e,t,c){},"1a4e":function(e,t,c){"use strict";c("48b0")},3040:function(e,t,c){},3562:function(e,t,c){},"408a":function(e,t,c){var n=c("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},"48b0":function(e,t,c){},"4b93":function(e,t,c){"use strict";c("1914")},"53ee":function(e,t,c){},"5ea9":function(e,t,c){"use strict";c("77f5")},"5f6f":function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),a=Object(n["I"])("data-v-244ff236");Object(n["t"])("data-v-244ff236");var r={class:"wrapper"},s={class:"Ssearch"},o=Object(n["h"])("div",{class:"Ssearch__content"},[Object(n["h"])("span",{class:"Ssearch__content__icon iconfont"},""),Object(n["h"])("input",{class:"Ssearch__content__input",placeholder:"请输入商品名称"})],-1);Object(n["r"])();var i=a((function(e,t,c,a,i,u){var l=Object(n["x"])("ShopInfo"),d=Object(n["x"])("Content"),p=Object(n["x"])("Cart");return Object(n["q"])(),Object(n["d"])("div",r,[Object(n["h"])("div",s,[Object(n["h"])("div",{class:"Ssearch__back iconfont",onClick:t[1]||(t[1]=function(){return a.handleBackClick&&a.handleBackClick.apply(a,arguments)})},""),o]),a.item.imgUrl?(Object(n["q"])(),Object(n["d"])(l,{key:0,item:a.item,hideBorder:!0},null,8,["item"])):Object(n["e"])("",!0),Object(n["h"])(d,{shopName:a.item.name},null,8,["shopName"]),Object(n["h"])(p)])})),u=c("1da1"),l=(c("96cf"),c("6c02")),d=c("b775"),p=c("d7d0"),h=Object(n["I"])("data-v-daad3f7e");Object(n["t"])("data-v-daad3f7e");var b={class:"content"},_={class:"category"},j={class:"product"},O={class:"product__item__detail"},m={class:"product__item__title"},f={class:"product__item__sales"},v={class:"product__item__price"},g=Object(n["h"])("span",{class:"product__item__yen"},"¥",-1),C={class:"product__item__origin"},w={class:"product__number"};Object(n["r"])();var k=h((function(e,t,c,a,r,s){return Object(n["q"])(),Object(n["d"])("div",b,[Object(n["h"])("div",_,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(a.categories,(function(e){return Object(n["q"])(),Object(n["d"])("div",{class:{category__item:!0,"category__item--active":a.currentTab===e.tab},key:e.tab,onClick:function(){return a.handleTabClick(e.tab)}},Object(n["z"])(e.name),11,["onClick"])})),128))]),Object(n["h"])("div",j,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(a.list,(function(e){return Object(n["q"])(),Object(n["d"])("div",{class:"product__item",key:e._id},[Object(n["h"])("img",{class:"product__item__img",src:e.imgUrl},null,8,["src"]),Object(n["h"])("div",O,[Object(n["h"])("h4",m,Object(n["z"])(e.name),1),Object(n["h"])("p",f,"月售"+Object(n["z"])(e.sales)+"件",1),Object(n["h"])("p",v,[g,Object(n["g"])(Object(n["z"])(e.price)+" ",1),Object(n["h"])("span",C,"¥"+Object(n["z"])(e.oldPrice),1)])]),Object(n["h"])("div",w,[Object(n["h"])("span",{class:"product__number__minus iconfont",onClick:function(){a.changeCartItem(a.shopId,e._id,e,-1,c.shopName)}},"",8,["onClick"]),Object(n["g"])(Object(n["z"])(a.getProductCartCount(a.cartList,a.shopId,e._id)),1),Object(n["h"])("span",{class:"product__number__plus iconfont",onClick:function(){a.changeCartItem(a.shopId,e._id,e,1,c.shopName)}},"",8,["onClick"])])])})),128))])])})),I=c("5502"),L=function(e){var t=Object(I["b"])(),c=Object(n["A"])(t.state),a=c.cartList,r=function(e,c,n,a){t.commit("changeCartItemInfo",{shopId:e,productId:c,productInfo:n,num:a})},s=Object(n["b"])((function(){var t,c=(null===(t=a[e])||void 0===t?void 0:t.shopName)||"";return c}));return{cartList:a,changeCartItemInfo:r,shopName:s}},y=[{name:"全部商品",tab:"all"},{name:"秒杀",tab:"seckill"},{name:"新鲜水果",tab:"fruit"}],x=function(){var e=Object(n["v"])(y[0].tab),t=function(t){e.value=t};return{currentTab:e,handleTabClick:t}},R=function(e,t){var c=Object(n["u"])({list:[]}),a=function(){var n=Object(u["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(d["a"])("/api/shop/".concat(t,"/products"),{tab:e.value});case 2:r=n.sent,0===(null===r||void 0===r?void 0:r.errno)&&null!==r&&void 0!==r&&null!==(a=r.data)&&void 0!==a&&a.length&&(c.list=r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(n["F"])((function(){a()}));var r=Object(n["A"])(c),s=r.list;return{list:s}},S=function(){var e=Object(I["b"])(),t=L(),c=t.changeCartItemInfo,a=Object(n["A"])(e.state),r=a.cartList,s=function(e,t,c){var n,a,r;return console.log(e),(null===e||void 0===e||null===(n=e[t])||void 0===n||null===(a=n.productList)||void 0===a||null===(r=a[c])||void 0===r?void 0:r.count)||0},o=function(e,t,n,a,r){c(e,t,n,a),i(e,r)},i=function(t,c){e.commit("changeShopName",{shopId:t,shopName:c})};return{cartList:r,changeCartItem:o,getProductCartCount:s}},T={name:"Content",props:["shopName"],setup:function(){var e=Object(l["c"])(),t=e.params.id,c=x(),n=c.currentTab,a=c.handleTabClick,r=R(n,t),s=r.list,o=S(),i=o.cartList,u=o.changeCartItem,d=o.getProductCartCount;return{categories:y,currentTab:n,handleTabClick:a,list:s,shopId:t,cartList:i,changeCartItem:u,getProductCartCount:d}}};c("4b93");T.render=k,T.__scopeId="data-v-daad3f7e";var q=T,z=Object(n["I"])("data-v-3c9105a2");Object(n["t"])("data-v-3c9105a2");var M={class:"cart"},N={key:0,class:"product"},P={class:"product__header"},U=Object(n["g"])(" 全选 "),A={class:"product__header__clear"},B={key:0,class:"product__item"},F={class:"product__item__detail"},G={class:"product__item__title"},H={class:"product__item__price"},V=Object(n["h"])("span",{class:"product__item__yen"},"¥",-1),D={class:"product__item__origin"},E={class:"product__number"},J={class:"check"},W={class:"check__icon"},K={class:"check__icon__tag"},Q={class:"check__info"},X=Object(n["g"])(" 总计:"),Y={class:"check__info__price"},Z={class:"check__btn"},$=Object(n["g"])(" 去结算 ");Object(n["r"])();var ee=z((function(e,t,c,a,r,s){var o=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["d"])(n["a"],null,[a.showChart&&a.calculations.total>0?(Object(n["q"])(),Object(n["d"])("div",{key:0,class:"mask",onClick:t[1]||(t[1]=function(){return a.handleCartShowChange&&a.handleCartShowChange.apply(a,arguments)})})):Object(n["e"])("",!0),Object(n["h"])("div",M,[a.showChart&&a.calculations.total>0?(Object(n["q"])(),Object(n["d"])("div",N,[Object(n["h"])("div",P,[Object(n["h"])("div",{class:"product__header__all",onClick:t[2]||(t[2]=function(){return a.setCartItemsChecked(a.shopId)})},[Object(n["h"])("span",{class:"product__header__icon iconfont",innerHTML:a.calculations.allChecked?"":""},null,8,["innerHTML"]),U]),Object(n["h"])("div",A,[Object(n["h"])("span",{class:"product__header__clear__btn",onClick:t[3]||(t[3]=function(){return a.cleanCartProducts(a.shopId)})},"清空购物车 ")])]),(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(a.productList,(function(e){return Object(n["q"])(),Object(n["d"])("div",{key:e._id},[e.count>0?(Object(n["q"])(),Object(n["d"])("div",B,[Object(n["h"])("div",{class:"product__item__checked iconfont",innerHTML:e.check?"":"",onClick:function(){return a.changeCartItemChecked(a.shopId,e._id)}},null,8,["innerHTML","onClick"]),Object(n["h"])("img",{class:"product__item__img",src:e.imgUrl},null,8,["src"]),Object(n["h"])("div",F,[Object(n["h"])("h4",G,Object(n["z"])(e.name),1),Object(n["h"])("p",H,[V,Object(n["g"])(Object(n["z"])(e.price)+" ",1),Object(n["h"])("span",D,"¥"+Object(n["z"])(e.oldPrice),1)])]),Object(n["h"])("div",E,[Object(n["h"])("span",{class:"product__number__minus",onClick:function(){a.changeCartItemInfo(a.shopId,e._id,e,-1)}},"-",8,["onClick"]),Object(n["g"])(Object(n["z"])(e.count||0),1),Object(n["h"])("span",{class:"product__number__plus",onClick:function(){a.changeCartItemInfo(a.shopId,e._id,e,1)}},"+",8,["onClick"])])])):Object(n["e"])("",!0)])})),128))])):Object(n["e"])("",!0),Object(n["h"])("div",J,[Object(n["h"])("div",W,[Object(n["h"])("img",{src:"http://www.dell-lee.com/imgs/vue3/basket.png",class:"check__icon__img",onClick:t[4]||(t[4]=function(){return a.handleCartShowChange&&a.handleCartShowChange.apply(a,arguments)})}),Object(n["h"])("div",K,Object(n["z"])(a.calculations.total),1)]),Object(n["h"])("div",Q,[X,Object(n["h"])("span",Y," ¥"+Object(n["z"])(a.calculations.price),1)]),Object(n["G"])(Object(n["h"])("div",Z,[Object(n["h"])(o,{to:{path:"/oderConfirmation/".concat(a.shopId)}},{default:z((function(){return[$]})),_:1},8,["to"])],512),[[n["D"],a.calculations.total>0]])])])],64)})),te=(c("b680"),function(e){var t=Object(I["b"])(),c=Object(n["A"])(t.state),a=c.cartList,r=function(e,c,n,a){t.commit("changeCartItemInfo",{shopId:e,productId:c,productInfo:n,num:a})},s=Object(n["b"])((function(){var t,c=(null===(t=a[e])||void 0===t?void 0:t.productList)||[];return c}));return{cartList:a,changeCartItemInfo:r,productLists:s}}),ce=function(e){var t=Object(I["b"])(),c=te(e),a=c.changeCartItemInfo,r=t.state.cartList,s=Object(n["b"])((function(){var t,c=null===(t=r[e])||void 0===t?void 0:t.productList,n={total:0,price:0,allChecked:!0};if(c)for(var a in c){var s=c[a];n.total+=s.count,s.check&&(n.price+=s.count*s.price),s.count>0&&!s.check&&(n.allChecked=!1)}return n.price=n.price.toFixed(2),n})),o=function(e){t.commit("setCartItemsChecked",{shopId:e})},i=Object(n["b"])((function(){var t,c=(null===(t=r[e])||void 0===t?void 0:t.productList)||[];return c})),u=function(e,c){t.commit("changeCartItemChecked",{shopId:e,productId:c})},l=function(e){t.commit("cleanCartProducts",{shopId:e})};return{productList:i,changeCartItemInfo:a,changeCartItemChecked:u,cleanCartProducts:l,calculations:s,setCartItemsChecked:o}},ne=function(){var e=Object(n["v"])(!1),t=function(){e.value=!e.value};return{showChart:e,handleCartShowChange:t}},ae={name:"Cart",setup:function(){var e=Object(l["c"])(),t=e.params.id,c=ce(t),n=c.productList,a=c.changeCartItemInfo,r=c.changeCartItemChecked,s=c.cleanCartProducts,o=c.calculations,i=c.setCartItemsChecked,u=ne(),d=u.showChart,p=u.handleCartShowChange;return{productList:n,shopId:t,changeCartItemInfo:a,changeCartItemChecked:r,cleanCartProducts:s,calculations:o,setCartItemsChecked:i,showChart:d,handleCartShowChange:p}}};c("e871");ae.render=ee,ae.__scopeId="data-v-3c9105a2";var re=ae,se=function(){var e=Object(l["c"])(),t=Object(n["u"])({item:{}}),c=function(){var c=Object(u["a"])(regeneratorRuntime.mark((function c(){var n;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,Object(d["a"])("/api/shop/".concat(e.params.id));case 2:n=c.sent,0===(null===n||void 0===n?void 0:n.errno)&&null!==n&&void 0!==n&&n.data&&(t.item=n.data);case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),a=Object(n["A"])(t),r=a.item;return{item:r,getItemData:c}},oe=function(){var e=Object(l["d"])(),t=function(){e.back()};return{handleBackClick:t}},ie={name:"Shop",components:{ShopInfo:p["a"],Content:q,Cart:re},setup:function(){var e=se(),t=e.item,c=e.getItemData,n=oe(),a=n.handleBackClick;return c(),{item:t,handleBackClick:a}}};c("c805");ie.render=i,ie.__scopeId="data-v-244ff236";t["default"]=ie},"655d":function(e,t,c){},"77f5":function(e,t,c){},b680:function(e,t,c){"use strict";var n=c("23e7"),a=c("a691"),r=c("408a"),s=c("1148"),o=c("d039"),i=1..toFixed,u=Math.floor,l=function(e,t,c){return 0===t?c:t%2===1?l(e,t-1,c*e):l(e*e,t/2,c)},d=function(e){var t=0,c=e;while(c>=4096)t+=12,c/=4096;while(c>=2)t+=1,c/=2;return t},p=function(e,t,c){var n=-1,a=c;while(++n<6)a+=t*e[n],e[n]=a%1e7,a=u(a/1e7)},h=function(e,t){var c=6,n=0;while(--c>=0)n+=e[c],e[c]=u(n/t),n=n%t*1e7},b=function(e){var t=6,c="";while(--t>=0)if(""!==c||0===t||0!==e[t]){var n=String(e[t]);c=""===c?n:c+s.call("0",7-n.length)+n}return c},_=i&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){i.call({})}));n({target:"Number",proto:!0,forced:_},{toFixed:function(e){var t,c,n,o,i=r(this),u=a(e),_=[0,0,0,0,0,0],j="",O="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return String(i);if(i<0&&(j="-",i=-i),i>1e-21)if(t=d(i*l(2,69,1))-69,c=t<0?i*l(2,-t,1):i/l(2,t,1),c*=4503599627370496,t=52-t,t>0){p(_,0,c),n=u;while(n>=7)p(_,1e7,0),n-=7;p(_,l(10,n,1),0),n=t-1;while(n>=23)h(_,1<<23),n-=23;h(_,1<<n),p(_,1,1),h(_,2),O=b(_)}else p(_,0,c),p(_,1<<-t,0),O=b(_)+s.call("0",u);return u>0?(o=O.length,O=j+(o<=u?"0."+s.call("0",u-o)+O:O.slice(0,o-u)+"."+O.slice(o-u))):O=j+O,O}})},b7f7:function(e,t,c){"use strict";c("655d")},c805:function(e,t,c){"use strict";c("53ee")},d143:function(e,t,c){"use strict";c("3562")},d7d0:function(e,t,c){"use strict";c("b0c0");var n=c("7a23"),a=Object(n["I"])("data-v-23278b26");Object(n["t"])("data-v-23278b26");var r={class:"shop__content"},s={class:"shop__content__title"},o={class:"shop__content__tags"},i={class:"shop__content__tag"},u={class:"shop__content__tag"},l={class:"shop__content__tag"},d={class:"shop__content__highlight"};Object(n["r"])();var p=a((function(e,t,c,a,p,h){return Object(n["q"])(),Object(n["d"])("div",{class:{shop:!0,"shop--borderd":!c.hideBorder}},[Object(n["h"])("img",{src:c.item.imgUrl,class:"shop__img"},null,8,["src"]),Object(n["h"])("div",r,[Object(n["h"])("div",s,Object(n["z"])(c.item.name),1),Object(n["h"])("div",o,[Object(n["h"])("span",i,"月售:"+Object(n["z"])(c.item.sales),1),Object(n["h"])("span",u,"起送:"+Object(n["z"])(c.item.expressLimit),1),Object(n["h"])("span",l,"基础运费:"+Object(n["z"])(c.item.expressPrice),1)]),Object(n["h"])("p",d,Object(n["z"])(c.item.slogan),1)])],2)})),h={name:"ShopInfo",props:["item","hideBorder"]};c("5ea9");h.render=p,h.__scopeId="data-v-23278b26";t["a"]=h},e871:function(e,t,c){"use strict";c("3040")},ede4:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=Object(n["I"])("data-v-e36c55ca");Object(n["t"])("data-v-e36c55ca");var r={class:"wrapper"},s=Object(n["h"])("img",{class:"wrapper__img",src:"http://www.dell-lee.com/imgs/vue3/user.png"},null,-1),o={class:"wrapper__input"},i={class:"wrapper__input"};Object(n["r"])();var u=a((function(e,t,c,a,u,l){var d=Object(n["x"])("Toast");return Object(n["q"])(),Object(n["d"])("div",r,[s,Object(n["h"])("div",o,[Object(n["G"])(Object(n["h"])("input",{class:"wrapper__input__content",placeholder:"请输入用户名","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.username=e})},null,512),[[n["C"],a.username]])]),Object(n["h"])("div",i,[Object(n["G"])(Object(n["h"])("input",{class:"wrapper__input__content",placeholder:"请输入密码",type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.password=e})},null,512),[[n["C"],a.password]])]),Object(n["h"])("div",{class:"wrapper__login-button",onClick:t[3]||(t[3]=function(){return a.handleLogin&&a.handleLogin.apply(a,arguments)})},"登录"),Object(n["h"])("div",{class:"wrapper__login-link",onClick:t[4]||(t[4]=function(){return a.handlerRegisterClick&&a.handlerRegisterClick.apply(a,arguments)})},"立即注册"),a.show?(Object(n["q"])(),Object(n["d"])(d,{key:0,message:a.toastMessage},null,8,["message"])):Object(n["e"])("",!0)])})),l=c("1da1"),d=(c("96cf"),c("6c02")),p=c("b775"),h=c("0eb4"),b=function(e){var t=Object(d["d"])(),c=Object(n["u"])({username:"",password:""}),a=function(){var n=Object(l["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,a=c.username,r=c.password,""!=a||""!=r){n.next=5;break}return e("输入内容不能为空"),n.abrupt("return");case 5:return n.next=7,Object(p["b"])("/api/user/login",{username:c.username,password:c.password});case 7:s=n.sent,0===(null===s||void 0===s?void 0:s.errno)?(localStorage.isLogin=!0,t.push({name:"Home"})):e("登录失败"),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](0),e("请求失败");case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}(),r=Object(n["A"])(c),s=r.username,o=r.password;return{username:s,password:o,handleLogin:a}},_=function(){var e=Object(d["d"])(),t=function(){e.push({name:"Register"})};return{handlerRegisterClick:t}},j={name:"Login",components:{Toast:h["a"]},setup:function(){var e=Object(h["b"])(),t=e.showToast,c=e.toastMessage,n=e.show,a=b(t),r=a.username,s=a.password,o=a.handleLogin,i=_(),u=i.handlerRegisterClick;return{password:s,username:r,show:n,toastMessage:c,handleLogin:o,handlerRegisterClick:u}}};c("b7f7");j.render=u,j.__scopeId="data-v-e36c55ca";t["default"]=j}}]);
//# sourceMappingURL=shop.a8af1b71.js.map
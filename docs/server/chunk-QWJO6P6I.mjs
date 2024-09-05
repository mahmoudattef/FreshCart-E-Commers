import './polyfills.server.mjs';
import{c as q}from"./chunk-4AVCGYTM.mjs";import{a as K,b as W,e as G}from"./chunk-YDS4WKYY.mjs";import{a as Q}from"./chunk-2IBMUG4Q.mjs";import{a as z,b as Y,c as J}from"./chunk-UFEIDQHC.mjs";import{a as Z,b as $}from"./chunk-RVTEVSFG.mjs";import{a as X}from"./chunk-3JTQHYFI.mjs";import{b as u,d as g,e as w,f as v,g as U,h as _}from"./chunk-WI2M6OGW.mjs";import{e as H,f as V,i as N}from"./chunk-GENOAINO.mjs";import{B as b,C as M,D as j,r as F}from"./chunk-5YC5RUDY.mjs";import{E as D,Hb as l,Ib as P,Pb as m,Qa as T,S as x,T as B,V as h,X as I,Y as d,aa as c,ba as L,fa as A,k,pb as n,qb as i,rb as o,vc as R,wc as E,x as S,yb as y}from"./chunk-R445CJHI.mjs";var ee=(()=>{let t=class t{constructor(){this.title="E-Commerce"}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],standalone:!0,features:[m],decls:2,vars:0,consts:[["type","ball-scale-multiple"]],template:function(r,p){r&1&&o(0,"router-outlet")(1,"ngx-spinner",0)},dependencies:[u,Y]});let e=t;return e})();var te=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=c({type:t,selectors:[["app-nav-auth"]],standalone:!0,features:[m],decls:26,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary","fixed-top"],[1,"container-fluid"],["routerLink","login",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto"],[1,"nav-item"],["aria-current","page",1,"nav-link"],[1,"fa-brands","fa-facebook"],[1,"fa-brands","fa-twitch"],[1,"fa-brands","fa-instagram"],[1,"fa-brands","fa-linkedin"],["aria-current","page","routerLink","login","routerLinkActive","active-link",1,"nav-link"],["aria-current","page","routerLink","register","routerLinkActive","active-link",1,"nav-link"]],template:function(r,p){r&1&&(n(0,"nav",0)(1,"div",1)(2,"a",2),o(3,"img",3),i(),n(4,"button",4),o(5,"span",5),i(),n(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),o(10,"i",10),i()(),n(11,"li",8)(12,"a",9),o(13,"i",11),i()(),n(14,"li",8)(15,"a",9),o(16,"i",12),i()(),n(17,"li",8)(18,"a",9),o(19,"i",13),i()(),n(20,"li",8)(21,"a",14),l(22," login "),i()(),n(23,"li",8)(24,"a",15),l(25," register "),i()()()()()())},dependencies:[w,v]});let e=t;return e})();var C=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=c({type:t,selectors:[["app-footer"]],standalone:!0,features:[m],decls:22,vars:0,consts:[[1,"bg-main-light","py-5"],[1,"container"],[1,"m-0","h4"],[1,"text-muted","small"],[1,"d-flex","align-items-center","gap-3","text-nowrap"],["type","text","placeholder","Email",1,"form-control"],[1,"btn-main"],[1,"pay-details","d-flex","justify-content-between","align-items-center","py-3"],[1,"d-flex","align-items-center","gap-2"],[1,"h6","m-0"],["src","./assets/images/amazon-pay.png","width","30px","alt",""],["src","./assets/images/paypal.png","width","30px","alt",""],["src","./assets/images/mastercard.webp","width","30px","alt",""],["src","./assets/images/get-google-play.png","width","75px","alt",""]],template:function(r,p){r&1&&(n(0,"footer",0)(1,"div",1)(2,"h2",2),l(3,"Get The FreshCart App"),i(),n(4,"p",3),l(5," We Will Send You a Link, Open it on Your Phone to download the app "),i(),n(6,"div",4),o(7,"input",5),n(8,"button",6),l(9,"Share App Link"),i()(),o(10,"hr"),n(11,"div",7)(12,"div",8)(13,"h3",9),l(14,"Payment partners"),i(),o(15,"img",10)(16,"img",11)(17,"img",12),i(),n(18,"div",8)(19,"h3",9),l(20,"Get Deliveries with FreshCart"),i(),o(21,"img",13),i()()()())}});let e=t;return e})();var ne=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=c({type:t,selectors:[["app-auth-layout"]],standalone:!0,features:[m],decls:4,vars:0,consts:[[1,"container"]],template:function(r,p){r&1&&(o(0,"app-nav-auth"),n(1,"div",0),o(2,"router-outlet"),i(),o(3,"app-footer"))},dependencies:[te,u,C],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"]});let e=t;return e})();var ie=(()=>{let t=class t{constructor(){this._AuthService=d(Q),this._CartService=d(X),this.countNumber=R(()=>this._CartService.cartNumber())}ngOnInit(){this._CartService.getProductsCard().subscribe({next:s=>{console.log("cart Item",s),this._CartService.cartNumber.set(s.numOfCartItems)}})}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=c({type:t,selectors:[["app-nav-blank"]],standalone:!0,features:[m],decls:44,vars:1,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary","fixed-top"],[1,"container-fluid","ms-5"],["routerLink","home",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt",""],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","mx-auto"],[1,"nav-item"],["aria-current","page","routerLinkActive","active-link","routerLink","home",1,"nav-link"],["aria-current","page","routerLinkActive","active-link","routerLink","wishlist",1,"nav-link"],["aria-current","page","routerLinkActive","active-link","routerLink","products",1,"nav-link"],["aria-current","page","routerLinkActive","active-link","routerLink","categories",1,"nav-link"],["aria-current","page","routerLinkActive","active-link","routerLink","brands",1,"nav-link"],[1,"navbar-nav","ms-auto"],["aria-current","page","routerLinkActive","active-link","routerLink","cart",1,"nav-link","position-relative"],[1,"fa-solid","fa-cart-shopping","fa-2xl"],[1,"badge","bg-info","position-absolute","top-0","start-0"],["aria-current","page",1,"nav-link"],[1,"fa-brands","fa-facebook"],[1,"fa-brands","fa-twitch"],[1,"fa-brands","fa-instagram"],[1,"fa-brands","fa-linkedin"],["aria-current","page",1,"nav-link","cr",3,"click"]],template:function(r,p){r&1&&(n(0,"nav",0)(1,"div",1)(2,"a",2),o(3,"img",3),i(),n(4,"button",4),o(5,"span",5),i(),n(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),l(10,"Home"),i()(),n(11,"li",8)(12,"a",10),l(13,"WishList"),i()(),n(14,"li",8)(15,"a",11),l(16,"products"),i()(),n(17,"li",8)(18,"a",12),l(19,"categories"),i()(),n(20,"li",8)(21,"a",13),l(22,"brands"),i()()(),n(23,"ul",14)(24,"li",8)(25,"a",15),o(26,"i",16),n(27,"span",17),l(28),i()()(),n(29,"li",8)(30,"a",18),o(31,"i",19),i()(),n(32,"li",8)(33,"a",18),o(34,"i",20),i()(),n(35,"li",8)(36,"a",18),o(37,"i",21),i()(),n(38,"li",8)(39,"a",18),o(40,"i",22),i()(),n(41,"li",8)(42,"a",23),y("click",function(){return p._AuthService.logOut()}),l(43," signout "),i()()()()()()),r&2&&(T(28),P(p.countNumber()))},dependencies:[w,v]});let e=t;return e})();var oe=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=c({type:t,selectors:[["app-blank-layout"]],standalone:!0,features:[m],decls:4,vars:0,consts:[[1,"conatiner-fluid","mt-5","py-5"]],template:function(r,p){r&1&&(o(0,"app-nav-blank"),n(1,"div",0),o(2,"router-outlet"),i(),o(3,"app-footer"))},dependencies:[ie,u,C],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"]});let e=t;return e})();var re=(e,t)=>{let a=d(g);return typeof localStorage<"u"?localStorage.getItem("userToken")!==null?!0:(a.navigate(["/login"]),!1):!1};var ae=(e,t)=>{let a=d(g);return typeof localStorage<"u"?localStorage.getItem("userToken")!==null?(a.navigate(["/home"]),!1):!0:!1};var se=[{path:"",component:ne,canActivate:[ae],children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",loadComponent:()=>import("./chunk-IQ4CGSLK.mjs").then(e=>e.LoginComponent)},{path:"register",loadComponent:()=>import("./chunk-566TKIMF.mjs").then(e=>e.RegisterComponent)},{path:"forgot",loadComponent:()=>import("./chunk-B7F2WPET.mjs").then(e=>e.ForgotPasswordComponent)}]},{path:"",component:oe,canActivate:[re],children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-QWEDI4NB.mjs").then(e=>e.HomeComponent)},{path:"products",loadComponent:()=>import("./chunk-OUJKYLJI.mjs").then(e=>e.ProductComponent)},{path:"cart",loadComponent:()=>import("./chunk-EIO3YATE.mjs").then(e=>e.CartComponent)},{path:"brands",loadComponent:()=>import("./chunk-URH55UUC.mjs").then(e=>e.BrandsComponent)},{path:"categories",loadComponent:()=>import("./chunk-GWQO7ICH.mjs").then(e=>e.CategoriesComponent)},{path:"details/:id",loadComponent:()=>import("./chunk-UAWBXER4.mjs").then(e=>e.DetailsComponent)},{path:"wishlist",loadComponent:()=>import("./chunk-5ESHDBDZ.mjs").then(e=>e.WishlistComponent)},{path:"allorders",loadComponent:()=>import("./chunk-G6P3BBC2.mjs").then(e=>e.AllordersComponent)},{path:"orders/:id",loadComponent:()=>import("./chunk-ESTONCJK.mjs").then(e=>e.OrdersComponent)}]},{path:"**",loadComponent:()=>import("./chunk-NESDFA2V.mjs").then(e=>e.NotfoundComponent)}];var le=(e,t)=>(localStorage.getItem("userToken")!==null&&(e.url.includes("cart")||e.url.includes("orders")||e.url.includes("wishlist"))&&(e=e.clone({setHeaders:{Token:localStorage.getItem("userToken")}})),t(e));var pe=(e,t)=>{let a=d(Z);return t(e).pipe(S(s=>(console.log("interceptors",s.error.message),a.error(s.error.message,"FreshCart "),k(()=>s))))};var ce=(e,t)=>{let a=d(z);return a.show(),t(e).pipe(D(()=>{a.hide()}))};var O=new h("@sweetalert2/ngx-sweetalert2#swalProvider"),me=new h("@sweetalert2/ngx-sweetalert2#fireOnInit"),de=new h("@sweetalert2/ngx-sweetalert2#dismissOnDestroy"),ue=(()=>{class e{swalProvider;swalPromiseCache;constructor(a){this.swalProvider=a}get swal(){return this.swalPromiseCache||this.preloadSweetAlertLibrary(),this.swalPromiseCache}preloadSweetAlertLibrary(){if(this.swalPromiseCache)return;let a=s(this.swalProvider)?this.swalProvider():Promise.resolve(this.swalProvider);this.swalPromiseCache=a.then(p=>r(p)?p:p.default);function s(p){return typeof p=="function"&&p.version===void 0}function r(p){return typeof p=="function"}}static \u0275fac=function(s){return new(s||e)(I(O))};static \u0275prov=x({token:e,factory:e.\u0275fac})}return e})();function we(){return import("./chunk-QGUAF6LJ.mjs")}var fe=(()=>{class e{static forRoot(a={}){return{ngModule:e,providers:[ue,{provide:O,useValue:a.provideSwal||we},{provide:me,useValue:a.fireOnInit||!1},{provide:de,useValue:a.dismissOnDestroy||!0}]}}static forChild(a={}){return{ngModule:e,providers:[...a.provideSwal?[ue,{provide:O,useValue:a.provideSwal}]:[],...a.fireOnInit!==void 0?[{provide:me,useValue:a.fireOnInit}]:[],...a.dismissOnDestroy!==void 0?[{provide:de,useValue:a.dismissOnDestroy}]:[]]}}static \u0275fac=function(s){return new(s||e)};static \u0275mod=L({type:e});static \u0275inj=B({imports:[F]})}return e})();var he={providers:[U(se,_()),N(),b(j(),M([le,pe,ce])),W(),$(),b(),A(J,V,q,K,fe)]};var ve={providers:[G()]},ge=E(he,ve);var Ce=()=>H(ee,ge),rn=Ce;export{rn as a};

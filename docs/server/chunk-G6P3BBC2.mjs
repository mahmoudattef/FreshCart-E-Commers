import './polyfills.server.mjs';
import{a as y}from"./chunk-QWTEOBRJ.mjs";import{a as S}from"./chunk-QZLY374Y.mjs";import"./chunk-WVUI6REW.mjs";import"./chunk-5YC5RUDY.mjs";import{Hb as s,Ib as g,Jb as x,Ma as f,Pb as b,Qa as o,Y as p,aa as u,hb as v,mb as c,nb as d,ob as m,pb as a,qb as i,rb as h}from"./chunk-R445CJHI.mjs";import"./chunk-VVCT4QZE.mjs";function w(t,e){if(t&1&&(a(0,"div",3)(1,"div",4)(2,"div"),h(3,"img",5),i()(),a(4,"div",6)(5,"div")(6,"h3",7),s(7),i(),a(8,"p",8),s(9),i()()()()),t&2){let r=e.$implicit;o(3),v("src",r.product.imageCover,f)("alt",r.product.title),o(4),g(r.product.title),o(2),x("Price: ",r.price,"")}}function C(t,e){if(t&1&&d(0,w,10,4,"div",3,c),t&2){let r=e.$implicit;m(r.cartItems)}}var F=(()=>{let e=class e{constructor(){this._OrdersService=p(y),this.Product=[],this.userData=null}ngOnInit(){this.userData=S(localStorage.getItem("userToken")),this.allOrdersUnSub=this._OrdersService.getUserOrders(this.userData.id).subscribe({next:n=>{this.Product=n},error:n=>{console.log("err:",n)}})}ngOnDestroy(){this.allOrdersUnSub?.unsubscribe()}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=u({type:e,selectors:[["app-allorders"]],standalone:!0,features:[b],decls:6,vars:0,consts:[[1,"bg-main-light","rounded-4","shadow","p-4","my-2","w-75","mx-auto"],[1,"d-flex","align-items-center","justify-content-between"],[1,"h2"],[1,"row","mb-1","border-bottom","m-0"],[1,"col-md-1"],[1,"w-100",3,"src","alt"],[1,"col-md-11","d-flex","align-items-center","justify-content-between"],[1,"h5"],[1,"text-main"]],template:function(l,_){l&1&&(a(0,"section",0)(1,"div",1)(2,"h1",2),s(3,"Show Cart"),i()(),d(4,C,2,0,null,null,c),i()),l&2&&(o(4),m(_.Product))}});let t=e;return t})();export{F as AllordersComponent};
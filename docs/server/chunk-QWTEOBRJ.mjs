import './polyfills.server.mjs';
import{a as s}from"./chunk-WVUI6REW.mjs";import{z as a}from"./chunk-5YC5RUDY.mjs";import{S as o,X as n}from"./chunk-R445CJHI.mjs";var u=(()=>{let e=class e{constructor(t){this._HttpClient=t,this.myHeaders={Token:localStorage.getItem("userToken")}}checkOut(t,r){return this._HttpClient.post(`${s.baseUrl}/api/v1/orders/checkout-session/${t}?url=${s.urlServer}`,{shippingAddress:r})}getUserOrders(t){return this._HttpClient.get(`${s.baseUrl}/api/v1/orders/user/${t}`)}cashOrders(t,r){return this._HttpClient.post(`${s.baseUrl}/api/v1/orders/${t}`,{shippingAddress:r})}};e.\u0275fac=function(r){return new(r||e)(n(a))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{u as a};
import './polyfills.server.mjs';
import{a as r}from"./chunk-WVUI6REW.mjs";import{z as n}from"./chunk-5YC5RUDY.mjs";import{S as o,X as s}from"./chunk-R445CJHI.mjs";var h=(()=>{let t=class t{constructor(i){this._HttpClient=i}addProductToWhishList(i){return this._HttpClient.post(`${r.baseUrl}/api/v1/wishlist`,{productId:i})}getWishlist(){return this._HttpClient.get(`${r.baseUrl}/api/v1/wishlist`)}removeProduct(i){return this._HttpClient.delete(`${r.baseUrl}/api/v1/wishlist/${i}`)}};t.\u0275fac=function(a){return new(a||t)(s(n))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{h as a};

import './polyfills.server.mjs';
import{a as i}from"./chunk-WVUI6REW.mjs";import{z as c}from"./chunk-5YC5RUDY.mjs";import{S as o,Y as n}from"./chunk-R445CJHI.mjs";var u=(()=>{let t=class t{constructor(){this._HttpClient=n(c)}getAllProducts(r=1){return this._HttpClient.get(`${i.baseUrl}/api/v1/products?page=${r}`)}getSpecificProducts(r){return this._HttpClient.get(`${i.baseUrl}/api/v1/products/${r}`)}};t.\u0275fac=function(p){return new(p||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{u as a};
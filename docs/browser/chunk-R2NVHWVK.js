import{a as l}from"./chunk-G5KA7DMQ.js";import{c as n}from"./chunk-2HWPXV2S.js";import{u as a,z as r}from"./chunk-Z3ODQKXR.js";import{S as i,Y as s}from"./chunk-PRGVUTWH.js";var C=(()=>{let e=class e{constructor(){this._Router=s(n),this.userData=null,this._HttpClient=s(a)}setRegisterForm(t){return this._HttpClient.post(`${r.baseUrl}/api/v1/auth/signup`,t)}setLoginForm(t){return this._HttpClient.post(`${r.baseUrl}/api/v1/auth/signin`,t)}saveUserData(){localStorage.getItem("userToken")!==null&&(this.userData=l(localStorage.getItem("userToken")),console.log("token:",this.userData))}logOut(){localStorage.removeItem("userToken"),this.userData=null,this._Router.navigate(["/login"])}setEmailVerify(t){return this._HttpClient.post(`${r.baseUrl}/api/v1/auth/forgotPasswords`,t)}setCodeVerify(t){return this._HttpClient.post(`${r.baseUrl}/api/v1/auth/verifyResetCode`,t)}setResetPass(t){return this._HttpClient.put(`${r.baseUrl}/api/v1/auth/resetPassword`,t)}};e.\u0275fac=function(u){return new(u||e)},e.\u0275prov=i({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();export{C as a};
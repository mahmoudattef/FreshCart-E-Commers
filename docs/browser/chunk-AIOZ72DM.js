import{a as D}from"./chunk-R2NVHWVK.js";import"./chunk-G5KA7DMQ.js";import{a as G,b as c,c as B,d as M,h as O,i as V,j as k,k as I,m as $}from"./chunk-RIUDB373.js";import{c as A}from"./chunk-2HWPXV2S.js";import"./chunk-ORF7TDXP.js";import{h as L}from"./chunk-Z3ODQKXR.js";import{$ as x,Eb as m,Fb as N,Mb as P,Na as a,Pb as S,Y as b,cb as _,eb as f,ib as u,mb as n,nb as i,ob as h,vb as q,wb as E}from"./chunk-PRGVUTWH.js";import"./chunk-CWTPBX7D.js";var R=(e,r)=>({"is-valid":e,"is-invalid":r});function j(e,r){e&1&&(n(0,"p",18),m(1,"Name Is Required"),i())}function z(e,r){e&1&&(n(0,"p",18),m(1,"Should be more than Or equal 3 chars"),i())}function H(e,r){e&1&&(n(0,"p",18),m(1,"Should be less than Or equal 20 chars"),i())}function J(e,r){if(e&1&&(n(0,"div",6),_(1,j,2,0,"p",18)(2,z,2,0)(3,H,2,0),i()),e&2){let l,o=E();a(),u(1,(l=o.registerForm.get("name"))!=null&&l.getError("required")?1:(l=o.registerForm.get("name"))!=null&&l.getError("minlength")?2:(l=o.registerForm.get("name"))!=null&&l.getError("maxlength")?3:-1)}}function K(e,r){e&1&&(n(0,"p"),m(1,"Email is required"),i())}function Q(e,r){e&1&&(n(0,"p"),m(1,"Email valid email"),i())}function U(e,r){if(e&1&&(n(0,"div",9),_(1,K,2,0,"p")(2,Q,2,0),i()),e&2){let l,o=E();a(),u(1,(l=o.registerForm.get("email"))!=null&&l.getError("required")?1:(l=o.registerForm.get("email"))!=null&&l.getError("email")?2:-1)}}function W(e,r){e&1&&(n(0,"p"),m(1,"phone is required"),i())}function X(e,r){e&1&&(n(0,"p"),m(1,"phone valid phone"),i())}function Y(e,r){if(e&1&&(n(0,"div",9),_(1,W,2,0,"p")(2,X,2,0),i()),e&2){let l,o=E();a(),u(1,(l=o.registerForm.get("phone"))!=null&&l.getError("required")?1:(l=o.registerForm.get("phone"))!=null&&l.getError("pattern")?2:-1)}}function Z(e,r){e&1&&(n(0,"p"),m(1,"password is required"),i())}function ee(e,r){e&1&&(n(0,"p"),m(1,"Password must be at least 8 characters long"),i())}function te(e,r){if(e&1&&(n(0,"div",9),_(1,Z,2,0,"p")(2,ee,2,0),i()),e&2){let l,o=E();a(),u(1,(l=o.registerForm.get("password"))!=null&&l.getError("required")?1:(l=o.registerForm.get("password"))!=null&&l.getError("pattern")?2:-1)}}function ie(e,r){e&1&&(n(0,"p",9),m(1,"Password confirmation is incorrect "),i())}function ne(e,r){e&1&&(n(0,"span"),h(1,"i",19),i())}function re(e,r){if(e&1&&(n(0,"p",17),m(1),i()),e&2){let l=E();a(),N(l.msgError)}}function le(e,r){e&1&&(n(0,"p"),m(1,"success"),i())}var _e=(()=>{let r=class r{constructor(){this._AuthService=b(D),this._Router=b(A),this.msgError="",this.msSuccess=!1,this.isLoading=!1,this._FormBuilder=b(I),this.registerForm=this._FormBuilder.group({name:[null,[c.required,c.minLength(3),c.maxLength(20)]],email:[null,[c.required,c.email]],password:[null,[c.required,c.pattern(/^\w{6,}$/)]],rePassword:[null],phone:[null,[c.required,c.pattern(/^01[0125][0-9]{8}$/)]]},{validators:this.confirmPassword})}registerSubmit(){this.registerForm.valid?(this.isLoading=!0,this.registerSub=this._AuthService.setRegisterForm(this.registerForm.value).subscribe({next:o=>{console.log(o),o.message=="success"&&setTimeout(()=>{this.msSuccess=!0,this._Router.navigate(["/login"])},1e3),this.isLoading=!1},error:o=>{this.msgError=o.error.message,console.log(o),this.isLoading=!1}})):(this.registerForm.setErrors({mismatch:!0}),this.registerForm.markAllAsTouched())}ngOnDestroy(){this.registerSub?.unsubscribe()}confirmPassword(o){return o.get("password")?.value===o.get("rePassword")?.value?null:{mismatch:!0}}};r.\u0275fac=function(w){return new(w||r)},r.\u0275cmp=x({type:r,selectors:[["app-register"]],standalone:!0,features:[P],decls:34,vars:26,consts:[[1,"bg-main-light","shadow","rounded-4","my-4","p-2"],[1,"h2","text-main"],[3,"ngSubmit","formGroup"],[1,"my-2"],["for","name"],["id","name","type","text","formControlName","name",1,"form-control",3,"ngClass"],[1,"alert","alert-danger","w-50"],["for","email"],["id","email","type","email","formControlName","email",1,"form-control",3,"ngClass"],[1,"w-50","alert","alert-danger"],["for","phone"],["id","phone","type","tel","formControlName","phone",1,"form-control",3,"ngClass"],["for","password"],["id","password","type","password","formControlName","password",1,"form-control",3,"ngClass"],["for","rePassword"],["id","rePassword","type","password","formControlName","rePassword",1,"form-control"],["type","submit",1,"btn-main","ms-auto","d-block",3,"disabled"],[1,"alert","alert-danger","w-50","m-0"],[1,"m-0"],[1,"fas","fa-spin","fa-spinner"]],template:function(w,t){if(w&1&&(n(0,"section",0)(1,"h1",1),m(2,"Register Now:"),i(),n(3,"form",2),q("ngSubmit",function(){return t.registerSubmit()}),n(4,"div",3)(5,"label",4),m(6,"name"),i(),h(7,"input",5),_(8,J,4,1,"div",6),i(),n(9,"div",3)(10,"label",7),m(11,"email"),i(),h(12,"input",8),_(13,U,3,1,"div",9),i(),n(14,"div",3)(15,"label",10),m(16,"phone"),i(),h(17,"input",11),_(18,Y,3,1,"div",9),i(),n(19,"div",3)(20,"label",12),m(21,"password"),i(),h(22,"input",13),_(23,te,3,1,"div",9),i(),n(24,"div",3)(25,"label",14),m(26,"rePassword"),i(),h(27,"input",15),_(28,ie,2,0,"p",9),i(),n(29,"button",16),m(30,"Register "),_(31,ne,2,0,"span"),i(),_(32,re,2,1,"p",17)(33,le,2,0,"p"),i()()),w&2){let s,C,d,F,g,v,p,y,T;a(3),f("formGroup",t.registerForm),a(4),f("ngClass",S(14,R,!((s=t.registerForm.get("name"))!=null&&s.errors)&&(((s=t.registerForm.get("name"))==null?null:s.touched)||((s=t.registerForm.get("name"))==null?null:s.dirty)),((s=t.registerForm.get("name"))==null?null:s.errors)&&(((s=t.registerForm.get("name"))==null?null:s.touched)||((s=t.registerForm.get("name"))==null?null:s.dirty)))),a(),u(8,(C=t.registerForm.get("name"))!=null&&C.errors&&((C=t.registerForm.get("name"))!=null&&C.touched||(C=t.registerForm.get("name"))!=null&&C.dirty)?8:-1),a(4),f("ngClass",S(17,R,!((d=t.registerForm.get("email"))!=null&&d.errors)&&(((d=t.registerForm.get("email"))==null?null:d.touched)||((d=t.registerForm.get("email"))==null?null:d.dirty)),((d=t.registerForm.get("email"))==null?null:d.errors)&&(((d=t.registerForm.get("email"))==null?null:d.touched)||((d=t.registerForm.get("email"))==null?null:d.dirty)))),a(),u(13,(F=t.registerForm.get("email"))!=null&&F.errors&&((F=t.registerForm.get("email"))!=null&&F.touched||(F=t.registerForm.get("email"))!=null&&F.dirty)?13:-1),a(4),f("ngClass",S(20,R,!((g=t.registerForm.get("phone"))!=null&&g.errors)&&(((g=t.registerForm.get("phone"))==null?null:g.touched)||((g=t.registerForm.get("phone"))==null?null:g.dirty)),((g=t.registerForm.get("phone"))==null?null:g.errors)&&(((g=t.registerForm.get("phone"))==null?null:g.touched)||((g=t.registerForm.get("phone"))==null?null:g.dirty)))),a(),u(18,(v=t.registerForm.get("phone"))!=null&&v.errors&&((v=t.registerForm.get("phone"))!=null&&v.touched||(v=t.registerForm.get("phone"))!=null&&v.dirty)?18:-1),a(4),f("ngClass",S(23,R,!((p=t.registerForm.get("password"))!=null&&p.errors)&&(((p=t.registerForm.get("password"))==null?null:p.touched)||((p=t.registerForm.get("password"))==null?null:p.dirty)),((p=t.registerForm.get("password"))==null?null:p.errors)&&(((p=t.registerForm.get("password"))==null?null:p.touched)||((p=t.registerForm.get("password"))==null?null:p.dirty)))),a(),u(23,(y=t.registerForm.get("password"))!=null&&y.errors&&((y=t.registerForm.get("password"))!=null&&y.touched)?23:-1),a(5),u(28,t.registerForm.getError("mismatch")&&((T=t.registerForm.get("rePassword"))!=null&&T.touched)?28:-1),a(),f("disabled",t.registerForm.invalid||t.isLoading),a(2),u(31,t.isLoading?31:-1),a(),u(32,t.msgError?32:-1),a(),u(33,t.msSuccess?33:-1)}},dependencies:[$,O,G,B,M,V,k,L]});let e=r;return e})();export{_e as RegisterComponent};
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16a225ee"],{"3dbd":function(e,t,r){"use strict";var n=r("6afc"),i=r.n(n);i.a},"49da":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"join-container"},[r("header",{staticClass:"header",attrs:{role:"banner"}}),e._v(" "),r("div",{staticClass:"setup-header"},[r("h1",[e._v("Join "+e._s(e.appName))]),e._v(" "),r("p",{staticClass:"lead"},[e._v(e._s(e.$store.state.app.description))])]),e._v(" "),r("el-steps",{staticClass:"steps",attrs:{active:1}},[r("el-step",{attrs:{title:"Step 1",description:"Some description"}}),e._v(" "),r("el-step",{attrs:{title:"Step 2",description:"Some description"}}),e._v(" "),r("el-step",{attrs:{title:"Step 3",description:"Some description"}})],1),e._v(" "),r("div",{staticClass:"register-container"},[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-col",{attrs:{span:16}},[r("h1",{staticClass:"heading1"},[e._v("Create your personal account")]),e._v(" "),r("el-form",{ref:"registerForm",attrs:{model:e.registerForm,rules:e.registerFormRules,"label-position":"top","label-width":"120px"}},[r("el-form-item",{attrs:{label:"Username",prop:"username"}},[r("el-input",{staticClass:"fixed-width-input",model:{value:e.registerForm.username,callback:function(t){e.$set(e.registerForm,"username",t)},expression:"registerForm.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Email address",prop:"email"}},[r("el-input",{staticClass:"fixed-width-input",model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Password",prop:"password"}},[r("el-input",{staticClass:"fixed-width-input",model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}})],1)],1)],1),e._v(" "),r("el-col",{attrs:{span:8}},[r("el-card",{staticStyle:{border:"1px solid #dcdfe6"},attrs:{shadow:"hover"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("h2",{staticClass:"heading2"},[e._v("You’ll love "+e._s(e.appName))])]),e._v(" "),r("p",[e._v(e._s(e.placeholderText))])])],1)],1),e._v(" "),r("el-row",{attrs:{type:"flex"}},[r("el-col",{staticStyle:{"margin-bottom":"10px"},attrs:{span:16}},[r("h1",{staticClass:"heading1",staticStyle:{"margin-bottom":"20px"}},[e._v("Verify")]),e._v(" "),r("el-card",{staticStyle:{width:"466px",border:"1px solid #dcdfe6"},attrs:{shadow:"never"}},[r("p",[e._v("[Validation code here.] "+e._s(e.placeholderText))])])],1)],1),e._v(" "),r("el-row",{staticClass:"term-privacy"},[r("p",[e._v("By clicking “Create an account” below, you agree to our\n        "),r("a",{attrs:{href:"/terms",target:"_blank"}},[e._v("terms of service")]),e._v(" and\n        "),r("a",{attrs:{href:"/privacy",target:"_blank"}},[e._v("privacy statement")]),e._v(".\n        We’ll occasionally send you account related emails.")])]),e._v(" "),r("el-row",[r("el-button",{attrs:{type:"success",loading:e.createAccountLoading},on:{click:e.createAccount}},[e._v("Create an account")])],1)],1)],1)},i=[],a=(r("96cf"),r("3b8d")),s=r("b775"),o={resister:function(e){return Object(s["c"])("/auth/register",e)},checkUsernameUniqueness:function(e){return Object(s["a"])("/auth/check-username-uniqueness",e)},checkEmailUniqueness:function(e){return Object(s["a"])("/auth/check-email-uniqueness",e)}},c=o,u=r("7f46"),l=r("362e"),m={name:"Join",data:function(){var e=function(e,t,r){if(u["a"].isEmpty(t))return r(new Error("".concat(e.field," is not empty")));if(!u["a"].isLengthBetween(t,4,50))return r(new Error("length of username must be between 1 and 50"));var n={username:t};c.checkUsernameUniqueness(n).then(function(){r()}).catch(function(e){r(new Error(e))})},t=function(e,t,r){if(u["a"].isEmpty(t))return r(new Error("".concat(e.field," is not empty")));if(!u["a"].isEmail(t))return r(new Error("invalid ".concat(e.field)));var n={email:t};c.checkEmailUniqueness(n).then(function(){r()}).catch(function(e){r(new Error(e))})},r=function(e,t,r){return u["a"].isEmpty(t)?r(new Error("".concat(e.field," is not empty"))):u["a"].isLengthBetween(t,8,30)?void r():r(new Error("length of password must be between 1 and 50"))};return{appName:this.$store.state.app.appName.toLocaleUpperCase(),placeholderText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",registerForm:{username:"test",password:"12345678",email:"test@gmail.com"},registerFormRules:{username:[{required:!0,validator:e,trigger:"blur"}],email:[{required:!0,validator:t,trigger:"blur"}],password:[{required:!0,validator:r,trigger:["change","blur"]}]},createAccountLoading:!1}},methods:{createAccount:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.createAccountLoading=!0,e.prev=1,e.next=4,this.$refs["registerForm"].validate();case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),t=e.t0;case 10:if(t){e.next=13;break}return this.createAccountLoading=!1,e.abrupt("return");case 13:return e.next=15,c.resister(this.registerForm);case 15:if(r=e.sent,r.status===l["a"].SUCCESS.code){e.next=19;break}return this.createAccountLoading=!1,e.abrupt("return");case 19:this.$confirm(r.message,"Congratulations",{confirmButtonText:"Sign in immediately",showCancelButton:!1,closeOnClickModal:!1}).then(function(){n.$router.push("/")}),this.createAccountLoading=!1;case 21:case"end":return e.stop()}},e,this,[[1,7]])}));function t(){return e.apply(this,arguments)}return t}()}},d=m,p=(r("3dbd"),r("2877")),g=Object(p["a"])(d,n,i,!1,null,"275d3451",null);t["default"]=g.exports},"6afc":function(e,t,r){},"7f46":function(e,t,r){"use strict";r("0d6d");var n=r("7618"),i={isString:function(e){return"string"===typeof e},isNotString:function(e){return"string"!==typeof e},isEmpty:function(e){return!!i.isNotString(e)||0===e.trim().length},isNotEmpty:function(e){return!!i.isString(e)&&0!==e.trim().length},isBlank:function(e){var t=i.isEmpty(e);if(t)return t;var r=/^\s*$/;return r.test(e)},isNotBlank:function(e){return!i.isBlank(e)},isLengthLessThen:function(e,t){if(i.isNotString(e))throw new Error("Type of argument targetString expected string, but got "+Object(n["a"])(e));if("number"!==typeof t)throw new Error("Type of argument minLength expected number, but got "+("undefined"===typeof minLength?"undefined":Object(n["a"])(minLength)));return e.length<t},isLengthNotGreaterThen:function(e,t){if(i.isNotString(e))throw new Error("Type of argument targetString expected string, but got "+Object(n["a"])(e));if("number"!==typeof t)throw new Error("Type of argument minLength expected number, but got "+("undefined"===typeof minLength?"undefined":Object(n["a"])(minLength)));return e.length<=t},isLengthGraterThen:function(e,t){if(i.isNotString(e))throw new Error("Type of argument targetString expected string, but got "+Object(n["a"])(e));if("number"!==typeof t)throw new Error("Type of argument minLength expected number, but got "+("undefined"===typeof minLength?"undefined":Object(n["a"])(minLength)));return e.length>t},isLengthNotLessThen:function(e,t){if(i.isNotString(e))throw new Error("Type of argument targetString expected string, but got "+Object(n["a"])(e));if("number"!==typeof t)throw new Error("Type of argument minLength expected number, but got "+("undefined"===typeof minLength?"undefined":Object(n["a"])(minLength)));return e.length>=t},isLengthBetween:function(e,t,r){if(i.isNotString(e))throw new Error("Type of argument targetString expected string, but got "+Object(n["a"])(e));if("number"!==typeof t)throw new Error("Type of argument minLength expected number, but got "+Object(n["a"])(t));if("number"!==typeof r)throw new Error("Type of argument maxLength expected number, but got "+Object(n["a"])(t));return t<=e.length&&e.length<=r},isEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}};Object.freeze(i),t["a"]=i}}]);
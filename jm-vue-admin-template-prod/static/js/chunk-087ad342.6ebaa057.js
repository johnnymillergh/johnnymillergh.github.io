(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-087ad342"],{"0155":function(e,t,n){"use strict";var r=n("fb1a"),i=n.n(r);i.a},"735d":function(e,t,n){"use strict";var r=n("f370"),i=n.n(r);i.a},"7f46":function(e,t,n){"use strict";var r=n("15b8"),i=n.n(r),o=n("7618"),a={isString:function(e){return"string"===typeof e},isNotString:function(e){return"string"!==typeof e},isEmpty:function(e){return!!a.isNotString(e)||0===e.trim().length},isNotEmpty:function(e){return!!a.isString(e)&&0!==e.trim().length},isLengthLessThen:function(e,t){if(a.isNotString(e))throw new Error("Type of argument targetString expected string, but got "+Object(o["a"])(e));if("number"!==typeof t)throw new Error("Type of argument minLength expected number, but got "+("undefined"===typeof minLength?"undefined":Object(o["a"])(minLength)));return e.length<t},isLengthNotGreaterThen:function(e,t){if(a.isNotString(e))throw new Error("Type of argument targetString expected string, but got "+Object(o["a"])(e));if("number"!==typeof t)throw new Error("Type of argument minLength expected number, but got "+("undefined"===typeof minLength?"undefined":Object(o["a"])(minLength)));return e.length<=t},isLengthGraterThen:function(e,t){if(a.isNotString(e))throw new Error("Type of argument targetString expected string, but got "+Object(o["a"])(e));if("number"!==typeof t)throw new Error("Type of argument minLength expected number, but got "+("undefined"===typeof minLength?"undefined":Object(o["a"])(minLength)));return e.length>t},isLengthNotLessThen:function(e,t){if(a.isNotString(e))throw new Error("Type of argument targetString expected string, but got "+Object(o["a"])(e));if("number"!==typeof t)throw new Error("Type of argument minLength expected number, but got "+("undefined"===typeof minLength?"undefined":Object(o["a"])(minLength)));return e.length>=t},isLengthBetween:function(e,t,n){if(a.isNotString(e))throw new Error("Type of argument targetString expected string, but got "+Object(o["a"])(e));if("number"!==typeof t)throw new Error("Type of argument minLength expected number, but got "+Object(o["a"])(t));if("number"!==typeof n)throw new Error("Type of argument maxLength expected number, but got "+Object(o["a"])(t));return t<=e.length&&e.length<=n},isEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}};i()(a),t["a"]=a},"9ed6":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginFormRules,"auto-complete":"on","label-position":"left"}},[n("h3",{staticClass:"app-title"},[e._v(e._s(e.appName))]),e._v(" "),n("h4",{staticClass:"app-description"},[e._v(e._s(e.appDescription))]),e._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),n("el-input",{attrs:{name:"username",type:"text","auto-complete":"on",placeholder:"Username"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username","string"===typeof t?t.trim():t)},expression:"loginForm.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),n("el-input",{attrs:{type:e.inputType,name:"password","auto-complete":"on",placeholder:"Password"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password","string"===typeof t?t.trim():t)},expression:"loginForm.password"}}),e._v(" "),n("span",{staticClass:"password-eye",on:{click:e.showPassword}},[n("svg-icon",{attrs:{"icon-class":"password"===e.inputType?"eye":"eye-open"}})],1)],1),e._v(" "),n("el-row",{attrs:{gutter:24,type:"flex",justify:"center"}},[n("el-col",[n("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e._v("\n          Sign up\n        ")])],1),e._v(" "),n("el-col",[n("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("\n          Sign in\n        ")])],1)],1),e._v(" "),e.developmentEnvironment?n("div",{staticClass:"hint"},[n("span",[e._v("Username: "+e._s(e.hintUsername))]),e._v(" "),n("span",[e._v("Password: "+e._s(e.hintPassword))])]):e._e()],1),e._v(" "),n("login-footer",{staticClass:"login-footer"})],1)},i=[],o=(n("96cf"),n("3b8d")),a=(n("a481"),n("7401")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"footer-font"},[e._v("\n    "+e._s(e.appAuthorArray[0]+" "+e.appAuthorArray[1]+" "+e.appAuthorArray[2])+" © "+e._s(e.getYearRange())+"\n  ")]),e._v(" "),n("h1",{staticClass:"footer-font"},[e._v("\n    Version "+e._s(e.appVersion)+"\n  ")])])},u=[],p=(n("28a5"),n("3b2b"),{formatDate:function(e,t){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t}}),c=p,g={name:"LoginFooter",data:function(){return{appAuthorArray:this.$store.state.app.author.split(" "),appVersion:this.$store.state.app.appVersion,startYear:"2019",currentYear:c.formatDate(new Date,"yyyy")}},methods:{getYearRange:function(){return this.currentYear===this.startYear?this.currentYear:this.startYear+"-"+this.currentYear}}},l=g,f=(n("0155"),n("2877")),h=Object(f["a"])(l,s,u,!1,null,"ffe6264a",null),m=h.exports,d=n("7f46"),w={name:"Login",components:{LoginFooter:m},data:function(){var e=function(e,t,n){if(d["a"].isEmpty(t))return n(new Error("Username is not blank"));a["a"].validateUsername(t).then(function(){return n()}).catch(function(e){return n(new Error(e))})};return{appName:this.$store.state.app.appName.replace(/-/g," ").toLocaleUpperCase(),appDescription:this.$store.state.app.description,loginForm:{username:"admin",password:"123456"},hintUsername:null,hintPassword:null,loginFormRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",message:"Password id required"}]},loading:!1,inputType:"password",redirect:void 0,developmentEnvironment:!1}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},mounted:function(){this.developmentEnvironment=!1,this.developmentEnvironment&&(this.hintUsername="admin",this.hintPassword="123456")},methods:{showPassword:function(){"password"===this.inputType?this.inputType="":this.inputType="password"},handleLogin:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,this.$refs["loginForm"].validate();case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),t=e.t0;case 10:if(t){e.next=13;break}return this.loading=!1,e.abrupt("return");case 13:n={usernameOrEmailOrPhone:this.loginForm.username,password:this.loginForm.password},this.$store.dispatch("Login",n).then(function(){r.$router.push({path:r.redirect||"/"})}).catch(function(e){console.error("Error in login page",e)}).finally(function(){r.loading=!1});case 15:case"end":return e.stop()}},e,this,[[1,7]])}));function t(){return e.apply(this,arguments)}return t}(),handleRegister:function(){this.$router.push("/join")}}},v=w,y=(n("735d"),n("fe22"),Object(f["a"])(v,r,i,!1,null,"3f60612f",null));t["default"]=y.exports},b440:function(e,t,n){},f370:function(e,t,n){},fb1a:function(e,t,n){},fe22:function(e,t,n){"use strict";var r=n("b440"),i=n.n(r);i.a}}]);
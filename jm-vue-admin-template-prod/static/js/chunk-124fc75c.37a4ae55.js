(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-124fc75c"],{"3ea4":function(t,e,a){},"7f5a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.onTabClick}},[a("el-tab-pane",{attrs:{label:"Permission Controls"}},[a("transition",{attrs:{name:"el-zoom-in-top"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showPermissionControls,expression:"showPermissionControls"}]},[a("heading",{attrs:{text:"API Glance"}}),t._v(" "),a("el-row",{attrs:{gutter:5}},[a("el-col",{attrs:{span:8}},[a("el-card",{staticStyle:{height:"290px"},attrs:{shadow:"never","body-style":{padding:"0"}}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticStyle:{"margin-bottom":"5px"}},[t._v("Controller List")]),t._v(" "),a("el-input",{attrs:{size:"mini",placeholder:"Type class name to search"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),t._v(" "),a("div",{staticStyle:{height:"202px",overflow:"auto",padding:"5px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.controllerListLoading,expression:"controllerListLoading"}],attrs:{data:t.getFilteredControllerList(),stripe:"","highlight-current-row":""},on:{"row-click":t.onClickTableRow}},[a("el-table-column",{attrs:{label:"#",width:"50px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-radio",{attrs:{label:e.row},on:{change:t.onSelectController},model:{value:t.selectedController,callback:function(e){t.selectedController=e},expression:"selectedController"}},[a("i")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"className",label:"Class Name"}})],1)],1)])],1),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-card",{staticStyle:{height:"290px"},attrs:{shadow:"never"}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.apiSelectFormLoading,expression:"apiSelectFormLoading"}],attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"Status"}},[a("el-radio-group",{on:{change:t.onChangeApiStatus},model:{value:t.apiStatus,callback:function(e){t.apiStatus=e},expression:"apiStatus"}},[a("el-radio",{attrs:{label:t.ApiStatus.IDLED.status,border:""}},[t._v("Idled "+t._s(t.getIdledApiCount()))]),t._v(" "),a("el-radio",{attrs:{label:t.ApiStatus.IN_USED.status,border:""}},[t._v("In use "+t._s(t.getInUseApiCount()))])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"URL"}},[a("el-select",{staticStyle:{width:"598px"},attrs:{placeholder:"Select"},on:{change:t.onSelectUrl},model:{value:t.selectedUrl,callback:function(e){t.selectedUrl=e},expression:"selectedUrl"}},t._l(t.apiList,function(t,e){return a("el-option",{key:e,attrs:{label:t.url,value:e}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"Method"}},[a("el-input",{attrs:{readonly:""},model:{value:t.method,callback:function(e){t.method=e},expression:"method"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"Description"}},[a("el-input",{attrs:{readonly:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1)],1)],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-top":"10px","margin-bottom":"5px"}},[a("el-col",{attrs:{align:"right"}},[a("el-button",{attrs:{type:"warning"}},[t._v("Set it in Use")])],1)],1),t._v(" "),a("heading",{attrs:{text:"API Analysis"}}),t._v(" "),a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.apiAnalysisLoading,expression:"apiAnalysisLoading"}],staticStyle:{height:"320px"},attrs:{type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:9}},[a("pie-chart",{attrs:{"pie-chart-data":t.pieChartData}})],1),t._v(" "),a("el-col",{attrs:{span:15}},[a("div",{staticStyle:{"margin-bottom":"10px"}},[t._v("Change scope to view different report.")]),t._v(" "),a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.apiSelectFormLoading,expression:"apiSelectFormLoading"}],attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"Scope"}},[a("el-select",{attrs:{placeholder:"All",clearable:"",filterable:""},on:{change:t.onSelectScope},model:{value:t.scope,callback:function(e){t.scope=e},expression:"scope"}},t._l(t.controllerList,function(t,e){return a("el-option",{key:e,attrs:{label:t.className,value:t.packageName+"."+t.className}})}),1)],1)],1),t._v(" "),a("div",{staticStyle:{"font-size":"24px"}},[t._v("Total of Scope")]),t._v(" "),a("div",{staticStyle:{"font-size":"128px"}},[t._v(t._s(t.scopeTotal))])],1)],1),t._v(" "),a("heading",{attrs:{text:"API Details"}}),t._v(" "),a("el-row",{staticStyle:{height:"450px",background:"#409EFF"}},[t._v("\n            API detail table here.\n          ")])],1)])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"Role Controls"}},[a("transition",{attrs:{name:"el-zoom-in-top"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showRoleControls,expression:"showRoleControls"}]},[t._v("\n          Role Controls\n        ")])])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"Authorization"}},[a("transition",{attrs:{name:"el-zoom-in-top"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showAuthorization,expression:"showAuthorization"}]},[t._v("\n          Authorization\n        ")])])],1)],1)],1)},i=[],l=(a("6762"),a("2fdb"),a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"heading-container"},[a("h1",{class:"heading-container-level"+t.level},[t._v(t._s(t.text))])])}),o=[],s=(a("c5f6"),{props:{text:{type:String,default:"Heading",required:!0},level:{type:Number,default:1,required:!1}},name:"Heading",data:function(){return{}}}),r=s,c=(a("9f22"),a("2877")),u=Object(c["a"])(r,l,o,!1,null,"034a1d74",null),d=u.exports,h=a("a4bb"),p=a.n(h),m=(a("ac6a"),a("15b8")),f=a.n(m),g=a("d225"),v=function t(e,a,n){Object(g["a"])(this,t),this.status=e,this.name=a,this.description=n,f()(this)},C={IDLED:new v(0,"Idled","Idled API (not stored in db)"),IN_USED:new v(1,"In use","API in used (stored in db)"),getArray:function(){var t=[];return p()(C).forEach(function(e){"function"!==typeof C[e]&&t.push(C[e])}),t}};f()(C);var b=C,w=a("b775"),A={getController:function(){return Object(w["a"])("/apiManagement/getController")},getApiByControllerClass:function(t){return Object(w["a"])("/apiManagement/getApiByControllerClass",t)},getApiAnalysis:function(t){return Object(w["a"])("/apiManagement/getApiAnalysis",t)}},S=A,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},x=[],_=a("313e"),L=a.n(_);a("817d");var I={props:{className:{type:String,default:"chart"},width:{type:String,default:"400px"},height:{type:String,default:"300px"},pieChartData:{required:!0,default:[{value:1,name:"Idled"},{value:1,name:"In use"}]}},watch:{pieChartData:{deep:!0,handler:function(t){console.log("val",t),this.setOption(t)}}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=L.a.init(this.$el,"macarons")},setOption:function(t){this.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:["In use","Idled"]},calculable:!0,series:[{name:"API Analysis",type:"pie",radius:[15,95],center:["50%","38%"],data:t,animationEasing:"cubicInOut",animationDuration:2600}]})}}},k=I,U=Object(c["a"])(k,y,x,!1,null,null,null),D=U.exports,N={name:"SecurityAndPermission",components:{Heading:d,PieChart:D},mounted:function(){this.getController(),this.getApiAnalysis()},data:function(){return{showPermissionControls:!0,showRoleControls:!1,showAuthorization:!1,controllerListLoading:!1,apiAnalysisLoading:!1,apiSelectFormLoading:!1,pieChartData:null,scope:null,scopeTotal:null,searchText:null,controllerList:null,selectedController:null,apiList:null,ApiStatus:b,apiStatus:b.IDLED.status,idledApiCount:null,inUseApiCount:null,selectedUrl:null,method:null,description:null}},methods:{onTabClick:function(t){switch(t.index){case"0":this.showPermissionControls=!0,this.showRoleControls=this.showAuthorization=!1;break;case"1":this.showRoleControls=!0,this.showPermissionControls=this.showAuthorization=!1;break;case"2":this.showAuthorization=!0,this.showRoleControls=this.showPermissionControls=!1;break}},getController:function(){var t=this;this.controllerListLoading=!0,S.getController().then(function(e){t.controllerList=e.data.controllerList}).catch(function(e){console.error(e),t.$message.error(e)}).finally(function(){t.controllerListLoading=!1})},getApiAnalysis:function(){var t=this;this.apiAnalysisLoading=!0;var e={classFullName:this.scope};S.getApiAnalysis(e).then(function(e){t.pieChartData=[],t.pieChartData.push({name:t.ApiStatus.IDLED.name,value:e.data.idledApiCount}),t.pieChartData.push({name:t.ApiStatus.IN_USED.name,value:e.data.inUseApiCount}),t.scopeTotal=e.data.totalApiCount}).catch(function(e){console.error(e),t.$message.error(e)}).finally(function(){t.apiAnalysisLoading=!1})},getFilteredControllerList:function(){var t=this;return null===this.controllerList?null:this.controllerList.filter(function(e){return!t.searchText||e.className.toLowerCase().includes(t.searchText.toLowerCase())})},onClickTableRow:function(t){this.selectedController=t,this.onSelectController()},onSelectController:function(){var t=this;if(null!==this.selectedController){this.clearSelectedUrl();var e={controllerClass:this.selectedController.packageName+"."+this.selectedController.className,apiStatus:this.apiStatus};this.apiSelectFormLoading=!0,S.getApiByControllerClass(e).then(function(e){t.apiList=e.data.apiList,t.idledApiCount=e.data.idledApiCount,t.inUseApiCount=e.data.inUseApiCount}).catch(function(e){console.error(e),t.$message.error(e)}).finally(function(){t.apiSelectFormLoading=!1})}},getIdledApiCount:function(){return null!==this.idledApiCount?"("+this.idledApiCount+")":null},getInUseApiCount:function(){return null!==this.inUseApiCount?"("+this.inUseApiCount+")":null},onChangeApiStatus:function(){this.clearSelectedUrl(),this.onSelectController()},onSelectUrl:function(){var t=this.apiList[this.selectedUrl];this.method=t.method,this.description=t.description},clearSelectedUrl:function(){this.idledApiCount=this.inUseApiCount=this.selectedUrl=this.method=this.description=null},onSelectScope:function(){this.getApiAnalysis()}}},P=N,T=(a("c02f"),Object(c["a"])(P,n,i,!1,null,"31493dd3",null));e["default"]=T.exports},"9f22":function(t,e,a){"use strict";var n=a("3ea4"),i=a.n(n);i.a},c02f:function(t,e,a){"use strict";var n=a("f996"),i=a.n(n);i.a},f996:function(t,e,a){}}]);
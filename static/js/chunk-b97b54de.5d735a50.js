(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b97b54de"],{"0c6d":function(t,e,a){"use strict";a("d3b7");var r=a("bc3a"),n=a.n(r),o=a("5c96"),s=a("4360"),l=a("7859"),c=a("a18c"),i=n.a.create({baseURL:"http://leju.bufan.cloud",timeout:5e3});i.interceptors.request.use((function(t){return Object(l["a"])()&&(t.headers["token"]=Object(l["a"])()),t}),(function(t){return console.log(t),Promise.reject(t)})),i.interceptors.response.use((function(t){var e=t.data;return 20002===e.code&&(Object(l["c"])(),Object(l["d"])(),c["a"].push("/login")),2e4!==e.code?(Object(o["Message"])({message:e.message||"Error",type:"error",duration:5e3}),50008!==e.code&&50012!==e.code&&50014!==e.code||o["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){s["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(e.message||"Error"))):e}),(function(t){return console.log("err"+t),Object(o["Message"])({message:t.message,type:"error",duration:5e3}),Promise.reject(t)})),e["a"]=i},"0ccb":function(t,e,a){var r=a("50c4"),n=a("1148"),o=a("1d80"),s=Math.ceil,l=function(t){return function(e,a,l){var c,i,u=String(o(e)),d=u.length,p=void 0===l?" ":String(l),b=r(a);return b<=d||""==p?u:(c=b-d,i=n.call(p,s(c/p.length)),i.length>c&&(i=i.slice(0,c)),t?u+i:i+u)}};t.exports={start:l(!1),end:l(!0)}},1148:function(t,e,a){"use strict";var r=a("a691"),n=a("1d80");t.exports="".repeat||function(t){var e=String(n(this)),a="",o=r(t);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(a+=e);return a}},"4d90":function(t,e,a){"use strict";var r=a("23e7"),n=a("0ccb").start,o=a("9a0c");r({target:"String",proto:!0,forced:o},{padStart:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"608a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("el-card",{staticClass:"m-30"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("条件查询")])]),a("el-form",{attrs:{size:"small","label-width":"80px",model:t.backSearList}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6,offset:0}},[a("el-form-item",{attrs:{label:"订单编号"}},[a("el-input",{attrs:{placeholder:"请输入订单编号"},model:{value:t.backSearList.orderSn,callback:function(e){t.$set(t.backSearList,"orderSn",e)},expression:"backSearList.orderSn"}})],1)],1),a("el-col",{attrs:{span:6,offset:0}},[a("el-form-item",{attrs:{label:"退单状态"}},[a("el-select",{attrs:{placeholder:"退单状态"},model:{value:t.backSearList.status,callback:function(e){t.$set(t.backSearList,"status",e)},expression:"backSearList.status"}},[a("el-option",{attrs:{label:"待处理",value:0}}),a("el-option",{attrs:{label:"退货中",value:1}}),a("el-option",{attrs:{label:"已完成",value:2}}),a("el-option",{attrs:{label:"已拒绝",value:3}})],1)],1)],1)],1),a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:6,offset:18}},[a("el-form-item",[a("el-button",{on:{click:t.clear}},[t._v("重置")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sear}},[t._v("搜索")])],1)],1)],1)],1)],1),a("el-card",{staticClass:"m-30"},[a("el-table",{attrs:{border:"",data:t.backOrderList}},[a("el-table-column",{attrs:{type:"index",label:"#"}}),a("el-table-column",{attrs:{align:"center",prop:"orderSn",width:"250",label:"订单编号"}}),a("el-table-column",{attrs:{align:"center",label:"退单状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.status?a("el-button",{attrs:{type:"danger",size:"small"}},[t._v("待处理")]):1==e.row.status?a("el-button",{attrs:{type:"warning",size:"small"}},[t._v("退货中")]):2==e.row.status?a("el-button",{attrs:{type:"primary",plain:"",size:"small"}},[t._v("已完成")]):3==e.row.status?a("el-button",{attrs:{type:"info",plain:"",size:"small"}},[t._v("已拒绝")]):t._e()]}}])}),a("el-table-column",{attrs:{align:"center",prop:"description",width:"200",label:"描述"}}),a("el-table-column",{attrs:{align:"center",width:"200",prop:"reason",label:"退单原因"}}),a("el-table-column",{attrs:{align:"center",prop:"productName",width:"150",label:"商品名称"}}),a("el-table-column",{attrs:{align:"center",width:"180",label:"商品属性"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formSpData")(e.row.productAttr))+" ")]}}])}),a("el-table-column",{attrs:{align:"center",prop:"productCount",label:"商家备注"}}),a("el-table-column",{attrs:{align:"center",prop:"createTime",width:"150",label:"添加时间"}}),a("el-table-column",{attrs:{width:"150",align:"center",fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-view"},on:{click:function(a){return t.goToBackDetail(e.row.id)}}},[t._v("查看订单")])]}}])})],1),a("el-pagination",{staticStyle:{"text-align":"left","margin-top":"20px"},attrs:{"current-page":t.start,"page-sizes":[10,20,30,40],"page-size":t.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},n=[],o=a("c7eb"),s=a("1da1"),l=a("ed08"),c=(a("99af"),a("0c6d"));function i(t,e,a){return Object(c["a"])({url:"/lejuAdmin/orderReturn/findReturnApply/".concat(t,"/").concat(e),method:"post",data:a})}var u={name:"Back",data:function(){return{start:1,limit:10,total:0,backOrderList:[],backSearList:{}}},created:function(){this.getBackOrder()},methods:{getBackOrder:function(){var t=this;return Object(s["a"])(Object(o["a"])().mark((function e(){var a,r,n,s,c;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=Object(l["a"])(t.backSearList),console.log("%c [ backOrderData ]-104","font-size:13px; background:pink; color:#bf2c9f;",a),e.next=4,i(t.start,t.limit,a);case 4:r=e.sent,console.log("%c [ res ]-25","font-size:13px; background:pink; color:#bf2c9f;",r),n=r.success,s=r.message,c=r.data,n?(t.total=c.total,t.backSearList={},t.backOrderList=c.rows):t.$message.error(s);case 8:case"end":return e.stop()}}),e)})))()},handleSizeChange:function(t){console.log("每页 ".concat(t," 条")),this.limit=t,this.getBackOrder()},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.start=t,this.getBackOrder()},sear:function(){this.start=1,this.limit=10,this.getBackOrder()},clear:function(){this.start=1,this.limit=10,this.backSearList={},this.getBackOrder()},goToBackDetail:function(t){this.$router.push({name:"BackDetail",params:{id:t}})}},filters:{formSpData:function(t){var e="";try{for(var a=JSON.parse(t),r=0;r<a.length;r++){var n=a[r];e+=n["key"]+":"+n["value"]+" "}return e=e.substring(0,e.length-1),e}catch(o){return t}}}},d=u,p=a("2877"),b=Object(p["a"])(d,r,n,!1,null,"4535708b",null);e["default"]=b.exports},"9a0c":function(t,e,a){var r=a("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},ed08:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("53ca"),a("ac1f"),a("00b4"),a("5319"),a("4d63"),a("2c3e"),a("25f0"),a("d3b7"),a("4d90"),a("159b");function r(t){var e={};for(var a in t)(t[a]||0==t[a])&&(e[a]=t[a]);return e}}}]);
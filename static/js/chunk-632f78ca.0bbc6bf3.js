(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-632f78ca"],{"0c6d":function(e,t,s){"use strict";s("d3b7");var r=s("bc3a"),a=s.n(r),n=s("5c96"),o=s("4360"),i=s("7859"),l=s("a18c"),c=a.a.create({baseURL:"http://leju.bufan.cloud",timeout:5e3});c.interceptors.request.use((function(e){return Object(i["a"])()&&(e.headers["token"]=Object(i["a"])()),e}),(function(e){return console.log(e),Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 20002===t.code&&(Object(i["c"])(),Object(i["d"])(),l["a"].push("/login")),2e4!==t.code?(Object(n["Message"])({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||n["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){o["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){return console.log("err"+e),Object(n["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=c},"62b5":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("el-card",{staticClass:"m-30",attrs:{shadow:"always"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.addRoles}},[e._v("新增角色")])],1),s("el-table",{attrs:{data:e.rolesList,border:"",stripe:""}},[s("el-table-column",{attrs:{align:"center",label:"#",type:"index"}}),s("el-table-column",{attrs:{prop:"roleName",align:"center",label:"角色名称"}}),s("el-table-column",{attrs:{prop:"roleCode",align:"center",label:"角色编码"}}),s("el-table-column",{attrs:{prop:"remark",align:"center",label:"备注"}}),s("el-table-column",{attrs:{prop:"createTime",align:"center",label:"添加时间"}}),s("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(s){return e.edit(t.row.id)}}}),s("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},on:{click:function(s){return e.del(t.row.id)}}})]}}])})],1),s("el-pagination",{staticStyle:{"text-align":"left","margin-top":"20px"},attrs:{"current-page":e.start,"page-sizes":[10,20,30,40],"page-size":e.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),s("el-dialog",{attrs:{title:"编辑角色",visible:e.isShow,width:"30%"},on:{"update:visible":function(t){e.isShow=t},close:e.close}},[s("el-form",{ref:"form",attrs:{model:e.addRolseList,"label-width":"80px",size:"normal"}},[s("el-form-item",{attrs:{label:"角色名称"}},[s("el-input",{attrs:{size:"mini"},model:{value:e.addRolseList.roleName,callback:function(t){e.$set(e.addRolseList,"roleName",t)},expression:"addRolseList.roleName"}})],1),s("el-form-item",{attrs:{label:"角色编码"}},[s("el-input",{attrs:{size:"mini"},model:{value:e.addRolseList.roleCode,callback:function(t){e.$set(e.addRolseList,"roleCode",t)},expression:"addRolseList.roleCode"}})],1),s("el-form-item",{attrs:{label:"角色描述"}},[s("el-input",{attrs:{size:"mini"},model:{value:e.addRolseList.remark,callback:function(t){e.$set(e.addRolseList,"remark",t)},expression:"addRolseList.remark"}})],1),s("el-form-item",{attrs:{label:"选择菜单"}},[s("el-checkbox",{attrs:{label:"展开/关闭"},on:{change:e.openAll}}),s("el-checkbox",{attrs:{label:"全选/取消全选"},on:{change:e.allSel}}),s("el-tree",{ref:"tree",attrs:{"show-checkbox":"",data:e.perAllList,props:e.defaultProps,"node-key":"id"},on:{check:e.selec}})],1)],1),s("span",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.isShow=!1}}},[e._v("取消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.addInter}},[e._v("确定")])],1)],1)],1)},a=[],n=s("c7eb"),o=s("1da1"),i=(s("99af"),s("0c6d"));function l(e){return Object(i["a"])({url:"/admin/sysAuth/role/removeRole/".concat(e),method:"DELETE"})}function c(e,t){return Object(i["a"])({url:"/admin/sysAuth/role/findRolesByPage/".concat(e,"/").concat(t)})}function d(e){return Object(i["a"])({url:"/admin/sysAuth/role/saveRolePermissions",method:"post",data:e})}function u(e){return Object(i["a"])({url:"/admin/sysAuth/role/findRolePermissions/".concat(e)})}function m(e){return Object(i["a"])({url:"/admin/sysAuth/role/updateRolePermissions",method:"PUT",data:e})}function p(){return Object(i["a"])({url:"/admin/sysAuth/permission/findAllPermissions"})}var h={name:"Role",data:function(){return{start:1,limit:10,total:0,rolesList:[],isShow:!1,addRolseList:{},perAllList:[],defaultProps:{children:"children",label:"title",value:"addRolseList.pid"},selectedArr:[]}},created:function(){this.getRolesList()},methods:{getRolesList:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var s,r,a,o,i;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:return s=t.sent,e.perAllList=s.data.menus,t.next=6,c(e.start,e.limit);case 6:r=t.sent,a=r.success,o=r.message,i=r.data,a?(e.rolesList=i.rows,e.total=i.total):e.$message.error(o);case 9:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){console.log("每页 ".concat(e," 条")),this.limit=e,this.getRolesList()},handleCurrentChange:function(e){console.log("当前页: ".concat(e)),this.start=e,this.getRolesList()},addRoles:function(){this.isShow=!0,this.addRolseList=this.$options.data().addRolseList},close:function(){this.isShow=!1},addInter:function(){var e=this;return Object(o["a"])(Object(n["a"])().mark((function t(){var s,r,a,o;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=null,s=e.addRolseList.id?m:d,t.next=4,s(e.addRolseList);case 4:r=t.sent,a=r.success,o=r.message,a?(e.$message.success("成功"),e.isShow=!1,e.addRolseList=e.$options.data().addRolseList,e.getRolesList()):e.$message.error(o);case 7:case"end":return t.stop()}}),t)})))()},edit:function(e){var t=this;return Object(o["a"])(Object(n["a"])().mark((function s(){var r,a,o,i;return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,u(e);case 2:r=s.sent,a=r.success,o=r.message,i=r.data,a?(t.isShow=!0,t.addRolseList=i.role,i.role.permissionIds,i.role.permissionIds?setTimeout((function(){try{t.$refs.tree.setCheckedKeys(i.role.permissionIds)}catch(e){console.log("%c [ error ]-216","font-size:13px; background:pink; color:#bf2c9f;",e)}}),2500):t.$message.error("权限回填出错")):t.$message.error(o);case 5:case"end":return s.stop()}}),s)})))()},del:function(e){var t=this;return Object(o["a"])(Object(n["a"])().mark((function s(){var r,a,o;return Object(n["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,l(e);case 2:r=s.sent,a=r.success,o=r.message,a?(t.$message.success("成功"),t.getRolesList()):(t.$message.error(o),t.getRolesList());case 5:case"end":return s.stop()}}),s)})))()},openAll:function(e){var t=this.$refs.tree.store.nodesMap;for(var s in t)t[s].expanded=e},allSel:function(e){var t=this.$refs.tree.store.nodesMap;for(var s in t)t[s].checked=e},selec:function(e){this.addRolseList.permissionIds=this.$refs.tree.getCheckedKeys(!0)}}},f=h,b=s("2877"),g=Object(b["a"])(f,r,a,!1,null,"81ab455e",null);t["default"]=g.exports}}]);
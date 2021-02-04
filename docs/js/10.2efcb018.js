(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{1:function(e,t){},10:function(e,t){},"165a":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[n("div",{staticClass:"row q-mb-lg"},[n("q-input",{staticClass:"col",attrs:{placeholder:"Create New Role"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createRole(t)}},model:{value:e.role,callback:function(t){e.role=t},expression:"role"}}),n("q-btn",{attrs:{color:"primary",size:"sm",label:"Create"},on:{click:e.createRole}})],1),n("div",{staticClass:"row"},[n("q-list",{staticClass:"col",attrs:{bordered:"",highlight:""}},[n("q-item-label",{attrs:{header:""}},[n("div",{staticClass:"row"},[e._v("\n          Roles\n          "),n("q-space"),n("q-icon",{attrs:{color:"primary",name:"refresh",side:""},on:{click:function(t){return e.fetchRoles()}}})],1)]),e._l(e.roles,(function(t,o){return n("q-item",{key:o},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{color:"primary",name:"security"}})],1),n("q-item-section",[e._v(e._s(t))]),n("q-item-section",{attrs:{side:"",clickable:""},on:{click:function(n){return e.deleteRole(t)}}},[n("q-icon",{attrs:{name:"delete",color:"red"}})],1)],1)}))],2)],1)])},s=[],r=(n("e6cf"),n("ddb0"),n("cf57"));n("bc3a");const i=n("1712").to,a=n("ff00"),l=n("547a").default;var c={name:"Roles",components:{},async created(){l.setSettings({TBURL:a["TB_URL"]}),l.setSettings(a);let[e,t]=await i(l.isLoggedIn());e?window.location.assign("#/"):[e,t]=await i(this.fetchRoles())},data(){return{role:"",roles:[]}},methods:{alert(e){alert(e)},async createRole(){return new Promise((async(e,t)=>{if(""===this.role)return this.$q.notify({type:"negative",message:"Role cannot be blank"}),t("role cannot be blank");this.working=!0,this.showCustom();let[n,o]=await i(l.createRole(this.role));this.working=!1,n?(this.$q.notify({type:"negative",message:n.msg||n}),e(!1)):(console.log(o),this.roles=o.roles,this.role="")}))},async fetchRoles(){return new Promise((async(e,t)=>{this.working=!0,this.showCustom();let[n,o]=await i(l.fetchRoles());this.working=!1,n?(this.$q.notify({type:"negative",message:n}),e(!1)):(this.roles=o.roles,e(o.roles))}))},async deleteRole(e){return new Promise((async(t,n)=>{let[o,s]=await i(this.confirm(`Are you sure you want to delete ${e}`,"Delete Role"));return o?t(!1):(this.working=!0,this.showCustom(),[o,s]=await i(l.deleteRole(e)),this.working=!1,o?(console.log(o),this.$q.notify({type:"negative",message:o.msg||o}),t(!1)):(this.roles=s.roles,void t(s.roles)))}))},async confirm(e,t="Confirm"){return new Promise(((n,o)=>{this.$q.dialog({title:t,message:e,cancel:!0,persistent:!0}).onOk((()=>n(!0))).onOk((()=>n(!0))).onCancel((()=>o(!0))).onDismiss((()=>o(!0)))}))},showCustom(e=""){const t=this.$q.dialog({title:e,message:"",progress:{spinner:r["a"],color:"primary"},persistent:!0,ok:!1}),n=setInterval((()=>{!1===this.working&&(clearInterval(n),t.hide())}),500)}}},u=c,f=n("2877"),g=n("9989"),d=n("27f9"),m=n("9c40"),h=n("1c1c"),y=n("0170"),w=n("2c91"),p=n("0016"),k=n("66e5"),T=n("4074"),P=n("eebe"),v=n.n(P),R=Object(f["a"])(u,o,s,!1,null,null,null);t["default"]=R.exports;v()(R,"components",{QPage:g["a"],QInput:d["a"],QBtn:m["a"],QList:h["a"],QItemLabel:y["a"],QSpace:w["a"],QIcon:p["a"],QItem:k["a"],QItemSection:T["a"]})},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"547a":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("ddb0");var o=n("9523"),s=n.n(o);const r=n("1712").to,i=n("bc3a"),a=n("1232").default,l=n("4556"),c=n("e350").default;console.log(c);class u extends c{constructor(){var e;super(),e=this,s()(this,"settings",{}),s()(this,"setSettings",(e=>{for(let t in e){let n=e[t];this.settings[t]=n}})),s()(this,"setToken",(e=>{let t=e.token,n=e.refreshToken;window.localStorage.setItem("tbTokenGSAC",t),window.localStorage.setItem("tbRefreshTokenGSAC",n)})),s()(this,"logout",(()=>{window.localStorage.removeItem("tbTokenGSAC"),window.localStorage.removeItem("tbRefreshTokenGSAC"),this.jwt_token=null})),s()(this,"login",(async function(t){return new Promise((async function(n,o){let s=`${e.settings.TBURL}/auth/login`,[a,l]=await r(i.post(s,t));return a?o(a):n(l.data)}))})),s()(this,"getToken",(async function(t,n){return new Promise((async function(t,o){let s=`${e.settings.TBURL}/auth/token`,[a,l]=await r(i.post(s,{refreshToken:n},{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+n}}));return a?o(a):t(l.data)}))})),s()(this,"isLoggedIn",(async function(){return new Promise((async function(t,n){let o=localStorage.getItem("tbTokenGSAC");if(!o)return n("missing token");let s=a(o);console.log(s),e.userId=s.userId,e.jwt_token=o;let i=s.exp;if(!i)return n("missing token expiry");let l=localStorage.getItem("tbRefreshTokenGSAC");i=parseInt(i),(new Date).getTime();{let[t,s]=await r(e.getToken(o,l));if(t)return n("could not find token");e.setToken(s),o=s.token}return t(o)}))})),s()(this,"fetchRoles",(async function(){return new Promise((async function(t,n){let[o,s]=await r(e.sendSaveTeletry({type:"roles",action:"get"}));if(o)return n(o);t(s)}))})),s()(this,"fetchProjects",(async function(){return new Promise((async function(t,n){let[o,s]=await r(e.sendSaveTeletry({type:"projects",action:"get"}));if(o)return n(o);t(s)}))})),s()(this,"whoAmI",(async function(){return new Promise((async function(t,n){let[o,s]=await r(e.readUserData());if(console.log("WHOAMI"),o)return n(o);t(s)}))})),s()(this,"fetchUsers",(async function(){return new Promise((async function(t,n){let[o,s]=await r(e.whoAmI());if(o)return n(o);let a,l=s.authority;if("TENANT_ADMIN"===l){let t=`${e.settings.TBURL}/tenant/customers?customerTitle=GS Publications`;if([o,s]=await r(i.get(t,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+e.jwt_token}})),o)return n(o);a=s.data.id.id}else console.log("i am a customer...."),console.log(s),a=s.customerId.id;if(console.log("CUSTOMER ID",a),[o,s]=await r(e.sendSaveTeletry({type:"users",action:"get",customerId:a})),o)return n(o.msg||o);t(s)}))})),s()(this,"createRole",(async function(t){return new Promise((async function(n,o){let[s,i]=await r(e.sendSaveTeletry({type:"roles",action:"create",role:t}));if(s)return o(s);n(i)}))})),s()(this,"createUser",(async function(t,n){let{user:o,firstName:s,lastName:i,password:a}=t;return console.log("PPPPPPPPPPPPPPPPPPPPp"),new Promise((async function(t,l){console.log("step1...");let[c,u]=await r(e.sendSaveTeletry({type:"users",action:"create",user:o,firstName:s,lastName:i,password:a},n));if(c)return console.log("REJECTED========"),console.log(c),l(c);if(n){if(console.log("NEVER WAITING"),[c,u]=await r(e.checkSuccessfulCreateUser(o,a)),c)return l(c);t(u)}else{console.log("result from creating user");let n=JSON.parse(JSON.stringify(u));if(console.log(u),0===Object.keys(u).length){if([c,u]=await r(e.login({username:o,password:a})),c)return l("Registration failed. Please try submitting the form again");t({})}else t(n)}}))})),s()(this,"checkSuccessfulCreateUser",(async function(t,n){return new Promise((async function(o,s){let i=(new Date).getTime();console.log("starting for sure...");const a=async function(){console.log("here.....");let c=l({length:20,type:"url-safe"});return e.once(c,a),new Promise((async function(l,u){let[f,g]=await r(e.login({username:t,password:n}));if(f){console.log(f.data);let n=(new Date).getTime(),o=n-i;o<=1e4?e.emit(c):(e.removeListener(c,a),s(`Error creating account. Probably ${t} already exists`),u("Timed out"))}if(void 0!==g)return console.log(g),e.removeListener(c,a),l(g.data),o(g.data);{let t=(new Date).getTime(),n=t-i;n<=1e4?e.emit(c):(e.removeListener(c,a),s("Error creating account. Probably ${user} already exists"),u("Timed out"))}}))};await r(a())}))})),s()(this,"deleteUser",(async function(t){return new Promise((async function(n,o){console.log("STARGINT TO DELETE");let[s,i]=await r(e.sendSaveTeletry({type:"users",action:"delete",user:t}));if(s)return console.log("REJECTED========"),console.log(s),o(s);let a=JSON.parse(JSON.stringify(i));console.log(i),n(a)}))})),s()(this,"getActivationLink",(async function(t,n){return new Promise((async function(o,s){let a=`${e.settings.TBURL}/user/${t}/activationLink`,[l,c]=await r(i.get(`${e.settings.JSONPROXY}?path=${a}`,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+n}}));if(l)return s(l);o(c.data)}))})),s()(this,"createProject",(async function(t){return new Promise((async function(n,o){let[s,i]=await r(e.sendSaveTeletry({type:"projects",action:"create",project:t}));if(console.log("adhkjashdkhasdk"),s)return o(s);console.log("RETURNED..."),console.log(i),n(i)}))})),s()(this,"deleteRole",(async function(t){return new Promise((async function(n,o){let[s,i]=await r(e.sendSaveTeletry({type:"roles",action:"delete",role:t}));if(s)return o(s);n(i)}))})),s()(this,"deleteProject",(async function(t){return new Promise((async function(n,o){let[s,i]=await r(e.sendSaveTeletry({type:"projects",action:"delete",project:t}));if(s)return o(s);n(i)}))})),s()(this,"readUserData",(async function(){return new Promise((async function(t,n){let o=`${e.settings.TBURL}/auth/user`,[s,a]=await r(i.get(o,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+e.jwt_token}}));return s?n(s):t(a.data)}))})),s()(this,"sendSaveTeletry",(async function(t,n=!1){return t.userId||(t.userId=e.userId),t.jwt_token||e.jwt_token&&(t.jwt_token=e.jwt_token),t.rqId||(t.rqId=l({length:20,type:"url-safe"})),console.log("step2"),console.log({data:t}),new Promise((async function(o,s){let a=e.settings.PUBLIC_DEVICE_ACCESS_TOKEN;console.log(e.settings);let c=e.settings.CORS_PROXY,u=`${e.settings.TBURL}/v1/${a}/telemetry`;console.log(t);let[f,g]=await r(i.post(c+u,t,{headers:{"Content-Type":"application/json"}}));if(console.log("ERRED......"),console.log(f),console.log(g),f)return s(f);if(n)return console.log("NO WAITING.."),o(!0);let d=t.rqId,m=(new Date).getTime();const h=async function(){return new Promise((async function(t,n){let[i,a]=await r(e.readUserData()),c=l({length:20,type:"url-safe"});if(e.once(c,h),i)console.log(i.status),console.log(i.response.data.status),console.log(i.data),console.log(i),e.removeListener(c,h),401===i.response.data.status?(console.log("---------160"),t({}),o({})):(console.log("---------1601"),n(i),s(i));else if(void 0===a.additionalInfo)s("Unknown error occured"),n("Unknown error occured");else{let r=a.additionalInfo.responses;if(r&&r[d]){console.log("---------167");let i=r[d];return console.log(i),i.msg.error?(e.removeListener(c,h),n(i.msg.error),s(i.msg.error)):(console.log("returned...."),console.log(i.msg),o(i.msg),t(!0),console.log("after resolve....."),e.removeListener(c,h),o(i.msg))}{let t=(new Date).getTime(),o=t-m;o<=12e4?(console.log(o,d),e.emit(c)):(e.removeListener(c,h),s("timed out"),n("timed out"))}}}))};await r(h())}))}))}}const f=new u;t["default"]=f},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},e350:function(e,t,n){"use strict";n.r(t);n("c975"),n("a434");class o{constructor(){this.events={}}on(e,t){return"object"!==typeof this.events[e]&&(this.events[e]=[]),this.events[e].push(t),()=>this.removeListener(e,t)}removeListener(e,t){if("object"===typeof this.events[e]){const n=this.events[e].indexOf(t);n>-1&&this.events[e].splice(n,1)}}emit(e,...t){"object"===typeof this.events[e]&&this.events[e].forEach((e=>e.apply(this,t)))}once(e,t){const n=this.on(e,((...e)=>{n(),t.apply(this,e)}))}}t["default"]=o},ff00:function(e){e.exports=JSON.parse('{"TB_URL":"https://demo.thingsboard.io/api","PUBLIC_DEVICE_ACCESS_TOKEN":"9sE9Z86OdYsynyCJKjnq","CORS_PROXY":"http://cseco.co.ke:8080/","JSONPROXY":"https://jsonproxy.cseco.co.ke"}')}}]);
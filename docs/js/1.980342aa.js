(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{1:function(e,t){},10:function(e,t){},2:function(e,t){},2710:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"hHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",{attrs:{color:"red"}},[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[e._v(" GS Publications ")]),n("div",[e._v("Access Control")])],1)],1),n("q-drawer",{attrs:{overlay:"",bordered:"",breakpoint:500,persist:"","content-class":"bg-primary text-white"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",[n("q-expansion-item",{attrs:{group:"somegroup",icon:"people",label:"Users",clickable:"",tag:"a",href:"#/users"}},[n("q-card",{staticClass:"bg-primary"},[n("q-card-section",[n("q-list",[n("q-item",{attrs:{tag:"a",href:"#/users"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"security"}})],1),n("q-item-section",[n("q-item-label",[e._v(" Users")])],1)],1)],1)],1)],1)],1),n("q-separator"),n("q-expansion-item",{attrs:{group:"somegroup",icon:"group_work",label:"Projects",clickable:"",tag:"a",href:"#/projects"}},[n("q-card",{staticClass:"bg-primary"},[n("q-card-section",[n("q-list",[n("q-item",{attrs:{tag:"a",href:"#/projects"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"group_work"}})],1),n("q-item-section",[n("q-item-label",[e._v(" Projects")])],1)],1)],1)],1)],1)],1),n("q-separator"),n("q-expansion-item",{attrs:{group:"somegroup",icon:"security",label:"Roles",clickable:"",tag:"a",href:"#/roles"}},[n("q-card",{staticClass:"bg-primary"},[n("q-card-section",[n("q-list",[n("q-item",{attrs:{tag:"a",href:"#/roles"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"security"}})],1),n("q-item-section",[n("q-item-label",[e._v(" Roles")])],1)],1)],1)],1)],1)],1),n("q-separator"),n("q-item",{attrs:{tag:"a",href:"#/notifications"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"notifications_none"}})],1),n("q-item-section",[n("q-item-label",[e._v("Notifications")])],1)],1),n("q-item",{attrs:{tag:"a",href:"#/profile"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"person"}})],1),n("q-item-section",[n("q-item-label",[e._v("Profile")])],1)],1),n("q-item",{attrs:{tag:"a",href:"#/auditLogs"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"history"}})],1),n("q-item-section",[n("q-item-label",[e._v(" Audit Logs")])],1)],1),n("q-item",{attrs:{clickable:""},on:{click:e.logout}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"logout"}})],1),n("q-item-section",[n("q-item-label",[e._v(" Log out")])],1)],1),n("q-item",{attrs:{clickable:"",tag:"a",href:"#/help"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"help"}})],1),n("q-item-section",[n("q-item-label",[e._v(" Help")])],1)],1)],1)],1),n("q-page-container",[n("router-view")],1)],1)},a=[],s=(n("e6cf"),n("ddb0"),n("37c0"));n("cf57");const r=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],i=(n("bc3a"),n("1712").to),c=n("ff00"),l=n("547a").default;var u={name:"MainLayout",components:{EssentialLink:s["a"]},data(){return{leftDrawerOpen:!1,essentialLinks:r}},async created(){l.setSettings({TBURL:c["TB_URL"]});let[e,t]=await i(l.isLoggedIn());e&&window.location.assign("#/")},methods:{logout(){l.logout(),window.location.assign("#/")}}},f=u,m=n("2877"),g=n("4d5a"),p=n("e359"),d=n("65c6"),h=n("9c40"),w=n("6ac5"),y=n("9404"),q=n("1c1c"),v=n("3b73"),b=n("f09f"),k=n("a370"),T=n("66e5"),P=n("4074"),S=n("0016"),_=n("0170"),I=n("eb85"),C=n("09e3"),L=n("eebe"),j=n.n(L),E=Object(m["a"])(f,o,a,!1,null,null,null);t["default"]=E.exports;j()(E,"components",{QLayout:g["a"],QHeader:p["a"],QToolbar:d["a"],QBtn:h["a"],QToolbarTitle:w["a"],QDrawer:y["a"],QList:q["a"],QExpansionItem:v["a"],QCard:b["a"],QCardSection:k["a"],QItem:T["a"],QItemSection:P["a"],QIcon:S["a"],QItemLabel:_["a"],QSeparator:I["a"],QPageContainer:C["a"]})},3:function(e,t){},"37c0":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:e.link}},[e.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1):e._e(),n("q-item-section",[n("q-item-label",[e._v(e._s(e.title))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},a=[],s={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},r=s,i=n("2877"),c=n("66e5"),l=n("4074"),u=n("0016"),f=n("0170"),m=n("eebe"),g=n.n(m),p=Object(i["a"])(r,o,a,!1,null,null,null);t["a"]=p.exports;g()(p,"components",{QItem:c["a"],QItemSection:l["a"],QIcon:u["a"],QItemLabel:f["a"]})},4:function(e,t){},5:function(e,t){},"547a":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("ddb0");var o=n("9523"),a=n.n(o);const s=n("1712").to,r=n("bc3a"),i=n("1232").default,c=n("4556"),l=n("e350").default;console.log(l);class u extends l{constructor(){var e;super(),e=this,a()(this,"settings",{}),a()(this,"setSettings",(e=>{for(let t in e){let n=e[t];this.settings[t]=n}})),a()(this,"setToken",(e=>{let t=e.token,n=e.refreshToken;window.localStorage.setItem("tbTokenGSAC",t),window.localStorage.setItem("tbRefreshTokenGSAC",n)})),a()(this,"logout",(()=>{window.localStorage.removeItem("tbTokenGSAC"),window.localStorage.removeItem("tbRefreshTokenGSAC"),this.jwt_token=null})),a()(this,"login",(async function(t){return new Promise((async function(n,o){let a=`${e.settings.TBURL}/auth/login`,[i,c]=await s(r.post(a,t));return i?o(i):n(c.data)}))})),a()(this,"getToken",(async function(t,n){return new Promise((async function(t,o){let a=`${e.settings.TBURL}/auth/token`,[i,c]=await s(r.post(a,{refreshToken:n},{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+n}}));return i?o(i):t(c.data)}))})),a()(this,"isLoggedIn",(async function(){return new Promise((async function(t,n){let o=localStorage.getItem("tbTokenGSAC");if(!o)return n("missing token");let a=i(o);console.log(a),e.userId=a.userId,e.jwt_token=o;let r=a.exp;if(!r)return n("missing token expiry");let c=localStorage.getItem("tbRefreshTokenGSAC");r=parseInt(r),(new Date).getTime();{let[t,a]=await s(e.getToken(o,c));if(t)return n("could not find token");e.setToken(a),o=a.token}return t(o)}))})),a()(this,"fetchRoles",(async function(){return new Promise((async function(t,n){let[o,a]=await s(e.sendSaveTeletry({type:"roles",action:"get"}));if(o)return n(o);t(a)}))})),a()(this,"fetchProjects",(async function(){return new Promise((async function(t,n){let[o,a]=await s(e.sendSaveTeletry({type:"projects",action:"get"}));if(o)return n(o);t(a)}))})),a()(this,"whoAmI",(async function(){return new Promise((async function(t,n){let[o,a]=await s(e.readUserData());if(console.log("WHOAMI"),o)return n(o);t(a)}))})),a()(this,"fetchUsers",(async function(){return new Promise((async function(t,n){let[o,a]=await s(e.whoAmI());if(o)return n(o);let i,c=a.authority;if("TENANT_ADMIN"===c){let t=`${e.settings.TBURL}/tenant/customers?customerTitle=GS Publications`;if([o,a]=await s(r.get(t,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+e.jwt_token}})),o)return n(o);i=a.data.id.id}else console.log("i am a customer...."),console.log(a),i=a.customerId.id;if(console.log("CUSTOMER ID",i),[o,a]=await s(e.sendSaveTeletry({type:"users",action:"get",customerId:i})),o)return n(o.msg||o);t(a)}))})),a()(this,"createRole",(async function(t){return new Promise((async function(n,o){let[a,r]=await s(e.sendSaveTeletry({type:"roles",action:"create",role:t}));if(a)return o(a);n(r)}))})),a()(this,"createUser",(async function(t,n){let{user:o,firstName:a,lastName:r,password:i}=t;return console.log("PPPPPPPPPPPPPPPPPPPPp"),new Promise((async function(t,c){console.log("step1...");let[l,u]=await s(e.sendSaveTeletry({type:"users",action:"create",user:o,firstName:a,lastName:r,password:i},n));if(l)return console.log("REJECTED========"),console.log(l),c(l);if(n){if(console.log("NEVER WAITING"),[l,u]=await s(e.checkSuccessfulCreateUser(o,i)),l)return c(l);t(u)}else{console.log("result from creating user");let n=JSON.parse(JSON.stringify(u));if(console.log(u),0===Object.keys(u).length){if([l,u]=await s(e.login({username:o,password:i})),l)return c("Registration failed. Please try submitting the form again");t({})}else t(n)}}))})),a()(this,"checkSuccessfulCreateUser",(async function(t,n){return new Promise((async function(o,a){let r=(new Date).getTime();console.log("starting for sure...");const i=async function(){console.log("here.....");let l=c({length:20,type:"url-safe"});return e.once(l,i),new Promise((async function(c,u){let[f,m]=await s(e.login({username:t,password:n}));if(f){console.log(f.data);let n=(new Date).getTime(),o=n-r;o<=1e4?e.emit(l):(e.removeListener(l,i),a(`Error creating account. Probably ${t} already exists`),u("Timed out"))}if(void 0!==m)return console.log(m),e.removeListener(l,i),c(m.data),o(m.data);{let t=(new Date).getTime(),n=t-r;n<=1e4?e.emit(l):(e.removeListener(l,i),a("Error creating account. Probably ${user} already exists"),u("Timed out"))}}))};await s(i())}))})),a()(this,"deleteUser",(async function(t){return new Promise((async function(n,o){console.log("STARGINT TO DELETE");let[a,r]=await s(e.sendSaveTeletry({type:"users",action:"delete",user:t}));if(a)return console.log("REJECTED========"),console.log(a),o(a);let i=JSON.parse(JSON.stringify(r));console.log(r),n(i)}))})),a()(this,"getActivationLink",(async function(t,n){return new Promise((async function(o,a){let i=`${e.settings.TBURL}/user/${t}/activationLink`,[c,l]=await s(r.get(`${e.settings.JSONPROXY}?path=${i}`,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+n}}));if(c)return a(c);o(l.data)}))})),a()(this,"createProject",(async function(t){return new Promise((async function(n,o){let[a,r]=await s(e.sendSaveTeletry({type:"projects",action:"create",project:t}));if(console.log("adhkjashdkhasdk"),a)return o(a);console.log("RETURNED..."),console.log(r),n(r)}))})),a()(this,"deleteRole",(async function(t){return new Promise((async function(n,o){let[a,r]=await s(e.sendSaveTeletry({type:"roles",action:"delete",role:t}));if(a)return o(a);n(r)}))})),a()(this,"deleteProject",(async function(t){return new Promise((async function(n,o){let[a,r]=await s(e.sendSaveTeletry({type:"projects",action:"delete",project:t}));if(a)return o(a);n(r)}))})),a()(this,"readUserData",(async function(){return new Promise((async function(t,n){let o=`${e.settings.TBURL}/auth/user`,[a,i]=await s(r.get(o,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+e.jwt_token}}));return a?n(a):t(i.data)}))})),a()(this,"sendSaveTeletry",(async function(t,n=!1){return t.userId||(t.userId=e.userId),t.jwt_token||e.jwt_token&&(t.jwt_token=e.jwt_token),t.rqId||(t.rqId=c({length:20,type:"url-safe"})),console.log("step2"),console.log({data:t}),new Promise((async function(o,a){let i=e.settings.PUBLIC_DEVICE_ACCESS_TOKEN;console.log(e.settings);let l=e.settings.CORS_PROXY,u=`${e.settings.TBURL}/v1/${i}/telemetry`;console.log(t);let[f,m]=await s(r.post(l+u,t,{headers:{"Content-Type":"application/json"}}));if(console.log("ERRED......"),console.log(f),console.log(m),f)return a(f);if(n)return console.log("NO WAITING.."),o(!0);let g=t.rqId,p=(new Date).getTime();const d=async function(){return new Promise((async function(t,n){let[r,i]=await s(e.readUserData()),l=c({length:20,type:"url-safe"});if(e.once(l,d),r)console.log(r.status),console.log(r.response.data.status),console.log(r.data),console.log(r),e.removeListener(l,d),401===r.response.data.status?(console.log("---------160"),t({}),o({})):(console.log("---------1601"),n(r),a(r));else if(void 0===i.additionalInfo)a("Unknown error occured"),n("Unknown error occured");else{let s=i.additionalInfo.responses;if(s&&s[g]){console.log("---------167");let r=s[g];return console.log(r),r.msg.error?(e.removeListener(l,d),n(r.msg.error),a(r.msg.error)):(console.log("returned...."),console.log(r.msg),o(r.msg),t(!0),console.log("after resolve....."),e.removeListener(l,d),o(r.msg))}{let t=(new Date).getTime(),o=t-p;o<=12e4?(console.log(o,g),e.emit(l)):(e.removeListener(l,d),a("timed out"),n("timed out"))}}}))};await s(d())}))}))}}const f=new u;t["default"]=f},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},e350:function(e,t,n){"use strict";n.r(t);n("c975"),n("a434");class o{constructor(){this.events={}}on(e,t){return"object"!==typeof this.events[e]&&(this.events[e]=[]),this.events[e].push(t),()=>this.removeListener(e,t)}removeListener(e,t){if("object"===typeof this.events[e]){const n=this.events[e].indexOf(t);n>-1&&this.events[e].splice(n,1)}}emit(e,...t){"object"===typeof this.events[e]&&this.events[e].forEach((e=>e.apply(this,t)))}once(e,t){const n=this.on(e,((...e)=>{n(),t.apply(this,e)}))}}t["default"]=o},ff00:function(e){e.exports=JSON.parse('{"TB_URL":"https://demo.thingsboard.io/api","PUBLIC_DEVICE_ACCESS_TOKEN":"9sE9Z86OdYsynyCJKjnq","CORS_PROXY":"http://cseco.co.ke:8080/","JSONPROXY":"https://jsonproxy.cseco.co.ke"}')}}]);
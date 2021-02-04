(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{1:function(e,t){},10:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"547a":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("ddb0");var o=n("9523"),s=n.n(o);const r=n("1712").to,i=n("bc3a"),a=n("1232").default,c=n("4556"),l=n("e350").default;console.log(l);class u extends l{constructor(){var e;super(),e=this,s()(this,"settings",{}),s()(this,"setSettings",(e=>{for(let t in e){let n=e[t];this.settings[t]=n}})),s()(this,"setToken",(e=>{let t=e.token,n=e.refreshToken;window.localStorage.setItem("tbTokenGSAC",t),window.localStorage.setItem("tbRefreshTokenGSAC",n)})),s()(this,"logout",(()=>{window.localStorage.removeItem("tbTokenGSAC"),window.localStorage.removeItem("tbRefreshTokenGSAC"),this.jwt_token=null})),s()(this,"login",(async function(t){return new Promise((async function(n,o){let s=`${e.settings.TBURL}/auth/login`,[a,c]=await r(i.post(s,t));return a?o(a):n(c.data)}))})),s()(this,"getToken",(async function(t,n){return new Promise((async function(t,o){let s=`${e.settings.TBURL}/auth/token`,[a,c]=await r(i.post(s,{refreshToken:n},{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+n}}));return a?o(a):t(c.data)}))})),s()(this,"isLoggedIn",(async function(){return new Promise((async function(t,n){let o=localStorage.getItem("tbTokenGSAC");if(!o)return n("missing token");let s=a(o);console.log(s),e.userId=s.userId,e.jwt_token=o;let i=s.exp;if(!i)return n("missing token expiry");let c=localStorage.getItem("tbRefreshTokenGSAC");i=parseInt(i),(new Date).getTime();{let[t,s]=await r(e.getToken(o,c));if(t)return n("could not find token");e.setToken(s),o=s.token}return t(o)}))})),s()(this,"fetchRoles",(async function(){return new Promise((async function(t,n){let[o,s]=await r(e.sendSaveTeletry({type:"roles",action:"get"}));if(o)return n(o);t(s)}))})),s()(this,"fetchProjects",(async function(){return new Promise((async function(t,n){let[o,s]=await r(e.sendSaveTeletry({type:"projects",action:"get"}));if(o)return n(o);t(s)}))})),s()(this,"whoAmI",(async function(){return new Promise((async function(t,n){let[o,s]=await r(e.readUserData());if(console.log("WHOAMI"),o)return n(o);t(s)}))})),s()(this,"fetchUsers",(async function(){return new Promise((async function(t,n){let[o,s]=await r(e.whoAmI());if(o)return n(o);let a,c=s.authority;if("TENANT_ADMIN"===c){let t=`${e.settings.TBURL}/tenant/customers?customerTitle=GS Publications`;if([o,s]=await r(i.get(t,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+e.jwt_token}})),o)return n(o);a=s.data.id.id}else console.log("i am a customer...."),console.log(s),a=s.customerId.id;if(console.log("CUSTOMER ID",a),[o,s]=await r(e.sendSaveTeletry({type:"users",action:"get",customerId:a})),o)return n(o.msg||o);t(s)}))})),s()(this,"createRole",(async function(t){return new Promise((async function(n,o){let[s,i]=await r(e.sendSaveTeletry({type:"roles",action:"create",role:t}));if(s)return o(s);n(i)}))})),s()(this,"createUser",(async function(t,n){let{user:o,firstName:s,lastName:i,password:a}=t;return console.log("PPPPPPPPPPPPPPPPPPPPp"),new Promise((async function(t,c){console.log("step1...");let[l,u]=await r(e.sendSaveTeletry({type:"users",action:"create",user:o,firstName:s,lastName:i,password:a},n));if(l)return console.log("REJECTED========"),console.log(l),c(l);if(n){if(console.log("NEVER WAITING"),[l,u]=await r(e.checkSuccessfulCreateUser(o,a)),l)return c(l);t(u)}else{console.log("result from creating user");let n=JSON.parse(JSON.stringify(u));if(console.log(u),0===Object.keys(u).length){if([l,u]=await r(e.login({username:o,password:a})),l)return c("Registration failed. Please try submitting the form again");t({})}else t(n)}}))})),s()(this,"checkSuccessfulCreateUser",(async function(t,n){return new Promise((async function(o,s){let i=(new Date).getTime();console.log("starting for sure...");const a=async function(){console.log("here.....");let l=c({length:20,type:"url-safe"});return e.once(l,a),new Promise((async function(c,u){let[f,g]=await r(e.login({username:t,password:n}));if(f){console.log(f.data);let n=(new Date).getTime(),o=n-i;o<=1e4?e.emit(l):(e.removeListener(l,a),s(`Error creating account. Probably ${t} already exists`),u("Timed out"))}if(void 0!==g)return console.log(g),e.removeListener(l,a),c(g.data),o(g.data);{let t=(new Date).getTime(),n=t-i;n<=1e4?e.emit(l):(e.removeListener(l,a),s("Error creating account. Probably ${user} already exists"),u("Timed out"))}}))};await r(a())}))})),s()(this,"deleteUser",(async function(t){return new Promise((async function(n,o){console.log("STARGINT TO DELETE");let[s,i]=await r(e.sendSaveTeletry({type:"users",action:"delete",user:t}));if(s)return console.log("REJECTED========"),console.log(s),o(s);let a=JSON.parse(JSON.stringify(i));console.log(i),n(a)}))})),s()(this,"getActivationLink",(async function(t,n){return new Promise((async function(o,s){let a=`${e.settings.TBURL}/user/${t}/activationLink`,[c,l]=await r(i.get(`${e.settings.JSONPROXY}?path=${a}`,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+n}}));if(c)return s(c);o(l.data)}))})),s()(this,"createProject",(async function(t){return new Promise((async function(n,o){let[s,i]=await r(e.sendSaveTeletry({type:"projects",action:"create",project:t}));if(console.log("adhkjashdkhasdk"),s)return o(s);console.log("RETURNED..."),console.log(i),n(i)}))})),s()(this,"deleteRole",(async function(t){return new Promise((async function(n,o){let[s,i]=await r(e.sendSaveTeletry({type:"roles",action:"delete",role:t}));if(s)return o(s);n(i)}))})),s()(this,"deleteProject",(async function(t){return new Promise((async function(n,o){let[s,i]=await r(e.sendSaveTeletry({type:"projects",action:"delete",project:t}));if(s)return o(s);n(i)}))})),s()(this,"readUserData",(async function(){return new Promise((async function(t,n){let o=`${e.settings.TBURL}/auth/user`,[s,a]=await r(i.get(o,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+e.jwt_token}}));return s?n(s):t(a.data)}))})),s()(this,"sendSaveTeletry",(async function(t,n=!1){return t.userId||(t.userId=e.userId),t.jwt_token||e.jwt_token&&(t.jwt_token=e.jwt_token),t.rqId||(t.rqId=c({length:20,type:"url-safe"})),console.log("step2"),console.log({data:t}),new Promise((async function(o,s){let a=e.settings.PUBLIC_DEVICE_ACCESS_TOKEN;console.log(e.settings);let l=e.settings.CORS_PROXY,u=`${e.settings.TBURL}/v1/${a}/telemetry`;console.log(t);let[f,g]=await r(i.post(l+u,t,{headers:{"Content-Type":"application/json"}}));if(console.log("ERRED......"),console.log(f),console.log(g),f)return s(f);if(n)return console.log("NO WAITING.."),o(!0);let d=t.rqId,y=(new Date).getTime();const m=async function(){return new Promise((async function(t,n){let[i,a]=await r(e.readUserData()),l=c({length:20,type:"url-safe"});if(e.once(l,m),i)console.log(i.status),console.log(i.response.data.status),console.log(i.data),console.log(i),e.removeListener(l,m),401===i.response.data.status?(console.log("---------160"),t({}),o({})):(console.log("---------1601"),n(i),s(i));else if(void 0===a.additionalInfo)s("Unknown error occured"),n("Unknown error occured");else{let r=a.additionalInfo.responses;if(r&&r[d]){console.log("---------167");let i=r[d];return console.log(i),i.msg.error?(e.removeListener(l,m),n(i.msg.error),s(i.msg.error)):(console.log("returned...."),console.log(i.msg),o(i.msg),t(!0),console.log("after resolve....."),e.removeListener(l,m),o(i.msg))}{let t=(new Date).getTime(),o=t-y;o<=12e4?(console.log(o,d),e.emit(l)):(e.removeListener(l,m),s("timed out"),n("timed out"))}}}))};await r(m())}))}))}}const f=new u;t["default"]=f},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},"91b0":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex flex-center bg-primary"},[e._v("\n    Add Roles\n")])},s=[];n("e6cf"),n("ddb0"),n("cf57");n("bc3a");const r=n("1712").to,i=n("ff00"),a=n("547a").default;var c={name:"addRoles",components:{},async created(){a.setSettings({TBURL:i["TB_URL"]}),a.setSettings(i);let[e,t]=await r(a.isLoggedIn());e&&window.location.assign("#/"),await this.test()},data(){return{}},methods:{async test(){}}},l=c,u=n("2877"),f=n("9989"),g=n("eebe"),d=n.n(g),y=Object(u["a"])(l,o,s,!1,null,null,null);t["default"]=y.exports;d()(y,"components",{QPage:f["a"]})},e350:function(e,t,n){"use strict";n.r(t);n("c975"),n("a434");class o{constructor(){this.events={}}on(e,t){return"object"!==typeof this.events[e]&&(this.events[e]=[]),this.events[e].push(t),()=>this.removeListener(e,t)}removeListener(e,t){if("object"===typeof this.events[e]){const n=this.events[e].indexOf(t);n>-1&&this.events[e].splice(n,1)}}emit(e,...t){"object"===typeof this.events[e]&&this.events[e].forEach((e=>e.apply(this,t)))}once(e,t){const n=this.on(e,((...e)=>{n(),t.apply(this,e)}))}}t["default"]=o},ff00:function(e){e.exports=JSON.parse('{"TB_URL":"https://demo.thingsboard.io/api","PUBLIC_DEVICE_ACCESS_TOKEN":"9sE9Z86OdYsynyCJKjnq","CORS_PROXY":"http://cseco.co.ke:8080/","JSONPROXY":"https://jsonproxy.cseco.co.ke"}')}}]);
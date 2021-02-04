(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{1:function(e,t){},10:function(e,t){},2:function(e,t){},3:function(e,t){},3120:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=this,s=t.$createElement,n=t._self._c||s;return n("q-page",{attrs:{padding:""}},[n("q-dialog",{attrs:{"transition-show":"rotate","transition-hide":"rotate"},model:{value:t.createUserDialog,callback:function(e){t.createUserDialog=e},expression:"createUserDialog"}},[n("q-card",{staticClass:"bg-secondary text-white"},[n("q-card-section",{staticClass:"text-center text-h3"},[n("div",{staticClass:"text-subtitle2"},[t._v("Create New User")])]),n("q-separator",{attrs:{dark:""}}),n("q-card-section",[n("q-form",{ref:"userRegistrationForm",staticClass:"col q-gutter-md text-white",on:{submit:t.createUser,reset:t.onReset}},[n("q-input",{attrs:{filled:"",type:"text",label:"first name",hint:"first name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter your name"}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.firstName,callback:function(e){t.firstName=e},expression:"firstName"}}),n("q-input",{attrs:{filled:"",type:"text",label:"last name",hint:"last name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter your name"}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}}),n("q-input",{attrs:{filled:"",type:"email",label:"email",hint:"email","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please enter your email address"},function(t){return e.isValidEmail()||"Invalid email address"}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("q-input",{attrs:{filled:"",type:"password",label:"Password","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Please enter your password"}],"error-message":t.passwordErrorMessage},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("q-input",{attrs:{filled:"",type:"password",label:"Password","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Please enter your password"}],"error-message":t.passwordErrorMessage},model:{value:t.cpassword,callback:function(e){t.cpassword=e},expression:"cpassword"}}),n("div",{staticClass:"col"},[n("q-btn",{attrs:{label:"Create",type:"submit",color:"primary"}}),n("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)],1)],1)],1)],1),n("div",{staticClass:"row"},[n("q-table",{staticClass:"col",attrs:{title:"Users",dense:"",data:t.users,columns:t.columns,filter:t.filter,"row-key":"index"},on:{"row-click":t.selectUser},scopedSlots:t._u([{key:"top-right",fn:function(){return[n("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[n("q-icon",{attrs:{slot:"append",name:"search"},slot:"append"})],1),n("q-btn",{attrs:{flat:""}},[n("q-icon",{attrs:{color:"primary",name:"refresh",side:""},on:{click:function(e){return t.fetchUsers()}}})],1),n("q-btn",{attrs:{flat:""}},[n("q-icon",{attrs:{color:"primary",name:"add_circle",side:""},on:{click:function(e){t.createUserDialog=!0}}})],1)]},proxy:!0}])})],1),n("q-dialog",{attrs:{"transition-show":"rotate","transition-hide":"rotate"},model:{value:t.selectedUser,callback:function(e){t.selectedUser=e},expression:"selectedUser"}},[n("q-card",[n("q-card-section",[n("div",{staticClass:"text-h6 text-center"},[t._v(t._s(t.selectedFirstName)+" "+t._s(t.selectedLastName))])]),n("q-card-section",{staticClass:"q-pt-none text-center"},[t._v("\n       "+t._s(t.selectedEmail)+"\n      ")]),n("q-card-section",{staticClass:"q-pt-none"},[n("q-btn",{attrs:{label:"delete"},on:{click:t.deleteUser}},[n("q-icon",{attrs:{name:"delete",color:"red"}})],1),n("q-btn",{attrs:{label:"roles"},on:{click:t.userRoles}},[n("q-icon",{attrs:{name:"security",color:"primary"}})],1),n("q-btn",{attrs:{label:"projects"},on:{click:t.userProjects}},[n("q-icon",{attrs:{name:"group_work",color:"secondary"}})],1),n("q-btn",{attrs:{label:"Edit"},on:{click:t.editUser}},[n("q-icon",{attrs:{name:"group_work",color:"secondary"}})],1)],1),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}}),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Ok",color:"primary"}})],1)],1)],1)],1)},r=[],o=(s("e6cf"),s("ddb0"),s("cf57"));s("bc3a");const a=s("1712").to,i=s("ff00"),l=s("547a").default;var c={name:"Users",components:{},async created(){l.setSettings({TBURL:i["TB_URL"]}),l.setSettings(i);let[e,t]=await a(l.isLoggedIn());e?window.location.assign("#/"):[e,t]=await a(this.fetchUsers())},data(){return{email:"",firstName:"",lastName:"",password:"",cpassword:"",passwordErrorMessage:"",users:[],filter:"",selectedUser:!1,createUserDialog:!1,columns:[{name:"firstName",required:!0,label:"First Name",align:"left",field:e=>e.firstName,format:e=>`${e||""}`,sortable:!0},{name:"lastName",required:!0,label:"Last Name",align:"left",field:e=>e.lastName,format:e=>`${e||""}`,sortable:!0},{name:"email",required:!0,label:"Email",align:"left",field:e=>e.email,format:e=>`${e||""}`,sortable:!0}],selectedEmail:"",selectedId:"",selectedFirstName:"",selectedLastName:""}},methods:{submit(){this.$refs.userRegistrationForm.submit()},selectUser(e,t){this.selectedUser=!0,this.selectedEmail=t.email,this.selectedId="object"===typeof t.id?t.id.id:t.id,this.selectedFirstName=t.firstName,this.selectedLastName=t.lastName,console.log("clicked on",t)},isValidEmail(){const e=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;return e.test(this.email)||"Invalid email"},onReset(){this.email=null,this.firstName=null,this.lastName=null,this.password=null,this.cpassword=null},showCustom(e=""){const t=this.$q.dialog({title:e,message:"",progress:{spinner:o["a"],color:"primary"},persistent:!0,ok:!1}),s=setInterval((()=>{!1===this.working&&(clearInterval(s),t.hide())}),500)},alert(e){alert(e)},async createUser(){return new Promise((async(e,t)=>{if(this.password!==this.cpassword)return this.cpassword="",this.passwordErrorMessage="Passwords don't match",this.$q.notify({type:"negative",message:"Passwords don't match"}),e(!1);this.working=!0,this.showCustom();let[s,n]=await a(l.createUser({user:this.email,firstName:this.firstName,lastName:this.lastName,password:this.password}));this.working=!1,s?(this.$q.notify({type:"negative",message:s.msg||s}),e(!1)):this.users.push(n)}))},async fetchUsers(){return new Promise((async(e,t)=>{this.working=!0,this.showCustom();let[s,n]=await a(l.fetchUsers());this.working=!1,s?(this.$q.notify({type:"negative",message:s}),e(!1)):(this.users=n.users,e(n.users))}))},async deleteUser(e){return new Promise((async(e,t)=>{let[s,n]=await a(this.confirm(`Are you sure you want to delete ${this.selectedEmail}`,"Delete User"));return s?e(!1):(this.working=!0,this.showCustom(),[s,n]=await a(l.deleteUser(this.selectedId)),this.working=!1,s?(console.log(s),this.$q.notify({type:"negative",message:s.msg||s}),e(!1)):(this.users=n.users,this.selectedUser=!1,this.$q.notify({type:"positive",message:`${this.selectedEmail} deleted.`}),void e(n.users)))}))},async confirm(e,t="Confirm"){return new Promise(((s,n)=>{this.$q.dialog({title:t,message:e,cancel:!0,persistent:!0}).onOk((()=>s(!0))).onOk((()=>s(!0))).onCancel((()=>n(!0))).onDismiss((()=>n(!0)))}))},showCustom(e=""){const t=this.$q.dialog({title:e,message:"",progress:{spinner:o["a"],color:"primary"},persistent:!0,ok:!1}),s=setInterval((()=>{!1===this.working&&(clearInterval(s),t.hide())}),500)}}},u=c,d=s("2877"),m=s("9989"),f=s("24e8"),p=s("f09f"),g=s("a370"),h=s("eb85"),y=s("0378"),w=s("27f9"),k=s("9c40"),b=s("eaac"),v=s("0016"),P=s("bd08"),T=s("db86"),q=s("42a1"),C=s("1c1c"),N=s("0170"),U=s("2c91"),I=s("66e5"),S=s("4074"),E=s("4b7e"),R=s("7f67"),_=s("eebe"),j=s.n(_),x=Object(d["a"])(u,n,r,!1,null,null,null);t["default"]=x.exports;j()(x,"components",{QPage:m["a"],QDialog:f["a"],QCard:p["a"],QCardSection:g["a"],QSeparator:h["a"],QForm:y["a"],QInput:w["a"],QBtn:k["a"],QTable:b["a"],QIcon:v["a"],QTr:P["a"],QTd:T["a"],QPopupEdit:q["a"],QList:C["a"],QItemLabel:N["a"],QSpace:U["a"],QItem:I["a"],QItemSection:S["a"],QCardActions:E["a"]}),j()(x,"directives",{ClosePopup:R["a"]})},4:function(e,t){},5:function(e,t){},"547a":function(e,t,s){"use strict";s.r(t);s("e6cf"),s("ddb0");var n=s("9523"),r=s.n(n);const o=s("1712").to,a=s("bc3a"),i=s("1232").default,l=s("4556"),c=s("e350").default;console.log(c);class u extends c{constructor(){var e;super(),e=this,r()(this,"settings",{}),r()(this,"setSettings",(e=>{for(let t in e){let s=e[t];this.settings[t]=s}})),r()(this,"setToken",(e=>{let t=e.token,s=e.refreshToken;window.localStorage.setItem("tbTokenGSAC",t),window.localStorage.setItem("tbRefreshTokenGSAC",s)})),r()(this,"logout",(()=>{window.localStorage.removeItem("tbTokenGSAC"),window.localStorage.removeItem("tbRefreshTokenGSAC"),this.jwt_token=null})),r()(this,"login",(async function(t){return new Promise((async function(s,n){let r=`${e.settings.TBURL}/auth/login`,[i,l]=await o(a.post(r,t));return i?n(i):s(l.data)}))})),r()(this,"getToken",(async function(t,s){return new Promise((async function(t,n){let r=`${e.settings.TBURL}/auth/token`,[i,l]=await o(a.post(r,{refreshToken:s},{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+s}}));return i?n(i):t(l.data)}))})),r()(this,"isLoggedIn",(async function(){return new Promise((async function(t,s){let n=localStorage.getItem("tbTokenGSAC");if(!n)return s("missing token");let r=i(n);console.log(r),e.userId=r.userId,e.jwt_token=n;let a=r.exp;if(!a)return s("missing token expiry");let l=localStorage.getItem("tbRefreshTokenGSAC");a=parseInt(a),(new Date).getTime();{let[t,r]=await o(e.getToken(n,l));if(t)return s("could not find token");e.setToken(r),n=r.token}return t(n)}))})),r()(this,"fetchRoles",(async function(){return new Promise((async function(t,s){let[n,r]=await o(e.sendSaveTeletry({type:"roles",action:"get"}));if(n)return s(n);t(r)}))})),r()(this,"fetchProjects",(async function(){return new Promise((async function(t,s){let[n,r]=await o(e.sendSaveTeletry({type:"projects",action:"get"}));if(n)return s(n);t(r)}))})),r()(this,"whoAmI",(async function(){return new Promise((async function(t,s){let[n,r]=await o(e.readUserData());if(console.log("WHOAMI"),n)return s(n);t(r)}))})),r()(this,"fetchUsers",(async function(){return new Promise((async function(t,s){let[n,r]=await o(e.whoAmI());if(n)return s(n);let i,l=r.authority;if("TENANT_ADMIN"===l){let t=`${e.settings.TBURL}/tenant/customers?customerTitle=GS Publications`;if([n,r]=await o(a.get(t,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+e.jwt_token}})),n)return s(n);i=r.data.id.id}else console.log("i am a customer...."),console.log(r),i=r.customerId.id;if(console.log("CUSTOMER ID",i),[n,r]=await o(e.sendSaveTeletry({type:"users",action:"get",customerId:i})),n)return s(n.msg||n);t(r)}))})),r()(this,"createRole",(async function(t){return new Promise((async function(s,n){let[r,a]=await o(e.sendSaveTeletry({type:"roles",action:"create",role:t}));if(r)return n(r);s(a)}))})),r()(this,"createUser",(async function(t,s){let{user:n,firstName:r,lastName:a,password:i}=t;return console.log("PPPPPPPPPPPPPPPPPPPPp"),new Promise((async function(t,l){console.log("step1...");let[c,u]=await o(e.sendSaveTeletry({type:"users",action:"create",user:n,firstName:r,lastName:a,password:i},s));if(c)return console.log("REJECTED========"),console.log(c),l(c);if(s){if(console.log("NEVER WAITING"),[c,u]=await o(e.checkSuccessfulCreateUser(n,i)),c)return l(c);t(u)}else{console.log("result from creating user");let s=JSON.parse(JSON.stringify(u));if(console.log(u),0===Object.keys(u).length){if([c,u]=await o(e.login({username:n,password:i})),c)return l("Registration failed. Please try submitting the form again");t({})}else t(s)}}))})),r()(this,"checkSuccessfulCreateUser",(async function(t,s){return new Promise((async function(n,r){let a=(new Date).getTime();console.log("starting for sure...");const i=async function(){console.log("here.....");let c=l({length:20,type:"url-safe"});return e.once(c,i),new Promise((async function(l,u){let[d,m]=await o(e.login({username:t,password:s}));if(d){console.log(d.data);let s=(new Date).getTime(),n=s-a;n<=1e4?e.emit(c):(e.removeListener(c,i),r(`Error creating account. Probably ${t} already exists`),u("Timed out"))}if(void 0!==m)return console.log(m),e.removeListener(c,i),l(m.data),n(m.data);{let t=(new Date).getTime(),s=t-a;s<=1e4?e.emit(c):(e.removeListener(c,i),r("Error creating account. Probably ${user} already exists"),u("Timed out"))}}))};await o(i())}))})),r()(this,"deleteUser",(async function(t){return new Promise((async function(s,n){console.log("STARGINT TO DELETE");let[r,a]=await o(e.sendSaveTeletry({type:"users",action:"delete",user:t}));if(r)return console.log("REJECTED========"),console.log(r),n(r);let i=JSON.parse(JSON.stringify(a));console.log(a),s(i)}))})),r()(this,"getActivationLink",(async function(t,s){return new Promise((async function(n,r){let i=`${e.settings.TBURL}/user/${t}/activationLink`,[l,c]=await o(a.get(`${e.settings.JSONPROXY}?path=${i}`,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+s}}));if(l)return r(l);n(c.data)}))})),r()(this,"createProject",(async function(t){return new Promise((async function(s,n){let[r,a]=await o(e.sendSaveTeletry({type:"projects",action:"create",project:t}));if(console.log("adhkjashdkhasdk"),r)return n(r);console.log("RETURNED..."),console.log(a),s(a)}))})),r()(this,"deleteRole",(async function(t){return new Promise((async function(s,n){let[r,a]=await o(e.sendSaveTeletry({type:"roles",action:"delete",role:t}));if(r)return n(r);s(a)}))})),r()(this,"deleteProject",(async function(t){return new Promise((async function(s,n){let[r,a]=await o(e.sendSaveTeletry({type:"projects",action:"delete",project:t}));if(r)return n(r);s(a)}))})),r()(this,"readUserData",(async function(){return new Promise((async function(t,s){let n=`${e.settings.TBURL}/auth/user`,[r,i]=await o(a.get(n,{headers:{"Content-Type":"application/json","X-Authorization":"Bearer "+e.jwt_token}}));return r?s(r):t(i.data)}))})),r()(this,"sendSaveTeletry",(async function(t,s=!1){return t.userId||(t.userId=e.userId),t.jwt_token||e.jwt_token&&(t.jwt_token=e.jwt_token),t.rqId||(t.rqId=l({length:20,type:"url-safe"})),console.log("step2"),console.log({data:t}),new Promise((async function(n,r){let i=e.settings.PUBLIC_DEVICE_ACCESS_TOKEN;console.log(e.settings);let c=e.settings.CORS_PROXY,u=`${e.settings.TBURL}/v1/${i}/telemetry`;console.log(t);let[d,m]=await o(a.post(`${c}/${u}`,t,{headers:{"Content-Type":"application/json"}}));if(console.log("ERRED......"),console.log(d),console.log(m),d)return r(d);if(s)return console.log("NO WAITING.."),n(!0);let f=t.rqId,p=(new Date).getTime();const g=async function(){return new Promise((async function(t,s){let[a,i]=await o(e.readUserData()),c=l({length:20,type:"url-safe"});if(e.once(c,g),a)console.log(a.status),console.log(a.response.data.status),console.log(a.data),console.log(a),e.removeListener(c,g),401===a.response.data.status?(console.log("---------160"),t({}),n({})):(console.log("---------1601"),s(a),r(a));else if(void 0===i.additionalInfo)r("Unknown error occured"),s("Unknown error occured");else{let o=i.additionalInfo.responses;if(o&&o[f]){console.log("---------167");let a=o[f];return console.log(a),a.msg.error?(e.removeListener(c,g),s(a.msg.error),r(a.msg.error)):(console.log("returned...."),console.log(a.msg),n(a.msg),t(!0),console.log("after resolve....."),e.removeListener(c,g),n(a.msg))}{let t=(new Date).getTime(),n=t-p;n<=12e4?(console.log(n,f),e.emit(c)):(e.removeListener(c,g),r("timed out"),s("timed out"))}}}))};await o(g())}))}))}}const d=new u;t["default"]=d},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},e350:function(e,t,s){"use strict";s.r(t);s("c975"),s("a434");class n{constructor(){this.events={}}on(e,t){return"object"!==typeof this.events[e]&&(this.events[e]=[]),this.events[e].push(t),()=>this.removeListener(e,t)}removeListener(e,t){if("object"===typeof this.events[e]){const s=this.events[e].indexOf(t);s>-1&&this.events[e].splice(s,1)}}emit(e,...t){"object"===typeof this.events[e]&&this.events[e].forEach((e=>e.apply(this,t)))}once(e,t){const s=this.on(e,((...e)=>{s(),t.apply(this,e)}))}}t["default"]=n},ff00:function(e){e.exports=JSON.parse('{"TB_URL":"https://demo.thingsboard.io/api","PUBLIC_DEVICE_ACCESS_TOKEN":"9sE9Z86OdYsynyCJKjnq","CORS_PROXY":"https://cors.cseco.co.ke","JSONPROXY":"https://jsonproxy.cseco.co.ke"}')}}]);
(function(e){function t(t){for(var n,a,o=t[0],u=t[1],c=t[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==s[o]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},s={app:0},i=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-ed1a1c6c":"2c00b7e2","chunk-60903641":"780b7b2c","chunk-fa20d7dc":"e270165f","chunk-80883c96":"5b626363","chunk-ffbe55a4":"2d735160"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-ed1a1c6c":1,"chunk-fa20d7dc":1,"chunk-80883c96":1,"chunk-ffbe55a4":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-ed1a1c6c":"ae0a7111","chunk-60903641":"31d6cfe0","chunk-fa20d7dc":"acd6c5d4","chunk-80883c96":"1b8670d7","chunk-ffbe55a4":"41c46ac6"}[e]+".css",s=u.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var c=i[o],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],l=c.getAttribute("data-href");if(l===n||l===s)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],h.parentNode.removeChild(h),r(i)},h.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(h);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}s[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/quik-messenger/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var h=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"17e1":function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return u})),r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return d}));var n=r("260b"),a=(r("e71f"),r("ea7b"),r("4360")),s=r("a18c"),i=n["a"].initializeApp({apiKey:"AIzaSyA1klxmi6nGNAiNu0dRyLVQR9Klv7452tM",authDomain:"quik-messenger.firebaseapp.com",projectId:"quik-messenger",storageBucket:"quik-messenger.appspot.com",messagingSenderId:"424280930236",appId:"1:424280930236:web:df63712d5c6277cea3ddb9",measurementId:"G-ML8E8MLKMJ"}),o=i.auth(),u=i.firestore(),c=n["a"].firestore,l=c.Timestamp,d=(c.GeoPoint,c.FieldValue);o.onAuthStateChanged((function(e){console.log("Auth state changed",e);var t=a["a"].getters.currentUser;if(setTimeout((function(){a["a"].state.authLoading=!1}),100),e)console.log("User Logged in",e),a["a"].commit("setUser",e),s["a"].push("/chats");else{if(null==t)return;a["a"].commit("setUser",null),s["a"].push("/login")}}))},4360:function(e,t,r){"use strict";var n=r("5530"),a=r("2b0e"),s=r("2f62"),i=r("17e1"),o=r("3317");a["a"].use(s["a"]),t["a"]=new s["a"].Store({state:{user:null,authLoading:!0,chats:[],chatUsers:{}},getters:{currentUser:function(e){return e.user},chats:function(e){return e.chats},chatUsers:function(e){return e.chatUsers}},mutations:Object(n["a"])({setUser:function(e,t){e.user=t}},o["b"]),actions:{bindChats:Object(o["a"])((function(e,t){var r=e.bindFirestoreRef,n=t.getters;return r("chats",i["d"].collection("chats").where("users","array-contains",n.currentUser.uid).orderBy("updated","desc"))})),unbindChats:Object(o["a"])((function(e){var t=e.unbindFirestoreRef;t("chats")}))},modules:{}})},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("router-view"),e.$store.state.authLoading?r("loader"):e._e()],1)},s=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loader-bg"},[r("div",{staticClass:"v-application"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)])},o=[],u={created:function(){console.log("Loader Created")},destroyed:function(){console.log("Loader Desctroyed")}},c=u,l=(r("74ae"),r("2877")),d=r("6544"),h=r.n(d),f=r("490a"),m=Object(l["a"])(c,i,o,!1,null,null,null),p=m.exports;h()(m,{VProgressCircular:f["a"]});var v={name:"App",data:function(){return{}},components:{Loader:p},methods:{loadStyle:function(e){var t=document.querySelector('style[id="lastinbody"]')||document.createElement("style");t.id="lastinbody",t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.querySelector("body").appendChild(t)}},created:function(){console.log(this.$vuetify.theme.themes.light.primary),this.loadStyle("::-webkit-scrollbar-thumb {\n        background: ".concat(this.$vuetify.theme.themes.light.primary,";\n        border-radius: 10px;\n      }"))}},g=v,b=(r("034f"),Object(l["a"])(g,a,s,!1,null,null,null)),y=b.exports,w=r("a18c"),$=r("4360"),k=r("0ff2"),E=r("f309"),x=r("fcf4");n["a"].use(E["a"]);var C=new E["a"]({theme:{themes:{light:{primary:x["a"].blueGrey.darken4,secondary:x["a"].teal.darken4,accent:x["a"].indigo.base}}}}),_=r("1dce"),q=r.n(_);n["a"].use(k["a"]),n["a"].use(q.a),n["a"].config.productionTip=!1,new n["a"]({router:w["a"],store:$["a"],vuetify:C,render:function(e){return e(y)}}).$mount("#app")},"74ae":function(e,t,r){"use strict";r("b4ad")},"85ec":function(e,t,r){},a18c:function(e,t,r){"use strict";r("d3b7"),r("3ca3"),r("ddb0");var n=r("2b0e"),a=r("8c4f"),s=r("4360"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",["Chat"!=e.$route.name?r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),r("span",{staticClass:"shrink mt-1 text-h6"},[e._v("Quik Messenger")])],1)]):e._e(),r("v-main",[r("v-container",[r("keep-alive",[r("router-view")],1)],1)],1)],1)},o=[],u={name:"UnAuth"},c=u,l=r("2877"),d=r("6544"),h=r.n(d),f=r("7496"),m=r("40dc"),p=r("a523"),v=r("adda"),g=r("f6c4"),b=Object(l["a"])(c,i,o,!1,null,null,null),y=b.exports;h()(b,{VApp:f["a"],VAppBar:m["a"],VContainer:p["a"],VImg:v["a"],VMain:g["a"]});var w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{on:{contextmenu:function(e){return e.preventDefault()}}},[r("v-app",[r("keep-alive",[r("router-view")],1)],1)],1)},$=[],k=(r("d81d"),r("7db0"),r("07ac"),r("4de4"),r("caad"),r("2532"),r("159b"),r("17e1")),E={name:"Auth",created:function(){var e=this;this.$store.dispatch("bindChats",this.$store),this.unwatch=this.$store.watch((function(e,t){return t.chats}),(function(t){if(t){var r=t.map((function(t){return t.users.find((function(t){return t!=e.$store.getters.currentUser.uid}))})),n={};if(0!=r.length){var a=Object.values(e.$store.state.chatUsers).map((function(e){return e.uid}));if(console.log("Previous",a),a.length>0){var s=a.filter((function(e){return!r.includes(e)}));if(console.log("Difference",s),0==s)return}k["d"].collection("users").where("uid","in",r).get().then((function(r){r.docs.forEach((function(r){t.forEach((function(e){e.users.includes(r.data().uid)&&(n[e.id]=r.data())})),e.$store.state.chatUsers=n})),console.log("Chat Users",n)}))}}}))},beforeDestroy:function(){this.$store.dispatch("unbindChats"),this.unwatch()}},x=E,C=Object(l["a"])(x,w,$,!1,null,null,null),_=C.exports;h()(C,{VApp:f["a"]});var q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3 text-center"},[e._v(" Get Started! ")]),r("h6",{staticClass:"text-center font-weight-bold text-h6"},[e._v("Register")])]),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[r("v-text-field",{attrs:{label:"Name",placeholder:"Enter Name","error-messages":e.nameErrors},on:{input:function(t){return e.$v.name.$touch()},blur:function(t){return e.$v.name.$touch()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-text-field",{attrs:{label:"Email",placeholder:"Enter Email","error-messages":e.emailErrors},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{label:"Password",placeholder:"Enter Password",type:"password",autocomplete:"off","error-messages":e.passwordErrors},on:{input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{attrs:{color:"primary",disabled:e.$v.$invalid||e.loading,type:"submit",loading:e.loading}},[e._v("Register")])],1),r("p",{staticClass:"mt-3"},[e._v(" Already have an account? "),r("router-link",{attrs:{to:"/login",replace:""}},[e._v("Login")])],1)],1)],1)],1)},L=[],j=(r("b0c0"),r("b5ae")),O={name:"Register",data:function(){return{name:"",email:"",password:"",loading:!1}},validations:{name:{required:j["required"],minLength:Object(j["minLength"])(6)},password:{required:j["required"],minLength:Object(j["minLength"])(6)},email:{required:j["required"],email:j["email"]}},methods:{register:function(){var e=this;this.$v.$touch(),this.$v.$invalid||this.loading||(this.loading=!0,k["c"].createUserWithEmailAndPassword(this.email,this.password).then((function(t){t.user.updateProfile({displayName:e.name}).then((function(){var e=t.user,r={uid:e.uid,displayName:e.displayName};k["d"].collection("users").doc(e.uid).set(r)}))})).catch((function(e){console.log(e.message)})).finally((function(){e.loading=!1})))}},computed:{nameErrors:function(){var e=[];return this.$v.name.$dirty?(!this.$v.name.required&&e.push("Name is required"),!this.$v.name.minLength&&e.push("Name must be at least 6 characters long"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.required&&e.push("Password is required"),!this.$v.password.minLength&&e.push("Password must be at least 6 characters long"),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.required&&e.push("Email is required"),!this.$v.email.email&&e.push("Enter a valid email"),e):e}}},P=O,U=r("8336"),A=r("62ad"),S=r("4bd4"),V=r("0fd9"),N=r("8654"),T=Object(l["a"])(P,q,L,!1,null,null,null),R=T.exports;h()(T,{VBtn:U["a"],VCol:A["a"],VContainer:p["a"],VForm:S["a"],VRow:V["a"],VTextField:N["a"]});var M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3 text-center"},[e._v(" Get Started! ")]),r("h6",{staticClass:"text-center font-weight-bold text-h6"},[e._v("Login")])]),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Email",placeholder:"Enter Email","error-messages":e.emailErrors},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:function(){return e.$refs.password.focus()}.apply(null,arguments)}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{ref:"password",attrs:{label:"Password",placeholder:"Enter Password",type:"password",autocomplete:"off","error-messages":e.passwordErrors},on:{input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login.apply(null,arguments)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{attrs:{color:"primary",disabled:e.$v.$invalid||e.loading,loading:e.loading},on:{click:e.login}},[e._v("Login")]),r("p",{staticClass:"mt-3"},[e._v(" Does't have an account? "),r("router-link",{attrs:{to:"/register",replace:""}},[e._v("Register")])],1)],1)],1)],1)},D=[],B={name:"Login",data:function(){return{email:"",password:"",loading:!1}},validations:{password:{required:j["required"],minLength:Object(j["minLength"])(6)},email:{required:j["required"],email:j["email"]}},methods:{login:function(){var e=this;this.$v.$invalid||this.loading||(this.loading=!0,k["c"].signInWithEmailAndPassword(this.email,this.password).catch((function(e){console.log(e.message)})).finally((function(){e.loading=!1})))}},computed:{passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.required&&e.push("Password is required"),!this.$v.password.minLength&&e.push("Password must be at least 6 characters long"),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.required&&e.push("Email is required"),!this.$v.email.email&&e.push("Enter a valid email"),e):e}}},I=B,F=Object(l["a"])(I,M,D,!1,null,null,null),G=F.exports;h()(F,{VBtn:U["a"],VCol:A["a"],VContainer:p["a"],VRow:V["a"],VTextField:N["a"]}),n["a"].use(a["a"]);var K=[{path:"",name:"Home",redirect:function(){var e=s["a"].getters.currentUser;return e?"/chats":"/login"}},{path:"",name:"UnAuth",component:y,children:[{path:"register",name:"Register",component:R,meta:{guest:!0}},{path:"login",name:"Login",component:G,meta:{guest:!0}}],meta:{guest:!0}},{path:"",name:"Auth",component:_,children:[{path:"chats",name:"Chats",component:function(){return Promise.all([r.e("chunk-ed1a1c6c"),r.e("chunk-fa20d7dc"),r.e("chunk-ffbe55a4")]).then(r.bind(null,"c98b"))},meta:{requiresUser:!0},children:[{path:"users",name:"Users",component:function(){return Promise.all([r.e("chunk-ed1a1c6c"),r.e("chunk-60903641")]).then(r.bind(null,"dbef"))},meta:{requiresUser:!0}},{path:":id",name:"Chat",component:function(){return Promise.all([r.e("chunk-ed1a1c6c"),r.e("chunk-fa20d7dc"),r.e("chunk-80883c96")]).then(r.bind(null,"293a"))},meta:{requiresUser:!0}}]}],meta:{requiresUser:!0}}],J=new a["a"]({routes:K});J.beforeEach((function(e,t,r){var n,a;return null!==(n=e.meta)&&void 0!==n&&n.requiresUser?s["a"].getters.currentUser?void r():void r("/"):null!==(a=e.meta)&&void 0!==a&&a.guest&&s["a"].getters.currentUser?void r("/chats"):void r()}));t["a"]=J},b4ad:function(e,t,r){}});
//# sourceMappingURL=app.4843dfcf.js.map
(function(e){function t(t){for(var n,a,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==s[o]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},s={app:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-ed1a1c6c":"2c00b7e2","chunk-3737bd20":"e72662bf","chunk-0388ea28":"bf7290eb","chunk-80883c96":"4d1908d5","chunk-c06d1b86":"e4ce7df2"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-ed1a1c6c":1,"chunk-3737bd20":1,"chunk-0388ea28":1,"chunk-80883c96":1,"chunk-c06d1b86":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-ed1a1c6c":"ae0a7111","chunk-3737bd20":"acd6c5d4","chunk-0388ea28":"cab09eb5","chunk-80883c96":"1b8670d7","chunk-c06d1b86":"8ad0bb85"}[e]+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===s)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],h.parentNode.removeChild(h),r(i)},h.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}s[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/quik-messenger/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"17e1":function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return c})),r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return d}));var n=r("260b"),a=(r("e71f"),r("ea7b"),r("4360")),s=r("a18c"),i=n["a"].initializeApp({apiKey:"AIzaSyA1klxmi6nGNAiNu0dRyLVQR9Klv7452tM",authDomain:"quik-messenger.firebaseapp.com",projectId:"quik-messenger",storageBucket:"quik-messenger.appspot.com",messagingSenderId:"424280930236",appId:"1:424280930236:web:df63712d5c6277cea3ddb9",measurementId:"G-ML8E8MLKMJ"}),o=i.auth(),c=i.firestore(),u=n["a"].firestore,l=u.Timestamp,d=(u.GeoPoint,u.FieldValue);o.onAuthStateChanged((function(e){console.log("Auth state changed",e);var t=a["a"].getters.currentUser;if(setTimeout((function(){a["a"].state.authLoading=!1}),100),e)console.log("User Logged in",e),a["a"].commit("setUser",e),s["a"].push("/chats");else{if(null==t)return;a["a"].commit("setUser",null),s["a"].push("/login")}}))},"3d39":function(e,t,r){},4360:function(e,t,r){"use strict";var n=r("5530"),a=r("2b0e"),s=r("2f62"),i=r("17e1"),o=r("3317");a["a"].use(s["a"]),t["a"]=new s["a"].Store({state:{user:null,authLoading:!0,chats:[],chatUsers:{}},getters:{currentUser:function(e){return e.user},chats:function(e){return e.chats},chatUsers:function(e){return e.chatUsers}},mutations:Object(n["a"])({setUser:function(e,t){e.user=t}},o["b"]),actions:{bindChats:Object(o["a"])((function(e,t){var r=e.bindFirestoreRef,n=t.getters;return r("chats",i["d"].collection("chats").where("users","array-contains",n.currentUser.uid).orderBy("updated","desc"))})),unbindChats:Object(o["a"])((function(e){var t=e.unbindFirestoreRef;t("chats")}))},modules:{}})},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("router-view"),r("v-app",[r("v-fade-transition",[e.$store.state.authLoading?r("loader"):e._e()],1)],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loader-bg"},[r("div",{staticClass:"v-application"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)])},o=[],c={created:function(){console.log("Loader Created")},destroyed:function(){console.log("Loader Desctroyed")}},u=c,l=(r("74ae"),r("2877")),d=r("6544"),h=r.n(d),m=r("490a"),p=Object(l["a"])(u,i,o,!1,null,null,null),f=p.exports;h()(p,{VProgressCircular:m["a"]});var v={name:"App",data:function(){return{}},components:{Loader:f},methods:{loadStyle:function(e){var t=document.querySelector('style[id="lastinbody"]')||document.createElement("style");t.id="lastinbody",t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.querySelector("body").appendChild(t)}},created:function(){console.log(this.$vuetify.theme.themes.light.primary),this.loadStyle("::-webkit-scrollbar-thumb {\n        background: ".concat(this.$vuetify.theme.themes.light.primary,";\n        border-radius: 10px;\n      }"))}},g=v,b=(r("034f"),r("7496")),y=r("0789"),w=Object(l["a"])(g,a,s,!1,null,null,null),$=w.exports;h()(w,{VApp:b["a"],VFadeTransition:y["c"]});var k=r("a18c"),E=r("4360"),x=r("0ff2"),C=r("f309"),_=r("fcf4");n["a"].use(C["a"]);var q=new C["a"]({theme:{themes:{light:{primary:_["a"].blueGrey.darken4,secondary:_["a"].teal.darken4,accent:_["a"].indigo.base,error:"#ff0000"}}}}),L=r("1dce"),j=r.n(L);n["a"].use(x["a"]),n["a"].use(j.a),n["a"].config.productionTip=!1,new n["a"]({router:k["a"],store:E["a"],vuetify:q,render:function(e){return e($)}}).$mount("#app")},"74ae":function(e,t,r){"use strict";r("b4ad")},"85ec":function(e,t,r){},a18c:function(e,t,r){"use strict";r("d3b7"),r("3ca3"),r("ddb0");var n=r("2b0e"),a=r("8c4f"),s=r("4360"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",["Chat"!=e.$route.name?r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),r("span",{staticClass:"shrink mt-1 text-h6"},[e._v("Quik Messenger")])],1)]):e._e(),r("v-main",{staticClass:"primary lighten-4"},[r("v-container",[r("keep-alive",[r("router-view")],1)],1)],1)],1)},o=[],c={name:"UnAuth"},u=c,l=r("2877"),d=r("6544"),h=r.n(d),m=r("7496"),p=r("40dc"),f=r("a523"),v=r("adda"),g=r("f6c4"),b=Object(l["a"])(u,i,o,!1,null,null,null),y=b.exports;h()(b,{VApp:m["a"],VAppBar:p["a"],VContainer:f["a"],VImg:v["a"],VMain:g["a"]});var w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{on:{contextmenu:function(e){return e.preventDefault()}}},[r("v-app",[r("keep-alive",[r("router-view")],1)],1)],1)},$=[],k=(r("d81d"),r("7db0"),r("07ac"),r("4de4"),r("caad"),r("2532"),r("159b"),r("17e1")),E={name:"Auth",created:function(){var e=this;this.$store.dispatch("bindChats",this.$store),this.unwatch=this.$store.watch((function(e,t){return t.chats}),(function(t){if(t){var r=t.map((function(t){return t.users.find((function(t){return t!=e.$store.getters.currentUser.uid}))})),n={};if(0!=r.length){var a=Object.values(e.$store.state.chatUsers).map((function(e){return e.uid}));if(console.log("Previous",a),a.length>0){var s=r.filter((function(e){return!a.includes(e)}));if(console.log("Difference",s),0==s)return}k["d"].collection("users").where("uid","in",r).get().then((function(r){r.docs.forEach((function(r){t.forEach((function(e){e.users.includes(r.data().uid)&&(n[e.id]=r.data())})),e.$store.state.chatUsers=n})),console.log("Chat Users",n)}))}}}))},beforeDestroy:function(){this.$store.dispatch("unbindChats"),this.unwatch()}},x=E,C=Object(l["a"])(x,w,$,!1,null,null,null),_=C.exports;h()(C,{VApp:m["a"]});var q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("welcome"),r("h6",{staticClass:"text-center font-weight-bold text-h6"},[e._v("Register")])],1),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[r("v-text-field",{attrs:{outlined:"",label:"Name",placeholder:"Enter Name","error-messages":e.nameErrors},on:{input:function(t){return e.$v.name.$touch()},blur:function(t){return e.$v.name.$touch()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-text-field",{attrs:{outlined:"",label:"Email",placeholder:"Enter Email","error-messages":e.emailErrors},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{outlined:"",label:"Password",placeholder:"Enter Password",type:"password",autocomplete:"off","error-messages":e.passwordErrors},on:{input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{attrs:{color:"primary",disabled:e.$v.$invalid||e.loading,type:"submit",loading:e.loading}},[e._v("Register")])],1),r("p",{staticClass:"mt-3"},[e._v(" Already have an account? "),r("router-link",{attrs:{to:"/login",replace:""}},[e._v("Login")])],1)],1)],1)],1)},L=[],j=(r("b0c0"),r("b5ae")),O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[r("div",{staticClass:"welcome-logo"},[r("v-img",{staticClass:"shrink mx-auto",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"100"}})],1),r("h3",{staticClass:"v-heading text-h5 my-3"},[e._v("Welcome to Quik Messenger")])])},P=[],U={},V=U,A=(r("e2e1"),Object(l["a"])(V,O,P,!1,null,"0cc96aa4",null)),S=A.exports;h()(A,{VImg:v["a"]});var N={name:"Register",data:function(){return{name:"",email:"",password:"",loading:!1}},components:{Welcome:S},validations:{name:{required:j["required"],minLength:Object(j["minLength"])(6)},password:{required:j["required"],minLength:Object(j["minLength"])(6)},email:{required:j["required"],email:j["email"]}},methods:{register:function(){var e=this;this.$v.$touch(),this.$v.$invalid||this.loading||(this.loading=!0,k["c"].createUserWithEmailAndPassword(this.email,this.password).then((function(t){t.user.updateProfile({displayName:e.name}).then((function(){var e=t.user,r={uid:e.uid,displayName:e.displayName};k["d"].collection("users").doc(e.uid).set(r)}))})).catch((function(e){console.log(e.message)})).finally((function(){e.loading=!1})))}},computed:{nameErrors:function(){var e=[];return this.$v.name.$dirty?(!this.$v.name.required&&e.push("Name is required"),!this.$v.name.minLength&&e.push("Name must be at least 6 characters long"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.required&&e.push("Password is required"),!this.$v.password.minLength&&e.push("Password must be at least 6 characters long"),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.required&&e.push("Email is required"),!this.$v.email.email&&e.push("Enter a valid email"),e):e}}},T=N,M=r("8336"),R=r("62ad"),D=r("4bd4"),I=r("0fd9"),B=r("8654"),F=Object(l["a"])(T,q,L,!1,null,null,null),W=F.exports;h()(F,{VBtn:M["a"],VCol:R["a"],VContainer:f["a"],VForm:D["a"],VRow:I["a"],VTextField:B["a"]});var G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("welcome"),r("h6",{staticClass:"text-center font-weight-bold text-h6"},[e._v("Login")])],1),r("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{outlined:"",label:"Email",placeholder:"Enter Email","error-messages":e.emailErrors},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:function(){return e.$refs.password.focus()}.apply(null,arguments)}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{ref:"password",attrs:{outlined:"",label:"Password",placeholder:"Enter Password",type:"password",autocomplete:"off","error-messages":e.passwordErrors},on:{input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login.apply(null,arguments)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{attrs:{color:"primary",disabled:e.$v.$invalid||e.loading,loading:e.loading},on:{click:e.login}},[e._v("Login")]),r("p",{staticClass:"mt-3"},[e._v(" Does't have an account? "),r("router-link",{attrs:{to:"/register",replace:""}},[e._v("Register")])],1)],1)],1)],1)},K=[],J={name:"Login",data:function(){return{email:"",password:"",loading:!1}},components:{Welcome:S},validations:{password:{required:j["required"],minLength:Object(j["minLength"])(6)},email:{required:j["required"],email:j["email"]}},methods:{login:function(){var e=this;this.$v.$invalid||this.loading||(this.loading=!0,k["c"].signInWithEmailAndPassword(this.email,this.password).catch((function(e){console.log(e.message)})).finally((function(){e.loading=!1})))}},computed:{passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.required&&e.push("Password is required"),!this.$v.password.minLength&&e.push("Password must be at least 6 characters long"),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.required&&e.push("Email is required"),!this.$v.email.email&&e.push("Enter a valid email"),e):e}}},Q=J,z=Object(l["a"])(Q,G,K,!1,null,null,null),H=z.exports;h()(z,{VBtn:M["a"],VCol:R["a"],VContainer:f["a"],VRow:I["a"],VTextField:B["a"]}),n["a"].use(a["a"]);var X=[{path:"",name:"Home",redirect:function(){var e=s["a"].getters.currentUser;return e?"/chats":"/login"}},{path:"",name:"UnAuth",component:y,children:[{path:"register",name:"Register",component:W,meta:{guest:!0}},{path:"login",name:"Login",component:H,meta:{guest:!0}}],meta:{guest:!0}},{path:"",name:"Auth",component:_,children:[{path:"chats",name:"Chats",component:function(){return Promise.all([r.e("chunk-ed1a1c6c"),r.e("chunk-3737bd20"),r.e("chunk-0388ea28")]).then(r.bind(null,"c98b"))},meta:{requiresUser:!0},children:[{path:"users",name:"Users",component:function(){return Promise.all([r.e("chunk-ed1a1c6c"),r.e("chunk-c06d1b86")]).then(r.bind(null,"dbef"))},meta:{requiresUser:!0}},{path:":id",name:"Chat",component:function(){return Promise.all([r.e("chunk-ed1a1c6c"),r.e("chunk-3737bd20"),r.e("chunk-80883c96")]).then(r.bind(null,"293a"))},meta:{requiresUser:!0}}]}],meta:{requiresUser:!0}}],Y=new a["a"]({routes:X});Y.beforeEach((function(e,t,r){var n,a;return null!==(n=e.meta)&&void 0!==n&&n.requiresUser?s["a"].getters.currentUser?void r():void r("/"):null!==(a=e.meta)&&void 0!==a&&a.guest&&s["a"].getters.currentUser?void r("/chats"):void r()}));t["a"]=Y},b4ad:function(e,t,r){},e2e1:function(e,t,r){"use strict";r("3d39")}});
//# sourceMappingURL=app.88db230e.js.map
(function(e){function t(t){for(var r,a,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==i[o]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},s=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0c6f621e":"d98dc130","chunk-c06d1b86":"d3792a78","chunk-eb2e469c":"b08706e3","chunk-0388ea28":"50d67268","chunk-80883c96":"41227876"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0c6f621e":1,"chunk-c06d1b86":1,"chunk-eb2e469c":1,"chunk-0388ea28":1,"chunk-80883c96":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0c6f621e":"c88164fb","chunk-c06d1b86":"8ad0bb85","chunk-eb2e469c":"ea3c4e9d","chunk-0388ea28":"a630eac8","chunk-80883c96":"1b8670d7"}[e]+".css",i=c.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===r||l===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],h.parentNode.removeChild(h),n(s)},h.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/quik-messenger/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var h=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"17e1":function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var r=n("260b"),a=(n("e71f"),n("ea7b"),n("4360")),i=n("a18c"),s=r["a"].initializeApp({apiKey:"AIzaSyA1klxmi6nGNAiNu0dRyLVQR9Klv7452tM",authDomain:"quik-messenger.firebaseapp.com",projectId:"quik-messenger",storageBucket:"quik-messenger.appspot.com",messagingSenderId:"424280930236",appId:"1:424280930236:web:df63712d5c6277cea3ddb9",measurementId:"G-ML8E8MLKMJ"}),o=s.auth(),c=s.firestore(),u=r["a"].firestore,l=u.Timestamp,d=(u.GeoPoint,u.FieldValue);o.onAuthStateChanged((function(e){console.log("Auth state changed",e);var t=a["a"].getters.currentUser;if(setTimeout((function(){a["a"].state.authLoading=!1}),100),e)console.log("User Logged in",e),a["a"].commit("setUser",e),i["a"].push("/chats");else{if(null==t)return;a["a"].commit("setUser",null),i["a"].push("/login")}}))},"3d39":function(e,t,n){},4360:function(e,t,n){"use strict";var r=n("5530"),a=n("2b0e"),i=n("2f62"),s=n("17e1"),o=n("3317");a["a"].use(i["a"]),t["a"]=new i["a"].Store({state:{user:null,authLoading:!0,chats:[],chatUsers:{}},getters:{currentUser:function(e){return e.user},chats:function(e){return e.chats},chatUsers:function(e){return e.chatUsers}},mutations:Object(r["a"])({setUser:function(e,t){e.user=t}},o["b"]),actions:{bindChats:Object(o["a"])((function(e,t){var n=e.bindFirestoreRef,r=t.getters;return n("chats",s["d"].collection("chats").where("users","array-contains",r.currentUser.uid).orderBy("updated","desc"))})),unbindChats:Object(o["a"])((function(e){var t=e.unbindFirestoreRef;t("chats")}))},modules:{}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{contextmenu:function(e){return e.preventDefault()}}},[n("v-app",[n("router-view"),n("v-fade-transition",[e.$store.state.authLoading?n("loader"):e._e()],1)],1)],1)},i=[],s=(n("99af"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader-bg"},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)}),o=[],c={},u=c,l=(n("74ae"),n("2877")),d=n("6544"),h=n.n(d),m=n("490a"),f=Object(l["a"])(u,s,o,!1,null,null,null),p=f.exports;h()(f,{VProgressCircular:m["a"]});var v=n("ed08"),g={name:"App",data:function(){return{}},components:{Loader:p},methods:{setCssHeightVar:function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}},created:function(){Object(v["a"])("::-webkit-scrollbar-thumb {\n  background: ".concat(this.$vuetify.theme.themes.light.primary,";\n  border-radius: 10px;\n}\n::-webkit-scrollbar-track {\n  background: ").concat(this.$vuetify.theme.themes.light.primary,"50;\n}"),"custom-scroll-bar")},mounted:function(){this.setCssHeightVar(),window.addEventListener("resize",this.setCssHeightVar,!1)},destroyed:function(){window.removeEventListener("resize",this.setCssHeightVar,!1)}},b=g,y=(n("034f"),n("7496")),w=n("0789"),k=Object(l["a"])(b,a,i,!1,null,null,null),$=k.exports;h()(k,{VApp:y["a"],VFadeTransition:w["c"]});var E=n("a18c"),x=n("4360"),C=n("0ff2"),_=n("f309"),q=n("fcf4");r["a"].use(_["a"]);var j=new _["a"]({theme:{themes:{light:{primary:q["a"].blueGrey.darken4,secondary:q["a"].teal.darken4,accent:q["a"].indigo.base,error:"#ff0000"}}}}),L=n("1dce"),O=n.n(L);r["a"].use(C["a"]),r["a"].use(O.a),r["a"].config.productionTip=!1,new r["a"]({router:E["a"],store:x["a"],vuetify:j,render:function(e){return e($)}}).$mount("#app")},"74ae":function(e,t,n){"use strict";n("b4ad")},"85ec":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var r=n("2b0e"),a=n("8c4f"),i=n("4360"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["Chat"!=e.$route.name?n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("span",{staticClass:"shrink mt-1 text-h6"},[e._v("Quik Messenger")])],1)]):e._e(),n("v-main",{staticClass:"primary lighten-4 scroll-container"},[n("v-container",[n("keep-alive",[n("router-view")],1)],1)],1)],1)},o=[],c={name:"UnAuth"},u=c,l=(n("af24"),n("2877")),d=n("6544"),h=n.n(d),m=n("40dc"),f=n("a523"),p=n("adda"),v=n("f6c4"),g=Object(l["a"])(u,s,o,!1,null,null,null),b=g.exports;h()(g,{VAppBar:m["a"],VContainer:f["a"],VImg:p["a"],VMain:v["a"]});var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("keep-alive",[n("router-view")],1)],1)},w=[],k=(n("d81d"),n("7db0"),n("07ac"),n("4de4"),n("caad"),n("2532"),n("159b"),n("17e1")),$=n("ed08"),E={name:"Auth",created:function(){var e=this;this.$store.dispatch("bindChats",this.$store),this.unwatch=this.$store.watch((function(e,t){return t.chats}),(function(t){if(t){var n=t.map((function(t){return t.users.find((function(t){return t!=e.$store.getters.currentUser.uid}))})),r={};if(0!=n.length){var a=Object.values(e.$store.state.chatUsers).map((function(e){return e.uid}));if(console.log("Previous",a),a.length>0){var i=n.filter((function(e){return!a.includes(e)}));if(console.log("Difference",i),0==i)return}k["d"].collection("users").where("uid","in",n).get().then((function(n){n.docs.forEach((function(n){t.forEach((function(e){e.users.includes(n.data().uid)&&(r[e.id]=n.data())})),e.$store.state.chatUsers=r})),console.log("Chat Users",r)}))}}})),Object($["a"])("html {\n  overflow: hidden;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n  overscroll-behavior: none;\n}","scroll-limiter")},beforeDestroy:function(){this.$store.dispatch("unbindChats"),this.unwatch()},destroyed:function(){Object($["b"])("scroll-limiter")}},x=E,C=Object(l["a"])(x,y,w,!1,null,null,null),_=C.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("welcome"),n("h6",{staticClass:"text-center font-weight-bold text-h6"},[e._v("Register")])],1),n("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[n("v-text-field",{attrs:{outlined:"",label:"Name",placeholder:"Enter Name","error-messages":e.nameErrors},on:{input:function(t){return e.$v.name.$touch()},blur:function(t){return e.$v.name.$touch()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("v-text-field",{attrs:{outlined:"",label:"Email",placeholder:"Enter Email","error-messages":e.emailErrors},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{attrs:{outlined:"",label:"Password",placeholder:"Enter Password",type:"password",autocomplete:"off","error-messages":e.passwordErrors},on:{input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{attrs:{color:"primary",disabled:e.$v.$invalid||e.loading,type:"submit",loading:e.loading}},[e._v("Register")])],1),n("p",{staticClass:"mt-3"},[e._v(" Already have an account? "),n("router-link",{attrs:{to:"/login",replace:""}},[e._v("Login")])],1)],1)],1)},j=[],L=(n("b0c0"),n("b5ae")),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("div",{staticClass:"welcome-logo"},[n("v-img",{staticClass:"shrink mx-auto",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"100"}})],1),n("h3",{staticClass:"v-heading text-h5 my-3"},[e._v("Welcome to Quik Messenger")])])},P=[],U={},V=U,A=(n("e2e1"),Object(l["a"])(V,O,P,!1,null,"0cc96aa4",null)),S=A.exports;h()(A,{VImg:p["a"]});var N={name:"Register",data:function(){return{name:"",email:"",password:"",loading:!1}},components:{Welcome:S},validations:{name:{required:L["required"],minLength:Object(L["minLength"])(6)},password:{required:L["required"],minLength:Object(L["minLength"])(6)},email:{required:L["required"],email:L["email"]}},methods:{register:function(){var e=this;this.$v.$touch(),this.$v.$invalid||this.loading||(this.loading=!0,k["c"].createUserWithEmailAndPassword(this.email,this.password).then((function(t){t.user.updateProfile({displayName:e.name}).then((function(){var e=t.user,n={uid:e.uid,displayName:e.displayName};k["d"].collection("users").doc(e.uid).set(n)}))})).catch((function(e){console.log(e.message)})).finally((function(){e.loading=!1})))}},computed:{nameErrors:function(){var e=[];return this.$v.name.$dirty?(!this.$v.name.required&&e.push("Name is required"),!this.$v.name.minLength&&e.push("Name must be at least 6 characters long"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.required&&e.push("Password is required"),!this.$v.password.minLength&&e.push("Password must be at least 6 characters long"),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.required&&e.push("Email is required"),!this.$v.email.email&&e.push("Enter a valid email"),e):e}}},T=N,M=n("8336"),R=n("62ad"),I=n("4bd4"),B=n("0fd9"),D=n("8654"),F=Object(l["a"])(T,q,j,!1,null,null,null),H=F.exports;h()(F,{VBtn:M["a"],VCol:R["a"],VForm:I["a"],VRow:B["a"],VTextField:D["a"]});var W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("welcome"),n("h6",{staticClass:"text-center font-weight-bold text-h6"},[e._v("Login")])],1),n("v-col",{staticClass:"text-center mb-4",attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{outlined:"",label:"Email",placeholder:"Enter Email","error-messages":e.emailErrors},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:function(){return e.$refs.password.focus()}.apply(null,arguments)}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{ref:"password",attrs:{outlined:"",label:"Password",placeholder:"Enter Password",type:"password",autocomplete:"off","error-messages":e.passwordErrors},on:{input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login.apply(null,arguments)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{attrs:{color:"primary",disabled:e.$v.$invalid||e.loading,loading:e.loading},on:{click:e.login}},[e._v("Login")]),n("p",{staticClass:"mt-3"},[e._v(" Does't have an account? "),n("router-link",{attrs:{to:"/register",replace:""}},[e._v("Register")])],1)],1)],1)},z=[],G={name:"Login",data:function(){return{email:"",password:"",loading:!1}},components:{Welcome:S},validations:{password:{required:L["required"],minLength:Object(L["minLength"])(6)},email:{required:L["required"],email:L["email"]}},methods:{login:function(){var e=this;this.$v.$invalid||this.loading||(this.loading=!0,k["c"].signInWithEmailAndPassword(this.email,this.password).catch((function(e){console.log(e.message)})).finally((function(){e.loading=!1})))}},computed:{passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.required&&e.push("Password is required"),!this.$v.password.minLength&&e.push("Password must be at least 6 characters long"),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.required&&e.push("Email is required"),!this.$v.email.email&&e.push("Enter a valid email"),e):e}}},K=G,J=Object(l["a"])(K,W,z,!1,null,null,null),Q=J.exports;h()(J,{VBtn:M["a"],VCol:R["a"],VRow:B["a"],VTextField:D["a"]}),r["a"].use(a["a"]);var X=[{path:"",name:"Home",redirect:function(){var e=i["a"].getters.currentUser;return e?"/chats":"/login"}},{path:"",name:"UnAuth",component:b,children:[{path:"register",name:"Register",component:H,meta:{guest:!0}},{path:"login",name:"Login",component:Q,meta:{guest:!0}}],meta:{guest:!0}},{path:"",name:"Auth",component:_,children:[{path:"chats",name:"Chats",component:function(){return Promise.all([n.e("chunk-0c6f621e"),n.e("chunk-eb2e469c"),n.e("chunk-0388ea28")]).then(n.bind(null,"c98b"))},meta:{requiresUser:!0},children:[{path:"users",name:"Users",component:function(){return Promise.all([n.e("chunk-0c6f621e"),n.e("chunk-c06d1b86")]).then(n.bind(null,"dbef"))},meta:{requiresUser:!0}},{path:":id",name:"Chat",component:function(){return Promise.all([n.e("chunk-0c6f621e"),n.e("chunk-eb2e469c"),n.e("chunk-80883c96")]).then(n.bind(null,"293a"))},meta:{requiresUser:!0}}]}],meta:{requiresUser:!0}}],Y=new a["a"]({routes:X});Y.beforeEach((function(e,t,n){var r,a;return null!==(r=e.meta)&&void 0!==r&&r.requiresUser?i["a"].getters.currentUser?void n():void n("/"):null!==(a=e.meta)&&void 0!==a&&a.guest&&i["a"].getters.currentUser?void n("/chats"):void n()}));t["a"]=Y},af24:function(e,t,n){"use strict";n("ece1")},b4ad:function(e,t,n){},e2e1:function(e,t,n){"use strict";n("3d39")},ece1:function(e,t,n){},ed08:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(e,t){if(!document.querySelector('style[id="'.concat(t,'"]'))){var n=document.querySelector('style[id="'.concat(t,'"]'))||document.createElement("style");n.id=t,n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),document.querySelector("body").appendChild(n)}},a=function(e){var t=document.querySelector('style[id="'.concat(e,'"]'));t?document.querySelector("body").removeChild(t):console.warn("Style element with ".concat(e," does not exist!"))}}});
//# sourceMappingURL=app.678060ac.js.map
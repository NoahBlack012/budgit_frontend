(function(e){function t(t){for(var n,s,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},s={app:0},r={app:0},i=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d0eaaac0"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"9e87178c"}[e]+".css",r=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===n||l===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete s[e],m.parentNode.removeChild(m),a(i)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){s[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}r[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"225a":function(e,t,a){"use strict";var n=a("746d"),s=a.n(n);s.a},"250c":function(e,t,a){},"3c08":function(e,t,a){"use strict";var n=a("52dc"),s=a.n(n);s.a},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="4678"},"52dc":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,s,r,i,o=a("2b0e"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},u=[],l=(a("034f"),a("2877")),d={},m=Object(l["a"])(d,c,u,!1,null,null,null),p=m.exports,f=(a("d3b7"),a("8c4f")),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Nav"),a("h1",[e._v("Home")]),a("div",{staticClass:"content"},[a("div",{staticClass:"items"},[a("RecentItems",{attrs:{id:"items"}})],1),a("div",{staticClass:"links"},[a("div",{attrs:{id:"links"}},[a("div",{staticClass:"budgetlink"},[a("router-link",{attrs:{to:"/budget",id:"link"}},[e._v("View Your Budget")])],1),a("div",{staticClass:"statslink"},[a("router-link",{attrs:{to:"/stats",id:"link"}},[e._v("View Insights About your Budget")])],1)])])])],1)},b=[],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"nav"}},[a("div",{staticClass:"navbar"},[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),a("router-link",{attrs:{to:"/budget"}},[e._v("Budget")]),a("router-link",{attrs:{to:"/stats"}},[e._v("Statistics")]),a("router-link",{attrs:{to:"/login"},on:{click:e.logout}},[e._v("Logout")])],1)])},g=[],j=a("5530"),_=a("2f62"),y={name:"Nav",methods:Object(j["a"])(Object(j["a"])({},Object(_["b"])(["loginUser"])),{},{logout:function(){this.loginUser(0),this.$router.push("/login")}})},k=y,w=(a("5b49"),Object(l["a"])(k,v,g,!1,null,null,null)),x=w.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"RecentItems"}},[a("h3",[e._v("Recent Items")]),e._l(e.items,(function(t){return a("div",{key:t.id,staticClass:"items"},[a("p",[e._v(" "+e._s(t.title)+" $"+e._s(t.value)+" ")])])}))],2)},C=[],$=(a("fb6a"),a("96cf"),a("1da1")),z=a("bc3a"),E=a.n(z),T={name:"RecentItems",data:function(){return{all_items:null,items:null}},computed:Object(_["c"])(["userid"]),created:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.userid||e.$router.push("/login"),t.next=3,E.a.post("".concat("https://nbbudgitbackend.herokuapp.com/api","/get_items"),{userid:e.userid,api_key:"x{lhtTaQz58QJ7ZK;a~`/t!:D"});case 3:a=t.sent,e.all_items=a.data.items,e.items=e.all_items.slice(e.all_items.length-3,e.all_items.length);case 6:case"end":return t.stop()}}),t)})))()}},P=T,A=Object(l["a"])(P,O,C,!1,null,"06ac6850",null),N=A.exports,R={name:"Home",components:{Nav:x,RecentItems:N},computed:Object(_["c"])(["userid"]),created:function(){this.userid||this.$router.push("/login")}},S=R,I=(a("fa1b"),Object(l["a"])(S,h,b,!1,null,"5ae25de7",null)),Q=I.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"budget"},[a("Nav"),a("h1",[e._v("Budget")]),a("div",{staticClass:"container"},[a("div",{staticClass:"new-item"},[a("AddItem",{attrs:{id:"form",categories:e.categories},on:{"add-item":e.additem}}),a("AddCategory",{attrs:{id:"addcategory"},on:{"add-category":e.add_category}})],1),a("div",{staticClass:"items"},[a("BudgetItems",{attrs:{items:e.items},on:{"del-item":e.deleteitem}}),a("h3",[e._v("Total: $"+e._s(e.total))])],1)])],1)},D=[],U=(a("99af"),a("4de4"),a("b85c")),q=a("2909"),J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.items,(function(t){return a("div",{key:t.id,staticClass:"items"},[a("BudgetItem",{attrs:{item:t},on:{"del-item":function(a){return e.$emit("del-item",t.id)}}})],1)})),0)},K=[],L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"budgetitem"},[a("p",[e._v(" "+e._s(e.item.title)+" "),a("span",{staticStyle:{color:"green"}},[e._v("$"+e._s(e.item.value)+" ")]),a("span",{attrs:{id:"cat"}},[e._v(e._s(e.item.category))]),a("button",{staticClass:"delete",on:{click:function(t){return e.$emit("del-item",e.item.id)}}},[e._v("X")])])])},M=[],Z={name:"BudgetItem",props:["item"]},H=Z,F=(a("ec1f"),Object(l["a"])(H,L,M,!1,null,"708858bd",null)),V=F.exports,G={name:"BudgetItems",components:{BudgetItem:V},props:["items"]},X=G,Y=Object(l["a"])(X,J,K,!1,null,"ef972672",null),W=Y.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"additem"},[a("div",{staticClass:"addform"},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.formsubmit(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Item"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"text",name:"value",placeholder:"Amount"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),a("br"),a("select",{directives:[{name:"model",rawName:"v-model",value:e.category,expression:"category"}],attrs:{name:"category",id:"input"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.category=t.target.multiple?a:a[0]}}},e._l(e.categories,(function(t){return a("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0),a("br"),a("input",{attrs:{type:"submit",value:"Create",id:"button"}}),e.formsubmited?a("div",{staticClass:"errors"},[e.$v.value.numeric?e._e():a("div",{staticClass:"error"},[e._v("Amount Must Be a Number")]),e.$v.value.required?e._e():a("div",{staticClass:"error"},[e._v("Please Enter an Amount")]),e.$v.title.required?e._e():a("div",{staticClass:"error"},[e._v("Please Enter a Title")])]):e._e()])])])},te=[],ae=a("b5ae"),ne={name:"AddItem",components:{},data:function(){return{title:"",value:"",formsubmited:!1}},props:{categories:Array},validations:{title:{required:ae["required"]},value:{required:ae["required"],numeric:ae["numeric"]}},computed:Object(_["c"])(["userid"]),methods:{new_category:function(e){this.categories=e},formsubmit:function(){this.formsubmited=!0,this.$v.$touch(),this.$v.$invalid||this.additem()},additem:function(){var e={title:this.title,value:this.value,category:this.category};E.a.post("".concat("https://nbbudgitbackend.herokuapp.com/api","/add_item"),{userid:this.userid,api_key:"x{lhtTaQz58QJ7ZK;a~`/t!:D",new_item:e}).then((function(t){return e.id=t.id})).catch((function(e){return console.error(e)})),this.title="",this.value="",this.category="",this.formsubmited=!1,this.$emit("add-item",e)}},created:function(){}},se=ne,re=(a("a80d"),Object(l["a"])(se,ee,te,!1,null,"739c0714",null)),ie=re.exports,oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"add_category"}},[a("form",{attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.add_cat(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.new_category,expression:"new_category"}],attrs:{type:"text",placeholder:"Add Another Category"},domProps:{value:e.new_category},on:{input:function(t){t.target.composing||(e.new_category=t.target.value)}}}),a("br"),a("input",{attrs:{type:"submit",value:"+",id:"button"}})])])},ce=[],ue={name:"AddCategory",data:function(){return{formsubmited:!1}},validations:{new_category:{required:ae["required"]}},computed:Object(_["c"])(["userid"]),methods:{add_cat:function(){var e=this;this.$v.$touch(),this.formsubmited=!0,this.$v.$invalid||E.a.post("".concat("https://nbbudgitbackend.herokuapp.com/api","/add_category"),{new_category:this.new_category,api_key:"x{lhtTaQz58QJ7ZK;a~`/t!:D",userid:this.userid}).then((function(t){var a=t.data.categories;e.$emit("add-category",a)})).catch((function(e){return console.error(e)})),this.new_category=""}}},le=ue,de=(a("3c08"),Object(l["a"])(le,oe,ce,!1,null,"63a13077",null)),me=de.exports,pe={name:"Budget",components:{Nav:x,BudgetItems:W,AddItem:ie,AddCategory:me},data:function(){return{items:[],total:null,categories:[]}},computed:Object(_["c"])(["userid"]),methods:{additem:function(e){this.all_items=[].concat(Object(q["a"])(this.all_items),[e]),this.items=this.all_items.slice(this.all_items.length-5,this.all_items.length),this.getTotal()},deleteitem:function(e){this.all_items=this.all_items.filter((function(t){return t.id!==e})),this.items=this.all_items.slice(this.all_items.length-5,this.all_items.length),E.a.post("".concat("https://nbbudgitbackend.herokuapp.com/api","/delete_item"),{userid:this.userid,api_key:"x{lhtTaQz58QJ7ZK;a~`/t!:D",deleted_id:e}).then().catch((function(e){return console.error(e)})),this.getTotal()},getTotal:function(){this.total=0;var e,t=Object(U["a"])(this.all_items);try{for(t.s();!(e=t.n()).done;){var a=e.value,n=a.value;this.total+=parseInt(n)}}catch(s){t.e(s)}finally{t.f()}},add_category:function(e){this.categories=e}},mounted:function(){this.getTotal()},created:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){var a,n,s,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.userid||e.$router.push("/login"),t.next=3,E.a.post("".concat("https://nbbudgitbackend.herokuapp.com/api","/get_items"),{userid:e.userid,api_key:"x{lhtTaQz58QJ7ZK;a~`/t!:D"});case 3:return a=t.sent,e.all_items=a.data.items,e.items=e.all_items.slice(e.all_items.length-5,e.all_items.length),e.getTotal(),t.next=9,E.a.post("".concat("https://nbbudgitbackend.herokuapp.com/api","/get_categories"),{userid:e.userid,api_key:"x{lhtTaQz58QJ7ZK;a~`/t!:D"});case 9:n=t.sent,s=Object(U["a"])(n.data.categories);try{for(s.s();!(r=s.n()).done;)i=r.value,e.categories.push(i)}catch(o){s.e(o)}finally{s.f()}case 12:case"end":return t.stop()}}),t)})))()}},fe=pe,he=(a("225a"),Object(l["a"])(fe,B,D,!1,null,"b676e3ee",null)),be=he.exports,ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stats"},[a("Nav"),a("h1",[e._v("Statistics")]),a("div",{staticClass:"graphs"},[a("div",{staticClass:"pietotals"},[a("PieTotals",{staticClass:"chart",attrs:{id:"expense_category"}})],1),a("div",{staticClass:"monthlyexpenses"},[a("MonthlyExpenses",{staticClass:"chart",attrs:{id:"monthly-expenses"}})],1)])],1)},ge=[],je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"pietotals"}},[e.loaded?a("pie-chart",{attrs:{chartdata:e.chartdata,options:e.options,id:"expense_category"}}):e._e()],1)},_e=[],ye=a("1fca"),ke={extends:ye["b"],props:{chartdata:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartdata,{responsive:!0,fontColor:"white",legend:{labels:{fontColor:"white"}}})}},we=ke,xe=Object(l["a"])(we,n,s,!1,null,null,null),Oe=xe.exports,Ce={name:"PieTotals",components:{PieChart:Oe},computed:Object(_["c"])(["userid"]),data:function(){return{loaded:!1,chartdata:null,options:null}},mounted:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.userid||e.$router.push("/login"),e.loaded=!1,t.prev=2,t.next=5,E.a.post("".concat("https://nbbudgitbackend.herokuapp.com/api","/get_pie_totals"),{userid:e.userid,api_key:"x{lhtTaQz58QJ7ZK;a~`/t!:D"});case 5:a=t.sent,e.chartdata=a.data.totals_datasets,e.options={tooltips:{enabled:!0,mode:"single",callbacks:{title:function(e,t){return t["labels"][e[0]["index"]]},label:function(e,t){return"$"+t["datasets"][0]["data"][e["index"]]}}},responsive:!0,maintainAspectRatio:!1},e.loaded=!0,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()}},$e=Ce,ze=Object(l["a"])($e,je,_e,!1,null,null,null),Ee=ze.exports,Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"monthlyexpenses"}},[e.loaded?a("bar-chart",{attrs:{chartdata:e.chartdata,options:e.options}}):e._e()],1)},Pe=[],Ae=(a("b680"),{extends:ye["a"],name:"bar-chart",props:{chartdata:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartdata,{responsive:!0,fontColor:"white",legend:{labels:{fontColor:"white"}},scales:{yAxes:[{ticks:{fontColor:"white",callback:function(e){return"$"+e.toFixed(2)}}}],xAxes:[{ticks:{fontColor:"white"}}]}})}}),Ne=Ae,Re=Object(l["a"])(Ne,r,i,!1,null,null,null),Se=Re.exports,Ie={name:"MonthlyExpenses",components:{BarChart:Se},data:function(){return{loaded:!1,chartdata:null,options:null}},computed:Object(_["c"])(["userid"]),mounted:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.userid||e.$router.push("/login"),e.loaded=!1,t.prev=2,t.next=5,E.a.post("".concat("https://nbbudgitbackend.herokuapp.com/api","/get_monthly_bar_totals"),{userid:e.userid,api_key:"x{lhtTaQz58QJ7ZK;a~`/t!:D"});case 5:a=t.sent,e.chartdata=a.data.bar_data,e.options={scales:{yAxes:[{ticks:{callback:function(e){return"$"+e}}}]},tooltips:{enabled:!0,mode:"single",callbacks:{label:function(e){return"$"+e.yLabel}}},responsive:!0,maintainAspectRatio:!1},e.loaded=!0,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()}},Qe=Ie,Be=Object(l["a"])(Qe,Te,Pe,!1,null,null,null),De=Be.exports,Ue={name:"Stats",components:{Nav:x,PieTotals:Ee,MonthlyExpenses:De},computed:Object(_["c"])(["userid"]),created:function(){this.userid||this.$router.push("/login")}},qe=Ue,Je=(a("b42a"),Object(l["a"])(qe,ve,ge,!1,null,"5748c202",null)),Ke=Je.exports,Le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"form"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.signup(t)}}},[a("h1",{attrs:{id:"signintitle"}},[e._v("Sign Up")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"username",id:"username",placeholder:"Username",autocomplete:"off"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",id:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm_password,expression:"confirm_password"}],attrs:{type:"password",name:"confirm_password",id:"confirm_password",placeholder:"Confirm Password"},domProps:{value:e.confirm_password},on:{input:function(t){t.target.composing||(e.confirm_password=t.target.value)}}}),a("br"),a("input",{attrs:{type:"submit",value:"SIGNUP",id:"button"}})]),e.non_password_match?a("div",[e._v("The passwords entered do not match")]):e._e(),e.username_taken?a("div",[e._v("That username is already taken")]):e._e()]),a("div",{staticClass:"login"},[a("div",{staticClass:"logincontent"},[e._m(0),a("router-link",{attrs:{to:"/login",id:"link"}},[e._v("Return to Login")])],1)])])},Me=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Signup now and start to"),a("br"),e._v("keep track of your"),a("br"),e._v("finances like never before")])}],Ze={name:"Signup",data:function(){return{username:"",password:"",confirm_password:"",non_password_match:!1,username_taken:!1}},methods:Object(j["a"])(Object(j["a"])({},Object(_["b"])(["loginUser"])),{},{signup:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.username_taken=!1,e.non_password_match=!1,e.password===e.confirm_password){t.next=6;break}e.non_password_match=!0,t.next=10;break;case 6:return t.next=8,E.a.post("".concat("https://nbbudgitbackend.herokuapp.com/api","/signup"),{api_key:"x{lhtTaQz58QJ7ZK;a~`/t!:D",username:e.username,password:e.password});case 8:a=t.sent,a.data.user_created?(e.loginUser(a.data.userid),e.$router.push("/")):e.username_taken=!0;case 10:case"end":return t.stop()}}),t)})))()}})},He=Ze,Fe=Object(l["a"])(He,Le,Me,!1,null,null,null),Ve=Fe.exports;o["a"].use(f["a"]);var Ge=[{path:"/",name:"Home",component:Q},{path:"/login",name:"Login",component:function(){return a.e("about").then(a.bind(null,"a55b"))}},{path:"/signup",name:"Signup",component:Ve},{path:"/budget",name:"Budget",component:be},{path:"/stats",name:"Stats",component:Ke}],Xe=new f["a"]({mode:"history",routes:Ge}),Ye=Xe,We={userid:null},et={userid:function(e){return e.userid}},tt={loginUser:function(e,t){return Object($["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=e.commit,n("setUserid",t);case 2:case"end":return a.stop()}}),a)})))()}},at={setUserid:function(e,t){e.userid=t}},nt={state:We,getters:et,actions:tt,mutations:at};o["a"].use(_["a"]);var st=new _["a"].Store({modules:{user:nt}}),rt=a("1dce"),it=a.n(rt);o["a"].use(it.a),o["a"].config.productionTip=!1,new o["a"]({store:st,router:Ye,render:function(e){return e(p)}}).$mount("#app")},"58de":function(e,t,a){},"5b49":function(e,t,a){"use strict";var n=a("58de"),s=a.n(n);s.a},"746d":function(e,t,a){},8271:function(e,t,a){},"85ec":function(e,t,a){},a80d:function(e,t,a){"use strict";var n=a("d39a"),s=a.n(n);s.a},b42a:function(e,t,a){"use strict";var n=a("250c"),s=a.n(n);s.a},ca28:function(e,t,a){},d39a:function(e,t,a){},ec1f:function(e,t,a){"use strict";var n=a("8271"),s=a.n(n);s.a},fa1b:function(e,t,a){"use strict";var n=a("ca28"),s=a.n(n);s.a}});
//# sourceMappingURL=app.d79f671f.js.map
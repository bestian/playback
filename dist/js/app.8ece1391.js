(function(){"use strict";var t={582:function(t,e,n){var r=n(471),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"ui menu thin-only"},[e("router-link",{staticClass:"item",attrs:{to:"/about"}},[e("i",{staticClass:"user icon"})]),e("router-link",{staticClass:"item",attrs:{to:"/one_to_one"}},[e("i",{staticClass:"sync icon"})]),e("router-link",{staticClass:"item",attrs:{to:"/pages"}},[e("i",{staticClass:"book icon"})]),e("router-link",{staticClass:"item",attrs:{to:"/4elems"}},[e("i",{staticClass:"music icon"})]),e("router-link",{staticClass:"item",attrs:{to:"/free"}},[e("i",{staticClass:"birthday cake icon"})])],1),e("div",{staticClass:"ui labeled icon menu fat-only"},[e("router-link",{staticClass:"item",attrs:{to:"/"}},[e("i",{staticClass:"home icon"}),t._v(" 首頁 ")]),e("router-link",{staticClass:"item",attrs:{to:"/about"}},[e("i",{staticClass:"user icon"}),t._v(" 流動塑像 ")]),e("router-link",{staticClass:"item",attrs:{to:"/one_to_one"}},[e("i",{staticClass:"sync icon"}),t._v(" 一對對 ")]),e("router-link",{staticClass:"item",attrs:{to:"/pages"}},[e("i",{staticClass:"book icon"}),t._v(" 一頁頁 ")]),e("router-link",{staticClass:"item",attrs:{to:"/4elems"}},[e("i",{staticClass:"music icon"}),t._v(" 四元素 ")]),e("router-link",{staticClass:"item",attrs:{to:"/free"}},[e("i",{staticClass:"birthday cake icon"}),t._v(" 自由呈現 ")])],1),e("router-view")],1)},a=[],i=n(656),s={},u=(0,i.A)(s,o,a,!1,null,null,null),c=u.exports,l=n(173),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("HelloWorld",{attrs:{msg:"playback形式備忘"}})],1)},d=[],p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[t._m(0),e("h2",{staticClass:"ui header"},[t._v("最新消息")]),t._l(t.announces,(function(n,r){return e("p",{staticClass:"announce"},[n.h?e("a",{attrs:{href:n.h,target:"_blank",rel:"noopener norefferer"}},[t._v(t._s(n.date)+"："+t._s(n.text)+" ")]):n.r?e("span",{attrs:{to:n.r}},[t._v(t._s(n.date)+"："+t._s(n.text)+" ")]):e("span",[t._v(" "+t._s(n.date)+"："+t._s(n.text)+" ")])])})),e("div",{staticClass:"ui vertical buttons"},[e("a",{staticClass:"ui large purple button",attrs:{href:"https://docs.google.com/document/d/17lp1gGyKwxt8gU64gMlOwPE-_p5lQeWaZ-8g8T7KsDU/edit?usp=sharing",target:"_blank",rel:"noopener norefferer"}},[t._v("Playback精華")]),e("router-link",{staticClass:"ui large pink button",attrs:{to:"/about"}},[t._v("從流動塑像開始")]),e("a",{staticClass:"ui large green button",attrs:{href:"https://line.me/ti/g/6n2qAsibyY",target:"_blank",rel:"noopener norefferer"}},[t._v("【從心出發】Line群組")])],1),e("img",{staticClass:"qr",attrs:{src:n(773)}}),e("audio",{attrs:{id:"background-music",src:"/Shiva.m4a",autoplay:"",loop:""}})],2)},m=[function(){var t=this,e=t._self._c;return e("h1",[e("span",{staticClass:"fat-only"},[t._v("歡迎來到")]),t._v("【從心出發】Playback劇場")])}];const h=[{date:"2024-07-19",text:"八月工作坊(08/08上午, 08/22上午, 永安藝文館)開放報名囉，名額有限，額滿為止~~按此瞭解更多",h:"https://forms.gle/6yQVzVvWew6vQ1eH8"}];var v={name:"HelloWorld",props:{msg:String},data(){return{announces:h}}},b=v,g=(0,i.A)(b,p,m,!1,null,"36d45082",null),y=g.exports,C={name:"Home",components:{HelloWorld:y}},_=C,k=(0,i.A)(_,f,d,!1,null,null,null),w=k.exports;r.Ay.use(l.Ay);const A=[{path:"/",name:"Home",component:w},{path:"/about",name:"Statues",component:()=>n.e(646).then(n.bind(n,646))},{path:"/one_to_one",name:"OneToOne",component:()=>n.e(226).then(n.bind(n,226))},{path:"/pages",name:"Pages",component:()=>n.e(258).then(n.bind(n,258))},{path:"/4elems",name:"4Elems",component:()=>n.e(648).then(n.bind(n,648))},{path:"/free",name:"Free",component:()=>n.e(96).then(n.bind(n,96))}],O=new l.Ay({mode:"history",routes:A});var x=O;r.Ay.config.productionTip=!1,new r.Ay({router:x,render:t=>t(c)}).$mount("#app")},773:function(t,e,n){t.exports=n.p+"img/heart_playback_qr.11d53602.jpeg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{96:"514920b3",226:"f22c5280",258:"c0c5799a",646:"56e59d04",648:"38882564"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{96:"78323910",226:"ed73ddbe",258:"401c04e3",646:"780c4182",648:"e2882382"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="playback:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=r),t[r]=[o];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var s=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var r=n&&n.type,s=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+": "+s+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=s,i.parentNode&&i.parentNode.removeChild(i),a(u)}};return i.onerror=i.onload=s,i.href=e,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(e(i,s))return o();t(r,s,null,o,a)}))},o={524:0};n.f.miniCss=function(t,e){var n={96:1,226:1,258:1,646:1,648:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(e&&e(r);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkplayback"]=self["webpackChunkplayback"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(582)}));r=n.O(r)})();
//# sourceMappingURL=app.8ece1391.js.map
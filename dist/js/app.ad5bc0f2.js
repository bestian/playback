(function(){"use strict";var t={61:function(t,e,n){var a=n(471),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"ui menu thin-only",attrs:{id:"thin-nav"}},[e("button",{staticClass:"no-border ui item",on:{click:t.toggleSidebar}},[e("i",{staticClass:"icon bars"})]),e("router-link",{staticClass:"item",attrs:{to:"/"}},[e("i",{staticClass:"home icon"})]),e("router-link",{staticClass:"item",attrs:{to:"/core"}},[e("i",{staticClass:"suitcase icon"}),t._v("精華")]),e("router-link",{staticClass:"item",attrs:{to:"/courses"}},[e("i",{staticClass:"users icon"}),t._v("課程")]),e("router-link",{staticClass:"item",attrs:{to:"/faq"}},[e("i",{staticClass:"info icon"}),t._v("問題")])],1),e("div",{staticClass:"ui labeled icon menu fat-only"},[e("button",{staticClass:"no-border ui item",on:{click:t.toggleSidebar}},[e("i",{staticClass:"icon bars"}),t._v("側欄")]),e("router-link",{staticClass:"item",attrs:{to:"/"}},[e("i",{staticClass:"home icon"}),t._v("首頁")]),e("router-link",{staticClass:"item",attrs:{to:"/core"}},[e("i",{staticClass:"suitcase icon"}),t._v("精華")]),e("router-link",{staticClass:"item",attrs:{to:"/courses"}},[e("i",{staticClass:"users icon"}),t._v("課程")]),e("router-link",{staticClass:"item",attrs:{to:"/faq"}},[e("i",{staticClass:"info icon"}),t._v("常見問題")]),e("router-link",{staticClass:"item",attrs:{to:"/about"}},[e("i",{staticClass:"user icon"}),t._v("流動塑像")])],1),e("div",{staticClass:"ui sidebar vertical menu",class:{hidden:!t.sidebarVisible},attrs:{id:"side-menu"}},[e("router-link",{staticClass:"item",attrs:{to:"/",exact:"",name:"home"}},[e("i",{staticClass:"home icon"}),t._v("首頁")]),e("router-link",{staticClass:"item",attrs:{to:"/core"}},[e("i",{staticClass:"suitcase icon"}),t._v("精華")]),e("router-link",{staticClass:"item",attrs:{to:"/courses"}},[e("i",{staticClass:"users icon"}),t._v("課程")]),e("router-link",{staticClass:"item",attrs:{to:"/faq"}},[e("i",{staticClass:"info icon"}),t._v("常見問題")]),e("router-link",{staticClass:"item",attrs:{to:"/about"}},[e("i",{staticClass:"user icon"}),e("span",[t._v("流動塑像")])]),e("router-link",{staticClass:"item",attrs:{to:"/one_to_one"}},[e("i",{staticClass:"sync icon"}),e("span",[t._v("一對對")])]),e("router-link",{staticClass:"item",attrs:{to:"/pages"}},[e("i",{staticClass:"book icon"}),e("span",[t._v("一頁頁")])]),e("router-link",{staticClass:"item",attrs:{to:"/4elems"}},[e("i",{staticClass:"music icon"}),e("span",[t._v("四元素")])]),e("router-link",{staticClass:"item",attrs:{to:"/free"}},[e("i",{staticClass:"birthday cake icon"}),e("span",[t._v("自由呈現")])]),e("router-link",{staticClass:"item",attrs:{to:"/book"}},[e("i",{staticClass:"book icon"}),e("span",[t._v("相關書籍")])])],1),e("div",{staticClass:"ui sidebar bg",class:{hidden:!t.sidebarVisible},on:{click:t.toggleSidebar}}),e("router-view")],1)},r=[],s={name:"PlayBack",data(){return{sidebarVisible:!1}},methods:{toggleSidebar(){this.sidebarVisible=!this.sidebarVisible}}},o=s,c=n(656),l=(0,c.A)(o,i,r,!1,null,null,null),u=l.exports,d=n(173),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("HelloWorld",{attrs:{msg:"playback形式備忘"}})],1)},v=[],m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("div",{staticClass:"ui segment container"},[t._m(0),e("h2",{staticClass:"ui header"},[t._v("最新消息")]),t._l(t.announces,(function(n,a){return e("p",{staticClass:"announce"},[n.h?e("a",{attrs:{href:n.h,target:"_blank",rel:"noopener norefferer"},on:{click:function(e){return t.trackEvent("external_link",n.h)}}},[t._v(t._s(n.date)+"："),e("b",[t._v(t._s(n.text)+" ")])]):n.r?e("span",{attrs:{to:n.r},on:{click:function(e){return t.trackEvent("internal_link",n.r)}}},[t._v(t._s(n.date)+"："),e("b",[t._v(t._s(n.text)+" ")])]):e("span",[t._v(" "+t._s(n.date)+"："),e("b",[t._v(t._s(n.text)+" ")])])])})),e("div",{staticClass:"ui vertical buttons"},[e("router-link",{staticClass:"ui large purple button",attrs:{to:"/core"},on:{click:function(e){return t.trackEvent("external_link","Google Doc")}}},[t._v("Playback精華")]),e("router-link",{staticClass:"ui large pink button",attrs:{to:"/about"},on:{click:function(e){return t.trackEvent("internal_link","/about")}}},[t._v("從流動塑像開始")]),e("router-link",{staticClass:"ui large blue button",attrs:{to:"/faq"},on:{click:function(e){return t.trackEvent("internal_link","/faq")}}},[t._v("常見問題FAQ")])],1),e("h2",{staticClass:"ui header"},[t._v("Playback同理心回饋劇簡介：")]),e("p",[t._v("Playback同理心回饋劇(英文: Playback Theatre)是一種即興的互動式劇場，其演出並無預定的劇本，透過參與者口述的親身經驗，自願分享的心情和故事，在主持人的引導下，用即興有結構的表演形式，將故事呈現出來，並把演出回送給說故事的人和所有參與者。")]),e("br"),e("p",[t._v("這是一份相互分享的珍貴禮物，在同理心回饋劇場的尊重與包容裡，共創安全的支持空間，能讓所有參與者充份體驗真實生命經驗交會的感動。❤️‍")])],2)])},b=[function(){var t=this,e=t._self._c;return e("h2",{staticClass:"ui header"},[e("span",{staticClass:"fat-only"},[t._v("歡迎來到")]),t._v("【從心出發】Playback劇場"),e("div",{staticClass:"sub header left aligned"},[t._v("「每個人的生命，都是可歌可泣的故事。"),e("br"),t._v("可歌，是因為有力量；可泣，是因為有磨難。"),e("br"),t._v("聆聽自我，面對真實，專注當下，生命便會成長」-- 小巴")])])}];const p=[];var h={name:"HelloWorld",props:{msg:String},data(){return{announces:p}},methods:{trackEvent(t,e){this.$gtag.event("click",{event_category:t,event_label:e})}}},k=h,C=(0,c.A)(k,m,b,!1,null,"6c4ef992",null),_=C.exports,g={name:"Home",components:{HelloWorld:_}},y=g,A=(0,c.A)(y,f,v,!1,null,null,null),w=A.exports;a.Ay.use(d.Ay);const E=[{path:"/",name:"Home",component:w},{path:"/about",name:"Statues",component:()=>n.e(646).then(n.bind(n,646))},{path:"/one_to_one",name:"OneToOne",component:()=>n.e(226).then(n.bind(n,226))},{path:"/pages",name:"Pages",component:()=>n.e(258).then(n.bind(n,258))},{path:"/4elems",name:"4Elems",component:()=>n.e(648).then(n.bind(n,648))},{path:"/free",name:"Free",component:()=>n.e(96).then(n.bind(n,96))},{path:"/faq",name:"FAQ",component:()=>n.e(590).then(n.bind(n,590))},{path:"/courses",name:"Courses",component:()=>n.e(601).then(n.bind(n,601))},{path:"/core",name:"Core",component:()=>n.e(667).then(n.bind(n,667))},{path:"/lev1",name:"Lev1",component:()=>n.e(204).then(n.bind(n,204))},{path:"/book",name:"Book",component:()=>n.e(145).then(n.bind(n,145))}],O=new d.Ay({mode:"history",routes:E});var S=O,x=n(73);a.Ay.config.productionTip=!1,a.Ay.use(x.Ay,{config:{id:"G-DWBX48QTJP",params:{send_page_view:!1}}},S),new a.Ay({router:S,render:t=>t(u)}).$mount("#app")}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,r){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],r=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(o=!1,r<s&&(s=r));if(o){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,i,r]}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{96:"514920b3",145:"a764c4ff",204:"30a3ab3d",226:"f22c5280",258:"c0c5799a",590:"ba8318b1",601:"971b2efd",646:"56e59d04",648:"38882564",667:"8b397e36"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{96:"78323910",145:"d8d31929",204:"ce4584d6",226:"ed73ddbe",258:"401c04e3",590:"e5caddb9",601:"05af2ac2",646:"780c4182",648:"e2882382",667:"2cf49bc6"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="playback:";n.l=function(a,i,r,s){if(t[a])t[a].push(i);else{var o,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+r){o=d;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+r),o.src=a),t[a]=[i];var f=function(e,n){o.onerror=o.onload=null,clearTimeout(v);var i=t[a];if(delete t[a],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,i,r){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",n.nc&&(s.nonce=n.nc);var o=function(n){if(s.onerror=s.onload=null,"load"===n.type)i();else{var a=n&&n.type,o=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+": "+o+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=o,s.parentNode&&s.parentNode.removeChild(s),r(c)}};return s.onerror=s.onload=o,s.href=e,a?a.parentNode.insertBefore(s,a.nextSibling):document.head.appendChild(s),s},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===t||r===e))return i}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){i=s[a],r=i.getAttribute("data-href");if(r===t||r===e)return i}},a=function(a){return new Promise((function(i,r){var s=n.miniCssF(a),o=n.p+s;if(e(s,o))return i();t(a,o,null,i,r)}))},i={524:0};n.f.miniCss=function(t,e){var n={96:1,145:1,204:1,226:1,258:1,590:1,601:1,646:1,648:1,667:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=a(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,a){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(n,a){i=t[e]=[n,a]}));a.push(i[2]=r);var s=n.p+n.u(e),o=new Error,c=function(a){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var r=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",o.name="ChunkLoadError",o.type=r,o.request=s,i[1](o)}};n.l(s,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,r,s=a[0],o=a[1],c=a[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(c)var u=c(n)}for(e&&e(a);l<s.length;l++)r=s[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},a=self["webpackChunkplayback"]=self["webpackChunkplayback"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(61)}));a=n.O(a)})();
//# sourceMappingURL=app.ad5bc0f2.js.map
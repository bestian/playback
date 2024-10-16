(function(){"use strict";var t={517:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"keep-neutral"},[e("div",{staticClass:"card-container"},[e("div",{staticClass:"ui row img-container"},[e("i",{staticClass:"chevron left icon",on:{click:t.prevCard}}),e("transition-group",{attrs:{name:"fade",tag:"div",id:"group"}},t._l(t.cards,(function(n,a){return e("img",{directives:[{name:"show",rawName:"v-show",value:t.randomCardIndex===a,expression:"randomCardIndex === index"}],key:n,staticClass:"card-image",attrs:{src:`/img/keep-nuetral/${n}.webp`,alt:n},on:{click:t.nextCard}})})),0),e("i",{staticClass:"chevron right icon",on:{click:t.nextCard}})],1),e("div",{staticClass:"ui row"},[e("p",{staticClass:"card-text"},[t._v(t._s(t.cards[t.randomCardIndex]))])])])])},r=[],s=n(555),i={name:"KeepNeutral",data(){return{cards:s.k,randomCardIndex:0}},mounted(){setInterval(this.nextCard,5e3)},methods:{prevCard(){this.randomCardIndex=(this.randomCardIndex-1+this.cards.length)%this.cards.length},nextCard(){this.randomCardIndex=(this.randomCardIndex+1)%this.cards.length}},created(){this.randomCardIndex=Math.floor(Math.random()*this.cards.length)}},o=i,c=n(656),l=(0,c.A)(o,a,r,!1,null,"5b179edc",null),u=l.exports},555:function(t,e,n){n.d(e,{k:function(){return a}});const a=["專注聆聽","保持中觀","持守界限","放下評斷","活在當下","當一面鏡子","讓感受流動","跳出框架","與變化共存","身心一體","相信自己","將錯就錯","信任同伴","美化空間","釋放能量"]},364:function(t,e,n){var a=n(471),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"ui menu thin-only",attrs:{id:"thin-nav"}},[e("button",{staticClass:"no-border ui item",on:{click:t.toggleSidebar}},[e("i",{staticClass:"icon bars"})]),e("router-link",{staticClass:"item",attrs:{to:"/"}},[e("i",{staticClass:"home icon"})]),e("router-link",{staticClass:"item",attrs:{to:"/courses"}},[e("i",{staticClass:"users icon"}),t._v("課程")]),e("router-link",{staticClass:"item",attrs:{to:"/act_history"}},[e("i",{staticClass:"redo icon"}),t._v("活動回顧")]),e("router-link",{staticClass:"item",attrs:{to:"/faq"}},[e("i",{staticClass:"info icon"}),t._v("問題")])],1),e("div",{staticClass:"ui labeled icon menu fat-only"},[e("button",{staticClass:"no-border ui item",on:{click:t.toggleSidebar}},[e("i",{staticClass:"icon bars"}),t._v("側欄")]),e("router-link",{staticClass:"item",attrs:{to:"/"}},[e("i",{staticClass:"home icon"}),t._v("首頁")]),e("router-link",{staticClass:"item",attrs:{to:"/courses"}},[e("i",{staticClass:"users icon"}),t._v("課程")]),e("router-link",{staticClass:"item",attrs:{to:"/act_history"}},[e("i",{staticClass:"redo icon"}),t._v("活動回顧")]),e("router-link",{staticClass:"item",attrs:{to:"/core"}},[e("i",{staticClass:"suitcase icon"}),t._v("精華")]),e("router-link",{staticClass:"item",attrs:{to:"/book"}},[e("i",{staticClass:"book icon"}),t._v("相關書籍")]),e("router-link",{staticClass:"item",attrs:{to:"/faq"}},[e("i",{staticClass:"info icon"}),t._v("常見問題")])],1),e("div",{staticClass:"ui sidebar vertical menu",class:{hidden:!t.sidebarVisible},attrs:{id:"side-menu"}},[e("router-link",{staticClass:"item",attrs:{to:"/",exact:"",name:"home"}},[e("i",{staticClass:"home icon"}),t._v("首頁")]),e("router-link",{staticClass:"item",attrs:{to:"/core"}},[e("i",{staticClass:"suitcase icon"}),t._v("精華")]),e("router-link",{staticClass:"item",attrs:{to:"/courses"}},[e("i",{staticClass:"users icon"}),t._v("課程")]),e("router-link",{staticClass:"item",attrs:{to:"/act_history"}},[e("i",{staticClass:"redo icon"}),t._v("活動回顧")]),e("router-link",{staticClass:"item",attrs:{to:"/faq"}},[e("i",{staticClass:"info icon"}),t._v("常見問題")]),e("router-link",{staticClass:"item",attrs:{to:"/statues"}},[e("i",{staticClass:"users icon"}),e("span",[t._v("流動塑像")])]),e("router-link",{staticClass:"item",attrs:{to:"/one_to_one"}},[e("i",{staticClass:"sync icon"}),e("span",[t._v("一對對")])]),e("router-link",{staticClass:"item",attrs:{to:"/pages"}},[e("i",{staticClass:"book icon"}),e("span",[t._v("一頁頁")])]),e("router-link",{staticClass:"item",attrs:{to:"/4elems"}},[e("i",{staticClass:"music icon"}),e("span",[t._v("四元素")])]),e("router-link",{staticClass:"item",attrs:{to:"/free"}},[e("i",{staticClass:"birthday cake icon"}),e("span",[t._v("自由呈現")])]),e("router-link",{staticClass:"item",attrs:{to:"/book"}},[e("i",{staticClass:"book icon"}),e("span",[t._v("相關書籍")])])],1),e("div",{staticClass:"ui sidebar bg",class:{hidden:!t.sidebarVisible},on:{click:t.toggleSidebar}}),e("router-view")],1)},s=[],i={name:"PlayBack",data(){return{sidebarVisible:!1}},methods:{toggleSidebar(){this.sidebarVisible=!this.sidebarVisible}}},o=i,c=n(656),l=(0,c.A)(o,r,s,!1,null,null,null),u=l.exports,d=n(173),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("HelloWorld",{attrs:{msg:"playback形式備忘"}})],1)},m=[],h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("div",{staticClass:"ui segment container"},[e("iframe",{staticClass:"thin-only",attrs:{src:"https://docs.google.com/presentation/d/1yP9zCer_5hOyJ4_xb06395_IqAeKlpfjFL2bnyD0PQQ/embed?start=true&loop=true&delayms=3000",frameborder:"0",width:"320",height:"240",allow:"autoplay",autoplay:"true",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"}}),e("iframe",{staticClass:"fat-only",attrs:{src:"https://docs.google.com/presentation/d/1yP9zCer_5hOyJ4_xb06395_IqAeKlpfjFL2bnyD0PQQ/embed?start=true&loop=true&delayms=3000",frameborder:"0",width:"640",height:"480",allow:"autoplay",autoplay:"true",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"}}),e("h2",{staticClass:"ui header"}),e("h2",{directives:[{name:"show",rawName:"v-show",value:t.announces&&t.announces.length>0,expression:"announces && announces.length > 0"}],staticClass:"ui header"},[t._v("最新消息")]),t._l(t.announces,(function(n,a){return e("p",{staticClass:"announce"},[n.h?e("a",{attrs:{href:n.h,target:"_blank",rel:"noopener norefferer"},on:{click:function(e){return t.trackEvent("external_link",n.h)}}},[t._v(t._s(n.date)+"："),e("b",[t._v(t._s(n.text)+" ")])]):n.r?e("span",{attrs:{to:n.r},on:{click:function(e){return t.trackEvent("internal_link",n.r)}}},[t._v(t._s(n.date)+"："),e("b",[t._v(t._s(n.text)+" ")])]):e("span",[t._v(" "+t._s(n.date)+"："),e("b",[t._v(t._s(n.text)+" ")])])])})),e("div",{staticClass:"ui vertical buttons"},[e("router-link",{staticClass:"ui large purple button",attrs:{to:"/core"},on:{click:function(e){return t.trackEvent("external_link","Google Doc")}}},[t._v("Playback精華")]),e("router-link",{staticClass:"ui large pink button",attrs:{to:"/about"},on:{click:function(e){return t.trackEvent("internal_link","/about")}}},[t._v("從流動塑像開始")]),e("router-link",{staticClass:"ui large blue button",attrs:{to:"/faq"},on:{click:function(e){return t.trackEvent("internal_link","/faq")}}},[t._v("常見問題FAQ")])],1),e("h2",{staticClass:"ui header"},[t._v("Playback劇場簡介：")]),e("p",[t._v("Playback劇場(英文: Playback Theatre)是一種即興的互動式劇場，其演出並無預定的劇本，透過參與者口述的親身經驗，自願分享的心情和故事，在主持人的引導下，用即興有結構的表演形式，將故事呈現出來，並把演出回送給說故事的人和所有參與者。")]),e("br"),e("p",[t._v("這是一份相互分享的珍貴禮物，在Playback劇場的尊重與包容裡，共創安全的支持空間，能讓所有參與者充份體驗真實生命經驗交會的感動。❤️‍")]),e("cards")],2)])},p=[];const v=[{date:"2024-10-04",text:"十一月中壢夢田場初階工作坊【從心出發】11/09, 11/10開放報名中。",h:"https://docs.google.com/document/d/124oPKnQxmJ_hfXJzs2j96K1fUd7SUPxA2_k-GNm5E7Q/edit?usp=sharing"},{date:"2024-09-16",text:"十月華山文創場初階工作坊【從心出發】10/26, 10/27開放報名中(10/17截止)",h:"https://docs.google.com/forms/d/e/1FAIpQLSftyf6mdf2iX0Q-Pa57XoZ3n_9qasVM1p20ZcA8PSy-Pdwh5A/viewform?usp=sf_link"}];var b=n(555),C=n(517),k={name:"HelloWorld",props:{msg:String},components:{Cards:C["default"]},data(){return{announces:v,cards:b.k}},methods:{trackEvent(t,e){this.$gtag.event("click",{event_category:t,event_label:e})}}},_=k,g=(0,c.A)(_,h,p,!1,null,"0f1cd256",null),y=g.exports,w={name:"Home",components:{HelloWorld:y}},x=w,A=(0,c.A)(x,f,m,!1,null,null,null),P=A.exports;a.Ay.use(d.Ay);const E=[{path:"/",name:"Home",component:P},{path:"/act_history",name:"Act_History",component:()=>n.e(787).then(n.bind(n,787))},{path:"/statues",name:"Statues",component:()=>n.e(905).then(n.bind(n,905))},{path:"/hand_by_hand",name:"HandByHand",component:()=>n.e(208).then(n.bind(n,208))},{path:"/one_to_one",name:"OneToOne",component:()=>n.e(226).then(n.bind(n,226))},{path:"/pages",name:"Pages",component:()=>n.e(258).then(n.bind(n,258))},{path:"/4elems",name:"4Elems",component:()=>n.e(648).then(n.bind(n,648))},{path:"/free",name:"Free",component:()=>n.e(96).then(n.bind(n,96))},{path:"/faq",name:"FAQ",component:()=>n.e(590).then(n.bind(n,590))},{path:"/courses",name:"Courses",component:()=>n.e(426).then(n.bind(n,426))},{path:"/core",name:"Core",component:()=>n.e(667).then(n.bind(n,667))},{path:"/lev2",name:"Lev2",component:()=>n.e(357).then(n.bind(n,357))},{path:"/lev1",name:"Lev1",component:()=>n.e(552).then(n.bind(n,552))},{path:"/lev1_s",name:"Lev1_S",component:()=>n.e(129).then(n.bind(n,129))},{path:"/book",name:"Book",component:()=>n.e(618).then(n.bind(n,618))},{path:"/cards",name:"Cards",component:()=>Promise.resolve().then(n.bind(n,517))}],S=new d.Ay({mode:"history",routes:E});var O=S,j=n(73);a.Ay.config.productionTip=!1,a.Ay.use(j.Ay,{config:{id:"G-DWBX48QTJP",params:{send_page_view:!1}}},O),new a.Ay({router:O,render:t=>t(u)}).$mount("#app")}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,s){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],r=t[u][1],s=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(o=!1,s<i&&(i=s));if(o){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,r,s]}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{96:"514920b3",129:"976b775e",208:"3b09db3d",226:"f22c5280",258:"c0c5799a",357:"14130040",426:"882cf70c",552:"b2bad337",590:"ba8318b1",618:"010c00aa",648:"38882564",667:"8b397e36",787:"f298c0f4",905:"9ba53fd7"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{96:"78323910",129:"48e0cd87",208:"a0bdcc9c",226:"ed73ddbe",258:"401c04e3",357:"16f3d11c",426:"cc7de2a3",552:"1945c516",590:"e5caddb9",618:"5f799338",648:"e2882382",667:"2cf49bc6",787:"73d38dd2",905:"d7dc8b85"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="playback:";n.l=function(a,r,s,i){if(t[a])t[a].push(r);else{var o,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+s){o=d;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+s),o.src=a),t[a]=[r];var f=function(e,n){o.onerror=o.onload=null,clearTimeout(m);var r=t[a];if(delete t[a],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,r,s){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var o=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&n.type,o=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+": "+o+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=o,i.parentNode&&i.parentNode.removeChild(i),s(c)}};return i.onerror=i.onload=o,i.href=e,a?a.parentNode.insertBefore(i,a.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===t||s===e))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],s=r.getAttribute("data-href");if(s===t||s===e)return r}},a=function(a){return new Promise((function(r,s){var i=n.miniCssF(a),o=n.p+i;if(e(i,o))return r();t(a,o,null,r,s)}))},r={524:0};n.f.miniCss=function(t,e){var n={96:1,129:1,208:1,226:1,258:1,357:1,426:1,552:1,590:1,618:1,648:1,667:1,787:1,905:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=a(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,a){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var s=new Promise((function(n,a){r=t[e]=[n,a]}));a.push(r[2]=s);var i=n.p+n.u(e),o=new Error,c=function(a){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var s=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",o.name="ChunkLoadError",o.type=s,o.request=i,r[1](o)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,s,i=a[0],o=a[1],c=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(c)var u=c(n)}for(e&&e(a);l<i.length;l++)s=i[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},a=self["webpackChunkplayback"]=self["webpackChunkplayback"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(364)}));a=n.O(a)})();
//# sourceMappingURL=app.4f61730f.js.map
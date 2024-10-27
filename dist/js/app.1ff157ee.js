(function(){"use strict";var t={517:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"keep-neutral"},[e("div",{staticClass:"card-container"},[e("div",{staticClass:"ui row img-container"},[e("i",{staticClass:"chevron left icon",on:{click:t.prevCard}}),e("transition-group",{attrs:{name:"fade",tag:"div",id:"group"}},t._l(t.cards,(function(n,a){return e("img",{directives:[{name:"show",rawName:"v-show",value:t.randomCardIndex===a,expression:"randomCardIndex === index"}],key:n,staticClass:"card-image",attrs:{src:`/img/keep-nuetral/${n}.webp`,alt:n},on:{click:t.nextCard}})})),0),e("i",{staticClass:"chevron right icon",on:{click:t.nextCard}})],1),e("div",{staticClass:"ui row"},[e("p",{staticClass:"card-text"},[t._v(t._s(t.cards[t.randomCardIndex]))])])])])},s=[],r=n(555),i={name:"KeepNeutral",data(){return{cards:r.k,randomCardIndex:0}},mounted(){setInterval(this.nextCard,5e3)},methods:{prevCard(){this.randomCardIndex=(this.randomCardIndex-1+this.cards.length)%this.cards.length},nextCard(){this.randomCardIndex=(this.randomCardIndex+1)%this.cards.length}},created(){this.randomCardIndex=Math.floor(Math.random()*this.cards.length)}},o=i,c=n(656),l=(0,c.A)(o,a,s,!1,null,"5b179edc",null),u=l.exports},555:function(t,e,n){n.d(e,{k:function(){return a}});const a=["專注聆聽","保持中觀","持守界限","放下評斷","活在當下","當一面鏡子","讓感受流動","跳出框架","與變化共存","身心一體","相信自己","將錯就錯","信任同伴","美化空間","釋放能量"]},62:function(t,e,n){var a=n(471),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"ui menu thin-only",attrs:{id:"thin-nav"}},[e("button",{staticClass:"no-border ui item",on:{click:t.toggleSidebar}},[e("i",{staticClass:"icon bars"})]),e("router-link",{staticClass:"item",attrs:{to:"/"}},[e("i",{staticClass:"home icon"})]),e("router-link",{staticClass:"item",attrs:{to:"/courses"}},[e("i",{staticClass:"users icon"}),t._v("課程")]),e("router-link",{staticClass:"item",attrs:{to:"/core"}},[e("i",{staticClass:"suitcase icon"}),t._v("精華")]),e("router-link",{staticClass:"item",attrs:{to:"/faq"}},[e("i",{staticClass:"info icon"}),t._v("問題")])],1),e("div",{staticClass:"ui labeled icon menu fat-only"},[e("button",{staticClass:"no-border ui item",on:{click:t.toggleSidebar}},[e("i",{staticClass:"icon bars"}),t._v("側欄")]),e("router-link",{staticClass:"item",attrs:{to:"/"}},[e("i",{staticClass:"home icon"}),t._v("首頁")]),e("router-link",{staticClass:"item",attrs:{to:"/courses"}},[e("i",{staticClass:"users icon"}),t._v("課程")]),e("router-link",{staticClass:"item",attrs:{to:"/act_history"}},[e("i",{staticClass:"redo icon"}),t._v("活動回顧")]),e("router-link",{staticClass:"item",attrs:{to:"/core"}},[e("i",{staticClass:"suitcase icon"}),t._v("精華")]),e("router-link",{staticClass:"item",attrs:{to:"/book"}},[e("i",{staticClass:"book icon"}),t._v("相關書籍")]),e("router-link",{staticClass:"item",attrs:{to:"/faq"}},[e("i",{staticClass:"info icon"}),t._v("常見問題")])],1),e("div",{staticClass:"ui sidebar vertical menu",class:{hidden:!t.sidebarVisible},attrs:{id:"side-menu"}},[e("router-link",{staticClass:"item",attrs:{to:"/",exact:"",name:"home"}},[e("i",{staticClass:"home icon"}),t._v("首頁")]),e("router-link",{staticClass:"item",attrs:{to:"/core"}},[e("i",{staticClass:"suitcase icon"}),t._v("精華")]),e("router-link",{staticClass:"item",attrs:{to:"/courses"}},[e("i",{staticClass:"users icon"}),t._v("課程")]),e("router-link",{staticClass:"item",attrs:{to:"/act_history"}},[e("i",{staticClass:"redo icon"}),t._v("活動回顧")]),e("router-link",{staticClass:"item",attrs:{to:"/faq"}},[e("i",{staticClass:"info icon"}),t._v("常見問題")]),e("router-link",{staticClass:"item",attrs:{to:"/statues"}},[e("i",{staticClass:"users icon"}),e("span",[t._v("流動塑像")])]),e("router-link",{staticClass:"item",attrs:{to:"/one_to_one"}},[e("i",{staticClass:"sync icon"}),e("span",[t._v("一對對")])]),e("router-link",{staticClass:"item",attrs:{to:"/pages"}},[e("i",{staticClass:"book icon"}),e("span",[t._v("一頁頁")])]),e("router-link",{staticClass:"item",attrs:{to:"/4elems"}},[e("i",{staticClass:"music icon"}),e("span",[t._v("四元素")])]),e("router-link",{staticClass:"item",attrs:{to:"/free"}},[e("i",{staticClass:"birthday cake icon"}),e("span",[t._v("自由呈現")])]),e("router-link",{staticClass:"item",attrs:{to:"/book"}},[e("i",{staticClass:"book icon"}),e("span",[t._v("相關書籍")])])],1),e("div",{staticClass:"ui sidebar bg",class:{hidden:!t.sidebarVisible},on:{click:t.toggleSidebar}}),e("router-view"),e("div",{staticClass:"spacer"}),e("footer",{staticClass:"ui fixed bottom menu green"},[t._m(0),t._m(1),t._m(2),e("router-link",{staticClass:"item",attrs:{to:"/co_organize"}},[e("i",{staticClass:"users icon"}),t._v("協辦"),e("span",{staticClass:"fat-only"},[t._v("工作坊")])])],1)],1)},r=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"item",attrs:{href:"mailto:bestian@gmail.com"}},[e("i",{staticClass:"mail icon"}),e("span",{staticClass:"fat-only"},[t._v("bestian@gmail.com")])])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"item",attrs:{href:"https://www.facebook.com/profile.php?id=61563399543167",target:"_blank",rel:"noopener norefferer"}},[e("i",{staticClass:"facebook icon"}),t._v("FB粉專")])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"item",attrs:{href:"https://www.threads.net/@bestian_t"}},[e("i",{staticClass:"linkify icon"}),t._v("Threads連結")])}],i={name:"PlayBack",data(){return{sidebarVisible:!1}},methods:{toggleSidebar(){this.sidebarVisible=!this.sidebarVisible}}},o=i,c=n(656),l=(0,c.A)(o,s,r,!1,null,null,null),u=l.exports,d=n(173),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("HelloWorld",{attrs:{msg:"playback形式備忘"}})],1)},m=[],h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("div",{staticClass:"ui segment container"},[e("iframe",{staticClass:"thin-only",attrs:{src:"https://docs.google.com/presentation/d/1yP9zCer_5hOyJ4_xb06395_IqAeKlpfjFL2bnyD0PQQ/embed?start=true&loop=true&delayms=3000",frameborder:"0",width:"320",height:"240",allow:"autoplay",autoplay:"true",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"}}),e("iframe",{staticClass:"fat-only",attrs:{src:"https://docs.google.com/presentation/d/1yP9zCer_5hOyJ4_xb06395_IqAeKlpfjFL2bnyD0PQQ/embed?start=true&loop=true&delayms=3000",frameborder:"0",width:"640",height:"480",allow:"autoplay",autoplay:"true",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"}}),e("h2",{staticClass:"ui header"}),e("h2",{directives:[{name:"show",rawName:"v-show",value:t.announces&&t.announces.length>0,expression:"announces && announces.length > 0"}],staticClass:"ui header"},[t._v("最新消息")]),t._l(t.announces,(function(n,a){return e("p",{staticClass:"announce"},[n.h?e("a",{attrs:{href:n.h,target:"_blank",rel:"noopener norefferer"},on:{click:function(e){return t.trackEvent("external_link",n.h)}}},[t._v(t._s(n.date)+"："),e("b",[t._v(t._s(n.text)+" ")])]):n.r?e("span",{attrs:{to:n.r},on:{click:function(e){return t.trackEvent("internal_link",n.r)}}},[t._v(t._s(n.date)+"："),e("b",[t._v(t._s(n.text)+" ")])]):e("span",[t._v(" "+t._s(n.date)+"："),e("b",[t._v(t._s(n.text)+" ")])])])})),e("div",{staticClass:"ui vertical buttons"},[e("router-link",{staticClass:"ui large purple button",attrs:{to:"/core"},on:{click:function(e){return t.trackEvent("external_link","Google Doc")}}},[t._v("Playback精華")]),e("router-link",{staticClass:"ui large pink button",attrs:{to:"/about"},on:{click:function(e){return t.trackEvent("internal_link","/about")}}},[t._v("從流動塑像開始")]),e("router-link",{staticClass:"ui large blue button",attrs:{to:"/faq"},on:{click:function(e){return t.trackEvent("internal_link","/faq")}}},[t._v("常見問題FAQ")])],1),e("h2",{staticClass:"ui header"},[t._v("Playback劇場簡介：")]),e("p",[t._v("Playback劇場(英文: Playback Theatre)是一種即興的互動式劇場，其演出並無預定的劇本，透過參與者口述的親身經驗，自願分享的心情和故事，在主持人的引導下，用即興有結構的表演形式，將故事呈現出來，並把演出回送給說故事的人和所有參與者。")]),e("br"),e("p",[t._v("這是一份相互分享的珍貴禮物，在Playback劇場的尊重與包容裡，共創安全的支持空間，能讓所有參與者充份體驗真實生命經驗交會的感動。❤️‍")]),e("cards")],2)])},p=[];const v=[{date:"2024-10-28",text:"十二月初階工作坊【從心出發】12/08, 12/15籌備中：有興趣的朋友請先空出12/08, 12/15上午時段"},{date:"2024-10-04",text:"十一月中壢夢田場初階工作坊【從心出發】11/09, 11/10開放報名中。(10/31截止)",h:"https://docs.google.com/document/d/124oPKnQxmJ_hfXJzs2j96K1fUd7SUPxA2_k-GNm5E7Q/edit?usp=sharing"}];var b=n(555),C=n(517),_={name:"HelloWorld",props:{msg:String},components:{Cards:C["default"]},data(){return{announces:v,cards:b.k}},methods:{trackEvent(t,e){this.$gtag.event("click",{event_category:t,event_label:e})}}},k=_,g=(0,c.A)(k,h,p,!1,null,"3cca9f61",null),y=g.exports,w={name:"Home",components:{HelloWorld:y}},x=w,A=(0,c.A)(x,f,m,!1,null,null,null),P=A.exports;a.Ay.use(d.Ay);const E=[{path:"/",name:"Home",component:P},{path:"/co_organize",name:"CoOrganize",component:()=>n.e(230).then(n.bind(n,230))},{path:"/act_history",name:"Act_History",component:()=>n.e(506).then(n.bind(n,506))},{path:"/statues",name:"Statues",component:()=>n.e(869).then(n.bind(n,869))},{path:"/hand_by_hand",name:"HandByHand",component:()=>n.e(208).then(n.bind(n,208))},{path:"/one_to_one",name:"OneToOne",component:()=>n.e(498).then(n.bind(n,498))},{path:"/pages",name:"Pages",component:()=>n.e(258).then(n.bind(n,258))},{path:"/4elems",name:"4Elems",component:()=>n.e(15).then(n.bind(n,15))},{path:"/free",name:"Free",component:()=>n.e(431).then(n.bind(n,431))},{path:"/faq",name:"FAQ",component:()=>n.e(621).then(n.bind(n,621))},{path:"/courses",name:"Courses",component:()=>n.e(311).then(n.bind(n,311))},{path:"/core",name:"Core",component:()=>n.e(324).then(n.bind(n,324))},{path:"/lev2",name:"Lev2",component:()=>n.e(357).then(n.bind(n,357))},{path:"/lev1",name:"Lev1",component:()=>n.e(552).then(n.bind(n,552))},{path:"/lev1_s",name:"Lev1_S",component:()=>n.e(129).then(n.bind(n,129))},{path:"/book",name:"Book",component:()=>n.e(618).then(n.bind(n,618))},{path:"/cards",name:"Cards",component:()=>Promise.resolve().then(n.bind(n,517))}],O=new d.Ay({mode:"history",routes:E});var S=O,j=n(73);a.Ay.config.productionTip=!1,a.Ay.use(j.Ay,{config:{id:"G-DWBX48QTJP",params:{send_page_view:!1}}},S),new a.Ay({router:S,render:t=>t(u)}).$mount("#app")}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,s,r){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],s=t[u][1],r=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(o=!1,r<i&&(i=r));if(o){t.splice(u--,1);var l=s();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,s,r]}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{15:"84c658ea",129:"976b775e",208:"3b09db3d",230:"e43f83e0",258:"c0c5799a",311:"7c6811f4",324:"4ef3027f",357:"14130040",431:"77e4bd2d",498:"b9061c2b",506:"3d869676",552:"b2bad337",618:"40f6ebdf",621:"aa4c15e9",869:"d66dddc3"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{15:"d9788f4e",129:"48e0cd87",208:"a0bdcc9c",230:"b813f0f7",258:"401c04e3",311:"51ad3ef7",324:"b332d105",357:"16f3d11c",431:"ea762be9",498:"d101129e",506:"bae910da",552:"1945c516",618:"5f799338",621:"a244cc02",869:"947214b1"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="playback:";n.l=function(a,s,r,i){if(t[a])t[a].push(s);else{var o,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+r){o=d;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+r),o.src=a),t[a]=[s];var f=function(e,n){o.onerror=o.onload=null,clearTimeout(m);var s=t[a];if(delete t[a],o.parentNode&&o.parentNode.removeChild(o),s&&s.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,s,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var o=function(n){if(i.onerror=i.onload=null,"load"===n.type)s();else{var a=n&&n.type,o=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+": "+o+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=o,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=o,i.href=e,a?a.parentNode.insertBefore(i,a.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var s=n[a],r=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===t||r===e))return s}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){s=i[a],r=s.getAttribute("data-href");if(r===t||r===e)return s}},a=function(a){return new Promise((function(s,r){var i=n.miniCssF(a),o=n.p+i;if(e(i,o))return s();t(a,o,null,s,r)}))},s={524:0};n.f.miniCss=function(t,e){var n={15:1,129:1,208:1,230:1,258:1,311:1,324:1,357:1,431:1,498:1,506:1,552:1,618:1,621:1,869:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=a(t).then((function(){s[t]=0}),(function(e){throw delete s[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,a){var s=n.o(t,e)?t[e]:void 0;if(0!==s)if(s)a.push(s[2]);else{var r=new Promise((function(n,a){s=t[e]=[n,a]}));a.push(s[2]=r);var i=n.p+n.u(e),o=new Error,c=function(a){if(n.o(t,e)&&(s=t[e],0!==s&&(t[e]=void 0),s)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,s[1](o)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,r,i=a[0],o=a[1],c=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(c)var u=c(n)}for(e&&e(a);l<i.length;l++)r=i[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},a=self["webpackChunkplayback"]=self["webpackChunkplayback"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(62)}));a=n.O(a)})();
//# sourceMappingURL=app.1ff157ee.js.map
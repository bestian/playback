<template lang="pug">
#app
  .ui.menu.thin-only#thin-nav
    button.no-border.ui.item(@click="toggleSidebar")
      i.icon.bars
    router-link(class="item" to="/")
      i.home.icon
    router-link.item(to="/about_me")
      i.user.icon
      | 關於
    router-link(class="item" to="/courses")
      i.users.icon
      | 課程
    router-link.item(to="/core")
      i.suitcase.icon
      | 精華
    //router-link(class="item" to="/act_history")
      i.redo.icon
      span.fat-only 活動
      |回顧
    //router-link(class="item" to="/faq")
      i.info.icon
      | 問題
  .ui.labeled.icon.menu.fat-only
    button.no-border.ui.item(@click="toggleSidebar")
      i.icon.bars
      | 側欄
    router-link(class="item" to="/")
      i.home.icon
      | 首頁
    router-link.item(to="/about_me")
      i.user.icon
      | 關於我
    router-link(class="item" to="/courses")
      i.users.icon
      | 課程
    router-link(class="item" to="/act_history")
      i.redo.icon
      | 活動回顧
    router-link.item(to="/core")
      i.suitcase.icon
      | 精華
    //router-link(class="item" to="/book")
      i.book.icon
      | 相關書籍
    router-link(class="item" to="/faq")
      i.info.icon
      | 常見問題
    // router-link(class="item" to="/statues")
      i.users.icon
      | 流動塑像
  .ui.sidebar.vertical.menu#side-menu(:class="{'hidden': !sidebarVisible}")
    router-link.item(to='/', exact='', name="home")
      i.home.icon
      | 首頁
    router-link.item(to="/about_me")
      i.user.icon
      | 關於我
    router-link.item(to="/core")
      i.suitcase.icon
      | 精華
    router-link(class="item" to="/courses")
      i.users.icon
      | 課程
    router-link(class="item" to="/act_history")
      i.redo.icon
      | 活動回顧
    router-link(class="item" to="/faq")
      i.info.icon
      | 常見問題
    router-link(class="item" to="/statues")
      i.users.icon
      span 流動塑像
    router-link(class="item" to="/one_to_one")
      i.sync.icon
      span 一對對
    router-link(class="item" to="/pages")
      i.book.icon
      span 一頁頁
    router-link(class="item" to="/4elems")
      i.music.icon
      span 四元素
    router-link(class="item" to="/free")
      i.birthday.cake.icon
      span 自由呈現
    router-link(class="item" to="/book")
      i.book.icon
      span 相關書籍
  .ui.sidebar.bg(:class="{'hidden': !sidebarVisible}", @click="toggleSidebar")
  router-view
  .spacer
  footer.ui.fixed.bottom.menu.green
    a.item(href="mailto:bestian@gmail.com")
      i.mail.icon
      span.fat-only bestian@gmail.com
    a.item(href="https://www.facebook.com/profile.php?id=61563399543167", target="_blank", rel="noopener norefferer")
      i.facebook.icon
      | FB粉專
    a.item(href="https://blog.bestian.tw/", target="_blank", rel="noopener norefferer")
      i.edit.icon
      | 小巴的週記
      span.fat-only -個人部落格
    // a.item(href="https://www.threads.net/@bestian_t")
      i.linkify.icon
      | Threads連結
    router-link.item(to="/co_organize")
      i.users.icon
      | 協辦
      span.fat-only 工作坊
</template>

<script>

export default {
  name: 'PlayBack',
  data() {
    return {
      sidebarVisible: false
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible
    }
  },
  watch: {
    $route() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}

</script>

<style lang="scss">

@import "./sass/playback.scss";
@import "./sass/animation.scss";

.ui.menu {
  margin-top: 0 !important;
}

.no-border {
  border: none;
}

@media (max-width: 600px) {
  .fat-only {
    display: none !important;
  }
}

@media (min-width: 601px) {
  .thin-only {
    display: none !important;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.item.router-link-exact-active {
  background-color: #ccf !important;
}

html, body {
  padding: 0;
  margin: 0;
}

p {
  text-align: left;
  white-space: pre-line;
  padding: 0 1em;
}

/* CSS */
.ui.sidebar {
  transition: transform .3s ease, opacity .3s ease, visibility .3s ease !important;
  z-index: 1000;
  position: fixed;
  top: 0 !important;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #fff;
  opacity: 1;
  visibility: visible !important;
}

.ui.sidebar.bg {
  z-index: 2 !important; /* 設定一個低值 */
  background-color: rgba(180, 180, 180, 0.62); /* 確保有背景色 */
  width: 100vw;
  cursor: pointer;
}

.ui.sidebar.hidden {
  opacity: 0;
  visibility: hidden;
  transition: all 0s linear !important;
  transform: translateX(-100%); /* 隱藏時向左滑動 */
}

.filler {
  flex: 1;
}

footer.ui.fixed.bottom.menu.green {
  background-color: rgb(213, 255, 228) !important;
  top: auto;
  bottom: 0;
}

.spacer {
  height: 50px;
}

</style>

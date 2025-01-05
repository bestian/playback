<template lang="pug">
.hello
  .ui.segment.container
    h2.ui.header
      span.fat-only 歡迎一起
      span 說故事、聽故事、演故事
    cards
      // span.fat-only 歡迎來到
      // | 【從心出發】Playback劇場
      //.sub.header.left.aligned 「每個人的生命，都是可歌可泣的故事。
        br
        | 可歌，是因為有力量；可泣，是因為有磨難。
        br
        | 聆聽自我，面對真實，專注當下，生命便會成長」-- 小巴
    h2.ui.header(v-show="announces && announces.length > 0") 最新消息
    p.announce(v-for="(a, idx) in announces")
      a(v-if="a.h", :href="a.h", target="_blank", rel="noopener norefferer", @click="trackEvent('external_link', a.h)") {{a.date}}：
        b {{ a.text }} 
      span(v-else-if="a.r", :to="a.r", @click="trackEvent('internal_link', a.r)") {{a.date}}：
        b {{ a.text }} 
      span(v-else)  {{a.date}}：
        b {{ a.text }} 
    .ui.vertical.buttons
      router-link.ui.large.purple.button(to="/core", @click="trackEvent('external_link', 'Google Doc')") Playback精華
      router-link.ui.large.pink.button(to="/about", @click="trackEvent('internal_link', '/about')") 從流動塑像開始
      router-link.ui.large.blue.button(to="/faq", @click="trackEvent('internal_link', '/faq')") 常見問題FAQ
      // a.ui.black.button(href="https://www.threads.net/@bestian_t", target="_blank", rel="noopener norefferer", @click="trackEvent('external_link', 'Threads')") @Threads上新動態 
    
    h2.ui.header Playback即興劇場簡介：
    p Playback即興劇場(英文: Playback Theatre)是一種即興的互動式劇場，其演出並無預定的劇本，透過參與者口述的親身經驗，自願分享的心情和故事，在主持人的引導下，用即興有結構的表演形式，將故事呈現出來，並把演出回送給說故事的人和所有參與者。
    br
    p 這是一份相互分享的珍貴禮物，在Playback即興劇場的尊重與包容裡，共創安全的支持空間，能讓所有參與者充份體驗真實生命經驗交會的感動。❤️‍
    br
    router-link.ui.large.green.button(to="/courses", @click="trackEvent('internal_link', '/courses')") 瞭解更多
      i.chevron.right.icon
    .ui.divider

    h2.ui.header 本站QR Code

    img.qr(src="../assets/qr-playback.png")
  
    //  a.ui.large.green.button(href="https://line.me/ti/g/6n2qAsibyY", target="_blank", rel="noopener norefferer") 【從心出發】Line群組

    // img.qr(src="../assets/heart_playback_qr.jpeg")
    // audio#background-music(src="/Shiva.m4a", autoplay, loop)
  
</template>

<script>
import { announces } from '../data/announce.js';
import { cards } from '../data/cards.js';
import Cards from '../components/Cards.vue';


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Cards,
  },
  data () {
    return {
      announces: announces,
      cards: cards
    }
  },
  methods: {
    trackEvent(eventCategory, eventLabel) {
      this.$gtag.event('click', {
        event_category: eventCategory,
        event_label: eventLabel,
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.hello {
  color: rgb(64, 3, 206);
  padding-top: 2em;
}

p.announce {
  font-size: 18px;
  width: fit-content;
  display: block;
  margin: 1em auto;
}

img.qr {
  width: 140px;
  display: block;
  margin: 1em auto;
}

.left.aligned {
  display: block;
  text-align: left;
  width: fit-content !important;
  max-width: 420px;
  margin: .6em auto !important;
}

p {
  font-size: 18px;
  max-width: 680px;
  margin: 0 auto;
}

p.announce::first-letter {
  font-size: 1em;
}

img.qr {
  width: 140px;
  display: block;
  margin: 1em auto;
}

</style>

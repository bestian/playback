<template lang="pug">
.warmup-page
  .ui.segment.container
    .svg-hero
      svg(viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg")
        //- 舞台
        rect(x="10" y="110" width="140" height="6" rx="3" fill="#8e44ad")
        text(x="80" y="130" text-anchor="middle" font-size="11" fill="#8e44ad") 舞台
        //- 台上人物1 定格
        circle(cx="40" cy="55" r="10" fill="#9b59b6")
        line(x1="40" y1="65" x2="40" y2="90" stroke="#9b59b6" stroke-width="3")
        line(x1="40" y1="72" x2="25" y2="62" stroke="#9b59b6" stroke-width="2.5")
        line(x1="40" y1="72" x2="55" y2="65" stroke="#9b59b6" stroke-width="2.5")
        line(x1="40" y1="90" x2="32" y2="110" stroke="#9b59b6" stroke-width="2.5")
        line(x1="40" y1="90" x2="48" y2="110" stroke="#9b59b6" stroke-width="2.5")
        //- 台上人物2 定格
        circle(cx="100" cy="48" r="10" fill="#8e44ad")
        line(x1="100" y1="58" x2="100" y2="85" stroke="#8e44ad" stroke-width="3")
        line(x1="100" y1="68" x2="115" y2="55" stroke="#8e44ad" stroke-width="2.5")
        line(x1="100" y1="68" x2="85" y2="58" stroke="#8e44ad" stroke-width="2.5")
        line(x1="100" y1="85" x2="92" y2="110" stroke="#8e44ad" stroke-width="2.5")
        line(x1="100" y1="85" x2="108" y2="110" stroke="#8e44ad" stroke-width="2.5")
        //- 觀眾席
        circle(cx="175" cy="60" r="8" fill="#bdc3c7")
        circle(cx="175" cy="82" r="8" fill="#bdc3c7")
        circle(cx="175" cy="104" r="8" fill="#bdc3c7")
        //- 箭頭：觀眾上台
        path(d="M168 60 L155 60 L158 55 M155 60 L158 65" fill="none" stroke="#95a5a6" stroke-width="2")
        text(x="200" y="85" text-anchor="middle" font-size="11" fill="#95a5a6") 觀眾

    h1.ui.header 練習三：即興接力
    .ui.divider

    p 即興接力的方式是有一半的空間當舞台，其他的人坐在觀眾席。一次上去兩個人，或是三個人，或是特定固定的人數，上台後要擺出一個互相對應的姿勢，凍結三秒鐘之後，其中一個人下來，然後從觀眾席上另外一個人補上去，擺出一個新的姿勢來相互對應。

    p 觀眾席上的人可以排成一排，輪流上去，這樣子的接力就可以讓台上的畫面變成一個持續的流動，會產生很好的即興效果。

    p 這種練習很簡單而且很有趣，常常會有一些讓人開懷大笑的畫面。比方說兩個人互相踢來踢去，或者是一個人在祈禱，另外一個人在後面戳他的屁股之類的。但是我們不需要真的有肢體接觸，只要意思到了就好了。

    p 重點是在台上的人擺好姿式後就要定格，像結冰一樣。在這個過程當中我們也會練習結凍再解凍的技巧。

    .ui.divider
    router-link.ui.large.green.button(to="/warmups") ← 回到暖身活動

</template>

<script>
export default {
  name: 'W03Relay'
}
</script>

<style scoped lang="scss">
.warmup-page {
  padding: 2em 1em 4em;
}

.svg-hero {
  text-align: center;
  margin-bottom: 1.5em;
  svg {
    width: 320px;
    max-width: 90%;
    height: auto;
  }
}

h1.ui.header {
  color: #16a085;
  text-align: center;
}

p {
  font-size: 18px;
  text-align: left;
  max-width: 620px;
  margin: 0.6em auto;
  color: #2c3e50;
}
</style>

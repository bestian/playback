<template lang="pug">
.warmup-page
  .ui.segment.container
    .svg-hero
      svg(viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg")
        //- 椅子
        rect(x="70" y="70" width="60" height="8" rx="3" fill="#f39c12")
        rect(x="70" y="50" width="8" height="28" rx="2" fill="#f39c12")
        rect(x="122" y="50" width="8" height="28" rx="2" fill="#f39c12")
        rect(x="75" y="78" width="7" height="25" rx="2" fill="#e67e22")
        rect(x="118" y="78" width="7" height="25" rx="2" fill="#e67e22")
        rect(x="65" y="42" width="70" height="12" rx="4" fill="#f39c12")
        //- 對話泡泡
        ellipse(cx="100" cy="22" rx="30" ry="15" fill="none" stroke="#e67e22" stroke-width="2.5")
        polygon(points="92,36 100,44 108,36" fill="none" stroke="#e67e22" stroke-width="2.5")
        text(x="100" y="26" text-anchor="middle" font-size="13" fill="#e67e22") ！@＃
        //- 站著的人（對著椅子說話）
        circle(cx="30" cy="55" r="12" fill="#c0392b" opacity="0.7")
        line(x1="30" y1="67" x2="30" y2="95" stroke="#c0392b" stroke-width="3" opacity="0.7")
        line(x1="30" y1="78" x2="18" y2="85" stroke="#c0392b" stroke-width="2.5" opacity="0.7")
        line(x1="30" y1="78" x2="50" y2="68" stroke="#c0392b" stroke-width="2.5" opacity="0.7")
        line(x1="30" y1="95" x2="22" y2="118" stroke="#c0392b" stroke-width="2.5" opacity="0.7")
        line(x1="30" y1="95" x2="38" y2="118" stroke="#c0392b" stroke-width="2.5" opacity="0.7")

    h1.ui.header 練習六：空椅子
    .ui.divider

    p 對著空椅子說話，是一種釋放情緒的練習。

    p 把空椅子想像成是一個客體，可能是讓你生氣的人。然後對他說你想表達的憤怒的話，例如罵他是「混帳！」「白痴！」之類的。

    p 空椅子的練習也可以是團體的活動。

    p 由一個人出發，對著空椅子隨便講一句他想要講的話。第二個人在街上也講一句他想要講的話。每個人這樣子輪過去都講一句他想要講的話，並且擺出一個姿勢。

    p 這樣子的流動會變成一種即興接力。

    .ui.divider
    router-link.ui.large.green.button(to="/warmups") ← 回到暖身活動

</template>

<script>
export default {
  name: 'W06Chair'
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
    width: 280px;
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

<template lang="pug">
.warmup-page
  .ui.segment.container
    .svg-hero
      svg(viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg")
        //- 紙張
        rect(x="30" y="15" width="100" height="100" rx="5" fill="white" stroke="#bdc3c7" stroke-width="2")
        //- 各色筆畫（不同人畫的）
        path(d="M45 70 Q60 35 80 65 Q95 90 105 50" fill="none" stroke="#e74c3c" stroke-width="3")
        path(d="M40 55 Q65 75 95 45" fill="none" stroke="#3498db" stroke-width="2.5" opacity="0.7")
        circle(cx="60" cy="40" r="8" fill="#f39c12" opacity="0.4")
        circle(cx="85" cy="70" r="6" fill="#2ecc71" opacity="0.4")
        path(d="M50 85 Q70 78 90 88" fill="none" stroke="#9b59b6" stroke-width="2" opacity="0.6")
        //- 傳遞箭頭（圓形）
        path(d="M145 30 Q175 30 175 60 Q175 90 145 90 Q115 90 115 60 Q115 30 145 30" fill="none" stroke="#16a085" stroke-width="2" stroke-dasharray="6,4")
        polygon(points="148,28 145,22 152,28" fill="#16a085")
        //- 手和筆
        circle(cx="155" cy="45" r="6" fill="#e74c3c" opacity="0.6")
        line(x1="155" y1="51" x2="148" y2="60" stroke="#e74c3c" stroke-width="2")
        circle(cx="170" cy="75" r="6" fill="#3498db" opacity="0.6")
        line(x1="170" y1="81" x2="163" y2="90" stroke="#3498db" stroke-width="2")
        circle(cx="140" cy="85" r="6" fill="#2ecc71" opacity="0.6")
        line(x1="140" y1="91" x2="133" y2="100" stroke="#2ecc71" stroke-width="2")
        //- 標示
        text(x="145" y="120" text-anchor="middle" font-size="11" fill="#16a085") 輪流接力

    h1.ui.header 練習十：接力畫
    .ui.divider

    p 每位參與者拿到一張白紙，在上面自由畫下「一筆」，再傳給右手邊的人。大家接力把畫完成，轉完2~3圈之後，相互分享作品。

    p 如果人數較少，轉的圈數就可以彈性較多，讓畫面比較豐富。

    .ui.divider
    router-link.ui.large.green.button(to="/warmups") ← 回到暖身活動

</template>

<script>
export default {
  name: 'W10Drawing'
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
    width: 300px;
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
